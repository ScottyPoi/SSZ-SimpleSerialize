(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410,179],{6255:function(e,i,t){"use strict";var n=t(3848),o=t(3115),r=t(2426);i.default=function(e){var i=e.src,t=e.sizes,o=e.unoptimized,r=void 0!==o&&o,s=e.priority,u=void 0!==s&&s,h=e.loading,m=e.className,p=e.quality,g=e.width,v=e.height,x=e.objectFit,b=e.objectPosition,z=e.loader,A=void 0===z?j:z,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),k=t?"responsive":"intrinsic",_=!1;"unsized"in S?(_=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(k=S.layout),delete S.layout);0;var E=!u&&("lazy"===h||"undefined"===typeof h);i&&i.startsWith("data:")&&(r=!0,E=!1);var N,q,D,O=(0,f.useIntersection)({rootMargin:"200px",disabled:!E}),I=n(O,2),M=I[0],P=I[1],B=!E||P,C=w(g),L=w(v),R=w(p),W={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:x,objectPosition:b};if("undefined"!==typeof C&&"undefined"!==typeof L&&"fill"!==k){var T=L/C,H=isNaN(T)?"100%":"".concat(100*T,"%");"responsive"===k?(N={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:H}):"intrinsic"===k?(N={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},D='<svg width="'.concat(C,'" height="').concat(L,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(N={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:C,height:L})}else"undefined"===typeof C&&"undefined"===typeof L&&"fill"===k&&(N={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var F={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};B&&(F=y({src:i,unoptimized:r,layout:k,width:C,quality:R,sizes:t,loader:A}));_&&(N=void 0,q=void 0,W=void 0);return c.default.createElement("div",{style:N},q?c.default.createElement("div",{style:q},D?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(D))}):null):null,!B&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},S,y({src:i,unoptimized:r,layout:k,width:C,quality:R,sizes:t,loader:A}),{src:i,decoding:"async",sizes:t,style:W,className:m}))),c.default.createElement("img",Object.assign({},S,F,{decoding:"async",className:m,ref:M,style:W})),u?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+F.src+F.srcSet+F.sizes,rel:"preload",as:"image",href:F.srcSet?void 0:F.src,imagesrcset:F.srcSet,imagesizes:F.sizes})):null)};var a=r(t(6169)),s=r(t(9566)),c=r(t(7294)),l=r(t(7947)),d=t(7239),u=t(5655),f=t(5749);var h=new Map([["imgix",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(i).concat(z(t)).concat(a)}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(i).concat(r).concat(z(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(z(t),"?imwidth=").concat(n)}],["default",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(o||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://res.cloudinary.com/ssz/image/upload/",loader:"cloudinary"}||u.imageConfigDefault,p=m.deviceSizes,g=m.imageSizes,v=m.loader,x=m.path,b=(m.domains,[].concat(o(p),o(g)));function y(e){var i=e.src,t=e.unoptimized,n=e.layout,r=e.width,a=e.quality,s=e.sizes,c=e.loader;if(t)return{src:i,srcSet:void 0,sizes:void 0};var l=function(e,i,t){if(t&&("fill"===i||"responsive"===i)){var n=o(t.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(n.length){var r=.01*Math.min.apply(Math,o(n));return{widths:b.filter((function(e){return e>=p[0]*r})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:p,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return b.find((function(i){return i>=e}))||b[b.length-1]})))),kind:"x"}}(r,n,s),d=l.widths,u=l.kind,f=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,t){return"".concat(c({src:i,quality:a,width:e})," ").concat("w"===u?e:t+1).concat(u)})).join(", "),src:c({src:i,quality:a,width:d[f]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var i=h.get(v);if(i)return i((0,s.default)({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function z(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,i){return e-i})),b.sort((function(e,i){return e-i}))},7239:function(e,i){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},7236:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return a}});var n=t(5893),o=(t(7294),t(1664)),r=t(5675);function a(){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:" col-8",children:(0,n.jsx)(r.default,{src:"/developers-eth-blocks.png",alt:"ethereum building blocks",height:300,width:500})})}),(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsxs)("div",{className:"col-12 text-center",children:[(0,n.jsx)("h3",{children:"SSZ"}),(0,n.jsxs)("p",{children:["Exists ",(0,n.jsx)("code",{children:"officially"})," as a pair of documents in the Eth2.0 specs"]}),(0,n.jsxs)("div",{className:"row justify-content-between",children:[(0,n.jsxs)("div",{className:"col-4 text-center",children:[(0,n.jsx)(o.default,{href:"/specs",children:(0,n.jsx)("a",{children:(0,n.jsx)("h2",{children:"SimpleSerialize.md"})})}),(0,n.jsx)("p",{children:"Defines Constants, Types, Serialization, Deserialization, and Merkleization"})]}),(0,n.jsxs)("div",{className:"col-4",children:[(0,n.jsx)(o.default,{href:"/merkleproofs",children:(0,n.jsx)("a",{children:(0,n.jsx)("h2",{children:"MerkleProofs.md"})})}),(0,n.jsx)("p",{children:"Specifies Merkle Proof formats, including merkle multiproofs and sevral helper functions"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("h4",{children:["Simple Serialize (SSZ) is a standard for the encoding and merkleization of structured data ",(0,n.jsx)("br",{})," Designed for ETH 2.0"]})})]})})]})}},3409:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation",function(){return t(7236)}])},5655:function(e,i){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},5675:function(e,i,t){e.exports=t(6255)},9566:function(e){function i(){return e.exports=i=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}e.exports=i},6169:function(e){e.exports=function(e,i){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}},4453:function(){}},function(e){e.O(0,[774,679,723],(function(){return i=3409,e(e.s=i);var i}));var i=e.O();_N_E=i}]);