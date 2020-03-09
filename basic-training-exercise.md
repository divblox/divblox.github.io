# Basic Training Exercise

This exercise assumes that you have managed to configure your Divblox project and that you understand the basic concepts.
If you are not sure that you do understand the basics, you can look at the [common examples](common-examples.md) and perhaps first try the 'Hello World' exercise.

> In this exercise we will go into a bit more detail about the main Divblox concepts that are used in every project.
> These concepts include:

-   Data modeling
-   The Divblox ORM (Object Relational Mapping)
-   Interaction between a component's front-end and back-end
-   Component and object security
-   Exposing an API

### Introduction

In this training exercise, we will be creating a basic ticketing system that will allow users to create and manage "tickets". To allow users to interact with our tickets, we will generate CRUD (Create, Read, Update, Delete) components.

Additionally, we will create the following components:

-   A page where full CRUD of tickets and categories is done
-   A page where we reuse the CREATE component for a ticket to allow the user to create tickets in a simple way

We will also be building some custom functionality to demonstrate how to communicate between the front-end and back-end of a Divblox application.

Finally, we will also learn how to secure our components and data model entities, as well as how to expose our functionality via the Divblox API layer.

### Step 1 - Data Model

We will be creating a data model with the following entities and attributes:

-   **Ticket**: TicketName, TicketDescription, TicketDueDate, TicketUniqueId, TicketStatus
-   **Category**: CategoryLabel

This can be represented as follows:

![UML diagram](_basic-training-media/training-exercise1.png)

If you need a refresh on Divblox data modelling, click [here](data-modeler.md). Below is a walk-through of how to add the necessary entities using Divblox's Data Modeller.

<video id="TrainingExerciseStep1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-1-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 2 - CRUD Components

Now that our data model is created and synchronized with our database,
let's generate some CRUD components (using the component builder) for `Ticket` and `Category`. Below is a walk-through of how to create full CRUD functionality for the `Category` entity.

<video id="TrainingExerciseStep2.1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-2-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep2.1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep2.1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

> And now we will create the CRUD functionality for the `Ticket` entity, which although more complex, is just as easy with Divblox.

<video id="TrainingExerciseStep2.2" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-2-2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep2.2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep2.2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

> When checking the `Validate` checkbox, Divblox automatically notifies the user that input is required. Further validations can be added at a later stage.

Notice that in both examples we did not tick the `Constrain To` checkbox. If you constrain by a certain attribute, you are filtering to see only results that satisfy that criteria. An example would be to constrain Tickets by the current user account. This will display only tickets created by the current user. These constraints can only be done with entities that have a singular relationship. Singular relationships mean that an entity instance is linked to one, and only one, instance of another entity. E.g. Each ticket can only be linked to one account at any given time.

![Singular relationship](/_basic-training-media/basic_training_exercise3.1.png)

This logic also applies when using 'create' and 'update' functionality and using the `Constrain By` checkbox. An example here would be to automatically link a ticket to the current user upon creation.

You may want to change the display of certain attributes, in all of the components they feature. In our example, let's say we have a set predetermined list of ticket statuses the user should be able to chose from. This can be manually done in the `data_lists.json` and `entity_definitions.json` files. A walk-through of this is shown in the below video.

<video id="TrainingExerciseStep2.3" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-2-3.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep2.3')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep2.3')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 3 - Page Components

In order for us to be able to use our newly generated CRUD components, or any other component for that matter, we need to put them inside pages.
Pages are also just components, but they can be navigated to by the user in the browser, while individual components can not.

!>A component is considered a page component when it is located in the "pages" grouping (the folder /project/components/pages/[component_name])

The pages we will build for this exercise are:

-   An admin page where our full CRUD components can live
-   A "New Ticket" page where users can create new tickets

To do this we will use a pre-made page template with a side navbar. As you will see, the navigation bar is pre-populated with links we will later override or delete to suite our needs.

<video id="TrainingExerciseStep3.1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-3-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep3.1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep3.1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

Now we can create the 'Tickets' page where users can create tickets. Note that we are not creating any new functionality, just reusing the 'create' component previously generated and placing it on its own page.

<video id="TrainingExerciseStep3.2" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-3-2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep3.2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep3.2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 4 - Navigation bar

Ok, we now have components that allow us to create our data, as well as pages to view them on. We will now update the side navigation bar to function as we want it to. Notice how, in this video, we edit the component code in our IDE (any IDE/text editor of your choice). The preferred way is to use an IDE, but for quick fixes like changing the HTML layout of our page we can use Divblox's built-in code editor. The process followed here is as follows:

