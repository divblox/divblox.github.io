(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),o=(a(0),a(134)),r=a(135),c=(a(141),a(142),a(137)),s={id:"the-basics-divblox-apis",title:"Divblox APIs"},l={id:"the-basics-divblox-apis",isDocsHomePage:!1,title:"Divblox APIs",description:"checkUrlScroll();",source:"@site/docs/the-basics-divblox-apis.mdx",permalink:"/docs/the-basics-divblox-apis",sidebar:"someSidebar",previous:{title:"divbloxPHP Components",permalink:"/docs/the-basics-divblox-components"},next:{title:"Native Support",permalink:"/docs/the-basics-native-support"}};Object(c.a)(),Object(c.b)();var p=[{value:"Exposing a custom API",id:"exposing-a-custom-api",children:[]},{value:"Securing API operations with an API key",id:"securing-api-operations-with-an-api-key",children:[]},{value:"Creating default CRUD API&#39;s",id:"creating-default-crud-apis",children:[]}],b={rightToc:p};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"exposing-a-custom-api"},"Exposing a custom API"),Object(o.b)("p",null,"To expose any of your app's functionality as an api to the outside world, you simply need to create an endpoint in the following manner:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Create a new php script that will contain your API operations and save it to the folder "/project/api/".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Include "divblox.php" to use Divblox API classes.'))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'require("../../divblox/divblox.php");\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'Declare a new operation by calling the "addApiOperation()" function from the "PublicApi" class. The "Expected outputs", and "operation description" will be used when Divblox auto-generates the documentation for the newly created API, so do not overlook the importance of these description fields even though they don\'t directly effect functionality. The "User readable name" (API operation name) is later used to link operations to other API functionality.')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'PublicApi::addApiOperation(\n    ["Function Name"],\n    ["Input Parameters"],\n    ["Expected Outputs"] ,\n    ["User readable name"] ,\n    ["API operation description"]);\n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Initialize the API after your declarations using "initApi()" function from the "PublicApi" class.')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'PublicApi::initApi(\n    ["API description"],\n    ["API Title"]);\n\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},'Functionality is added to the API by adding functions with titles that correspond with the API Operation\'s "Function Name" parameter from step 3.')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Input parameters are retrieved using "getInputParameter()" along with the name of a parameter chosen in step 3.'),Object(o.b)("li",{parentName:"ul"},'The API operation output is created using "addApiOutput()" for which there is no restriction to the amount of outputs you can have but should be inline with the operation deceleration\'s expected output.'),Object(o.b)("li",{parentName:"ul"},'The API operation must be concluded by setting a return result to true or false, using "setApiResult(','["Boolean"]',')", to say if the request was successful and by printing the response with "printApiResult()".')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'\nfunction ["Function Name"]() {\n\n    $Variable = PublicApi::getInputParameter(["Input Parameter"]);\n    // *** Add User Code Here ***\n\n    PublicApi::addApiOutput("The Value of variable is","$Variable");\n    PublicApi::setApiResult(["Boolean"]);\n    PublicApi::printApiResult();\n}\n\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Using the steps provided a dummy operation has been created to demonstrate the creation and testing. The following API has an operation that concatenates a first and last name. A second operation, that shows the systems current time, is added to show how multiple operations and functions can occupy the same file. An example of a new API would look as follows:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'require("../../divblox/divblox.php");\n// Start by declaring your operations and then calling the initApi function\n\nPublicApi::addApiOperation(\n    "dummyOperation",\n    ["first_name",\n        "last_name"],\n    ["Message" => "You called the example operation",\n        "FullName" => "[The resulting full name]"],\n    "Example Operation",\n    "This is simply an example api operation that takes a first name and a last name and concatenates them");\n\nPublicApi::addApiOperation(\n    "dummyOperation2",\n    [],\n    ["Message" => "Current system time is [system_time]"],\n    "Example Operation 2",\n    "A simple operation that returns the current system time");\n\n\nPublicApi::initApi("Example API endpoint to illustrate the basics of divblox APIs","Example Endpoint");\n\n// Operations\nfunction dummyOperation() {\n    $Name = PublicApi::getInputParameter("first_name");\n    $Surname = PublicApi::getInputParameter("last_name");\n    PublicApi::addApiOutput("Message","You called the example operation.");\n    PublicApi::addApiOutput("FullName","$Name $Surname");\n    PublicApi::setApiResult(true); // You need to set this to true to indicate that the API executed successfully\n    PublicApi::printApiResult();\n}\nfunction dummyOperation2() {\n    PublicApi::addApiOutput("Message",\n                            "Current system time is ".dxDateTime::Now()->format(DATE_TIME_FORMAT_PHP_STR.\' H:i:s\'));\n    PublicApi::setApiResult(true); // You need to set this to true to indicate that the API executed successfully\n    PublicApi::printApiResult();\n}\n')),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Divblox provides comprehensive documentation for your API's that can be viewed at \"/api/","[your API name]",'/doc". In the case of this example, where our API is called "api_example", the documentation is generated and can be viewed at "/api/api_example/doc".')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Exposing an API 1",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/exposing-an-api1.png")})),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"By following this documentation the newly exposed API's operation can be accessed by making a request to the given URL endpoint.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Exposing an API 2",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/exposing-an-api2.png")})),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},'The documentation will indicate to the reader whether or not the request requires an API key to access the operation, and in our case this API requires no authentication but does require other parameters such as a header, "content-type", and input parameters, "first_name" and "last_name", which are placed in the POST request body.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Exposing an API 3",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/exposing-an-api3.png")})),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"After the request has been made the expected output should be inline with the expected output. Using an application, such as ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.getpostman.com/"}),"Postman"),' as a test platform to see whether or not the API was successfully created, or alternatively by using the URL "/api/api_example/dummyOperation/first_name=ACoolName/last_name=ACoolSurname" we can compare the collected output to the expected response.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Exposing an API 4",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/exposing-an-api4.png")})),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Lastly , in the documentation, a dropdown menu is provided containing snippets of code that can be copied and placed into your project and language of choice to ease the integration. These snippets come in the most common languages that handle API requests.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Exposing an API 5",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/exposing-an-api5.png")})),Object(o.b)("h2",{id:"securing-api-operations-with-an-api-key"},"Securing API operations with an API key"),Object(o.b)("p",null,'When creating your own API it will be completely exposed and wont require and API key to be accessed. To secure your API operations we can add them to the list of API operations that are under "api_operation_administration" and create a key to control its accessibility.'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Using the "api_example" (see ',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#exposing-a-custom-api"}),"Exposing an API"),") to demonstrate this. It is shown in the documentation that the custom API does not require a key which is what we want to change.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 1",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api1.png")})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Add the API operation to the list of controlled operations by opening "api_operation_administration" component in the "Component Builder".')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 2",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api2.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'This component allows you to add or remove API operations from the list of access controlled API operations. Add your operation by clicking the "+ Api Operation"')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 3",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api3.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Add the "User Readable Name" (API operation name)to the box and click "Create". This name is from your "addApiOperation()" (in your API\'s .php file) and is case and white space sensitive.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 4",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api4.png")})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"By checking the API documentation we can compare the changes. Note that now the API does require a key to access the operation, and a API key can now be placed in the request body when the request is made to access the operation.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 5",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api5.png")})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},'To get a key that will link to your operation and allow you to access it, open the "api_key_administration" component from the "Component Builder" page and add a new API key by clicking the "+ API key".')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 6",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api6.png")})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},'The key itself is auto-generated to avoid any internal clashes, as well as providing a strong key string. A start date is required. The end date can be left open which results in the key remaining active indefinitely. Fill in any additional information you may require and click "Create" to finish making the key.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 7",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api7.png")})),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},'Your newly generated key should be visible in the "api_key_administration" component. Open up the new key to start adding operations to this key.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 8",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api8.png")})),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},'Start adding operations to this key by clicking "+ API Operation"')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 9",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api9.png")})),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"Select the operation you want to link with the API key. Operations that have been newly added are place at the bottom of the list.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 10",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api10.png")})),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"To verify that the operation has been added, it should be visible when viewing the API key. It will show the activity status of the operation which can be toggled to manage access.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 11",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api11.png")})),Object(o.b)("ol",{start:12},Object(o.b)("li",{parentName:"ol"},'Testing the API operation with the API key should complete the API operation and return a "success" status message.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"Securing an API 12",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/securing-an-api12.png")})),Object(o.b)("h2",{id:"creating-default-crud-apis"},"Creating default CRUD API's"),Object(o.b)("p",null,"Making and exposing access controlled CRUD API operations for new data model entities."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Open the "Data Modeler" from the Divblox setup page.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 1",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud1.png")})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'This is the Default data model for Divblox. New Entities are added by "Double-clicking" in empty space.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 2",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud2.png")})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},'Name your new data model entity and click "Create". The name of the data model entity is used as the CRUD API path as well. For this example an entity named "Car" will be created.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 3",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud3.png")})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},'Start by selecting the module where you want your new entity to be placed. Add new entity attributes by filling in the attribute "name" and "data type" and then add it with the green " + " at the end of the row. Add relationships in the same way, by selecting the entity you need a relationship with and add it using the green " + " at the end of the row. Finish by saving the changes made to the entity')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 4",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud4.png")})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Sync your data model. Ensure that Divblox's data model is synced so that the CRUD operations can be used.")),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 5",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud5.png")})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},'View the auto-generated documentation for the newly created entity using the entity name from before and the path "/api/',"[your API name]",'/doc". These are the default CRUD operations that get created with new data model entities.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 6",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud6.png")})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},'Divblox automatically requires an API key for any auto generated operation as they get added and listed in "api_operation_adminstration" (For more see ',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#securing-api-operations-with-an-api-key"}),"Securing API operations with an API key"),'). Therefore we must create an API key and link it to the operations we want to expose, thus still keeping them secure with a key. Create the key in the "api_key_administration" component. Select the new key and add the operations using the " + Api Operation" button and select the operations you want from the drop down menu.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 7",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud7.png")})),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},'The API operations are now exposed and can be accessed using the key that was just created. Testing the "Create Car" operation we will get back a confirmation that the data entry was successful and the "List Car" operation will show the new car that was created.')),Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{"data-action":"zoom",alt:"API Default CRUD 8",src:Object(r.a)("_the-basics-media/_5-divblox-apis-media/api-default-crud8.png")})))}d.isMDXComponent=!0},133:function(e,t,a){"use strict";var n=a(0),i=a(35);t.a=function(){return Object(n.useContext)(i.a)}},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return a?i.a.createElement(m,c(c({ref:t},l),{},{components:a})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(133),i=a(138);function o(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:o="/",url:r}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(i.a)(e))return e;const c=o+e.replace(/^\//,"");return a?r+c:c}},136:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));a(0);const n=()=>{setTimeout((function(){if("undefined"!=typeof window){let e=window.location.href.split("#");if(e.length>1){let t=e[1];document.getElementById(t).scrollIntoView()}}}),500)},i=()=>{if("undefined"!=typeof window){let e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5e2aa42bdaaca76c6fcfa354/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}}},138:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},139:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},140:function(e,t,a){"use strict";var n=a(0),i=a(139);t.a=function(){return Object(n.useContext)(i.a)}},141:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(140),r=a(136),c=a(92),s=a.n(c);const l=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:b,groupId:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(o.a)(),[h,O]=Object(n.useState)(c);if(null!=d){const e=u[d];null!=e&&e!==h&&b.some(t=>t.value===e)&&O(e)}const g=e=>{O(e),null!=d&&m(d,e)},f=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},142:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);