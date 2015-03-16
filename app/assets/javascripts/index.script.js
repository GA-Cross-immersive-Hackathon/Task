console.log('we are connected to index.html.erb');
$(function(){

    function taskTimeSelector(){
    $('#btn-0').on('click', function(){
        $(this).addClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-4').removeClass('active');
        $('#btn-5').removeClass('active');
        $('#btn-6').removeClass('active');
    })
    $('#btn-1').on('click', function(){
        $(this).addClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-4').removeClass('active');
        $('#btn-5').removeClass('active');
        $('#btn-6').removeClass('active');
    })

    $('#btn-2').on('click', function(){
        $(this).addClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-4').removeClass('active');
        $('#btn-5').removeClass('active');
        $('#btn-6').removeClass('active');
        $('#btn-1').removeClass('active');
    })

    $('#btn-3').on('click', function(){
        $(this).addClass('active');
        $('#btn-4').removeClass('active');
        $('#btn-5').removeClass('active');
        $('#btn-6').removeClass('active');
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
    })


    $('#btn-4').on('click', function(){
        $(this).addClass('active');
        $('#btn-5').removeClass('active');
        $('#btn-6').removeClass('active');
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
    })


    $('#btn-5').on('click', function(){
        $(this).addClass('active');
        $('#btn-6').removeClass('active');
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-4').removeClass('active');
    })

    $('#btn-6').on('click', function(){
        $(this).addClass('active');
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
        $('#btn-4').removeClass('active');
        $('#btn-5').removeClass('active');
    })
    }
})
   