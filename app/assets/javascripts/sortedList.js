console.log('we are connected to sortedList.js');

$(function(){
    $('.clicker-div').hide();
    var actionDivs = $('.action-div');
    for (i=0; i < actionDivs.length; i++) {
        actionDivs[i].addEventListener('click', function(evt) {
            $(this).children('.clicker-div').slideToggle("slow")
       	})
   	 }
     $('.clicker-div').css('background-color', '#00B4FF');
     $('.clicker-div').css('width', 200);
     $('.clicker-div').css('margin-left', 'auto');
     $('.clicker-div').css('margin-right', 'auto');
     $('.clicker-div').css('padding', 2);
     $('.clicker-div').css('border-radius', 3);
  // if('.action-time' === 5){
  // 	$('.action-time').css('background-color','#96f2fc' );
  // }
});