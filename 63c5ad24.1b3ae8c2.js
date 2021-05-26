(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(172)),o=n(175),c={id:"basic-training-evaluation",title:"Basic Training Evaluation"},l={id:"basic-training-evaluation",isDocsHomePage:!1,title:"Basic Training Evaluation",description:"checkUrlScroll();",source:"@site/docs/basic-training-evaluation.mdx",permalink:"/docs/basic-training-evaluation",sidebar:"someSidebar",previous:{title:"Basic Training Exercise",permalink:"/docs/basic-training-exercise"},next:{title:"Advanced Training Exercise",permalink:"/docs/advanced-training-exercise"}};Object(o.a)(),Object(o.b)();var s=[],u={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You should only attempt this evaluation once you have worked through the following sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"the-basics-configuration"}),"The Basics")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"basic-training-exercise"}),"Basic Training Exercise"))),Object(i.b)("p",null,'The exercise below is intended to evaluate whether you have an understanding of the basic concepts of Divblox. If you are able to build this exercise successfully, your skill-level will be considered "basic" and you will be ready to attempt the advanced training exercise.'),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you would like to have your exercise graded for certification, you can submit it to us at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@divblox.com."}),"support@divblox.com.")," Please note, certification may carry a cost. Please send us:"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"Link to your GitHub project (access given to @DaniS0312)"),Object(i.b)("li",{parentName:"ol"},"Link to a Divblox sandbox with your functional application, as well as admin and user credentials to log in with.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Exercise Brief - Build a simple personal expense tracker. You must be able to do the following:")),Object(i.b)("p",null,"Because this is a personal expense tracker, you do not need to concern yourself with building your application for multiple users. We will however, cater for two different user roles as part of this exercise."),Object(i.b)("p",null,"Make sure to add your personal touch to the final application as some points will be allocated for creative freedom. It is also important to apply good basic programming principles."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"As as User:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log expenses quickly on a dedicated page"),Object(i.b)("li",{parentName:"ul"},"An expense needs to have a category"),Object(i.b)("li",{parentName:"ul"},"Have another page where:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can view a list of expenses"),Object(i.b)("li",{parentName:"ul"},"You should be able to open an existing expense and edit or delete it"),Object(i.b)("li",{parentName:"ul"},"Categories and their current grand totals are listed"))),Object(i.b)("li",{parentName:"ul"},"When an expense is saved (or removed), it should update a total that is stored for the selected category")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"As an Administrator:")),Object(i.b)("p",null,"The sole purpose of the administrator is to manage categories."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Categories must be configurable on a dedicated page")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"General functionality:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Expose a custom api operation that allows a user to specify a date range and get an expense total, per category, as a result")))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n(78),n(0);var a=function(){setTimeout((function(){if("undefined"!=typeof window){var e=window.location.href.split("#");if(e.length>1){var t=e[1];document.getElementById(t).scrollIntoView()}}}),500)},r=function(){if("undefined"!=typeof window){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5e2aa42bdaaca76c6fcfa354/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}}}}]);