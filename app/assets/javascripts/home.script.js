var selected;
var breakTimeSelector = function(){

   $('#btn-0').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 5;
   })
   $('#btn-1').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 10;
   })

   $('#btn-2').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 20;
   })

   $('#btn-3').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 30;
   })


   $('#btn-4').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 40;
   })


   $('#btn-5').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 50;
   })

   $('#btn-6').on('click', function(){
       $(this).addClass('active');
       deactivateButton(this.id);
       selected = 60;
   })
 }
