# divblox api’s
To expose any of your app's functionality as an api to the outside world, you simply need to create an endpoint in the following manner:
- Let's say your api is to be called "api_example", then create a php script in the folder /project/api/api_example.php with the following basic construct:

```php
require("../../divblox/divblox.php");
// Start by declaring your operations and then calling the initApi function
PublicApi::addApiOperation("dummyOperation",["Name","Surname"],"A string containing your full name");
PublicApi::initApi("Example API to illustrate the basics of divblox APIs. Call the api with /dummyOperation/Name=ACoolName/Surname=ACoolSurname to see results");

if (function_exists(PublicApi::getOperation())) {
    call_user_func(PublicApi::getOperation());
} else {
    PublicApi::addApiOutput("Result","Failed");
    PublicApi::addApiOutput("Message","Invalid operation provided. Try providing swapping '".PublicApi::getOperation()."' for 'doc' at the end of the url to see documentation");
    PublicApi::printApiResult();
}


// Operations
function dummyOperation() {
    // Your operation's functionality here...
    $Name = PublicApi::getInputParameter("Name");
    $Surname = PublicApi::getInputParameter("Surname");
    PublicApi::addApiOutput("Additional Info","You called the dummy operation.");
    PublicApi::addApiOutput("Message","This file shows how to create a divblox api and how to handle the api inputs and outputs. Result is $Name $Surname");
    PublicApi::setApiResult(true); // You need to set this to true to indicate that the API executed successfully
    PublicApi::printApiResult();
}
```

- You can now call your api with all of its available operations at /api/api_example/dummyOperation/Name=ACoolName/Surname=ACoolSurname
- You can also call your api at /api/api_example/dummyOperation and provide additional inputs via the POST body