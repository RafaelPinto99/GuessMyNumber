"use strict";

let secretNumber = Math.trunc(Math.random() * 5) + 1;
let guessesLeft = 5;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No number!";

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    // document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (guessesLeft > highscore) {
      highscore = guessesLeft;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Player guesses too high
  } else if (guess > secretNumber) {
    if (guessesLeft > 1) {
      document.querySelector(".message").textContent = "❗ Too high!";
      guessesLeft--;
      document.querySelector(".guessesLeft").textContent = guessesLeft;
    } else {
      document.querySelector(".message").textContent = "😜 You lost the game!";
    }

    // Player guesses too low
  } else if (guess < secretNumber) {
    if (guessesLeft > 1) {
      document.querySelector(".message").textContent = "❗ Too low!";
      guessesLeft--;
      document.querySelector(".guessesLeft").textContent = guessesLeft;
    } else {
      document.querySelector(".message").textContent = "😜 You lost the game!";
    }
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  guessesLeft = 5;
  secretNumber = Math.trunc(Math.random() * 5) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guessesLeft").textContent = guessesLeft;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
