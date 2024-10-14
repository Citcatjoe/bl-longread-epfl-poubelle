(function($){

    var color = '#29FDC1';
    var colorBg1 = '#707070';
    var colorBg2 = '#252626';

	window.scrollTo(0, 0);

    // $(window).on('resize', function() {
    //     location.reload();
    // });
    
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 350,
        allowTouchMove: false,
      
        
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        
    });

    // alert($(window).width());
    // alert($(window).height());
    
    
    var controller = new ScrollMagic.Controller();

    $body = $('body');
    var $story = $('.story');

    // $('h1').on('click', function() {
    //     swiper.slideTo(1);
    // });
    // swiper.on('slideChange', function () {
    //     console.log('changing');
    // });
    // DANS LA ZONE TRIGGER 0 (HERO), LE SLIDER EST SUR LA SLIDE 00
    new ScrollMagic.Scene({triggerElement: "#trigger0", duration: $("#trigger0").height()})
    .on("enter", function (event) {
            var i = parseInt($('#trigger0').attr('id').slice(-1));
            // alert(i);
            swiper.slideTo(i+1);
            // tlIntroAmitBlink.seek('startblink');
            // tlIntroAmitBlink.play();

            //Commented because already Burns
            //tlBurn.seek('startblink');
            // tlBurn.play();

    }).triggerHook(1)
    // .addIndicators({name: "TRIGGER HERO"})
    .addTo(controller);

    // ZONE CHAPEAU
    new ScrollMagic.Scene({triggerElement: ".chapeau", duration: $(".chapeau").height()})
    .on("enter", function (event) {
            var i = parseInt($('#trigger0').attr('id').slice(-1));
            swiper.slideTo(i+1);
            
           

            //Commented because already Burns
            //tlBurn.seek('startblink');
            // tlBurn.play();

    }).triggerHook(1)
    // .addIndicators({name: "TRIGGER CHAPEAU BACK DEBUT"})
    .addTo(controller);


    



    // TRIGGERS
    setTimeout(function() { 

        //tlScene1.restart(); //WORK !!!
        //tlScene1.seek("test"); // WORK !!!
        //=====================================================================//
        // SCENE 1 TRIGGERS
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-1, LE SLIDER EST SUR LA SLIDE 01
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-1", duration: $("#trigger-scene-1").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {   
                    
                    
                    // tlIntroAmitBlink.pause();
                    // tlIntroAmitBlink.seek('startblink');

                    // tlBurn.pause();
                    // tlBurn.seek('startburn');

                    // tlScene1.seek('start');
                    // tlScene1.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene1.tweenTo('stop1');
                }
                swiper.slideTo(2);  
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER IMG EPFL"})
            .addTo(controller);
        

       










        //=====================================================================//
        // SCENE 2 - 4è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-2", duration: $("#trigger-scene-2").height() +90 })
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    $('.troisimg').addClass('active2');
                    // tlScene2.tweenFromTo('start', 'end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene2.tweenTo('end');
                }
                swiper.slideTo(4);
            }).on("leave", function (event) {
                // tlScene2.pause();  
                // s02BlinkTl.pause();      
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER TROIS IMG"})
            .addTo(controller);

      




        var chartRendered = false;
        //=====================================================================//
        // SCENE 3 - 5è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-3", duration: $("#trigger-scene-3").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // s02BlinkTl.seek('start'); 
                    // s02BlinkTl.pause();
                    // tlScene3.seek('start');
                    // tlScene3.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene3.tweenTo('stop1');
                }
                if (!chartRendered) {
                    chartRendered = true;
                    chart.render();
                }
                //chart.render();
                swiper.slideTo(6);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 03"})
            .addTo(controller);

      

        //=====================================================================//
        // SCENE 4 - 6è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-4", duration: $("#trigger-scene-4").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // tlScene4.seek('start');
                    // tlScene4.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene4.tweenTo('stop1');
                }
                swiper.slideTo(7);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 04"})
            .addTo(controller);

      

            var chart2Rendered = false;
        //=====================================================================//
        // SCENE 5-6
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-5", duration: $("#trigger-scene-5").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // tlScene56.seek('start');
                    // tlScene56.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene56.tweenTo('stop1');
                }
                if (!chart2Rendered) {
                    chart2Rendered = true;
                    chart2.render();
                    // alert('ici render chart 2');
                }
                swiper.slideTo(11);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 05"})
            .addTo(controller);

    
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-5b", duration: $("#trigger-scene-5b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlSceneChamp.tweenTo('end');
                    // tlScene56.seek('start');
                    // tlScene56.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene56.tweenTo('stop1');
                }
                
                swiper.slideTo(19);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 05"})
            .addTo(controller);
        

        //=====================================================================//
        // SCENE 6 *NEW*
        //=====================================================================//
        
        tlSvComesIn =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            
            .fromTo($s06SvCorps, 0.25, {autoAlpha: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, transformOrigin: "right bottom"}, "+=1");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6z", duration: $("#trigger-scene-6z").height()})
            .on("enter", function (event) {
                // s0506BlinkTl.pause();
                // s0506BlinkTl.seek('startblink');
                // tlSvComesIn.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 06 Z"})
            .addTo(controller);

        

        //=====================================================================//
        // SCENE 7
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        // new ScrollMagic.Scene({triggerElement: "#trigger-scene-7", duration: $("#trigger-scene-7").height()})
        //     .on("enter", function (event) {
        //         if (event.scrollDirection === 'FORWARD') 
        //         {
        //             // s0506BlinkTl.pause();
        //             // s0506BlinkTl.seek('startblink');
        //             //alert('ici');
        //             //tlScene56.pause();
        //             // tlScene7.seek('start');
        //             // tlScene7.tweenTo('stop1');
        //         } else if (event.scrollDirection === 'REVERSE') 
        //         {
        //             // tlScene7.tweenTo('stop1');
        //         }
        //         swiper.slideTo(12);
        //     }).on("leave", function (event) {
        //         // tlScene7.pause();
        //     }).triggerHook(0.8)
        //     //.addIndicators({name: "TRIGGER SCENE 7"})
        //     .addTo(controller);


        //=====================================================================//
        // SCENE 8
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        // new ScrollMagic.Scene({triggerElement: "#trigger-scene-8", duration: $("#trigger-scene-8").height()})
        //     .on("enter", function (event) {
        //         if (event.scrollDirection === 'FORWARD') 
        //         {
        //             // tlScene8.seek('start');
        //             // tlScene8.tweenTo('stop1');
        //         } else if (event.scrollDirection === 'REVERSE') 
        //         {
        //             // s08BlinkTl.seek('startblink');
        //             // s08BlinkTl.pause();
        //             // tlScene8.tweenTo('start');
        //         //    alert('ICI');
        //         }
        //         swiper.slideTo(14);
        //     }).on("leave", function (event) {
               
        //     }).triggerHook(0.8)
        //     //.addIndicators({name: "TRIGGER SCENE 8"})
        //     .addTo(controller);

       

        //=====================================================================//
        // SCHEMA POUBELLE
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-9", duration: $("#trigger-scene-9").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    $('.socle').addClass('active');
                    tlScenePoubelle.seek('start');
                    tlScenePoubelle.tweenTo('stop1');
                
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScenePoubelle.pause().seek('stop1');
                   
                }
                swiper.slideTo(17);
            }).on("leave", function (event) {
                // if (event.scrollDirection === 'REVERSE') 
                //     {
                //         $('.socle').removeClass('active');
                //         tlScenePoubelle.tweenTo('start');
                    
                //     }
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        

        //=====================================================================//
        // SCHEMA POUBELLE 2
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-9b", duration: $("#trigger-scene-9b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // tlScenePoubelle.seek('stop1');
                    tlScenePoubelle.tweenTo('end');
                   
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(17);
            }).on("leave", function (event) {
                //tlScenePoubelle.pause();
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA SCAN
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-9c", duration: $("#trigger-scene-9c").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                   tlSceneScan.seek('start');
                   tlSceneScan.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(18);
            }).on("leave", function (event) {
                //tlScenePoubelle.pause();
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA SCAN 2
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-9d", duration: $("#trigger-scene-9d").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                //    tlSceneScan.seek('stop1');
                   tlSceneScan.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(18);
            }).on("leave", function (event) {
                //tlScenePoubelle.pause();
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);


        //=====================================================================//
        // PODIUM
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-10z", duration: $("#trigger-scene-10z").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {   
                    tlScenePodium.tweenTo('end');
                    //alert('ici');
                    // tlSceneScan.tweenTo('end');
                    // tlScene8.seek('start');
                    // tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(21);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA ASSIETTE
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-10", duration: $("#trigger-scene-10").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlSceneAssiette.seek('start');
                    tlSceneAssiette.tweenTo('stop1');
                    // tlSceneScan.tweenTo('end');
                    // tlScene8.seek('start');
                    // tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlSceneAssiette.tweenTo('stop1');
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(20);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA ASSIETTE
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-10b", duration: $("#trigger-scene-10b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    //tlSceneAssiette.seek('start');
                    tlSceneAssiette.tweenTo('stop2');
                    // tlSceneScan.tweenTo('end');
                    // tlScene8.seek('start');
                    // tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlSceneAssiette.tweenTo('stop2');
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(20);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA ASSIETTE
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-10c", duration: $("#trigger-scene-10c").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    //tlSceneAssiette.seek('start');
                    tlSceneAssiette.tweenTo('end');
                    // tlSceneScan.tweenTo('end');
                    // tlScene8.seek('start');
                    // tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlSceneAssiette.tweenTo('end');
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(20);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        //=====================================================================//
        // SCHEMA ASSIETTE
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-10d", duration: $("#trigger-scene-10d").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    //tlSceneAssiette.seek('start');
                    tlSceneAssiette.tweenTo('outro');
                    // tlSceneScan.tweenTo('end');
                    // tlScene8.seek('start');
                    // tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // s08BlinkTl.seek('startblink');
                    // s08BlinkTl.pause();
                    // tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                //alert('ici pm va $ la slide 18');
                swiper.slideTo(20);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

       

       

        // //=====================================================================//
        // // OUTRO
        // //=====================================================================//
        // // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        // new ScrollMagic.Scene({triggerElement: "#trigger-outro", duration: $("#trigger-outro").height()})
        // .on("enter", function (event) {
        //     if (event.scrollDirection === 'FORWARD') 
        //     {
        //         // s08BlinkTl.pause();
        //         // tlSceneOutro.play();
        //     } else if (event.scrollDirection === 'REVERSE') 
        //     {
               
               
        //     }
        //     swiper.slideTo(17);
        // }).on("leave", function (event) {
           
        // }).triggerHook(0.8)
        // //.addIndicators({name: "TRIGGER OUTRO"})
        // .addTo(controller);

        // //=====================================================================//
        // // END
        // //=====================================================================//
        // // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        // new ScrollMagic.Scene({triggerElement: "#trigger-end", duration: $("#trigger-end").height()})
        //     .on("enter", function (event) {
        //         if (event.scrollDirection === 'FORWARD') 
        //         {
                    
        //             // tlScene56.pause();
        //             // tlScene7.seek('start').tweenTo('stop1');
                 
        //             //s08BlinkTl.play();
        //             //tlScene8.tweenFromTo('start', 'end');
        //         } else if (event.scrollDirection === 'REVERSE') 
        //         {
        //             //tlScene7.tweenTo('stop1');
        //             //tlScene8.pause();
                   
        //         }
        //         swiper.slideTo(15);
        //     }).on("leave", function (event) {
               
        //     }).triggerHook(0.8)
        //     //.addIndicators({name: "TRIGGER END"})
        //     .addTo(controller);
        


        //=====================================================================//
        // NOTIFICATION (ANDREOLI 1) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli1"})
        //     .on("enter", function (event) {
        //         var notif = $('.notification-andreoli1');
        //         revealNotification(notif);
        //     }).on("leave", function (event) {
        //     }).triggerHook(1)
        //     //.addIndicators({name: "TRIGGER ANDREOLI 1"})
        //     .addTo(controller);
        
        //=====================================================================//
        // NOTIFICATION  (PAREIN 1) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-parein1"})
        // .on("enter", function (event) {
        //     var notif = $('.notification-parein1');
        //     revealNotification(notif);
        // }).on("leave", function (event) {
        // }).triggerHook(1)
        // //.addIndicators({name: "TRIGGER PAREIN 1"})
        // .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (ANDREOLI 2) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli2"})
        //     .on("enter", function (event) {
        //         var notif = $('.notification-andreoli2');
        //         revealNotification(notif);
        //     }).on("leave", function (event) {
        //     }).triggerHook(1)
        //     //.addIndicators({name: "TRIGGER ANDREOLI 2"})
        //     .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (TATONE 1) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-tatone1"})
        //     .on("enter", function (event) {
        //         var notif = $('.notification-tatone1');
        //         revealNotification(notif);
        //     }).on("leave", function (event) {
        //     }).triggerHook(1)
        //     //.addIndicators({name: "TRIGGER TATONE 1"})
        //     .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (ANDREOLI 3) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli3"})
        //     .on("enter", function (event) {
        //         var notif = $('.notification-andreoli3');
        //         revealNotification(notif);
        //     }).on("leave", function (event) {
        //     }).triggerHook(1)
        //     //.addIndicators({name: "TRIGGER ANDREOLI 3"})
        //     .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (TATONE 2) TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger-notif-tatone2"})
        //     .on("enter", function (event) {
        //         var notif = $('.notification-tatone2');
        //         revealNotification(notif);
        //     }).on("leave", function (event) {
        //     }).triggerHook(1)
        //     //.addIndicators({name: "TRIGGER TATONE 2"})
        //     .addTo(controller);

     
           
        //=====================================================================//
        // FOOTER TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger10"})
        //     .on("enter", function (event) {
        //         var i = parseInt($('#trigger10').attr('id').slice(-2));
        //         swiper.slideTo(i+1);
        //     }).triggerHook(0.5).addTo(controller);

        
    }, 500);


   


    //=====================================================================//
    // SCENE POUBELLE
    //=====================================================================//
    tlScenePoubelle =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $poubelle = $('.poubelle'),
    $poubelleFlash = $poubelle.find('.poubelle-flash'),
    $poubelleAssiette = $poubelle.find('.poubelle-assiette'),
    $poubelleFourchette = $poubelle.find('.poubelle-fourchette'),
    $poubellePizza = $poubelle.find('.poubelle-pizza'),
    $poubellePoulet = $poubelle.find('.poubelle-poulet'),
    $poubelleBanane = $poubelle.find('.poubelle-banane'),
    $poubelleBaril = $poubelle.find('.poubelle-baril'),
    $socle = $('#socle');

    // if ($(window).width() < 750) {
    //     //MOBILE
    //     s01Top = "35%";
    //     s01Width = "110%";
    // }
    //  else {
    //     //DESKTOP
    //     s01Top = "50%";
    //     s01Width = "50%";
    // }

    setPoubelleStage();
    function setPoubelleStage(){
        var clearPoubelleTl = new TimelineMax();
        clearPoubelleTl
            .set($poubelleBaril, { autoAlpha: 0, y: "-20px", transformOrigin: "center center" })
            .set($poubelleFlash, { autoAlpha: 0, transformOrigin: "center center" })
            // .set($poubelleFourchette, { autoAlpha: 0, x: "-20px", transformOrigin: "center center" })
            // .set($poubelleAssiette, { autoAlpha: 0, x: "-20px", transformOrigin: "center center" })
            .set($poubelleBanane, { autoAlpha: 0, transformOrigin: "center center" })
            .set($poubellePoulet, { autoAlpha: 0, transformOrigin: "center center" })
            .set($poubellePizza, { autoAlpha: 0, transformOrigin: "center center" });
            //EUX SONT DECALES A GAUCHE
            
        return clearPoubelleTl;
    }
    tlScenePoubelle
        .addLabel('start')
        .to($poubelleBaril, 1, {autoAlpha: 1, y: "+=20px"}, "+=2")
        .addLabel('stop1')
        // .to([$poubelleFourchette, $poubelleAssiette], 0.5, {autoAlpha: 1, x: "+=20px"})
        .to($poubelleBanane, 1, {autoAlpha: 1})
        // .to($poubelleFourchette, 0.5, {x: "+=20px", y: "+=30px"})
        .to($poubelleBanane, 1, {xPercent: "+=45", yPercent: "+=25"})
        // .to($poubelleFourchette, 0.5, {x: "-=20px", y: "-=30px"})
        .to($socle, 0.15, {fill: "#B5DDD1"}, "-=0.5")
        .to($socle, 1, {fill: "transparent"})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})
        
        .to($poubellePizza, 1, {autoAlpha: 1})
        // .to($poubelleFourchette, 0.5, {x: "+=20px", y: "+=30px"})
        .to($poubellePizza, 1, {xPercent: "+=45", yPercent: "+=25"})
        // .to($poubelleFourchette, 0.5, {x: "-=20px", y: "-=30px"})

        .to($socle, 0.15, {fill: "#B5DDD1"}, "-=0.5")
        .to($socle, 1, {fill: "transparent"})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})

        .to($poubellePoulet, 1, {autoAlpha: 1})
        // .to($poubelleFourchette, 0.5, {x: "+=20px", y: "+=30px"})
        .to($poubellePoulet, 1, {xPercent: "+=45", yPercent: "+=25"})
        // .to($poubelleFourchette, 0.5, {x: "-=20px", y: "-=30px"})

        .to($socle, 0.15, {fill: "#B5DDD1"}, "-=0.5")
        .to($socle, 1, {fill: "transparent"})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})
        .to($poubelleFlash, .1, {autoAlpha: 1})
        .to($poubelleFlash, .1, {autoAlpha: 0})

        // .to([$poubelleFourchette, $poubelleAssiette], 0.5, {autoAlpha: 0, x: "-=20px"}, "-=1.2")
        .addLabel('end');

        
    //=====================================================================//
    // SCENE SCAN
    //=====================================================================//
    tlSceneScan =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $scan = $('.scan'),
    $scanBaril = $scan.find('.scan-baril'),
    $scanBanane = $scan.find('.scan-banane'),
    $scanBananeBlanc = $scan.find('.scan-banane-blanc'),
    $scanPoulet = $scan.find('.scan-poulet'),
    $scanPouletBlanc = $scan.find('.scan-poulet-blanc'),
    $scanPizza = $scan.find('.scan-pizza'),
    $scanPizzaBlanc = $scan.find('.scan-pizza-blanc'),
    $scanLaptop = $scan.find('.scan-laptop'),
    $scanFleche = $scan.find('.scan-fleche'),
    $scanCheck = $scan.find('.scan-check'),
    $scanGear = $scan.find('.scan-gear'),
    $scanFleches = $scan.find('.scan-fleches'),
    $scanResultats = $scan.find('.scan-resultats');

   

    // if ($(window).width() < 750) {
    //     //MOBILE
    //     s02Top = "35%";
    // }
    //  else {
    //     //DESKTOP
    //     s02Top = "50%";
    // }


    setScanStage();
    function setScanStage(){
        var clearTl = new TimelineMax();
        clearTl
            .set($scanPouletBlanc, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanPizzaBlanc, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanBananeBlanc, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanBanane, { autoAlpha: 0, scale: 1.5, transformOrigin: "center center" })
            .set($scanPoulet, { autoAlpha: 0, scale: 1.5, transformOrigin: "center center" })
            .set($scanPizza, { autoAlpha: 0, scale: 1.5, transformOrigin: "center center" })
            .set($scanFleche, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanFleches, { autoAlpha: 0, x: "-60px", transformOrigin: "center center" })
            .set($scanLaptop, { autoAlpha: 0, xPercent: "+50", transformOrigin: "center center" })
            .set($scanGear, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanCheck, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scanResultats, { autoAlpha: 0, transformOrigin: "center center" });
            
          
        return clearTl;
        
    }
    tlSceneScan
        .addLabel('start')
        .to($scanBanane, 1, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "+=1")
        .to($scanPizza, 1, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut })
        .to($scanPoulet, 1, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut })

        // .to($scanBananeBlanc, .1, {autoAlpha: 1}, "+=1")
        // .to($scanBananeBlanc, .1, {autoAlpha: 0})
        // .to($scanBananeBlanc, .1, {autoAlpha: 1})
        // .to($scanBananeBlanc, .1, {autoAlpha: 0})

        // .to($scanPizzaBlanc, .1, {autoAlpha: 1}, "+=1")
        // .to($scanPizzaBlanc, .1, {autoAlpha: 0})
        // .to($scanPizzaBlanc, .1, {autoAlpha: 1})
        // .to($scanPizzaBlanc, .1, {autoAlpha: 0})

        // .to($scanPouletBlanc, .1, {autoAlpha: 1}, "+=1")
        // .to($scanPouletBlanc, .1, {autoAlpha: 0})
        // .to($scanPouletBlanc, .1, {autoAlpha: 1})
        // .to($scanPouletBlanc, .1, {autoAlpha: 0})


        .to($scanBaril, 0.5, {autoAlpha: 0, xPercent: "-50"}, "+=1")
        .to($scanLaptop, 0.5, {autoAlpha: 1, xPercent: "0"})
        .to([$scanPoulet, $scanBanane, $scanPizza, $scanBananeBlanc, $scanPizzaBlanc, $scanPouletBlanc], 1.5, { scale: 0.58, rotate: +720}, "-=1")
        .addLabel('stop1')
        .to($scanBananeBlanc, .1, {autoAlpha: 1}, "+=1")
        .to($scanBananeBlanc, .1, {autoAlpha: 0})
        .to($scanBananeBlanc, .1, {autoAlpha: 1})
        .to($scanBananeBlanc, .1, {autoAlpha: 0})

        .to($scanPizzaBlanc, .1, {autoAlpha: 1}, "+=1")
        .to($scanPizzaBlanc, .1, {autoAlpha: 0})
        .to($scanPizzaBlanc, .1, {autoAlpha: 1})
        .to($scanPizzaBlanc, .1, {autoAlpha: 0})

        .to($scanPouletBlanc, .1, {autoAlpha: 1}, "+=1")
        .to($scanPouletBlanc, .1, {autoAlpha: 0})
        .to($scanPouletBlanc, .1, {autoAlpha: 1})
        .to($scanPouletBlanc, .1, {autoAlpha: 0})
        
        .to([$scanPoulet, $scanBanane, $scanPizza], 1, { autoAlpha: 0}, "+=1")

        .to($scanGear, 1, {autoAlpha: 1, ease: "none"}, "-=0.5")
        .to($scanGear, 4, {rotate: +180, ease: "none"}, "-=1")

        .to($scanGear, .5, {autoAlpha: 0})
        .to($scanCheck, .5, {autoAlpha: 1})

        .to([$scanLaptop, $scanCheck], .5, {scale: 0.5, xPercent: "-50", ease: Power4.easeInOut}, "+=1")
        .to($scanFleches, .5, {autoAlpha: 1, x: "-30px", ease: Power4.easeInOut})
        .to($scanResultats, .5, {autoAlpha: 1, ease: "none"})

        .addLabel('end');

        
   

    //=====================================================================//
    // SCENE CHAMPS
    //=====================================================================//
    tlSceneChamp =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $champ = $('.champ'),
    $bles = $champ.find('.ble'),
    $blesMorts = $champ.find('.ble-mort'),
    $blesMortsPaths = $blesMorts.find('path')
    $txtConsomme = $champ.find('#txt-consomme')
    $txtJete = $champ.find('#txt-jete');
    
    // if ($(window).width() < 750) {
    //     s03Top = "35%";
    // }
    //  else {
    //     s03Top = "50%";
    // }
    
    setChampStage();
    function setChampStage(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($bles, { autoAlpha: 0, scale: 0.01, transformOrigin: "center bottom" })
            .set([$txtConsomme, $txtJete], { autoAlpha: 0, transformOrigin: "center bottom" });
            
            
          
        return clearTl;
        
    }

    tlSceneChamp
        .addLabel('start')
        .to($bles, 0.3, { autoAlpha: 1, scale: 1, stagger: 0.015 })
        .to($txtConsomme, 0.5, { autoAlpha: 1})
        //.to($blesMorts, 0.5, { autoAlpha: 1, scale: 1, stagger: 0.025 })
        //.to($blesMortsPaths, 10, { fill: '#A329FD', stagger: 0.025 })
        .to($blesMortsPaths, 1, { fill: '#FD5A29', stagger: {
            amount: 3,
            from: "random" 
          } })
          .to($txtJete, 0.5, { autoAlpha: 1}, "-=2")
        //.to($blesMorts, 10, { scale: 0.25, stagger: 0.75 }, "-=10")
        .addLabel('end');

    
    //=====================================================================//
    // SCENE ASSIETTE
    //=====================================================================//
    tlSceneAssiette =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $assiette = $('.assiette'),
    $pea5 = $assiette.find('.pea5'),
    $pea4 = $assiette.find('.pea4'),
    $pea3 = $assiette.find('.pea3'),
    $pea2 = $assiette.find('.pea2'),
    $pea1 = $assiette.find('.pea1'),
    $egg = $assiette.find('.egg'),
    $tomate1 = $assiette.find('.tomate1'),
    $legume1 = $assiette.find('.legume1'),
    $legume2 = $assiette.find('.legume2'),
    $quartier1 = $assiette.find('.quartier1'),
    $quartier2 = $assiette.find('.quartier2'),
    $saucisse1 = $assiette.find('.saucisse1');

    
    // if ($(window).width() < 750) {
    //     //MOBILE
    //     s04Top = "35%";
    //     s04Width = "80%";
    // }
    //  else {
    //     //DESKTOP
    //     s04Top = "50%";
    //     s04Width = "50%";
    // }
    
    setStageAssiette();
    function setStageAssiette(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($pea5, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($pea4, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($pea3, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($pea2, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($pea1, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($egg, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($tomate1, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($legume1, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($legume2, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($quartier1, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($quartier2, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" })
            .set($saucisse1, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" });
            
           
          
         return clearTl;
        
     }

    tlSceneAssiette
        .addLabel('start')
        .to($pea5, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut })
        .to($pea4, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($pea3, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($pea2, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($pea1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($egg, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($tomate1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($legume1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($legume2, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($quartier1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($quartier2, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .to($saucisse1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, "-=0.45")
        .addLabel('stop1')
        .to($saucisse1, 1, { xPercent: "+5", yPercent: "-20", autoAlpha: 0, ease: Power4.easeInOut })
        .to($quartier2, 1, { xPercent: "-10", yPercent: "-15", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        .to($legume2, 1, { xPercent: "+20", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        .to($tomate1, 1, { xPercent: "-20", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        .to($pea1, 1, { xPercent: "-10", yPercent: "+10", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8") 
        .to($pea5, 1, { xPercent: "-10", yPercent: "-10", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        // .to([$saucisse1, $quartier2, $legume2, $tomate1, $pea4, $pea5], 1.5, { autoAlpha: 0, ease: Power4.easeInOut })
        .addLabel('stop2')
        .to($egg, 1, { xPercent: "+5", yPercent: "+20", autoAlpha: 0, ease: Power4.easeInOut })
        .to($legume1, 1, { xPercent: "-2", yPercent: "-15", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        // .to($pea4, 1, { xPercent: "-10", yPercent: "-15", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8")
        .to($pea2, 1, { xPercent: "-10", yPercent: "+15", autoAlpha: 0, ease: Power4.easeInOut }, "-=0.8") 
        .addLabel('end')
        .to($pea4, 1, { xPercent: "+24", yPercent: "+25", autoAlpha: 1, ease: Power4.easeInOut }, "+=0.8") 
        .to($pea3, 1, { xPercent: "+38", yPercent: "-37", autoAlpha: 1, ease: Power4.easeInOut }, "-=1") 
        .to($quartier1, 1, { xPercent: "-35", yPercent: "+15", rotate: 38, autoAlpha: 1, ease: Power4.easeInOut }, "-=1") 
        
        .addLabel('outro');
        
    //=====================================================================//
    // SCENE PODIUM
    //=====================================================================//
    tlScenePodium =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    // $s0506 = $('.s0506');
    $podium = $('.podium'),
    $podiumRizItem = $podium.find('.podium-riz-item'),
    $podiumRizCouvercle = $podium.find('.podium-riz-couvercle'),
    $podiumRizBac = $podium.find('.podium-riz-bac'),
    $podiumRizTxt = $podium.find('.podium-riz-txt'),
    $podiumPatesItem = $podium.find('.podium-pates-item'),
    $podiumPatesCouvercle = $podium.find('.podium-pates-couvercle'),
    $podiumPatesBac = $podium.find('.podium-pates-bac'),
    $podiumPatesTxt = $podium.find('.podium-pates-txt'),
    $podiumPainItem = $podium.find('.podium-pain-item'),
    $podiumPainCouvercle = $podium.find('.podium-pain-couvercle'),
    $podiumPainBac = $podium.find('.podium-pain-bac'),
    $podiumPainTxt = $podium.find('.podium-pain-txt');

    setStagePodium();
    function setStagePodium(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($podiumPatesCouvercle, { transformOrigin: "right center" })
            .set($podiumPatesItem, { yPercent: "+=40", transformOrigin: "center center" })
            .set($podiumPainCouvercle, { transformOrigin: "left center" })
            .set($podiumPainItem, { yPercent: "+=28", transformOrigin: "center center" })
            .set($podiumRizCouvercle, { transformOrigin: "center center" })
            .set($podiumRizItem, { yPercent: "+=40", transformOrigin: "center center" })
            .set($podiumPatesTxt, { autoAlpha: 0, transformOrigin: "center center" })
            .set($podiumRizTxt, { autoAlpha: 0, transformOrigin: "center center" })
            .set($podiumPainTxt, { autoAlpha: 0, transformOrigin: "center center" });
        return clearTl;
     }

    tlScenePodium
        .addLabel('start')
        .to($podiumPainCouvercle, 1, { autoAlpha: 0, rotate: -30, xPercent: "-10", ease: Power4.easeInOut }, "+=1")
        .to($podiumPainItem, 1, { yPercent: "-=28", ease: Power4.easeInOut }, "-=0.5")
        .to($podiumPainCouvercle, 1, { autoAlpha: 1, rotate: 0, xPercent: "0", ease: Power4.easeInOut }, "-=0.5")
        .to($podiumPainTxt, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5") 

        .to($podiumPatesCouvercle, 1, { autoAlpha: 0, rotate: +30, xPercent: "+10", ease: Power4.easeInOut }, "+=1")
        .to($podiumPatesItem, 1, { yPercent: "-=40", ease: Power4.easeInOut }, "-=0.5")
        .to($podiumPatesCouvercle, 1, { autoAlpha: 1, rotate: 0, xPercent: "0", ease: Power4.easeInOut }, "-=0.5")
        .to($podiumPatesTxt, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5") 

        .to($podiumRizCouvercle, 0.05, { rotate: +3 }, "+=1")
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })
        .to($podiumRizCouvercle, 0.05, { rotate: +3 })
        .to($podiumRizCouvercle, 0.05, { rotate: -3 })

        .to($podiumRizCouvercle, 1, { autoAlpha: 0, rotate: +720, yPercent: "-100" })
        .to($podiumRizItem, 1, { yPercent: "-=40", ease: Power4.easeInOut }, "-=0.5")
        .to($podiumRizCouvercle, 1, { autoAlpha: 1, rotate: +15, xPercent: "-5", yPercent: "+50", scale: 1.2, ease: Power4.easeInOut }, "-=0.5")
        .to($podiumRizTxt, 1, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5") 
        //WALK IN
       
        .addLabel('end');
    //     //EYES MOVEMENTS
    //     .to($s0506AmitArrow, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
    //     .to($s0506AmitArrow, 3, { autoAlpha: 0, ease: Power4.easeInOut })

    //     //EYES MOVES
    //     .to($s0506AmitPupilles, 0, { x: "-=5px", ease: Power4.easeInOut }, "-=2")
    //     .to($s0506AmitPupilles, 0, { x: "+=10px", ease: Power4.easeInOut }, "+=1")

    //     //EYES MOVES
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
    //     .to($s0506AmitPupilles, 0, { x: "-=5px", ease: Power4.easeInOut })

    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.5")
    //     // .add(s0506BlinkTl, "+=2.25")
    //     .addLabel('stop1')

    //     .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
    //     .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.1")

    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1.5")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .addLabel('stop2')

    //     // RESET AMIT ELEMS
    //     .to($s0506AmitElems, 1, { autoAlpha: 0, ease: Power4.easeInOut })
    //     .to($s0506AmitElems, 0, {  scale: 1, yPercent: "-=10", ease: Power4.easeInOut })
    //     .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 1, ease: Power4.easeInOut })
    //     .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 0, ease: Power4.easeInOut })
    //     .to($s0506AmitFond, 0, {  autoAlpha: 1, ease: Power4.easeInOut })

    //     .to($s0506Smilingvilain, 1, { autoAlpha: 1, ease: Power4.easeInOut })
    //     .to($s0506AmitElems, 0, { autoAlpha: 1, transformOrigin: "left top", ease: Power4.easeInOut })

    //     .addLabel('stop3')

    //     .to($s0506AmitElems, 0.5, { scale: 0.68, x: "-=30px", y: "-=30px", ease: Power4.easeInOut })
    //     .to($s0506SmilingvilainElems, 0.5, { scale: 0.68, x: "+=30px", y: "+=30px", ease: Power4.easeInOut }, "-=0.5")

    //     .addLabel('stop4')

    //     .to($s0506Explosion1, 0.25, { autoAlpha: 1, ease: Power4.easeInOut })
    //     .to($s0506Explosion2, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion3, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion4, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion5, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion6, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion7, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion8, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion9, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion10, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion11, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion12, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")

    //     .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 1, ease: Power4.easeInOut })
    //     .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 0, ease: Power4.easeInOut })

    //     .to($s0506Explosion1, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.75")
    //     .to($s0506Explosion2, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion3, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion4, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion5, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion6, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion7, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion8, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion9, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion10, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion11, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
    //     .to($s0506Explosion12, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")

    //     .to($s0506Smilingvilain, 0.5, { autoAlpha: 0.25, ease: "none" }, "-=0.75")
    //     .to($s0506Smilingvilain, 0.5, { autoAlpha: 1, ease: "none" })
    //     .to($s0506Smilingvilain, 0.5, { autoAlpha: 0.25, ease: "none" })
    //     .to($s0506Smilingvilain, 0.5, { autoAlpha: 1, ease: "none" })
    //     .to($s0506Smilingvilain, 0.5, { autoAlpha: 0, ease: "none" })
        
    //     .to($s0506SmilingvilainGone, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=0.75")

    //     .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 0, ease: Power4.easeInOut })
    //     .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 1, ease: Power4.easeInOut})
              
       
    //     .addLabel('end');

    // var s0506BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
    //     // BLINK MOTHER FUCKER
    //     .addLabel('startblink')
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=5.5")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
    //     .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
    //     .addLabel('endblink');
    
    // // function playBlinks056(){
    // //     s0506BlinkTl.play();
    // // }

    // if ($(window).width() < 750) {
    //     //MOBILE
    //     //s05Top = "35%";
    //     s05Width = "70%";
    // }
    //  else {
    //     //DESKTOP
    //     //s05Top = "50%";
    //     s05Width = "50%";
    // }
    
    // setStage56();
    // function setStage56(){
    //     //alert('RESET');
    //     var clearTl = new TimelineMax();
    //     clearTl
    //         .set($s0506, { autoAlpha: 1, width: s05Width, left:"50%", top:"30%",  scale: 1, xPercent: -50, yPercent: -50, transformOrigin: "center center" })
    //         .set($s0506AmitElems, { autoAlpha: 0, scale: 1.5, yPercent: "+=20", transformOrigin: "center center" })
    //         .set($s0506AmitFond, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506AmitArrow, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506AmitYeuxOuvertsGrands, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506AmitYeuxFermes, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion1, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion2, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion3, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion4, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion5, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion6, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion7, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion8, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion9, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion10, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion11, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506Explosion12, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506SmilingvilainElems, { transformOrigin: "right bottom" })
    //         .set($s0506Smilingvilain, { autoAlpha: 0, transformOrigin: "center center" })
    //         .set($s0506SmilingvilainGone, { autoAlpha: 0, transformOrigin: "center center" });
            
           
           
          
    //     return clearTl;
        
    // }

    //=====================================================================//
    // SCENE 6
    //=====================================================================//
    tlScene6 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });


    

    if ($(window).width() < 750) {
        //MOBILE
        $s06AmitCorps = $('.s06-amit-medaillon');
        $s06SvCorps = $('.s06-smilingvilain-medaillon');
        $s06SvGone = $('.s06-smilingvilain-gone-medaillon');
    }
     else {
        //DESKTOP
        $s06AmitCorps = $('.s06-amit-corps');
        $s06SvCorps = $('.s06-smilingvilain');
        $s06SvGone = $('.s06-smilingvilain-gone');
    }


    $s06AmitCorpsMedaillon = $('.s06-amit-corps-medaillon');
    $s06AmitPupilles = $('.s06-amit-pupilles');
    $s06AmitYeuxOuvertsGrands = $('.s06-amit-yeux-ouverts-grands');
    $s06AmitYeuxOuverts = $('.s06-amit-yeux-ouverts');
    $s06AmitYeuxFermes = $('.s06-amit-yeux-fermes');
    
    
    
    if ($(window).width() < 750) {
        //MOBILE
        s06AmitXPercent = -80;
        s06AmitHeight = "45%";
        s06SvXPercent = -23;
        s06SvHeight = "45%";
    }
     else {
        //DESKTOP
        s06AmitXPercent = -50;
        s06AmitHeight = "100%";
        s06SvXPercent = -50;
        s06SvHeight = "100%";
    }

    setStage6();
    function setStage6(){
        var clearTl = new TimelineMax();
        clearTl
            .set($s06AmitCorps, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitPupilles, { autoAlpha: 1, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxOuvertsGrands, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxOuverts, { autoAlpha: 1, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxFermes, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            
            .set($s06SvCorps, { autoAlpha: 1, height: s06SvHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06SvXPercent, transformOrigin: "center center" })
            .set($s06SvGone, { autoAlpha: 0, height: s06SvHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06SvXPercent, transformOrigin: "center center" });
            
           
      
        return clearTl;
    }


   

    //=====================================================================//
    // SCENE 7
    //=====================================================================//
    tlScene7 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s07 = $('.s07');
    $s07Marche1 = $s07.find('.s07-marche1');
    $s07Marche2 = $s07.find('.s07-marche2');
    $s07Marche3 = $s07.find('.s07-marche3');
    $s07Marche4 = $s07.find('.s07-marche4');
    $s07Marche5 = $s07.find('.s07-marche5');
    $s07Marche6 = $s07.find('.s07-marche6');
    $s07Marche7 = $s07.find('.s07-marche7');
    $s07Marche7Yeux = $s07.find('.s07-marche7-yeux');
    $s07Marche7RireTop = $s07.find('.s07-marche7-rire-top');
    $s07Marche7RireBottom = $s07.find('.s07-marche7-rire-bottom');

    
    if ($(window).width() < 750) {
        //MOBILE
        s07Top = "30%";
        s07Width = "80%";
    }
     else {
        //DESKTOP
        s07Top = "50%";
        s07Width = "80%";
    }
    
    
    setStage7();
    function setStage7(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s07, { autoAlpha: 0, width: s07Width, left:"50%", top:s07Top,  scale: 1, xPercent: -50, yPercent: -50, x: "-=50px", transformOrigin: "center center" })
            .set($s07Marche1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7Yeux, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7RireTop, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7RireBottom, { autoAlpha: 0, transformOrigin: "center center" });
            
           
          
        return clearTl;
        
    }

    tlScene7
        .addLabel('start')
        .to($s07, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")

        //SOURIT
        .to($s07Marche7RireTop, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s07Marche7RireTop, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=1.5")
        
        //MOVE RIGHT
        .to($s07, 2, { x: "+=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "-=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "+=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "-=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "+=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "-=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "+=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "-=5px" }, "-=0.2")
        
        //BLINK
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

        //MOVE RIGHT 2
        .to($s07, 2, { x: "+=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "+=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "-=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "+=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "-=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "+=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "-=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "+=5px" }, "-=0.2")

        //BLINK 2
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

        .addLabel('stop1')
        
        //TURN
        .to($s07, 0.5, { rotationY: 180 }, "+=1")

        //MOVE LEFT
        .to($s07, 2, { x: "-=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "-=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "+=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "-=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "+=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "-=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "+=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "-=5px" }, "-=0.2")

        .addLabel('stop2')

        //TURN
        .to($s07, 0.5, { rotationY: 0 }, "+=1")

        //BLINK 3
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

         //SOURIT
         .to($s07Marche7RireTop, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")

         .addLabel('end');

    //=====================================================================//
    // SCENE 8
    //=====================================================================//
    tlScene8 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s08 = $('.s08');
    $s08Marche1 = $s08.find('.s08-marche1');
    $s08Marche2 = $s08.find('.s08-marche2');
    $s08Marche3 = $s08.find('.s08-marche3');
    $s08Marche4 = $s08.find('.s08-marche4');
    $s08Marche5 = $s08.find('.s08-marche5');
    $s08Marche6 = $s08.find('.s08-marche6');
    $s08Marche7 = $s08.find('.s08-marche7');
    $s08Marche7Yeux = $s08.find('.s08-marche7-yeux');
    $s08Marche7Moustache1 = $s08.find('.s08-marche7moustache1');
    $s08Marche7Moustache2 = $s08.find('.s08-marche7moustache2');
    $s08Marche7Moustache3 = $s08.find('.s08-marche7moustache3');
    $s08Marche7Moustache4 = $s08.find('.s08-marche7moustache4');
    $s08Marche7Moustache5 = $s08.find('.s08-marche7moustache5');

    if ($(window).width() < 750) {
        //MOBILE
        s08Top = "30%";
        s08Width = "90%";
    }
     else {
        //DESKTOP
        s08Top = "50%";
        s08Width = "60%";
    }
    
    setStage8();
    function setStage8(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s08, { autoAlpha: 1, width: s08Width, left:"50%", top: s08Top,  scale: 0.25, xPercent: -50, yPercent: -60, transformOrigin: "center center" })
            .set($s08Marche2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Yeux, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache5, { autoAlpha: 0, transformOrigin: "center center" });
            
    }

    var duration = 2; // Calculate the duration
    //  "-=" + ((duration / 12)) * 11

    tlScene8
        .addLabel('start')
        .to($s08, duration, { scale: 0.35, ease: Power1.easeInOut })

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 12)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 12)
        
        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 11)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 11)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 10)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 10)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 9)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 9)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 8)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 8)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 7)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 7)
        
        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 6)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 6)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 5)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 5)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 4)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 4)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 3)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 3)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 2)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 2)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 1)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 1)
        .addLabel('test')
        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" })
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" })

        .addLabel('stop1')
        //.to($s08, 0.25, { scale: 0.35, ease: Power1.easeInOut })
        .to($s08, 2, { scale: 0.6, ease: Power1.easeInOut })

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 14)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 14)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 13)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 13)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 12)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 12)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 11)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 11)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 10)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 10)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 9)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 9)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 8)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 8)

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 7)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 7)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 6)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 6)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 5)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 5)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 4)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 4)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 3)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 3)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 2)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 2)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        
       
        .addLabel('stop2')

        .to($s08, duration, { scale: 1, ease: Power1.easeInOut })

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 14)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 14)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 13)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 13)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 12)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 12)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 11)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 11)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 10)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 10)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 9)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 9)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 8)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 8)

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 7)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 7)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 6)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 6)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 5)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 5)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 4)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 4)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 3)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 3)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 2)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 2)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 1)

        .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")

        .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .addLabel('end');

    var s08BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
        // BLINK MOTHER FUCKER
        .addLabel('startblink')
        .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=2")
        .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
        .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .addLabel('endblink');
        
        // .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        // .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        // .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        // .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        

    // function playBlinks08(){
    //     s08BlinkTl.seek('startblink');
    //     s08BlinkTl.play();
    // }

   

   



    // var s08BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
    //     .addLabel('startblink')
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=2")
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
    //     .addLabel('endblink');

    // function playBlinks08(){
    //     s08BlinkTl.seek('startblink');
    //     s08BlinkTl.play();
    // }
        

  

   

   
  
    if ($(window).width() < 450) {
        legendSize = "12px";
        chartHeight = "300";
        chart2Height = "250";
    }
     else {
        legendSize = "16px";
        chartHeight = "500";
        chart2Height = "500";
    }
  




    

    var options = {
        series: [13, 10, 8, 35, 34],
        chart: {
        width: "100%",
        height: chartHeight,
        type: 'donut',
      },
      stroke: {
        colors: [colorBg2],
        width: 1,
      },
      
      plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            }, 
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: false,
                name: {
                  show: false,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  
                },
                value: {
                  show: false,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: 'red',
                  
                }
              }
            },      
          }
       
      },
      legend: {
        fontSize: legendSize,
        position: 'bottom',
        offsetY: 10,
        labels: {
            colors: 'undefined',
            useSeriesColors: true,
        },
        
        },
      colors: [color, '#29C4FD', '#2962FD', '#6A29FD', '#A329FD', '#FD29CC'],
      labels: ['Alimentation <b>(2343 t.)</b>', 'Numérique <b>(2939 t.)</b>', 'Mobilité pendulaire <b>(3753 t.)</b>', "Voyages professionnels <b>(13'684 t.)</b>", 'Electricité <b>(8732 t.)</b>'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            fontSize: legendSize,
              show: true,
              position: 'bottom'
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
    //   chart.render();







    var options2 = {
        series: [{
            name: 'Agriculture',
            data: [197]
        }, {
            name: 'Transformation',
            data: [1205]
        }, {
            name: 'Commerce de gros et de détail',
            data: [279]
        }, {
            name: 'Restauration',
            data: [210]
        }, {
            name: 'Ménages',
            data: [778]
        }],
        chart: {
            type: 'bar',
            width: "100%",
            height: chart2Height,
            stacked: true,
            toolbar: {
                show: false // Disable the hamburger menu
            },
            zoom: {
                enabled: false
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    fontSize: legendSize,
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '16px',
                            fontWeight: 900,
                            color: '#fff'
                        },
                        formatter: function (val) {
                            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
                        }
                    }
                }
            },
        },
        xaxis: {
            categories: ['Pertes alimentaires évitables en Suisse (milliers de tonnes)'],
            axisBorder: {
                show: false, // should show the X axis border, a big one
                color: colorBg1,
                height: 1,
                width: "100%",
                offsetY: -1,
            },
            labels: {
                show: false, // Hide x-axis labels
                style: {
                    colors: [colorBg1],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-title',
                },
                rotate: -45,
                maxHeight: 100
            }
        },
        grid: {
            show: true,
            borderColor: colorBg1,
            // row: {
            //     colors: [colorBg2, colorBg2, colorBg2]
            // }
        },
        yaxis: {
            labels: {
                show: true, // Hide x-axis labels
                style: {
                    colors: colorBg1,
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                },
                formatter: function (val, index) {
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
                },
                maxHeight: 100
            }
        },
        legend: {
            position: 'bottom',
            offsetY: 10,
            fontSize: '16px',
            labels: {
                colors: undefined,
                useSeriesColors: true
            },
            
        },
        fill: {
            opacity: 1
        },
        colors: ['#29C4FD', '#2962FD', '#FD29CC', color, '#A329FD'] // Different grey values
        // colors: ['#205888', '#582188', '#909090', color, '#707070'] // Different grey values
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    // chart2.render();








    // var options = {
    //     series: [
    //     {
    //       data: [
    //         {
    //           x: 'Consommé',
    //           y: 53
    //         },
    //         {
    //           x: 'Jeté',
    //           y: 47
    //         }
    //       ]
    //     }
    //   ],
    //     legend: {
    //     show: false
    //   },
    //   chart: {
    //     height: 350,
    //     type: 'treemap'
    //   },
    //   title: {
    //     text: 'Treemap with Color scale'
    //   },
    //   dataLabels: {
    //     enabled: true,
    //     style: {
    //       fontSize: '12px',
    //     },
    //     formatter: function(text, op) {
    //       return [text, op.value]
    //     },
    //     offsetY: -4
    //   },
    //   plotOptions: {
    //     treemap: {
    //       enableShades: true,
    //       shadeIntensity: 0.5,
    //       reverseNegativeShade: true,
    //       colorScale: {
    //         ranges: [
    //           {
    //             from: -6,
    //             to: 0,
    //             color: '#CD363A'
    //           },
    //           {
    //             from: 0.001,
    //             to: 6,
    //             color: '#52B12C'
    //           }
    //         ]
    //       }
    //     }
    //   }
    //   };

    //   var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
    //   chart3.render();

   
    

})(jQuery);