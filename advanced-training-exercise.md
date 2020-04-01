# Advanced Training Exercise

In this exercise we will be continuing with the example established in the basic training exercise. We will be adding onto the data model, adding functionality and deepening into the workings of Divblox.

The new data model we will be making is as follows:

![ATE-data-model](_advanced-training-exercise-media/ATE-data-model.png)

As you can see, the data model is starting to look more complicated. Let's break this down:

-   Adding the `Note` entity:
    -   A note needs to be attached to a `Ticket`, and may have an attachment (linked to the `FileDocument` entity)
    -   The attributes in the `Note` entity are NoteDescription and NoteCreatedDate
-   Adding the `SubTask` entity:
    -   Each ticket can have many subtasks
    -   The attributes in the `SubTask` entity are Description, SubTaskStatus and SubTaskDueDate.
    -   SubTaskStatus will have the same drop down as TicketStatus
-   Updating the `Category` entity:
    -   Add the attributes CategoryParentId and HierarchyPath.
    -   This is done in order to allow for self referencing, where each category can have many subcategories.
    -   The added attributes allow for relative and absolute identification of the category relationships.

### Category Entity changes

Let us begin with the changes to the `Category` entity. As seen in the new data model, we have added new attributes. Our old CRUD components will not reflect the changes unless we add them manually (or create new CRUD components). In our case, this will not even be necassary as the attributes added need to be defined by the programmer. We want the CategoryParentId to be defined automatically depending on what category we were in when we clicked '+ Category'. Similarly with the HierarchyPath, we want this to be automatically generated for each category based on the trail of parent IDs.

![Category_Entity](_advanced-training-exercise-media/newCategory.png)

In the 'category_crud_create' component we can immediately add the code to autopopulate the two new attributes accordingly. In the javascript, we override the `saveEntity()` function to NOT set the global constrain ID to the current one. This is removed from both the success and failure functions. The rest of the code is default Divblox functionality.

```js
saveEntity() {
    let current_component_obj = this.updateValues();
    this.resetValidation();
    if (!this.validateEntity()) {
        return;
    }
    let parameters_obj = {
        f: "saveObjectData",
        ObjectData: JSON.stringify(current_component_obj),
        Id: this.getLoadArgument("entity_id")
    };
    if (this.constrain_by_array.length > 0) {
        this.constrain_by_array.forEach(function (relationship) {
            parameters_obj['Constraining' + relationship + 'Id'] = getGlobalConstrainById(relationship);
        })
    }
    dxRequestInternal(
        getComponentControllerPath(this),
        parameters_obj,
        function (data_obj) {
            if (this.getLoadArgument("entity_id") != null) {
                pageEventTriggered(this.lowercase_entity_name + "_updated", {"id": data_obj.Id});
            } else {
                pageEventTriggered(this.lowercase_entity_name + "_created", {"id": data_obj.Id});
            }
            this.loadEntity();
            this.resetValidation();
        }.bind(this),
        function (data_obj) {
            showAlert("Error saving " + this.lowercase_entity_name + ": " + data_obj.Message,
                "error",
                "OK",
                false);
        }.bind(this));
}
```

On the PHP side, we override the empty-by-default function `doAfterSaveActions()` to save both the CategoryParentId as well as the HierarchyPath. The constraining (i.e. parent) category object is loaded from the database, and if this is not null, it's ID is saved into the CategoryParentId attribute of the current category object. We then use the `getBreadCrumbsRecursive()` function (defined shortly) to return an array of the parental hierarchy of categories. Adding slashes and spaces for readability while looping over the array yields the needed hierarchy path which we save into the database.

```php
public function doAfterSaveActions($EntityToUpdateObj = null) {
    if (is_null($EntityToUpdateObj)) {
        return;
    }
    $ParentCategoryObj = Category::Load(
        $this->getInputValue("ConstrainingCategoryId", true)
    );
    if (!is_null($ParentCategoryObj)) {
        $EntityToUpdateObj->CategoryParentId = $ParentCategoryObj->Id;
        $EntityToUpdateObj->Save();
        $ReturnArr = ProjectFunctions::getBreadCrumbsRecursive($EntityToUpdateObj);
        $ReturnArr = array_reverse($ReturnArr);
        $HierarchyPathStr = "";
        foreach($ReturnArr as $CategoryLabel => $CategoryId) {
            if (strlen($HierarchyPathStr) > 0) {
                $HierarchyPathStr .= ' / ';
            }
            $HierarchyPathStr .= $CategoryLabel;
        }
        $EntityToUpdateObj->HierarchyPath = $HierarchyPathStr;
    } else {
        $EntityToUpdateObj->HierarchyPath = $EntityToUpdateObj->CategoryLabel;
    }
    $EntityToUpdateObj->Save();
}
```

