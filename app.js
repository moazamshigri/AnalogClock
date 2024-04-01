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

let modeLabel = document.querySelector(".modeLabel");
modeLabel.innerHTML = "Light Mode";
var styleSheet = document.getElementById('styleSheet');
let flag = 0;
mode.addEventListener("click",() => {
    flag+=1;
    if(flag%2 == 0){
        modeLabel.innerHTML = "Light Mode";

        styleSheet.setAttribute('href', 'style.css');
    }
    else{
        modeLabel.innerHTML = "Dark Mode";
        modeLabel.style.color = "white";
        styleSheet.setAttribute('href', 'style2.css');
        
    }

});

