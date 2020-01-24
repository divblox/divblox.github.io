## Creating a new page
>This example covers creating a new page

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
<video id="examplePageCreateVid" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/example-page-create-vid1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('examplePageCreateVid')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('examplePageCreateVid')" type="button" class="video-control-button">
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

Navigation bars allow a user to choose which page they want to end up on, for example being on a home page and wanting to see your profile page.  Page redirections come into play when the page is no longer required by the user and therefore the site will move you somewhere more relevant, for instance if a user is no longer logged into a site they'll be redirected to the login page when trying to access the site because their user roles switched from "user" to "anonymous". Therefore in order to navigate the site these two methods must be included into your project.

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

``` CSS
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
    <a id="[ADD_YOUR_ITEM_NAME_HERE]" class="nav-link navigation-activate-on-item3" href="#"><i class="fa fa-link" aria-hidden="true"></i><br/>[ADD YOUR ITEM TILE HERE]</a>
</li> 
<!-- change the Item ID and Title above -->

```
<p align="left">
  <img  src=_media/_screenshots/example-page-navigation3.png>
</p>

6. Move over to the "Js" tab to connect both the page created in Step 1 and the new navigation item in Step 4. Place the code below in the "Js" file under the two existing button event handlers. This should include the Id of the menu item, found in this components HTML file, and the page component name from the page's Js file inside the function "registerDomEvents()". 

```javascript

getComponentElementById(this,'[ADD_YOUR_ITEM_NAME_HERE]').on("click", function () {
    loadPageComponent("[page_component_name]");
    return false;
});
// add your navigation bar item ID above and your page_component_name

```

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation4.png>
</p>

7. You should now have a navigation bar on the side that has an item that, when clicked, will open up the page created at the beginning of the example. To test this functionality open up and any page containing the side navigation bar and click the "view page" in the bottom right of the window. Click your new menu item and you should be redirected to the page created at the beginning  of the example.

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation5.png>
</p>

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation6.png>
</p>



Demonstration:
<video id="examplePageCreateVid" muted="" playsinline="" preload="auto" autoplay>
  <source src="_videos/example-page-sidebar-item-vid1.mp4" type="video/mp4">
  Video is not supported
</video>
<button onclick="replayVideo('examplePageCreateVid')" type="button" class="video-control-button">
<i class="fa fa-repeat"></i>
</button>
<button onclick="fullScreenVideo('examplePageCreateVid')" type="button" class="video-control-button">
<i class="fa fa-expand"></i>
</button>


## Other Navigation tools

>In this section the topic of the various navigation bar components will be discussed.



### Side navigation bar 

 <p align="left">
  <img  src=_media/_screenshots/example-page-navigation8.png>
</p>

The sidebar is a more recent variation of the Navigation bar, and is considered by some to be the primary navigation bar to use for building Divblox applications. The Sidebar is an excellent component for designing both desktop and mobile applications, as the "page width" is no longer a required consideration. The general purpose is to place page shortcuts inside of it as a way of moving to a desired page without getting in the way of any other navigation bars. Alternatively it can be utilized as a tool bar with different buttons to interact with components or initiate operations on the page.

