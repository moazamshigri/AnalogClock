setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secondsTime = d.getSeconds();
    hourRotation = 30*hourTime + minuteTime/2;
    minuteRotation = 6*minuteTime;
    secondsRotation = 6*secondsTime;

    hour.style.transform   = `rotate(${hourRotation}deg)`    ;
    minute.style.transform = `rotate(${minuteRotation}deg)`  ;
    second.style.transform = `rotate(${secondsRotation}deg)` ;
    
},1
);

let mode = document.querySelector(".custom-control-input");

