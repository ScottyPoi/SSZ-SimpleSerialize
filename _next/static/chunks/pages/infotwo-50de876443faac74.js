(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1424],{45808:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/infotwo",function(){return t(64261)}])},9281:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var s=t(85893),r=t(87717);function o(e){var n=e.mod,t=e.proof,o=e.proofText,i=e.func;return t?(0,s.jsxs)("div",{className:"d-flex-box border overflow-auto",style:{height:"50%"},children:[(0,s.jsx)(r.Z1,{language:"typescript",text:o,showLineNumbers:!1,theme:r.iz,wrapLines:!0,codeBlock:!0}),e.lodesReturns]}):(0,s.jsxs)("div",{className:"d-flex-box border overflow-auto",style:{height:"50%"},children:[(0,s.jsx)(r.Z1,{language:"typescript",text:"[object Object]"!=n[i]?n[i]:"const ".concat(i," = { \n  ").concat(Object.values(n[i]).toString()," \n}"),showLineNumbers:!1,theme:r.iz,wrapLines:!0,codeBlock:!0}),e.lodesReturns]})}},64261:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var s=t(85893),r=t(67294),o=t(9281),i=t(83090),a=t(25874);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,s=new Array(n);t<n;t++)s[t]=e[t];return s}function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var n=function(){e.setSubMenu((0,s.jsx)("div",{className:"box list-group",children:o.map((function(n,r){return t[n]&&(0,s.jsx)("button",{id:"".concat(n,"tab"),type:"button",className:"list-group-item list-group-item-action ".concat(e.active==e.name&&"active"),onClick:function(){return e.handleChange(n,t)},children:(0,s.jsx)("h6",{className:"text-end",children:n})})}))})),e.setGroup(e.name),e.resetSubs()},t=e.ssz,r=e.name,o=u(e.lst);return(0,s.jsx)("button",{className:"list-group-item list-group-item-action ".concat(e.active==e.name&&"active"),type:"button",id:"".concat(e.name,"menu"),onClick:function(){return n()},children:(0,s.jsx)("h6",{children:r})})}var c=t(4111),d=t(40048),p={name:"TreeValue",subs:[{name:"BasicArrayTreeValue",subs:[{name:"BasicListTreeValue"}]},{name:"CompositeArrayTreeValue",subs:[{name:"CompositeListTreeValue"}]},{name:"ContainerLeafNodeStructTreeValue"},{name:"ContainerTreeValue"},{name:"UnionTreeValue"}]},h=t(99171);function m(e){var n=function(n){e.setSubMenu((0,s.jsxs)("div",{className:"col",children:[" ",(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",id:"".concat(n,"button"),onClick:function(){return function(n){e.handleChange(n,h)}(n)},children:(0,s.jsx)("h6",{className:"text-start",children:n})})}),Object.keys(h.ssz).map((function(e){return(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",id:"".concat(n,"button"),onClick:function(){return t(h.ssz[e])},children:(0,s.jsx)("h6",{className:"text-start",children:e})})})}))]})),e.setSubSubMenu(null)},t=function(n){var t=Object.keys(n);e.setSubSubMenu((0,s.jsx)("div",{className:"col",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:t.map((function(e){return(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("h6",{className:"text-center",children:e})})}))})})}))},r=Object.keys(h),o=r.map((function(e){return"function"==typeof h[e]&&e}));r.map((function(e){return"object"==typeof h[e]&&e}));return(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:o.map((function(t){return h[t]&&(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("button",{type:"button",className:"list-group-item list-group-item-action",id:"".concat(t,"button"),onClick:function(){return n(t)},children:(0,s.jsx)("h6",{className:"text-start",children:e.name})})})}))})})}var x=t(20675),b=(t(67684),t(65866));function g(e){var n=e.lst,t=e.pmt,r=["Node","BranchNode","LeafNode","Tree","ProofType","ProofTypeSerialized"],o=n.map((function(e){return e.includes("hash")|e.includes("Hash")&&e})),i=n.map((function(e){return e.includes("Gind")|e.includes("gind")&&e})),a=n.map((function(e){return e.includes("Proof")|e.includes("proof")&&e})),l=n.map((function(e){return e.includes("SubTree")|e.includes("subtree")&&e})),u=n.map((function(e){return!r.includes(e)&!o.includes(e)&!l.includes(e)&!a.includes(e)&!i.includes(e)&&e})),c=[r,o,i,a,l,u],d=["Merkle Tree Class Objects","Merkle Tree Hash Funcions","Merkle Tree GIndex Functions","Merkle Tree Proof Functions","Merkle Tree Subtree Functions","Merkle Tree Helper Functions"];return(0,s.jsxs)("div",{className:"container p-0",children:[c.map((function(n,r){return(0,s.jsx)(f,{lst:n,name:d[r],handleChange:e.handleChange,ssz:t,setSubMenu:e.setSubMenu,setGroup:e.setGroup,active:e.group,resetSubs:e.resetSubs})})),(0,s.jsx)(f,{lst:Object.keys(x),name:"single",handleChange:e.handleChange,ssz:x,setSubMenu:e.setSubMenu,setGroup:e.setGroup,active:e.group,resetSubs:e.resetSubs}),(0,s.jsx)(f,{lst:Object.keys(b),name:"treeOffset",handleChange:e.handleChange,ssz:b,setSubMenu:e.setSubMenu,setGroup:e.setGroup,active:e.group,resetSubs:e.resetSubs})]})}var v={SingleProof:"\n    export interface TreeOffsetProof {\n        type: ProofType.treeOffset;\n        offsets: number[];\n        leaves: Uint8Array[];\n    }",TreeOffsetProof:"\n    export interface TreeOffsetProof {\n      type: ProofType.treeOffset;\n      offsets: number[];\n      leaves: Uint8Array[];\n    }    ",Proof:"\n    \n    export type Proof = SingleProof | TreeOffsetProof;",SingleProofInput:"\n    \n    export interface SingleProofInput {\n      type: ProofType.single;\n      gindex: Gindex;\n    }    ",TreeOffsetProofInput:"\n    export interface TreeOffsetProofInput {\n        type: ProofType.treeOffset;\n        gindices: Gindex[];\n    }    ",ProofInput:"\n    export type ProofInput = SingleProofInput | TreeOffsetProofInput;\n    ",createSingleProof:"\n    \n    export function createSingleProof(rootNode: Node, index: Gindex): [Uint8Array, Uint8Array[]] {\n      const witnesses: Uint8Array[] = [];\n      let node = rootNode;\n      for (const i of gindexIterator(index)) {\n          if (i) {\n              if (node.isLeaf()) throw new Error(ERR_INVALID_NAV);\n              witnesses.push(node.left.root);\n              node = node.right;\n            } else {\n                if (node.isLeaf()) throw new Error(ERR_INVALID_NAV);\n                witnesses.push(node.right.root);\n                node = node.left;\n            }\n        }\n        return [node.root, witnesses.reverse()];\n    }",nodeToTreeOffsetProof:'\n    \n    export function nodeToTreeOffsetProof(\n        node: Node,\n        gindex: GindexBitstring,\n        proofGindices: GindexBitstring[]\n        ): [number[], Uint8Array[]] {\n            if (!proofGindices.length || !proofGindices[0].startsWith(gindex)) {\n          // there are no proof indices left OR the current subtree contains no remaining proof indices\n          return [[], []];\n        } else if (gindex === proofGindices[0]) {\n          // the current node is at the next proof index\n          proofGindices.shift();\n          return [[], [node.root]];\n        } else {\n          // recursively compute offsets, leaves for the left and right subtree\n          const [leftOffsets, leftLeaves] = nodeToTreeOffsetProof(node.left, gindex + "0", proofGindices);\n          const [rightOffsets, rightLeaves] = nodeToTreeOffsetProof(node.right, gindex + "1", proofGindices);\n          // the offset prepended to the list is # of leaves in the left subtree\n          const pivot = leftLeaves.length;\n          return [[pivot].concat(leftOffsets, rightOffsets), leftLeaves.concat(rightLeaves)];\n        }\n    }',treeOffsetProofToNode:'\n    \n    export function treeOffsetProofToNode(offsets: number[], leaves: Uint8Array[]): Node {\n    if (!leaves.length) {\n        throw new Error("Proof must contain gt 0 leaves");\n      } else if (leaves.length === 1) {\n        return new LeafNode(leaves[0]);\n      } else {\n        // the offset popped from the list is the # of leaves in the left subtree\n        const pivot = offsets[0];\n        return new BranchNode(\n          treeOffsetProofToNode(offsets.slice(1, pivot), leaves.slice(0, pivot)),\n          treeOffsetProofToNode(offsets.slice(pivot), leaves.slice(pivot))\n        );\n      }\n    }',createNodeFromSingleProof:"\n    export function createNodeFromSingleProof(gindex: Gindex, leaf: Uint8Array, witnesses: Uint8Array[]): Node {\n      let node: Node = new LeafNode(leaf);\n      const w = witnesses.reverse();\n      while (gindex > 1) {\n          const sibling = new LeafNode(w.pop() as Uint8Array);\n        if (gindex % BigInt(2) === BigInt(0)) {\n          node = new BranchNode(node, sibling);\n        } else {\n          node = new BranchNode(sibling, node);\n        }\n        gindex = gindex / BigInt(2);\n    }\n      return node;\n    }\n    ",createNodeFromTreeOffsetProof:"\n    export function createNodeFromTreeOffsetProof(offsets: number[], leaves: Uint8Array[]): Node {\n        // TODO validation\n        return treeOffsetProofToNode(offsets, leaves);\n      }\n        ",computeTreeOffsetProofSerializedLength:"\n    export function computeTreeOffsetProofSerializedLength(offsets: number[], leaves: Uint8Array[]): number {\n        // add 1 for # of leaves\n        return (offsets.length + 1) * 2 + leaves.length * 32;\n      }   ",serializeTreeOffsetProof:"\n    export function serializeTreeOffsetProof(\n        output: Uint8Array,\n        byteOffset: number,\n        offsets: number[],\n        leaves: Uint8Array[]\n      ): void {\n        const writer = new DataView(output.buffer, output.byteOffset, output.byteLength);\n        // set # of leaves\n        writer.setUint16(byteOffset, leaves.length, true);\n        // set offsets\n        const offsetsStartIndex = byteOffset + 2;\n        for (let i = 0; i < offsets.length; i++) {\n          writer.setUint16(i * 2 + offsetsStartIndex, offsets[i], true);\n        }\n        // set leaves\n        const leavesStartIndex = offsetsStartIndex + offsets.length * 2;\n        for (let i = 0; i < leaves.length; i++) {\n          output.set(leaves[i], i * 32 + leavesStartIndex);\n        }\n      }  ",deserializeTreeOffsetProof:'\n    \n    export function deserializeTreeOffsetProof(data: Uint8Array, byteOffset: number): [number[], Uint8Array[]] {\n      const reader = new DataView(data.buffer, data.byteOffset, data.byteLength);\n      // get # of leaves\n      const leafCount = reader.getUint16(byteOffset, true);\n      if (data.length < (leafCount - 1) * 2 + leafCount * 32) {\n        throw new Error("Unable to deserialize tree offset proof: not enough bytes");\n      }\n      // get offsets\n      const offsetsStartIndex = byteOffset + 2;\n      const offsets = Array.from({length: leafCount - 1}, (_, i) => reader.getUint16(i * 2 + offsetsStartIndex, true));\n      // get leaves\n      const leavesStartIndex = offsetsStartIndex + offsets.length * 2;\n      const leaves = Array.from({length: leafCount}, (_, i) =>\n        data.subarray(i * 32 + leavesStartIndex, (i + 1) * 32 + leavesStartIndex)\n      );\n      return [offsets, leaves];\n    }'};function y(e){var n=function(){e.setSubMenu((0,s.jsx)("div",{className:"box list-group",children:t.map((function(n,t){return v[n]&&(0,s.jsx)("button",{id:"".concat(n,"tab"),type:"button",className:"list-group-item list-group-item-action ".concat(e.active==e.name&&"active"),onClick:function(){return e.handleChange(n,null,!0,v[n])},children:(0,s.jsx)("h6",{className:"text-end",children:n})})}))})),e.setGroup(e.name),e.resetSubs()},t=Object.keys(v);return(0,s.jsx)("button",{className:"list-group-item list-group-item-action ".concat(e.active==e.name&&"active"),type:"button",id:"".concat(e.name,"menu"),onClick:function(){return n()},children:(0,s.jsx)("h6",{children:"Proof"})})}function S(e){var n=function(){a(null)},t=e.group,r=e.setGroup,o=e.setSubMenu,a=e.setSubSubMenu,l=e.setSubGroup,u=e.setTypeClass,x=e.ssz,b=e.pmt,v={typeFuncionList:{name:"Type Functions",list:c.Cp},isTypeFunctions:{list:c.Y8,name:"IsType Functions"},getFunctions:{list:c.$C,name:"Get Functions"},otherFunctions:{list:c.Xw,name:"Other Functions"},objects:{list:c.P1,name:"Proxy"}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"d-flex flex-row",children:(0,s.jsx)("div",{className:"d-flex flex-column",children:(0,s.jsx)("div",{className:"d-flex flex-row overflow-auto border",children:(0,s.jsxs)("div",{className:"list-group ",children:[(0,s.jsx)("h6",{className:"text-center list-group-item",children:"SSZ in TypeScript (@chainsafe/ssz)"}),(0,s.jsx)(i.Z,{classObj:d.Z,ssz:x,setTypeClass:u,handleChange:e.handleChange,setSubMenu:o,setGroup:r,active:t,name:"Type Classes",setSubGroup:l,setSubSubMenu:a,head:"Type"}),(0,s.jsx)(i.Z,{classObj:p,ssz:x,handleChange:e.handleChange,setSubMenu:o,setGroup:r,active:t,name:"Value Classes",head:"TreeValue",setSubGroup:l,setSubSubMenu:a}),Object.keys(v).map((function(i){return(0,s.jsx)(f,{handleChange:e.handleChange,ssz:x,lst:v[i].list,name:v[i].name,setGroup:r,setSubMenu:o,active:t,resetSubs:n})})),(0,s.jsx)("h6",{className:"text-center list-group-item",children:"Persistent Merkle Tree (@chainsafe/persistent-merkle-tree)"}),(0,s.jsx)(g,{handleChange:e.handleChange,pmt:b,lst:Object.keys(b),setSubMenu:o,setGroup:r,active:t,resetSubs:n}),(0,s.jsx)(y,{name:"Proof",handleChange:e.handleChange,setSubMenu:o,setGroup:r,active:t,resetSubs:n}),(0,s.jsx)("h6",{children:"lodestar"}),(0,s.jsx)(m,{handleChange:e.handleChange,lodes:h,setSubMenu:o,setSubSubMenu:a,setGroup:r,name:"LodeStar Type Classes",active:t})]})})})})})}var N=t(56050),j=t(54237);function T(){var e=(0,r.useState)("Type"),n=e[0],t=e[1],i=(0,r.useState)(a),l=i[0],u=i[1],f=(0,r.useState)(),c=f[0],d=(f[1],(0,r.useState)(null)),p=d[0],h=d[1],m=(0,r.useState)(null),x=(m[0],m[1]),b=(0,r.useState)("Type Classes"),g=b[0],v=b[1],y=(0,r.useState)(),T=y[0],w=y[1],O=(0,r.useState)(null),C=O[0],P=O[1],G=(0,r.useState)(!1),A=G[0],I=G[1],M=(0,r.useState)(""),L=M[0],k=M[1],U=j.z.altair,z=((0,j.O)(U),a.getTreeValueClass,{limit:84,elementType:new a.NumberUintType({byteLength:2})}),F=new Uint8Array(32),V=new Uint8Array(32),_=new N.LeafNode(F),B=new N.LeafNode(V),E=new N.BranchNode(_,B),Z=new N.Tree(E);new a.BasicListTreeValue(new a.BasicListType(z),Z);return(0,s.jsxs)("div",{className:"container p-0",children:[(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("h1",{className:"text-center p-0",children:"SSZ in TypeScript by Chainsafe"})}),(0,s.jsxs)("div",{className:"row justify-content-start position-relative",children:[(0,s.jsx)("div",{className:"col-2 my-4 position-absolute start-0",style:{paddingBottom:"0%"},children:(0,s.jsx)(S,{ssz:a,pmt:N,handleChange:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;I(!!s),k(s?r:""),t(e),u(n)},typeClass:C,group:g,setGroup:v,setSubMenu:w,setSubGroup:x,setSubSubMenu:h,setTypeClass:P})}),(0,s.jsx)("div",{className:"col-4 my-4 position-absolute end-50",children:(0,s.jsxs)("div",{className:"d-flex flex-column",children:[(0,s.jsx)("div",{className:"d-flex flex-row overflow-auto",children:"Type Classes"==g&&C}),(0,s.jsx)("div",{className:"list-group",children:p?(0,s.jsxs)("div",{className:"d-flex flex-row overflow-auto",children:[(0,s.jsx)("div",{className:"d-flex flex-column",children:T}),(0,s.jsx)("div",{className:"d-flex flex-column",children:p&&p})]}):(0,s.jsx)("div",{className:"d-flex flex-row",children:T})})]})}),(0,s.jsxs)("div",{className:"col-6 my-4 ms-4 position-absolute end-0 overflow-auto",children:[A?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{proof:!0,proofText:L,mod:l,func:n,lodesReturns:c})}):(0,s.jsx)(o.Z,{proof:!1,proofText:L,mod:l,func:n,lodesReturns:c})," "]})]})]})}function w(e){return(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(T,{})})}}},function(e){e.O(0,[7507,9282,6050,9171,7717,5311,9774,2888,179],(function(){return n=45808,e(e.s=n);var n}));var n=e.O();_N_E=n}]);