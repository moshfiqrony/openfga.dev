(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",265:"87c4c920",521:"97140aee",569:"78aaed86",1105:"9c4cd4c4",1217:"a09a1188",1429:"33b74eba",1489:"6cad6366",1794:"4204f988",2052:"15369573",2354:"5ccffc9c",2386:"bb879dcd",2450:"acf022e4",2452:"63b646c1",2744:"3827dd5a",3077:"6786195a",3151:"cb8ccc1a",3207:"3d83e150",3237:"1df93b7f",3325:"da16da38",3666:"18eda3ee",4374:"30325ba4",4464:"f5ba7293",4706:"78431c72",4752:"3652cf2a",4886:"87a4c587",5019:"4c2069ba",5289:"028b1cc5",5362:"d3d4dca1",5721:"0938166f",5777:"69ced8de",5863:"34a3e208",6055:"76c18be1",6075:"3a191a7b",6359:"bd85ffac",6403:"7bbc0b76",6743:"7284575f",6901:"4427aa46",7226:"e260e0bb",7287:"ed2f6563",7459:"439d46c1",7464:"9578a8cf",7647:"4337ba13",7852:"6a4b619d",7918:"17896441",7920:"1a4e3797",8018:"a36c58ef",8128:"882ec15a",8242:"db2cdc18",8371:"b2fd7883",8425:"b89f0a14",8592:"common",8705:"3aada504",8883:"4a075682",9062:"7742897f",9302:"73db2c80",9514:"1be78505",9904:"4920f1c1"}[e]||e)+"."+{53:"2a602501",265:"1a3eab43",521:"ff838d0a",569:"211e7b3e",1105:"9262bbd4",1217:"980c4342",1429:"a09738d3",1489:"c35aff97",1794:"bd8238d7",2052:"8b93cf77",2354:"9af0282f",2386:"f9d4b5fb",2450:"4bd01e0e",2452:"0c9f1afb",2744:"0dcd4caf",3077:"6da16b99",3151:"3f264cf8",3207:"21d7ba80",3237:"21a61528",3247:"9021995b",3325:"a25dfb5f",3604:"d335bd71",3666:"f434ea40",4374:"8819ef76",4464:"7e9dace6",4706:"e38bdecf",4752:"ce5d87f4",4886:"729ed621",5019:"e900dfc7",5289:"0409959f",5362:"f5765ddb",5525:"7c7e6e95",5721:"0c5c0c14",5777:"41c85fee",5863:"63182f22",6055:"ec1ba11b",6075:"25edcd1f",6359:"d228769b",6403:"eff6cef3",6483:"ab3b77c5",6743:"23af4eb2",6901:"19dc967d",7226:"f9505b7e",7287:"25d15a88",7459:"eeff8ce6",7464:"c65c0d29",7647:"48f38e54",7852:"03223271",7918:"1733ab71",7920:"dcf4b5e2",8018:"27097d61",8128:"caa43369",8242:"f7fd0289",8371:"906b1900",8425:"9da187f6",8443:"c8953d9b",8592:"7e3a417f",8705:"2f0348e3",8883:"cda57b14",9062:"1fb2986e",9302:"332761b4",9514:"761ea697",9904:"b5d484bf",9963:"2d1bc33b"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="openfga.dev:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/",b.gca=function(e){return e={15369573:"2052",17896441:"7918","935f2afb":"53","87c4c920":"265","97140aee":"521","78aaed86":"569","9c4cd4c4":"1105",a09a1188:"1217","33b74eba":"1429","6cad6366":"1489","4204f988":"1794","5ccffc9c":"2354",bb879dcd:"2386",acf022e4:"2450","63b646c1":"2452","3827dd5a":"2744","6786195a":"3077",cb8ccc1a:"3151","3d83e150":"3207","1df93b7f":"3237",da16da38:"3325","18eda3ee":"3666","30325ba4":"4374",f5ba7293:"4464","78431c72":"4706","3652cf2a":"4752","87a4c587":"4886","4c2069ba":"5019","028b1cc5":"5289",d3d4dca1:"5362","0938166f":"5721","69ced8de":"5777","34a3e208":"5863","76c18be1":"6055","3a191a7b":"6075",bd85ffac:"6359","7bbc0b76":"6403","7284575f":"6743","4427aa46":"6901",e260e0bb:"7226",ed2f6563:"7287","439d46c1":"7459","9578a8cf":"7464","4337ba13":"7647","6a4b619d":"7852","1a4e3797":"7920",a36c58ef:"8018","882ec15a":"8128",db2cdc18:"8242",b2fd7883:"8371",b89f0a14:"8425",common:"8592","3aada504":"8705","4a075682":"8883","7742897f":"9062","73db2c80":"9302","1be78505":"9514","4920f1c1":"9904"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();