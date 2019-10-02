$(document).ready(function(){
  $('.gift1').slick({
    infinite: true,
    // autoplay: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: false,
  	accessibility: true,
  	arrows: true,

  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    }]

  });
});

