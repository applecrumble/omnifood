$(document).ready(function () {	
	
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {     /* direction detects whether the user is scrolling down or up */
        if (direction == "down") {
            $('nav').addClass('sticky');      /* jQuery method */
        } 
        else {
            $('nav').removeClass('sticky');   /* jQuery method */
        }
    }, {
      offset: '60px'        /* make our function trigger 60 px before the “section-features” appears on scrolling */
    }); 


    /* Scroll on buttons */
     $('.js--scroll-to-plans').click(function() {
     	$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); /* jQuery method which sets or returns the vertical scrollbar position*/
     });  /* 1000 milliseconds = 1 second */ /* scrolls to the top of selected section in 1 second */

     $('.js--scroll-to-start').click(function() {
     	$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });


    /* Navigation scroll */       /* a snippet from css-tricks.com */
    $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {         /* the if statement in JavaScript returns true for any number greater (or less) than zero */
            $('html,body').animate({
              scrollTop: target.offset().top /* scroll to the top of the element (in our case a section) with the speed of 1 second */
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animation on scroll */
    $('.js--wp-1').waypoint(function (direction) {          /* no scroll up and down for direction, will happen only once */
        $('.js--wp-1').addClass('animated fadeIn');         /* features fade in */
    },{
        offset: '50%'    /* triggers when it hits half of the page */
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');       /* mobile phone smoothly comes up */
    },{
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');         /* cities fade in */
    },{
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');                /* define a variable to not repeat code again and again */
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);                        /* this jQuery method opens and closes a box on 200 miliseconds*/
        if (icon.hasClass('ion-navicon-round')) {    /* if our icon is the one by the default (three lines) */
            icon.addClass('ion-close-round');        /* then change its appearance to the cross by changing its style */
            icon.removeClass('ion-navicon-round');   /* and remove the default style */
        } else {
            icon.addClass('ion-navicon-round');      /* if its the other way round, use the default style again */
            icon.removeClass('ion-close-round');     /* and remove the cross */
        }
    });

    /* Maps */

    var map = new GMaps({        /* define variable to apply a marker method later */
      div: '.map',         
      lat: 41.9097306,           
      lng: 12.2558141,
      zoom: 11,                  /* 15 by default */
    });
    
    map.addMarker({
      lat: 41.88106,
      lng: 12.5658696,
      title: 'Rome',
      infoWindow: {
      	content: '<p>Our Rome Headquarter</p>'
        }
    });

});

