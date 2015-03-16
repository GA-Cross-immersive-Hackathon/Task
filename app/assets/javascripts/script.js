console.log('we are connected');
$(function(){
    var div = document.getElementById('stopwatch'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    div.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
        t = setTimeout(add, 1000);
    }

    /* Start button */
    start.onclick = timer;

    /* Stop button */
stop.onclick = function() {
        clearTimeout(t);
    }

$('#dropdown-form').on("click", function (e) {
    console.log('make it stop!')
    e.stopPropagation();
});

})
   