The function `getBreadCrumbsRecursive()` was defined in the `ProjectFunctions` class to reduce code duplication, as we will be using it again when displaying thre breadcrumb trail on our 'category_update' page. This is just a recursive function that returns the parental hierarchy of the input category in a key-value pair array.

```php
public static function getBreadCrumbsRecursive(Category $CategoryObj = null, $BreadCrumbsArray = []) {
    if (is_null($CategoryObj)) {
        return $BreadCrumbsArray;
    }
    // Append a key-value pair to the return array
    $BreadCrumbsArray[$CategoryObj->CategoryLabel] = $CategoryObj->Id;
    // This will only return if the current category does not have a parent
    if (is_null($CategoryObj->CategoryParentId) || ($CategoryObj->CategoryParentId < 1)) {
        return $BreadCrumbsArray;
    }
    // Set the parent category ID, and rerun function with that ID
    $ParentCategoryObj = Category::Load($CategoryObj->CategoryParentId);
    return self::getBreadCrumbsRecursive($ParentCategoryObj, $BreadCrumbsArray);
}
```

Now that our create component correctly saves all necessary information to the database, let us set up a 'category_update' page where we will host 3 things:

-   Breadcrumb trail for subcategories
-   The update component
-   SubCategory list, based on the currently clicked category

#### Breadcrumbs

The breadcrumb basic component can be easily added via Divblox's web interface. The following code will be added to the 'category_update' page component's javascript and PHP.

The below added code to the 'initFunctions()' function adds two event handlers. The first is to navigate back to the admin page when 'All Categories' is clicked, and the second is to reset the global constraing ID to the clicked on category and refresh the page to load it up accordingly. Note how we attach the event to a click on the document, after which we specify where on the document the click should be. This is because if we set the event handler to listen directly for a click on '.category-breadcrumb', we will get unexpected output, because on page loadup, this subcomponent is not defined yet.

```js
initCustomFunctions() {
    super.initCustomFunctions();
    getComponentElementById(this, "AllCategories").on("click", function () {
        loadPageComponent("admin");
    });
    $(document).on("click", ".category-breadcrumb", function () {
        let category_id = $(this).attr("id").replace("CategoryId_", "");
        setGlobalConstrainById("Category", category_id);
        dxLog("Cat id: " + category_id);
        loadPageComponent("category_update");
    });
}
```

The `updateBreadCrumbs()` function handles the request to the server using Divblox's `dxRequestInternal()` function. The parameters we send to the backend are the function name we want to call and the category ID. The success function deals with formatting the returned array into HTML and displaying it.

```js
updateBreadCrumbs() {
    dxRequestInternal(getComponentControllerPath(this), {
            f: "getBreadCrumbs",
            category_id: getGlobalConstrainById("Category")
        },
        function (data_obj) {
            let html = "";
            let category_keys = Object.keys(data_obj.ReturnData);
            let count = 1;

            category_keys.forEach(function (key) {
                if (count === (category_keys.length)) {
                    html = "<li class=\"breadcrumb-item active\">" + key + "</li>";
                } else {
                    html = "<li class=\"breadcrumb-item\"><a id=\"CategoryId_" + data_obj.ReturnData[key] + "\" class=\"category-breadcrumb\" href=\"#\">" + key + "</a></li>";
                }
                dxLog("Key: " + key + "; Value: " + data_obj.ReturnData[key]);
                getComponentElementById(this, "CategoryBreadcrumbs").append(html);
                count++;
            }.bind(this));
        }.bind(this),
        function (data_obj) {
            // Failure function
        });
}
```

The `updateBreadCrumbs()` function is the called in the `reset()` function:

```js
reset(inputs) {
    setActivePage("category_update", "Category Update");
    super.reset(inputs);
    this.updateBreadCrumbs();
}
```

Now in the component.php file, we define the `getBreadCrumbs()` function referenced in the javascript. It receives the category ID, and loads the category by ID. We then call the `getBreadCrumbsRecursive()` function we defined in the class `ProjectFunctions` previously and order the array.

```php
   public function getBreadCrumbs() {
        $InputCategoryInt = $this->getInputValue("category_id", true);
        $CategoryObj = Category::Load($InputCategoryInt);
        $ReturnArr = ProjectFunctions::getBreadCrumbsRecursive($CategoryObj);
        $ReturnArr = array_reverse($ReturnArr);

        $this->setReturnValue("Result", "Success");
        $this->setReturnValue("ReturnData", $ReturnArr);
        $this->presentOutput();
    }
```

#### Update Component

This is the update CRUD component that we created from the Divblox web interface.

