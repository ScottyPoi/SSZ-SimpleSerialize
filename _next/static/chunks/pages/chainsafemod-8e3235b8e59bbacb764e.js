(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7650],{76850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var s=n(85893),r=(n(42184),n(34129),n(74047)),i=n(52700),a=n(33814),o=n(44102),c=n(20775),u=n(67294),l=n(809),h=n.n(l),p=n(92447),f=n(4706),d=n(26265),y=n(10124),v=n(2323),m=n(69654),z=n(22581);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,o.Z)(this,n)}}function k(e){var t=(0,v.O)(e);return t[Math.floor(Math.random()*t.length)]}var j="phase0",O=function(e){(0,a.Z)(n,e);var t=x(n);function n(e){var s;(0,r.Z)(this,n),s=t.call(this,e),(0,d.Z)((0,f.Z)(s),"sizes",{0:"xx-small",1:"x-small",2:"small",3:"medium",4:"large",5:"x-large",6:"xx-large",7:"xxx-large"});var i=v.z.phase0;z.SignedBeaconBlock,k(i);return s.state={forkName:j,input:"",sszTypeName:"SignedBeaconBlock",serializeInputType:"yaml",deserializeInputType:"hex",value:""},s}return(0,i.Z)(n,[{key:"doProcess",value:function(){var e=this.state,t=e.sszTypeName,n=e.forkName;try{this.props.onProcess(n,t,this.parsedInput()[this.state.sszTypeName],v.z[n][t],this.getInputType())}catch(s){this.handleError(s)}}},{key:"componentDidMount",value:function(){var e=(0,p.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resetWith(this.getInputType(),this.state.sszTypeName);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setValueAndInput",value:function(e,t){this.setState({value:e,input:t})}},{key:"handleError",value:function(e){this.showError(e.message),this.props.setOverlay(!1)}},{key:"showError",value:function(e){this.props.alert.error(e)}},{key:"getRows",value:function(){return Math.min(16,Math.max(4,Math.floor(1.5*(this.state.input.match(/\n/g)||[]).length)))}},{key:"names",value:function(){return(0,v.O)(this.types())}},{key:"basicNames",value:function(){return["Boolean","Bytes32","Uint8","Uint16","Uint32","Uint64","Uint128","Uint256"]}},{key:"types",value:function(){return v.z.phase0}},{key:"getInputType",value:function(){var e=this.props.serializeModeOn,t=this.state,n=t.serializeInputType,s=t.deserializeInputType;return e?n:s}},{key:"parsedInput",value:function(){var e=this.getInputType();return y.J[e].parse(this.state.input,this.types()[this.state.sszTypeName])}},{key:"resetWith",value:function(){var e=(0,p.Z)(h().mark((function e(t,n){var s,r,i,a,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.types(),(r=s[n])||(n=k(s),r=s[n]),i=this.state.forkName,this.props.setOverlay(!0,"Generating random ".concat(n," value...")),e.next=7,(0,m.Z)(n,i);case 7:a=e.sent,o=y.J[t].dump(a,r),this.props.serializeModeOn?this.setState({serializeInputType:t}):this.setState({deserializeInputType:t}),this.setState({sszTypeName:n,input:o,value:a}),this.props.setOverlay(!1);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"numOrObj",value:function(e,t){return console.log(" type:  eh? ".concat(Object.keys(e))),(0,s.jsx)(s.Fragment,{children:"number"==typeof e?(0,s.jsx)("div",{style:{fontSize:this.sizes[t-1]},className:"row justify-content-end",children:"Uint[64]"}):32==Object.keys(e).length?(0,s.jsx)("div",{style:{fontSize:this.sizes[t-1]},className:"row justify-content-end",children:"Uint[256]"}):48==Object.keys(e).length?(0,s.jsx)("div",{style:{fontSize:this.sizes[t-1]},className:"row justify-content-end",children:"ByteVector[48]"}):96==Object.keys(e).length?(0,s.jsx)("div",{style:{fontSize:this.sizes[t-1]},className:"row justify-content-end",children:"ByteVector[96]"}):(0,s.jsx)("div",{className:"container p-0",children:this.newSubTree(e,t)})})}},{key:"newSubTree",value:function(e,t){var n=this,r=t,i=t-1,a=Object.keys(e),o=a;return console.log("key -- ".concat(Object.keys(e).map((function(t){return e[t]})))),console.log("keys is array?\n    : ".concat(Array.isArray(o),", length: ").concat(o.length," level: ").concat(t)),"0"==a[0]?a.length>=2?"AAAAAA":o.map((function(t,r){return(0,s.jsx)("div",{id:"".concat(Object.keys(e[t])),className:"row p-0",children:n.newSubTree(e[t],i)},r)})):(0,s.jsx)(s.Fragment,{children:o.map((function(t,a){return console.log("woodley: ".concat(Object.keys(t)," -- $").concat(a)),(0,s.jsxs)("div",{id:"".concat(t).concat(a),className:"row p-0 border-bottom",children:[(0,s.jsxs)("div",{style:{fontSize:"".concat(n.sizes[r])},className:"col-3 p-0",children:[t,":"]},a),(0,s.jsx)("div",{style:{fontSize:n.sizes[i]},className:"col-9 p-0 text-end",children:n.numOrObj(e[t],i)})]},a)}))})}},{key:"render",value:function(){this.props.serializeModeOn;var e=this.state,t=e.sszTypeName,n=e.value;return console.log("hey!  value: ".concat(Object.keys(n).length)),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("h1",{id:"typeName",children:t}),this.newSubTree(n,7)," "]})})}}]),n}(u.Component),g=n(72125),N=n(39121),w=n.n(N),T=n(99118);function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,o.Z)(this,n)}}var S=function(e){(0,a.Z)(n,e);var t=Z(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={forkName:void 0,name:"",input:void 0,deserialized:void 0,sszType:void 0,error:void 0,serialized:void 0,hashTreeRoot:void 0,showOverlay:!1,overlayText:""},s}return(0,i.Z)(n,[{key:"setOverlay",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setState({showOverlay:e,overlayText:t})}},{key:"process",value:function(){var e=(0,p.Z)(h().mark((function e(t,n,s,r){var i,a,o,c;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setOverlay(!0,this.props.serializeModeOn?"Serializing...":"Deserializing..."),i=(0,T.Z)(r,s),a=i.serialized,o=i.root,this.setState({hashTreeRoot:o,serialized:a}),this.setOverlay(!1),c=s,this.setState({forkName:t,name:n,input:s,sszType:r,error:undefined,deserialized:c});case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,s,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sszType,n=(e.error,e.serialized),r=(e.hashTreeRoot,e.deserialized),i=this.props.serializeModeOn,a=(0,s.jsx)(w(),{css:"margin: auto;"});return(0,s.jsxs)("div",{className:"section serialize-section is-family-code",children:[(0,s.jsx)(g.Z,{active:this.state.showOverlay,spinner:a,text:this.state.overlayText}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(O,{serializeModeOn:i,onProcess:this.process.bind(this),sszType:t,serialized:n,deserialized:r,setOverlay:this.setOverlay.bind(this)})})})})]})}}]),n}(u.Component);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,o.Z)(this,n)}}var R=function(e){(0,a.Z)(n,e);var t=b(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={serializeModeOn:!0},s}return(0,i.Z)(n,[{key:"showSerialize",value:function(){this.setState({serializeModeOn:!0})}},{key:"showDeserialize",value:function(){this.setState({serializeModeOn:!1})}},{key:"render",value:function(){var e=this.state.serializeModeOn;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("br",{}),(0,s.jsx)(S,{serializeModeOn:e})]})})}}]),n}(u.Component),M=n(94866);function I(e){return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(R,{}),(0,s.jsx)(M.Z,{})]})}},95552:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chainsafemod",function(){return n(76850)}])}},function(e){e.O(0,[9774,7507,9282,6050,9171,6259,5200,2125,9283,2888,179],(function(){return t=95552,e(e.s=t);var t}));var t=e.O();_N_E=t}]);