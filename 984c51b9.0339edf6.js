(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(134)),i=n(137),c={id:"advanced-training-evaluation",title:"Advanced Training Evaluation"},l={id:"advanced-training-evaluation",isDocsHomePage:!1,title:"Advanced Training Evaluation",description:"checkUrlScroll();",source:"@site/docs/advanced-training-evaluation.mdx",permalink:"/docs/advanced-training-evaluation",sidebar:"someSidebar",previous:{title:"Advanced Training Exercise",permalink:"/docs/advanced-training-exercise"},next:{title:"Useful Resources",permalink:"/docs/useful-resources"}};Object(i.a)(),Object(i.b)();var s=[],u={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You should only attempt this evaluation after working through and feeling comfortable with the following sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Basics"),Object(o.b)("li",{parentName:"ul"},"Hello World Example"),Object(o.b)("li",{parentName:"ul"},"Basic Training Exercise and Evaluation"),Object(o.b)("li",{parentName:"ul"},"The Advance Training Exercise")),Object(o.b)("p",null,"The exercise below is intended to evaluate your level of understanding of the more advanced concepts of divbloxPHP. If you are able to build this exercise successfully, your skill will be considered proficient."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you would like to have your exercise graded for certification, you can submit it to us at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@divblox.com."}),"support@divblox.com.")," Please note, certification may carry a cost. Please send us:"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"Link to your GitHub project (access given to @DaniS0312)"),Object(o.b)("li",{parentName:"ol"},"Link to a Divblox sandbox with your functional application, as well as admin and user credentials to log in with.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Exercise Brief - Build a personal finance tracker.")),Object(o.b)("p",null,"You should be able to create monthly budgets, and each can have multiple budget items. Each of these budget items may be a parent of further budget items (e.g. Utilities -> Water + Electricity + Internet). Budget items should have at least a name and amount. For each budget item, you can add expenses. Expenses should have at least a name, amount, description and date captured. The expenses can have multiple receipts attached to them. Each receipt should have either, data of issue, amount or document."),Object(o.b)("p",null,"As a user you should be able to quickly log an expense, and either immediately or later be able to link it to a budget item. You should be able to see unallocated expenses (not linked to a budget item) separated from the financial tracker. You should also have a dashboard summarizing your expenses progress over a month, both as a monthly single percentage and separately by budget items (categories)."),Object(o.b)("p",null,"You should try split this into 3 distinct areas: An admin page to configure budget items, a new expense page to quickly add expenses (and possibly update them further) and the dashboard to summarize any metrics you would deem fitting for a budget."))}d.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n(0);const a=()=>{setTimeout((function(){if("undefined"!=typeof window){let e=window.location.href.split("#");if(e.length>1){let t=e[1];document.getElementById(t).scrollIntoView()}}}),500)},r=()=>{if("undefined"!=typeof window){let e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5e2aa42bdaaca76c6fcfa354/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}}}}]);