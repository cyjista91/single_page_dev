$(document).ready(function()) {
$('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:10,
        dots:true,
        responsive:{
          0:{
            items:1
          },
          3000:{
            items:3
          },
          4000:{
            items:5
          }
        }
      })
    console.log( "ready!" );
};