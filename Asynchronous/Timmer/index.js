var minute = document.getElementById("minute");
var second = document.getElementById("second");
var start = document.getElementById("start");
var stop1 = document.getElementById("stop");
var reset = document.getElementById("reset");

var min = 0;
var sec = 0;
var startfn;


start.addEventListener("click", function () {
    startfn = setInterval(function () {

        if (sec == 59) {
            sec = 0;
            min++;
            second.textContent = "00";
            if (min < 10)
                minute.textContent = "0" + min;
            else {
                minute.textContent = min;
            }
        }
        else {
            sec++;
            if (sec < 10) {
                second.textContent = "0" + sec;
            }
            else {

                second.textContent = sec;
            }
        }
    }, 1000)
});

stop1.addEventListener("click", function () {
    clearInterval(startfn);
})
reset.addEventListener("click", function () {
    //    location.reload();
    clearInterval(startfn);
    sec = 0;
    min = 0;
    minute.textContent = 0 + "0";
    second.textContent = 0 + "0";
})