#### SubCategory List

For this, we just create a new CRUD component, similar to the category data series, except that it is constrained by the current category ID, only displaying the child categories. We do this by overriding the `getPage()` function to only query the constrained array of categories from the database.

```php
// Change logic in the getPage function
public function getPage() {
    // Code that remains the same

    //This is all we changed, only return categories with parent ID = currently constrained categoryId
    $QueryCondition = dxQ::Equal(
        dxQN::Category()->CategoryParentId,
        $this->getInputValue("ConstrainingCategoryId", true)
    );

    // Code that remains the same
}
```

On the javascript side, we change the behaviour of the `on_item_clicked()` function to reload the current page with the new category constraint ID.

With this, we have updated all the functionality needed for the `Category` entity as well as created a page to edit the categories as well as have visual aid with regard to the hierarchical structure of the categories.

### Ticket Changes

Now we will focus on the changes to the `Ticket` entity, which will be split into 3 parts:

-   Updating the 'ticket_crud_update' component with default `SubTask` and `Note` CRUD
-   Customising the subtasks
-   Customising the notes and attachments

#### Update Component Changes

We have already set up our 'create' and 'update' components to work in a streamline way, i.e. When creating a ticket, only having to input the ticket name and description, after which you are navigated to the ticket_update page where you can complete all other relevant fields. We now want to have a subtasks and notes data list in this component. We first create the data series CRUD components for each using the Divblox web interface, after which we just insert them into our ticket_crud_update' component (in their own row, taking up equal 6 columns each in bootsrap terms).

#### Customising the SubTask CRUD

The subtask are already constrained by the parent Ticket ID, so all we can do is make the HTML formatting a little bit more to our liking. You can make the input boxes fullwidth and arrange them in a bootstrap layout to your liking.

#### Customising the Note CRUD

The `Note` section is a bit more complicated, for a few reasons. Firstly, we want to be able to attach files here, which need to be constrained to the currently opened ticket. Let's start off by creating a 'note_attachment_uploader' component which we will tailor to our needs, based off of the default 'native_file_uploader' component. This is done via the component builder. Below is a outline of the `initFileUploader()` function. We overrride it's default functionality, leaving everything as is, except that we add one more parameter to the data in the upload, namely the 'note_id'.

```js
initFileUploader() {
   let uid = this.uid;
   let this_component = this;
   $('#'+uid+'_file_uploader').fileuploader({
      changeInput: // Default input

      onSelect: function(item) {
         // Default functionality

      },
      upload: {
         url: getComponentControllerPath(this_component),
         data: {f:"handleFilePost",
                AuthenticationToken:getValueFromAppState('dxAuthenticationToken'),
                note_id: this_component.getLoadArgument("note_id")},
         type: 'POST',
         enctype: 'multipart/form-data',
         start: false,
         synchron: true,
         beforeSend: function(item) {
            // Default functionality

         },
         onSuccess: function(result, item) {
            // Default functionality

         },
         onError: function(item) {
            // Default functionality

         },
         onProgress: function(data, item) {
            // Default functionality

         },
         onComplete: function() {
            // Default functionality

         },
      },
      onRemove: function(item) {
        // Default functionality
      },
      captions: {
         // Default captions
      },
      enableApi: true
   });
}
```

On the PHP side, we again ovveride the default functionality of the `handleFilePost()` function, adding the following code:

```php
public function handleFilePost() {
    // initialize FileUploader
    $FileUploader = new FileUploader('files', array(
        'uploadDir' => $this->UploadPath,
        'title' => 'auto'
    ));
    $this->setReturnValue("Result","Success");
    // call to upload the files
    $data = $FileUploader->upload();
    $this->setReturnValue("Message",$data);
    foreach($data["files"] as $file) {
        $FileDocumentObj = new FileDocument();
        $FileDocumentObj->FileName = $file["name"];
        $FileDocumentObj->Path = $file["file"];
        $FileDocumentObj->UploadedFileName = $file["old_name"];
        $FileDocumentObj->FileType = $file["type"];
        $FileDocumentObj->SizeInKilobytes = round(doubleval(preg_replace('/[^0-9.]+/', '', $file["size2"])),2);
        $FileDocumentObj->Save();

        // START NEW CODE
        $NoteObj = Note::Load($this->getInputValue("note_id", true));
        if (is_null($NoteObj)) {
            $FileDocumentObj->Delete();
        } else {
            if (!is_null($NoteObj->FileDocumentObject)) {
                $NoteObj->FileDocumentObject->Delete();
            }
            $NoteObj->FileDocumentObject = $FileDocumentObj;
            $NoteObj->Save();
        }
        // END NEW CODE
    }
    foreach($data as $key=>$value) {
        $this->setReturnValue($key,$value);
    }
    $this->presentOutput();
}
```

