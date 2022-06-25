"use strict";

/*************************
page loader
*************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut();

}

/*************************
Back to top
*************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}


/*************************
hidemenu
*************************/
function hidemenu() {
    $(document).ready(function() {
        $(".navbar a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });
}


/*************************
Header
*************************/
function header() {
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
}


/*************************
owl-carousel 
*************************/
function owlcarousel() {
    $(".owl-carousel").each(function() {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: {
                    items: $this.data('xx-items') ? $this.data('xx-items') : 1
                },
                600: {
                    items: $this.data('xs-items') ? $this.data('xs-items') : 1
                },
                767: {
                    items: $this.data('sm-items') ? $this.data('sm-items') : 2
                },
                992: {
                    items: $this.data('md-items') ? $this.data('md-items') : 2
                },
                1190: {
                    items: $this.data('lg-items') ? $this.data('lg-items') : 3
                },
                1200: {
                    items: $items
                }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
        });

    });

}


/*************************
Searchstyle Bar
*************************/
function searchstyle() {
    // search 2
    $(".iq-search").on('click', function() {
        $(".search-open").fadeIn(500);
    });
    $(".search-close").on('click', function() {
        $(".search-open").fadeOut(500);
    });
    // search-2
    if (jQuery('.iq-search').size() > 0) {
        jQuery('.search-btn').on("click", function() {
            jQuery('.iq-search').toggleClass("search-open");
            return false;
        });
        jQuery("html, body").on('click', function(e) {
            if (!jQuery(e.target).hasClass("not-click")) {
                jQuery('.iq-search').removeClass("search-open");
            }
        });
    }

}


/*************************
Wow Animation
*************************/
function wowanimation() {
    new WOW().init();
}


/*************************
Bootstrap Carousel and Animate.css
*************************/
function bootstrapanimate() {
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";
        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }
    //Variables on page load
    var $myCarousel = $("#carouselExampleControls, #carouselExampleControlss"),
        $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");
    //Initialize carousel
    $myCarousel.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
    });
}


/*************************
  Get In Touch from
*************************/
function getInTouchfrom() {
    $('#get_in_touch').on('click',function(e) {
        var email=$("#get_in_touch_email").val(); 
        var name=$("#get_in_touch_name").val(); 
        if(email!="" && name!=""){
            $.ajax({
                    url: '/voice-agency-india/php/contact-form.php',
                    type: 'POST',
                    data: $("#get_in_touch_form").serialize(),
                })
                .done(function(data) {
                    alert('Thank you for reaching us. We will get back to you as soon as possible.');
                    $('#get_in_touch_form')[0].reset();
                })
                .fail(function() {
                    alert('Form submission failed. Please reach us at sales@twowords.io ');
            });
        }
        else{
            alert('Both fields are required ...');
        }
    });
}


/*************************
All function are called here 
*************************/
$(document).ready(function() {
    preloader(),
        backtotop(),
        owlcarousel(),
        searchstyle(),
        hidemenu(),
        bootstrapanimate(),
        header();
        getInTouchfrom();
});


$(window).on('load', function() {

    wowanimation();
});