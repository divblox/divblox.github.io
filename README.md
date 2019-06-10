# Introduction
> Build full stack apps using javascript, html & php in a data driven way.<br/>
divblox is a web and mobile app development platform that allows anyone, from designers and analysts, to hard core developers, to collaborate and create amazing experiences in no time. 


# Getting started
## Prerequisites

The divblox server-side functionality is built in php and therefor requires a php environment to be setup in order to function correctly.
- Download your favourite Apache/Php/Mysql distribution and configure to use the following:
    - Latest version of Apache/nginx
    - Php 7.2 or later
    - MySQL 5.6 or later or MariaDB 10.3 or later
    - The easiest way to get started is to download and install MAMP for either windows or mac: https://www.mamp.info/en/

Some of the core divblox code is encoded using IonCube. To ensure that your divblox installation functions correctly, download and install the IonCube loader for Php 7.2 or later for your operating system.
- Download here: https://www.ioncube.com/loaders.php

## Download divblox
- You can download divblox zipped from https://divblox.com/releases or fork the divblox public repo on github here: https://github.com/divblox/divblox
- Add the downloaded content to your apache "public_html" or "www" folder
- Ensure that your web server is running and navigate to http://localhost/ or http://localhost/[your-project-folder]
- divblox will check your installation and, if needed, provide further guidelines on how to finish the installation
- To open the divblox setup page, Browse to http://localhost/divblox or http://localhost/[your-project-folder]/divblox, depending on your installation
- Open the installation checker to ensure that all systems indicate an OK status. Once the installation checker indicates all is OK, you are ready to build with divblox

## Installation checker
The divblox installation checker is designed to ensure that your divblox project meets all the <a href="/#/?id=prerequisites"> prerequisites</a> described above. It will also provide useful guidelines on how to solve installation related problems.
The main checks performed are listed below:
- Checks for php >= 7.2
- Checks for mariadb >= 10.3 or mysql >= 5.6
- Checks your IonCube loader is installed. <a href="/#/?id=prerequisites">Learn why IonCube is required</a> in the prerequisites section

# divblox Api key
- When making use of the divblox build functions, divblox always checks that you have a valid license. The divblox Api key is used to enable this license check

# dx Admin Password
- This password is used to manage your divblox project and allows access to this setup page and various other system features.

# Service worker
- divblox allows you to configure a service worker to handle and cache requests

# Data modeler
- Adapt documentation from: https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/19/ & https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/67/ & https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/24/

# Component builder
- Virtually everything in dx is a component. The component builder allows you to create and manage your project’s components in a visual environment and to combine various different components to create specific components for your project’s needs
- Talk about the default component builder page (creating new components and the various options for this. Searching for and Opening an existing component for modification). Talk about the default data model type components that can be generated
- Talk about the builder interface
- Describe the various parts of each component (html,js,css,php,json) in detail as well as the concept of basic components
- Talk about the components that ship with a new dx installation and their function

# divblox.js
- talk about its main purpose and how it should be used (as a global function library)
- Document each divblox.js function

# Project.js
- talk about its main purpose and how it should be used (as a global function library that can be used to override default divblox.js functions as well as add project specific ones)
- Document each standard project.js function

# divblox global request handler
- explain its purpose and best use practices
- Document its default functions

# ProjectFunctions 
- explain its purpose and best use practices

# ProjectClasses
- explain its purpose and best use practices
- Talk about object access
- Talk about component access

# divblox api’s
- describe it’s purpose and best practices

# Export to native
- talk about the philosophy 
- Talk about what practically happens when you export to native
- Talk about the prerequisites for exporting to native
