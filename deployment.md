## Prerequisites
!>The following sections are only relevant for local and/or self provisioned server setup. For sandboxes, you can skip ahead to the [Data Modeler](data-modeler.md) section

>The divblox server-side functionality is built in php and therefore requires a php environment to be setup in order to function correctly.

>You can [skip ahead](hello-world.md) and just see the "Hello World" example to get a sense for how to build with divblox

- Download your favourite Apache/Php/Mysql distribution and configure to use the following:
    - Latest version of Apache
    - Php 7.2 or later
    - MySQL 5.6 or later or MariaDB 10.3 or later
    - The easiest way to get started is to download and install MAMP for either windows or mac: https://www.mamp.info/en/
    - Ensure that you have created a database for use with your divblox project

Some of the core divblox code is encoded using IonCube. To ensure that your divblox installation functions correctly, download and install the IonCube loader for Php 7.2 or later for your operating system.
- Download here: https://www.ioncube.com/loaders.php
- Don't worry if you have some trouble installing this. The [Installation checker](#installation-checker) will guide you through this process a bit later on as well.

# Download divblox
- You can download or fork the divblox public repo on github here: https://github.com/divblox/divblox
- Add the downloaded content to your apache "public_html" or "www" folder
- Ensure that your web server is running and navigate to http://localhost/ or http://localhost/[your-project-folder] (if you placed divblox within a sub folder)
- divblox will check your installation and, if needed, provide further guidelines on how to finish the installation
- To open the divblox setup page, browse to http://localhost/divblox or http://localhost/[your-project-folder]/divblox, depending on your installation
- Open the installation checker to ensure that all systems indicate an OK status. Once the installation checker indicates all is OK, you are ready to build with divblox

# Installation checker
The divblox installation checker is designed to ensure that your divblox project meets all the [prerequisites](#prerequisites) described above. It will also provide useful guidelines on how to solve installation related problems.
The main checks performed are listed below:
- Checks for php >= 7.2
- Checks for mariadb >= 10.3 or mysql >= 5.6
- Checks your IonCube loader is installed. [Learn why IonCube is required](#prerequisites) in the prerequisites section

!> The installation checker might fail if your [environments](#environments) have not yet been configured properly
