console.log('we are connected to currentList.js');
var collapsableList = function() {
  var actionDivs = $('.action-div');
  for (i=0; i < actionDivs.length; i++) {
      actionDivs[i].addEventListener('mouseenter', function(evt) {
          $(this).children('.clicker-div').slideToggle("slow")
       });
      actionDivs[i].addEventListener('mouseleave', function(evt) {
          $(this).children('.clicker-div').slideToggle("slow")
       });
    }
}
