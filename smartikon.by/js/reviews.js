
document.querySelector('.btn-add').addEventListener('click', function() {
  document.querySelector('.pop-up').style.display = 'block';
  document.querySelector('.bg_layer').style.display = 'block';

})

document.querySelector('.btn-submit').addEventListener('click', function() {
  document.querySelector('.pop-up').style.display = 'none';
  document.querySelector('.bg_layer').style.display = 'none';

})
