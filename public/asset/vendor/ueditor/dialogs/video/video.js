!function(){var l,S=[],o=!1,t={};function d(e,t){for(var i,a,o=$G(e).children,r=0;a=o[r++];)if("focus"==a.className){i=a.getAttribute(t);break}return i}function r(e){return e?e=utils.trim(e).replace(/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html/i,"player.youku.com/embed/$1").replace(/v\.qq\.com\/x\/cover\/[\w]+\/([\w]+)\.html/i,"v.qq.com/iframe/player.html?vid=$1&tiny=0&auto=0").replace(/v\.qq\.com\/x\/page\/([\w]+)\.html/i,"v.qq.com/iframe/player.html?vid=$1&tiny=0&auto=0").replace(/www\.bilibili\.com\/video\/([a-zA-Z0-9]+)\/?.*$/i,"player.bilibili.com/player.html?bvid=$1"):""}function n(e){e&&(e=r(e),e=utils.unhtml(e),$G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+'</span></div><iframe class="previewVideo"  src="'+e+'" width="420" height="280" frameborder=0 allowfullscreen></iframe>')}function e(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}window.onload=function(){t=editor.getOpt("videoConfig"),$focus($G("videoUrl")),function(){for(var o=$G("tabHeads").children,e=0;e<o.length;e++)domUtils.on(o[e],"click",function(e){for(var t,i=e.target||e.srcElement,a=0;a<o.length;a++)t=o[a].getAttribute("data-content-id"),o[a]==i?(domUtils.addClass(o[a],"focus"),domUtils.addClass($G(t),"focus")):(domUtils.removeClasses(o[a],"focus"),domUtils.removeClasses($G(t),"focus"))});t.disableUpload||($G("tabHeads").querySelector('[data-content-id="upload"]').style.display="inline-block");t.selectCallback&&($G("videoSelect").style.display="inline-block",domUtils.on($G("videoSelect"),"click",function(e){t.selectCallback(editor,function(e){e&&($G("videoUrl").value=e.path,n(e.path))})}))}(),function(e){for(var t,i=0;t=e[i++];){var a,o=$G(t),r={none:lang.default,left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(a in r){var n=document.createElement("div");n.setAttribute("name",a),"none"==a&&(n.className="focus"),n.style.cssText="background:url(images/"+a+"_focus.jpg);",n.setAttribute("title",r[a]),o.appendChild(n)}!function(e){for(var t,i=$G(e).children,a=0;t=i[a++];)domUtils.on(t,"click",function(){for(var e,t=0;e=i[t++];)e.className="",e.removeAttribute&&e.removeAttribute("class");this.className="focus"})}(t)}}(["videoFloat","upload_alignment"]),function(e){browser.ie?e.onpropertychange=function(){n(this.value)}:e.addEventListener("input",function(){n(this.value)},!1)}($G("videoUrl")),dialog.onok=function(){var e,t,i,a;switch($G("preview").innerHTML="",d("tabHeads","tabSrc")){case"video":return e=$G("videoWidth"),t=$G("videoHeight"),i=$G("videoUrl").value,a=d("videoFloat","name"),!!i&&(!!function(e){for(var t,i=0;t=e[i++];){var a=t.value;if(!/(0|^[1-9]\d*$)/.test(a)&&a)return alert(lang.numError),t.value="",t.focus(),!1}return!0}([e,t])&&void editor.execCommand("insertvideo",{url:r(i),width:e.value,height:t.value,align:a},o?"upload":null));case"videoSearch":return function(e){for(var t,i=domUtils.getElementsByTagName($G(e),"img"),a=[],o=0;t=i[o++];)t.getAttribute("selected")&&a.push({url:t.getAttribute("ue_video_url"),width:420,height:280,align:"none"});editor.execCommand("insertvideo",a)}("searchList");case"upload":return function(){var e,t=[],i=editor.getOpt("videoUrlPrefix"),a=$G("upload_width").value||420,o=$G("upload_height").value||280,r=d("upload_alignment","name")||"none";for(e in S){var n=S[e];t.push({url:i+n.url,width:a,height:o,align:r})}var s=l.getQueueCount();{if(s)return $(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,s)+"</span>"),!1;editor.execCommand("insertvideo",t,"upload")}}()}},dialog.oncancel=function(){$G("preview").innerHTML=""},function(){var e,t,i,a=editor.selection.getRange().getClosedNode();a&&a.className&&(i="edui-faked-video"==a.className,t=-1!=a.className.indexOf("edui-upload-video"),(i||t)&&($G("videoUrl").value=e=a.getAttribute("_url"),$G("videoWidth").value=a.width,$G("videoHeight").value=a.height,i=domUtils.getComputedStyle(a,"float"),function(e){for(var t,i=$G("videoFloat").children,a=0;t=i[a++];)t.getAttribute("name")==e?"focus"!=t.className&&(t.className="focus"):"focus"==t.className&&(t.className="")}("center"===domUtils.getComputedStyle(a.parentNode,"text-align")?"center":i)),t&&(o=!0)),n(e)}(),l=new e("queueList")},e.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){var d,i=this,u=jQuery,e=i.$wrap,a=e.find(".filelist"),o=e.find(".statusBar"),r=o.find(".info"),n=e.find(".uploadBtn"),t=(e.find(".filePickerBtn"),e.find(".filePickerBlock")),s=e.find(".placeholder"),l=o.find(".progress").hide(),c=0,p=0,f=window.devicePixelRatio||1,m=113*f,v=113*f,g="",h={},b=(f="transition"in(e=document.createElement("p").style)||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e,e=null,f),w=editor.getActionUrl(editor.getOpt("videoActionName")),f=editor.getOpt("videoMaxSize"),y=(editor.getOpt("videoAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"");function C(i){function a(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry}l.text(text).show()}var o=u('<li id="'+i.id+'"><p class="title">'+i.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),r=u('<div class="file-panel"><span class="cancel">'+lang.uploadDelete+'</span><span class="rotateRight">'+lang.uploadTurnRight+'</span><span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(o),n=o.find("p.progress span"),s=o.find("p.imgWrap"),l=u('<p class="error"></p>').hide().appendTo(o);"invalid"===i.getStatus()?a(i.statusText):(s.text(lang.uploadPreview),-1=="|png|jpg|jpeg|bmp|gif|".indexOf("|"+i.ext.toLowerCase()+"|")?s.empty().addClass("notimage").append('<i class="file-preview file-type-'+i.ext.toLowerCase()+'"></i><span class="file-title">'+i.name+"</span>"):browser.ie&&browser.version<=7?s.text(lang.uploadNoPreview):d.makeThumb(i,function(e,t){e||!t||/^data:/.test(t)&&browser.ie&&browser.version<=7?s.text(lang.uploadNoPreview):(t=u('<img src="'+t+'">'),s.empty().append(t),t.on("error",function(){s.text(lang.uploadNoPreview)}))},m,v),h[i.id]=[i.size,0],i.rotation=0,i.ext&&-1!=y.indexOf(i.ext.toLowerCase())||(a("not_allow_type"),d.removeFile(i))),i.on("statuschange",function(e,t){"progress"===t?n.hide().width(0):"queued"===t&&(o.off("mouseenter mouseleave"),r.remove()),"error"===e||"invalid"===e?(a(i.statusText),h[i.id][1]=1):"interrupt"===e?a("interrupt"):"queued"===e?h[i.id][1]=0:"progress"===e&&(l.hide(),n.css("display","block")),o.removeClass("state-"+t).addClass("state-"+e)}),o.on("mouseenter",function(){r.stop().animate({height:30})}),o.on("mouseleave",function(){r.stop().animate({height:0})}),r.on("click","span",function(){var e;switch(u(this).index()){case 0:return void d.removeFile(i);case 1:i.rotation+=90;break;case 2:i.rotation-=90}b?(e="rotate("+i.rotation+"deg)",s.css({"-webkit-transform":e,"-mos-transform":e,"-o-transform":e,transform:e})):s.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(i.rotation/90%4+4)%4+")")}),o.insertBefore(t)}function x(){var e,i=0,a=0,t=l.children();u.each(h,function(e,t){a+=t[0],i+=t[0]*t[1]}),e=a?i/a:0,t.eq(0).text(Math.round(100*e)+"%"),t.eq(1).css("width",Math.round(100*e)+"%"),$()}function k(e){if(e!=g){var t=d.getStats();switch(n.removeClass("state-"+g),n.addClass("state-"+e),e){case"pedding":a.addClass("element-invisible"),o.addClass("element-invisible"),s.removeClass("element-invisible"),l.hide(),r.hide(),d.refresh();break;case"ready":s.addClass("element-invisible"),a.removeClass("element-invisible"),o.removeClass("element-invisible"),l.hide(),r.show(),n.text(lang.uploadStart),d.refresh();break;case"uploading":l.show(),r.hide(),n.text(lang.uploadPause);break;case"paused":l.show(),r.hide(),n.text(lang.uploadContinue);break;case"confirm":if(l.show(),r.hide(),n.text(lang.uploadStart),(t=d.getStats()).successNum&&!t.uploadFailNum)return void k("finish");break;case"finish":l.hide(),r.show(),t.uploadFailNum?n.text(lang.uploadRetry):n.text(lang.uploadStart)}g=e,$()}i.getQueueCount()?n.removeClass("disabled"):n.addClass("disabled")}function $(){var e,t="";"ready"===g?t=lang.updateStatusReady.replace("_",c).replace("_KB",WebUploader.formatSize(p)):"confirm"===g?(e=d.getStats()).uploadFailNum&&(t=lang.updateStatusConfirm.replace("_",e.successNum).replace("_",e.successNum)):(e=d.getStats(),t=lang.updateStatusFinish.replace("_",c).replace("_KB",WebUploader.formatSize(p)).replace("_",e.successNum),e.uploadFailNum&&(t+=lang.updateStatusError.replace("_",e.uploadFailNum))),r.html(t)}WebUploader.Uploader.support()?editor.getOpt("videoActionName")?((d=i.uploader=WebUploader.create({pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:w,fileVal:editor.getOpt("videoFieldName"),duplicate:!0,fileSingleSizeLimit:f,headers:editor.getOpt("serverHeaders")||{},compress:!1})).addButton({id:"#filePickerBlock"}),d.addButton({id:"#filePickerBtn",label:lang.uploadAddFile}),k("pedding"),d.on("fileQueued",function(e){c++,p+=e.size,1===c&&(s.addClass("element-invisible"),o.show()),C(e)}),d.on("fileDequeued",function(e){var t;c--,p-=e.size,e=u("#"+(t=e).id),delete h[t.id],x(),e.off().find(".file-panel").off().end().remove(),x()}),d.on("filesQueued",function(e){d.isInProgress()||"pedding"!=g&&"finish"!=g&&"confirm"!=g&&"ready"!=g||k("ready"),x()}),d.on("all",function(e,t){switch(e){case"uploadFinished":k("confirm");break;case"startUpload":var i=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",i=utils.formatUrl(w+(-1==w.indexOf("?")?"?":"&")+"encode=utf-8&"+i);d.option("server",i),k("uploading");break;case"stopUpload":k("paused")}}),d.on("uploadBeforeSend",function(e,t,i){-1!=w.toLowerCase().indexOf("jsp")&&(i.X_Requested_With="XMLHttpRequest")}),d.on("uploadProgress",function(e,t){u("#"+e.id).find(".progress span").css("width",100*t+"%"),h[e.id][1]=t,x()}),d.on("uploadSuccess",function(t,e){t=u("#"+t.id);try{var i=e._raw||e,a=utils.str2json(i);"SUCCESS"==a.state?(S.push({url:a.url,type:a.type,original:a.original}),t.append('<span class="success"></span>'),editor.fireEvent("uploadsuccess",{res:a,type:"video"})):t.find(".error").text(a.state).show()}catch(e){t.find(".error").text(lang.errorServerUpload).show()}}),d.on("uploadError",function(e,t){}),d.on("error",function(e,t){"Q_TYPE_DENIED"!=e&&"F_EXCEED_SIZE"!=e||C(t)}),d.on("uploadComplete",function(e,t){}),n.on("click",function(){return!u(this).hasClass("disabled")&&void("ready"===g||"paused"===g?d.upload():"uploading"===g&&d.stop())}),n.addClass("state-"+g),x()):u("#filePickerReady").after(u("<div>").html(lang.errorLoadConfig)).hide():u("#filePickerReady").after(u("<div>").html(lang.errorNotSupport)).hide()},getQueueCount:function(){for(var e,t=0,i=this.uploader.getFiles(),a=0;e=i[a++];)"queued"!=(e=e.getStatus())&&"uploading"!=e&&"progress"!=e||t++;return t},refresh:function(){this.uploader.refresh()}}}();