var scrawl=function(e){e&&this.initOptions(e)};!function(){var m=$G("J_brushBoard"),g=m.getContext("2d"),a=[],f=0;scrawl.prototype={isScrawl:!1,brushWidth:-1,brushColor:"",initOptions:function(e){var t=this;t.originalState(e),t._buildToolbarColor(e.colorList),t._addBoardListener(e.saveNum),t._addOPerateListener(e.saveNum),t._addColorBarListener(),t._addBrushBarListener(),t._addEraserBarListener(),t._addAddImgListener(),t._addRemoveImgListenter(),t._addScalePicListenter(),t._addClearSelectionListenter(),t._originalColorSelect(e.drawBrushColor),t._originalBrushSelect(e.drawBrushSize),t._clearSelection()},originalState:function(e){var t=this;t.brushWidth=e.drawBrushSize,t.brushColor=e.drawBrushColor,g.lineWidth=t.brushWidth,g.strokeStyle=t.brushColor,g.fillStyle="transparent",g.lineCap="round",g.fill()},_buildToolbarColor:function(e){var t,a=[];a.push("<table id='J_colorList'>");for(var i,r=0;i=e[r++];)(r-1)%5==0&&(1!=r&&a.push("</tr>"),a.push("<tr>")),a.push("<td><a title='"+(t="#"+i)+"' href='javascript:void(0)' style='background-color:"+t+"'></a></td>");a.push("</tr></table>"),$G("J_colorBar").innerHTML=a.join("")},_addBoardListener:function(i){var r,o=this,s=-1,n=-1,l=!1,c=!1,d=!1,h=0,u="",p=parseInt(domUtils.getComputedStyle($G("J_wrap"),"margin-left"));a.push(g.getImageData(0,0,g.canvas.width,g.canvas.height)),f+=1,domUtils.on(m,["mousedown","mousemove","mouseup","mouseout"],function(e){switch(r=browser.webkit?e.which:h,e.type){case"mousedown":u=h=1,c=d=!(l=!0),o.isScrawl=!0,s=e.clientX-p,n=e.clientY-p,g.beginPath();break;case"mousemove":if(!u&&0==r)return;if(!u&&r&&(s=e.clientX-p,n=e.clientY-p,g.beginPath(),u=1),d||!l)return;var t=e.clientX-p,a=e.clientY-p;g.moveTo(s,n),g.lineTo(t,a),g.stroke(),s=t,n=a,c=!0;break;case"mouseup":if(h=0,!l)return;c||(g.arc(s,n,g.lineWidth,0,2*Math.PI,!1),g.fillStyle=g.strokeStyle,g.fill()),g.closePath(),o._saveOPerate(i),d=!(c=l=!1),n=s=-1;break;case"mouseout":if(u="",h=0,1==r)return;g.closePath()}})},_addOPerateListener:function(e){var t=this;domUtils.on($G("J_previousStep"),"click",function(){1<f&&(--f,g.clearRect(0,0,g.canvas.width,g.canvas.height),g.putImageData(a[f-1],0,0),t.btn2Highlight("J_nextStep"),1==f&&t.btn2disable("J_previousStep"))}),domUtils.on($G("J_nextStep"),"click",function(){0<f&&f<a.length&&(g.clearRect(0,0,g.canvas.width,g.canvas.height),g.putImageData(a[f],0,0),f+=1,t.btn2Highlight("J_previousStep"),f==a.length&&t.btn2disable("J_nextStep"))}),domUtils.on($G("J_clearBoard"),"click",function(){g.clearRect(0,0,g.canvas.width,g.canvas.height),a=[],t._saveOPerate(e),f=1,t.isScrawl=!1,t.btn2disable("J_previousStep"),t.btn2disable("J_nextStep"),t.btn2disable("J_clearBoard")})},_addColorBarListener:function(){var a=this;domUtils.on($G("J_colorBar"),"click",function(e){var t=a.getTarget(e),e=t.title;e&&(a._addColorSelect(t),a.brushColor=e,g.globalCompositeOperation="source-over",g.lineWidth=a.brushWidth,g.strokeStyle=e)})},_addBrushBarListener:function(){var a=this;domUtils.on($G("J_brushBar"),"click",function(e){var t=a.getTarget(e),e=browser.ie?t.innerText:t.text;e&&(a._addBESelect(t),g.globalCompositeOperation="source-over",g.lineWidth=parseInt(e),g.strokeStyle=a.brushColor,a.brushWidth=g.lineWidth)})},_addEraserBarListener:function(){var a=this;domUtils.on($G("J_eraserBar"),"click",function(e){var t=a.getTarget(e),e=browser.ie?t.innerText:t.text;e&&(a._addBESelect(t),g.lineWidth=parseInt(e),g.globalCompositeOperation="destination-out",g.strokeStyle="#FFF")})},_addAddImgListener:function(){var i=$G("J_imgTxt");window.FileReader||($G("J_addImg").style.display="none",$G("J_removeImg").style.display="none",$G("J_sacleBoard").style.display="none"),domUtils.on(i,"change",function(e){var t=i.parentNode;addMaskLayer(lang.backgroundUploading);var a=e.target||e.srcElement,e=new FileReader;e.onload=function(e){ue_callback((e.target||e.srcElement).result,"SUCCESS")},e.readAsDataURL(a.files[0]),t.reset()})},_addRemoveImgListenter:function(){var e=this;domUtils.on($G("J_removeImg"),"click",function(){$G("J_picBoard").innerHTML="",e.btn2disable("J_removeImg"),e.btn2disable("J_sacleBoard")})},_addScalePicListenter:function(){domUtils.on($G("J_sacleBoard"),"click",function(){var e=$G("J_picBoard"),t=$G("J_scaleCon"),a=e.children[0];a&&(t?"visible"==t.style.visibility?(t.style.visibility="hidden",e.style.position="",e.style.zIndex=""):(t.style.visibility="visible",e.style.cssText+="position:relative;z-index:999"):(e.style.cssText="position:relative;z-index:999;"+e.style.cssText,a.style.cssText="position: absolute;top:"+(m.height-a.height)/2+"px;left:"+(m.width-a.width)/2+"px;",t=new ScaleBoy,e.appendChild(t.init()),t.startScale(a)))})},_addClearSelectionListenter:function(){var t=document;domUtils.on(t,"mousemove",function(e){browser.ie&&browser.version<11?t.selection.clear():window.getSelection().removeAllRanges()})},_clearSelection:function(){for(var e,t=["J_operateBar","J_colorBar","J_brushBar","J_eraserBar","J_picBoard"],a=0;e=t[a++];)domUtils.unSelectable($G(e))},_saveOPerate:function(e){f=(a.length<=e?f<a.length&&(this.btn2disable("J_nextStep"),a.splice(f)):a.shift(),a.push(g.getImageData(0,0,g.canvas.width,g.canvas.height)),a.length),this.btn2Highlight("J_previousStep"),this.btn2Highlight("J_clearBoard")},_originalColorSelect:function(e){for(var t,a=$G("J_colorList").getElementsByTagName("td"),i=0;t=a[i++];)t.children[0].title.toLowerCase()==e&&(t.children[0].style.opacity=1)},_originalBrushSelect:function(e){for(var t,a=$G("J_brushBar").children,i=0;t=a[i++];)"a"==t.tagName.toLowerCase()&&(browser.ie?t.innerText:t.text).toLowerCase()==e&&(t.style.opacity=1)},_addColorSelect:function(e){for(var t,a=$G("J_colorList").getElementsByTagName("td"),i=$G("J_eraserBar").children,r=$G("J_brushBar").children,o=0;t=a[o++];)t.children[0].style.opacity=.3;for(var s,n=0;s=r[n++];)"a"==s.tagName.toLowerCase()&&(s.style.opacity=.3,(browser.ie?s.innerText:s.text).toLowerCase()==this.brushWidth&&(s.style.opacity=1));for(var l,c=0;l=i[c++];)"a"==l.tagName.toLowerCase()&&(l.style.opacity=.3);e.style.opacity=1,e.blur()},_addBESelect:function(e){for(var t,a=$G("J_brushBar").children,i=$G("J_eraserBar").children,r=0;t=a[r++];)"a"==t.tagName.toLowerCase()&&(t.style.opacity=.3);for(var o,s=0;o=i[s++];)"a"==o.tagName.toLowerCase()&&(o.style.opacity=.3);e.style.opacity=1,e.blur()},getCanvasData:function(){var e,t=$G("J_picBoard"),a=t.children[0];a?(t="absolute"==a.style.position?(e=parseInt(a.style.left),parseInt(a.style.top)):(e=(t.offsetWidth-a.width)/2,(t.offsetHeight-a.height)/2),g.globalCompositeOperation="destination-over",g.drawImage(a,e,t,a.width,a.height)):(g.globalCompositeOperation="destination-atop",g.fillStyle="#fff",g.fillRect(0,0,m.width,m.height));try{return m.toDataURL("image/png").substring(22)}catch(e){return""}},btn2Highlight:function(e){e=$G(e);-1==e.className.indexOf("H")&&(e.className+="H")},btn2disable:function(e){e=$G(e);-1!=e.className.indexOf("H")&&(e.className=e.className.replace("H",""))},getTarget:function(e){return e.target||e.srcElement}}}();var ScaleBoy=function(){this.dom=null,this.scalingElement=null};function ue_callback(e,t){var a=document,s=$G("J_picBoard"),n=a.createElement("img");removeMaskLayer(),"SUCCESS"==t?(s.innerHTML="",n.onload=function(){var e,t,a,i,r;o=300,t=(e=this).width||t,a=e.height||a,(o<t||o<a)&&(a<=t?(i=t-o)&&(r=(i/t).toFixed(2),e.height=a-a*r,e.width=o):(i=a-o)&&(r=(i/a).toFixed(2),e.width=t-t*r,e.height=o)),s.appendChild(n);var o=new scrawl;o.btn2Highlight("J_removeImg"),o.btn2Highlight("J_sacleBoard")},n.src=e):alert(t)}function removeMaskLayer(){var e=$G("J_maskLayer");e.className="maskLayerNull",e.innerHTML="",dialog.buttons[0].setDisabled(!1)}function addMaskLayer(e){var t=$G("J_maskLayer");dialog.buttons[0].setDisabled(!0),t.className="maskLayer",t.innerHTML=e}function exec(scrawlObj){var base64,options,actionUrl,params,url;scrawlObj.isScrawl?(addMaskLayer(lang.scrawlUpLoading),base64=scrawlObj.getCanvasData(),base64&&(options={timeout:1e5,onsuccess:function(xhr){var responseObj,imgObj,url,responseObj;scrawlObj.isCancelScrawl||(responseObj=eval("("+xhr.responseText+")"),"SUCCESS"==responseObj.state?(imgObj={},url=editor.options.scrawlUrlPrefix+responseObj.url,imgObj.src=url,imgObj._src=url,imgObj.alt=responseObj.original||"",imgObj.title=responseObj.title||"",editor.execCommand("insertImage",imgObj),dialog.close()):alert(responseObj.state))},onerror:function(){alert(lang.imageError),dialog.close()}},options[editor.getOpt("scrawlFieldName")]=base64,actionUrl=editor.getActionUrl(editor.getOpt("scrawlActionName")),params=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",url=utils.formatUrl(actionUrl+(-1==actionUrl.indexOf("?")?"?":"&")+params),ajax.request(url,options))):addMaskLayer(lang.noScarwl+"&nbsp;&nbsp;&nbsp;<input type='button' value='"+lang.continueBtn+"'  onclick='removeMaskLayer()'/>")}!function(){var o=[[1,1,-1,-1],[0,1,0,-1],[0,1,1,-1],[1,0,-1,0],[0,0,1,0],[1,0,-1,1],[0,0,0,1],[0,0,1,1]];ScaleBoy.prototype={init:function(){!function(){var e=document,t=e.getElementsByTagName("head")[0],a=e.createElement("style"),i=".scale{visibility:hidden;cursor:move;position:absolute;left:0;top:0;width:100px;height:50px;background-color:#fff;font-size:0;line-height:0;opacity:.4;filter:Alpha(opacity=40);}.scale span{position:absolute;left:0;top:0;width:6px;height:6px;background-color:#006DAE;}.scale .hand0, .scale .hand7{cursor:nw-resize;}.scale .hand1, .scale .hand6{left:50%;margin-left:-3px;cursor:n-resize;}.scale .hand2, .scale .hand4, .scale .hand7{left:100%;margin-left:-6px;}.scale .hand3, .scale .hand4{top:50%;margin-top:-3px;cursor:w-resize;}.scale .hand5, .scale .hand6, .scale .hand7{margin-top:-6px;top:100%;}.scale .hand2, .scale .hand5{cursor:ne-resize;}";a.type="text/css";try{a.appendChild(e.createTextNode(i))}catch(e){a.styleSheet.cssText=i}t.appendChild(a)}();var a=this,t=a.dom=function(){var e=[],t=document.createElement("div");t.id="J_scaleCon",t.className="scale";for(var a=0;a<8;a++)e.push("<span class='hand"+a+"'></span>");return t.innerHTML=e.join(""),t}();return a.scaleMousemove.fp=a,domUtils.on(t,"mousedown",function(e){var t=e.target||e.srcElement;a.start={x:e.clientX,y:e.clientY},-1!=t.className.indexOf("hand")&&(a.dir=t.className.replace("hand","")),domUtils.on(document.body,"mousemove",a.scaleMousemove),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),domUtils.on(document.body,"mouseup",function(e){a.start&&(domUtils.un(document.body,"mousemove",a.scaleMousemove),a.moved&&a.updateScaledElement({position:{x:t.style.left,y:t.style.top},size:{w:t.style.width,h:t.style.height}}),delete a.start,delete a.moved,delete a.dir)}),t},startScale:function(e){this.dom.style.cssText="visibility:visible;top:"+e.style.top+";left:"+e.style.left+";width:"+e.offsetWidth+"px;height:"+e.offsetHeight+"px;",this.scalingElement=e},updateScaledElement:function(e){var t=this.scalingElement,a=e.position,e=e.size;a&&(void 0!==a.x&&(t.style.left=a.x),void 0!==a.y&&(t.style.top=a.y)),e&&(e.w&&(t.style.width=e.w),e.h&&(t.style.height=e.h))},updateStyleByDir:function(e,t){var a,i=this,r=i.dom;o.def=[1,1,0,0],0!=o[e][0]&&(a=parseInt(r.style.left)+t.x,r.style.left=i._validScaledProp("left",a)+"px"),0!=o[e][1]&&(a=parseInt(r.style.top)+t.y,r.style.top=i._validScaledProp("top",a)+"px"),0!=o[e][2]&&(a=r.clientWidth+o[e][2]*t.x,r.style.width=i._validScaledProp("width",a)+"px"),0!=o[e][3]&&(a=r.clientHeight+o[e][3]*t.y,r.style.height=i._validScaledProp("height",a)+"px"),"def"===e&&i.updateScaledElement({position:{x:r.style.left,y:r.style.top}})},scaleMousemove:function(e){var t=arguments.callee.fp,a=t.start,i=t.dir||"def",a={x:e.clientX-a.x,y:e.clientY-a.y};t.updateStyleByDir(i,a),arguments.callee.fp.start={x:e.clientX,y:e.clientY},arguments.callee.fp.moved=1},_validScaledProp:function(e,t){var a=this.dom,i=$G("J_picBoard");switch(t=isNaN(t)?0:t,e){case"left":return t<0?0:t+a.clientWidth>i.clientWidth?i.clientWidth-a.clientWidth:t;case"top":return t<0?0:t+a.clientHeight>i.clientHeight?i.clientHeight-a.clientHeight:t;case"width":return t<=0?1:t+a.offsetLeft>i.clientWidth?i.clientWidth-a.offsetLeft:t;case"height":return t<=0?1:t+a.offsetTop>i.clientHeight?i.clientHeight-a.offsetTop:t}}}}();