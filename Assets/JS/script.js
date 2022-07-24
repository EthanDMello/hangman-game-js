words = "sheesh";
var letterAr = words.split("");
const letterDashBox = document.querySelector(".letterDash");

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
  }, 1000);
}

function printWord() {
  // adds letter from as blanks to HTML body
  let letterAr = words.split("");
  let letterId = 0;

  for (let i = 0; i < letterAr.length; i++) {
    // loop creating individual sections with relative class and ids
    // for the split word
    let el = document.createElement("section");
    let classes = document.createAttribute("class");
    classes.value = letterAr[i];
    el.setAttributeNode(classes);
    //
    let ids = document.createAttribute("id");
    ids.value = letterId;
    el.setAttributeNode(ids);
    letterId++;
    //
    el.textContent = "_";
    letterDashBox.appendChild(el);
  }
}

function checkInputs() {
  // check keyboard input and call function
  document.addEventListener("keydown", keydownAction);
  function keydownAction(event) {
    // destruct object
    const { key } = event;
    // early exit if keypress is not in word
    if (!letterAr.includes(key)) return;
    // find every letter class equal to keypress
    const letterClass = letterDashBox.getElementsByClassName(key);
    Array.from(letterClass).forEach((letterEl) => (letterEl.textContent = key));
  }
}
var button = document.querySelector("#startBtn");
button.addEventListener("click", startGame);
checkInputs();
