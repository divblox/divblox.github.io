(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{131:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return b})),o.d(t,"default",(function(){return h}));var a=o(2),n=o(6),i=(o(0),o(150)),r=o(155),s=o(156),c={id:"troubleshooting",title:"Troubleshooting"},l={id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"checkUrlScroll();",source:"@site/docs/troubleshooting.mdx",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/troubleshooting.mdx",sidebar:"someSidebar",previous:{title:"Linux Deployment",permalink:"/docs/linux-deployment"}};Object(s.a)();var b=[{value:"Most common issues",id:"most-common-issues",children:[{value:"Browser cache",id:"browser-cache",children:[]},{value:"Browser console",id:"browser-console",children:[]},{value:"Installation checker",id:"installation-checker",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Lowercase table names",id:"lowercase-table-names",children:[]}]},{value:"ionCube",id:"ioncube",children:[]},{value:"Re-initializing a sandbox",id:"re-initializing-a-sandbox",children:[]}],d={rightToc:b};function h(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Because of the nature of web development, Divblox supports multiple operating systems.\nThe recommended OS for Divblox development is MacOS, since it will allow for all functionality, including export\nto iOS, to function correctly. However, both Windows and Linux are also supported."),Object(i.b)("h2",{id:"most-common-issues"},"Most common issues"),Object(i.b)("h3",{id:"browser-cache"},"Browser cache"),Object(i.b)("p",null,"All of your Divblox app's assets (html, javascript & css files) will, by default, be cached by your browser.\nIt is therefore important to take this into account when building new functionality. If something does not\nwork the way you expect it to, the most common cause is that the old functionality was cached."),Object(i.b)("p",null,"The easiest way around this is to have the browser's console open while developing and to disable caching through the\noptions provided. It is also a good idea to always perform a cache-refresh when refreshing your page."),Object(i.b)("h3",{id:"browser-console"},"Browser console"),Object(i.b)("p",null,"Divblox makes use of the browser console to inform the developer of errors. Ensure that the browser console is open during\ninstallation and/or development to quickly diagnose the most common problems."),Object(i.b)("h3",{id:"installation-checker"},"Installation checker"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"getting-started-3-from-scratch#installation-checker"}),"installation checker")," might fail if you do not already have a database\nconnection configured. If your minimum database requirements are not met according to the installation checker, please first\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"getting-started-3-from-scratch"}),"configure your database settings")," before checking again."),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"Divblox makes use of code generation to create its components and ORM class files. This means that full write access is\nrequired in order for everything to work correctly. To avoid most of the common issues in this regard, ensure that the user\nthat is used to run your web server has ownership and write permission for the Divblox folder."),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"Divblox was created on a UNIX based operating system and it is recommended that you use MacOS for the best experience when developing with the framework. However, we do try to support Windows as far as possible. The following are common issues users experience when setting up Divblox on Windows environments:"),Object(i.b)("h4",{id:"basecamp-communication-error-ssl"},"Basecamp communication error (SSL)"),Object(i.b)("p",null,"The installation wizard complains that the connection to basecamp cannot be established because of an SSL Certificate problem. Specifically: unable to get local issuer certificate. To solve this problem, follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download cURL's cacert.pem certificate from the official cURL website ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://curl.haxx.se/docs/caextract.html"}),"here")),Object(i.b)("li",{parentName:"ol"},"Save this cacert.pem file in your webserver's root folder, for example C:\\MAMP\\cacert.pem"),Object(i.b)("li",{parentName:"ol"},"Update your php.ini file to tell cURL where to locate this certificate. Add the following to the bottom of your php.ini file:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'curl.cainfo="C:\\MAMP\\cacert.pem"\nopenssl.cafile="C:\\MAMP\\cacert.pem"\n')),Object(i.b)("p",null,"Note, that your path may be different, depending on the webserver and path you chose to save the file."),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Next, you need to enable mod_ssl and php_openssl.dll. To enable mod_ssl, you can add the following to your Apache configuration file:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"LoadModule ssl_module C:\\MAMP\\bin\\apache\\modules\\mod_ssl.so\n")),Object(i.b)("p",null,"Note, that your path may be different, depending on the webserver.\nTo enable php_openssl.dll, you will need to uncomment the following line in your php.ini file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"extension=php_openssl.dll\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Restart your webserver and refresh the Divblox installation checker to confirm that things are working now.")),Object(i.b)("h3",{id:"lowercase-table-names"},"Lowercase table names"),Object(i.b)("p",null,"Divblox relies on code generation to create the ORM for you project. This generation is done, based on the tables in your database. If the tables in your database do not have case-sensitive names, the classes in the corresponding ORM might fail to work correctly. The installation checker will display the following error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Database table names case configuration: Failed!\nPlease ensure that the database variable 'lower_case_table_names' is set to 2\n")),Object(i.b)("p",null,"To solve this, open your mysql configuration file and add the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Look for: # The MySQL server ","[mysqld]"," and add this right below it:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"lower_case_table_names = 2\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Save the file and restart MySQL service")),Object(i.b)("h2",{id:"ioncube"},"ionCube"),Object(i.b)("p",null,"When you open your Divblox project in the browser for the first time, you might encounter strange behaviour if ionCube\nhas not been installed. Please follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ioncube.com/loaders.php"}),"these steps")," to install ionCube for your OS."),Object(i.b)("h1",{id:"sandboxes"},"Sandboxes"),Object(i.b)("h2",{id:"re-initializing-a-sandbox"},"Re-initializing a sandbox"),Object(i.b)("p",null,"You can re-initialize your sandbox at any time by simply removing it and initializing it again."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Important! This process removes ALL files and data from your sandbox"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Click the "Modify Project" icon to open your project')),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Create Component",src:Object(r.a)("_the-basics-media/_3-divblox-components-media/component-example-create.png")})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},'Click "Manage Deployment Environments"')),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Create Component",src:Object(r.a)("_the-basics-media/_3-divblox-components-media/component-example-create.png")})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click remove on your sandbox")),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Sandbox Step Re-init 3",src:Object(r.a)("_the-basics-media/_3-divblox-components-media/component-example-create.png")})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Follow the steps in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"getting-started-1-sandbox"}),"Getting Started")," to initialize a new sandbox for your project")))}h.isMDXComponent=!0}}]);