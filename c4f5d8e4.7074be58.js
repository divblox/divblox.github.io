(window.webpackJsonp=window.webpackJsonp||[]).push([[26,7],{170:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);function c(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=c(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}var s=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=c(e))&&(n&&(n+=" "),n+=a);return n},o=t(186),l=t(182),i=t(171),u=t(173),d=t(163),h=t.n(d);r.a.Fragment,r.a.Fragment,r.a.Fragment,r.a.Fragment,r.a.Fragment,r.a.Fragment;a.default=function(){const e=Object(i.a)(),{siteConfig:a={}}=e;return r.a.createElement(o.a,{title:""+a.title,description:"Divblox framework documentation"},r.a.createElement("header",{className:s("hero hero--primary",h.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{alt:"Create Component",src:Object(u.a)("_media/divblox-logo-1.png")}),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("p",null,"v4.4.0"),r.a.createElement("div",{className:h.a.buttons},r.a.createElement(l.a,{className:s("button button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/")},"Get Started")),r.a.createElement("div",{className:"text-center"}))))}},191:function(e,a,t){"use strict";t(24);var n=t(0),r=t.n(n),c=t(185),s=t.n(c),o=t(184),l=t(171);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(o.b)(),{siteConfig:u={}}=Object(l.a)(),{baseUrl:d}=u,h=()=>{a.current||(Promise.all([fetch(d+"search-doc.json").then(e=>e.json()),fetch(d+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(33),t.e(36)]).then(t.bind(null,197)),t.e(24).then(t.t.bind(null,196,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)}),a.current=!0)},m=Object(n.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:m,onBlur:m,ref:c}))}}}]);