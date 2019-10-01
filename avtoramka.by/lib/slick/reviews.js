$(document).ready(function(){
  $('.reviews').slick({
    infinite: true,
    autoplay: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	dots: true,
  	accessibility: true,
  	arrows: false,

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

