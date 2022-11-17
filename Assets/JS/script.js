function init() {
  // get scores
  // reset hangman?
}

function startGame() {
  // get and set word
  printWord();
  // start timer
  startTimer(60);
  // check for input
  // change hangman or word being guessed
  // ^^ happening in start timer
}

function startTimer(seconds) {
  // start timer and counts down
  var timerStart = setInterval(() => {
    var timer = document.querySelector(".timer");
    timer.textContent = seconds;
    seconds--;
    if (seconds == -1) {
      clearInterval(timerStart);
      console.log("out of time");
    }
    checkInputs();
  }, 500);
}

const hiddenLetterPlaceHolder = "_";
function printWord() {
  // adds letter from as blanks to HTML body
  const letterAr = words.split("");

  letterAr.forEach((letter) => {
    // loop creating individual sections with relative class for individual letters
    let el = document.createElement("section");
    el.classList.add(letter);
    // adding blank letter placeholders to content
    el.textContent = hiddenLetterPlaceHolder;
    // adding new section to html
    letterDashBox.appendChild(el);
  });
}

function keydownAction(event) {
  // destruct object
  const { key } = event;
  // early exit if keypress is not in word
  if (!letterAr.includes(key)) return;
  // find every letter class equal to keypress and reveal letter in HTML
  const letterClass = letterDashBox.getElementsByClassName(key);
  Array.from(letterClass).forEach((letterEl) => (letterEl.textContent = key));
}

function checkEndGame() {}

function checkInputs() {
  // check keyboard input and call function
  document.addEventListener("keydown", keydownAction);
  checkEndGame();
}

function wrongGuess() {}

var button = document.querySelector("#startBtn");
button.addEventListener("click", startGame);

words = "sheesh";
var letterAr = words.split("");
const letterDashBox = document.querySelector(".letterDash");
