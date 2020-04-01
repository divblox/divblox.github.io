# Useful Code Snippets

This section is dedicated to giving the user an easy to use copy-paste template library of common Divblox functions.

```php
dxRequestInternal(getComponentControllerPath(this), {
    // parameters fed to the backend
    f: "backend_function_name",
    additional_paramers: "parameter1"
    }, function (data_obj) {
        // Success function

    }, function () {
        // Failure function

    }, false // Bool for queue_on_offline
    , "html_or_jquery_Element" // frontend element in question
    , "loading_text_string" // while request is processed
}.bind(this));
```

```php
public function FunctionName() {
    // Function operations

    $this->setReturnValue("Result", "Success");
    $this->setReturnValue("ReturnData", $YourReturnArr);
    $this->presentOutput();
}
```
