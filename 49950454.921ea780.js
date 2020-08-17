(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),a=(n(0),n(172)),i=(n(173),n(179),n(180),n(176)),c={id:"getting-started-ways-to-get-started",title:"Ways to get started"},l={id:"getting-started-ways-to-get-started",isDocsHomePage:!1,title:"Ways to get started",description:"checkUrlScroll();",source:"@site/docs/getting-started-ways-to-get-started.mdx",permalink:"/docs/getting-started-ways-to-get-started",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Basecamp",permalink:"/docs/getting-started-basecamp"}};Object(i.a)();var u=[{value:"Sandbox vs local deployment",id:"sandbox-vs-local-deployment",children:[]}],s={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To start creating an app with Divblox, you need to configure a development environment (also known as a deployment environment). To do this you have a number of options:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The first and easiest way is to spin up a ",Object(a.b)("strong",{parentName:"p"},"Divblox sandbox")," where you can get a feel for the Divblox environment and play around with most of Divblox's features")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"A slightly more advanced option that allows for more complex features, is to download the ",Object(a.b)("strong",{parentName:"p"},"Divblox VirtualBox image")," and import that as a virtual machine on a local machine of your choosing")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The third, and most hands on option, is to configure a ",Object(a.b)("strong",{parentName:"p"},"Divblox deployment environment from scratch")," on a machine of your choosing"))),Object(a.b)("h3",{id:"sandbox-vs-local-deployment"},"Sandbox vs local deployment"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In a local deployment environment, more advanced features are available:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can configure your server variables and modules"),Object(a.b)("li",{parentName:"ul"},"You can configure your database connections"),Object(a.b)("li",{parentName:"ul"},"You can export to native"),Object(a.b)("li",{parentName:"ul"},"You have full access to your entire code base"),Object(a.b)("li",{parentName:"ul"},"You can deploy your app to another deployment environment")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A deployment environment is defined as an instance of a project, that is hosted on a web server, which is accessible by a user.\nThese can include, but are not limited to:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A local web server on a development computer"),Object(a.b)("li",{parentName:"ul"},"A cloud based web server")))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(78);var r=n(171),o=n(175);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,i=void 0!==a&&a,c=n.absolute,l=void 0!==c&&c,u=Object(r.a)().siteConfig,s=(u=void 0===u?{}:u).baseUrl,b=void 0===s?"/":s,p=u.url;if(!e)return e;if(i)return b+e;if(!Object(o.a)(e))return e;var f=b+e.replace(/^\//,"");return l?p+f:f}},174:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},175:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);const r=()=>{setTimeout((function(){if("undefined"!=typeof window){let e=window.location.href.split("#");if(e.length>1){let t=e[1];document.getElementById(t).scrollIntoView()}}}),500)}},177:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=o},178:function(e,t,n){"use strict";var r=n(0),o=n(177);t.a=function(){return Object(r.useContext)(o.a)}},179:function(e,t,n){"use strict";n(24),n(19),n(20);var r=n(0),o=n.n(r),a=n(178),i=n(174),c=n(130),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,f=Object(a.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,v=Object(r.useState)(c),y=v[0],O=v[1];if(null!=p){var g=d[p];null!=g&&g!==y&&b.some((function(e){return e.value===g}))&&O(g)}var h=function(e){O(e),null!=p&&m(p,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},180:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);