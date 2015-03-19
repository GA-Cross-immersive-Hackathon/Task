console.log('we are connected to new.html.erb');

var deactivateButton = function(currentButton) {
 var buttonid = "#"+ currentButton
 var buttons = ['#btn-0','#btn-1','#btn-2','#btn-3','#btn-4','#btn-5','#btn-6', 'btn-7']
 buttons.forEach(function(button) {
   if (button != buttonid) {
     $(button).removeClass('active');
   }
 })
}


var clicked;
var elaborate;
var taskTimeSelector = function(){

   $('#btn-0').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 5;
       elaborate = false;
   })
   $('#btn-1').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 10;
       elaborate = false;
   })

   $('#btn-2').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 20;
       elaborate = false;
   })

   $('#btn-3').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 30;
       elaborate = false;
   })


   $('#btn-4').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 40;
       elaborate = false;
   })


   $('#btn-5').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 50;
       elaborate = false;
   })

   $('#btn-6').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 60;
       elaborate = false;
   })
   $('#btn-7').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       clicked = 5;
       elaborate = true;
   })
 }


 // <div class="action-div sixty col-sm-offset-2 col-sm-8 text-left">
 //   <h3 class="action" id="<%= sorted.id %>"><%= sorted.action_name%></h3>
 //   <p class= "time-foot text-right"><%=sorted.time_estimated%></p>
 //   <div class="clicker-div">
 //     <p>Notes: <%= sorted.notes%></p>
 //     <p>Time: <%= sorted.time_estimated%></p>
 //     <button class="doButton" type="button" data-toggle="modal" data-target="#choosingTaskModal" class="btn btn-default select-task">Do this task.</button>
 //   </div>
 // </div>
var renderAction = function(obj) {
   var taskListDiv = document.getElementById('task-list-div');
   var div = document.createElement('div');
   if (obj.priority === true) {
     div.setAttribute('class', ' priority action-div-add col-sm-offset-4 col-sm-5');
   } else if (obj.priority === false) {
     if (obj.time_estimated === 60) {
       div.setAttribute('class', 'sixty action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 50) {
       div.setAttribute('class', 'fifty action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 40) {
       div.setAttribute('class', 'forty action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 30) {
       div.setAttribute('class', 'thirty action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 20) {
       div.setAttribute('class', 'twenty action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 10) {
       div.setAttribute('class', 'ten action-div-add col-sm-offset-4 col-sm-5');
     }
     if (obj.time_estimated === 5) {
       div.setAttribute('class', 'five action-div-add col-sm-offset-4 col-sm-5');
     }
   }
   var h3 = document.createElement('h3');
   h3.setAttribute('class', 'action text-left');
   var time = document.createElement('p');
   time.setAttribute('class', 'action text-right');

   var timeText = obj.time_estimated;
   var timeTextNode = document.createTextNode(timeText);
   time.appendChild(timeTextNode)

   var nameText = obj.action_name;
   var nameTextNode = document.createTextNode(nameText);
   h3.appendChild(nameTextNode);


   div.appendChild(h3);
   div.appendChild(time);
   taskListDiv.appendChild(div);


   var inputName = document.getElementById('action-name');
   var inputNotes = document.getElementById('action-notes');
   var priorityCheckbox = document.getElementById('priority-check');
   inputName.value = "";
   inputNotes.value = "";
   priorityCheckbox.checked = false;
}


var actionObject = function() {

   var xhr = new XMLHttpRequest();
       xhr.open('GET', '/token.json');
       xhr.addEventListener('load', function() {
         var token = xhr.responseText;
         var priorityCheckbox = document.getElementById('priority-check');
         if (priorityCheckbox.checked === true) {
           var priorityValue = true;
         } else {
           var priorityValue = false
         }
         var action_object = {
           action_name : $('#action-name').val(),
           notes : $('#action-notes').val(),
           time_estimated : clicked,
           elaborate : elaborate,
           priority : priorityValue,
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

var addTaskListener = function() {
  $('#add-new-task').on('click', function(e){
     e.preventDefault();
     actionObject();
   });
}
