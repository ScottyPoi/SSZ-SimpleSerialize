(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3570],{77113:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chainsafe",function(){return r(62229)}])},62229:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var n=r(85893),s=r(75826),i=r(76641),o=r(67294),a=r(34051),c=r.n(a),l=r(45800),u=function(e){var t=e.error,r=e.hideError;return(0,n.jsxs)("div",{className:"notification",children:[(0,n.jsx)("a",{className:"delete",onClick:r}),t]})},p=r(93162),f=r(31044);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var s=h(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return d(this,r)}}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,e);var t=v(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=t.call(this,e)).state={showError:!1,outputType:"hex"},n}var s=r.prototype;return s.componentDidUpdate=function(e){e.serializeModeOn!==this.props.serializeModeOn&&(this.props.serializeModeOn?this.setOutputType("hex"):this.setOutputType("yaml"))},s.hideError=function(){this.setState({showError:!1})},s.setOutputType=function(e){this.setState({outputType:e})},s.downloadFile=function(e,t){var r=new Blob([e]);(0,p.saveAs)(r,this.props.sszTypeName+"."+t)},s.render=function(){var e,t,r=this,s=this.props,i=s.error,o=s.serialized,a=s.deserialized,c=s.hashTreeRoot,p=s.serializeModeOn,h=s.sszType,d=this.state,y=d.showError,m=d.outputType,v="";if(p){var x=f.H[m];e=o&&x?x.dump(o):"",t=c&&x?x.dump(c):""}else{var b=f.b[m];v=void 0!==a&&b?b.dump(a,h):""}return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h3",{className:"row justify-content-center border-bottom",children:"Output"}),y?(0,n.jsx)(u,{error:i,hideError:this.hideError.bind(this)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"row py-3",children:(0,n.jsxs)("div",{className:"form",children:[(0,n.jsx)("label",{for:"output type",children:"Output Type"}),(0,n.jsx)("select",{className:"form-select",id:"output type","aria-label":"select output type",value:m,onChange:function(e){return r.setOutputType(e.target.value)},children:Object.keys(p?f.H:f.b).map((function(e){return(0,n.jsx)("option",{value:e,children:e},e)}))})]})}),(0,n.jsx)("div",{className:"row",children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{name:"HashTreeRoot",value:t,textarea:!1}),(0,n.jsx)(l.Z,{name:"Serialized",value:e,textarea:!0}),(0,n.jsx)("button",{disabled:!this.props.serialized,onClick:function(){return r.downloadFile(r.props.serialized,"ssz")},children:"Download data as .ssz file"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("textarea",{className:"form-control",rows:8,value:v,readOnly:!0}),(0,n.jsx)("button",{disabled:!v,onClick:function(){return r.downloadFile(v,r.state.outputType)},children:"Download data as ."+this.state.outputType+" file"})]})}),(0,n.jsx)("div",{className:"row"})]})]})},r.getDerivedStateFromProps=function(e){return{showError:!!e.error}},r}(o.Component),b=r(25874),j=r(54618),z=r(54237),w=r(4522);function O(e,t,r,n,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,s)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function o(e){O(i,n,s,o,a,"next",e)}function a(e){O(i,n,s,o,a,"throw",e)}o(void 0)}))}}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function T(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=N(e);if(t){var s=N(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return T(this,r)}}function E(e){var t=(0,z.O)(e);return t[Math.floor(Math.random()*t.length)]}var R="phase0",I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(r,e);var t=k(r);function r(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=t.call(this,e);var s=E(z.z.phase0);return n.state={forkName:R,input:"",sszTypeName:s,serializeInputType:"yaml",deserializeInputType:"hex",value:""},n}var s=r.prototype;return s.componentDidMount=function(){var e=this;return g(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.resetWith(e.getInputType(),e.state.sszTypeName);case 2:case"end":return t.stop()}}),t)})))()},s.setValueAndInput=function(e,t){this.setState({value:e,input:t})},s.componentDidUpdate=function(e){e.serializeModeOn!==this.props.serializeModeOn&&(this.props.serializeModeOn?(this.setInputType(this.state.serializeInputType),this.props.deserialized&&(this.setState({value:this.props.deserialized}),this.setInput(j.J[this.state.serializeInputType].dump(this.props.deserialized,this.props.sszType)))):(this.setInputType("hex"),this.props.serialized&&this.setInput((0,b.toHexString)(this.props.serialized))))},s.handleError=function(e){this.showError(e.message),this.props.setOverlay(!1)},s.showError=function(e){this.props.alert.error(e)},s.getRows=function(){return Math.min(16,Math.max(4,Math.floor(1.5*(this.state.input.match(/\n/g)||[]).length)))},s.names=function(){return(0,z.O)(this.types())},s.basicNames=function(){return["Boolean","Bytes32","Uint8","Uint16","Uint32","Uint64","Uint128","Uint256"]},s.types=function(){return z.z[this.state.forkName]},s.getInputType=function(){var e=this.props.serializeModeOn,t=this.state,r=t.serializeInputType,n=t.deserializeInputType;return e?r:n},s.parsedInput=function(){var e=this.getInputType();return j.J[e].parse(this.state.input,this.types()[this.state.sszTypeName])},s.resetWith=function(e,t){var r=this;return g(c().mark((function n(){var s,i,o,a,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=r.types(),(i=s[t])||(t=E(s),i=s[t]),o=r.state.forkName,r.props.setOverlay(!0,"Generating random ".concat(t," value...")),n.next=7,(0,w.Z)(t,o);case 7:a=n.sent,l=j.J[e].dump(a,i),r.props.serializeModeOn?r.setState({serializeInputType:e}):r.setState({deserializeInputType:e}),r.setState({sszTypeName:t,input:l,value:a}),r.props.setOverlay(!1);case 12:case"end":return n.stop()}}),n)})))()},s.setFork=function(e){var t=this;this.setState({forkName:e.target.value},g(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.resetWith(t.getInputType(),t.state.sszTypeName);case 2:case"end":return e.stop()}}),e)}))))},s.setInputType=function(e){var t=this.state,r=t.sszTypeName,n=t.value,s=this.types()[r],i=j.J[e].dump(n,s);this.props.serializeModeOn?this.setState({serializeInputType:e,sszTypeName:r,input:i}):this.setState({deserializeInputType:e,sszTypeName:r,input:i})},s.setSSZType=function(e){var t=this;return g(c().mark((function r(){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.resetWith(t.getInputType(),e.target.value);case 2:case"end":return r.stop()}}),r)})))()},s.setInput=function(e){this.setState({input:e})},s.doProcess=function(){var e=this.state,t=e.sszTypeName,r=e.forkName;try{this.props.onProcess(r,t,this.parsedInput(),this.types()[t],this.getInputType())}catch(n){this.handleError(n)}},s.processFileContents=function(e){try{this.props.serializeModeOn?this.setInput(e):this.setInput((0,b.toHexString)(new Uint8Array(e)))}catch(t){this.handleError(t)}},s.onUploadFile=function(e){if(e){var t=new FileReader,r=this.processFileContents.bind(this),n=this.handleError.bind(this);this.props.serializeModeOn?t.readAsText(e):t.readAsArrayBuffer(e),t.onload=function(e){e.target&&r(e.target.result)},t.onerror=function(e){var t,r;t=e,(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](t):t instanceof r)&&n(e)}}},s.render=function(){var e=this,t=this.props.serializeModeOn,r=this.state.serializeInputType;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row p-3",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("h3",{className:"subtitle",children:"Input"}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"field is-horizontal",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{children:"Upload a file (optional)"}),(0,n.jsx)("input",{type:"file",accept:".".concat(t?r:"ssz"),onChange:function(t){return t.target.files&&e.onUploadFile(t.target.files[0])}})]}),(0,n.jsx)("div",{className:"field-body",children:(0,n.jsx)("div",{className:"field has-addons",children:(0,n.jsxs)("div",{className:"form",children:[(0,n.jsx)("label",{htmlFor:"fork",children:"Fork"}),(0,n.jsx)("select",{className:"form-select",id:"fork","aria-label":"fork type",value:this.state.forkName,onChange:this.setFork.bind(this),children:Object.keys(z.z).map((function(e){return(0,n.jsx)("option",{value:e,children:e},e)}))})]})})})]})]}),(0,n.jsxs)("div",{className:"col",children:[(0,n.jsx)("div",{className:"row p-3",children:(0,n.jsx)("button",{type:"button",className:"btn btn-secondary",disabled:!(this.state.sszTypeName&&this.state.input),onClick:this.doProcess.bind(this),children:t?"Serialize":"Deserialize"})}),(0,n.jsxs)("div",{className:"row",children:[t&&(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"input",children:"Input"}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:Object.keys(j.J).map((function(t,s){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{type:"radio",className:"btn-check",name:t,id:"inputtype".concat(t),autoComplete:"off",value:t,onClick:function(){return e.setInputType(t)},checked:r==t,readOnly:!0},s),(0,n.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"inputtype".concat(t),children:t})]})}))})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"form",children:[(0,n.jsx)("label",{htmlFor:"ssztypeselect",children:"Select SSZ Type"}),(0,n.jsx)("select",{className:"form-select",id:"ssztypeselect","aria-label":"ssz type",value:this.state.sszTypeName,onChange:this.setSSZType.bind(this),children:this.names().map((function(e){return(0,n.jsx)("option",{value:e,children:e},e)}))})]})})})]})]})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("textarea",{className:"form-control",id:"input",rows:this.state.input&&this.getRows(),value:this.state.input,onChange:function(t){return e.setInput(t.target.value)}})})]})},r}(o.Component),P=r(61937),C=r(39121),M=r.n(C),F=r(10393);function B(e,t,r,n,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,s)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function U(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}var H=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Z(e);if(t){var s=Z(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return U(this,r)}}var A=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(r,e);var t=J(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=t.call(this,e)).state={forkName:void 0,name:"",input:void 0,deserialized:void 0,sszType:void 0,error:void 0,serialized:void 0,hashTreeRoot:void 0,showOverlay:!1,overlayText:""},n}var s=r.prototype;return s.setOverlay=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setState({showOverlay:e,overlayText:t})},s.process=function(e,t,r,n){var s,i=this;return(s=c().mark((function s(){var o,a,l,u;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i.setOverlay(!0,i.props.serializeModeOn?"Serializing...":"Deserializing..."),o=(0,F.Z)(n,r),a=o.serialized,l=o.root,i.setState({hashTreeRoot:l,serialized:a}),i.setOverlay(!1),u=r,i.setState({forkName:e,name:t,input:r,sszType:n,error:void 0,deserialized:u});case 7:case"end":return s.stop()}}),s)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var i=s.apply(e,t);function o(e){B(i,r,n,o,a,"next",e)}function a(e){B(i,r,n,o,a,"throw",e)}o(void 0)}))})()},s.render=function(){var e=this.state,t=e.sszType,r=e.error,s=e.serialized,i=e.hashTreeRoot,o=e.deserialized,a=this.props.serializeModeOn,c=(0,n.jsx)(M(),{css:"margin: auto;"});return(0,n.jsxs)("div",{className:"section serialize-section is-family-code",children:[(0,n.jsx)(P.Z,{active:this.state.showOverlay,spinner:c,text:this.state.overlayText}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(I,{serializeModeOn:a,onProcess:this.process.bind(this),sszType:t,serialized:s,deserialized:o,setOverlay:this.setOverlay.bind(this)})}),(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(x,{deserialized:o,serializeModeOn:a,serialized:s,hashTreeRoot:i,error:r,sszType:t,sszTypeName:this.state.name})})]})})]})},r}(o.Component);function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function W(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}var X=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=V(e);if(t){var s=V(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return W(this,r)}}var K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(r,e);var t=q(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=t.call(this,e)).state={serializeModeOn:!0},n}var s=r.prototype;return s.showSerialize=function(){this.setState({serializeModeOn:!0})},s.showDeserialize=function(){this.setState({serializeModeOn:!1})},s.render=function(){var e=this,t=this.state.serializeModeOn;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[(0,n.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnserialize",autocomplete:"off",onClick:function(){return e.showSerialize()},defaultChecked:t}),(0,n.jsx)("label",{className:"btn btn-outline-secondary",for:"btnserialize",children:"Serialize"}),(0,n.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btndeserialize",onClick:function(){return e.showDeserialize()},autocomplete:"off",defaultChecked:!t}),(0,n.jsx)("label",{className:"btn btn-outline-secondary",for:"btndeserialize",children:"Deserialize"})]})}),(0,n.jsx)("br",{}),(0,n.jsx)(A,{serializeModeOn:t})]})})},r}(o.Component),L=r(53697);function Q(e){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(K,{}),(0,n.jsx)(L.Z,{})]})}},53697:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(85893),s=(r(67294),r(4147));function i(){return(0,n.jsxs)("footer",{className:"text-center footer pt-5",children:[(0,n.jsxs)("div",{className:"content has-text-centered",children:["Borrowed with \u2764\ufe0f from"," ",(0,n.jsx)("a",{className:"is-link has-text-danger is-family-code",href:"https://chainsafe.io",children:"ChainSafe Systems"}),(0,n.jsx)("br",{}),"and"," ",(0,n.jsx)("a",{className:"is-link has-text-danger is-family-code",href:"https://github.com/ChainSafe/simpleserialize.com/graphs/contributors",children:"ETH 2.0 friends"})]}),(0,n.jsxs)("div",{className:"content has-text-centered is-small is-family-code",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("a",{className:"is-link has-text-grey",href:"https://www.npmjs.com/package/@chainsafe/ssz",children:["@chainsafe/ssz ",s.HO.lR]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{className:"is-link has-text-grey",href:"https://www.npmjs.com/package/@chainsafe/lodestar-types",children:["@chainsafe/lodestar-types ",s.HO.JV]})})]})]})}},75826:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(85893);r(67294);function s(){return(0,n.jsx)("a",{href:"https://github.com/chainsafe/simpleserialize.com",style:{position:"absolute",right:0,top:0},children:(0,n.jsx)("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",className:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})})}},76641:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(85893);r(67294);function s(){return(0,n.jsx)("div",{className:"section",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("h1",{className:"title is-family-code",children:["Simple Serialize",(0,n.jsx)("span",{className:"is-size-6",children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/ETH2_Spec_Version-0.11.2-2e86c1.svg"})})]}),(0,n.jsxs)("p",{children:["Simple Serialize (SSZ) is a serialization and merkleization standard created specifically for Eth2. Find the specification"," ",(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ethereum/eth2.0-specs/blob/v0.11.2/ssz/simple-serialize.md",children:"here."})]})]})})}},4147:function(e){"use strict";e.exports=JSON.parse('{"HO":{"JV":"^0.26.0","lR":"^0.8.17"}}')}},function(e){e.O(0,[7507,9282,6050,9171,1272,511,1937,2050,9774,2888,179],(function(){return t=77113,e(e.s=t);var t}));var t=e.O();_N_E=t}]);