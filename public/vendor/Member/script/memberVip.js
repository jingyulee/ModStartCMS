$(function(){var t=$(".vip-list-container"),i=$(".pb-member-vip .vip-list .item"),e=$(".vip-content-list .item");i.on("click",function(){var a=$(this).attr("data-vip-id"),t=i.index($(this));e.hide().eq(t).show(),$("[data-vip-info]").find("[data-vip-value]").html("-"),$("[data-vip-info]").show(),i.removeClass("active"),$(this).addClass("active"),$("[name=vipId]").val($(this).attr("data-vip-id")),$("[data-vip-right-list] [data-vip-right]").hide().filter(function(t,i){return 0<=$(i).attr("data-vip-right").split(",").indexOf(a)}).show(),window.__data.isLogin&&MS.api.post(window.__msRoot+"api/member_vip/calc",{vipId:a},function(t){$("[data-vip-type]").html(t.data.type),$("[data-vip-price]").html(t.data.price),$("[data-vip-expire]").html(t.data.expire),$("[data-vip-info]").show(),window.__refreshMemberVipPay&&window.__refreshMemberVipPay()})}),t.find(".nav").on("click",function(){var t=i.index(i.filter(".active"));$(this).hasClass("left")?t--:t++;t=Math.max(0,Math.min(t,i.length-1)),t=i.eq(t).click();try{t.get(0).scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}catch(t){}return!1}),$(i.get(0)).click();var n=(new Date).getTime()+1e3*window.__data.countDownSeconds,o=$("[data-count-down]");setInterval(function(){var t,i,a,e=n-(new Date).getTime();e<=0?o.html("00:00:00.0"):(t=Math.floor(e/1e3/60/60),i=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3%60),e=Math.floor(e%1e3/100),o.html((t<10?"0"+t:t)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+"."+(e<10?"0"+e:e)))},100);new Swiper("[data-vip-open-list]",{direction:"vertical",slidesPerView:5,rewind:!0,loop:!0,autoplay:{delay:2e3}})});