(()=>{"use strict";var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="react:",o.l=(r,n,a,c)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=a);var c=o.p+o.u(t),i=new Error;o.l(c,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[c,i,l]=r,d=0;if(c.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);l&&l(o)}for(t&&t(r);d<c.length;d++)a=c[d],o.o(e,a)&&e[a]&&e[a][0](),e[c[d]]=0},r=self.webpackChunkreact=self.webpackChunkreact||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();const a=o.p+"372d3e6588c48c21634261add4f9b064.jpg",c=o.p+"cd1b0a3f6e5ee88b7e299a755eeff0a6.jpg",i=o.p+"54184384f1a79d570efcf99da2f6b75b.jpg",l=o.p+"b76e6ffc5dbfa033b8e6026e299b4a58.jpg";o.e(548).then(o.bind(o,548)),console.log("Addition 9"),console.log("Multiplication 18"),console.log("Diff -4");let d=document.createElement("h1");d.innerHTML="React",d.classList.add("react");let u=document.createElement("input");document.getElementById("root").append(d,u);let s=document.createElement("img");s.src=a,document.getElementById("picturesCont").append(s);let p=document.createElement("img");p.src=c;let m=document.createElement("img");m.src=i;let f=document.createElement("img");f.src=l,document.getElementById("multPict").append(p,m,f)})();