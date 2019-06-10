# Introduction
> divblox is a web and mobile app development platform that allows anyone, from designers and analysts, to hard core developers, to collaborate and create amazing experiences in no time. 

# Getting started
## Prerequisites
- Apache/nginx, php, mysql/mariadb environment
- Ioncube loader for php 7.2

## Download divblox
- Explain where to download
- Add to your www folder
- Run apache and browse to localhost
- dx will check your installation and provide further guidelines on how to finish you installation
- Browse to /divblox and login to the setup page
- Open the installation checker and ensure that all systems indicate an OK status
- You are now ready to build with dx

## Installation checker
- Checks for php>=7.2
- Checks for mariadb >= 10.3 or mysql >= 5.6
- Checks your ioncube loader is installed. Explain why ioncube is required
- Provides guidelines on how to fix installation issues

# dx Api key
- Required to use dx. When making use of the dx build functions, dx checks that you have a valid license. The dx Api key is used to enable this license check

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
