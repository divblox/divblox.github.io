(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),o=(a(0),a(151)),l=a(154),r=(a(159),a(160),a(156)),s={id:"common-examples-other-common-examples",title:"Other Common Examples"},c={id:"common-examples-other-common-examples",isDocsHomePage:!1,title:"Other Common Examples",description:"checkUrlScroll();",source:"@site/docs/common-examples-other-common-examples.mdx",permalink:"/docs/common-examples-other-common-examples",sidebar:"someSidebar",previous:{title:"Hello World Example",permalink:"/docs/common-examples-hello-world-example"},next:{title:"Divblox Best Practices",permalink:"/docs/divblox-best-practices"}};Object(r.a)();var b=[{value:"Update the look and feel",id:"update-the-look-and-feel",children:[]},{value:"Adding Custom fonts to your project",id:"adding-custom-fonts-to-your-project",children:[]},{value:"Global variables for non-SPA apps",id:"global-variables-for-non-spa-apps",children:[]},{value:"Changing the logo",id:"changing-the-logo",children:[]},{value:"Displaying your logo",id:"displaying-your-logo",children:[]},{value:"User Profile image",id:"user-profile-image",children:[]},{value:"Sending an email",id:"sending-an-email",children:[]}],p={rightToc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"common-examples"},"Common Examples"),Object(o.b)("h3",{id:"update-the-look-and-feel"},"Update the look and feel"),Object(o.b)("p",null,"The aesthetics of a page is primarily controlled by CSS."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Editing the way a page looks can be done by first opening "UI configuration" from the Divblox setup page.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Look and Feel 1",src:Object(l.a)("_media/_screenshots/example-look-and-feel1.png")})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Either add new CSS class, or edit the existing ones, inside "theme.css". To view the statements click the "bi-directional arrow" to expand the code folds.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Look and Feel 2",src:Object(l.a)("_media/_screenshots/example-look-and-feel2.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'By using these classes we can change the look of a certain item. When a component is placed on a page, it calls the CSS class from its HTML script. For instance inside the "side_navbar" component\'s HTML tab, and inside the HTML "navigation tag" is where the CSS class is referenced. Changing this will result in style changes to the navigation bar.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Look and Feel 3",src:Object(l.a)("_media/_screenshots/example-look-and-feel3.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Using the CSS classes in "theme.css", the navigation bar can be changed from dark to light using the classes "sidebar-dark" or "sidebar-light".')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Look and Feel 3",src:Object(l.a)("_media/_screenshots/example-look-and-feel4.png")})),Object(o.b)("h3",{id:"adding-custom-fonts-to-your-project"},"Adding Custom fonts to your project"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In this example we will add a new font to our project and then have that font present for offline applications as well.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start by finding a font for your project. This example will add Google's fonts as they're free to use and easily accessible. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://fonts.google.com/"}),"here"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Once you\'ve chosen the font that will work, select it by clicking the " + " in the corner of the font tile.'))),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 1",src:Object(l.a)("_media/_screenshots/example-add-new-font1.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"By selecting it, a window should open in the bottom right of the page containing a link that could normally be added to your HTML header, but if you want to export your application to a native environment, or even just to have it functioning offline, the CSS and font files will need to be added manually.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 2",src:Object(l.a)("_media/_screenshots/example-add-new-font2.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"By opening the link in the HTML snippet in a new tab, we can see the font's CSS code.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 3",src:Object(l.a)("_media/_screenshots/example-add-new-font3.png")})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},'The fonts can now be placed into your project by copying the CSS code and pasting it in the "Custom Global Styles" section found at the top of the "UI configuration" in the "theme.css" file in the Divblox setup.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 4",src:Object(l.a)("_media/_screenshots/example-add-new-font4.png")})),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 5",src:Object(l.a)("_media/_screenshots/example-add-new-font5.png")})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},'You have now added a custom font to your project, but this is only going to work for online apps that are able to retrieve the font files. To have a native app the font files need to be downloaded. To get these files copy the URL of the font file, which is found in the CSS code that was just copied, into a new browser tab. Opening the URL will start the download of the file. This should be saved in "divblox-master/projects/assets/fonts". Repeat this step for all the file links found in the CSS code that was copied as the links are all unique.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 6",src:Object(l.a)("_media/_screenshots/example-add-new-font6.png")})),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 7",src:Object(l.a)("_media/_screenshots/example-add-new-font7.png")})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"The saved files need to be linked to the CSS code. Rather than having the URL to the file, it can be replaced with :")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"../assets/fonts/[ PLACE_FONT_FILE_NAME_HERE ]\n\n")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Add new Font 8",src:Object(l.a)("_media/_screenshots/example-add-new-font8.png")})),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Your project should have locally stored fonts. Remember to save the UI configuration before moving on.")),Object(o.b)("h3",{id:"global-variables-for-non-spa-apps"},"Global variables for non-SPA apps"),Object(o.b)("p",null,'A benefit of having a single page application (SPA) is that the variables that are defined keep their value when the page refreshes. This is because the user side the application is rewriting the same page instead of receiving new pages from a server. This ability to maintain your variable values between pages is lost when designing a non-SPA app. The solution Divblox has incorporated are global functions that can store and retrieve variables. These functions can be found in "/assets/js/divblox.js".'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Javascript"}),"/**\n * Adds a key:value pairing to the global_vars array and stores it in the app state\n * @param {String} name The name of the variable to store\n * @param {String} value The value to store\n * @return {Boolean|*} false if a name was not specified.\n */\nfunction setGlobalVariable(name,value);\n\n/**\n * Returns a global variable from the global_vars array by name\n * @param {String} name The name of the variable to return\n * @return {String} The value to return\n */\n  function getGlobalVariable(name);\n\n/**\n * Sets a global id that is used to constrain for a specified entity\n * @param {String} entity The name of the entity to which this constrain id applies\n * @param {Number} constraining_id The id to constain by\n * @return {Boolean|*} false if a name was not specified.\n */\n  function setGlobalConstrainById(entity,constraining_id);\n\n/**\n * Returns a global id that is used to constrain for a specified entity\n * @param {String} entity The name of the entity to which this constrain id applies\n * @return {Number} The id to constain by. -1 If not set\n */\n  function getGlobalConstrainById(entity) ;\n")),Object(o.b)("h3",{id:"changing-the-logo"},"Changing the logo"),Object(o.b)("h4",{id:"for-a-standard-web-app"},"For a standard web app"),Object(o.b)("p",null,"For a standard web app or site changing the main logo and icon can be done by:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Opening the "UI configuration" tile on the Divblox setup page.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Logo 1",src:Object(l.a)("_media/_screenshots/example-change-logo1.png")})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Drag and drop your logo or icon of choice into the upload areas.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Logo 2",src:Object(l.a)("_media/_screenshots/example-change-logo2.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Divblox updates the logo upon adding the new image.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Logo 3",src:Object(l.a)("_media/_screenshots/example-change-logo3.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Opening up a page with the logo on it will show that it has been updated.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Logo 4",src:Object(l.a)("_media/_screenshots/example-change-logo4.png")})),Object(o.b)("h4",{id:"for-a-progressive-web-application"},"For a progressive web application"),Object(o.b)("p",null,'A progressive web application (PWA) is one that behaves more "app-like" by having features such as being independent of connectivity, can be installed to a home screen and have push notifications.'),Object(o.b)("p",null,"Since these applications can be placed on a home screen the app requires features that are outside of a app's pages, meaning that it will have both a launch icon and a splash page that gets displayed when the app is launched."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'The icon can be set by changing the name of icon you have to that of the default icon, this way your logo will be loaded in. First, in "manifest.json" are the names for the app icons. Change the name of the images that you want to add to match these so that they can be used.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Change logo 1",src:Object(l.a)("_media/_screenshots/example-change-plogo1.png")})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Place the images inside your projects image folder, "/project/assets/images".')),Object(o.b)("p",null,'3) The splash page is changed similarly. In the "index.html", inside of the header are all the file paths to the splash page and mobile application launch icons. Change the names the images that you have to match the name of the images used in this file. Place your images in "/project/assets/images".'),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Example Change logo 2",src:Object(l.a)("_media/_screenshots/example-change-plogo2.png")})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Do not change the file paths in "manifest.json" and "index.html" to match your images.'))),Object(o.b)("h3",{id:"displaying-your-logo"},"Displaying your logo"),Object(o.b)("p",null,'Displaying your application\'s logo on a page is done by simply adding the "app_logo" class into your HTML file where you need it to be displayed.'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The following HTML line is used to place the logo on your page.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<div class="app_logo"/>\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'A way of adding it to a container is to start by opening the component you want to have a logo on in the "Component Builder".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In a row of a container click " + Add Component"')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Click "Add Custom Html" to insert the code for the logo into the container.'))),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Logo 1",src:Object(l.a)("_media/_screenshots/example-adding-logo1.png")})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Add in the line, that includes the logo from step 1, into the HTML section.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Logo 2",src:Object(l.a)("_media/_screenshots/example-adding-logo2.png")})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Save and close to view the page. The logo should now be present in the container that was just created.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Logo 3",src:Object(l.a)("_media/_screenshots/example-adding-logo3.png")})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"By inspecting the new item we can see that it uses the \"img-fluid\" class, meaning the logo will adjust to the container's width when the original image's width is larger than that of the container's width, otherwise it will remain the same size as the original image.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Logo 4",src:Object(l.a)("_media/_screenshots/example-adding-logo4.png")})),Object(o.b)("h3",{id:"user-profile-image"},"User Profile image"),Object(o.b)("p",null,"This example will focus on placing the user profile image on any page."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Choose and open a page in the "Component Builder".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Inside a container on the page, place a new component. Find and select "imageViewer". Before adding the image viewer to the page it will need a unique identifier, or "UID", so that it is identifiable and when placing the profile picture in it, it won\'t disrupt other image viewer components on the page.'))),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Profile Pic 1",src:Object(l.a)("_media/_screenshots/example-adding-profilePic1.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create the image viewer and take note that there is no image to be viewed.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Profile Pic 2",src:Object(l.a)("_media/_screenshots/example-adding-profilePic2.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Edit the page and open the "Js" tab. You\'ll be able to see the "imageViewer" has been loaded in as a "sub-component". To add the profile picture to the viewer as the page is loaded we use "subComponentLoadedCallback()" which is called when each of the sub-components on the page have been loaded. In this function we can check for a specific UID to select a specific sub-component from the page, and then get the current user\'s profile picture path and update the image viewer\'s image.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Profile Pic 3",src:Object(l.a)("_media/_screenshots/example-adding-profilePic3.png")})),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'subComponentLoadedCallBack(component) {\n  super.subComponentLoadedCallBack(component);\n  if (component.getUid() === "[Place_Your_Uid_Here]") {\n    getCurrentUserAttribute("ProfilePicturePath", function(logo_path) {\n      component.updateImage(logo_path);\n    })\n  }\n}\n\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Save and reload the page. The user profile picture has now be loaded into the image viewer as the page loads.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Adding Profile Pic 4",src:Object(l.a)("_media/_screenshots/example-adding-profilePic4.png")})),Object(o.b)("h3",{id:"sending-an-email"},"Sending an email"),Object(o.b)("p",null,"Divblox implements PHPMailer (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/PHPMailer/PHPMailer"}),"https://github.com/PHPMailer/PHPMailer"),") to send emails. Divblox will automatically log all email sending activity in a table called ",Object(o.b)("inlineCode",{parentName:"p"},"EmailMessage"),". Therefore, it is important to ensure that your database is correctly set up and you have done a synchronization on the data model before continuing."),Object(o.b)("p",null,"Before sending emails you need to configure your email settings within Divblox. Fill in the necessary parameters in the ",Object(o.b)("inlineCode",{parentName:"p"},"EmailSettings")," class located in the file ",Object(o.b)("inlineCode",{parentName:"p"},"/project/assets/php/project_classes.php"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"abstract class Email_Settings extends EmailSettings_Framework {\n  // Example using Gmail\n  public static $SMTPSERVER = 'smtp.gmail.com';\n  public static $SMTPUsername = 'user.divblox@gmail.com';\n  public static $SMTPPassword = 'secret_password';\n  public static $SMTPPort = 587;\n  // To disable verbose debug output, use DEBUG_OFF\n  public static $SMTPDebugMode = \\PHPMailer\\PHPMailer\\SMTP::DEBUG_SERVER;\n  // Enable TLS Encryption; also accepts 'ENCRYPTION_STARTSMTPS'\n  public static $SMTPSecure = \\PHPMailer\\PHPMailer\\PHPMailer::ENCRYPTION_STARTTLS;\n  public static $SMTPForceSecurityProtocol = true;\n  public static $SMTPAUtoTLS = false;\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We are overriding the default parameters set in the ",Object(o.b)("inlineCode",{parentName:"p"},"EmailSettings_Base")," class. This is part of the Divblox best practices, as your changes to Divblox base files may be deleted as Divblox replaces the files with updated ones.")),Object(o.b)("p",null,"The chain of inheritance is as follows:"),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Email Class Extensions",src:Object(l.a)("_email-media/email_class_extensions.png")})),Object(o.b)("p",null,"For some email servers such as Gmail, security protocols are expected. For the above Gmail example, TLS is mandatory and hence we can either set ",Object(o.b)("inlineCode",{parentName:"p"},"$SMTPAutoTLS = true;")," which will always set the security protocol to TLS, or we can define which protocol to use,\n",Object(o.b)("inlineCode",{parentName:"p"},"$SMTPSecure = \\PHPMailer\\PHPMailer\\PHPMailer::ENCRYPTION_STARTTLS;")," and then force the protocol to match the previously defined one, using ",Object(o.b)("inlineCode",{parentName:"p"},"$SMTP ForceSecurityProtocol = true;")),Object(o.b)("p",null,"We are now ready to use the ",Object(o.b)("inlineCode",{parentName:"p"},"EmailManager")," class to prepare and send emails."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Prepare your email with ",Object(o.b)("inlineCode",{parentName:"li"},'EmailManager::prepareEmail("Test Subject", "A test message");')),Object(o.b)("li",{parentName:"ol"},"Add one or multiple recipient addresses with ",Object(o.b)("inlineCode",{parentName:"li"},'EmailManager::addRecipientAddress("recipient.address@gmail.com", "Recipient Name");')),Object(o.b)("li",{parentName:"ol"},"Optionally, add CC addresses with ",Object(o.b)("inlineCode",{parentName:"li"},'EmailManager::addCCAddress("recipient.address@gmail.com");')),Object(o.b)("li",{parentName:"ol"},"Optionally, add BCC addresses with ",Object(o.b)("inlineCode",{parentName:"li"},'EmailManager::addBCCAddress("recipient.address@gmail.com");')),Object(o.b)("li",{parentName:"ol"},"Optionally, add attachments with ",Object(o.b)("inlineCode",{parentName:"li"},'EmailManager::addAttachment("file_path_from_root", "file_name_to_display");')),Object(o.b)("li",{parentName:"ol"},"Send your email with ",Object(o.b)("inlineCode",{parentName:"li"},"EmailManager::sendEmail($ErrorInfo);"),". ",Object(o.b)("inlineCode",{parentName:"li"},"$ErrorInfo")," is a variable that is passed by reference and will result in an array that is populated with any additional information regarding the success or failure of the function.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'// Step 1: Prepare the email\nEmailManager::prepareEmail("Test Subject", "A test message");\n// Step 2: Add recipient/s\nEmailManager::addRecipientAddress("recipient.address@gmail.com", "Recipient Name");\n// Step 3-5: (Optional) Add CC/BCC addresses and/or attachments\n// EmailManager::addCCAddress("recipient.address@gmail.com");\n// EmailManager::addBCCAddress("recipient.address@gmail.com");\n// EmailManager::addAttachment("file_path_from_root", "file_name_to_display");\n// Step 6: Send the email\nif (EmailManager::sendEmail($ErrorInfo)) {\n    // This means the email was successfully sent,\n    // additional info can be found in the array $ErrorInfo\n} else {\n    //This means the email was NOT successfully sent,\n    // additional info can be found in the array $ErrorInfo\n}\n')))}d.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?i.a.createElement(h,r(r({ref:t},c),{},{components:a})):i.a.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},152:function(e,t,a){"use strict";var n=a(0),i=a(35);t.a=function(){return Object(n.useContext)(i.a)}},153:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(152),i=a(155);function o(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:o="/",url:l}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(i.a)(e))return e;const r=o+e.replace(/^\//,"");return a?l+r:r}},155:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(0);const n=()=>{setTimeout((function(){if("undefined"!=typeof window){let e=window.location.href.split("#");if(e.length>1){let t=e[1];document.getElementById(t).scrollIntoView()}}}),500)}},157:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},158:function(e,t,a){"use strict";var n=a(0),i=a(157);t.a=function(){return Object(n.useContext)(i.a)}},159:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(158),l=a(153),r=a(92),s=a.n(r);const c=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(o.a)(),[u,g]=Object(n.useState)(r);if(null!=d){const e=m[d];null!=e&&e!==u&&p.some(t=>t.value===e)&&g(e)}const f=e=>{g(e),null!=d&&h(d,e)},O=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":u===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},160:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);