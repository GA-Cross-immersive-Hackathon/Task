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


// var returnContext = function() {
//
//   console.log(this);
// }
var startTimer = function() {

  $('.doButton').on('click', function() {
    // var h3 = $(this).parent().parent().children('.action')
    // var action = (h3.text());
    //  make an ajax call for get token, then ajax to update the server. the object being sent should
    // have an update key "update : start"  

  });
}

var dynamicModal = function() {

  $('#choosingTaskModal').on('show.bs.modal', function (event) {
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

}
