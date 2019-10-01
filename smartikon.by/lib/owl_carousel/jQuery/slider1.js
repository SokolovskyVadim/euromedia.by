// SLIDER_TOP
$(document).ready(function (){
    $('.slider1').owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 5000,
        center:true,
        loop:true,
        margin:10,
        nav:true,
        navText: ["",""],
    })
});
// SLIDER_TOP_END
// WRAPPER_CATALOG
$(document).ready(function (){
  $(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
// WRAPPER_CATALOG_END


// $(document).ready(function(){
//     $(".slider").owlCarousel({
//         items: 5,
//         nav:true,
//         loop: true,
//         dots: true,
//       responsiveClass: true,
//             responsive:{ 
              
//               1300:{
//                 items: 5
//               },
//                1200:{
//                 items: 3
//               },
//               992:{
//                 items: 3
//               },
//               770:{
//                 items: 2
//               },
//                482:{
//                 items: 1
//               },
//                380:{
//                 items: 1
//               },
//               370:{
//                items: 1 
//               }
  
//           }
//     });
//   });