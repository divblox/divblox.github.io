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

## Sidebar page navigation
>This example will cover adding an item to the side navigation bar to be able to move between pages.

1. Create a new page from an existing component. In this example we will use the blank page with a sidebar . See [Creating a new page](#creating-a-new-page) for more info.

 <p align="left">
  <img  src=_media/_screenshots/example-page-navigation1.png>
</p>

2. Select an appropriate "page_component_name" as it will be used later to link the page to the item in the navigation bar.

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation7.png>
</p>


3. To add a new item to the navigation bar, open up the "side_navbar" from the "Component builder".

<p align="left">
  <img  src=_media/_screenshots/example-page-navigation2.png>
</p>

4. Click "Edit Component" and then open the "HTML" tab.

5. Add a new item to the navigation bar by placing the lines below under the existing items in the components HTML file, in the unordered list labeled "flex-column" along with any other items present in the list.

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
