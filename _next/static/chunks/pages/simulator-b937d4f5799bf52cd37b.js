(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5042],{32782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var c=n(85893),o=n(67294),r=n(41664),a=(n(25722),n(22169));function l(e){var t=(0,o.useState)(0),n=t[0],r=t[1],l=(0,o.useState)(!1),s=l[0],i=l[1],d=(0,o.useState)([]),u=d[0],h=d[1],v=(e.animate,32);function f(e){return n===e}function _(e){return u.includes(e)}var m=64;function x(e){r(n!==e?e:0)}function p(e,t,n){for(var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[],l="SIMPLE_______SSZ_______SERIALIZE",s=function(e){r.push((0,c.jsx)("div",{onClick:function(){return x("".concat(e))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(a.Z,{idx:l[e-64],type:t,empty:o,level:"intro",chunkIdx:e-64,numChunks:v,selected:f("".concat(e))})},"".concat(t,"node").concat(e)))},i=64;i<96;i++)s(i);return r}function j(e,t,n){for(var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=[],l=function(e){r.push((0,c.jsx)("div",{onClick:function(){return x("".concat(e+v))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(a.Z,{idx:e-m+v,type:t,empty:o,level:n,chunkIdx:e-m+v,numChunks:v,selected:f("".concat(e+v))})},"".concat(t,"node").concat(e)))},s=m;s<m+e;s++)l(s);return r}function y(e,t,n){for(var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[],l=32;l<64;l++)r.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(l),className:"col p-1",children:(0,c.jsx)(a.Z,{idx:l,type:t,empty:o,level:n,chunkIdx:l,numChunks:v,active:_(l)})},"".concat(t,"node").concat(l)));return r}function N(e,t,n){for(var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=[],l=0;l<e;l++)r.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(l),className:"col p-1",children:(0,c.jsx)(a.Z,{idx:l+Math.pow(2,n),type:"",empty:o,level:n,chunkIdx:l,numChunks:v,active:_(l+Math.pow(2,n))})},"".concat(t,"node").concat(l)));return r}return(0,o.useEffect)((function(){var e=new Array(5);if(0!==n){i(!0);e[0]=n%2==0?n-31:n-33;for(var t=0;t<5;t++)Math.floor(e[t]/2)%2==0?e[t+1]=Math.floor(e[t]/2)+1:e[t+1]=Math.floor(e[t]/2)-1;h(e)}else i(!1),h([])}),[n]),function(e){var t=[],n=function(e){if(e<=1)return 1;for(var t=2;t<1/0;){if(e<=t)return t;t*=2}}(e),o=n-e,r=function(e){var t=1;return 1==e?t:t+=Math.log(e)/Math.log(2)}(n);t.push((0,c.jsx)("div",{id:"hashtreeroot",className:"row row-cols-auto justify-content-around",children:(0,c.jsx)("div",{className:"col p-1",children:(0,c.jsx)(a.Z,{type:"R",level:"root",active:s})})},"hashtreeroot"));for(var l=1;l<r-1;l++)t.push((0,c.jsx)("div",{id:"treelevel:".concat(l),className:"row row-cols-auto justify-content-around",children:N(Math.pow(2,l),"T",l)},"treelevel:".concat(l)));return e>1&&t.push((0,c.jsx)("div",{id:"hash",className:"row row-cols-auto justify-content-around",children:y(e+o,"","branch")},"hash")),t.push((0,c.jsxs)("div",{id:"leaves",className:"row row-cols-auto justify-content-around",children:[p(e,"","intro"),j(o,"","leaf",!0)]},"leaves")),t}(32)}function s(){return(0,c.jsxs)("div",{className:"container p-0",children:[(0,c.jsx)("div",{className:"d-flex flex-row justify-content-center",children:(0,c.jsx)("div",{className:"d-flex flex-col",children:(0,c.jsx)("img",{src:"/developers-eth-blocks.png",alt:"ethereum building blocks",height:200,width:300})})}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:"row justify-content-center",children:(0,c.jsxs)("div",{className:"col",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("div",{className:"row justify-content-center",children:"SSZ Visualizer"})}),(0,c.jsx)("h3",{children:(0,c.jsx)("div",{className:"row justify-content-center",children:"Explore SSZ Types and Merkle Trees"})}),(0,c.jsx)("div",{className:"row p-3 justify-content-center",children:(0,c.jsx)("button",{className:"btn btn-dark col-6",style:{border:"solid white"},children:(0,c.jsx)("h2",{children:(0,c.jsx)(r.default,{href:"./visualizer",children:"START"})})})})]})}),(0,c.jsx)(l,{NUMBER_OF_VALUES:32,animate:!0}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("h5",{className:"text-center",children:"*click to see merkle-proofs!*"})})]})}},22169:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(2696),r=n.n(o);function a(e){e.treeIdx,e.selected,e.active;function t(){return e.selected}var n=e.active?r().activated:r().deactivated,o=t()&&"leaf"===e.level||"intro"===e.level&&t()?r().selected:r().unselected,a=e.empty?r().empty:"",l="merkle"===e.level?r().merkle:"intro"===e.level?r().intro:"root"===e.level?r().root:"length"===e.level?r().length:"branch"===e.level?r().branch:"intermediate"===e.level?r().intermediate:"limit"===e.level?r().limit:r().leaf,s=e.empty?"":"demo"===e.level?r().demo:"leaf"===e.level&&e.chunkIdx==e.numChunks-1?r().green:"leaf"===e.level&&e.chunkIdx>e.numChunks-1?r().limit:"leaf"===e.level&&e.chunkIdx%2==0?r().blue:"leaf"===e.level&&e.chunkIdx%2==1?r().red:r().tree;return(0,c.jsxs)("div",{className:"".concat(r().node," ").concat(l," ").concat(a," ").concat(s," ").concat(o," ").concat(n),children:[e.type,e.idx]})}},25722:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var c=n(85893),o=n(22169),r=n(67294);function a(e){var t=(0,r.useState)(0),n=t[0],a=t[1],l=(0,r.useState)(!1),s=l[0],i=l[1],d=(0,r.useState)([]),u=d[0],h=d[1],v=e.NUMBER_OF_VALUES;function f(e){return n===e}function _(e){return u.includes(e)}var m=w(v),x=w(m+1),p=function(e){var t=[],n=w(e),r=n-e,a=function(e){var t=1;return 1==e?t:t+=Math.log(e)/Math.log(2)}(n);t.push((0,c.jsx)("div",{id:"hashtreeroot",className:"row row-cols-auto justify-content-around",children:(0,c.jsx)("div",{className:"col p-1",children:(0,c.jsx)(o.Z,{type:"R",level:"root",active:s})})},"hashtreeroot"));for(var l=1;l<a-1;l++)t.push((0,c.jsx)("div",{id:"treelevel:".concat(l),className:"row row-cols-auto justify-content-around",children:S(Math.pow(2,l),"T",l)},"treelevel:".concat(l)));e>1&&t.push((0,c.jsx)("div",{id:"hash",className:"row row-cols-auto justify-content-around",children:k(e+r,"","branch")},"hash"));return t.push((0,c.jsxs)("div",{id:"leaves",className:"row row-cols-auto justify-content-around",children:[y(e,"","leaf"),N(r,"","leaf",!0)]},"leaves")),t}(v);function j(e){a(n!==e?e:0)}function y(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],l=function(e){a.push((0,c.jsx)("div",{onClick:function(){return j("".concat(e))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:e-x,type:t,empty:r,level:n,chunkIdx:e-x,numChunks:v,selected:f("".concat(e))})},"".concat(t,"node").concat(e)))},s=x;s<x+e;s++)l(s);return a}function N(e,t,n){for(var r=[],a=function(e){r.push((0,c.jsx)("div",{onClick:function(){return j("".concat(e+v))},id:"".concat(t,"node").concat(e),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:e-x+v,type:t,empty:!0,level:"leaf",chunkIdx:e-x+v,numChunks:v,selected:f("".concat(e+v))})},"".concat(t,"node").concat(e)))},l=x;l<x+e;l++)a(l);return r}function k(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],l=0;l<e;l++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(l),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:l+m,type:t,empty:r,level:"branch",chunkIdx:l,numChunks:v,active:_(l+e)})},"".concat(t,"node").concat(l)));return a}function S(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],l=0;l<e;l++)a.push((0,c.jsx)("div",{id:"".concat(t,"node").concat(l),className:"col p-1",children:(0,c.jsx)(o.Z,{idx:l+Math.pow(2,n),type:"",empty:r,level:"intermediate",chunkIdx:l,numChunks:v,active:_(l+Math.pow(2,n))})},"".concat(t,"node").concat(l)));return a}function w(e){if(e<=1)return 1;for(var t=2;t<1/0;){if(e<=t)return t;t*=2}}return(0,r.useEffect)((function(){0!==n?(i(!0),h(4==n?[3]:5==n?[2]:8==n?[5,3]:9==n?[4,3]:10==n?[7,2]:11==n?[6,2]:16==n?[9,5,3]:17==n?[8,5,3]:18==n?[11,4,3]:19==n?[10,4,3]:20==n?[13,7,2]:21==n?[12,7,2]:22==n?[15,6,2]:23==n?[14,6,2]:[])):(i(!1),h([]))}),[n]),p}},69073:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simulator",function(){return n(32782)}])},2696:function(e){e.exports={node:"NodeStyles_node__vHEpO",empty:"NodeStyles_empty__t4SrG",intro:"NodeStyles_intro__qjouS",length:"NodeStyles_length__253J3",leaf:"NodeStyles_leaf__TsOrK",demo:"NodeStyles_demo__3PScK",merkle:"NodeStyles_merkle__1wXvh",branch:"NodeStyles_branch__2DDU3",intermediate:"NodeStyles_intermediate__3u3Lj",root:"NodeStyles_root__3TvEO",red:"NodeStyles_red__2eyTD",green:"NodeStyles_green__NmNSj",blue:"NodeStyles_blue__DGa1K",limit:"NodeStyles_limit__tWu-2",selected:"NodeStyles_selected__3kaav",deactivated:"NodeStyles_deactivated__2Pq90",activated:"NodeStyles_activated__87bXL",activatedAnimation:"NodeStyles_activatedAnimation__1ar8u"}}},function(e){e.O(0,[9774,2888,179],(function(){return t=69073,e(e.s=t);var t}));var t=e.O();_N_E=t}]);