The sidebar is more often than not placed on the left of the page, as to not interfere with the scroll bar, and filled with a list of items (See [Adding items to the navigation bar](#Adding-items-to-the-navigation-bar)). For desktop applications the side bar can permanently sit adjacent to the main page while for mobile applications it can be retracted, and then expanded, to maximize the screen real estate available.

### Bottom navigation bar 

<p align="centre">
  <img  src=_media/_screenshots/example-bottom-nav1.png>
</p>

The bottom navigation bar is a tool most common with apps or webpages that are created for mobile devices. Having your navigation items placed at the bottom makes accessing it very easy because your fingers aren't required to stretch to the top side of the page.  <br>

This is an element that usually remains the same across most pages, from a profile page to a main page the navigation items are not going to change, and therefore a good practice to keep these consistent is to use the existing pages as a template and create a copy of the given pages to have your own default page to work from (See [Default pages](#Default-pages)). 



### Top navigation bar 

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav1.png>
</p>

The top navigation bar is commonly used when designing website pages. This comes in the form of a universal navigation item that is always present at the top of the page and makes navigation between pages easier. Top navigation bars are often the first thing that get seen on a site as your eyes scan from top to bottom, which means you should include more site details such as a logo for looks or a user profile tab to make accessing it easier. <br>

If you wish to make changes to the default bar to include your own logo or item list, it can be done by making a new component from the existing one and adding that to your default page(See [Customizing Components](#Customizing-Components)).



### Top instance navigation bar

<p align="center">
  <img  src=_media/_screenshots/example-instance-nav1.png>
</p>  


Instance pages are pages that, more often than not, have two navigation options, namely "back", that returns to the previous page, and "confirm" that moves you from the current page to the next. A common application for this is for form pages, which collect information from a user. These have a "return" button to leave the form and a "confirm" to save changes made on that form, submit that data to a database, and then take you to a new page. <br>
This is also frequently used in mobile applications and as the name suggests it is used in instances and isn't a permanent navigation bar. It adds navigation functionality to the page without changing the main navigation bar. 

The instance navigation bar is an item that, although, looks the same and feels the same to use no matter where it pops up the functionality when a button is clicked can change dramatically between instances. Editing this functionality is as easy as creating a copy of the default "top_instance_navbar" and adding functionality to the existing callback functions that are triggered by the buttons in the navigation bar (See [Overwriting default functions](#Overwriting-default-functions)).




## Divblox best practices 

Divblox is a unique tool for web development as opposed to more traditional software development tools. As a result a few "good practices" have emerged. These came about to ensure consistency across your application, increase development productivity and maximize the functionality that Divblox provides.

>The recommended Divblox best practices that are demonstrated in the following examples include:
- Using the default pages as a template to generate new pages
- Replacing page components with a custom copy of that component
- Overwriting default functions to add functionality to existing components

### Default pages
> This example covers creating a default page from which to work from to maintain functionality and aesthetics across a site without making changes to exsisting components that you want to use at a later time. Using the a page with a bottom navigation bar, we can create our own page that inherits all of the existing pages components.


1. Create a new page component from the default "blank_page_with_bottom_nav". 

<p align="centre">
  <img  src=_media/_screenshots/example-bottom-nav2.png>
</p>

2. For any future pages, you now have a default page from which to create all of your new pages from. This ensures consistency in both looks and feel. It makes the overall experience of the page a more imersive . For instance navigation items remain the same across pages, or your chosen background is now on all the pages without having to add it every time a new page is created. This practice leaves the original pages untouched incase you wish to create a new page from them. 


### Customizing Components
> Divblox comes with default components like pages and navigation bars, but you might not want yours to look the same or behave the same. To do this we can create custom versions of the existing components and to load them in place of the default ones. This will reduce the amount of time it would take to make a custom item by easing the process required to create new components. This is illustrated in the example below, where an existing navigation bar is duplicated, edited and then used to replace the exsisting navigation bar on a default page (see [Default pages](#Default-pages) ).

1. Start by creating a new navigation bar from the existing "top_navbar" component. 

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav2.png>
</p>

2. All the changes you want can now be made to your new navigation bar, like adding new menu items or changing the look and feel without changing a default item. In this example the item titles have been altered.

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav3.png>
</p> 

3. Now that the custom navigation bar has been created it can be placed in your default page that will be used as a template for pages that require a top navigation bar. Start by creating the page from the existing blank page that contains the top navigation bar.

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav4.png>
</p> 

4. To replace the already present navigation bar with your custom one, open the page and edit the component. Inside the "Js" tab there is a method named "constructor()" that is used to populate the page with its sub-components. The inclusion of the navigation bar component is located here. Replace the component load path for the current "top_navbar" with the custom navigation bar and save the changes made. 

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav5.png>
</p> 

5. Your custom navigation bar in now in your default page. To make changes to the navigation bar, you can edit the custom navigation component in the component builder and it will be loaded across all pages made from your new default page with a custom navigation bar. 

<p align="centre">
  <img  src=_media/_screenshots/example-top-nav6.png>
</p> 

### Overwriting default functions

> In Divblox it is common place to use the components provided as default, seen in [Customizing Components](#Customizing-Components). These components have been created with this purpose in mind and each component, such as the navigation bars, are filled with function place holders waiting for the a developer to fill them up with functionality. This example will uncover these place holder functions, specifically the ones located in the instance navigation bar, and to show where the functionality should be placed.

1. Create a new navigation bar from the existing "top_instance_navbar".


<p align="center">
  <img  src=_media/_screenshots/example-instance-nav2.png>
</p>

2. Open and edit your new component. Under the "Js" tab are the functions that register that an action has been performed and which function to call when this event has occurred. "RegisterDomEvents()" handles the interaction and the "cancelFunction()" and "confirmFunction()" are the functions that get called as a result of a button click. By default there isn't any functionality present, just console logs. By overwriting these functions you can add new behavior to your buttons.

<p align="center">
  <img  src=_media/_screenshots/example-instance-nav3.png>
</p>


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

>In this example we will add a new font to our project and then have that font present for offline applications as well.


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

``` Javascript
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