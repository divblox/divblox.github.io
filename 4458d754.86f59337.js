(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(9),i=(n(0),n(172)),o=n(173),c=(n(179),n(180),n(175)),s={id:"common-examples-media-library-and-image-viewer",title:"Media Library and Image Viewer"},u={id:"common-examples-media-library-and-image-viewer",isDocsHomePage:!1,title:"Media Library and Image Viewer",description:"checkUrlScroll();",source:"@site/docs/common-examples-media-library-and-image-viewer.mdx",permalink:"/docs/common-examples-media-library-and-image-viewer",sidebar:"someSidebar",previous:{title:"Hello World Example",permalink:"/docs/common-examples-hello-world-example"},next:{title:"Dealing with Data Model Changes",permalink:"/docs/common-examples-data-model-changes"}};Object(c.a)(),Object(c.b)();var l=[],p={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Divblox allows you to handle all of your images from one place. This is done in the "Media Library" tab in the setup page, as show below.'),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Create Component",src:Object(o.a)("_common-examples-media/media-library.png")})),Object(i.b)("p",null,"There are three (maybe more, if you are creative) ways to add an image into your Divblox page."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use a basic Divblox component (Simple HMTL image tag) and fill in the necessary file path. This is perfectly fine for individual images here and there."),Object(i.b)("li",{parentName:"ol"},"Use the default image viewer component, and make sure to update the image path in the page's ",Object(i.b)("inlineCode",{parentName:"li"},"reset()")," function. Note how we define the image viewer's UID\nso that we can call the ",Object(i.b)("inlineCode",{parentName:"li"},"updateImage()")," function on it uniquely. (If you do not specify it, the UID will be a unique random string)"),Object(i.b)("li",{parentName:"ol"},"Use the default image viewer component, and pass it the relative image path as an input parameter i.e. ",Object(i.b)("inlineCode",{parentName:"li"},'"arguments:{"image_path": "project/uploads/media/filename.png"}"'),".")),Object(i.b)("p",null,"The page's component.js is given below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'if (typeof component_classes[\'pages_image_page\'] === "undefined") {\n    class pages_image_page extends DivbloxDomBaseComponent {\n        constructor(inputs, supports_native, requires_native) {\n            super(inputs, supports_native, requires_native);\n            // Sub component config start\n            this.sub_component_definitions =\n                [{\n                    "component_load_path": "ungrouped/imageviewer",\n                    "parent_element": "jrPkd",\n                    "arguments": {\n                        // Set a UID for this component\n                        // highlight-next-line\n                        "uid": "imageviewer_1",\n                    }\n                },\n                    {\n                        "component_load_path": "ungrouped/imageviewer",\n                        "parent_element": "01DIl",\n                        // Set the image_path load argument for the image viewer\n                        // highlight-next-line\n                        "arguments": {"image_path": "project/uploads/media/fbd1be7af8321d83f139005dae538b23.jpg"}\n                    }];\n            // Sub component config end\n        }\n\n        reset(inputs, propagate) {\n            setActivePage("image_page", "image_page");\n            super.reset(inputs, propagate);\n            // Update the image every time the page refreshes\n            // highlight-next-line\n            getRegisteredComponent("imageviewer_1").updateImage("project/uploads/media/3a3f3a509b33b16bdb5c9bf362c63f8a.jpg");\n        }\n    }\n\n    component_classes[\'pages_image_page\'] = pages_image_page;\n}\n')),Object(i.b)("p",null,"Below is a video runthrough of the 3 suggested ways of using the media library and using images in your project."),Object(i.b)("video",{width:"100%",height:"100%",playsInline:!0,muted:!0,poster:Object(o.a)("img/video-placeholder.png"),preload:"true",controls:!0},Object(i.b)("source",{src:Object(o.a)("_common-examples-media/MediaLibrary_ImageViewer.mp4"),type:"video/mp4"})),Object(i.b)("p",null,"Using the image viewer component may not make sense if you are adding images ad hoc, as it is simpler to just add it using plain HTML.\nIf you would like to theme your images with consistent borders, sizing and shadows for example, using a single image viewer component to\ndisplay all of your system images would save you a lot of time. The developer is encouraged to create a copy of the default image viewer and experiment with this."))}m.isMDXComponent=!0},171:function(e,t,n){"use strict";var a=n(0),r=n(52);t.a=function(){return Object(a.useContext)(r.a)}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(79);var a=n(171),r=n(176);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,o=void 0!==i&&i,c=n.absolute,s=void 0!==c&&c,u=Object(a.a)().siteConfig,l=(u=void 0===u?{}:u).baseUrl,p=void 0===l?"/":l,m=u.url;if(!e)return e;if(o)return p+e;if(!Object(r.a)(e))return e;var d=p+e.replace(/^\//,"");return s?m+d:d}},174:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n(78),n(0);var a=function(){setTimeout((function(){if("undefined"!=typeof window){var e=window.location.href.split("#");if(e.length>1){var t=e[1];document.getElementById(t).scrollIntoView()}}}),500)},r=function(){if("undefined"!=typeof window){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5e2aa42bdaaca76c6fcfa354/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}}},176:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},177:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},178:function(e,t,n){"use strict";var a=n(0),r=n(177);t.a=function(){return Object(a.useContext)(r.a)}},179:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),i=n(178),o=n(174),c=n(130),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,m=e.groupId,d=Object(i.a)(),f=d.tabGroupChoices,b=d.setTabGroupChoices,g=Object(a.useState)(c),h=g[0],v=g[1];if(null!=m){var y=f[m];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=m&&b(m,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return w(t)},onClick:function(){return w(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},180:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);