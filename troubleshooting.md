# Basic Troubleshooting tips
Because of the nature of web development, divblox supports multiple operating systems. 
The recommended OS for divblox development is MacOS, since it will allow for all functionality, including export
to iOS, to function correctly. However, both Windows and Linux are also supported.

# Most common issues
## Browser console
divblox makes use of the browser console to inform the developer of errors. Ensure that the browser console is open during 
installation and/or development to quickly diagnose the most common problems.

## Installation checker
The [installation checker](getting-started.md?id=installation-checker) might fail if you do not already have a database 
connection configured. If your minimum database requirements are not met according to the installation checker, please first
[configure your database settings](getting-started.md?id=environments) before checking again.

## Linux
divblox makes use of code generation to create its components and ORM class files. This means that full write access is 
required in order for everything to work correctly. To avoid most of the common issues in this regard, ensure that the user
that is used to run your web server has ownership and write permission for the divblox folder.

## Windows
divblox was created on a UNIX based operating system and it is recommended that you use MacOS for the best experience when developing with the framework. However, we do try to support Windows as far as possible. The following are common issues users experience when setting up divblox on Windows environments:
### Basecamp communication error (SSL)
The installation wizard complains that the connection to basecamp cannot be established because of an SSL Certificate problem. Specifically: unable to get local issuer certificate. To solve this problem, follow these steps:

1. Download cURL's cacert.pem certificate from the official cURL website [here](https://curl.haxx.se/docs/caextract.html)
2. Save this cacert.pem file in your webserver's root folder, for example C:\MAMP\cacert.pem
3. Update your php.ini file to tell cURL where to locate this certificate. Add the following to the bottom of your php.ini file:
```
curl.cainfo="C:\MAMP\cacert.pem" 
openssl.cafile="C:\MAMP\cacert.pem"
```
Note, that your path may be different, depending on the webserver and path you chose to save the file.

4. Next, you need to enable mod_ssl and php_openssl.dll. To enable mod_ssl, you can add the following to your Apache configuration file:
```
LoadModule ssl_module C:\MAMP\bin\apache\modules\mod_ssl.so
```
Note, that your path may be different, depending on the webserver.
To enable php_openssl.dll, you will need to uncomment the following line in your php.ini file:
```
extension=php_openssl.dll
```
5. Restart your webserver and refresh the divblox installation checker to confirm that things are working now.

### Lowercase table names
divblox relies on code generation to create the ORM for you project. This generation is done, based on the tables in your database. If the tables in your database do not have case-sensitive names, the classes in the corresponding ORM might fail to work correctly. The installation checker will display the following error:
```
Database table names case configuration: Failed! Please ensure that the database variable 'lower_case_table_names' is set to 2
```
To solve this, open your mysql configuration file and add the following:
- Look for: # The MySQL server [mysqld] and add this right below it: 
```
lower_case_table_names = 2
```
- Save the file and restart MySQL service

## ionCube
When you open your divblox project in the browser for the first time, you might encounter strange behaviour if ionCube 
has not been installed. Please follow [these steps](https://www.ioncube.com/loaders.php) to install ionCube for your OS.