This just ties the filed uploaded to the note it is attached to and makes sure that when deleting a note you do not orphan any file uploads. We also remove the return output from the `handleRemoveFile()` function, leaving it as:

```php
public function handleRemoveFile() {
    $FileDocumentObj = FileDocument::QuerySingle(dxQ::Equal(dxQueryN::FileDocument()->FileName, $this->getInputValue("file")));
    if (!is_null($FileDocumentObj)) {
        $FileDocumentObj->Delete();
    }
}
```

Now that we have prepared our file uploader, let us dig into the actual `Note` CRUD. FIrstly, we want to follow a similar approach as with the `Ticket` and `Category` create CRUD components, whereby the initial create only requires limited fields, after which you are navigated to the update component to complete the process. We do this by shifting the 'note_created' case of the `eventTriggered()` function in the 'note_crud' component to above the 'note_clicked' case, as before.

We can then add the two buttons we want via the component builder. These are:

-   A modal popup housing the custom file uploader
-   A download link, appearing only when there is actually an attachment.

First, we add a row with two columns in the update component. We then add the modal using the component builder, and change relevant text and button text as well as make the modal button have classes 'fullwidth' and 'btn-link'.

NOw, in the javascript, we firstly make sure that the modal will alwasy be closed until clicked by adding a line of code to hide the modal in the component's reset function.

```js
reset(inputs,propagate) {
   if (typeof inputs !== "undefined") {
      this.setEntityId(inputs);
   }
   super.reset(inputs,propagate);
   getComponentElementById(this,"HPxt9_modal").modal("hide");
}
```

We will then also add some functionality to the modal skeleton provided by Divblox.

In the `initFunctions()` function, we add the following to the "show.bs.modal" case, noting the additional 'note_id' parameter we specified earlier.

```js
loadComponent(
    "system/note_attachment_uploader",
    this.getUid(),
    "XLGKu",
    { note_id: this.getEntityId() },
    true
);
```

This just makes sure that we load our file uploader and it is already constrained to the note we want to attach the file/image to. We also want to overrride the `onAfterLoadEntity()` function to populate our right column with a download link if and only if the attachment exists.

```js
onAfterLoadEntity(data_obj) {
   // TODO: Override this as needed;
   getComponentElementById(this, "DownloadWrapper").html("");
   if (typeof data_obj.AttachmentPath !== "undefined") {
      if (data_obj.AttachmentPath.length > 0) {
         getComponentElementById(this, "DownloadWrapper").html('<a href="'+data_obj.AttachmentPath+'" target="_blank" class="btn btn-link fullwidth">Download Attachment</a>');
      }
   }
}
```

Now for the backend side. Firstly, we override the default `getObjectData()` function. What we added here is backend validation for the existance and validity of the attachment by checking the relational entity `FileDocument`. The only return values the front end can receive is an empty string or a valid attachment path string that points to a file that exists in the database.

```php
public function getObjectData() {
    $EntityObj = $this->EntityNameStr::Load(
        $this->getInputValue("Id",true)
    );
    $EntityJsonDecoded = array();
    $AttachmentPathStr = "";
    if (!is_null($EntityObj)) {
        $EntityJsonDecoded = json_decode($EntityObj->getJson());
        if (!is_null($EntityObj->FileDocumentObject)) {
            if (file_exists(DOCUMENT_ROOT_STR.SUBDIRECTORY_STR.$EntityObj->FileDocumentObject->Path)) {
                $AttachmentPathStr = ProjectFunctions::getBaseUrl().$EntityObj->FileDocumentObject->Path;
            }
        }
    }
    $this->setReturnValue("Object",$EntityJsonDecoded);
    foreach ($this->IncludedRelationshipArray as $Relationship => $DisplayValue) {
        $RelationshipList = $this->getRelationshipList($EntityObj,$Relationship);
        $this->setReturnValue($Relationship."List",$RelationshipList);
    }
    $this->setReturnValue("Result","Success");
    $this->setReturnValue("Message","");
    $this->setReturnValue("AttachmentPath", $AttachmentPathStr);
    $this->presentOutput();
}
```

Secondly, we need to make sure that if we delete any notes, we do not accidently leave behind any orphaned files/images. This is done using Divblox's `doBeforeDeleteActions()` function.

```php
public function doBeforeDeleteActions($EntityToUpdateObj = null) {
    if (is_null($EntityToUpdateObj)) {
        return;
    }
    if (!is_null($EntityToUpdateObj->FileDocumentObject)) {
        $EntityToUpdateObj->FileDocumentObject->Delete();
    }
}
```
