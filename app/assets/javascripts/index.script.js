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
    return clicked;
  }

  // var time = function() {
  //   return clicked;
  // }