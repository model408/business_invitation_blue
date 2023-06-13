$(document).ready(function(){
    $(".testimonial_slider").owlCarousel({
        loop:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        rewindNav : true,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:2,
            },
        }
    
    });
  });
  
$(document).ready(function(){
    $(".speaker_slider").owlCarousel({
        loop:true,
        margin:80,
        center:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:3,
            },
        }
    
    });
  });