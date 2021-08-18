(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5042],{51274:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var c=n(85893),o=(n(67294),n(41664)),l=(n(25722),n(37641));function a(){return(0,c.jsxs)("div",{className:"container p-0",children:[(0,c.jsx)("div",{className:"d-flex flex-row justify-content-center",children:(0,c.jsx)("div",{className:"d-flex flex-col",children:(0,c.jsx)("img",{src:"/developers-eth-blocks.png",alt:"ethereum building blocks",height:200,width:300})})}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:"row justify-content-center",children:(0,c.jsxs)("div",{className:"col",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("div",{className:"row justify-content-center",children:"SSZ Visualizer"})}),(0,c.jsx)("h3",{children:(0,c.jsx)("div",{className:"row justify-content-center",children:"Explore SSZ Types and Merkle Trees"})}),(0,c.jsx)("div",{className:"row p-3 justify-content-center",children:(0,c.jsx)("button",{className:"btn btn-dark col-6",style:{border:"solid white"},children:(0,c.jsx)("h2",{children:(0,c.jsx)(o.default,{href:"./visualizer",children:"START"})})})})]})}),(0,c.jsx)(l.Z,{NUMBER_OF_VALUES:32,animate:!0}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("h5",{className:"text-center",children:"*click to see merkle-proofs!*"})})]})}},22169:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(2696),l=n.n(o);function a(e){e.treeIdx,e.selected,e.active;var t=e.type;e.idx;function n(){return e.selected}var o=e.active?l().activated:l().deactivated,a=n()&&"leaf"===e.level||"intro"===e.level&&n()?l().selected:l().unselected,r=e.empty?l().empty:"",d="merkle"===e.level?l().merkle:"intro"===e.level?l().intro:"root"===e.level?l().root:"length"===e.level?l().length:"branch"===e.level?l().branch:"intermediate"===e.level?l().intermediate:"limit"===e.level?l().limit:l().leaf,i=e.empty?"":"demo"===e.level?l().demo:"leaf"===e.level&&e.chunkIdx==e.numChunks-1?l().green:"leaf"===e.level&&e.chunkIdx>e.numChunks-1?l().limit:"leaf"===e.level&&e.chunkIdx%2==0?l().blue:"leaf"===e.level&&e.chunkIdx%2==1?l().red:l().tree;return(0,c.jsx)("p",{className:"p-0 text-center ".concat(l().node," ").concat(d," ").concat(r," ").concat(i," ").concat(a," ").concat(o),children:"".concat(t)})}},36331:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(13962),l=n.n(o);function a(e){e.treeIdx,e.selected,e.active;function t(){return e.selected}var n=e.active?l().activated:l().deactivated,o=t()&&"leaf"===e.level||"intro"===e.level&&t()?l().selected:l().unselected,a=e.empty?l().empty:"",r="merkle"===e.level?l().merkle:"intro"===e.level?l().intro:"root"===e.level?l().root:"length"===e.level?l().length:"branch"===e.level?l().branch:"intermediate"===e.level?l().intermediate:"limit"===e.level?l().limit:l().leaf,d=e.empty?"":"demo"===e.level?l().demo:"leaf"===e.level&&e.chunkIdx==e.numChunks-1?l().green:"leaf"===e.level&&e.chunkIdx>e.numChunks-1?l().limit:"leaf"===e.level&&e.chunkIdx%2==0?l().blue:"leaf"===e.level&&e.chunkIdx%2==1?l().red:l().tree;return(0,c.jsxs)("div",{className:"".concat(l().node," ").concat(r," ").concat(a," ").concat(d," ").concat(o," ").concat(n),children:[e.type,e.idx]})}},37641:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(36331),l=n(67294);function a(e){var t=(0,l.useState)(0),n=t[0],a=t[1],r=(0,l.useState)(!1),d=r[0],i=r[1],s=(0,l.useState)([]),u=s[0],h=s[1],v=(e.animate,32);function _(e){return n===e}function f(e){return u.includes(e)}var m=64;function x(e){a(n!==e?e:0)}function y(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r="SIMPLE_______SSZ_______SERIALIZE",d=function(e){a.push((0,c.jsx)("div",{onClick:function(){return x("".concat(e))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:r[e-64],type:t,empty:l,level:"intro",chunkIdx:e-64,numChunks:v,selected:_("".concat(e))})},"".concat(t,"node").concat(e)))},i=64;i<96;i++)d(i);return a}function p(e,t,n){for(var l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=[],r=function(e){a.push((0,c.jsx)("div",{onClick:function(){return x("".concat(e+v))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:e-m+v,type:t,empty:l,level:n,chunkIdx:e-m+v,numChunks:v,selected:_("".concat(e+v))})},"".concat(t,"node").concat(e)))},d=m;d<m+e;d++)r(d);return a}function N(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r=32;r<64;r++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(r),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:r,type:t,empty:l,level:n,chunkIdx:r,numChunks:v,active:f(r)})},"".concat(t,"node").concat(r)));return a}function j(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r=0;r<e;r++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(r),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:r+Math.pow(2,n),type:"",empty:l,level:n,chunkIdx:r,numChunks:v,active:f(r+Math.pow(2,n))})},"".concat(t,"node").concat(r)));return a}return(0,l.useEffect)((function(){var e=new Array(5);if(0!==n){i(!0);e[0]=n%2==0?n-31:n-33;for(var t=0;t<5;t++)Math.floor(e[t]/2)%2==0?e[t+1]=Math.floor(e[t]/2)+1:e[t+1]=Math.floor(e[t]/2)-1;h(e)}else i(!1),h([])}),[n]),function(e){var t=[],n=function(e){if(e<=1)return 1;for(var t=2;t<1/0;){if(e<=t)return t;t*=2}}(e),l=n-e,a=function(e){var t=1;return 1==e?t:t+=Math.log(e)/Math.log(2)}(n);t.push((0,c.jsx)("div",{id:"hashtreeroot",className:"row row-cols-auto justify-content-around",children:(0,c.jsx)("div",{className:"col p-1",children:(0,c.jsx)(o.Z,{type:"R",level:"root",active:d})})},"hashtreeroot"));for(var r=1;r<a-1;r++)t.push((0,c.jsx)("div",{id:"treelevel:".concat(r),className:"row row-cols-auto justify-content-around",children:j(Math.pow(2,r),"T",r)},"treelevel:".concat(r)));return e>1&&t.push((0,c.jsx)("div",{id:"hash",className:"row row-cols-auto justify-content-around",children:N(e+l,"","branch")},"hash")),t.push((0,c.jsxs)("div",{id:"leaves",className:"row row-cols-auto justify-content-around",children:[y(e,"","intro"),p(l,"","leaf",!0)]},"leaves")),t}(32)}},25722:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(22169),l=n(67294);function a(e){var t=(0,l.useState)(0),n=t[0],a=t[1],r=(0,l.useState)(!1),d=r[0],i=r[1],s=(0,l.useState)([]),u=s[0],h=s[1],v=e.NUMBER_OF_VALUES;function _(e){return n===e}function f(e){return u.includes(e)}var m=w(v),x=w(m+1),y=function(e){var t=[],n=w(e),l=n-e,a=function(e){var t=1;return 1==e?t:t+=Math.log(e)/Math.log(2)}(n);t.push((0,c.jsx)("div",{id:"hashtreeroot",className:"row row-cols-auto justify-content-around",children:(0,c.jsx)("div",{className:"col p-1",children:(0,c.jsx)(o.Z,{type:"R",level:"root",active:d})})},"hashtreeroot"));for(var r=1;r<a-1;r++)t.push((0,c.jsx)("div",{id:"treelevel:".concat(r),className:"row row-cols-auto justify-content-around",children:k(Math.pow(2,r),"T",r)},"treelevel:".concat(r)));e>1&&t.push((0,c.jsx)("div",{id:"hash",className:"row row-cols-auto justify-content-around",children:S(e+l,"","branch")},"hash"));return t.push((0,c.jsxs)("div",{id:"leaves",className:"row row-cols-auto justify-content-around",children:[N(e,"","leaf"),j(l,"","leaf",!0)]},"leaves")),t}(v);function p(e){a(n!==e?e:0)}function N(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r=function(e){a.push((0,c.jsx)("div",{onClick:function(){return p("".concat(e))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:e-x,type:t,empty:l,level:n,chunkIdx:e-x,numChunks:v,selected:_("".concat(e))})},"".concat(t,"node").concat(e)))},d=x;d<x+e;d++)r(d);return a}function j(e,t,n){for(var l=[],a=function(e){l.push((0,c.jsx)("div",{onClick:function(){return p("".concat(e+v))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:e-x+v,type:t,empty:!0,level:"leaf",chunkIdx:e-x+v,numChunks:v,selected:_("".concat(e+v))})},"".concat(t,"node").concat(e)))},r=x;r<x+e;r++)a(r);return l}function S(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r=0;r<e;r++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(r),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:r+m,type:t,empty:l,level:"branch",chunkIdx:r,numChunks:v,active:f(r+e)})},"".concat(t,"node").concat(r)));return a}function k(e,t,n){for(var l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],r=0;r<e;r++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(r),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:r+Math.pow(2,n),type:"",empty:l,level:"intermediate",chunkIdx:r,numChunks:v,active:f(r+Math.pow(2,n))})},"".concat(t,"node").concat(r)));return a}function w(e){if(e<=1)return 1;for(var t=2;t<1/0;){if(e<=t)return t;t*=2}}return(0,l.useEffect)((function(){0!==n?(i(!0),h(4==n?[3]:5==n?[2]:8==n?[5,3]:9==n?[4,3]:10==n?[7,2]:11==n?[6,2]:16==n?[9,5,3]:17==n?[8,5,3]:18==n?[11,4,3]:19==n?[10,4,3]:20==n?[13,7,2]:21==n?[12,7,2]:22==n?[15,6,2]:23==n?[14,6,2]:[])):(i(!1),h([]))}),[n]),y}},69073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simulator",function(){return n(51274)}])},2696:function(e){e.exports={node:"NodeStyles_node__vHEpO",empty:"NodeStyles_empty__t4SrG",intro:"NodeStyles_intro__qjouS",length:"NodeStyles_length__253J3",leaf:"NodeStyles_leaf__TsOrK",demo:"NodeStyles_demo__3PScK",merkle:"NodeStyles_merkle__1wXvh",branch:"NodeStyles_branch__2DDU3",intermediate:"NodeStyles_intermediate__3u3Lj",root:"NodeStyles_root__3TvEO",red:"NodeStyles_red__2eyTD",green:"NodeStyles_green__NmNSj",blue:"NodeStyles_blue__DGa1K",limit:"NodeStyles_limit__tWu-2",selected:"NodeStyles_selected__3kaav",deactivated:"NodeStyles_deactivated__2Pq90",activated:"NodeStyles_activated__87bXL",activatedAnimation:"NodeStyles_activatedAnimation__1ar8u"}},13962:function(e){e.exports={node:"OldNodeStyles_node__112Tc",empty:"OldNodeStyles_empty__3gnYX",intro:"OldNodeStyles_intro__ZkB2Q",length:"OldNodeStyles_length__pY6U1",leaf:"OldNodeStyles_leaf__3-SJh",demo:"OldNodeStyles_demo__3PKDm",merkle:"OldNodeStyles_merkle__1TzBA",branch:"OldNodeStyles_branch__3KnYW",intermediate:"OldNodeStyles_intermediate__2HyD1",root:"OldNodeStyles_root__3yaN_",red:"OldNodeStyles_red__1q2jq",green:"OldNodeStyles_green__3vaWY",blue:"OldNodeStyles_blue__3EFMN",limit:"OldNodeStyles_limit__3Xw6k",selected:"OldNodeStyles_selected__13XRG",deactivated:"OldNodeStyles_deactivated__LHd2D",activated:"OldNodeStyles_activated__2Ff7V",activatedAnimation:"OldNodeStyles_activatedAnimation__1J19K"}}},function(e){e.O(0,[9774,2888,179],(function(){return t=69073,e(e.s=t);var t}));var t=e.O();_N_E=t}]);