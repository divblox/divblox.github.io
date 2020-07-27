(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),r=(n(0),n(189)),o=n(191),c=(n(197),n(198),n(194)),l={id:"getting-started-2-virtualbox",title:"2. Starting with VirtualBox"},b={id:"getting-started-2-virtualbox",isDocsHomePage:!1,title:"2. Starting with VirtualBox",description:"checkUrlScroll();",source:"@site/docs/getting-started-2-virtualbox.mdx",permalink:"/docs/getting-started-2-virtualbox",sidebar:"someSidebar",previous:{title:"1. Starting with a Sandbox",permalink:"/docs/getting-started-1-sandbox"},next:{title:"3. Starting from scratch",permalink:"/docs/getting-started-3-from-scratch"}};Object(c.a)();var s=[{value:"VirtualBox Download",id:"virtualbox-download",children:[]},{value:"Loading the Virtual machine",id:"loading-the-virtual-machine",children:[]},{value:"Initialize Divblox",id:"initialize-divblox",children:[]}],u={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Divblox provides a fully configured ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.virtualbox.org/wiki/VirtualBox"}),"VirtualBox")," image that allows you to start\nbuilding Divblox apps in no time. The purpose of having this Virtual Machine (VM) is to be able to setup Divblox in a single\nneat package that is already pre-configured to simplify the installation process. Divblox can also be installed on your local\nOS (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"getting-started-3-from-scratch"}),"Option 3. Starting from scratch"),")."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Start developing with Divblox in 3 easy steps:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Download VirtualBox and the Image containing Divblox"),Object(r.b)("li",{parentName:"ol"},"Import the image into VirtualBox and boot the VM"),Object(r.b)("li",{parentName:"ol"},"Start a new project and configure the API")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Minimal system requirements:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"At least 30 GB of free storage on your main storage device"),Object(r.b)("li",{parentName:"ul"},"8 GB RAM (allocating at least 4 GB to the VM)"),Object(r.b)("li",{parentName:"ul"},"Dual core CPU")))),Object(r.b)("h3",{id:"virtualbox-download"},"VirtualBox Download"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note: the virtual machine image is a 7 GB download."))),Object(r.b)("p",null,"The latest version of Oracle's VirtualBox can be downloaded ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.virtualbox.org/wiki/Downloads"}),"here")," to ensure that\nthe VirtualBox image runs properly."),Object(r.b)("p",null,"The VM (.ova) file that contains Divblox and all the accompanying software can be downloaded\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://drive.google.com/drive/folders/1JaZH9vFj7-ub0QmlrOlKdwtiBVPDiVdF?usp=sharing"}),"here"),"."),Object(r.b)("h3",{id:"loading-the-virtual-machine"},"Loading the Virtual machine"),Object(r.b)("p",null,'After installing VirtualBox on your device and running the application, add the image by opening "File" -> "Import Appliance".'),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"Sign in",src:Object(o.a)("_getting-started-media/virtual-machine-setup1.png")})),Object(r.b)("p",null,'From here, find and add the Divblox VM image file (.ova). On the following window you will be prompted to "Import". Adding the image may take several minutes to install and configure.'),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"Sign in",src:Object(o.a)("_getting-started-media/virtual-machine-setup2.png")})),Object(r.b)("p",null,'Once your VM has been loaded, it can be started by "double-clicking" on the newly added machine in the VirtualBox application. This will open a separate window and begin booting up the Divblox image.'),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The boot sequence is complete when you are greeted by the Welcome page."))),Object(r.b)("h3",{id:"initialize-divblox"},"Initialize Divblox"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"Sign in",src:Object(o.a)("_getting-started-media/virtual-machine-setup3.png")})),Object(r.b)("p",null,"The Welcome page is necessary to read through in order to operate the virtual machine.\nIt contains information such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Username and passwords for the VM"),Object(r.b)("li",{parentName:"ul"},"Relevant file locations and permissions"),Object(r.b)("li",{parentName:"ul"},"Quick start links"),Object(r.b)("li",{parentName:"ul"},"Information about the VM software")),Object(r.b)("p",null,"After you have familiarised yourself with the introduction page, the first thing you should do is to configure your project's ",Object(r.b)("em",{parentName:"p"},"Free")," Divblox API key."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To generate your new API see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"the-basics-divblox-apis"}),"Divblox API key"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Open the "local starter project" from the link located under "Quick Start links" on the welcome Page.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click "dx API key" to open the dialog that allows you to copy in and update your API key.'))),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"Sign in",src:Object(o.a)("_getting-started-media/setup-configure-api-key.png")})))}d.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(m,c(c({ref:t},b),{},{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";var a=n(0),i=n(52);t.a=function(){return Object(a.useContext)(i.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(79);var a=n(190),i=n(193);function r(e,t){var n=void 0===t?{}:t,r=n.forcePrependBaseUrl,o=void 0!==r&&r,c=n.absolute,l=void 0!==c&&c,b=Object(a.a)().siteConfig,s=(b=void 0===b?{}:b).baseUrl,u=void 0===s?"/":s,d=b.url;if(!e)return e;if(o)return u+e;if(!Object(i.a)(e))return e;var p=u+e.replace(/^\//,"");return l?d+p:p}},192:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},193:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(78),n(0);var a=function(){setTimeout((function(){if("undefined"!=typeof window){var e=window.location.href.split("#");if(e.length>1){var t=e[1];document.getElementById(t).scrollIntoView()}}}),500)}},195:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=i},196:function(e,t,n){"use strict";var a=n(0),i=n(195);t.a=function(){return Object(a.useContext)(i.a)}},197:function(e,t,n){"use strict";n(24),n(20),n(19);var a=n(0),i=n.n(a),r=n(196),o=n(192),c=n(130),l=n.n(c),b=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,p=Object(r.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(a.useState)(c),h=v[0],O=v[1];if(null!=d){var g=m[d];null!=g&&g!==h&&u.some((function(e){return e.value===g}))&&O(g)}var j=function(e){O(e),null!=d&&f(d,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},198:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);