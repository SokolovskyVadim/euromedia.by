

$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 5,
  	loop: true,
    responsiveClass: true,
     	 responsive:{ 
            
            1300:{
              items: 5
            },
             1200:{
              items: 3
            },
            992:{
              items: 3
            },
            770:{
              items: 2
            },
             482:{
              items: 1
            },
             380:{
              items: 1
            },
            370:{
             items: 1 
            }

        }


  });
});
$(document).ready(function(){
  $(".slider1").owlCarousel({
    items: 1,
    loop: true
   


  });
});





