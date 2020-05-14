## Hello World Example

Now that we have Divblox configured and we understand the basic concepts, let's create a single-page "Hello World" app.

> In this example we will create a simple single-page app that will display the following:

-   A logo for our app, using a separate image viewer component
-   An input box that we will use to send some text to the server
-   A submit button that will trigger the operation to send our input to the server and display a result

### Step 1 - A New Component

Let's create a new component that will serve as our app's page.

-   Login to the Divblox setup page at /Divblox in your project's folder on localhost.
    For example: http://localhost/my-app/divblox or http://localhost/divblox (if you project is in the webserver's root path)
-   Open the Component Builder and create a new custom component called "hello world". This component should be placed in the grouping "pages" in order to be used as a page.

<video id="HelloWorldStep1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/step-1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 2 - Adding Content

Let's open the newly created component to work on it using the Component Builder

-   You can click on the link provided when the component is created or you can find your component by searching "hello world" on the default Component Builder page
-   Add a container to the page and make it full width
-   Add a row with 1 column to the container. This column will serve as the wrapper for our content
-   Add the "imageviewer" component as a sub component by clicking "+ Component" and selecting it from the list of available components
-   Add a basic input component by clicking "+ Component" and selecting "Basic Component -> Input Types -> Form Control Email"
-   Add a basic button component by clicking "+ Component" and selecting "Basic Component -> Buttons -> Simple Primary Button"

<video id="HelloWorldStep2" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/step-2.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep2')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep2')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 3 - Component Customization

Let's do some basic customization on our image to display our logo

-   The imageviewer component has a function called `updateImage()` which we can use to display our logo. Let's update our hello_world component javascript to do this.
-   Add the following code to the bottom of the hello_world component class to override the subComponentLoadedCallBack function to update the image:

```javascript
subComponentLoadedCallBack(component) {
    super.subComponentLoadedCallBack(component);
    if (component.getComponentName() === 'ungrouped_imageviewer') {
        component.updateImage('https://divblox.github.io/_media/divblox-logo-1.png');
    }
}
```

-   Our hello_world component javascript should now look like this:

```javascript
if (typeof component_classes["pages_hello_world"] === "undefined") {
    class pages_hello_world extends DivbloxDomBaseComponent {
        constructor(inputs, supports_native, requires_native) {
            super(inputs, supports_native, requires_native);
            // Sub component config start
            this.sub_component_definitions = [
                {
                    component_load_path: "ungrouped/imageviewer",
                    parent_element: "qJTep",
                    arguments: {},
                },
            ];
            // Sub component config end
        }
        initCustomFunctions() {
            // n3CEV_button Related functionality
            ///////////////////////////////////////////////////////////////////////
            getComponentElementById(this, "n3CEV_btn").on(
                "click",
                function () {
                    // Add the trigger element to the loading element array.
                    // This shows a loading animation on the trigger
                    // element while it waits for a response or function return
                    let element_id = addTriggerElementToLoadingElementArray(
                        $(this).attr("id"),
                        "Nice Loading text"
                    );
                    // Example: once your function has executed,
                    //  call removeTriggerElementFromLoadingElementArray to remove
                    // loading animation
                    setTimeout(function () {
                        removeTriggerElementFromLoadingElementArray(element_id);
                    }, 3000);
                }.bind(this)
            );
            ///////////////////////////////////////////////////////////////////////////
        }
        subComponentLoadedCallBack(component) {
            super.subComponentLoadedCallBack(component);
            if (component.getComponentName() === "ungrouped_imageviewer") {
                component.updateImage(
                    "https://divblox.github.io/_media/divblox-logo-1.png"
                );
            }
        }
    }
    component_classes["pages_hello_world"] = pages_hello_world;
}
```

<video id="HelloWorldStep3" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/helloworld3.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep3')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep3')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 4 - Processing Input

Let's now send the input to the server and get a response

