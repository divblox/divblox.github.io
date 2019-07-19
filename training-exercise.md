# Training Exercise
This exercise assumes that you have managed to configure your divblox project and that you understand the basic concepts. 
If you are not sure that you do understand the basics, first try the [Hello World](hello-world.md) exercise.

>In this exercise we will go into a bit more detail about the main divblox concepts that are used in every project. 
These concepts include:

- Data modeling
- The divblox ORM (Object Relational Mapping)
- Interaction between a component's front-end and back-end
- Global function calls (Reusable throughout your entire project)
- Component and object security
- Exposing an API

### Introduction
We will be creating a basic ticketing system that will allow users to create and manage "tickets". A ticket will be able to have
a "status".

We will generate CRUD (Create, Read, Update, Delete) components to allow us to manage tickets and their statuses.

We will create the following components:
- A page where full CRUD of tickets and statuses is done
- A page where we reuse the CREATE component for a ticket to allow the user to create tickets in a simple way

### Step 1 - Data Model
We will be creating a data model with the following entities and attributes:
- **Ticket**: TicketName, TicketDescription, DueDate, TicketUniqueId
- **TicketStatus**: StatusLabel

<video id="TrainingExerciseStep1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-data_model.mp4" type="video/mp4">
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
let's generate some CRUD components (using the component builder) for Ticket and TicketStatus.

<video id="TrainingExerciseStep2" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-crud_components.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 3 - Preparing for pages
In order for us to be able to use our CRUD components, or any other component for that matter, we need to put them inside pages. 
Pages are also just components, but they can be navigated to by the user in the browser.

To allow the user to easily navigate to our pages, we need to update our navigation components. For this exercise we will
be modifying the default side bar component to have links to 2 pages:
- An admin page where our CRUD components can live
- A "New Ticket" page where users can create new tickets

<video id="TrainingExerciseStep3" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-sidebar.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep3')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep3')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 4 - Page Components
Ok, we now have components that allow us to create our data. We have also updated our navigation component to allow us to
access our page components. Let's create a page component where we can use our CRUD components.

<video id="TrainingExerciseStep4" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-full_crud_admin_page.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep4')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep4')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

We can now also reuse our CREATE component for tickets on a new page called "New Ticket" to allow users to create their tickets

<video id="TrainingExerciseStep4a" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-reuse_ticket_create.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep4a')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep4a')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 5 - Global Functions
For the purposes of this exercise, we want to assign a unique ID to every ticket. This will allow us later on to retrieve
information about our ticket via an API. To generate this unique ID, we will make use of a global function call. 

!>Global functions are very useful for functions that are used in many places to reduce code duplication

- Step 1: Let's add a new function to project.js (project/assets/js/project.js) that we can call from anywhere to generate a new unique ticket ID
- Step 2: Because we need to ensure uniqueness of this ID, we should generate it on the server-side where we can check uniqueness before
returning the ID. This means we need to add a new function to global_request_handler.php (project/assets/php/global_request_handler.php) to deal with this.

<video id="TrainingExerciseStep5" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-global_functions_1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep5')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep5')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

>Below are the functions for both the project.js and global_request_handler.php scripts as shown in the video above

- Add the following to project.js:

```javascript
function getNewTaskUniqueId(success_callback,failed_callback) {
	if (typeof success_callback !== "function") {
		success_callback = function(ticket_id) {}
	}
	if (typeof failed_callback !== "function") {
		failed_callback = function(message) {}
	}
	dxRequestInternal(getServerRootPath()+'project/assets/php/global_request_handler.php',{f:'getNewTaskUniqueId'},
		function(data_obj) {
			// Success function
			success_callback(data_obj.TicketUniqueId)
		},
		function(data_obj) {
			// Fail function
			failed_callback("Unknown error");
		})
}
```
- Add the following function to global_request_handler.php:

