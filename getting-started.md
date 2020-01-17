## Typical Project Development Approach
Below is a visualization of the typical development approach you will follow when builing a Divblox project.

<div class="img-vertical-middle">

<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/1_basecamp.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">1.</span> Sign in to [basecamp.Divblox.com](https://basecamp.Divblox.com/?view=login) <br>
    
</div>
<i class="fa fa-arrow-down"></i>
<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/2_sandbox.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">2.</span> Create a new project and click "Open in Sandbox" <br>

</div>
<i class="fa fa-arrow-down"></i>
<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/3_data_modeler.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">3.</span> Start by modeling your data structure using the Divblox data modeler <br>

</div>
<i class="fa fa-arrow-down"></i>
<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/4_component_builder.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">4.</span> Use the Divblox component builder to create various components that will provide your app's functionality  <br>

</div>
<i class="fa fa-arrow-down"></i>
<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/5_local_environment.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">5.</span> Initialize a local deployment environment (also called a development environment) to pull in your sandbox changes and get your project ready to be published  <br>

</div>
<i class="fa fa-arrow-down"></i>
<div class="dev-approach-step" style="background:#f7f7f7;">

![Sign in](_media/6_server.png ':size=180') <br><span style="color:#2c5e7c;font-weight:900;font-size:18px;">6.</span> Deploy your app to another deployment environment (any server of your choice) <br>

</div>

</div>

>Everything in Divblox is a component, from basic on screen elements, to full-blown pages. You can build sophisticated pages
using the Divblox component builder by creating the layouts you need and combining various components to fulfil your needs.

>In a local deployment environment, more advanced features are available:
- You can configure your server variables and modules
- You can configure your database connections
- You can export to native
- You have full access to your entire code base
- You can deploy your app to another deployment environment

>A deployment environment is defined as an instance of a project, that is hosted on a web server, which is accessible by a user.
These can include, but are not limited to:
- A local web server on a development computer
- A cloud based web server

## Sandboxes
>A Divblox sandbox is a special type of deployment environment that is created and owned by Divblox. This environment runs on Divblox's servers and is accessible to the public. This environment can only be managed by the user that initiated it.