-   We will adapt the functionality that is currently handling the button click by
    using Divblox's built in request function to send the data to the server and handle the response
-   The code below handles the click action for our button.
    Right now it simply mimicks that something is happening when you click the button

```javascript
// n3CEV_button Related functionality
///////////////////////////////////////////////////////////////////////////
getComponentElementById(this, "n3CEV_btn").on(
    "click",
    function () {
        // Add the trigger element to the loading element array.
        // This shows a loading animation on the trigger
        // element while it waits for a response or function return
        let element_id = addTriggerElementToLoadingElementArray(
            $(this).attr("id"),
            "Nice Loading text"
        );
        // Example: once your function has executed, call
        // removeTriggerElementFromLoadingElementArray to remove
        // loading animation
        setTimeout(function () {
            removeTriggerElementFromLoadingElementArray(element_id);
        }, 3000);
    }.bind(this)
);
////////////////////////////////////////////////////////////////////////////
```

-   Let's change the click handler function to achieve our goal:

```javascript
// n3CEV_button Related functionality
///////////////////////////////////////////////////////////////////////////
getComponentElementById(this, "n3CEV_btn").on(
    "click",
    function () {
        dxRequestInternal(
            // Divblox's wrapper function for doing a POST request to the server
            // Get's the path on the server where this component's .php file resides
            getComponentControllerPath(this),
            {
                f: "checkEmailAddress", // Indicates the function that .php file should execute
                email_address: getComponentElementById(
                    this,
                    "baNsD_FormControlInput"
                ).val(), // We are also
                // sending the email address as input to the .php file.
                // NB! CHECK YOUR ELEMENT ID. Divblox AUTO-GENERATES
                // THIS ID, MEANING YOURS MIGHT NOT BE "baNsD_FormControlInput"
            },
            function (data_obj) {
                // The function that is called when the server provides a "Success" response
                showAlert(
                    "Success! The server responded with: " + data_obj.Message,
                    "success",
                    "OK",
                    false
                );
            }.bind(this),
            function (data_obj) {
                // The function that is called when the server
                // does NOT provide a "Success" response
                showAlert(
                    "Oh no! The server responded with: " + data_obj.Message,
                    "error",
                    "OK",
                    false
                );
            }.bind(this)
        );
    }.bind(this)
);
////////////////////////////////////////////////////////////////////////////////
```

<video id="HelloWorldStep4" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/helloworld4.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep4')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep4')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

-   We are currently not getting a successful response from the server because we still need to implement a function on the server to handle our request.
    We can do this by adding the following as a function to our component's .php file

```php
public function checkEmailAddress() {
    $EmailAddressStr = $this->getInputValue('email_address');
    if (is_null($EmailAddressStr) || (strlen($EmailAddressStr) < 2)) {
        $this->setReturnValue("Result","Failed");
        $this->setReturnValue("Message","No email address provided");
        $this->presentOutput();
    }
    $this->setReturnValue("Result","Success");
    $this->setReturnValue("Message","You provided the email: $EmailAddressStr");
    $this->presentOutput();
}
```

<video id="HelloWorldStep5" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/helloworld5.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep5')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep5')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

### Step 5 - Finishing Up

Divblox will show a landing page for the anonymous user by default. If we want to rather load our newly created page as
the default we need to tell Divblox this by updating our project.js file:

```javascript
// Update the user_role_landing_pages array to force the anonymous user to load our new page:
let user_role_landing_pages = {
    anonymous: "hello_world",
    Administator: "system_account_management",
    //"User":"the_desired_landing_page"
};
```

And that's it! We just created a basic app that touches on the core Divblox concepts. We can now view our app at:
http://localhost/my-app/ or http://localhost/ (if you project is in the webserver's root path)

<video id="HelloWorldStep6" muted="" playsinline="" preload="auto" autoplay>
  <source src="_hello-world-videos/helloworld6.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('HelloWorldStep6')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('HelloWorldStep6')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>
