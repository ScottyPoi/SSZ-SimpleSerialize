(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42,179],{6255:function(e,t,i){"use strict";var n=i(3848),o=i(3115),r=i(2426);t.default=function(e){var t=e.src,i=e.sizes,o=e.unoptimized,r=void 0!==o&&o,s=e.priority,u=void 0!==s&&s,h=e.loading,m=e.className,p=e.quality,g=e.width,v=e.height,b=e.objectFit,y=e.objectPosition,z=e.loader,j=void 0===z?A:z,k=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=i?"responsive":"intrinsic",_=!1;"unsized"in k?(_=Boolean(k.unsized),delete k.unsized):"layout"in k&&(k.layout&&(S=k.layout),delete k.layout);0;var E=!u&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(r=!0,E=!1);var N,q,O,D=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),I=n(D,2),R=I[0],B=I[1],L=!E||B,M=x(g),P=x(v),T=x(p),C={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:b,objectPosition:y};if("undefined"!==typeof M&&"undefined"!==typeof P&&"fill"!==S){var W=P/M,V=isNaN(W)?"100%":"".concat(100*W,"%");"responsive"===S?(N={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===S?(N={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},O='<svg width="'.concat(M,'" height="').concat(P,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(N={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:P})}else"undefined"===typeof M&&"undefined"===typeof P&&"fill"===S&&(N={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var F={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};L&&(F=w({src:t,unoptimized:r,layout:S,width:M,quality:T,sizes:i,loader:j}));_&&(N=void 0,q=void 0,C=void 0);return c.default.createElement("div",{style:N},q?c.default.createElement("div",{style:q},O?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(O))}):null):null,!L&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},k,w({src:t,unoptimized:r,layout:S,width:M,quality:T,sizes:i,loader:j}),{src:t,decoding:"async",sizes:i,style:C,className:m}))),c.default.createElement("img",Object.assign({},k,F,{decoding:"async",className:m,ref:R,style:C})),u?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+F.src+F.srcSet+F.sizes,rel:"preload",as:"image",href:F.srcSet?void 0:F.src,imagesrcset:F.srcSet,imagesizes:F.sizes})):null)};var a=r(i(6169)),s=r(i(9566)),c=r(i(7294)),l=r(i(7947)),d=i(7239),u=i(5655),f=i(5749);var h=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(t).concat(z(i)).concat(a)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(z(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(z(i),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"http://res.cloudinary.com/ssz/",loader:"cloudinary"}||u.imageConfigDefault,p=m.deviceSizes,g=m.imageSizes,v=m.loader,b=m.path,y=(m.domains,[].concat(o(p),o(g)));function w(e){var t=e.src,i=e.unoptimized,n=e.layout,r=e.width,a=e.quality,s=e.sizes,c=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){var n=o(i.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(n.length){var r=.01*Math.min.apply(Math,o(n));return{widths:y.filter((function(e){return e>=p[0]*r})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:p,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(r,n,s),d=l.widths,u=l.kind,f=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:c({src:t,quality:a,width:d[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=h.get(v);if(t)return t((0,s.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function z(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},1274:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var n=i(5893);i(7294),i(5675),i(1664);function o(){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-8",children:(0,n.jsx)("img",{src:"/developers-eth-blocks.png",alt:"ethereum building blocks",height:300,width:500})})}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("h1",{children:(0,n.jsx)("div",{className:"row justify-content-center",children:"SSZ Visualizer"})}),(0,n.jsx)("h3",{children:(0,n.jsx)("div",{className:"row justify-content-center",children:"Explore SSZ Types and Merkle Trees"})}),(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("button",{className:"btn btn-dark col-6",style:{border:"solid black"},children:(0,n.jsx)("h2",{children:"START"})})})]})})]})}},9073:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simulator",function(){return i(1274)}])},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},5675:function(e,t,i){e.exports=i(6255)},9566:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},t.apply(this,arguments)}e.exports=t},6169:function(e){e.exports=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}},4453:function(){}},function(e){e.O(0,[774,679,723],(function(){return t=9073,e(e.s=t);var t}));var t=e.O();_N_E=t}]);