```php
function getNewTaskUniqueId() {
    $CandidateStr = ProjectFunctions::generateRandomString(24);
    $DoneBool = false;
    while(!$DoneBool) {
        $ExistingTicketCount = Ticket::LoadByTicketUniqueId($CandidateStr); // divblox query language to load a ticket from the database, based on the UniqueId field
        if ($ExistingTicketCount == 0) {
            $DoneBool = true;
        } else {
            $CandidateStr = ProjectFunctions::generateRandomString(24);
        }
    }
    return $CandidateStr;
}

// Update the switch statement that deals with which function to call to look like this:
switch($_POST["f"]) {
    case 'getUserRole': die(json_encode(array("Result" => "Success","CurrentRole" => ProjectFunctions::getCurrentUserRole())));
        break;
    case 'getCurrentAccountId': die(json_encode(array("Result" => "Success","CurrentAccountId" => ProjectFunctions::getCurrentAccountAttribute())));
        break;
    case 'getCurrentAccountAttribute': die(json_encode(array("Result" => "Success","Attribute" => getCurrentAccountAttribute())));
        break;
    case 'logoutCurrentAccount': die(json_encode(array("Result" => "Success","LogoutResult" => ProjectFunctions::logoutCurrentAccount())));
        break;
    case 'updatePushRegistration': updatePushRegistration();
        break;
    case 'getNewTaskUniqueId': die(json_encode(array("Result" => "Success","TicketUniqueId" => getNewTaskUniqueId())));
        break;
    // TODO: Define custom function handlers here...
    default:  die(json_encode(array("Result" => "Failed","Message" => "Invalid function")));
}
```

Now we have our global functions ready. Let's add a button to our ticket CREATE component that will populate the ticket unique ID field with
the value returned from our global function.

<video id="TrainingExerciseStep5a" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-global_functions_2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep5a')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep5a')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 6 - Security
For our exercise we created 2 pages (The admin and new ticket pages). Let's assume that we only want administrators to access the admin page.
We can achieve this by updating the component access in the project_classes.php script (project/assets/php/project_classes.php). To test this, we
need to register a new user that can log in. 

!>You can access the register page by navigating to [your_project_root]/?view=register. New users are registered with the user role "User" by default

<video id="TrainingExerciseStep6" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-security_1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep6')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep6')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

!>By default, divblox allows access to all components for all users. This can be turned off easily by commenting out the following in project_classes.php

```php
$InitialReturn = parent::getComponentAccess($AccountId,$ComponentName);
// Find this line and comment it out
return true; // TODO: This is a temporary measure to allow you to get started quickly without restrictions.
// Remove this and implement correctly for your solution. NB! THIS GIVES ACCESS TO ALL COMPONENTS TO ANY USER!!!
```

>To apply the security rule, modify the $UserRoleSpecificComponentArray in project_classes.php to the following:

```php
$UserRoleSpecificComponentArray = array(
            "User" => ["account_additional_info_manager","account_additional_info_manager_data_series","account_additional_info_manager_create","account_additional_info_manager_update",
                "new_ticket","ticket_crud_create"],
            "Administrator" => ["ticket_crud","ticket_crud_create","ticket_crud_update","ticket_crud_data_series",
                "ticket_status_crud","ticket_status_crud_create","ticket_status_crud_update","ticket_status_crud_data_series"]
            //TODO: Add more as required here
        );
```

This tells the system explicitly which user roles have access to which components. Once this rule is applied, try to open the admin page with your newly created user.

<video id="TrainingExerciseStep6a" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-security_2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep6a')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep6a')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 7 - Exposing an API
Now that we have all the groundwork completed, let's provide the world with an API endpoint that will provide information about our ticket if its unique ID is provided.
To do this, we will copy the provided api_example endpoint and modify it for our use case.

!>divblox automatically handles the routing for your API endpoint. API endpoints are available at [your_project_root]/api/endpoint

<video id="TrainingExerciseStep7" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-apis_1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep7')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep7')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

>Let's see our API in action

<video id="TrainingExerciseStep7a" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/divblox_exercise-apis_2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('TrainingExerciseStep7a')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('TrainingExerciseStep7a')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Summary
In this exercise your learned about all the basic elements of a divblox project. If you understand step 1 - 7 completely, you should be able to build
virtually any divblox project.

If you would like to receive further hands-on training from the divblox team, please reach out to us at support@divblox.com and we will arrange a consultation.