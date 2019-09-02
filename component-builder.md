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
if (typeof component_classes['ungrouped_demo_component'] === "undefined") {
	class ungrouped_demo_component extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
			this.sub_component_definitions = [];
			// Sub component config end
		}
	}
	component_classes['ungrouped_demo_component'] = ungrouped_demo_component;
}

/* Below is the DivbloxDomBaseComponent class from which every divblox component inherits
This class manages the following behaviour for each component:
- Loading workflow, which includes checking of prerequisites and dependencies
- Error handling
- Component & Subcomponent resets
- Event handling and propagation
*/
class DivbloxDomBaseComponent {
	constructor(inputs,supports_native,requires_native) {
		this.arguments = inputs;
		if (typeof supports_native === "undefined") {
			supports_native = true;
		}
		if (typeof requires_native === "undefined") {
			requires_native = false;
		}
		this.supports_native = supports_native;
		this.requires_native = requires_native;
		if (typeof(this.arguments["uid"]) !== "undefined") {
			this.uid = this.arguments["uid"];
		} else {
			this.uid = this.arguments["component_name"] + "_" + this.arguments["dom_index"];
		}
		this.component_success = false;
		this.sub_component_definitions = {};
		this.sub_component_objects = [];
		this.sub_component_loaded_count = 0;
		this.allowed_access_array = [];
		this.is_loading = false;
	}
	loadPrerequisites(success_callback,fail_callback) {
		if (typeof success_callback !== "function") {
			success_callback = function(){};
		}
		if (typeof fail_callback !== "function") {
			fail_callback = function(){};
		}
		success_callback();
	}
	on_component_loaded(confirm_success,callback) {
		if (isNative()) {
			if (!this.supports_native) {
				this.handleComponentError("Component "+this.uid+" does not support native.");
				return;
			}
		} else {
			if (this.requires_native) {
				this.handleComponentError("Component "+this.uid+" requires a native implementation.");
				return;
			}
		}
		if (typeof confirm_success === "undefined") {
			confirm_success = true;
		}
		if (typeof callback !== "function") {
			callback = function(){};
		}
		this.loadPrerequisites(function() {
			callback();
			dxCheckCurrentUserRole(this.allowed_access_array,function() {
				this.handleComponentAccessError("Access denied");
			}.bind(this), function() {
				if (confirm_success) {
					this.handleComponentSuccess();
				}
				this.registerDomEvents();
				this.initCustomFunctions();
				// Load additional components here
				this.loadSubComponent();
				if (checkComponentBuilderActive()) {
					setTimeout(function() {
						//JGL: Some components might not remove their loading state if they do not receive
						// initialization inputs. When we are in the component builder, we want to override this
						if (this.is_loading) {
							dxLog("Removing loading state if "+this.getComponentName()+" for component builder");
							this.removeLoadingState();
						}
					}.bind(this),1000);
				}
			}.bind(this));
		}.bind(this),function () {
			this.handleComponentError("Error loading component dependencies");
		}.bind(this));
	}
	reset(inputs) {
		this.resetSubComponents(inputs);
	}
	setLoadingState() {
		this.is_loading = true;
		$("#"+this.uid+"_ComponentContent").hide();
		$("#"+this.uid+"_ComponentPlaceholder").show();
		$("#"+this.uid+"_ComponentFeedback").html('');
	}
	removeLoadingState() {
		this.is_loading = false;
		$("#"+this.uid+"_ComponentContent").show();
		$("#"+this.uid+"_ComponentPlaceholder").hide();
	}
	resetSubComponents(inputs) {
		this.sub_component_objects.forEach(function(component) {
			component.reset(inputs);
		}.bind(this));
	}
	getReadyState() {
		return this.component_success;
	}
	handleComponentSuccess(additional_input) {
		if (this.component_success === true) {
			return;
		}
		this.component_success = true;
		$("#"+this.uid+"_ComponentContent").show();
		$("#"+this.uid+"_ComponentPlaceholder").hide();
		if (typeof cb_active !== "undefined") {
			if (cb_active) {
				on_divblox_component_success(this);
			}
		}
	}
	handleComponentError(ErrorMessage) {
		this.component_success = false;
		$("#"+this.uid+"_ComponentContent").hide();
		$("#"+this.uid+"_ComponentPlaceholder").show();
		$("#"+this.uid+"_ComponentFeedback").html('<div class="alert alert-danger alert-danger-component"><strong><i' +
			' class="fa fa-exclamation-triangle ComponentErrorExclamation" aria-hidden="true"></i>' +
			' </strong><br>'+ErrorMessage+'</div>');
		if (typeof cb_active !== "undefined") {
			if (cb_active) {
				on_divblox_component_error(this);
			}
		}
	}
	handleComponentAccessError(ErrorMessage) {
		this.handleComponentError(ErrorMessage);
	}
	registerDomEvents() {/*To be overridden in sub class as needed*/}
	initCustomFunctions() {/*To be overridden in sub class as needed*/}
	subComponentLoadedCallBack(component) {
		this.sub_component_objects.push(component);
		this.sub_component_loaded_count++;
		this.loadSubComponent();
		// JGL: Override as needed
	}
	loadSubComponent() {
		if (typeof this.sub_component_definitions[this.sub_component_loaded_count] !== "undefined") {
			let sub_component_definition = this.sub_component_definitions[this.sub_component_loaded_count];
			loadComponent(sub_component_definition.component_load_path,this.uid,sub_component_definition.parent_element,sub_component_definition.arguments,false,false,this.subComponentLoadedCallBack.bind(this));
		} else {
			this.reset();
		}
	}
	getSubComponents() {
		return this.sub_component_objects;
	}
	getSubComponentDefinitions() {
		return this.sub_component_definitions;
	}
	getUid() {
		return this.uid;
	}
	getComponentName() {
		return this.arguments['component_name'];
	}
	getLoadArgument(argument) {
		if (typeof this.arguments[argument] !== "undefined") {
			return this.arguments[argument];
		}
		if (typeof this.arguments["url_parameters"] !== "undefined") {
			if (typeof this.arguments["url_parameters"][argument] !== "undefined") {
				return this.arguments["url_parameters"][argument];
			}
		}
		return null;
	}
	eventTriggered(event_name,parameters_obj) {
		switch(event_name) {
			case '[event_name]':
			default:
				dxLog("Event triggered: "+event_name+": "+JSON.stringify(parameters_obj));
		}
		// Let's pass the event to all sub components
		this.propagateEventTriggered(event_name,parameters_obj);
	}
	propagateEventTriggered(event_name,parameters_obj) {
		this.sub_component_objects.forEach(function(component) {
			component.eventTriggered(event_name,parameters_obj);
		});
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
The divblox component builder allows you to create and manage your project’s components in a visual environment and to combine various different components to create specific components for your project’s needs
![Main Component Builder Page](_media/_screenshots/component-builder-overview.png)

>From the default component builder page you can do the following:
- Search for existing components using the search bar at the top right of the page
- Open an existing component in order to work on it
- Create a new component, either from an existing one or from scratch

## Creating a new component
Clicking the + Component button brings up the following modal:
![Component Builder - New Component](_media/_screenshots/component-builder-new-component.png)
Here you can give your new component a name and select the type of component you want to create.

### Creating a data model component
Selecting a [Data Model Component](#data-model-components) will provide you with the options to select the entity for which you want to generate, as well as the type of data model component to create:
![Component Builder - New Data Model Component Select Entity](_media/_screenshots/component-builder-new-datamodel-component-entity-select.png)
![Component Builder - New Data Model Component Select Type](_media/_screenshots/component-builder-new-datamodel-component-type-select.png)

Once you selected your entity and component type, you can configure the attributes and/or validations that you would like divblox to generate for the component.<br><br>
The example below shows a typical configuration modal for a "CREATE" type of component, which allows you to configure which attributes to display and to select the specific validations you require for them:
![Component Builder - New Data Model Component Create Config](_media/_screenshots/component-builder-new-datamodel-component-create-config.png)

The example below shows a typical configuration modal for a "DATA TABLE" type of component, which allows you to configure which attributes to display in the table:
![Component Builder - New Data Model Component Data Table Config](_media/_screenshots/component-builder-new-datamodel-component-data-table-config.png)

### Creating from an existing component
You can easily copy the functionality from an existing component be selecting the "**From Existing Component**" option. This will allow you to specialize the functionality of that component for your needs.
![Component Builder - From Existing](_media/_screenshots/component-builder-from-existing.png)

!>Notice the "Grouping" field above. This field allows you to group certain components together in folders for a better organized project.

### Creating a custom component
You can also create a custom component by selecting the "**Custom Component**" option. This simply allows you to provide a name and grouping for your component.
![Component Builder - Custom Component](_media/_screenshots/component-builder-custom.png)

!>Custom components **ALWAYS** start out as blank components

## Visual Builder Interface
The component builder visual interface allows you to create any type of layout that you might require. 
Using Bootstrap's grid system, it allows you to place the following containing elements on the screen to begin with:
- **Containers**:<br>
Containers are the most basic layout element in Bootstrap and are required when using the grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).
- **Rows**:<br>
Multiple rows can be placed inside each container and they serve the purpose of being wrappers for columns
- **Columns**:<br>
A column is the final containing element within which you can place your components
- Learn more about Bootstrap's grid system [here](https://getbootstrap.com/docs/4.3/layout/grid/#how-it-works)

![Component Builder - Containing Elements](_media/_screenshots/component-builder-containing-elements.png)

### Adding a sub component
You can add a component as a sub component to the current page (which in itself is a component). See below:
<!--![Component Builder - Adding Sub Components](_media/_gifs/Adding-Components.gif)-->

<video id="AddingComponentsVideo" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/Adding-Components.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('AddingComponentsVideo')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('AddingComponentsVideo')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Adding a basic component
You can add a basic component to the current component. See below:
<!--![Component Builder - Adding Basic Components](_media/_gifs/Adding-Basic-Components.gif)-->

<video id="AddingBasicComponentsVideo" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/Adding-Basic-Components.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('AddingBasicComponentsVideo')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('AddingBasicComponentsVideo')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Adding custom html
You can add custom html to the current component. See below:
<!--![Component Builder - Adding Custom HTML](_media/_gifs/Adding-Custom-Html.gif)-->

<video id="AddingCustomHtmlVideo" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/Adding-Custom-Html.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('AddingCustomHtmlVideo')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('AddingCustomHtmlVideo')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Modify a component
The builder interface allows you to modify your component in the browser at any time. See below:
<!--![Component Builder - Modify Component](_media/_gifs/Modify-Component.gif)-->

<video id="ModifyComponentVideo" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/Modify-Component.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('ModifyComponentVideo')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('ModifyComponentVideo')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>