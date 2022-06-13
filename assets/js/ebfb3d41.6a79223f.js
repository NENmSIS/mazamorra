"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3869],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3682:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},s=void 0,p={unversionedId:"Cibersecurity/Red Team/Tools/Hydra",id:"Cibersecurity/Red Team/Tools/Hydra",title:"Hydra",description:"FTP",source:"@site/docs/Cibersecurity/Red Team/Tools/Hydra.md",sourceDirName:"Cibersecurity/Red Team/Tools",slug:"/Cibersecurity/Red Team/Tools/Hydra",permalink:"/docs/Cibersecurity/Red Team/Tools/Hydra",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dirb",permalink:"/docs/Cibersecurity/Red Team/Tools/Dirb"},next:{title:"Metasploit",permalink:"/docs/Cibersecurity/Red Team/Tools/Metasploit"}},u=[{value:"FTP",id:"ftp",children:[],level:3},{value:"SSH",id:"ssh",children:[],level:3},{value:"Post Web Form",id:"post-web-form",children:[],level:3}],c={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"ftp"},"FTP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra -l user -P passlist.txt ftp://10.10.231.82\n")),(0,a.kt)("h3",{id:"ssh"},"SSH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hydra -l <username> -P <full path to pass> 10.10.231.82 -t 4 ssh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-l")," is for the username"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-P")," Use a list of passwords"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-t")," specifies the number of threads to use")),(0,a.kt)("h3",{id:"post-web-form"},"Post Web Form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'hydra -l <username> -P <wordlist> 10.10.231.82 http-post-form "/:username=^USER^&password=^PASS^:F=incorrect" -V\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-l")," Single username"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-P")," indicates use the following passworrd list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http-post-form")," indicates the type of form (post)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/login url")," the login page URL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":username")," the form field where the username is entered"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^USER^")," tells Hydra to use the username"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," the form field where the password is entered"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^PASS^")," tells Hydra to use the password list supplied earlier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Login")," indicates to Hydra the Login failed message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Login Failed")," is the login failure message that the form returns"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"F=incorrect"),' if this word appears on the page, its incorrect. It could be also something like this "Your username or password is incorrect."'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-V")," verbose output for every attempt")))}m.isMDXComponent=!0}}]);