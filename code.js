// These are our variables
const allowedNumbers = [6,7,8,9,11,12,13,14];
const spinSeconds = 3000;
const countDownSeconds = 6;
const limbs = ["Right hand", "Right foot", "Left hand", "Left foot"];
const colours = ["yellow", "green", "blue", "red"];

var currentNumberOne, currentNumberTwo, currentLimb, currentColour, currentCountdown;

// These are the elements we want to control
const firstSpinButton = document.getElementById("firstSpinButton");
const secondSpinButton = document.getElementById("secondSpinButton");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");
const howToPlay = document.getElementById("how-to-play");
const nextMove = document.getElementById("next-move");
const limb = document.getElementById("limb");
const targetColor = document.getElementById("target-color");
const calculation = document.getElementById("calculation");
const startTimer = document.getElementById("start-timer");
const timer = document.getElementById("timer");
const timerNumber = document.getElementById("timer-number");
const answer = document.getElementById("answer");
const theAnswer = document.getElementById("the-answer");

// These are our functions
function startWheelSpinning(event) {
    firstSpinButton.classList.add("invisible");
    wheel1.classList.add("spinning");
    setTimeout(makeAMove,spinSeconds);
}

function makeAMove() {
    firstSpinButton.classList.remove("invisible");
    secondSpinButton.classList.remove("invisible");
    wheel1.classList.remove("spinning");
    wheel2.classList.remove("spinning");
    howToPlay.classList.add("visually-hidden");
    answer.classList.add("visually-hidden");

    currentNumberOne = allowedNumbers[Math.floor(Math.random() * allowedNumbers.length)];
    currentNumberTwo = allowedNumbers[Math.floor(Math.random() * allowedNumbers.length)];
    currentLimb = limbs[Math.floor(Math.random() * limbs.length)];
    currentColour = colours[Math.floor(Math.random() * colours.length)];

    limb.textContent = currentLimb;
    targetColor.textContent = currentColour.charAt(0).toUpperCase() + currentColour.slice(1);
    targetColor.setAttribute("class","target-color target-color-"+currentColour);
    calculation.textContent = currentNumberOne+" x "+currentNumberTwo;

    nextMove.classList.remove("visually-hidden");
}

function countDown() {
    currentCountdown -= 1;
    timerNumber.textContent = currentCountdown;
    if(currentCountdown === 1) {
        setTimeout(showAnswer,1000);
    } else {
        setTimeout(countDown,1000);
    }
}

function mathsTimer() {
    nextMove.classList.add("visually-hidden");
    timer.classList.remove("visually-hidden");
    currentCountdown = countDownSeconds;
    timerNumber.textContent = currentCountdown;
    setTimeout(countDown,1000);
}

function showAnswer() {
    timer.classList.add("visually-hidden");
    answer.classList.remove("visually-hidden");
    theAnswer.textContent = currentNumberOne * currentNumberTwo;
}

function spinAgain(event) {
    secondSpinButton.classList.add("invisible");
    wheel2.classList.add("spinning");
    setTimeout(makeAMove,spinSeconds);
}

// These are our event listeners
firstSpinButton.addEventListener("click",startWheelSpinning);
startTimer.addEventListener("click",mathsTimer);
secondSpinButton.addEventListener("click",spinAgain);

