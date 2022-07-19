// Slick Slider
$(".slider_container").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


// $( document ).ready(function() {
//   $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });
// });
jQuery(document).ready(function($){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});
