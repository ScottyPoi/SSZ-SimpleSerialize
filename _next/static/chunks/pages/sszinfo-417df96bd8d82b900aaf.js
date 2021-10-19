(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8217],{8295:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r={};n.r(r),n.d(r,{AttestationData:function(){return w},AttestationSubnets:function(){return Z},BeaconBlockHeader:function(){return U},Checkpoint:function(){return E},DepositData:function(){return F},DepositEvent:function(){return A},DepositMessage:function(){return P},ENRForkID:function(){return N},Eth1Block:function(){return H},Eth1Data:function(){return _},Eth1DataOrdered:function(){return z},Fork:function(){return V},ForkData:function(){return R},HistoricalBatch:function(){return I},IndexedAttestation:function(){return L},PendingAttestation:function(){return D},SignedBeaconBlockHeader:function(){return M},SigningData:function(){return X},Validator:function(){return T}});var o=n(85893),i=n(25874),s=(n(47180),n(67435),n(2323));function c(e){var t=e,n=t.includes("previous")?t.substring(8):t.includes("current")?t.substring(7):t.includes("next")?t.substring(4):t,r=n.includes("Checkpoint")?"Checkpoint":n.includes("Epoch")?"Epoch":n.includes("Committee")?"Committee":n.includes("Roots")?"Vector":n.includes("Version")?"Version":n.includes("finalityHeader")?"BeaconBlockHeader":n.includes("Root")?"Root":n.includes("Slot")?"Slot":n.includes("Credentials")?"Bytes32":n.includes("Time")?"Uint64":n.includes("Count")?"Count":"randaoMixes"==n?"Vector":n;return"string"==typeof r&&r.substr(0,1).toUpperCase()+r.substring(1).replace(/\d/g,"")}var a=n(75493);function u(e){return(0,i.isBasicType)(e)?"Basic":(0,i.isCompositeType)(e)?"Composite":"Other"}function l(e){return e.hasVariableSerializedLength()?"".concat(e.getMinSerializedLength()," - ").concat(e.getMaxSerializedLength()):"".concat(e.getMaxSerializedLength())}function d(e){return e.hasVariableSerializedLength()?"Variable":"Fixed"}function p(e){return(0,i.isUintType)(e)?"Uint[".concat(8*e.getMaxSerializedLength(),"]"):(0,i.isVectorType)(e)?"Vector":(0,i.isListType)(e)?"List":(0,i.isRootType)(e)?"Root":(0,i.isContainerType)(e)?"Container":(0,i.isBooleanType)(e)?"Boolean":null}function h(e,t){return!(0,i.isUintType)(e)&&f(e)?(0,o.jsx)("td",{children:f(e,e[t])}):(0,i.isContainerType)(e)?(0,o.jsxs)("td",{children:[v(e),"jpjp"]}):void 0}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.isBitListType)(e)?"BitList[".concat(t,"]"):(0,i.isBitVectorType)(e)?"BitVector[".concat(8*e.getMaxSerializedLength(),"]"):(0,i.isByteVectorType)(e)?"ByteVector[".concat(e.getMaxSerializedLength(),"]"):null}function y(e,t){return!!e.includes(t)}var b={target:{name:"Checkpoint"},attestation1:{name:"IndexedAttestation"},attestation2:{name:"IndexedAttestation"},source:{name:"Checkpoint"},attestingIndices:{name:"ValidatorIndex"},beaconBlockRoot:{name:"Root"},depositCount:{name:"Uint64"},count:{name:"Uint64"},selectionProof:{name:"BLSSignature"}},m=Object.keys(b),x=s.z.altair,j=(0,s.O)(x);function g(e){var t=e.elementType;if(t){var n=t.byteLength;if(n)return 1==n?"Bytes".concat(e.length):8==n?"PooInt[64]":null}return e.elementType.byteLength&&e.elementType.byteLength}function k(e){return Object.keys(e).filter((function(e){return"_typeSymbols"!==e&&"_chunkDepth"!==e&&"_defaultNode"!==e&&"_maxBigInt"!==e&&"_expandedType"!==e&&"length"!==e&&"byteLength"!==e})).map((function(t){return j.includes(c(t))?v(c(t)):m.includes(t)?(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"".concat(t,": ")}),(0,o.jsxs)("td",{children:["<898",b[t].name,">"]}),(0,o.jsx)("td",{children:v(b[t].name)})]}):(0,o.jsxs)("tr",{children:["elementType"==t?(0,o.jsx)("td",{children:g(e)&&"".concat(g(e)," => ").concat(f(x[g(e)]))}):"fields"!=t&&(0,o.jsx)("th",{children:"".concat(t,":")}),b[t]&&(0,o.jsxs)("th",{scope:"row",children:[b[t],"heheh"]}),(0,o.jsx)("td",{children:y(j,t)&&(0,i.isContainerType)(x[t])?sub.includes("attestation")&&"<IndexedAttestation>":y(j,t)&&"U"==p(x[t]).substr(0,1)&&p(x[t])}),"object"==typeof e[t]?(0,o.jsx)("td",{children:k(e[t])}):(0,o.jsx)("td",{children:"number"==typeof e[t]?"".concat(e[t]):null})]})}))}function B(e){return Object.keys(x[e]).map((function(t){var n=x[e][t],r=x[e];return"object"==typeof n?k(n):"number"==typeof n?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.jsxs)(o.Fragment,{children:[(0,i.isUintType)(e)&&(0,o.jsx)("td",{children:p(e)}),t&&j.includes(c(t))&&(0,o.jsx)("td",{children:h(c(t))})]})}(r,t):null}))}function v(e){return"null"!=typeof x[e]&&"undefined"!=typeof x[e]&&"object"==typeof x[e].fields?Object.keys(x[e].fields).map((function(e){c(e);return function(e,t,n){var r=m.includes(t)?b[t].name:null,s=r?c(r):null,a=j.includes(c(t))?c(t):null;return(0,o.jsxs)("tr",{children:[(0,o.jsxs)("th",{scope:"row",className:"align-items-start",children:[t,":",""]}),m.includes(t)?(0,o.jsx)("td",{children:"<".concat(r,"> = ")}):j.includes(c(t))&&(0,o.jsx)("td",{children:"<".concat(c(t),"> =")}),j.includes(c(t))&&(0,o.jsx)("td",{children:v(c(t))}),m.includes(t)?(0,o.jsx)("td",{children:v(b[t].name)}):"nul",b[t]&&y(j,s)&&(0,i.isContainerType)(x[s])?(0,o.jsx)("td",{children:k(x[s])}):null,(0,o.jsx)("td",{children:s&&v(a)})]})}(0,e)})):"object"==typeof x[e]&&B(e)}function O(){return(0,o.jsx)("tbody",{children:j.map((function(e){return(0,o.jsxs)("tr",{id:e,children:[(0,o.jsx)("th",{scope:"row",id:"TypeName: ".concat(e),className:"align-items-start",children:e}),(t=x[e],(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("td",{children:u(t)}),(0,o.jsx)("td",{children:p(t)}),(0,o.jsx)("td",{children:f(t)}),(0,o.jsx)("td",{children:d(t)}),(0,o.jsx)("td",{children:l(t)})]})),"null"!=typeof x[e]&&"undefined"!=typeof x[e]&&(0,i.isContainerType)(x[e])&&(0,o.jsx)("td",{children:v(e)})]},e);var t}))})}function C(e){e.names,e.types;return(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:[0,1,2,3,4,5,6,7,8,9].map((function(e,t){return(0,o.jsx)("th",{scope:"col",children:"#"},t)}))})})}function S(){return(0,o.jsxs)(o.Fragment,{children:[typeof a.Fork,(0,o.jsxs)("table",{className:"table",children:[(0,o.jsx)(C,{names:j,types:x}),(0,o.jsx)(O,{names:j,types:x})]})]})}var V={previousVersion:"Version",currentVersion:"Version",epoch:"Epoch"},R={currentVersion:"Version",genesisValidatorsRoot:"Root"},N={forkDigest:"ForkDigest",nextForkVersion:"Version",nextForkEpoch:"Epoch"},E={epoch:"Epoch",root:"Root"},T={pubkey:"BLSPubkey",withdrawalCredentials:"Bytes32",effectiveBalance:"Number64",slashed:"boolean",activationEligibilityEpoch:"Epoch",activationEpoch:"Epoch",exitEpoch:"Epoch",withdrawableEpoch:"Epoch"},w={slot:"Slot",index:"CommitteeIndex",beaconBlockRoot:"Root",source:"Checkpoint",target:"Checkpoint"},L={attestingIndices:"List<ValidatorIndex>",data:"AttestationData",signature:"BLSSignature"},D={aggregationBits:"BitList",data:"AttestationData",inclusionDelay:"Slot",proposerIndex:"ValidatorIndex"},_={depositRoot:"Root",depositCount:"Number64",blockHash:"Bytes32"},z={blockNumber:"Number64",depositRoot:"Root",depositCount:"Number64",blockHash:"Bytes32"},I={blockRoots:"Vector<Root>",stateRoots:"Vector<Root>"},P={pubkey:"BLSPubkey",withdrawalCredentials:"Bytes32",amount:"Number64"},F={pubkey:"BLSPubkey",withdrawalCredentials:"Bytes32",amount:"Number64",signature:"BLSSignature"},A={depositData:"DepositData",blockNumber:"Number64",index:"Number64"},H={blockHash:"Bytes32",blockNumber:"Number64",timestamp:"Number64"},U={slot:"Slot",proposerIndex:"ValidatorIndex",parentRoot:"Root",stateRoot:"Root",bodyRoot:"Root"},M={message:"BeaconBlockHeader",signature:"BLSSignature"},X={objectRoot:"Root",domain:"Domain"},Z="BitVector";function q(){return(0,o.jsxs)("div",{className:"container",children:[Object.keys(r).sort(),Object.keys(V)]})}function G(e){var t=s.z.altair;(0,s.O)(t);return(0,o.jsxs)("div",{className:"container p-0",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(q,{})}),(0,o.jsx)("div",{className:"row",children:S()})]})}},2323:function(e,t,n){"use strict";n.d(t,{z:function(){return d},O:function(){return p}});var r=n(26265),o=n(38347),i=n(99171);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=i.ssz.phase0,u=i.ssz.altair,l=(i.ssz.allForks,(0,o.Z)(i.ssz,["phase0","altair","allForks"])),d={prim:c({},l),phase0:c(c({},a),l),altair:c(c(c({},a),u),l)};function p(e){return Object.keys(e).sort()}},17634:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sszinfo",function(){return n(8295)}])},67435:function(e,t){}},function(e){e.O(0,[7507,9282,6050,9171,6259,9774,2888,179],(function(){return t=17634,e(e.s=t);var t}));var t=e.O();_N_E=t}]);