1.  Name your page components
2.  Change the navbar links to what you need them to be
3.  Add JavaScript to link it to the page in question

<video id="TrainingExerciseStep4" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-4-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep4')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep4')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 5 - Global Functions

For the purposes of this exercise, we want to assign a unique ID to every ticket. This will allow us later on to retrieve
information about our ticket via an API. To generate this unique ID, we will make use of a global function call.

!> Global functions are defined for functionality that will be used multiple times, reducing code duplication

> We will create the unique ID in the backend, as we need to verify whether or not it is indeed unique by checking our database.

![FLowchart of frontend/backend communication](_basic-training-media/basic-training-exercise-step5.png)

#### Step 5.1 - Adding button

Add the button in our `ticket_crud_create` component that will generate a unique ID and populate the input box. We can do this through the Divblox web interface or in the source code.

Below is a video running through step 1:

<video id="TrainingExerciseStep5.2" muted="" playsinline="" preload="auto" autoplay>

  <source src="_basic-training-media/bte-5-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep5.2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep5.2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

#### Step 5.2 - Create global function

Create the global php function that will generate the unique ID in `project_functions.php`.

#### Step 5.3 - Call global function

Call the global function from `component.php`, sending information to the front end.

Below is a video running through step 2 and 3:

<video id="TrainingExerciseStep5.3" muted="" playsinline="" preload="auto" autoplay>

  <source src="_basic-training-media/bte-5-2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep5.3')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep5.3')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

Here is the code added into the class ProjectFunctions, in `project/assets/php/project_functions.php`.

```php
public static function getNewTicketUniqueId() {
        $CandidateStr = self::generateRandomString(24);
        $DoneBool = false;
        while(!$DoneBool) {
            // Divblox query language to load a ticket from the database,
            // based on the UniqueId field
            $ExistingTicketCount = Ticket::LoadByTicketUniqueId($CandidateStr);
            if ($ExistingTicketCount == 0) {
                $DoneBool = true;
            } else {
                $CandidateStr = self::generateRandomString(24);
            }
        }
        return $CandidateStr;
    }
```

And the code added into the `ticket_crud_create` component.php file:

```php
// The function on our component controller that will return a new unique ticket ID for us.
// This function is executed when we pass "getNewTaskUniqueId" as
// the value for "f" from our component JavaScript
public function getNewTicketUniqueId() {
        // setReturnValue() sets the values in an array that will be returned as JSON
        //when the script completes. We always need to set the value for "Result" to either
        // "Success" or "Failed" in order for the component JavaScript to know
        // how to treat the response
        $this->setReturnValue("Result","Success");
        // It is always a good idea to populate a "Message" for the front-end
        $this->setReturnValue("Message", "New unique ID created");
        // Here we set the value of any additional parameters to return
        $this->setReturnValue("TicketId", ProjectFunctions::getNewTicketUniqueId());
        // "presentOutput()" returns our array as JSON and stops any
        // further execution of the current php script
        $this->presentOutput();
    }
```

#### Step 5.4 - Add JavaScript

Add the JavaScript functionality that auto-populates the input box with the newly generated unique ID in `component.js`.

Below is a video of step 4:

<video id="TrainingExerciseStep5.4" muted="" playsinline="" preload="auto" autoplay>

  <source src="_basic-training-media/bte-5-3.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep5.4')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep5.4')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

The code added into the `initCustomFunctions` function was:

```js
// dxRequestInternal() is the global function used to communicate
// from the component's JavaScript to its back-end php component
dxRequestInternal(
    // The first parameter tells the function where to send the request
    // getComponentControllerPath(this) returns the path to current component's php script
    getComponentControllerPath(this),
    // Tell component.php which function to execute
    { f: "getNewTaskUniqueId" },
    function(data_obj) {
        // Success function
        getComponentElementById(this, "TicketUniqueId").val(data_obj.TaskId);
    }.bind(this),
    function(data_obj) {
        // Fail function
    }.bind(this)
);
```

### Step 6 - Security

It is important to understand how Divblox user roles are used to control access to the application. Divblox has two forms of access.

-   _Component access_ allows the user to view the components
-   _Data Model_ access gives the user permissions to perform CRUD operations on specific entities defined in the data model.

By default, there are two user roles.

