# Useful Resources

## Code Snippets

This section is dedicated to giving the user an easy to use copy-paste template library of common Divblox functions.

*Javascript to perform an ajax request to the current component's php controller file*
```javascript
dxRequestInternal(getComponentControllerPath(this), {
    // parameters fed to the backend
    f: "backend_function_name",
    additional_parameters: "parameter1"
    }, 
    function (data_obj) {
        // Success function
    }.bind(this), 
    function (data_obj) {
        // Failure function
    }.bind(this));
```

*PHP function template for receiving an ajax call and presenting an output to the calling function*
```php
public function FunctionName() {
    // Function operations
    $SomeReturnValue = [];
    $this->setResult(true);
    $this->setReturnValue("ReturnData", $SomeReturnValue);
    $this->presentOutput();
}
```
*Javascript example of how to add an event handler to an html element residing inside a component*
```javascript
getComponentElementById(this, "ElementId").on("click", function () {
    //Function to be implemented
});
```

## Divblox Public Shared

Divblox shares a public Google Drive folder with various resources to ease your development workflow. 
This shared folder can be found [here](https://drive.google.com/drive/folders/1JaZH9vFj7-ub0QmlrOlKdwtiBVPDiVdF) 