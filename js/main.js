'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Owl Carousel
    --------------------*/
    $('.slider-list').owlCarousel({
        loop: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 30,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    /*------------------
        WoW
    --------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         false        // default
      }
    )
    wow.init();

})(jQuery);