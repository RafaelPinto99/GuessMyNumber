"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let guessesLeft = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    displayMessage("❌ No number!");

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.body.style.backgroundColor = "#60b347";
    // document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (guessesLeft > highscore) {
      highscore = guessesLeft;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (guessesLeft > 1) {
      displayMessage(guess > secretNumber ? "❗ Too high!" : "❗ Too low!");
      guessesLeft--;
      document.querySelector(".guessesLeft").textContent = guessesLeft;
    } else {
      displayMessage("😜 You lost the game!");
    }
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  guessesLeft = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".guessesLeft").textContent = guessesLeft;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
