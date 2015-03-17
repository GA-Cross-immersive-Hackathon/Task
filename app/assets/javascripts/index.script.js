console.log('we are connected to index.html.erb');

var deactivateButton = function(currentButton) {
  var buttonid = "#"+ currentButton
  var buttons = ['#btn-0','#btn-1','#btn-2','#btn-3','#btn-4','#btn-5','#btn-6']
  buttons.forEach(function(button) {
    if (button != buttonid) {
      $(button).removeClass('active');
    }
  })
}


var clicked;
var taskTimeSelector = function(){

    $('#btn-0').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 5;
    })
    $('#btn-1').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 10;
    })

    $('#btn-2').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 20;
    })

    $('#btn-3').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 30;
    })


    $('#btn-4').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 40;
    })


    $('#btn-5').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 50;
    })

    $('#btn-6').on('click', function(){
        $(this).addClass('active');
        deactivateButton(this.id);
        clicked = 60;
    })
  }

var renderAction = function(obj) {

}


var actionObject = function() {

    var xhr = new XMLHttpRequest();
    console.log('hey')
        xhr.open('GET', '/token.json');
        xhr.addEventListener('load', function() {
          var token = xhr.responseText;
          console.log(token);
          var action_object = {
            action_name : $('#action-name').val(),
            notes : $('#action-notes').val(),
            time_estimated : clicked,
            authenticity_token: token
           }

    var xhr2 = new XMLHttpRequest();
          xhr2.open('POST', '/actions');
          xhr2.setRequestHeader('Content-Type', "application/json;charset=UTF-8")
          xhr2.addEventListener('load', function() {
            var statusResponse = JSON.parse(xhr2.responseText);
            if (statusResponse.status === "success") {
              renderAction(action_object);
            } else {
              alert("there was an error saving your data")
            }
          });
          xhr2.send(JSON.stringify(action_object));
        });

    xhr.send();
}

$(function(){
$('#add-new-task').on('click', function(e){
    e.preventDefault();
    console.log('hello');
    actionObject();
    })

})
