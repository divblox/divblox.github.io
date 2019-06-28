# Basic Troubleshooting tips
Because of the nature of web development, divblox supports multiple operating systems. 
The recommended OS for divblox development is MacOS, since it will allow for all functionality, including export
to iOS, to function correctly. However, both Windows and Linux are also supported.

# Most common issues
## Browser console
divblox makes use of the browser console to inform the developer of errors. Ensure that the browser console is open during 
installation and/or development to quickly diagnose the most common problems.
## Linux
divblox makes use of code generation to create its components and ORM class files. This means that full write access is 
required in order for everything to work correctly. To avoid most of the common issues in this regard, ensure that the user
that is used to run your web server has ownership and write permission for the divblox folder.
## ionCube
When you open your divblox project in the browser for the first time, you might encounter strange behaviour is ionCube 
has not been installed. Please follow [these steps](https://www.ioncube.com/loaders.php) to install ionCube for your OS.
## Installation checker
The [installation checker](getting-started.md?id=installation-checker) might fail if you do not already have a database 
connection configured. If your minimum database requirements are not met according to the installation checker, please first
[configure your database settings](getting-started.md?id=environments) before checking again.