console.log('we are connected to sortedList.js');
var collapsableList = function() {
  // $('.clicker-div').hide();
  var actionDivs = $('.action-div');
  for (i=0; i < actionDivs.length; i++) {
      actionDivs[i].addEventListener('click', function(evt) {
          $(this).children('.clicker-div').slideToggle("slow")
       });
    }
}
