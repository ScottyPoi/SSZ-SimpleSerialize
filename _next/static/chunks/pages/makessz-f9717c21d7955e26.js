(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6423],{88005:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/makessz",function(){return e(93817)}])},93817:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return o}});var s=e(85893),i=e(56050),a=e(67294);function o(){var n=function(n){var t=C.vector?"vector":C.list?"list":"",e=C.vector?y:C.list?k:"";x("".concat(t,"[").concat(n,", ").concat(e,"]"))},t=function(n){_(n)},e=(0,a.useState)("type foo = ssz."),o=e[0],r=e[1],c=(0,a.useState)(["Basic","Composite"]),l=c[0],u=c[1],d=(0,a.useState)(""),f=d[0],v=d[1],h=(0,a.useState)(""),m=h[0],x=h[1],N=(0,a.useState)(null),j=N[0],b=N[1],p=(0,a.useState)({vector:!1,list:!1}),C=p[0],w=p[1],U=(0,a.useState)(0),y=U[0],_=U[1],g=(0,a.useState)(0),k=g[0],S=g[1],B={ssz:["Basic","Composite"],Basic:["Boolean","Uint8","Uint16","Uint32","Uint128","Uint256"],Composite:["Vector","List","Container"],List:["Boolean","Uint8","Uint16","Uint32","Uint128","Uint256"],Vector:["Boolean","Uint8","Uint16","Uint32","Uint128","Uint256"],Container:[]};return(0,a.useEffect)((function(){"ssz"!=f&&r(o+"<".concat(f,">")),u(B[f]);var n="Vector"==f||"List"==f?{vector:!0,list:!1}:C;"Vector"==f?_(0):"List"==f&&S(0),B[f]||b(f),w(n)}),[f]),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)("textarea",{readOnly:!0,value:o}),(0,s.jsx)("h1",{children:m})]}),(0,s.jsxs)("div",{className:"col",children:[(0,s.jsxs)("div",{className:"btn-group",children:[(0,s.jsx)("button",{className:"btn btn-warning",onClick:function(){return r("type foo = ssz."),u(["Basic","Composite"]),v("ssz"),x(null),b(null),w({vector:!1,list:!1}),S(null),void _(null)},children:"RESET"}),l&&l.map((function(n){return(0,s.jsx)("button",{className:"btn btn-secondary",onClick:function(){return v(n)},children:n})})),j&&C.vector?(0,s.jsxs)("div",{className:"form-outline",children:["Length",(0,s.jsx)("input",{type:"number",className:"form-control",id:"floatingPassword",defaultValue:0,value:y,onChange:function(n){return t(n.target.value)}})]}):C.list?(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Limit"}),(0,s.jsx)("textarea",{className:"text-area",id:"floatingPassword",defaultValue:0,value:y,onChange:function(n){return t(n.target.value)},rows:1})]}):null]}),j&&C.vector?(0,s.jsx)("div",{className:"row",children:j&&0!=y&&(0,s.jsx)("button",{className:"btn btn-secondary",onClick:function(){return n(j)},children:"Create Type"})}):C.list?(0,s.jsx)("div",{className:"row",children:j&&(0,s.jsx)("button",{className:"btn btn-secondary",onClick:function(){return n(j)},children:"Create Type"})}):j&&(0,s.jsx)("button",{className:"btn btn-secondary",onClick:function(){return n(j)},children:"Create Type"})]}),(0,s.jsx)("div",{className:"col",children:function(){var n=new Uint8Array(32),t=new i.LeafNode(n),e=new i.BranchNode(t,t);return new i.Tree(e)}().toString()}),(0,s.jsx)("div",{className:"col",children:"Visualization of exploration "})]})})}}},function(n){n.O(0,[7507,6050,9774,2888,179],(function(){return t=88005,n(n.s=t);var t}));var t=n.O();_N_E=t}]);