(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3815],{45612:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/active",function(){return s(50992)}])},52300:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var i=s(85893),r=s(41664),n=s.n(r);function c(e){return(0,i.jsxs)("div",{className:"card h-100 border border-3 p-0",children:[(0,i.jsx)(n(),{className:"nav-link",href:"./".concat(e.link),children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{className:"card-body py-4",children:[(0,i.jsx)("h5",{className:"card-title text-center border-bottom",children:e.title}),(0,i.jsx)("img",{src:e.image,className:"card-img-top border",alt:e.alt})]})})}),(0,i.jsx)("div",{className:"card-footer w-100",children:(0,i.jsx)("small",{className:"text-muted",children:e.footer})})]})}},50992:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var i=s(85893),r=s(52300),n={specs:{title:"SSZ Specs",footer:"Simple Serialize as it appears in the Eth2.0 Specs",image:"./Eth2.0SpecsRect.png",alt:"github"},overview:{title:"Technical Overview",footer:"Walkthrough explanation of SimpleSerialize",image:"./overview.png",alt:"overview"},implementations:{title:"SSZ Implementations",footer:"List of SSZ Imlementations",image:"./implementations.png",alt:"implementations"},simpleserialize:{title:"simpleserialize.com",footer:"Serialization / Deserialization of Eth2.0 Types",image:"./simpleserialize2.png",alt:"ssz.com"},visualizer:{title:"SSZ Visualizer",footer:"Interactive Exploration of SSZ Objects",image:"./visualizer.png",alt:"visualizer"},test:{title:"SSZ Testing",footer:"Test Suites for SSZ Implementations",image:"./testsuite.png",alt:"testsuite"}};function c(e){return(0,i.jsx)("div",{className:"col mt-5",children:(0,i.jsx)("div",{className:"navbar-nav-scroll row row-cols-1 g-4 ",children:Object.keys(n).map((function(e,t){var s=n[e];return(0,i.jsx)(r.Z,{title:s.title,text:s.text,footer:s.footer,image:s.image},t)}))})})}function d(e){return(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-4",children:(0,i.jsx)(c,{})}),(0,i.jsxs)("div",{className:"col-8",children:[(0,i.jsx)("h2",{className:"text-center",children:"A non-exhaustive list of SSZ implementations. Not officially endorsed, but maintained by client teams and other members of the ethereum community."}),(0,i.jsxs)("table",{className:"table table-striped table-bordered",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",children:"Language"}),(0,i.jsx)("th",{scope:"col",children:"Project"}),(0,i.jsx)("th",{scope:"col",children:"Maintainer"}),(0,i.jsx)("th",{scope:"col",children:"License"}),(0,i.jsx)("th",{scope:"col",children:"Status"}),(0,i.jsx)("th",{scope:"col",children:"Features/Notes"}),(0,i.jsx)("th",{scope:"col",children:"Link"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Dafny"}),(0,i.jsx)("td",{children:"Eth2 spec/verif. with Dafny"}),(0,i.jsx)("td",{children:"ConsenSys Software and Ethereum Foundation"}),(0,i.jsx)("td",{children:"Apache2.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Formal spec, corectness, proofs"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/ConsenSys/eth2.0-dafny",children:"ConsenSys/eth2.0/dafny"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Go"}),(0,i.jsx)("td",{children:"ZRNT"}),(0,i.jsx)("td",{children:"Diederik Loerakker (@protolambda)"}),(0,i.jsx)("td",{children:"MIT"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Generic, caching, datasharing"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/protolambda/ztyp",children:"protolambda/ztyp"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Go"}),(0,i.jsx)("td",{children:"Prysm"}),(0,i.jsx)("td",{children:"Ferran Borreguero (@ferranbt)"}),(0,i.jsx)("td",{children:"MIT"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Code-gen, fast"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/ferranbt/fastssz/",children:"ferranbt/fastssz"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Java"}),(0,i.jsx)("td",{children:"Teku"}),(0,i.jsx)("td",{children:"Consensys/PegaSys Eng."}),(0,i.jsx)("td",{children:"Apache-2.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Caching, datasharing"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/PegaSysEng/teku/tree/master/ssz/src/main/java/tech/pegasys/teku/ssz",children:"PegaSysEng/teku/ssz"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Nim"}),(0,i.jsx)("td",{children:"Nimbus"}),(0,i.jsx)("td",{children:"Status"}),(0,i.jsx)("td",{children:"MIT and Apache2.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"In-place decode, Caching"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/status-im/nim-beacon-chain/blob/master/beacon_chain/ssz.nim",children:"status-im/nim-beacon-chain/ssz.nim"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Python"}),(0,i.jsx)("td",{children:"Trinity"}),(0,i.jsx)("td",{children:"Ethereum Foundation"}),(0,i.jsx)("td",{children:"MIT"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:" Pyrsistent, partial caching"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/ethereum/py-ssz",children:"ethereum/py-ssz"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Python"}),(0,i.jsx)("td",{children:"Pyspec / Eth2.py"}),(0,i.jsx)("td",{children:"Diederik Loerakker (@protolambda)"}),(0,i.jsx)("td",{children:"MIT "}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Datasharing, caching, streaming"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/protolambda/remerkleable",children:"protolambda/remerkleable"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Rust"}),(0,i.jsx)("td",{children:"Lighthouse"}),(0,i.jsx)("td",{children:"Sigma Prime"}),(0,i.jsx)("td",{children:"Apache2.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Partial caching, fast"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/sigp/lighthouse/tree/master/consensus/ssz",children:"https://github.com/sigp/lighthouse/tree/master/consensus/ssz"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Typescript"}),(0,i.jsx)("td",{children:"Lodestar"}),(0,i.jsx)("td",{children:"Chainsafe Systems"}),(0,i.jsx)("td",{children:"LGPL-v3.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Both Tree & structural, caching"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/ChainSafe/lodestar/tree/master/packages/ssz",children:"ChainSafe/lodestar/ssz"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Zig"}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Guillaume Ballet (@gballet)"}),(0,i.jsx)("td",{children:"Unlicense"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"No merkleization (yet)"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/gballet/ssz.zig",children:"gballet/ssz.zig"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"C#"}),(0,i.jsx)("td",{children:"Cortex"}),(0,i.jsx)("td",{children:"Sly Gryphon (@sgryphon)"}),(0,i.jsx)("td",{children:"LGPL-v3.0"}),(0,i.jsx)("td",{children:"Active"}),(0,i.jsx)("td",{children:"Experimental"}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://github.com/sgryphon/cortex-ssz",children:"sgryphon/cortex-ssz"})})]})]})]})]})]})})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=45612,e(e.s=t);var t}));var t=e.O();_N_E=t}]);