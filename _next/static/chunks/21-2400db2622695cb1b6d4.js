(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{1229:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},8347:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})},5723:function(e,n,t){"use strict";var r=t(7294),i=Object.prototype.hasOwnProperty;var o=new WeakMap,u=0;var c=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var n=this.serializeKey(e)[0];return this.cache.get(n)},e.prototype.set=function(e,n){var t=this.serializeKey(e)[0];this.cache.set(t,n),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var n=this.serializeKey(e)[0];return this.cache.has(n)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var n=this.serializeKey(e)[0];this.cache.delete(n),this.notify()},e.prototype.serializeKey=function(e){var n=null;if("function"===typeof e)try{e=e()}catch(t){e=""}return Array.isArray(e)?(n=e,e=function(e){if(!e.length)return"";for(var n="arg",t=0;t<e.length;++t)if(null!==e[t]){var r=void 0;"object"!==typeof e[t]&&"function"!==typeof e[t]?r="string"===typeof e[t]?'"'+e[t]+'"':String(e[t]):o.has(e[t])?r=o.get(e[t]):(r=u,o.set(e[t],u++)),n+="@"+r}else n+="@null";return n}(e)):e=String(e||""),[e,n,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var n=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var t=!0;return this.subs.push(e),function(){if(t){t=!1;var r=n.subs.indexOf(e);r>-1&&(n.subs[r]=n.subs[n.subs.length-1],n.subs.length--)}}},e.prototype.notify=function(){for(var e=0,n=this.subs;e<n.length;e++){(0,n[e])()}},e}(),f=!0,s={isOnline:function(){return f},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){f=!0,e()}),!1),window.addEventListener("offline",(function(){return f=!1}),!1))}},a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};new c;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),l=a({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,n,t,r,i){if(t.isDocumentVisible()&&!("number"===typeof t.errorRetryCount&&i.retryCount>t.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*t.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(n,t){var r,o;if(n===t)return!0;if(n&&t&&(r=n.constructor)===t.constructor){if(r===Date)return n.getTime()===t.getTime();if(r===RegExp)return n.toString()===t.toString();if(r===Array){if((o=n.length)===t.length)for(;o--&&e(n[o],t[o]););return-1===o}if(!r||"object"===typeof n){for(r in o=0,n){if(i.call(n,r)&&++o&&!i.call(t,r))return!1;if(!(r in t)||!e(n[r],t[r]))return!1}return Object.keys(t).length===o}}return n!==n&&t!==t},isPaused:function(){return!1}},s),y="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),p=(y||window.requestAnimationFrame,(0,r.createContext)({}));p.displayName="SWRConfigContext";var h=p,v={},g={};!function(){var e=0}();if(!y){var b=function(e){if(l.isDocumentVisible()&&l.isOnline())for(var n in e)e[n][0]&&e[n][0]()};"function"===typeof l.registerOnFocus&&l.registerOnFocus((function(){return b(v)})),"function"===typeof l.registerOnReconnect&&l.registerOnReconnect((function(){return b(g)}))}Object.defineProperty(h.Provider,"default",{value:l});h.Provider}}]);