(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3570],{59307:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var s=r(85893),n=r(67294);function i(){return(0,s.jsx)("a",{href:"https://github.com/chainsafe/simpleserialize.com",style:{position:"absolute",right:0,top:0},children:(0,s.jsx)("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",className:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})})}function a(){return(0,s.jsx)("div",{className:"section",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("h1",{className:"title is-family-code",children:["Simple Serialize",(0,s.jsx)("span",{className:"is-size-6",children:(0,s.jsx)("img",{src:"https://img.shields.io/badge/ETH2_Spec_Version-0.11.2-2e86c1.svg"})})]}),(0,s.jsxs)("p",{children:["Simple Serialize (SSZ) is a serialization and merkleization standard created specifically for Eth2. Find the specification"," ",(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ethereum/eth2.0-specs/blob/v0.11.2/ssz/simple-serialize.md",children:"here."})]})]})})}var o=r(74047),c=r(52700),l=r(33814),u=r(44102),h=r(20775),p=r(809),d=r.n(p),f=r(92447),m=r(97529),y=function(e){var t=e.error,r=e.hideError;return(0,s.jsxs)("div",{className:"notification",children:[(0,s.jsx)("a",{className:"delete",onClick:r}),t]})},v=r(93162),x=r(89856);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,h.Z)(e);if(t){var n=(0,h.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,u.Z)(this,r)}}var z=function(e){(0,l.Z)(r,e);var t=j(r);function r(e){var s;return(0,o.Z)(this,r),(s=t.call(this,e)).state={showError:!1,outputType:"hex"},s}return(0,c.Z)(r,[{key:"componentDidUpdate",value:function(e){e.serializeModeOn!==this.props.serializeModeOn&&(this.props.serializeModeOn?this.setOutputType("hex"):this.setOutputType("yaml"))}},{key:"hideError",value:function(){this.setState({showError:!1})}},{key:"setOutputType",value:function(e){this.setState({outputType:e})}},{key:"downloadFile",value:function(e,t){var r=new Blob([e]);(0,v.saveAs)(r,this.props.sszTypeName+"."+t)}},{key:"render",value:function(){var e,t,r=this,n=this.props,i=n.error,a=n.serialized,o=n.deserialized,c=n.hashTreeRoot,l=n.serializeModeOn,u=n.sszType,h=this.state,p=h.showError,d=h.outputType,f="";if(l){var v=x.H[d];e=a&&v?v.dump(a):"",t=c&&v?v.dump(c):""}else{var j=x.b[d];f=void 0!==o&&j?j.dump(o,u):""}return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h3",{className:"row justify-content-center border-bottom",children:"Output"}),p?(0,s.jsx)(y,{error:i,hideError:this.hideError.bind(this)}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"row py-3",children:(0,s.jsxs)("div",{className:"form",children:[(0,s.jsx)("label",{for:"output type",children:"Output Type"}),(0,s.jsx)("select",{className:"form-select",id:"output type","aria-label":"select output type",value:d,onChange:function(e){return r.setOutputType(e.target.value)},children:Object.keys(l?x.H:x.b).map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)}))})]})}),(0,s.jsx)("div",{className:"row",children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.Z,{name:"HashTreeRoot",value:t,textarea:!1}),(0,s.jsx)(m.Z,{name:"Serialized",value:e,textarea:!0}),(0,s.jsx)("button",{disabled:!this.props.serialized,onClick:function(){return r.downloadFile(r.props.serialized,"ssz")},children:"Download data as .ssz file"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("textarea",{className:"form-control",rows:8,value:f,readOnly:!0}),(0,s.jsx)("button",{disabled:!f,onClick:function(){return r.downloadFile(f,r.state.outputType)},children:"Download data as ."+this.state.outputType+" file"})]})}),(0,s.jsx)("div",{className:"row"})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e){return{showError:!!e.error}}}]),r}(n.Component),b=r(25874),g=r(10124),N=r(2323),k=r(69654);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,h.Z)(e);if(t){var n=(0,h.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,u.Z)(this,r)}}function O(e){var t=(0,N.O)(e);return t[Math.floor(Math.random()*t.length)]}var w="phase0",S=function(e){(0,l.Z)(r,e);var t=T(r);function r(e){var s;(0,o.Z)(this,r),s=t.call(this,e);var n=O(N.z.phase0);return s.state={forkName:w,input:"",sszTypeName:n,serializeInputType:"yaml",deserializeInputType:"hex",value:""},s}return(0,c.Z)(r,[{key:"componentDidMount",value:function(){var e=(0,f.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resetWith(this.getInputType(),this.state.sszTypeName);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setValueAndInput",value:function(e,t){this.setState({value:e,input:t})}},{key:"componentDidUpdate",value:function(e){e.serializeModeOn!==this.props.serializeModeOn&&(this.props.serializeModeOn?(this.setInputType(this.state.serializeInputType),this.props.deserialized&&(this.setState({value:this.props.deserialized}),this.setInput(g.J[this.state.serializeInputType].dump(this.props.deserialized,this.props.sszType)))):(this.setInputType("hex"),this.props.serialized&&this.setInput((0,b.toHexString)(this.props.serialized))))}},{key:"handleError",value:function(e){this.showError(e.message),this.props.setOverlay(!1)}},{key:"showError",value:function(e){this.props.alert.error(e)}},{key:"getRows",value:function(){return Math.min(16,Math.max(4,Math.floor(1.5*(this.state.input.match(/\n/g)||[]).length)))}},{key:"names",value:function(){return(0,N.O)(this.types())}},{key:"basicNames",value:function(){return["Boolean","Bytes32","Uint8","Uint16","Uint32","Uint64","Uint128","Uint256"]}},{key:"types",value:function(){return N.z[this.state.forkName]}},{key:"getInputType",value:function(){var e=this.props.serializeModeOn,t=this.state,r=t.serializeInputType,s=t.deserializeInputType;return e?r:s}},{key:"parsedInput",value:function(){var e=this.getInputType();return g.J[e].parse(this.state.input,this.types()[this.state.sszTypeName])}},{key:"resetWith",value:function(){var e=(0,f.Z)(d().mark((function e(t,r){var s,n,i,a,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.types(),(n=s[r])||(r=O(s),n=s[r]),i=this.state.forkName,this.props.setOverlay(!0,"Generating random ".concat(r," value...")),e.next=7,(0,k.Z)(r,i);case 7:a=e.sent,o=g.J[t].dump(a,n),this.props.serializeModeOn?this.setState({serializeInputType:t}):this.setState({deserializeInputType:t}),this.setState({sszTypeName:r,input:o,value:a}),this.props.setOverlay(!1);case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"setFork",value:function(e){var t=this;this.setState({forkName:e.target.value},(0,f.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.resetWith(t.getInputType(),t.state.sszTypeName);case 2:case"end":return e.stop()}}),e)}))))}},{key:"setInputType",value:function(e){var t=this.state,r=t.sszTypeName,s=t.value,n=this.types()[r],i=g.J[e].dump(s,n);this.props.serializeModeOn?this.setState({serializeInputType:e,sszTypeName:r,input:i}):this.setState({deserializeInputType:e,sszTypeName:r,input:i})}},{key:"setSSZType",value:function(){var e=(0,f.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resetWith(this.getInputType(),t.target.value);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setInput",value:function(e){this.setState({input:e})}},{key:"doProcess",value:function(){var e=this.state,t=e.sszTypeName,r=e.forkName;try{this.props.onProcess(r,t,this.parsedInput(),this.types()[t],this.getInputType())}catch(s){this.handleError(s)}}},{key:"processFileContents",value:function(e){try{this.props.serializeModeOn?this.setInput(e):this.setInput((0,b.toHexString)(new Uint8Array(e)))}catch(t){this.handleError(t)}}},{key:"onUploadFile",value:function(e){if(e){var t=new FileReader,r=this.processFileContents.bind(this),s=this.handleError.bind(this);this.props.serializeModeOn?t.readAsText(e):t.readAsArrayBuffer(e),t.onload=function(e){e.target&&r(e.target.result)},t.onerror=function(e){e instanceof Error&&s(e)}}}},{key:"render",value:function(){var e=this,t=this.props.serializeModeOn,r=this.state.serializeInputType;return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"row p-3",children:[(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)("h3",{className:"subtitle",children:"Input"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"field is-horizontal",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{children:"Upload a file (optional)"}),(0,s.jsx)("input",{type:"file",accept:".".concat(t?r:"ssz"),onChange:function(t){return t.target.files&&e.onUploadFile(t.target.files[0])}})]}),(0,s.jsx)("div",{className:"field-body",children:(0,s.jsx)("div",{className:"field has-addons",children:(0,s.jsxs)("div",{className:"form",children:[(0,s.jsx)("label",{htmlFor:"fork",children:"Fork"}),(0,s.jsx)("select",{className:"form-select",id:"fork","aria-label":"fork type",value:this.state.forkName,onChange:this.setFork.bind(this),children:Object.keys(N.z).map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)}))})]})})})]})]}),(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)("div",{className:"row p-3",children:(0,s.jsx)("button",{type:"button",className:"btn btn-secondary",disabled:!(this.state.sszTypeName&&this.state.input),onClick:this.doProcess.bind(this),children:t?"Serialize":"Deserialize"})}),(0,s.jsxs)("div",{className:"row",children:[t&&(0,s.jsx)("div",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"input",children:"Input"}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:Object.keys(g.J).map((function(t,n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"radio",className:"btn-check",name:t,id:"inputtype".concat(t),autoComplete:"off",value:t,onClick:function(){return e.setInputType(t)},checked:r==t,readOnly:!0},n),(0,s.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"inputtype".concat(t),children:t})]})}))})]})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"form",children:[(0,s.jsx)("label",{htmlFor:"ssztypeselect",children:"Select SSZ Type"}),(0,s.jsx)("select",{className:"form-select",id:"ssztypeselect","aria-label":"ssz type",value:this.state.sszTypeName,onChange:this.setSSZType.bind(this),children:this.names().map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)}))})]})})})]})]})]}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("textarea",{className:"form-control",id:"input",rows:this.state.input&&this.getRows(),value:this.state.input,onChange:function(t){return e.setInput(t.target.value)}})})]})}}]),r}(n.Component),Z=r(72125),M=r(39121),I=r.n(M),R=r(99118);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,h.Z)(e);if(t){var n=(0,h.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,u.Z)(this,r)}}var E=function(e){(0,l.Z)(r,e);var t=C(r);function r(e){var s;return(0,o.Z)(this,r),(s=t.call(this,e)).state={forkName:void 0,name:"",input:void 0,deserialized:void 0,sszType:void 0,error:void 0,serialized:void 0,hashTreeRoot:void 0,showOverlay:!1,overlayText:""},s}return(0,c.Z)(r,[{key:"setOverlay",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setState({showOverlay:e,overlayText:t})}},{key:"process",value:function(){var e=(0,f.Z)(d().mark((function e(t,r,s,n){var i,a,o,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setOverlay(!0,this.props.serializeModeOn?"Serializing...":"Deserializing..."),i=(0,R.Z)(n,s),a=i.serialized,o=i.root,this.setState({hashTreeRoot:o,serialized:a}),this.setOverlay(!1),c=s,this.setState({forkName:t,name:r,input:s,sszType:n,error:undefined,deserialized:c});case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,s,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sszType,r=e.error,n=e.serialized,i=e.hashTreeRoot,a=e.deserialized,o=this.props.serializeModeOn,c=(0,s.jsx)(I(),{css:"margin: auto;"});return(0,s.jsxs)("div",{className:"section serialize-section is-family-code",children:[(0,s.jsx)(Z.Z,{active:this.state.showOverlay,spinner:c,text:this.state.overlayText}),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(S,{serializeModeOn:o,onProcess:this.process.bind(this),sszType:t,serialized:n,deserialized:a,setOverlay:this.setOverlay.bind(this)})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(z,{deserialized:a,serializeModeOn:o,serialized:n,hashTreeRoot:i,error:r,sszType:t,sszTypeName:this.state.name})})]})})]})}}]),r}(n.Component);function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,h.Z)(e);if(t){var n=(0,h.Z)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,u.Z)(this,r)}}var D=function(e){(0,l.Z)(r,e);var t=F(r);function r(e){var s;return(0,o.Z)(this,r),(s=t.call(this,e)).state={serializeModeOn:!0},s}return(0,c.Z)(r,[{key:"showSerialize",value:function(){this.setState({serializeModeOn:!0})}},{key:"showDeserialize",value:function(){this.setState({serializeModeOn:!1})}},{key:"render",value:function(){var e=this,t=this.state.serializeModeOn;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[(0,s.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnserialize",autoComplete:"off",onClick:function(){return e.showSerialize()},defaultChecked:t}),(0,s.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"btnserialize",children:"Serialize"}),(0,s.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btndeserialize",onClick:function(){return e.showDeserialize()},autoComplete:"off",defaultChecked:!t}),(0,s.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"btndeserialize",children:"Deserialize"})]})}),(0,s.jsx)("br",{}),(0,s.jsx)(E,{serializeModeOn:t})]})})}}]),r}(n.Component),P=JSON.parse('{"HO":{"JV":"^0.26.0","lR":"^0.8.11"}}');function J(){return(0,s.jsxs)("footer",{className:"text-center footer pt-5",children:[(0,s.jsxs)("div",{className:"content has-text-centered",children:["Borrow with \u2764\ufe0f from"," ",(0,s.jsx)("a",{className:"is-link has-text-danger is-family-code",href:"https://chainsafe.io",children:"ChainSafe Systems"}),(0,s.jsx)("br",{}),"and"," ",(0,s.jsx)("a",{className:"is-link has-text-danger is-family-code",href:"https://github.com/ChainSafe/simpleserialize.com/graphs/contributors",children:"ETH 2.0 friends"})]}),(0,s.jsxs)("div",{className:"content has-text-centered is-small is-family-code",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("a",{className:"is-link has-text-grey",href:"https://www.npmjs.com/package/@chainsafe/ssz",children:["@chainsafe/ssz ",P.HO.lR]})}),(0,s.jsx)("div",{children:(0,s.jsxs)("a",{className:"is-link has-text-grey",href:"https://www.npmjs.com/package/@chainsafe/lodestar-types",children:["@chainsafe/lodestar-types ",P.HO.JV]})})]})]})}function _(e){return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(i,{}),(0,s.jsx)(a,{}),(0,s.jsx)(D,{}),(0,s.jsx)(J,{})]})}},69654:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var s=r(809),n=r.n(s),i=r(92447),a=r(64121),o=r(25874),c=r(2323);function l(e){return Math.random()*e|0}function u(){return Math.random()>.5}function h(e){return Array.from({length:e},(function(){return u()}))}function p(e){if((0,o.isNumberUintType)(e))return l(e.byteLength);if((0,o.isBigIntUintType)(e))return function(e){return BigInt(l(e))}(e.byteLength);if((0,o.isBooleanType)(e))return u();if((0,o.isBitVectorType)(e))return h(e.length);if((0,o.isByteVectorType)(e))return function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}(e.length);if((0,o.isBitListType)(e))return h(Math.min(Math.floor(16*Math.random()),e.limit));if((0,o.isListType)(e)){var t=Math.min(Math.floor(16*Math.random()),e.limit);return Array.from({length:t},(function(){return p(e.elementType)}))}if((0,o.isVectorType)(e))return Array.from({length:e.length},(function(){return p(e.elementType)}));if((0,o.isContainerType)(e)){var r={};return Object.entries(e.fields).forEach((function(e){var t=(0,a.Z)(e,2),s=t[0],n=t[1];r[s]=p(n)})),r}}function d(e,t){return c.z[t][e]}function f(e,t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(n().mark((function e(t,r){var s,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=d(t,r),i=p(s),e.abrupt("return",i);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},99118:function(e,t,r){"use strict";function s(e,t){var r=e;return{serialized:r.serialize(t),root:r.hashTreeRoot(t)}}r.d(t,{Z:function(){return s}})},97529:function(e,t,r){"use strict";var s=r(85893);r(67294);t.Z=function(e){var t=e.name,r=e.value,n=e.textarea;return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"control",children:(0,s.jsx)("a",{className:"button is-static",children:t})}),(0,s.jsx)("div",{className:"form-floating",children:n?(0,s.jsx)("textarea",{className:"form-control",readOnly:!0,value:r||""}):(0,s.jsx)("input",{className:"form-control",type:"text",readOnly:!0,value:r||""})})]})}},10124:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var s=r(25874),n=r(26622),i={yaml:{parse:function(e,t){return t.fromJson((0,n.x)(e))},dump:function(e,t){return(0,n.E)(t.toJson("number"===typeof e?e.toString():e))}},json:{parse:function(e,t){return t.fromJson(JSON.parse(e))},dump:function(e,t){return JSON.stringify(t.toJson(e),null,2)}},hex:{parse:function(e,t){return t.deserialize((0,s.fromHexString)(e))},dump:function(e,t){return(0,s.toHexString)(t.serialize(e))}}}},89856:function(e,t,r){"use strict";r.d(t,{H:function(){return i},b:function(){return a}});var s=r(25874),n=r(26622);var i={hex:{dump:function(e){return(0,s.toHexString)(e)}},base64:{dump:function(e){return function(e){var t=Array.prototype.map.call(e,(function(e){return String.fromCharCode(e)})).join("");return btoa(t)}(e)}}},a={yaml:{dump:function(e,t){return(0,n.E)(t.toJson("number"===typeof e?e.toString():e))}},json:{dump:function(e,t){return JSON.stringify(t.toJson(e),null,2)}}}},2323:function(e,t,r){"use strict";r.d(t,{z:function(){return h},O:function(){return p}});var s=r(26265),n=r(38347),i=r(99171);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=i.ssz.phase0,l=i.ssz.altair,u=(i.ssz.allForks,(0,n.Z)(i.ssz,["phase0","altair","allForks"])),h={prim:o({},u),phase0:o(o({},c),u),altair:o(o(o({},c),l),u)};function p(e){return Object.keys(e).sort()}},26622:function(e,t,r){"use strict";r.d(t,{E:function(){return n},x:function(){return i}});var s=r(47180);function n(e){return s.ZP.dump(e)}function i(e){return s.ZP.load(e)}},77113:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chainsafe",function(){return r(59307)}])}},function(e){e.O(0,[9774,9282,7507,9238,8075,2125,2888,179],(function(){return t=77113,e(e.s=t);var t}));var t=e.O();_N_E=t}]);