(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2948],{69671:function(D,u,e){var n=e(82730);D.exports=F;var t=Object.hasOwnProperty,r=/\s/g,i=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function F(){if(!(this instanceof F))return new F;this.reset()}function c(D,u){return"string"!==typeof D?"":(u||(D=D.toLowerCase()),D.trim().replace(i,"").replace(n(),"").replace(r,"-"))}F.prototype.slug=function(D,u){for(var e=this,n=c(D,!0===u),r=n;t.call(e.occurrences,n);)e.occurrences[r]++,n=r+"-"+e.occurrences[r];return e.occurrences[n]=0,n},F.prototype.reset=function(){this.occurrences=Object.create(null)},F.slug=c},82730:function(D){D.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},33263:function(D,u,e){"use strict";D.exports=e(4212)},34369:function(D,u,e){"use strict";var n=e(94470);function t(D,u,e,n,i){var F,c=u.children,s=c[c.length-1],l=-1;if(1===D.depth?c.push({type:"listItem",spread:!1,children:[{type:"paragraph",children:[{type:"link",title:null,url:"#"+(n||"")+D.id,children:r(D.children)}]}]}):s&&"listItem"===s.type?t(D,c[c.length-1],e,n,i):s&&"list"===s.type?(D.depth--,t(D,s,e,n,i)):"list"===u.type?(F={type:"listItem",spread:!1,children:[]},c.push(F),t(D,F,e,n,i)):(F={type:"list",ordered:i,spread:!1,children:[]},c.push(F),D.depth--,t(D,F,e,n,i)),"list"!==u.type||e)u.spread=!e;else for(u.spread=!1;++l<c.length;)if(c[l].children.length>1){u.spread=!0;break}}function r(D){var u=[],e=-1;if(D)for(;++e<D.length;)u=u.concat(i(D[e]));return u}function i(D){var u;return"link"===D.type||"linkReference"===D.type||"footnote"===D.type||"footnoteReference"===D.type?r(D.children):(delete(u=n({},D)).children,delete u.position,u=n(!0,{},u),D.children&&(u.children=r(D.children)),u)}D.exports=function(D,u,e,n){var r={type:"list",ordered:n,spread:!1,children:[]},i=1/0,F=-1;for(;++F<D.length;)D[F].depth<i&&(i=D[F].depth);F=-1;for(;++F<D.length;)D[F].depth-=i-1;F=-1;for(;++F<D.length;)t(D[F],r,u,e,n);return r}},4212:function(D,u,e){"use strict";D.exports=function(D,u){var e=u||{},i=e.heading?r(e.heading):null,F=n(D,i,e);F.map=F.map.length?t(F.map,e.tight,e.prefix,e.ordered||!1):null,i||(F.endIndex=F.index=null);return F};var n=e(75910),t=e(34369),r=e(46039)},75910:function(D,u,e){"use strict";D.exports=function(D,u,e){var c,s,l,E=e.skip&&F(e.skip),o=r(e.parents||D),a=[];return i.reset(),t(D,"heading",(function(D,t,r){var F=n(D),d=D.data&&D.data.hProperties&&D.data.hProperties.id,C=i.slug(d||F);if(!o(r))return;if(u&&!c&&u.test(F))return c=t+1,void(l=D);l&&!s&&D.depth<=l.depth&&(s=t);!F||!s&&u||e.maxDepth&&!(D.depth<=e.maxDepth)||E&&E.test(F)||a.push({depth:D.depth,children:D.children,id:C})})),{index:c||-1,endIndex:c?s||D.children.length:-1,map:a}};var n=e(4999),t=e(62854),r=e(48145),i=e(69671)(),F=e(46039)},46039:function(D){"use strict";D.exports=function(D){return new RegExp("^("+D+")$","i")}},37119:function(D,u,e){"use strict";e.r(u),e.d(u,{__N_SSG:function(){return h},default:function(){return f}});var n=e(85893),t=e(67294),r=e(30724),i=e.n(r),F=e(10043),c=e.n(F),s=e(88574),l=e.n(s),E=e(34490),o=e.n(E);function a(D){return(0,n.jsx)("div",{className:"row justify-content-end ",children:(0,n.jsx)("div",{className:"col-8 p-0",children:(0,n.jsx)(i(),{plugins:[o(),l(),c()],children:D.SpecsData})})})}var d=e(61929),C=e.n(d);function p(D){return(0,n.jsx)("div",{className:"row p-0",children:(0,n.jsx)("div",{className:"col p-0",children:(0,n.jsx)(i(),{plugins:[o(),l(),c()],children:D.table})})})}var h=!0;function f(D){var u=D.SpecsData,e=D.MerkleProofs,r=D.merkleTOC,i=D.specsTOC,F=(0,t.useState)(u),c=F[0],s=F[1],l=(0,t.useState)(i),E=l[0],o=l[1],d=(0,t.useState)(!0),h=d[0],f=d[1];return(0,t.useEffect)((function(){f(c==u),o(c==u?i:r)})),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row position-relative ".concat(C().toc),children:[(0,n.jsxs)("div",{className:"col-4 d-none d-sm-block position-fixed ".concat(C().scroll),children:[(0,n.jsx)("div",{className:"d-flex flex-row",children:(0,n.jsxs)("ul",{className:"nav bg-light nav-tabs",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("button",{className:"nav-link ".concat(h?"active":""," btn"),type:"btn",onClick:function(){return s(u)},children:"SimpleSerialize.md"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("button",{type:"button",className:"nav-link ".concat(h?"":"active"," btn"),onClick:function(){return s(e)},children:"Merkle-Proofs.md"})})]})}),(0,n.jsx)("div",{className:"d-flex px-5 row",children:(0,n.jsx)(p,{table:E})})]}),(0,n.jsx)("div",{className:"col-12 p-0 g-0 m-0 ".concat(C().scroll),children:(0,n.jsx)(a,{SpecsData:c})})]})})}},45453:function(D,u,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show",function(){return e(37119)}])},61929:function(D){D.exports={scroll:"specs_scroll__2OMRg",toc:"specs_toc__3Lfdw",bottom:"specs_bottom__Cfcxk",content:"specs_content__2wjjL"}},34490:function(D,u,e){"use strict";var n=e(99303),t=e(62854),r=e(69671)();function i(D){r.reset(),t(D,"heading",(function(D){var u=D.data||(D.data={}),e=u.hProperties||(u.hProperties={}),t=e.id;t=t?r.slug(t,!0):r.slug(n(D)),u.id=t,e.id=t}))}D.exports=function(){return i}},99303:function(D){"use strict";function u(D){return D&&(D.value||D.alt||D.title||"children"in D&&e(D.children)||"length"in D&&e(D))||""}function e(D){for(var e=[],n=D.length,t=-1;++t<n;)e[t]=u(D[t]);return e.join("")}D.exports=u},88574:function(D,u,e){"use strict";var n=e(33263);D.exports=function(D){var u=D||{};return function(D){var e=n(D,Object.assign({},u,{heading:u.heading||"toc|table[ -]of[ -]contents?"}));if(null===e.index||-1===e.index||!e.map)return;D.children=[].concat(D.children.slice(0,e.index),e.map,D.children.slice(e.endIndex))}}}},function(D){D.O(0,[9774,7467,2888,179],(function(){return u=45453,D(D.s=u);var u}));var u=D.O();_N_E=u}]);