!function(e){var r={};function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="/asset//",u(u.s=343)}({343:function(n,t,e){e=e(344);window.MS=window.MS||{},window.MS.urlWatcher=e},344:function(n,t,e){!function(r){n.exports=function(n){var t=r.extend({intervalInMS:2e3,data:null,url:null,preRequest:function(){},requestFinish:function(n){}},n),e=this;this.running=!1,this.start=function(){return e.running=!0,setTimeout(e.sendRequest,t.intervalInMS),e},this.stop=function(){if(e.running)return e.running=!1,e},this.next=function(){return setTimeout(e.sendRequest,t.intervalInMS),e},this.sendRequest=function(){e.running&&(t.preRequest(),r.post(t.url,t.data,function(n){t.requestFinish.call(e,n)}))}}}.call(this,e(6))},6:function(n,t){n.exports=window.$}});