## divblox.js
!>divblox.js is located at /divblox/assets/js/divblox.js

divblox.js is the main javascript function library that provides all of the core front-end divblox functionality as globally available functions. It is required for divblox to run and provides the following:
- Manages the core dependencies
- Initializes and prepares the DOM
- Manages the state of your app
- Manages the routing of your app
- Manages the loading of components and component events
- Provides functions for components to communicate with their server side scripts
- Provides various helper functions to simplify your app development

>Other Commonly used diblox.js functions
```javascript
dxLog(Message,show_stack_trace);
// A wrapper for console.log that provides more advanced logging capability 
// and can be turned off when in production mode
dxRequestInternal(url,parameters,on_success,on_fail,queue_on_offline,element,loading_text);
// A wrapper for the jQuery $.post method with some additional divblox functionality:
// - Ensures that the on_success and on_fail callbacks receive a structured object
// - Provides for queuing of request, either on- or offline
// - Provides for disabling the calling element and displaying an appropriate message while
//   the request is handled
// - Also manages authentication tokens between the front-end and back-end
showAlert(AlertStr,Icon,ButtonArray,AutoHide,TimeUntilAutoHide,ConfirmFunction,CancelFunction);
// A wrapper for the sweetalert library that provides for nicer alerts
showToast(title,toast_message,position,icon_path,toast_time_stamp,auto_hide);
// Allows for presenting a Bootstrap toast type message on the screen
```

!>divblox.js should not be modified since the platform relies on its integrity. The developer should rather use [project.js](project-js.md) to override specific functions as required

# Project.js
!>project.js is located at /project/assets/js/project.js

project.js is where the developer can add variables and functions that should always be globally available. It is a core dependency for divblox and is always loaded directly after divblox.js.
This means that it can also be used to override specific divblox.js functions as required.

# divblox global request handler
!>The global request handler is located at /project/assets/php/global_request_handler.php

The main purpose of the global request handler is to handle any system-wide server requests. This is very useful when you 
want to create a general server function that can be reused in multiple places, instead of individually implemented per
component.
The script should always return a json string with at least one parameter called "Result".

You can send a request to this script by using the following snippet:

```javascript
dxRequestInternal(
	// The path to the global request handler on the server
	getServerRootPath()+'project/assets/php/global_request_handler.php',
	// The function to execute, along with additional inputs
	{f:'aFunctionToExecute',
	additional_input_variable:'example'},
    function(data_obj) {
        // If the request was successful
    },
    function(data) {
        // If the request was not successful
    });
```

# Project Functions
!>ProjectFunctions is an abstract class that is located at /project/assets/php/project_functions.php

ProjectFunctions is intended to be used as a space where php functions that should be globally available can be housed. 
It extends the core divblox class "FrameworkFunctions" that provides many of the core divblox server side features. 
This means that you can call the following from any php script the requires divblox.php:

```php
    ProjectFunctions::myFunction();
```

# Project Classes
!>project_classes.php is a collection of globally available php classes and is located at /project/assets/php/project_classes.php. 
You can add any custom classes to the project_classes.php script to make them globally available.

The core project classes are: 
- **ProjectAccessManager**, which extends AccessManager as is responsible for managing access to components and objects, 
based on the currently logged in user

!>By default, compononent access is open to **ANY** user to allow the developer to get started quickly. This should be removed 
as soon as possible to enforce proper security for your solution:
```php
public static function getComponentAccess($AccountId = -1, $ComponentName = '') {
        $InitialReturn = parent::getComponentAccess($AccountId,$ComponentName);
        if ($InitialReturn == true) {
            return true;
        }
        // THIS LINE SHOULD BE REMOVED
        return true; // TODO: This is a temporary measure to allow you to get started quickly without restrictions.
        // Remove this and implement correctly for your solution. NB! THIS GIVES ACCESS TO ALL COMPONENTS TO ANY USER!!!
...
```

- **ProjectComponentController**, which extends ComponentController and allows for component php scripts to function correctly
- **FileUploader**, which deals with storing files as data objects once they are uploaded to the server
- **PublicApi**, which extends PublicApi_Base and provides the outline for how to expose a divblox api via an endpoint