1. Administrator - Has access to all components and full CRUD functionality.
2. User - This is the user role allocated to anyone who registers on your app. The default access is only to your profile and account.

Any user that is not authenticated is treated as "Anonymous" - No access, gets redirected to the anonymous landing page.

!> Additional user roles can be defined in the data modeller.

The Component default settings are as follows:

![Component Access](_basic-training-media/basic-training-exercise-component-access.png)

And the Data Model settings seen below. It is also important to note that by default users are able to `create` and `read` data, even if not explicitly stated in the `$AccessArray`.

![Data Model Access](/_basic-training-media/basic-training-exercise-data-model-access.png)

For our exercise we created 2 pages (The 'admin' and 'new ticket' pages). Let's assume that we only want administrators to access the admin page.

You can access the register page by navigating to `[your_project_root]/?view=register`. New users are registered with the user role "User" by default.

!> It is also good practice to test user role access in incognito/private mode, as you are typically logged in as a Divblox admin (dxAdmin) most of the time in your application and this may cause confusion.

<video id="TrainingExerciseStep6.1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-6-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep6.1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep6.1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

As you can see, our new user is unable to view any of the pages we built. This is because he does not have component access to the components on those pages. We will change that in the `ComponentRoleBasedAccessArray::$AccessArray`.

In the below video we will firstly give our user full access to any `Ticket` and `Category` components. This will allow us to see how the _Data Model_ access works (we will observe this on our admin page). Once the _Data Model_ access is configured, we will then give our user access only to the `create` components of both `Ticket` and `Category`, allowing the user to view the _New Ticket_ page, but not the admin page.

<video id="TrainingExerciseStep6.2" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-6-2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep6.2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep6.2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

It is worth noting that this is a basic example to demonstrate how Divblox handles user access. As you may have seen above, there is no need to change the _Data Model_ access of our user to be able to `update` and `delete` as he will never be able to get to the admin page to do this.

### Step 7 - Exposing an API

Now that we have all the groundwork completed, let's provide the world with an API endpoint that will allow us to do some custom functionality on our tickets. To do this, we will copy the provided `api_example` endpoint and modify it for our use case. The API functionality we want to achieve is as follows:

-   Allow a user to provide us with an array of unique ticket IDs as input
-   Select only the ticket descriptions from the tickets
-   Merge all of the ticket descriptions into the first ticket (initial unique ID)
-   Delete the remaining tickets
-   Return the new merged ticket as output

We will be using a program called 'PostMan' to test our API functionality. It comes pre-installed on the Divblox VM image.

!>Divblox automatically handles the routing for your API endpoint. API endpoints are available at [your_project_root]/api/[endpoint_name]

Below we will briefly explore the `api_example` functionality, how to navigate the URL and what the expected output looks like.

<video id="TrainingExerciseStep7.1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/basic-training-exercise7.1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep7.1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep7.1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

To proceed, we will create a file `basic_training_exercise.php` in `project/api` and mimic the basic structure of an API endpoint like in `api_example.php`. Firstly, we add an API operation with function name`mergeTickets();`.

In the `mergeTickets();` function we code the following logic:

-   check if the input is valid JSON
-   check if the master unique ID exists
-   check if the master unique ID is valid
-   check if there are more than two IDs
-   if there is more than two IDs:
    -   loop through the valid IDs
    -   perform a merging of the ticket descriptions
    -   delete each ticket after its description is merged
-   save the results into the database
-   present output to front end

The code added into our 'basic_training_exercise.php' endpoint (`/project/api/basic_training_exercise.php`) is the following:

