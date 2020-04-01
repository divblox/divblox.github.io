# Advanced Training Exercise

In this exercise we will be continuing with the example established in the basic training exercise. We will be adding onto the data model, adding functionality and deepening into the workings of Divblox.

The new data model we will be making is as follows:

![ATE-data-model](_advanced-training-exercise-media/ATE-data-model.png)

As you can see, the data model is starting to look more complicated. Let's break this down:

-   Adding the `Note` entity:
    -   A note needs to be attached to a `Ticket`, and may have an attachment (linked ot the `FileDocument` entity)
    -   The attributes in the `Note` entity are NoteDescription and NoteCreatedDate
-   Adding the `SubTask` entity:
    -   Each ticket can have many subtask
    -   The attributes in the `SubTask` entity are Description, SubTaskStatus and SubTaskDueDate.
-   Updating the `Category` entity:
    -   Add the attributes CategoryParentId and HierarchyPath.
    -   This is done in order to allow for self referencing, where each category can have many subcategories.
    -   The added attributes allow for relative and absolute identification of the category relationships.

### Category Entity changes

Let us begin with the changes to the `Category` entity. As seen in the new data model, we have added new attributes. Our old CRUD components will not reflect the changes unless we add them manually (or create new CRUD components). In our case, this will not even be necassary as the attributes added need to be defined by the programmer. We want the CategoryParentId to be defined automatically depending on what category we were in when we clicked '+ Category'. Similarly with the HierarchyPath, we want this to be autmatically generated for each category based on the trail of parent IDs.

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

On the PHP side, we override the empty-by-default function `doAfterSaveActions()` to save both the CategoryParentId as well as the HierarchyPath. The constraining (i.e. parent) category object is loaded from the database, and if this is not null, it's ID is saved into the CategoryParentId attribute of the current category object. We then use the `getBreadCrumbsRecursive()` function to return an array of the parental hierarchy of categories. Adding slashes and spaces for readability while looping over the array yields the needed hierarchy path which we save into the database.

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

The below added code to the 'initFunctions()' function adds two event handlers. The first is to navigate back to the admin page when 'All Categories' is clicked, and the second is to reset the global constraing ID to the current category and refresh the page to load it up accordingly.

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

For this, we just create a new CRUD component, similar to the category data series, except that it is constrained by the current category ID, only displaying the child categories.

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

The `Note` section is a bit more complicated, for a few reasons. Firstly, we want to be able to attach files here, which need to be constrained to the currently opened ticket.
