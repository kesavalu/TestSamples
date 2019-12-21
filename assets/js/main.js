jQuery(function ($) {
function checkScrollBar() {
    var hContent = $("body").height(); // get the height of your content
    var hWindow = $(window).height();  // get the height of the visitor's browser window

    // if the height of your content is bigger than the height of the 
    // browser window, we have a scroll bar
    if(hContent>hWindow) { 
        return true;    
    }

    return false;
}
    'use strict';

    // Hide Mobile Menu On Click
    // Search
    // Progress Bar
    // Navigation Scroll
    // Sticky Nav
    // Parallax Scrolling
    // Cubeportfolio
    // Slick Slider
    //  TheiaStickySidebar
    //  Animationend
    //  Gmap

    // -------------------------------------------------------------
    //  Hide Mobile Menu On Click
    // -------------------------------------------------------------

    (function () {  
		if(checkScrollBar()) {
		$('.tr-footer').css('position', 'initial');
	}
	else {
		$('.tr-footer').css('position', 'fixed');
	}
        function menuHide(){
            var windowWidth = $(window).width();
                if(windowWidth < 991 ){
                    $('.navbar-collapse .main-navs').click(function (e) {
                    $('.navbar-collapse').collapse('toggle');
                });
            }  
        }
        menuHide();
    }()); 

    // -------------------------------------------------------------
    // Search
    // -------------------------------------------------------------

    (function () {

        $(".search-icon").click(function() {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.search-icon i').removeClass('active-search').addClass('fa-search');
            $('.search-form').fadeOut('slow').removeClass('').addClass('');
        } else {
            $(this).addClass('opened');
            $('.search-icon i').addClass('active-search').removeClass('fa-search');
            $(".search-form").fadeIn('slow').removeClass('').addClass('');
        }
        });
        $("body").click(function() {
            $('.search-icon').removeClass('opened');
            $('.search-icon i').removeClass('active-search').addClass('fa-search');
            $('.search-form').fadeOut('slow').removeClass('').addClass('');
        });
        $('.tr-search').click(function(e) {
            e.stopPropagation();
        });

    }()); 
 

    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    (function () {

        $('.tr-rating-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'),function(){
                    $(this).css('width', $(this).attr('aria-valuenow')+'%');
                });
                $(this).unbind('inview');
            }
        });

    }());  


    // -------------------------------------------------------------
    // Navigation Scroll
    // -------------------------------------------------------------

    $(window).scroll(function(event) {
        Scroll();
    }); 

    

    // User define function
    function Scroll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;
        $('.navbar-nav').find('.scroll a').each(function() {
			if ($($(this).attr('href')).offset() != undefined) {
				contentTop.push($($(this).attr('href')).offset().top);
				contentBottom.push( $( $(this).attr('href') ).offset().top + $($(this).attr('href')).height());
			}
        });
		/* if (contentTop.length > 0) {
			$.each( contentTop, function(i){
				if ( winTop > contentTop[i] - rangeTop ){
					$('.navbar-nav li.scroll').removeClass('active').eq(i).addClass('active');          
				}
			});
		} */

    };


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------


    (function () {

        $(window).scroll(function() {
            var navbar = $('.floatNavBar.navbar');
            var $this = $(this);

            if($this.scrollTop() > 120) {
                navbar.addClass('navbar-fixed-top animated fadeInDown');
            }
            else {
                navbar.removeClass('navbar-fixed-top animated fadeInDown');
            }
        });

    }()); 


    // -------------------------------------------------------------
    //  Parallax Scrolling
    // -------------------------------------------------------------

    $(window).bind('load', function () {
        parallaxInit();             
    });
    function parallaxInit() {   
        $(".tr-video").parallax("50%", 0.3);
        $(".tr-subscribe").parallax("50%", 0.3);
        $(".tr-twitter").parallax("50%", 0.3);
        $(".tr-cta-2").parallax("50%", 0.3);
    } 
    parallaxInit();     
    
    
    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------
    
    (function () {
        
        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
            loadMore: '#portfolio-menu',
            animationType: 'flipBottom',            
            gapHorizontal: 30,
            gapVertical: 30,
            mediaQueries: [{
                width: 768,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 0,
                cols: 1
            }],                  

            });

    }()); 

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {
      
        $(".team-slider").slick({
            infinite: true,
            slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
              }
            }
            ]        
        }); 

        $(".blog-slider").slick({
            infinite: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,       
        }); 

        $(".clients-slider").slick({
            infinite: true,
            slidesToShow: 4,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              }
            }
            ]        
        }); 

        $(".twitter-slider").slick({
            dots: true,
            slidesToShow: 3,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 2,
            responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 790,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            ]        
        });  

        $(".testimonial-slider").slick({
            infinite: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,       
        }); 

        $(".details-slider").slick({
            infinite: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,       
        });                         

    }());


    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    (function() {
        
        $('.video-link').magnificPopup({type:'iframe'});

    }()); 

    // -------------------------------------------------------------
    //  Checkbox Icon Change
    // -------------------------------------------------------------

    (function () {

        $('input[type="checkbox"]').change(function(){
            if($(this).is(':checked')){
                $(this).parent("label").addClass("checked");
            } else {
                $(this).parent("label").removeClass("checked");
            }
        });

    }());  

    // -------------------------------------------------------------
    //  Pricing Plan Change
    // -------------------------------------------------------------

    (function () {

        $('.pricing-switcher input[type="checkbox"]').on( 'click', function(){
            var $this = $(".tr-pricing");
            if ($this.hasClass('yearly-plan')) {
                $this.removeClass('yearly-plan').addClass("monthly-plan");
            } else if ($this.hasClass('monthly-plan')) {
                $this.removeClass('monthly-plan').addClass('yearly-plan');
            } else {
                $this.addClass('yearly-plan');  
            }
        });

    }());  

    // -------------------------------------------------------------
    // CounterUp
    // -------------------------------------------------------------

    (function () {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

    }());      


    /*==============================================================*/
    // TheiaStickySidebar
    /*==============================================================*/
           
   (function() {

        $('.tr-sticky')
            .theiaStickySidebar({
                additionalMarginTop: 0
            });
    }());


  /*==============================================================*/
  // Animationend
  /*==============================================================*/

    (function( $ ) {

        //Function to animate slider captions 
        function doAnimations( elems ) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        //Variables on page load 
        var $myCarousel = $('#home-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
            
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
			var activeIndex=$("div.carousel-inner").find("div.active").index()+1;
			if(activeIndex==3){
				activeIndex=0;
			}				
			$(".carousel-indicators").find("li.active").removeClass("active");
			$(".carousel-indicators").find("li").eq(activeIndex).addClass("active");
        });  
        
    })(jQuery);

    /*==============================================================*/
    // AOS on scroll animation
    /*==============================================================*/
    (function(){
        AOS.init({
        });
    }()); 

    /*==============================================================*/
    // Gmap
    /*==============================================================*/

    (function(){

        var map;  

        map = new GMaps({
            el: '#gmap',
            lat: 40.622974,  
            lng: -74.151792,
            scrollwheel:false,
            zoom: 14,
            zoomControl : false,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/others/map-icon.png';
        map.addMarker({
            lat: 40.622974,  
            lng: -74.151792,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'left',
            backgroundColor: '#efece0',
        });


        var styles = [ 

            {
                "featureType": "road",
                "stylers": [
                    { "color": "#f4f6f7" }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "color": "#b3dbee" }
                ]
                },{
                "featureType": "landscape",
                "stylers": [
                    { "color": "#efece0" }
                ]
            },{
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#a8a8a8" }
                ]
            },{
              "featureType": "poi",
              "stylers": [
                    { "color": "#c6e4bb" }
                ]
            },{
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": 1 },
                    { "weight": 0.1 },
                    { "color": "#a8a8a8" }
                ]
            }

        ];

        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
             mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }()); 


// script end
});
