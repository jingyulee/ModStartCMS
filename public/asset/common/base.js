!function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/asset//",r(r.s=298)}({124:function(e,t,n){var m,w=n(125),b=n(63).utf8,v=n(126),y=n(63).bin;(m=function(e,t){e.constructor==String?e=(t&&"binary"===t.encoding?y:b).stringToBytes(e):v(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=w.bytesToWords(e),e=8*e.length,i=1732584193,r=-271733879,o=-1732584194,a=271733878,s=0;s<n.length;s++)n[s]=16711935&(n[s]<<8|n[s]>>>24)|4278255360&(n[s]<<24|n[s]>>>8);n[e>>>5]|=128<<e%32,n[14+(64+e>>>9<<4)]=e;for(var l=m._ff,c=m._gg,u=m._hh,d=m._ii,s=0;s<n.length;s+=16){var f=i,p=r,h=o,g=a,i=l(i,r,o,a,n[s+0],7,-680876936),a=l(a,i,r,o,n[s+1],12,-389564586),o=l(o,a,i,r,n[s+2],17,606105819),r=l(r,o,a,i,n[s+3],22,-1044525330);i=l(i,r,o,a,n[s+4],7,-176418897),a=l(a,i,r,o,n[s+5],12,1200080426),o=l(o,a,i,r,n[s+6],17,-1473231341),r=l(r,o,a,i,n[s+7],22,-45705983),i=l(i,r,o,a,n[s+8],7,1770035416),a=l(a,i,r,o,n[s+9],12,-1958414417),o=l(o,a,i,r,n[s+10],17,-42063),r=l(r,o,a,i,n[s+11],22,-1990404162),i=l(i,r,o,a,n[s+12],7,1804603682),a=l(a,i,r,o,n[s+13],12,-40341101),o=l(o,a,i,r,n[s+14],17,-1502002290),i=c(i,r=l(r,o,a,i,n[s+15],22,1236535329),o,a,n[s+1],5,-165796510),a=c(a,i,r,o,n[s+6],9,-1069501632),o=c(o,a,i,r,n[s+11],14,643717713),r=c(r,o,a,i,n[s+0],20,-373897302),i=c(i,r,o,a,n[s+5],5,-701558691),a=c(a,i,r,o,n[s+10],9,38016083),o=c(o,a,i,r,n[s+15],14,-660478335),r=c(r,o,a,i,n[s+4],20,-405537848),i=c(i,r,o,a,n[s+9],5,568446438),a=c(a,i,r,o,n[s+14],9,-1019803690),o=c(o,a,i,r,n[s+3],14,-187363961),r=c(r,o,a,i,n[s+8],20,1163531501),i=c(i,r,o,a,n[s+13],5,-1444681467),a=c(a,i,r,o,n[s+2],9,-51403784),o=c(o,a,i,r,n[s+7],14,1735328473),i=u(i,r=c(r,o,a,i,n[s+12],20,-1926607734),o,a,n[s+5],4,-378558),a=u(a,i,r,o,n[s+8],11,-2022574463),o=u(o,a,i,r,n[s+11],16,1839030562),r=u(r,o,a,i,n[s+14],23,-35309556),i=u(i,r,o,a,n[s+1],4,-1530992060),a=u(a,i,r,o,n[s+4],11,1272893353),o=u(o,a,i,r,n[s+7],16,-155497632),r=u(r,o,a,i,n[s+10],23,-1094730640),i=u(i,r,o,a,n[s+13],4,681279174),a=u(a,i,r,o,n[s+0],11,-358537222),o=u(o,a,i,r,n[s+3],16,-722521979),r=u(r,o,a,i,n[s+6],23,76029189),i=u(i,r,o,a,n[s+9],4,-640364487),a=u(a,i,r,o,n[s+12],11,-421815835),o=u(o,a,i,r,n[s+15],16,530742520),i=d(i,r=u(r,o,a,i,n[s+2],23,-995338651),o,a,n[s+0],6,-198630844),a=d(a,i,r,o,n[s+7],10,1126891415),o=d(o,a,i,r,n[s+14],15,-1416354905),r=d(r,o,a,i,n[s+5],21,-57434055),i=d(i,r,o,a,n[s+12],6,1700485571),a=d(a,i,r,o,n[s+3],10,-1894986606),o=d(o,a,i,r,n[s+10],15,-1051523),r=d(r,o,a,i,n[s+1],21,-2054922799),i=d(i,r,o,a,n[s+8],6,1873313359),a=d(a,i,r,o,n[s+15],10,-30611744),o=d(o,a,i,r,n[s+6],15,-1560198380),r=d(r,o,a,i,n[s+13],21,1309151649),i=d(i,r,o,a,n[s+4],6,-145523070),a=d(a,i,r,o,n[s+11],10,-1120210379),o=d(o,a,i,r,n[s+2],15,718787259),r=d(r,o,a,i,n[s+9],21,-343485551),i=i+f>>>0,r=r+p>>>0,o=o+h>>>0,a=a+g>>>0}return w.endian([i,r,o,a])})._ff=function(e,t,n,i,r,o,a){a=e+(t&n|~t&i)+(r>>>0)+a;return(a<<o|a>>>32-o)+t},m._gg=function(e,t,n,i,r,o,a){a=e+(t&i|n&~i)+(r>>>0)+a;return(a<<o|a>>>32-o)+t},m._hh=function(e,t,n,i,r,o,a){a=e+(t^n^i)+(r>>>0)+a;return(a<<o|a>>>32-o)+t},m._ii=function(e,t,n,i,r,o,a){a=e+(n^(t|~i))+(r>>>0)+a;return(a<<o|a>>>32-o)+t},m._blocksize=16,m._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);e=w.wordsToBytes(m(e,t));return t&&t.asBytes?e:t&&t.asString?y.bytesToString(e):w.bytesToHex(e)}},125:function(e,t){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];0<e;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,i=0;n<e.length;n++,i+=8)t[i>>>5]|=e[n]<<24-i%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var i=e[n]<<16|e[n+1]<<8|e[n+2],r=0;r<4;r++)8*n+6*r<=8*e.length?t.push(o.charAt(i>>>6*(3-r)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,i=0;n<e.length;i=++n%4)0!=i&&t.push((o.indexOf(e.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|o.indexOf(e.charAt(n))>>>6-2*i);return t}};e.exports=n},126:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||"function"==typeof(t=e).readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))||!!e._isBuffer);var t}},127:function(t,n,i){var r;!function(){"use strict";var p={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function h(e){return function(e,t){var n,i,r,o,a,s,l,c,u=1,d=e.length,f="";for(i=0;i<d;i++)if("string"==typeof e[i])f+=e[i];else if("object"==typeof e[i]){if((o=e[i]).keys)for(n=t[u],r=0;r<o.keys.length;r++){if(null==n)throw new Error(h('[sprintf] Cannot access property "%s" of undefined value "%s"',o.keys[r],o.keys[r-1]));n=n[o.keys[r]]}else n=o.param_no?t[o.param_no]:t[u++];if(p.not_type.test(o.type)&&p.not_primitive.test(o.type)&&n instanceof Function&&(n=n()),p.numeric_arg.test(o.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(h("[sprintf] expecting number but found %T",n));switch(p.number.test(o.type)&&(l=0<=n),o.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,o.width?parseInt(o.width):0);break;case"e":n=o.precision?parseFloat(n).toExponential(o.precision):parseFloat(n).toExponential();break;case"f":n=o.precision?parseFloat(n).toFixed(o.precision):parseFloat(n);break;case"g":n=o.precision?String(Number(n.toPrecision(o.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=o.precision?n.substring(0,o.precision):n;break;case"t":n=String(!!n),n=o.precision?n.substring(0,o.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=o.precision?n.substring(0,o.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=o.precision?n.substring(0,o.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}p.json.test(o.type)?f+=n:(!p.number.test(o.type)||l&&!o.sign?c="":(c=l?"+":"-",n=n.toString().replace(p.sign,"")),a=o.pad_char?"0"===o.pad_char?"0":o.pad_char.charAt(1):" ",s=o.width-(c+n).length,s=o.width&&0<s?a.repeat(s):"",f+=o.align?c+n+s:"0"===a?c+s+n:s+c+n)}return f}(function(e){if(l[e])return l[e];for(var t,n=e,i=[],r=0;n;){if(null!==(t=p.text.exec(n)))i.push(t[0]);else if(null!==(t=p.modulo.exec(n)))i.push("%");else{if(null===(t=p.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){r|=1;var o=[],a=t[2],s=[];if(null===(s=p.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o.push(s[1]);""!==(a=a.substring(s[0].length));)if(null!==(s=p.key_access.exec(a)))o.push(s[1]);else{if(null===(s=p.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");o.push(s[1])}t[2]=o}else r|=2;if(3===r)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");i.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return l[e]=i}(e),arguments)}function e(e,t){return h.apply(null,[e].concat(t||[]))}var l=Object.create(null);n.sprintf=h,n.vsprintf=e,"undefined"!=typeof window&&(window.sprintf=h,window.vsprintf=e,void 0===(r=function(){return{sprintf:h,vsprintf:e}}.call(n,i,n,t))||(t.exports=r))}()},261:function(e,t,n){let u=n(6);"layer"in window&&console.error("ERR: dialog should required only once, use window.api.dialog instead");let a=n(264),d={device:"pc",loadingOn:function(e){if(e=e||null){e=layer.open({type:1,content:'<div style="padding:10px;height:32px;box-sizing:content-box;"><div class="layui-layer-ico16" style="display:inline-block;margin-right:10px;"></div><div style="display:inline-block;line-height:32px;vertical-align:top;font-size:13px;" class="loading-text">'+e+"</div></div>",shade:[.3,"#000"],closeBtn:!1,title:!1,area:["auto","auto"]});return u("#layui-layer"+e).attr("type","loading"),e}return layer.load(2)},loadingUpdate:function(e,t){u("#layui-layer"+e+" .loading-text").html(t),u(window).resize()},loadingOff:function(){layer.closeAll("loading")},tipSuccess:function(e,t){let n=2e3;e&&10<e.length&&(n=1e3*parseInt(e.length/5)),layer.msg(e,{shade:.3,time:n,shadeClose:!0,anim:-1},t)},tipError:function(e,t){let n=2e3;10<e.length&&(n=1e3*parseInt(e.length/5)),layer.msg(e,{shade:.3,time:n,shadeClose:!0,anim:6},t)},tipPopoverShow:function(e,t){let n=u(e).data("popover-dialog");n&&layer.close(n),n=layer.tips(t,e,{tips:[1,"#333"],time:0}),u(e).data("popover-dialog",n)},tipPopoverHide:function(e){var t=u(e).data("popover-dialog");t&&(layer.close(t),u(e).data("popover-dialog",null))},alertSuccess:function(e,t){layer.alert(e,{icon:1,closeBtn:0},function(e){layer.close(e),t&&t()});try{document.activeElement.blur();let e=u("#layui-layer"+index),t=e.find(".layui-layer-btn0");t.attr("tabindex",0).css({outline:"none"}).get(0).focus(),e.on("keypress",function(){t.click()})}catch(e){}},alertError:function(e,t){var n=layer.alert(e,{icon:2,closeBtn:0},function(e){layer.close(e),t&&t()});try{document.activeElement.blur();let e=u("#layui-layer"+n),t=e.find(".layui-layer-btn0");t.attr("tabindex",0).css({outline:"none"}).get(0).focus(),e.on("keypress",function(){t.click()})}catch(e){}return n},confirm:function(e,t,n,i){i=i||{icon:3,title:"提示"},t=t||!1,n=n||!1,layer.confirm(e,i,function(e){layer.close(e),t&&t()},function(e){layer.close(e),n&&n()})},dialog:function(e,t){let i=u.extend({title:null,width:"600px",height:"80%",shadeClose:!0,openCallback:function(e){},closeCallback:function(){}},t);return/^\d+px$/.test(i.width)&&u(window).width()<parseInt(i.width)&&(i.width="90%",i.height="90%"),layer.open({type:2,title:"正在加载...",shadeClose:i.shadeClose,shade:.5,maxmin:!1,area:[i.width,i.height],scrollbar:!1,content:e,success:function(e,t){if(i.openCallback({layero:e,index:t}),null===i.title)try{var n=u(e).find("iframe")[0].contentWindow.document.title;layer.title(a.specialchars(n),t)}catch(e){}else layer.title(i.title,t)},end:function(){i.closeCallback()}})},dialogContent:function(e,t){let n=u.extend({skin:null,closeBtn:!0,width:"auto",height:"auto",offset:"auto",shade:[.3,"#000"],shadeClose:!0,fixed:!0,anim:0,openCallback:function(e,t){},closeCallback:function(){}},t);return layer.open({skin:n.skin,anim:n.anim,shade:n.shade,offset:n.offset,type:1,title:!1,zindex:2019,closeBtn:n.closeBtn,shadeClose:n.shadeClose,scrollbar:!1,content:e,area:[n.width,n.height],fixed:n.fixed,success:function(e,t){n.openCallback(e,t)},end:function(){n.closeCallback()}})},dialogClose:function(e){layer.close(e)},dialogCloseAll:function(){layer.closeAll()},input:function(e,t){let n=u.extend({label:"请输入",width:"200px",height:"auto",defaultValue:""},t);/^\d+px$/.test(n.width)&&u(window).width()<parseInt(n.width)&&(n.width=u(window).width()-20+"px");let i=n.defaultValue+"",r=!1,o=d.dialogContent(['<div id="dialog-input-box" style="width:',n.width,";height:",n.height,';background:#FFF;border-radius:3px;">','<div style="padding:10px 10px 0 10px;">',n.label,"</div>",'<div style="padding:10px;"><input type="text" style="border:1px solid #CCC;height:30px;line-height:30px;padding:0 5px;width:100%;display:block;box-sizing:border-box;outline:none;border-radius:2px;" value="',a.specialchars(n.defaultValue),'" /></div>','<div style="cursor:pointer;padding:10px;text-align:center;color:#40AFFE;line-height:20px;border-top:1px solid #EEE;cursor:default;" class="ok">确定</div>',"</div>"].join(""),{openCallback:function(){u("#dialog-input-box").find(".ok").on("click",function(){r=!0,d.dialogClose(o)}),u("#dialog-input-box").find("input").on("change",function(){i=u(this).val()})},closeCallback:function(){r&&e&&e(i)}})},preview:function(o,e){e=e||{};let a=u.extend({title:null,width:"auto",height:"auto"},e),s=u(window).width(),l=u(window).height();d&&d.loadingOn();let c=new Image;return c.onerror=function(){d.loadingOff(),d.tipError("Image load error")},c.onload=function(){d.loadingOff();let e=s-40,t=l-40,n=c.width,i=c.height;n>e&&(i=parseInt(i*e/n),n=e),i>t&&(n=parseInt(n*t/i),i=t);var r=['<div style="width:',n,"px;height:",i,'px;">','   <img src="',o,'" style="width:',n,"px;height:",i,'px;" />',"</div>"].join("");d.dialogContent(r,a)},c.src=o,!1}};e.exports=d},262:function(module,exports,__webpack_require__){var $=__webpack_require__(6),Util=__webpack_require__(264),EventManager=__webpack_require__(286),isWeiXin=function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},winReload=function(e){var t,n,i;isWeiXin()?(t=e.location,n=[],i="_t_"+(new Date).getTime()+"_",n.push(t.protocol),n.push("//"),n.push(t.host),n.push(t.pathname),t.search?/_t_\d+_/.test(t.search)?n.push(t.search.replace(/_t_\d+_/,i)):(n.push(t.search),n.push("&"),n.push(i)):(n.push(t.search),n.push("?"),n.push(i)),n.push(t.hash),e.location.replace(n.join(""))):e.location.reload()},Form={defaultTimeout:6e5,responseToRes:function(e){var t={code:-999,msg:"请求出现错误 T_T"};return"timeout"===e.statusText?t.msg="请求超时取消 T_T":t.msg="请求出现错误("+e.status+" "+e.statusText+") T_T",t},redirectProcess:function(redirect){redirect&&("[reload]"===redirect?winReload(window):"[root-reload]"==redirect?winReload(Util.getRootWindow()):"[back]"===redirect?window.history.back():"[tab-close]"===redirect?window._pageTabManager.closeFromTab():0===redirect.indexOf("[js]")?eval(redirect.substr(4)):window.location.href=redirect)},defaultCallback:function(e,t,n){var i,r,o;n=n||null,t=t||{},"object"==typeof e?"code"in e?(i=e.code,o=r="","msg"in e&&(r=e.msg),"redirect"in e&&(o=e.redirect),"data"in e&&e.data,0==i?"success"in t?t.success(e):o?r?n?n.alertSuccess(r,function(){Form.redirectProcess(o)}):(alert(r),Form.redirectProcess(o)):Form.redirectProcess(o):r&&(n?n.tipSuccess(r):alert(r)):(1002==i&&EventManager.fire("modstart:captcha.error",{res:e}),"error"in t?t.error(e):o?r?n?n.alertError(r,function(){Form.redirectProcess(o)}):(alert(r),Form.redirectProcess(o)):Form.redirectProcess(o):n?n.tipError(r):alert(r))):Form.defaultCallback({code:-1,msg:"parse error: "+JSON.stringify(e)},t,n):alert("ErrorResponse:"+e)},initAjax:function(e,o){o=o||null;var a=$(e);a.on("submit",function(){if(a.data("submiting"))return!1;var e=$(this).attr("action"),t=$(this).attr("method"),n=$(this).data("callbackValidate"),i=$(this).data("callback");if(n&&!n())return!1;var i=i||Form.defaultCallback,t=t||"get",r=$(this).serializeArray();return a.data("submiting",!0),o&&(n=$(this).attr("data-form-loading"),o.loadingOn(n)),$.ajax({type:t,url:e,dataType:"json",timeout:Form.defaultTimeout,data:r,success:function(e){return EventManager.fire("modstart:form.submitted",{$form:a,res:e}),a.data("submiting",null),o&&o.loadingOff(),i(e,{},o)},error:function(e){return e=Form.responseToRes(e),EventManager.fire("modstart:form.submitted",{$form:a,res:e}),a.data("submiting",null),o&&o.loadingOff(),i(e,{},o)}}),!1})},initCommon:function(e,n){var i=$(e);i.on("submit",function(){var e=$(this).attr("data-form-loading");if(e&&i.data("submiting"))return!1;$(this).attr("action"),$(this).attr("method"),$(this).serializeArray();var t=$(this).data("callbackValidate");return $(this).data("callback"),!(t&&!t()||(i.data("submiting",!0),n&&$(this).is("[data-form-loading]")&&n.loadingOn(e),0))})}};module.exports=Form},264:function(e,t,n){!function(s){const r=n(124);var i={specialchars:function(e){var t=[];if(!e)return"";if(0==e.length)return"";for(var n=0;n<e.length;n++)switch(e.substr(n,1)){case"<":t.push("&lt;");break;case">":t.push("&gt;");break;case"&":t.push("&amp;");break;case" ":t.push("&nbsp;");break;case'"':t.push("&quot;");break;default:t.push(e.substr(n,1))}return t.join("")},text2html:function(e){return"<p>"+(e=i.specialchars(e)).replace(/\n/g,"</p><p>")+"</p>"},text2paragraph:function(e){return"<p>"+e.replace(/\n/g,"</p><p>")+"</p>"},urlencode:function(e){return e=(e+"").toString(),encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},randomString:function(e){e=e||16;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,i="",r=0;r<e;r++)i+=t.charAt(Math.floor(Math.random()*n));return i},getRootWindow:function(){for(var e=window;e.self!==e.parent;)e=e.parent;return e},fixPath:function(e,t){return t=t||"",e?0===e.indexOf("http://")||0===e.indexOf("https://")||0===e.indexOf("//")?e:(0===e.indexOf("/")||(e="/"+e),(t=t&&t.lastIndexOf("/")==t.length-1?t.substr(0,t.length-1):t)+e):""},fixFullPath:function(e){var t=window.location.protocol+"//"+window.location.host+"/";return i.fixPath(e,t)},objectValue:function(e,t,n){return"string"==typeof t?i.objectValue(e,t.split("."),n):1==t.length&&void 0!==n?e[t[0]]=n:0==t.length?e:(/^\d+$/.test(t[0])&&(t[0]=parseInt(t[0])),i.objectValue(e[t[0]],t.slice(1),n))},fullscreen:{enter:function(e){var t=document.documentElement;t.requestFullscreen?(t.requestFullscreen(),setTimeout(function(){e&&e()},1e3)):t.mozRequestFullScreen?(t.mozRequestFullScreen(),setTimeout(function(){e&&e()},1e3)):t.webkitRequestFullScreen?(t.webkitRequestFullScreen(),setTimeout(function(){e&&e()},1e3)):elem.msRequestFullscreen&&(elem.msRequestFullscreen(),setTimeout(function(){e&&e()},1e3))},exit:function(e){document.exitFullscreen?(document.exitFullscreen(),setTimeout(function(){e&&e()},1e3)):document.mozCancelFullScreen?(document.mozCancelFullScreen(),setTimeout(function(){e&&e()},1e3)):document.webkitCancelFullScreen?(document.webkitCancelFullScreen(),setTimeout(function(){e&&e()},1e3)):document.msExitFullscreen&&(document.msExitFullscreen(),setTimeout(function(){e&&e()},1e3))},isFullScreen:function(){return document.exitFullscreen?document.fullscreen:document.mozCancelFullScreen?document.mozFullScreen:document.webkitCancelFullScreen?document.webkitIsFullScreen:!!document.msExitFullscreen&&document.msFullscreenElement},trigger:function(e){i.fullscreen.isFullScreen()?i.fullscreen.exit(function(){e&&e("exit")}):i.fullscreen.enter(function(){e&&e("enter")})}},scrollTo:function(e,t,n){var i,r,o=Object.assign({offset:0},n),a=s(e);a.length?(i=a.offset().top,t?(r=s(t),a.length?(n=r.offset().top,a=r.scrollTop(),r.stop().animate({scrollTop:a+i-n+o.offset},200)):console.warn("Util.scroll container=( "+t+" ) not found")):s("html,body").stop().animate({scrollTop:i+o.offset},200)):console.warn("Util.scroll target=( "+e+" ) not found")},setStyleContent:function(e,t){let n=document.getElementById(e);n||(n=document.createElement("style"),n.type="text/css",n.id=e,document.getElementsByTagName("head")[0].appendChild(n),n=document.getElementById(e)),n.innerHTML=t},loadScript:function(e,t){let n="s_"+r(e),i=document.getElementById(n);i?t&&t({isNew:!1}):(i=document.createElement("script"),i.id=n,i.src=e,i.onload=()=>{t&&t({isNew:!0})},document.getElementsByTagName("head")[0].appendChild(i))},loadStylesheet:function(e,t){let n="s_"+r(e),i=document.getElementById(n);i?t&&t({isNew:!1}):(i=document.createElement("link"),i.id=n,i.rel="stylesheet",i.type="text/css",i.href=e,i.onload=()=>{t&&t({isNew:!0})},document.getElementsByTagName("head")[0].appendChild(i))},md5:function(e){return r(e)},iframeMessage:{queue:[],serve:{},win:{recv:null,send:null},mount:function(e,t){MS.util.iframeMessage.win.recv!==e&&e.addEventListener("message",function(e){if(e.data&&e.data.group&&e.data.id){for(var t,n=0;n<MS.util.iframeMessage.queue.length;n++)if(MS.util.iframeMessage.queue[n].id===e.data.id)return MS.util.iframeMessage.queue[n].cb(e.data.data),void MS.util.iframeMessage.queue.splice(n,1);e.data.group,e.data,MS.util.iframeMessage.serve&&(t=e.data,MS.util.iframeMessage.serve[t.group](t.action,t.data,function(e){MS.util.iframeMessage.safeSend({id:t.id,group:t.group,data:e})}))}},!1),MS.util.iframeMessage.win.recv=e,MS.util.iframeMessage.win.send=t},safeSend(e){MS.util.iframeMessage.win.send?MS.util.iframeMessage.win.send.postMessage(e,"*"):setTimeout(function(){MS.util.iframeMessage.safeSend(e)},100)},server:function(e,t){MS.util.iframeMessage.serve[e]=t},rpc:function(e,t,n,i){i=i||null;n={id:window.MS.util.randomString(10),expire:(new Date).getTime()+6e4,group:e,action:t,data:n,cb:i};i&&MS.util.iframeMessage.queue.push(n),MS.util.iframeMessage.win.send.postMessage(JSON.parse(JSON.stringify(n)),"*")}}},t=-1;i.getNextMaxZIndex=function(e){return!(e=e||!1)&&-1!==t||s("*").each(function(){var e=parseInt(s(this).css("z-index"));0<e&&t<e&&(t=e)}),++t},e.exports=i}.call(this,n(6))},286:function(e,t){e.exports={fire(e,t){t=t||{};t=new CustomEvent(e,{detail:t});window.dispatchEvent?window.dispatchEvent(t):window.fireEvent(t)},fireElementEvent(e,t,n){n=n||{};n=new CustomEvent(t,{detail:n});e.dispatchEvent?e.dispatchEvent(n):e.fireEvent(n)}}},287:function(e,t,n){"use strict";n.d(t,"a",function(){return u});const u={filterAncestors:function(e,i,r,o){r=r||"id",o=o||"_child";let a=null;return e.forEach(t=>{let n;if(t[r]===i)return a=t,a;if(t[o]&&(n=u.filterAncestors(t[o],i,r,o))){let e={};return e[o]=n,a=Object.assign({},t,e),a}}),a},listAncestors:function(e,t,n,i){n=n||"id",i=i||"_child";n=u.filterAncestors(e,t,n,i);if(null===n)return[];let r=n,o=[];do{let e=Object.assign({},r);delete e[i],o.push(e),r=r[i]}while(r);return o},findChildrenIdsIncludeSelf:function(e,t,n,i){return[t].concat(u.findChildren(e,t,n,i).map(e=>e[n]))},findChildrenIds:function(e,t,n,i){return u.findChildren(e,t,n,i).map(e=>e[n])},findChildren:function(e,t,n,i){let r=[];for(var o of e)o[i]===t&&(r.push(o),r=r.concat(u.findChildren(e,o[n],n,i)));return r},findAncestors:function(e,t,n,i){let r=[];for(var o of e)if(o[n]===t){r.push(o),0!==o[i]&&(r=r.concat(u.findAncestors(e,o[i],n,i)));break}return r.reverse()},sort:function(e,t,n,i,r){return t=t||"",n=n||"id",i=i||"pid",r=r||"sort",e.forEach(e=>{e[n]||(e[n]=""),e[i]||(e[i]="")}),e=e.sort((e,t)=>e[r]-t[r]),u._sort(e,t,n,i,r)},_sort:function(t,n,i,r,o,a,s){a=a||1,s=s||{};let l=[];return t.filter(e=>e[r]===n).forEach(e=>{if(e[i]in s)throw"duplicate sort tree : "+JSON.stringify(e)+" "+JSON.stringify(s);s[e[i]]=!0,l.push(Object.assign(e,{level:a})),u._sort(t,e[i],i,r,o,a+1,s).forEach(e=>{l.push(Object.assign(e))})}),l},tree:function(e,t,n,i,r,o){return t=t||"",n=n||"id",i=i||"pid",r=r||"sort",o=o||"_child",e.map(e=>{e[n]||(e[n]=""),e[i]||(e[i]="")}),e=e.sort((e,t)=>e[r]-t[r]),u._tree(e,t,n,i,r,o)},_tree:function(n,t,i,r,o,a,s,l){s=s||1,l=l||{};let c=[];return n.filter(e=>e[r]===t).forEach(e=>{if(e[i]in l)throw"duplicate sort tree : "+JSON.stringify(e)+" "+JSON.stringify(l);l[e[i]]=!0;let t={level:s};t[a]=u._tree(n,e[i],i,r,o,a,s+1,l),t[a].length||delete t[a],c.push(Object.assign(e,t))}),c},nodes:function(e,t,n,i,r){return t=t||"id",n=n||"pid",i=i||"sort",r=r||"_child",u._nodes(JSON.parse(JSON.stringify(e)),0,t,n,i,r)},_nodes:function(e,n,i,r,o,a,s){s=s||1;let l=[];return e.forEach(e=>{let t=e;t[r]=n,t.level=s,a in t&&"object"==typeof t[a]?(e=t[a],delete t[a],l.push(t),u._nodes(e,t[i],i,r,o,a,s+1).forEach(e=>{l.push(e)})):(delete t[a],l.push(t))}),l},resortAndDiff:function(e,t,n,i,r){n=n||"id",i=i||"pid",r=r||"sort";let o={};t.forEach(e=>o[e[n]]=e);let a=1;e.forEach(e=>e[r]=a++);let s=[];return e.forEach(e=>{var t;e[n]in o&&(t=o[e[n]])[i]===e[i]&&t[r]===e[r]||s.push(e)}),s}}},298:function(e,t,g){"use strict";g.r(t),function(r){var t,e=g(287);const n=g(6),i=g(299),o=g(262),a=g(261),s=g(301),l=g(264),c=g(302),u=g(286),d=g(303),f=g(127).sprintf;n.fn.isInViewport=function(){var e=r(this).offset().top,t=e+r(this).outerHeight(),n=r(window).scrollTop(),i=n+r(window).height();return n<t&&e<i},n.fn.serializeJson=function(){var e={},t=this.serializeArray();return this.serialize(),r(t).each(function(){e[this.name]?r.isArray(e[this.name])?e[this.name].push(this.value):e[this.name]=[e[this.name],this.value]:e[this.name]=this.value}),e};const p={trigger:function(e,t,n){t=t||"header",n=n||"show";t=(e=void 0===e&&window.event?window.event.target:e)?r(e).closest(t):r(t);t.hasClass(n)?(t.removeClass(n),r("html").removeClass("body-scroll-lock")):(t.addClass(n),r("html").addClass("body-scroll-lock"))},hide:function(e,t,n){t=t||"header",n=n||"show",((e=void 0===e&&window.event?window.event.target:e)?r(e).closest(t):r(t)).removeClass(n),r("html").removeClass("body-scroll-lock")}},h={ready(){let e=Array.from(arguments);const t=e.pop();let n=!0;for(var i of e)if("function"==typeof i?i()||(n=!1):i||(n=!1),!n)break;n?t():setTimeout(()=>{h.ready.call(this,...arguments)},50)},ui:{onResize(e,t){var n;window.ResizeObserver&&(n=null,new ResizeObserver(function(e){n&&clearTimeout(n),n=setTimeout(function(){t()},100)}).observe(e))}},dialog:a,util:l,form:o,api:{defaultCallback:i.defaultFormCallback,post:i.post,postSuccess:i.postSuccess},selectorDialog:d,header:p,tree:e.a,url:c,eventManager:u,L:function(){var e=arguments[0];return h.trans&&e in h.trans&&(arguments[0]=h.trans[e]),f.call(null,...arguments)}};window.api=window.api||{},window.api.jquery=n,window.api.base=i,window.api.dialog=a,window.api.lister=s,window.api.selectorDialog=d,window.api.util=l,i.init(),t=!1,r(window).scroll(function(){var e=r(window).scrollTop();180<e?t||(t=!0,r("html").addClass("body-scroll-far")):e<60&&t&&(t=!1,r("html").removeClass("body-scroll-far"))}),window.MS=h}.call(this,g(6))},299:function(e,t,n){var i=n(6),r=n(261),o=n(262),a=n(300),s={init:function(){i(function(){i("form").each(function(e,t){i(t).unbind("submit"),void 0!==i(t).attr("data-ajax-form")?o.initAjax(t,r):i(t).is("[data-form-no-loading]")||o.initCommon(t,r)})}),a.init(r)},defaultFormCallback:function(e,t){return o.defaultCallback(e,t,r)},post:function(e,t,n){i.ajax({type:"post",url:e,dataType:"json",timeout:o.defaultTimeout,data:t,success:function(e){n&&n(e)},error:function(e){e=o.responseToRes(e),n&&n(e)}})},postSuccess:function(e,t,n,i){n=n||s.defaultFormCallback,i=i||s.defaultFormCallback,s.post(e,t,function(e){s.defaultFormCallback(e,{success:function(e){n(e)},error:function(e){i(e)}})})}};e.exports=s},300:function(module,exports,__webpack_require__){var $=__webpack_require__(6),Form=__webpack_require__(262),inited=!1,Convenient={initAll:function(Dialog){$(document).on("click","[data-confirm]",function(){if(!$(this).is("[data-ajax-request]")){var e=$(this).attr("data-href"),t=$(this).is("[data-new-window]");return Dialog.confirm($(this).attr("data-confirm"),function(){t?window.open(e,"_blank"):window.location.href=e}),!1}}),$(document).on("click","[data-ajax-request]",function(){var url=$(this).attr("data-ajax-request"),confirm=$(this).attr("data-confirm"),loading=$(this).is("[data-ajax-request-loading]"),method=$(this).attr("data-method"),jsonStr=$(this).attr("data-request"),jsonp=$(this).is("[data-ajax-jsonp]"),callback=$(this).data("callback"),method=method||"post",callback=callback||Form.defaultCallback,data={};if(jsonStr)try{data=JSON.parse(jsonStr)}catch(e){try{data=eval("data = "+jsonStr+";")}catch(e){}}else data={};var sendRequest=function(){loading&&Dialog.loadingOn(),$.ajax({async:!0,url:url,type:method||"get",dataType:jsonp?"jsonp":"json",data:data,success:function(e){loading&&Dialog.loadingOff(),callback(e,{},Dialog)},error:function(e){loading&&Dialog.loadingOff(),alert("请求出错")}})};return confirm?Dialog.confirm(confirm,function(){sendRequest()}):sendRequest(),!1}),$(document).on("click","[data-dialog-request]",function(){var e=$(this),t=e.attr("data-dialog-request"),n={title:e.attr("data-dialog-title")||null,shadeClose:!1,closeCallback:function(){e.trigger("dialog.close",[e])}};e.attr("data-dialog-width")&&(n.width=e.attr("data-dialog-width")),e.attr("data-dialog-height")&&(n.height=e.attr("data-dialog-height")),Dialog.dialog(t,n)}),$(document).on("click","[data-image-preview]",function(){var option={};$(this).attr("data-option")&&eval("option = "+$(this).attr("data-option"));var opt=$.extend({title:null,width:"auto",height:"auto"},option),imgUrl=$(this).attr("href");imgUrl&&"javascript:;"!==imgUrl&&"#"!==imgUrl||(imgUrl=$(this).attr("data-image-preview"));var imgUrl=imgUrl||$(this).attr("src"),windowWidth=$(window).width(),windowHeight=$(window).height();Dialog&&Dialog.loadingOn();var img=new Image;return img.onerror=function(){Dialog?(Dialog.loadingOff(),Dialog.tipError("加载图片出错")):alert("加载图片出错")},img.onload=function(){Dialog&&Dialog.loadingOff();var e=windowWidth-40,t=windowHeight-40,n=img.width,i=img.height;e<n&&(i=parseInt(i*e/n),n=e),t<i&&(n=parseInt(n*t/i),i=t);i=['<div style="width:',n,"px;height:",i,'px;">','   <img src="',imgUrl,'" style="width:',n,"px;height:",i,'px;" />',"</div>"].join("");Dialog.dialogContent(i,opt)},img.src=imgUrl,!1})},initSmartImage:function(){$(document).ready(function(){setTimeout(function(){$("[data-smart-image]").each(function(e,t){$(t).attr("src",$(t).attr("data-smart-image"))})},0)})},initTip:function(n){n=n||null,$(document).on("click","[data-tip-error]",function(){return n?n.tipError($(this).attr("data-tip-error")):alert($(this).attr("data-tip-error")),!1}),$(document).on("click","[data-tip-success]",function(){return n?n.tipError($(this).attr("data-tip-success")):alert($(this).attr("data-tip-success")),!1}),$(document).on("mouseenter","[data-tip-popover]",function(e){var t=$(this).attr("data-tip-popover");n?n.tipPopoverShow(this,t):$(this).attr("title",t)}).on("mouseleave","[data-tip-popover]",function(e){n&&n.tipPopoverHide(this)})},init:function(e){inited||(inited=!0,Convenient.initAll(e),Convenient.initSmartImage(),Convenient.initTip(e))}};module.exports=Convenient},301:function(e,t,n){!function(l){let c=n(262),u=n(261);e.exports=function(e,t){let i=l(e.lister||null),n=l(e.search||null),r=this,o={page:1,pageSize:10,field:[],order:[],search:[]},a=null;t&&"param"in t&&(o=l.extend(o,t.param));let s=l.extend({server:"/path/to/server",editQuickServer:"/path/to/edit/quick",hashUrl:!0,showLoading:!0,customLoading:function(e){},render:function(e){}},t);this.getData=function(){return a},this.init=function(){let e=window.location.hash;0===e.indexOf("#")&&(e=e.substring(1));try{e=decodeURIComponent(e);var t,n=JSON.parse(e);for(t in n)t in o&&(o[t]=n[t])}catch(e){}i&&i.on("click","[data-refresh-button]",function(){return r.load(!0),!1})},this.initSearch=function(){n.on("click","[data-search-button]",function(){return o.page=1,r.prepareSearch(),r.load(!0),!1}),n.on("click","[data-reset-search-button]",function(){return r.resetSearch(),r.resetOrder(),r.load(!0),!1}),n.on("click","[data-expand-search-button]",function(){return n.find(".field-more-expand").toggleClass("field-more-expand__active"),!1}),n.find("[data-grid-filter-field]").each(function(e,t){l(t).data("init")&&l(t).data("init")(o.search)})},this.initTable=function(){},this.prepareSearch=function(){o.search=[],n.find("[data-grid-filter-field]").each(function(e,t){l(t).data("get")&&o.search.push(l(t).data("get")())})},this.resetSearch=function(){o.search=[],n.find("[data-grid-filter-field]").each(function(e,t){l(t).data("reset")&&o.search.push(l(t).data("reset")())})},this.resetOrder=function(){o.order=[]},this.setPageSize=function(e){o.pageSize=e},this.setPage=function(e){o.page=e},this.setParam=function(e,t){e in o&&(o[e]=t)},this.getParam=function(){return o},this.setOption=function(e,t){s[e]=t},this.refresh=function(){r.load()},this.load=function(){s.showLoading&&u.loadingOn(),s.customLoading(!0),a=null,l.post(s.server,o).done(function(e){s.hashUrl&&window.location.replace("#"+JSON.stringify(o)),s.showLoading&&u.loadingOff(),s.customLoading(!1),c.defaultCallback(e,{success:function(e){s.render(e.data)}})}).fail(function(e){try{s.showLoading&&u.loadingOff(),s.customLoading(!1),c.defaultCallback(e)}catch(e){}})},this.init(),this.initSearch(),this.initTable(),this.prepareSearch(),this.load()}}.call(this,n(6))},302:function(e,t){e.exports={parse:function(e){const t=new URL(e);let n={};t.searchParams.forEach((e,t)=>{n[t]=e});let i="";return t.hash&&(i=t.hash.substr(1)),{origin:t.origin,base:t.origin+t.pathname,query:n,hash:i}},build:function(t){let n=t.base;if(t.query){let e=[];for(var i in t.query)e.push(i+"="+t.query[i]);0<e.length&&(n+="?"+e.join("&"))}return t.hash&&(n+="#"+t.hash),n},merge:function(e,t){let n=this.parse(e);for(var i in t)n.query[i]=t[i];return this.build(n)}}},303:function(i,e,r){!function(t){function e(e){null==n&&alert("Dialog must defined"),this.opt=t.extend({limitMax:100,limitMin:1,dialogWidth:"940px",dialogHeight:"90%",server:"/path/to/link/choose/dialog",callback:function(e){alert("Select : "+JSON.stringify(e))}},e),t(window).width()<800&&(this.opt.dialogWidth="90%"),this.dialog=n,this.runtime={dialog:null}}var n=r(261);e.prototype.show=function(){var t=this;return window.__selectorDialogOption=t.opt,window.__dialogSelectIds=[],window.__selectorDialogItems=[],this.runtime.dialog=this.dialog.dialog(this.opt.server,{width:this.opt.dialogWidth,height:this.opt.dialogHeight,closeCallback:function(){var e=window.__selectorDialogItems;e.length&&(e.length>t.opt.limitMax?t.dialog.tipError("Select limit max "+t.opt.limitMax+" item(s)"):e.length<t.opt.limitMin?t.dialog.tipError("Select limit min "+t.opt.limitMin+" item(s)"):t.opt.callback(e))}}),t},e.prototype.close=function(){this.dialog.dialogClose(this.runtime.dialog)},i.exports=e}.call(this,r(6))},6:function(e,t){e.exports=window.$},63:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n}});