document.querySelector('.show-order').addEventListener('click',function(){
  document.querySelector('.order-pop-up').style.display = 'block';
  document.querySelector('.bg_layer').style.display = 'block';
})

document.querySelector('.btn-close').addEventListener('click', function() {
  document.querySelector('.order-pop-up').style.display = 'none';
  document.querySelector('.bg_layer').style.display = 'none';
})
$(document).ready(function() {
		$('.minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