```php
<?php
require("../../divblox/divblox.php");
// Start by declaring your operations and then calling the initApi function.
// This is important for your API documentation to be automatically generated at run-time
PublicApi::addApiOperation("mergeTickets",
    // Specify the various input parameters as an array
    ["input_ids"],
    // Specify the various expected output parameters as an associative array
    ["merged_ticket" => "[JSON object representing new merged ticket]"],
    // Give your operation a name
    "Merge Tickets",
    // Give your operation a description
    "This operation will merge an array of tickets into a combined ticket with the unique
    ID of the first ticket. input_ids should be a JSON encoded array of unique ticket IDs");

// Describes the "entire" API endpoint
PublicApi::initApi("API endpoint to demonstrate our basic training exercise functionality",
                  "Basic Training Exercise");
// Operation
function mergeTickets() {
    // More information on functions available in the public API class
    // is provided in the API documentation section
    $InputIdArrayStr = PublicApi::getInputParameter("input_ids");
    if (!ProjectFunctions::isJson($InputIdArrayStr)) {
        PublicApi::setApiResult(false);
        PublicApi::addApiOutput("Message","Invalid value for input_ids provided.");
        PublicApi::printApiResult();
    }
    $InputIdArray = json_decode($InputIdArrayStr);
    if (!isset($InputIdArray[0])) {
        PublicApi::setApiResult(false);
        PublicApi::addApiOutput("Message","Invalid value for input_ids provided.");
        PublicApi::printApiResult();
    }
    $MasterTicketObj = Ticket::LoadByTicketUniqueId($InputIdArray[0]);
    if (is_null($MasterTicketObj)) {
        PublicApi::setApiResult(false);
        PublicApi::addApiOutput("Message","Invalid input ID for master ticket");
        PublicApi::printApiResult();
    }
    $InputIdArraySizeInt = ProjectFunctions::getDataSetSize($InputIdArray);
    if ($InputIdArraySizeInt < 2) {
        PublicApi::setApiResult(true);
        PublicApi::addApiOutput("merged_ticket", json_decode($MasterTicketObj->getJson()));
        PublicApi::printApiResult();
    }
    for ($i = 1; $i < $InputIdArraySizeInt; $i++) {
        $TicketObj = Ticket::LoadByTicketUniqueId($InputIdArray[$i]);
        if (is_null($TicketObj)) {
            continue;
        }
        $MasterTicketObj->TicketDescription .= $TicketObj->TicketDescription;
        $TicketObj->Delete();
    }
    $MasterTicketObj->Save();
    PublicApi::setApiResult(true);
    PublicApi::addApiOutput("merged_ticket", json_decode($MasterTicketObj->getJson()));
    PublicApi::printApiResult();
}
?>
```

Once we have defined our endpoint, we can test to see if everything works. Note that this specific API operation updates and deletes data in our database, we need to update the `Data Model` permissions so that 'any' users can 'update' and 'delete' (Recall that default permissions are only to 'create' and 'read'). Once this is done, our API operation should be set up and permissions for operations granted. We use Postman this time, as it makes it easier to input parameters and has a great user interface.

<video id="TrainingExerciseStep7.3" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-7-3.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep7.3')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep7.3')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 8 - Sorcery

This is the longest step in this exercise, but is vitally important in understanding how to manipulate and extract information from your database using Divblox's built-in query language, `dxQuery`. You will create a custom component, which will be responsible for 6 diverse query functions that will hopefully give you a strong foundation in how to use `dxQuery` efficiently. The section is broken down into 8 subsections, the first dedicated to setting up your custom component, and the remaining 7 dedicated to the 7 functions we will be making. In this last step, we will have to change our data model slightly. Let us include the `TicketCount` attribute into the `Category` entity, which will represent the total number of tickets in the category in question. Using Divblox's data modeller, this process is optimized and all the user needs to do is add the attribute and sync to the database, which update the database and regenerates all the classes and necessary functionality code. We set the attribute type to `INT` as the number of tickets in a category can only be a positive whole number.

#### Step 1 - Custom Component Setup

Create a custom component with two equally sized columns. In the left column we will house three elements, namely a drop down list of functions to select, an additional input box and a button to execute the chosen functionality. Below is a video walk through of the process:

<video id="TrainingExerciseStep8.1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_basic-training-media/bte-8-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep8.1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep8.1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

Next, we will set up our component JavaScript to send the selected function (and include the additional output if required) to the backend, and return whatever output the function provided to the front end.

we will again be using the `dxRequestInternal` function for backend/frontend communication.

The code that was replaced the default 3 second loading function for our button is:

```javascript
dxRequestInternal(
    getComponentControllerPath(this),
    {
        // We specifically named the values of the drop down the same as
        // the functions to execute, so we can just use the value of input box
        f: getComponentElementById(this, "8LSBQ_FormControlSelect").val(),
        additional_input: getComponentElementById(
            this,
            "H7u7b_FormControlInput"
        ).val()
    },
    function(data_obj) {
        // Success Function
        // Returns (in JSON format) backend function output
        // in div with id="ResultWrapper"
        getComponentElementById(this, "ResultWrapper").html(
            JSON.stringify(data_obj.ReturnData)
        );
    }.bind(this),
    function(data_obj) {
        // Failure Function
        // Nothing set here right now
    }.bind(this),
    false,
    // Set loading text of button while function executes
    getComponentElementById(this, "dfVzo_btn"),
    "Executing " +
        getComponentElementById(this, "8LSBQ_FormControlSelect").val()
);
```

