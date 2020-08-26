let intervalEnd = new Date('August 27, 2020 07:00:00');
function timer(){
    const checkTime = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return String(i);
    }
    var current = new Date();

    let timeleft = intervalEnd.getTime() - current.getTime();
    var hours = checkTime(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = checkTime(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = checkTime(Math.floor((timeleft % (1000 * 60)) / 1000));


    var jshr = document.querySelector(".js__hr");
    var jsmin = document.querySelector(".js__min");
    var jssec = document.querySelector(".js__sec");
    jshr.innerHTML = hours;
    jsmin.innerHTML = minutes;
    jssec.innerHTML = seconds;
    console.log(hours,minutes,seconds)
    if (timeleft < 0) {
        clearInterval(timer);
        document.querySelector(".timer__subtitle").innerHTML = "Qume DEX is LIVE";
    }

}


function countDownIntervals(){
    let timerId = setInterval(timer,1000);
}


countDownIntervals();














