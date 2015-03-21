console.log('we are connected to currentList.js');


// function called on current_list.html.erb to enable collapse feature
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

// progress bar to be displayed while user is accomplishing task
var  counter= 0;
var progressBar = function() {
  var colors = ["#96F2FC", "#00DDFF", "#00B4FF", "#2366D0"];

      var $newDiv = $('<div>');
      $newDiv.width(25);
      $newDiv.height(25);
      $('#progressBar').append($newDiv);
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
    $('#progressBar').children().remove();
  }
}

function renderProgressBar(){
	setInterval(progressBar(),1000)
}
renderProgressBar();


// function to call the
var startTimer = function(e) {
  var xhr = new XMLHttpRequest();
      xhr.open('GET', '/token.json');
      xhr.addEventListener('load', function() {
        var token = xhr.responseText;
        var action_object = {
          update : "start",
          authenticity_token: token
         }

  var xhr2 = new XMLHttpRequest();
        xhr2.open('PUT', '/actions/'+$(e.currentTarget).attr("id"));
        xhr2.setRequestHeader('Content-Type', "application/json;charset=UTF-8")
        xhr2.addEventListener('load', function() {
          var statusResponse = JSON.parse(xhr2.responseText);
          if (statusResponse.status === "success") {
            console.log("start is working")
          } else {
            alert("there was an error saving your data")
          }
        });
        xhr2.send(JSON.stringify(action_object));
      });

  xhr.send();
}


var stopTimer = function(e) {
  var xhr = new XMLHttpRequest();
      xhr.open('GET', '/token.json');
      xhr.addEventListener('load', function() {
        var token = xhr.responseText;
        var action_object = {
          update : "stop",
          authenticity_token: token
         }

  var xhr2 = new XMLHttpRequest();
        xhr2.open('PUT', '/actions/'+$(e.currentTarget).attr("id"));
        xhr2.setRequestHeader('Content-Type', "application/json;charset=UTF-8")
        xhr2.addEventListener('load', function() {
          var statusResponse = JSON.parse(xhr2.responseText);
          if (statusResponse.status === "success") {
            console.log(statusResponse.time_metrics);
          } else {
            alert("there was an error saving your data")
          }
        });
        xhr2.send(JSON.stringify(action_object));
      });

  xhr.send();
}


var dynamicModal = function() {
  console.log("we're inside the dynamical modal");
  $('#choosingTaskModal').on('show.bs.modal', function (event) {

    e.preventDefault();
    console.log("default should have been prevented");
    // var h3 = $(this).parent().parent().children('.action')
    // var action = (h3.text());
    var button = $(event.relatedTarget)
    console.log(button)
    console.log(button.data) // Button that triggered the modal
    var task = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('You have started task:' + task)
    // modal.find('.modal-body input').val(recipient)
  })

  grabStopButtons();
  $('#choosingTaskModal').modal('show');

}



var grabStartButtons = function() {

  $('.doButton').on('click', function(e) {
    startTimer(e);
    dynamicModal();
    // var h3 = $(this).parent().parent().children('.action')
    // var action = (h3.text());
    //  make an ajax call for get token, then ajax to update the server. the object being sent should
    // have an update key "update : start"
  });
}

var grabStopButtons = function() {
  $('.stop-timer').on('click', function(e) {
    stopTimer(e);
});
}
