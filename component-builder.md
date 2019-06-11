# divblox Components
Virtually everything in divblox is a component. Components are used as the building blocks for your project. 
You can create any type of component for your specific requirement, from a basic image viewer to a full blown page that is made up of multiple individual components.

# Component Types
>divblox allows you to create any of the following types of components:
- [Data model](data-modeler.md) related components
- Custom components
- Basic components

## Data model components
Data model components allow for the CRUD behaviour of any of your data model entities. divblox can generate the following CRUD components from your data model:
- **Create component:** 
    - Displays input boxes for the relevant attributes of your entity along with a save button. 
    - Processes the request to the server to create a new instance of your entity and store it in the database

![Create Component](_media/_screenshots/component-example-create.png)

- **Update component:** 
    - Displays pre-populated input boxes for the relevant attributes of your entity along with a save & a delete button.
    - Processes the request to the server to update or delete the existing instance of your entity in the database

![Update Component](_media/_screenshots/component-example-update.png)

- **Data Table component:** 
    - Displays a tabular view with data from the database for the selected entity. The data can be searched and/or constrained as required. 
    - Allows multiple functions to be executed on the data set, including Excel,csv or text export and bulk deletion. 

![Data Table Component](_media/_screenshots/component-example-data-table.png)

- **Data List component:** 
    - Displays a list view with data from the database for the selected entity. 
    - The data can be searched and/or constrained as required. This is intended to be a more mobile friendly way of viewing data for a specific entity.

![Data List Component](_media/_screenshots/component-example-data-list.png)

## Custom components
Custom components allow you to create any specific type of functionality for your app. 
Create anything from an image viewer or an html editor, to file uploaders and charting tools. divblox ships standard with the following custom components:
- **Data Visualization:** Chartjs with examples
- **Navigation:** Various types of navbars, including top, bottom and side navbars
- **System:** 
    - Authentication: Allows for a user to authenticate or log in to your solution
    - File upload: Provides a modern file uploader and processes the uploaded file on the server
    - Image upload: Similar to the file upload component, but for images. Provides basic image manipulation such as crop and resize, etc.
    - Rich text editor: A wysiwyg editor that processes your html input and sends it to the server
    - Native versions of file and image upload, including native camera access
    - A basic image viewer

## Basic components
Basic components are typically components that do not necessarily have a server-side requirement. 
These can range from simple alerts and buttons, to modals and progress bars.

> divblox ships standard with the majority of [bootstrap's](https://getbootstrap.com/docs/4.3/components/alerts/) UI components

# Component DNA 
Components are typically made up of the following parts:
- An HTML file 
- A CSS file 
- A Javascript file
- A Php file 
- A JSON file

!> The exception here is **basic components**. These types of components usually reside within existing components to provide additional specialized functionality.

## Component HTML
The component's HTML file describes the component's layout.
The basic structure of any component's HTML follows the following pattern:
``` html
<!-- The component wrapper is used to contain the content of the entire component-->
<div id="ComponentWrapper" class="component-wrapper">
    <!-- The component placeholder is shown first while the component is loading-->
    <div id="ComponentPlaceholder" class="component_placeholder component_placeholder_general">
        <!-- Should an error occur, from which the component cannot recover, 
        the component feedback is used to display the error to the user-->
        <div id="ComponentFeedback"></div>
    </div>
    <!-- Once the component has successfully loaded, 
    the component content replaces the component placeholder. 
    Therefor it is hidden to start with-->
    <div id="ComponentContent" class="component-content" style="display:none">
    </div>
</div>
```

## Component CSS
The component's CSS file provides any special styling that is required by the component. By default this is empty

## Component Javascript
The component's Javascript file controls the component's behaviour.
The basic structure of any component's Javascript follows the following pattern:
``` javascript
if (typeof(on_ungrouped_demo_component_ready) === "undefined") {
	function on_ungrouped_demo_component_ready(load_arguments) {
		// This is required for any component to be registered to the DOM as a divblox component
		this.dom_component_obj = new DivbloxDOMComponent(load_arguments);
		// A catch function for the component's error event
		this.handleComponentError = function(ErrorMessage) {
			this.dom_component_obj.handleComponentError(this,ErrorMessage);
		}.bind(this);
		// A catch function for the component's success event which happens after a successful load
		this.handleComponentSuccess = function() {
			this.dom_component_obj.handleComponentSuccess(this);
		}.bind(this);
		// A catch function for the component's reset event. Is called once the component has loaded, but can be called
		// multiple times
		this.reset = function(inputs) {}.bind(this);
		// A catch function for the component's loaded event
		this.on_component_loaded = function() {
			this.dom_component_obj.on_component_loaded(this);
		}.bind(this);
		// A catch function for when a sub component has successfully loaded
		this.subComponentLoadedCallBack = function(component) {
			// Implement additional required functionality for sub components after load here
		}.bind(this);
		// Can be used to get an array of sub components for the current component
		this.getSubComponents = function() {
			return this.dom_component_obj.getSubComponents(this);
		}.bind(this);
		// Gets the current component's unique id. Each component has a UID that allows for calling it from elsewhere
		// in your app
		this.getUid = function() {
			return this.dom_component_obj.getUid();
		}.bind(this);
		// Component specific code below
		// Empty array means ANY user role has access. NB! This is merely for UX purposes.
		// Do not rely on this as a security measure. User role security MUST be managed on the server's side
		this.allowedAccessArray = [];
		// A catch function for when a page-wide event was triggered
		this.eventTriggered = function(event_name,parameters_obj) {
			// Handle specific events here. This is useful if the component needs to update because one of its
			// sub-components did something
			switch(event_name) {
				case '[event_name]':
				default:
			    dxLog("Event triggered: "+event_name+": "+JSON.stringify(parameters_obj));
			}
			// Let's pass the event to all sub components
			this.dom_component_obj.propagateEventTriggered(event_name,parameters_obj);
		}.bind(this);
		// Sub component config start
		this.sub_components = {};
		// Sub component config end
		// Custom functions and declarations to be added below
	}
}

```

## Component Php
The component's Php file handles server-side requests for the component.
The basic structure of any component's Php follows the following pattern:
``` php
// We need to require the divblox initialization in order to have access to divblox's classes and functions
require("../../../../divblox/divblox.php");
/* Every component controller class will inherit from the ProjectComponentController class.
  The ProjectComponentController handles things like 
  - POST variables, 
  - authentication, 
  - script output, etc
*/
class DemoComponentController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
    // An example function to show how we can deal with inputs and outputs.
    // This function is called by the constructor 
    // when the $_POST variable "f" is set to "exampleFunction"
    public function exampleFunction() {
        $ExpectedInputValue = $this->getInputValue("InputValue");
        if (is_null($ExpectedInputValue)) {
            // We did not receive the input we were expecting.
            // Let's fail the request
            $this->setReturnValue("Result","Failed");
            $this->setReturnValue("Message","InputValue not provided");
            $this->presentOutput();
        }
        $this->setReturnValue("Result","Success");
        $this->setReturnValue("Message","InputValue is $ExpectedInputValue");
        $this->presentOutput();
    }
}
// Let's initialize the class to invoke the constructor. 
  This will do the initial request processing for us
$ComponentObj = new DemoComponentController("demo_component");
```

## Component JSON
The component's JSON file is used for component configuration. By default this is empty

# Component Builder 

- The component builder allows you to create and manage your project’s components in a visual environment and to combine various different components to create specific components for your project’s needs
- Talk about the default component builder page (creating new components and the various options for this. Searching for and Opening an existing component for modification). Talk about the default data model type components that can be generated
- Talk about the builder interface

