(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(189)),i=(n(191),n(197),n(198),{id:"getting-started-3-from-scratch",title:"3. Starting from scratch"}),c={id:"getting-started-3-from-scratch",isDocsHomePage:!1,title:"3. Starting from scratch",description:"Prerequisites",source:"@site/docs/getting-started-3-from-scratch.mdx",permalink:"/docs/getting-started-3-from-scratch",sidebar:"someSidebar",previous:{title:"2. Starting with VirtualBox",permalink:"/docs/getting-started-2-virtualbox"},next:{title:"Configuration",permalink:"/docs/the-basics-configuration"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download Divblox",id:"download-divblox",children:[]},{value:"Installation checker",id:"installation-checker",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The following sections are only relevant for local and/or self provisioned server setup."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The Divblox server-side functionality is built in php and therefore requires a php environment to be setup in order to function correctly.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download your favourite Apache/PHP/MySQL distribution (MAMP, WAMP, XAMPP etc...) and configure to use the following:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Latest version of Apache"),Object(o.b)("li",{parentName:"ul"},"Php 7.3 or later"),Object(o.b)("li",{parentName:"ul"},"MySQL 5.7 or later or MariaDB 10.3 or later"),Object(o.b)("li",{parentName:"ul"},"The recommended server software is MAMP for either windows or mac: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mamp.info/en/"}),"https://www.mamp.info/en/")),Object(o.b)("li",{parentName:"ul"},"Ensure that you have created a database for use with your Divblox project"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Some of the core Divblox code is encoded using IonCube. To ensure that your Divblox installation functions correctly, download and install the IonCube loader for Php 7.3 or later for your operating system."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Download ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ioncube.com/loaders.php"}),"here")),Object(o.b)("li",{parentName:"ul"},"Don't worry if you have some trouble installing this. The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#installation-checker"}),"Installation checker")," will guide\nyou through this process a bit later on as well."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For an example of how to do this with Ubuntu 18.04, click ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"linux-deployment#Install-Ubuntu-18.04-image"}),"here")))),Object(o.b)("h2",{id:"download-divblox"},"Download Divblox"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can download or fork the Divblox public repo on github here: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/divblox/divblox"}),"https://github.com/divblox/divblox")),Object(o.b)("li",{parentName:"ul"},'Add the downloaded content to your apache "public_html" or "www" folder'),Object(o.b)("li",{parentName:"ul"},"Ensure that your web server is running and navigate to http://localhost/ or http://localhost/","[your-project-folder]"," (if you placed Divblox within a sub folder)"),Object(o.b)("li",{parentName:"ul"},"Divblox will check your installation and, if needed, provide further guidelines on how to finish the installation"),Object(o.b)("li",{parentName:"ul"},"To open the Divblox setup page, browse to http://localhost/divblox or http://localhost/","[your-project-folder]","/divblox, depending on your installation"),Object(o.b)("li",{parentName:"ul"},"Open the installation checker to ensure that all systems indicate an OK status. Once the installation checker indicates all is OK, you are ready to build with Divblox")),Object(o.b)("h2",{id:"installation-checker"},"Installation checker"),Object(o.b)("p",null,"The Divblox installation checker is designed to ensure that your Divblox project meets all the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#prerequisites"}),"prerequisites")," described above. It will also provide useful guidelines on how to solve installation related problems.\nThe main checks performed are listed below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checks for php >= 7.3"),Object(o.b)("li",{parentName:"ul"},"Checks for mariadb >= 10.3 or mysql >= 5.7"),Object(o.b)("li",{parentName:"ul"},"Checks your IonCube loader is installed. ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#prerequisites"}),"Learn why IonCube is required")," in the prerequisites section")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The installation checker might fail if your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"the-basics.md?id=environments"}),"environments")," have not yet been configured properly"))))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(79);var r=n(190),a=n(193);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,i=void 0!==o&&o,c=n.absolute,l=void 0!==c&&c,s=Object(r.a)().siteConfig,u=(s=void 0===s?{}:s).baseUrl,b=void 0===u?"/":u,p=s.url;if(!e)return e;if(i)return b+e;if(!Object(a.a)(e))return e;var d=b+e.replace(/^\//,"");return l?p+d:d}},192:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},193:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))},195:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=a},196:function(e,t,n){"use strict";var r=n(0),a=n(195);t.a=function(){return Object(r.useContext)(a.a)}},197:function(e,t,n){"use strict";n(24),n(20),n(19);var r=n(0),a=n.n(r),o=n(196),i=n(192),c=n(130),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(r.useState)(c),v=h[0],O=h[1];if(null!=p){var j=f[p];null!=j&&j!==v&&b.some((function(e){return e.value===j}))&&O(j)}var g=function(e){O(e),null!=p&&m(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);