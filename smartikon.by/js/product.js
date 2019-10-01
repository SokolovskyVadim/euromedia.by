document.querySelector('.product-image').addEventListener('click', function(){
	document.querySelector('.scaling-back').style.display = 'block';
})
document.querySelector('.scaling-exit').addEventListener('click', function(){
	document.querySelector('.scaling-back').style.display = 'none';
})

function myFunction(x) {
  if (x.matches) { // If media query matches
   	console.log("1111");

  } else {
    // 
	// $(document).ready(function(){
	// 	$('.fotorama').fotorama({
 //  			ratio: 3/2.5,
	// 	});
	// })   
	console.log("22222");
 }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes