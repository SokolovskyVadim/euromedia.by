modal_call.onclick = function getModal() {
    var el = document.getElementById('back_shadow');
    el.style.display = 'block';
}

close_window.onclick = function closeWindow() {
    var el = document.getElementById('back_shadow');
    el.style.display = 'none';
}

// Get the modal
var modal = document.getElementById("modalSearch");
// Get the button that opens the modal
var btn = document.getElementById("openSearch");
// Get the <span> element that closes the modal
var closeSearch = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
// closeSearch.onclick = function() {
//   modal.style.display = "none";
// }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}