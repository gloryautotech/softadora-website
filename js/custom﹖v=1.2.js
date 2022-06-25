/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Hide Menu
4.Accordion
5.Header
6.Magnific Popup
7.Countdown
8.Search Style
9.Wow Animation
10.Panorama Animation
11.Fullpage Viewer
12.Owl Carousel
13.Contact From
14.Bootstrap Carousel and Animate.css
15.mobile tab
------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
        1 Page Loader
        --------------------------*/
    
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");

    if ($("#scene").length) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }


    /*------------------------
    4 Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });


    /*------------------------
    5 swiperdemo
    --------------------------*/
    function swiperdemo() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true,
        });
    }
    swiperdemo();
    $('#myTab li.nav-item a').click(function() {

        $('#myTab li a.active').removeClass('active');
        $(this).parent('li a').addClass('active');
        swiperdemo();

    });



    /*------------------------
    6 Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //     type: 'iframe',
    //     disableOn: 700,
    //     mainClass: 'mfp-fade',
    //     preloader: false,
    //     removalDelay: 160,
    //     fixedContentPos: false
    // });


     /*Freshchat*/
/*          window.fcWidget.init({
          token: "2171c89a-fe35-40b7-8b98-5e4393596cfb",
          host: "https://wchat.freshchat.com"
        });*/
        
      /*Tawk.to
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5cc03487c1fe2560f3004f52/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();*/  
      
      /*Freshchat*/
//       function initFreshChat() {
//         window.fcWidget.init({
//         token: "d3cae5fa-3675-4cf1-bdd8-e096122f369a",
//         host: "https://wchat.freshchat.com"
//         });
//     }
//   function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);

    /*------------------------
        8 section
        --------------------------*/
    if(document.getElementById('fullpage')){
        var myFullpage_home = new fullpage('#fullpage', {
            // anchors: ['home', 'about','service-1', 'service-2', 'portfolio', 'clients', 'technology', 'contact-us', 'quick-links', 'reachus'],
            navigation: false,
            // menu: "#menu",
            responsiveWidth: 992,
            scrollBar: true,
            parallax: true,
            onLeave: function(origin, destination, direction) {
                var element = document.querySelector('body');
                var stringClass = "nav-active";
                if (element.classList.contains(stringClass))
                    element.classList.remove(stringClass);
                console.log("Leaving section" + origin.index);
            },
            credits: {enabled: false}
    
        });
    } else {
        var myFullpage = new fullpage('#fullpage-inner', {
            responsiveWidth: 992,
            scrollBar: true,
            parallax: true,
            onLeave: function(origin, destination, direction) {
                var element = document.querySelector('body');
                var stringClass = "nav-active";
                if (element.classList.contains(stringClass))
                    element.classList.remove(stringClass);
                console.log("Leaving section" + origin.index);
            },
            
        });
    }


    /*------------------------
    Wow Animation
    --------------------------*/
    new WOW().init();

    /*------------------------
    Button Navigation
    --------------------------*/
    var target = window.location.hash;

    if ( target != '' ){
        var $target = jQuery(target); 
        $('html, body').animate({
        scrollTop: $target.offset().top - 50
    },2000,'swing');
    }
    $("#port").click(function (){
        // alert('fdd');
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 50
        }, 3000);
    });
    $("#serve").click(function (){
        // alert('fdd');
        $('html, body').animate({
            scrollTop: $("#services").offset().top - 50
        }, 3000);
    });

});

console.clear();

const app = (() => {
    let body;
    let menu;
    let menuItems;

    const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');

        applyListeners();
    };

    const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    };

    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else

            element.classList.add(stringClass);
    };

    init();
})();