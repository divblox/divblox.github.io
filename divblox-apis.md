# Divblox API’s
## Exposing a custom API
To expose any of your app's functionality as an api to the outside world, you simply need to create an endpoint in the following manner:
<!-- - Let's say your api is to be called "api_example", then create a php script in the folder /project/api/api_example.php with the following basic construct: -->

1. Create a new php script that will contain your API operations and save it to the folder "/project/api/". 

2. Include "divblox.php" to use Divblox API classes.

```php
require("../../divblox/divblox.php");
```

3. Declare a new operation by calling the "addApiOperation()" function from the "PublicApi" class. The "Expected outputs", and "operation description" will be used when Divblox auto-generates the documentation for the newly created API, so do not overlook the importance of these description fields even though they don't directly effect functionality. The  "User readable name" (API operation name) is later used to link operations to other API functionality. 

```php
PublicApi::addApiOperation(
    ["Function Name"],
    ["Input Parameters"],
    ["Expected Outputs"] ,
    ["User readable name"] , 
    ["API operation description"]);
```

4. Initialize the API after your declarations using "initApi()" function from the "PublicApi" class. 

```php
PublicApi::initApi(
    ["API description"],
    ["API Title"]);

```
5. Functionality is added to the API by adding functions with titles that correspond with the API Operation's "Function  Name" parameter from step 3. 


* Input parameters are retrieved using "getInputParameter()" along with the name of a parameter chosen in step 3.
* The API operation output is created using "addApiOutput()" for which there is no restriction to the amount of outputs you can have but should be inline with the operation deceleration's expected output.
* The API operation must be concluded by setting a return result to true or false, using "setApiResult(["Boolean"])", to say if the request was successful and by printing the response with "printApiResult()".

``` php 

function ["Function Name"]() {

    $Variable = PublicApi::getInputParameter(["Input Parameter"]);
    // *** Add User Code Here ***

    PublicApi::addApiOutput("The Value of variable is","$Variable");
    PublicApi::setApiResult(["Boolean"]);
    PublicApi::printApiResult();
}

```

6. Using the steps provided a dummy operation has been created to demonstrate the creation and testing. The following API has an operation that concatenates a first and last name. A second operation, that shows the systems current time, is added to show how multiple operations and functions can occupy the same file. An example of a new API would look as follows:

```php

<?php 
require("../../divblox/divblox.php");
// Start by declaring your operations and then calling the initApi function

PublicApi::addApiOperation(
    "dummyOperation",
    ["first_name","last_name"],
    ["Message" => "You called the example operation","FullName" => "[The resulting full name]"],
    "Example Operation",
    "This is simply an example api operation that takes a first name and a last name and concatenates them");

PublicApi::addApiOperation(
    "dummyOperation2",
    [],
    ["Message" => "Current system time is [system_time]"],
    "Example Operation 2",
    "A simple operation that returns the current system time");


PublicApi::initApi("Example API endpoint to illustrate the basics of divblox APIs","Example Endpoint");

// Operations
function dummyOperation() {
    $Name = PublicApi::getInputParameter("first_name");
    $Surname = PublicApi::getInputParameter("last_name");
    PublicApi::addApiOutput("Message","You called the example operation.");
    PublicApi::addApiOutput("FullName","$Name $Surname");
    PublicApi::setApiResult(true); // You need to set this to true to indicate that the API executed successfully
    PublicApi::printApiResult();
}
function dummyOperation2() {
    PublicApi::addApiOutput("Message","Current system time is ".dxDateTime::Now()->format(DATE_TIME_FORMAT_PHP_STR.' H:i:s'));
    PublicApi::setApiResult(true); // You need to set this to true to indicate that the API executed successfully
    PublicApi::printApiResult();
}

?>
```

7. Divblox provides comprehensive documentation for your API's that can be viewed at "/api/[your API name]/doc". In the case of this example, where our API is called "api_example", the documentation is generated and can be viewed at  "/api/api_example/doc".



<p align="left">
  <img  src=_media/_screenshots/API-exposing-an-api1.png>
</p>

8. By following this documentation the newly exposed API's operation can be accessed by making a request to the given URL endpoint. 

<p align="center">
  <img  src=_media/_screenshots/API-exposing-an-api2.png>
</p>

9. The documentation will indicate to the reader whether or not the request requires an API key to access the operation, and in our case this API requires no authentication but does require other parameters such as a header, "content-type", and input parameters, "first_name" and "last_name", which are placed in the POST request body.


<p align="center">
  <img  src=_media/_screenshots/API-exposing-an-api3.png>
</p>

10. After the request has been made the expected output should be inline with the expected output. Using an application, such as [Postman](https://www.getpostman.com/) as a test platform to see whether or not the API was successfully created, or alternatively by using the URL "/api/api_example/dummyOperation/first_name=ACoolName/last_name=ACoolSurname" we can compare the collected output to the expected response. 

<p align="center">
  <img  src=_media/_screenshots/API-exposing-an-api4.png>
</p>

11. Lastly , in the documentation, a dropdown menu is provided containing snippets of code that can be copied and placed into your project and language of choice to ease the integration. These snippets come in the most common languages that handle API requests.

<p align="center">
  <img  src=_media/_screenshots/API-exposing-an-api5.png>
</p>

## Securing API operation with an API key

When creating your own API it will be completely exposed and wont require and API key to be accessed. To secure your API operations we can add them to the list of API operations that are under "api_operation_administration" and create a key to control its accessibility. 

1. Using the "api_example" (see [Exposing an API](#Exposing-a-custom-API)) to demonstrate this. It is shown in the documentation that the custom API does not require a key which is what we want to change. 

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api1.png>
</p>

2. Add the API operation to the list of controlled operations by opening "api_operation_administration" component in the "Component Builder".

<p align="left">
  <img  src=_media/_screenshots/API-securing-an-api2.png>
</p>

3. This component allows you to add or remove API operations from the list of access controlled API operations. Add your operation by clicking the "+ Api Operation" 


<p align="left">
  <img  src=_media/_screenshots/API-securing-an-api3.png>
</p>

4. Add the "User Readable Name" (API operation name)to the box and click "Create". This name is from your "addApiOperation()" (in your API's .php file) and is case and white space sensitive.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api4.png>
</p>

5. By checking the API documentation we can compare the changes. Note that now the API does require a key to access the operation, and a API key can now be placed in the request body when the request is made to access the operation.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api5.png>
</p>

6. To get a key that will link to your operation and allow you to access it, open the "api_key_administration" component from the "Component Builder" page and add a new API key by clicking the "+ API key". 

<p align="left">
  <img  src=_media/_screenshots/API-securing-an-api6.png>
</p>

7. The key itself is auto-generated to avoid any internal clashes, as well as providing a strong key string. A start date is required. The end date can be left open which results in the key remaining active indefinitely. Fill in any additional information you may require and click "Create" to finish making the key.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api7.png>
</p>

8. Your newly generated key should be visible in the "api_key_administration" component. Open up the new key to start adding operations to this key.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api8.png>
</p>

9. Start adding operations to this key by clicking "+ API Operation"

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api9.png>
</p>

10. Select the operation you want to link with the API key. Operations that have been newly added are place at the bottom of the list.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api10.png>
</p>

11. To verify that the operation has been added, it should be visible when viewing the API key. It will show the activity status of the operation which can be toggled to manage access. 

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api11.png>
</p>

12. Testing the API operation with the API key gives back a "Success" status message and completed the API operation.

<p align="center">
  <img  src=_media/_screenshots/API-securing-an-api12.png>
</p>