!function($){var e=new ScrollMagic.Controller;setTimeout((function(){new ScrollMagic.Scene({triggerElement:"#trigger-scene-1",duration:$("#trigger-scene-1").height()}).on("enter",(function(e){var n=parseInt($("#trigger-scene-1").attr("id").slice(-1));swiper.slideTo(n+1),tlScene1.restart()})).on("leave",(function(e){tlScene1.pause()})).triggerHook(.5).addIndicators({name:"TRIGGER SCENE FOULE"}).addTo(e)}),500)}(jQuery);