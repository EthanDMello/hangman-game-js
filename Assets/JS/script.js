words = "sesh";
letterDashBox = document.querySelector(".letterDash");

function init() {
  // get scores
  // reset hangman?
}

var button = document.querySelector("#startBtn");
function startGame() {
  // get and set word
  // start timer
  startTimer(60);
  // check for input
  // change hangman or word being guessed
}

function startTimer(seconds) {
  var timerStart = setInterval(() => {
    console.log(seconds);
    var timer = document.querySelector(".timer");
    timer.textContent = seconds;
    seconds--;
    if (seconds == -1) {
      clearInterval(timerStart);
      console.log("out of time");
    }
  }, 1000);
}

function printWord() {
  let letterAr = words.split("");
  for (let i = 0; i < letterAr.length; i++) {
    let letter = letterAr[i];
    letterDashBox.appendChild(letter);
  }
}

printWord();
button.addEventListener("click", startGame);
