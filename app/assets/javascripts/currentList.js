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
// var  counter= 0;
// var progressBar = function(progressBarDiv) {
//
//   console.log(progressBarDiv);
//
//   var colors = ["#96F2FC", "#00DDFF", "#00B4FF", "#2366D0"];
//
//       var $newDiv = $('<div>');
//       $newDiv.width(40);
//       $newDiv.height(40);
//       progressBarDiv.append($newDiv);
//   if (counter < colors.length) {
//     $newDiv.css({
//       'background-color': colors[counter],
//       'border-radius': 5,
//       'margin-left': 10,
//       'display': 'inline-block'
//   });
//     counter++;
//   } else {
//     counter = 0;
//     progressBarDiv.children().remove();
//   }
// }
//
// function renderProgressBar(modalProgressBar){
// 	setInterval(progressBar(modalProgressBar),1000)
// }



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

var renderResponse= function(modalBody, obj, divId) {
  console.log(modalBody);
  modalBody.children('.progressBar').remove();
  var time_est = obj.estimate_time;
  var actual_time = obj.total_time[0] + ":" + obj.total_time[1] + ":" + obj.total_time[2];
  var $newHeader = $('<h4>');
  var $timeP = $('<p>');
  $newHeader.text(actual_time);
  $timeP.text('Actual time: ' + actual_time);
  $timeP.addClass('.action-time');
  $newHeader.css({
      'font-family': 'futura',
      'color': '#070173'
  })
  modalBody.children('.returnedTime').append($newHeader);

  $('#div'+divId).children('.time-foot').text('Real time: ' + actual_time);
  $('#div'+divId).css({
    'background-color': 'white',
    'color': '#070173',
  })
  $('#div'+divId).children('.action').css({
    'text-decoration': 'line-through',
  })
}

var stopTimer = function(modalId,modalButton) {
  var modalBody = $(modalId+"Body");
  var divId = modalButton.data('id');
  console.log("we are in stopTimer!")
  var xhr = new XMLHttpRequest();
      xhr.open('GET', '/token.json');
      xhr.addEventListener('load', function() {
        var token = xhr.responseText;
        var action_object = {
          update : "stop",
          authenticity_token: token
         }

  var xhr2 = new XMLHttpRequest();
        xhr2.open('PUT', '/actions/'+ modalButton.data('id'));
        xhr2.setRequestHeader('Content-Type', "application/json;charset=UTF-8")
        xhr2.addEventListener('load', function() {
          var statusResponse = JSON.parse(xhr2.responseText);
          if (statusResponse.status === "success") {
            // render response in modal
            renderResponse(modalBody, statusResponse.time_metrics, divId);
            console.log(statusResponse.time_metrics);
          } else {
            alert("there was an error saving your data")
          }
        });
        xhr2.send(JSON.stringify(action_object));
      });

  xhr.send();
}

var grabStartButtons = function() {
  $('.doButton').on('click', function(e) {
    // var modalId = $(e.currentTarget).data("target");
    // var modalProgressBar = $(modalId+"progressBar");
    // console.log(modalProgressBar);
    startTimer(e);
    // renderProgressBar(modalProgressBar);
    grabStopButtons(e);
  });
}

var grabStopButtons = function(e) {
  console.log("we're in Grab stop Button")
  var modalId = $(e.currentTarget).data("target");
  var modalButton = $(modalId + "button");
  modalButton.on("click", function() {
    stopTimer(modalId,modalButton);
  })
}
