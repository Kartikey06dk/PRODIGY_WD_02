let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}



//Adding some extra attractive functionality. 

//Background changes after every second, when you clicked the pause or reset button it also be stopped.

const btn = document.getElementById('start-timer')
const btn2 = document.querySelector('.pause-reset')
const btn3 = document.getElementById('reset-timer')

btn.addEventListener("click",()=>{
    const intervalID = setInterval(()=>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        const rgb = `rgb(${red},${green},${blue})`
        document.body.style.background = rgb
    },1000)
    btn2.addEventListener("click",()=>{
        //For Stop execution of generateRandomColor
        clearInterval(intervalID)
    })
    btn3.addEventListener("click",()=>{
        //For Stop execution of generateRandomColor
        clearInterval(intervalID)
    })
})

