$(function () {
    $('.add').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal < 100) {console.log(currentVal);
            $qty.val(currentVal + 1);
          if(currentVal === 80){
            
            $('.centerbox').css('border-bottom','3px solid red');
            $('.qty').css('color','red');
          }
          
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {console.log(currentVal);
            $qty.val(currentVal - 1);
          if(currentVal <= 10){
            
            $('.centerbox').css('border-bottom','1px solid #009688');
            $('.qty').css('color','black');
          }
        }
    });
});