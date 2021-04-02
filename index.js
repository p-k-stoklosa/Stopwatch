const btnStart = document.querySelector('.start');
const btnLap = document.querySelector('.lap');
const btnReset = document.querySelector('.reset');
const divTime = document.querySelector('.container .time span');
const divLaps = document.querySelector('.container .laps');

let time = 0;
let lapNumber = 0;
let ifTrue = true;
let interval;

const stopWatch = () => {
    if (ifTrue) {
        ifTrue = !ifTrue;
        btnStart.textContent = "STOP";
        btnStart.style.backgroundColor = "#b71c1c";
        interval = setInterval(start, 10);
    } else {
        ifTrue = !ifTrue;
        btnStart.textContent = "START";
        btnStart.style.backgroundColor = "white";
        clearInterval(interval);
    }
}

const start = () => {
    time++
    if (time < 1000) {
        divTime.textContent = `0${(time / 100).toFixed(2)}`;
    } else {
        divTime.textContent = (time / 100).toFixed(2);
    }
}

const lap = () => {
    if (!ifTrue) {
        const lap = divTime.textContent;
        const createParagraph = document.createElement('p');
        createParagraph.textContent = `${lapNumber < 10 ? '0' + lapNumber : lapNumber }. ${lap}`;
        divLaps.appendChild(createParagraph);
        lapNumber++
    }
}

const reset = () => {
    let laps = document.querySelectorAll('.laps > p');
    laps.forEach.call(laps, (lap) => lap.parentNode.removeChild(lap));
    time = 0;
    lapNumber = 0;
    divTime.textContent = "00.00";
    ifTrue = true;
    btnStart.textContent = "START";
    btnStart.style.backgroundColor = "white";
    clearInterval(interval)
}

btnStart.addEventListener('click', stopWatch);
btnLap.addEventListener('click', lap)
btnReset.addEventListener('click', reset);