#### Step 2 - Function 1

<strong>Generate data: This function will generate a bunch of categories & accounts, then it will generate a bunch of tickets, linked to a random category with a random status, account & due date </strong>

Here we use the built in PHP function `rand()`, as well as a bit of Divblox functionality, including the `dxDateTime()` class as well as the `generateRandomString()` and `generateTimeBasedString()` functions. If you are not comfortable with these, you can refer to the class/function definitions.

```php
public function Function1() {
    // Set how many of each we want to generate
    $AccountDataSize = 50;
    $CategoryDataSize = 8;
    $TicketDataSize = 500;
    $TicketStatusArray = ["New", "In Progress", "Backlog", "Urgent", "Completed"];

    // Note that you need an initial account and category for this to work
    for ($i = 0; $i < $TicketDataSize; $i++) {
        // Fill the Ticket object with necessary values and Save in to database
        $TicketObj = new Ticket();
        $TicketObj->TicketName = ProjectFunctions::generateRandomString(8);
        $TicketObj->TicketDescription = ProjectFunctions::generateRandomString(100);
        $TicketObj->TicketStatus = $TicketStatusArray[rand(0,4)];
        // dxDateTime has prebuilt functionality for wokring with dates,
        // all we are doing is making the DueDate a random date between
        // tomorrow and 20 days from now.
        $TicketObj->TicketDueDate = dxDateTime::Now()->AddDays(rand(1,20));
        // Load a random value from existing Account and Category Entities
        $TicketObj->AccountObject = Account::Load(rand(0,Account::CountAll()-1));
        $TicketObj->CategoryObject = Category::Load(rand(0,Category::CountAll()-1));
        $TicketObj->Save();
        if ($i >= $AccountDataSize) {
            continue;
        }
        // Fill the Account object with necessary values and Save in to database
        $AccountObj = new Account();
        $AccountObj->FirstName = ProjectFunctions::generateRandomString(8);
        $AccountObj->LastName = ProjectFunctions::generateRandomString(8);
        $AccountObj->FullName = $AccountObj->FirstName." ".$AccountObj->LastName;
        $AccountObj->EmailAddress = ProjectFunctions::generateTimeBasedRandomString();
        $AccountObj->Username = $AccountObj->EmailAddress;
        $AccountObj->Save();
        if ($i >= $CategoryDataSize) {
            continue;
        }
        //Fil the Category object with necessary values and Save in to database
        $CategoryObj = new Category();
        $CategoryObj->CategoryLabel = ProjectFunctions::generateTimeBasedRandomString();
        $CategoryObj->Save();
    }
    // Prepare the result we will send to the front end
    $this->setReturnValue("Result", "Success");
    $this->setReturnValue("ReturnData", "$TicketDataSize Tickets created");
    $this->presentOutput();
}
```

We should now be set! Our custom component is ready, our input selection is set up and we have a div to display our output. The JavaScript is also defined. What remains now is to define our 7 functions.

#### Step 3 - Function 2

<strong>Return All Tickets In the category 'Personal' </strong>

#### Step 4 - Function 3

<strong>Return all tickets where the Account's first name is John and the ticket status is "In Progress" </strong>

#### Step 5 - Function 4

<strong>Return all tickets that have a status of "Completed" for the current month </strong>

#### Step 6 - Function 5

<strong>Return a list of "Account" full names with a count of tickets that they each currently have "In Progress" </strong>

#### Step 7 - Function 6

<strong>The beast: Return a list of "Account" email addresses. For each account, show an array of categories. For each "Category" in the array, show the total count of all tickets for that category as well as the count for the specific account </strong>

You will end up with a nested array of objects, structured something like this:

![Function 6 diagram ](_basic_training-medil/../_basic-training-media/bte-step8-1.png)

#### Step 8 - Function 7

<strong>Generate data: This function will generate a bunch of categories & accounts, then it will generate a bunch of tickets, linked to a random category with a random status, account & due date </strong>

### Summary

In this exercise you learned about all the basic elements of a Divblox project. If you understand step 1 - 7 completely, you should have a fundamental understanding of the basics of any Divblox application.

If you would like to receive further hands-on training from the Divblox team, please reach out to us at support@divblox.com and we will arrange a consultation.