### Initializing a new Sandbox
Creating a new sandbox is easy:
1. Start by creating your project at [basecamp.Divblox.com](https://basecamp.Divblox.com/?view=login)

![Sandbox Step 1](_media/_screenshots/sandbox-step1.png)

2. Complete the required fields and click "Create"

![Sandbox Step 2](_media/_screenshots/sandbox-step2.png)

2. You are now ready to launch your sandbox by clicking on "Open in Sandbox"

![Sandbox Step 3](_media/_screenshots/sandbox-step3.png)

### Downloading a Sandbox
Sandboxes are great for prototyping and even to deploy small projects, but if you are serious about your project, 
at some point you will need to download your sandbox progress and continue on a local development environment.

To download your sandbox, all you need is a [local installation of Divblox](#download-Divblox) with your [project's API key](#Divblox-api-key) configured. 
From here you can click on the "Sandboxes" setup block to download your sandbox or deploy your local changes to your sandbox.

![Sandbox Step 4](_media/_screenshots/sandbox-step4.png)

>Sandboxes are controlled by your local deployment environments. 
This means that you can deploy to your sandboxes from any local deployment environment as well as download any changes that were made in your sandboxes to your local environments

### Sandbox best practices
Divblox makes it super easy to transfer content between your local deployment environments and your sandboxes, but this can also be risky. 
When downloading your sandbox to a local environment, always make sure that you have backed up your local project files. The following is a 
shortlist of tips to help you get the most out of sandboxes:
1. Always make use of a code versioning service such as GitHub, GitLab or BitBucket
2. When downloading sandbox changes to a local environment, make sure to do this in a feature branch which can be reviewed before merging with your master project branch.
3. Re-initializing a sandbox every now and then can be a good idea to ensure data integrity.
4. Make regular backups of your sandbox data through the Data Modeler "Data Export" tool

# Downloading Divblox 
Divblox provides a fully configured [VirtualBox](https://www.virtualbox.org/wiki/VirtualBox) image that allows you to start building Divblox apps in no time. The purpose of having this Virtual Machine (VM) is to be able to setup Divblox in a single neat package that is already pre-configured to simplify the installation process, although, Divblox can be installed on your local OS (see [Deployment](https://Divblox.github.io/#/deployment)), but is not recommended for development purposes.

>Start developing with Divblox in 3 easy steps:
1. Download VirtualBox and the Image containing Divblox
2. Import the image into VirtualBox and boot the VM
3. Start a new project and configure the API

## VirtualBox Download
!> Note: the virtual machine image is a 5 GB download.

The latest version of Oracle's VirtualBox should be [downloaded](https://www.virtualbox.org/wiki/Downloads) to ensure that the VirtualBox image runs properly. 

The VM (.ova file) that contains Divblox and all the accompanying software can be downloaded [here](https://drive.google.com/file/d/1bIVx1KMsO8K1IHNgqq_RTc5h619dHBMH/view).

## Loading the Virtual machine 
After installing VirtualBox on your device and running the application add the image by opening "File" -> "Import Appliance".

<p align="center">
  <img  src=_media/_screenshots/virtual-machine-setup1.png>
</p>

From here find and add the Divblox VM image file (.ova). On the following window you will be prompted to "Import". Adding the image may take several minutes to install and configure.

<p align="center">
  <img  src=_media/_screenshots/virtual-machine-setup2.png>
</p>

Once your VM has been loaded it can be started by "double-clicking" on the newly added machine in the VirtualBox application. This will then open a separate window and begin booting up the Divblox image.

!> Note: The boot sequence is complete when you are greeted by the Welcome page.

## Starting with Divblox

<p align="center">
  <img  src=_media/_screenshots/virtual-machine-setup3.png>
</p>

The Welcome page is necessary to read through in order to operate the virtual machine.
It contains information such as:
- Username and passwords for the VM
- Relevant file locations and permissions
- Quick start links 
- Information about the VM software

After you have familiarised yourself with the introduction page, the first thing you should do is to configure your project's _Free_ Divblox API key.

1. To generate your new API see [Divblox API key](https://Divblox.github.io/#/getting-started?id=Divblox-api-key).

2. Open the "local starter project" from the link located under "Quick Start links" on the welcome Page.

3. Click "dx API key" to open the dialog that allows you to copy in and update your API key.

<p align="center">
  <img  src=_media/_screenshots/setup-configure-api-key.png>
</p>







# Configuration
## Modules

Divblox allows you to define multiple modules for your project. Modules are useful for grouping related data objects. At least one module (The *Main* module) is required. 
Modules are essentially separate databases that ring-fence certain data objects

## Environments

Divblox allows you to define multiple environments for your project (local, test, staging, production, etc). 
When you start up Divblox for the first time, it will automatically generate the default environment for your current project.

![Environments Screenshot](_media/_screenshots/setup-environments.png)

>For an environment to function correctly, the following needs to be configured:

- **Environment Name** - Can be anything. This is just used to identify the environment
- **App Name** - The name of your app. This will be displayed as the document title
- **Maintenance Password** - This is a password used internally by Divblox for sensitive operations, for example to drop a database
- **The server's host name or IP address** - The url or IP address where this environment is deployed
- **The document root** - The path to your web server's www folder
- **Subdirectory** - The sub directory in which your Divblox project resides (can be empty)
- **The Database configuration for each module** - The connection information for every module's database

![Environments Screenshot](_media/_screenshots/setup-configure-environments.png)
![Environments Screenshot](_media/_screenshots/setup-configure-database.png)

## Divblox Api key
- When making use of the Divblox build functions, Divblox always checks that you have a valid license. The Divblox Api key is used to enable this license check.
- Your *FREE* Divblox Api key can be obtained in the following way:

    1. Go to [Divblox basecamp](https://basecamp.Divblox.com), and register for an account.
    2. Then log in and, on the dashboard, click "+ Project" to create a new project. This will automatically generate your Api key.
    3. Save your project and copy your Api key into your project configuration.

- If you have any trouble creating your project and getting a key, please [contact us](https://Divblox.com/#contact) (support@Divblox.com) to request your *FREE* Api key

![Divblox Api Key](_media/_screenshots/setup-configure-api-key.png)

## dx Admin Password
This password is used to manage your Divblox project and allows access to the setup page and various other system features.

!>It is important to select a secure password as your admin password for public and/or production solutions

![Admin password](_media/_screenshots/setup-configure-admin-password.png)

## JS Config
The main configurable items for the Divblox javascript engine can be configured from the JS Config setup block.
![JS Config](_media/_screenshots/setup-js-config.png)

### SPA Mode
**Single Page Application mode** is ideal for apps that will function in multiple forms, from web, to progressive, to native. 
Divblox allows you to configure your web app to run as a single page application or as a normal web application. 
When in SPA mode, Divblox does not open a new web page when loading a new page, but rather updates the DOM with the new page content.

!>If you are building for web only, it is recommended to turn SPA mode off.

### Service Worker
Divblox allows you to configure a service worker to handle and cache requests. You can decide to toggle it on or off. It is also sometimes useful to force the service worker to reload when assets are modified.

!>When the service worker is on during development (debug), ensure that you have the option to "Update on reload" enabled in your browser.

!>It is recommended to disable the service worker during development, since this can cause assets to be loaded from cache.

### Debug Mode
Debug mode enables robust logging of your web application. This is useful when in development mode, but can slow down your app in production environments.

!>It is recommended to turn debug mode off for production environments, but to keep it on in local/development environments.

### Allow Feedback
Divblox allows you to toggle the project-wide feedback functionality on/off. When this is on, the user will always see a feedback button on the right of the screen.
This will allow you to collect feature requests and bug reports for your pages.

!>Feedback is stored at basecamp.Divblox.com. This means that feedback is accessible project-wide, for any environment.





