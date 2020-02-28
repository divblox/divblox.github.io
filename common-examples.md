## Hello World

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
  <source src="_hello-world-videos/hello-world1.mp4" type="video/mp4">
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
  <source src="_hello-world-videos/helloworld2.mp4" type="video/mp4">
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
                    arguments: {}
                }
            ];
            // Sub component config end
        }
        initCustomFunctions() {
            // n3CEV_button Related functionality
            ///////////////////////////////////////////////////////////////////////
            getComponentElementById(this, "n3CEV_btn").on(
                "click",
                function() {
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
                    setTimeout(function() {
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
    function() {
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
        setTimeout(function() {
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
    function() {
        dxRequestInternal(
            // Divblox's wrapper function for doing a POST request to the server
            // Get's the path on the server where this component's .php file resides
            getComponentControllerPath(this),
            {
                f: "checkEmailAddress", // Indicates the function that .php file should execute
                email_address: getComponentElementById(
                    this,
                    "baNsD_FormControlInput"
                ).val() // We are also
                // sending the email address as input to the .php file.
                // NB! CHECK YOUR ELEMENT ID. Divblox AUTO-GENERATES
                // THIS ID, MEANING YOURS MIGHT NOT BE "baNsD_FormControlInput"
            },
            function(data_obj) {
                // The function that is called when the server provides a "Success" response
                showAlert(
                    "Success! The server responded with: " + data_obj.Message,
                    "success",
                    "OK",
                    false
                );
            }.bind(this),
            function(data_obj) {
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
    Administator: "system_account_management"
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

## Creating a new page

> This example covers creating a new page

1. From the Divblox setup page open the "Component Builder".

     <p align="left">
      <img  src=_media/_screenshots/example-page-create3.png>
    </p>

2. Add a new component via the "+ Component" button.

 <p align="left">
  <img  src=_media/_screenshots/example-page-create4.png>
</p>

3. Give the page a unique and relevant name, then open the "Create" drop down menu.
4. Select "From existing component" as we would want like to inherit the properties and functionality from the already existing pages.
5. Ensure the grouping for your page as "page" so that Divblox knows that this component can be used as an app page and not just a component.

 <p align="left">
  <img  src=_media/_screenshots/example-page-create5.png>
</p>

6. Finish creating by clicking "Confirm" and then open the component from the success prompt or from the component builder page.

7. Lastly, the page will need a unique identifier and a page title. To Edit the component open the "Tools" drop down menu at the bottom right of the window and select "Edit Component".

 <p align="center">
  <img  src=_media/_screenshots/example-page-create2.png>
</p>

8. Open the "Js" tab and edit the "page_component_name", which will be used to reference this page and should be unique, and the "Page title" which can just be descriptive.

 <p align="center">
  <img  src=_media/_screenshots/example-page-create1.png>
</p>
 
9. You can return to your newly created page from the "Component Builder" page under the grouping "page" or can be search for using the component name.

Demonstration:

<video id="examplePageCreateVid1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/example-page-create-vid1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('examplePageCreateVid1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('examplePageCreateVid1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

## Adding a component to a page

The visual component builder that comes with Divblox makes adding new components to a page a simple task.

1. Launch the "Component Builder" from the Divblox setup page.

 <p align="left">
  <img  src=_media/_screenshots/example-adding-component1.png>
</p>

2. Open any of the page components. In this example a blank page is used. When the page loads you will see the visual builder. A container is present on the page by default. To add a component a row must be created within the container. Click " + Add Row"

 <p align="center">
  <img  src=_media/_screenshots/example-adding-component2.png>
</p>

3. The row can be subdivided into columns. The number of columns, as well as each column width, can be customized. Add a new columns using the "+ Add Column" button and finish creating the row by clicking " + Add Row".

<p align="center">
  <img  src=_media/_screenshots/example-adding-component3.png>
</p>

3. Inside the new row, click " + Add component". This opens a window with all the components that can be added to a page. We would like to add a button. Click "Add Basic Component".

<p align="center">
  <img  src=_media/_screenshots/example-adding-component4.png>
</p>

4. Choose a button to add to the page.

<p align="center">
  <img  src=_media/_screenshots/example-adding-component5.png>
</p>

5. The component in now in your page. All components can be added this way.

<p align="center">
  <img  src=_media/_screenshots/example-adding-component6.png>
</p>

## Page Navigation

Now that you are able to create new pages (see [Creating a new page](#Creating-a-new-page)), you're going to want to navigate between them. The two primary modes used to get between pages are "Navigation bars" and "page redirections".

Navigation bars allow a user to choose which page they want to end up on, for example being on a home page and wanting to see your profile page. Page redirections come into play when the page is no longer required by the user and therefore the site will move you somewhere more relevant, for instance if a user is no longer logged into a site they'll be redirected to the login page when trying to access the site because their user roles switched from "user" to "anonymous". Therefore in order to navigate the site these two methods must be included into your project.

### Landing pages

<!-- Applications are created by developers, managed by administrators and used by users. Each of these roles  -->

Anyone accessing a Divblox application has a "user role" that defines what the individual will see. Managing which "landing page" a user will experience is found in the Divblox "Global Functions".

1. Open the "Global Functions" tab from the Divblox setup page.

 <p align="left">
  <img  src=_media/_screenshots/example-landing-pages-redirections1.png>
</p>

2. Under the heading "Global functions" and inside the file "project.js", an object variable named "user_role_landing_pages" contains the pages that each user type sees when accessing the site. To add a user role, place the "user role name" such as "User" or "Administrator", followed by the the name of the page as it's read in the "Component Builder".

<p align="center">
  <img  src=_media/_screenshots/example-landing-pages-redirections2.png>
</p>

### Adding a navigation bar

Navigation bars come with Divblox as default components. Adding the Navigation bars to a page is a similar procedure to adding any other component (See [Adding a component to a page](#Adding-a-component-to-a-page)), with an extra step that requires additional CSS classes to be added to all containers on the page so that the interaction between the navigation bar and the page is smooth. If the additional classes aren't added you could have containers slipping under the navigation bar.

1. Create a blank page from "blank_page" in the "Component builder"

<p align="left">
  <img  src=_media/_screenshots/example-add-navbar1.png>
</p>

2. To add a new component to the page without having to select a container, click " + Component ".

<p align="left">
  <img  src=_media/_screenshots/example-add-navbar2.png>
</p>

3. Use the search bar to find the navigation bars and select the one that you want to add by selecting it and clicking "Insert Component".

<p align="center">
  <img  src=_media/_screenshots/example-add-navbar3.png>
</p>

3. The navigation bar is now added to your page. This is acceptable for the top, instance and bottom navigation bars but not for the side bar as the containers aren't configured to support it, and as a result the container slips behind the navigation bar. To configure the container click the "gear" symbol found in the top right hand corner of the container.

<p align="center">
  <img  src=_media/_screenshots/example-add-navbar4.png>
</p>

4. Add the following CSS classes to the containers configuration to ensure the container works with the side navigation bar.

```CSS
component-wrapper-compact-sidebar sidebar_compact_left_visible
```

<p align="center">
  <img  src=_media/_screenshots/example-add-navbar5.png>
</p>

5. Inspecting the container, it can be see that now the row inside the component sits next to the navigation bar and not behind it anymore.

<p align="center">
  <img  src=_media/_screenshots/example-add-navbar6.png>
</p>

### Adding items to the navigation bar

Now that a navigation bar is on your page, we can add items to it. Once these items have been created they can be linked to a specific page through a developer defined page component name.

1. Create a new page from an existing component. In this example we will use the blank page with a sidebar (See [Creating a new page](#creating-a-new-page)).

 <p align="left">
  <img  src=_media/_screenshots/example-page-navigation1.png>
</p>

2. Set a title and an appropriate "page_component_name" as it will be used later to link the page to the item in the navigation bar.

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation7.png>
</p>

3. To add a new item to the navigation bar, open up the "side_navbar" from the "Component builder".

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation2.png>
</p>

4. Click "Edit Component" and then open the "HTML" tab.

5. Add a new item to the navigation bar by placing the code below under the existing items in the components HTML file, in the unordered list tagged "flex-column" along with any other items present in the list.

```html
<li class="nav-item">
    <a
        id="[ADD_YOUR_ITEM_NAME_HERE]"
        class="nav-link navigation-activate-on-item3"
        href="#"
        ><i class="fa fa-link" aria-hidden="true"></i><br />[ADD YOUR ITEM TILE
        HERE]</a
    >
</li>
<!-- change the Item ID and Title above -->
```

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation3.png>
</p>

6. Move over to the "Js" tab to connect both the page created in Step 1 and the new navigation item in Step 4. Place the code below in the "Js" file under the two existing button event handlers. This should include the Id of the menu item, found in this components HTML file, and the page component name from the page's Js file inside the function "registerDomEvents()".

```javascript
getComponentElementById(this, "[ADD_YOUR_ITEM_NAME_HERE]").on(
    "click",
    function() {
        loadPageComponent("[page_component_name]");
        return false;
    }
);
// add your navigation bar item ID above and your page_component_name
```

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation4.png>
</p>

7. You should now have a navigation bar on the side that has an item that, when clicked, will open up the page created at the beginning of the example. To test this functionality open up and any page containing the side navigation bar and click the "view page" in the bottom right of the window. Click your new menu item and you should be redirected to the page created at the beginning of the example.

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation5.png>
</p>

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation6.png>
</p>

Demonstration:

<video id="examplePageCreateVid1" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/example-page-sidebar-item-vid1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('examplePageCreateVid1')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('examplePageCreateVid1')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>

## Other Navigation tools

> In this section the topic of the various navigation bar components will be discussed.

### Side navigation bar

 <p align="left">
  <img  src=_media/_screenshots/example-page-navigation8.png>
</p>

The sidebar is a more recent variation of the Navigation bar, and is considered by some to be the primary navigation bar to use for building Divblox applications. The Sidebar is an excellent component for designing both desktop and mobile applications, as the "page width" is no longer a required consideration. The general purpose is to place page shortcuts inside of it as a way of moving to a desired page without getting in the way of any other navigation bars. Alternatively it can be utilized as a tool bar with different buttons to interact with components or initiate operations on the page.

The sidebar is more often than not placed on the left of the page, as to not interfere with the scroll bar, and filled with a list of items (See [Adding items to the navigation bar](#Adding-items-to-the-navigation-bar). For desktop applications the side bar can permanently sit adjacent to the main page while for mobile applications it can be retracted, and then expanded, to maximize the screen real estate available.

### Bottom navigation bar

<p align="centre">
  <img  src=_media/_screenshots/example-bottom-nav1.png>
</p>

The bottom navigation bar is a tool most common with apps or webpages that are created for mobile devices. Having your navigation items placed at the bottom makes accessing it very easy because your fingers aren't required to stretch to the top side of the page. <br>

This is an element that usually remains the same across most pages, from a profile page to a main page the navigation items are not going to change, and therefore a good practice to keep these consistent is to use the existing pages as a template and create a copy of the given pages to have your own default page to work from (See [Default pages](https://divblox.github.io/#/best-practices?id=default-pages)).

### Top navigation bar

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav1.png>
</p>

The top navigation bar is commonly used when designing website pages. This comes in the form of a universal navigation item that is always present at the top of the page and makes navigation between pages easier. Top navigation bars are often the first thing that get seen on a site as your eyes scan from top to bottom, which means you should include more site details such as a logo for looks or a user profile tab to make accessing it easier. <br>

If you wish to make changes to the default bar to include your own logo or item list, it can be done by making a new component from the existing one and adding that to your default page(See [Customizing Components](https://divblox.github.io/#/best-practices?id=customizing-components)).

### Top instance navigation bar

<p align="center">
  <img  src=_media/_screenshots/example-instance-nav1.png>
</p>

Instance pages are pages that, more often than not, have two navigation options, namely "back", that returns to the previous page, and "confirm" that moves you from the current page to the next. A common application for this is for form pages, which collect information from a user. These have a "return" button to leave the form and a "confirm" to save changes made on that form, submit that data to a database, and then take you to a new page. <br>
This is also frequently used in mobile applications and as the name suggests it is used in instances and isn't a permanent navigation bar. It adds navigation functionality to the page without changing the main navigation bar.

The instance navigation bar is an item that, although, looks the same and feels the same to use no matter where it pops up the functionality when a button is clicked can change dramatically between instances. Editing this functionality is as easy as creating a copy of the default "top_instance_navbar" and adding functionality to the existing callback functions that are triggered by the buttons in the navigation bar (See [Overwriting default functions](https://divblox.github.io/#/best-practices?id=overwriting-default-functions)).

## Update the look and feel

The aesthetics of a page is primarily controlled by CSS.

1. Editing the way a page looks can be done by first opening "UI configuration" from the Divblox setup page.

<p align="left">
  <img  src=_media/_screenshots/example-look-and-feel1.png>
</p>

2. Either add new CSS class, or edit the existing ones, inside "theme.css". To view the statements click the "bi-directional arrow" to expand the code folds.

<p align="center">
  <img  src=_media/_screenshots/example-look-and-feel2.png>
</p>

3. By using these classes we can change the look of a certain item. When a component is placed on a page, it calls the CSS class from its HTML script. For instance inside the "side_navbar" component's HTML tab, and inside the HTML "navigation tag" is where the CSS class is referenced. Changing this will result in style changes to the navigation bar.

<p align="center">
  <img  src=_media/_screenshots/example-look-and-feel3.png>
</p>

4. Using the CSS classes in "theme.css", the navigation bar can be changed from dark to light using the classes "sidebar-dark" or "sidebar-light".

<p align="left">
  <img  src=_media/_screenshots/example-look-and-feel4.png>
</p>

## Adding Custom fonts to your project

> In this example we will add a new font to our project and then have that font present for offline applications as well.

1. Start by finding a font for your project. This example will add Google's fonts as they're free to use and easily accessible. See [here](https://fonts.google.com/).

2. Once you've chosen the font that will work, select it by clicking the " + " in the corner of the font tile.

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font1.png>
</p>

3. By selecting it, a window should open in the bottom right of the page containing a link that could normally be added to your HTML header, but if you want to export your application to a native environment, or even just to have it functioning offline, the CSS and font files will need to be added manually.

<p align="center">
  <img  src=_media/_screenshots/example-add-new-font2.png>
</p>

4. By opening the link in the HTML snippet in a new tab, we can see the font's CSS code.

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font3.png>
</p>

5. The fonts can now be placed into your project by copying the CSS code and pasting it in the "Custom Global Styles" section found at the top of the "UI configuration" in the "theme.css" file in the Divblox setup.

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font4.png>
</p>

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font5.png>
</p>

6. You have now added a custom font to your project, but this is only going to work for online apps that are able to retrieve the font files. To have a native app the font files need to be downloaded. To get these files copy the URL of the font file, which is found in the CSS code that was just copied, into a new browser tab. Opening the URL will start the download of the file. This should be saved in "divblox-master/projects/assets/fonts". Repeat this step for all the file links found in the CSS code that was copied as the links are all unique.

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font6.png>
</p>

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font7.png>
</p>

7. The saved files need to be linked to the CSS code. Rather than having the URL to the file, it can be replaced with :

```
../assets/fonts/[ PLACE_FONT_FILE_NAME_HERE ]

```

<p align="left">
  <img  src=_media/_screenshots/example-add-new-font8.png>
</p>

8. Your project should have locally stored fonts. Remember to save the UI configuration before moving on.

## Global variables for non-SPA apps

A benefit of having a single page application (SPA) is that the variables that are defined keep their value when the page refreshes. This is because the user side the application is rewriting the same page instead of receiving new pages from a server. This ability to maintain your variable values between pages is lost when designing a non-SPA app. The solution Divblox has incorporated are global functions that can store and retrieve variables. These functions can be found in "/assets/js/divblox.js".

```Javascript
/**
 * Adds a key:value pairing to the global_vars array and stores it in the app state
 * @param {String} name The name of the variable to store
 * @param {String} value The value to store
 * @return {Boolean|*} false if a name was not specified.
 */
function setGlobalVariable(name,value);

/**
 * Returns a global variable from the global_vars array by name
 * @param {String} name The name of the variable to return
 * @return {String} The value to return
 */
  function getGlobalVariable(name);

/**
 * Sets a global id that is used to constrain for a specified entity
 * @param {String} entity The name of the entity to which this constrain id applies
 * @param {Number} constraining_id The id to constain by
 * @return {Boolean|*} false if a name was not specified.
 */
  function setGlobalConstrainById(entity,constraining_id);

/**
 * Returns a global id that is used to constrain for a specified entity
 * @param {String} entity The name of the entity to which this constrain id applies
 * @return {Number} The id to constain by. -1 If not set
 */
  function getGlobalConstrainById(entity) ;
```

## Changing the logo

### For a standard web app

For a standard web app or site changing the main logo and icon can be done by:

1. Opening the "UI configuration" tile on the Divblox setup page.

<p align="left">
  <img  src=_media/_screenshots/example-change-logo1.png>
</p>

2. Drag and drop your logo or icon of choice into the upload areas.

<p align="center">
  <img  src=_media/_screenshots/example-change-logo2.png>
</p>

3. Divblox updates the logo upon adding the new image.

<p align="center">
  <img  src=_media/_screenshots/example-change-logo3.png>
</p>

4. Opening up a page with the logo on it will show that it has been updated.

<p align="center">
  <img  src=_media/_screenshots/example-change-logo4.png>
</p>

### For a progressive web application

A progressive web application (PWA) is one that behaves more "app-like" by having features such as being independent of connectivity, can be installed to a home screen and have push notifications.

Since these applications can be placed on a home screen the app requires features that are outside of a app's pages, meaning that it will have both a launch icon and a splash page that gets displayed when the app is launched.

1. The icon can be set by changing the name of icon you have to that of the default icon, this way your logo will be loaded in. First, in "manifest.json" are the names for the app icons. Change the name of the images that you want to add to match these so that they can be used.

<p align="center">
  <img  src=_media/_screenshots/example-change-plogo1.png>
</p>

2. Place the images inside your projects image folder, "/project/assets/images".

3) The splash page is changed similarly. In the "index.html", inside of the header are all the file paths to the splash page and mobile application launch icons. Change the names the images that you have to match the name of the images used in this file. Place your images in "/project/assets/images".

<p align="center">
  <img  src=_media/_screenshots/example-change-plogo2.png>
</p>

!> Do not change the file paths in "manifest.json" and "index.html" to match your images.

## Displaying your logo

Displaying your application's logo on a page is done by simply adding the "app_logo" class into your HTML file where you need it to be displayed.

1. The following HTML line is used to place the logo on your page.

```HTML
<div class="app_logo" />
```

2. A way of adding it to a container is to start by opening the component you want to have a logo on in the "Component Builder".

3. In a row of a container click " + Add Component"

4. Click "Add Custom Html" to insert the code for the logo into the container.

<p align="center">
  <img  src=_media/_screenshots/example-adding-logo1.png>
</p>

5. Add in the line, that includes the logo from step 1, into the HTML section.

<p align="center">
  <img  src=_media/_screenshots/example-adding-logo2.png>
</p>

6. Save and close to view the page. The logo should now be present in the container that was just created.

<p align="center">
  <img  src=_media/_screenshots/example-adding-logo3.png>
</p>

7. By inspecting the new item we can see that it uses the "img-fluid" class, meaning the logo will adjust to the container's width when the original image's width is larger than that of the container's width, otherwise it will remain the same size as the original image.

<p align="center">
  <img  src=_media/_screenshots/example-adding-logo4.png>
</p>

## User Profile image

This example will focus on placing the user profile image on any page.

1. Choose and open a page in the "Component Builder".

2. Inside a container on the page, place a new component. Find and select "imageViewer". Before adding the image viewer to the page it will need a unique identifier, or "UID", so that it is identifiable and when placing the profile picture in it, it won't disrupt other image viewer components on the page.

<p align="center">
  <img  src=_media/_screenshots/example-adding-profilePic1.png>
</p>

3. Create the image viewer and take note that there is no image to be viewed.

<p align="left">
  <img  src=_media/_screenshots/example-adding-profilePic2.png>
</p>

4. Edit the page and open the "Js" tab. You'll be able to see the "imageViewer" has been loaded in as a "sub-component". To add the profile picture to the viewer as the page is loaded we use "subComponentLoadedCallback()" which is called when each of the sub-components on the page have been loaded. In this function we can check for a specific UID to select a specific sub-component from the page, and then get the current user's profile picture path and update the image viewer's image.

<p align="center">
  <img  src=_media/_screenshots/example-adding-profilePic3.png>
</p>

```js
subComponentLoadedCallBack(component) {
  super.subComponentLoadedCallBack(component);
  if (component.getUid() === "[Place_Your_Uid_Here]") {
    getCurrentUserAttribute("ProfilePicturePath", function(logo_path) {
      component.updateImage(logo_path);
    })
  }
}

```

5. Save and reload the page. The user profile picture has now be loaded into the image viewer as the page loads.

<p align="left">
  <img  src=_media/_screenshots/example-adding-profilePic4.png>
</p>

## Sending an email

Divblox implements PHPMailer (https://github.com/PHPMailer/PHPMailer) to send emails. Divblox will automatically log all email sending activity in a table called `EmailMessage`. Therefore, it is important to ensure that your database is correctly set up and you have done a synchronization on the data model before continuing.

Before sending emails you need to configure your email settings within Divblox. Fill in the necessary parameters in the `EmailSettings` class located in the file `/project/assets/php/project_classes.php`.

```php
abstract class Email_Settings extends EmailSettings_Framework {
  // Example using Gmail
  public static $SMTPSERVER = 'smtp.gmail.com';
  public static $SMTPUsername = 'user.divblox@gmail.com';
  public static $SMTPPassword = 'secret_password';
  public static $SMTPPort = 587;
  // To disable verbose debug output, use DEBUG_OFF
  public static $SMTPDebugMode = \PHPMailer\PHPMailer\SMTP::DEBUG_SERVER;
  // Enable TLS Encryption; also accepts 'ENCRYPTION_STARTSMTPS'
  public static $SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
  public static $SMTPForceSecurityProtocol = true;
  public static $SMTPAUtoTLS = false;
}
```

> We are overriding the default parameters set in the `EmailSettings_Base` class. This is part of the Divblox best practices, as your changes to Divblox base files may be deleted as Divblox replaces the files with updated ones.

The chain of inheritance is as follows:

<p align="left">
  <img  src=_email-media/EmailClassExtensions.png>
</p>

For some email servers such as Gmail, security protocols are expected. For the above Gmail example, TLS is mandatory and hence we can either set `$SMTPAutoTLS = true;` which will always set the security protocol to TLS, or we can define which protocol to use,
`$SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;` and then force the protocol to match the previously defined one, using `$SMTP ForceSecurityProtocol = true;`

We are now ready to use the `EmailManager` class to prepare and send emails.

1. Prepare your email with `EmailManager::prepareEmail("Test Subject", "A test message");`
2. Add one or multiple recipient addresses with `EmailManager::addRecipientAddress("recipient.address@gmail.com", "Recipient Name");`
3. Optionally, add CC addresses with `EmailManager::addCCAddress("recipient.address@gmail.com");`
4. Optionally, add BCC addresses with `EmailManager::addBCCAddress("recipient.address@gmail.com");`
5. Optionally, add attachments with `EmailManager::addAttachment("file_path_from_root", "file_name_to_display");`
6. Send your email with `EmailManager::sendEmail($ErrorInfo);`. `$ErrorInfo` is a variable that is passed by reference and will result in an array that is populated with any additional information regarding the success or failure of the function.

```php
// Step 1: Prepare the email
EmailManager::prepareEmail("Test Subject", "A test message");
// Step 2: Add recipient/s
EmailManager::addRecipientAddress("recipient.address@gmail.com", "Recipient Name");
// Step 3-5: (Optional) Add CC/BCC addresses and/or attachments
// EmailManager::addCCAddress("recipient.address@gmail.com");
// EmailManager::addBCCAddress("recipient.address@gmail.com");
// EmailManager::addAttachment("file_path_from_root", "file_name_to_display");
// Step 6: Send the email
if (EmailManager::sendEmail($ErrorInfo)) {
    // This means the email was successfully sent,
    // additional info can be found in the array $ErrorInfo
} else {
    //This means the email was NOT successfully sent,
    // additional info can be found in the array $ErrorInfo
}
```
