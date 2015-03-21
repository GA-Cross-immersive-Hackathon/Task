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


console.log('test is connected')


$(document).on("ready", function() {
	var  counter= 0;
	function progressBar(){
		var colors = ["#96F2FC", "#00DDFF", "#00B4FF", "#2366D0"];

				var $newDiv = $('<div>');
				$newDiv.width(100);
				$newDiv.height(100);
				$('#hello').append($newDiv);	
		if (counter < colors.length) {
			$newDiv.css({
				'background-color': colors[counter],
				'border-radius': 5,
				'margin-left': 10,
				'float': 'left'
		});
			counter++;	
		} else {
			counter = 0;
			$('#hello').children().remove();
		}
}
	

function render(){
	setInterval(function(){
		progressBar();
	},1000)
}

render();

});











