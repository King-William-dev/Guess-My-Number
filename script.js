'use strict';

//add the event listener to the button , "check".

//create the variable for the secret number
//capture the value from the input
// create the variable for capturing the score.
//create the variable for capturing the highscore.

// compare the input value with the secret number
//if it is higher than the secret number, display a message saying "it is higher than the secret number"
//decrease the score by one.
// if it is lower than the secret number, display a message saying "it is lower than the secret number"
//decrease the score by one.
//if it is input value is correct, display a message saying "correct number"
//update the display of the secret number from a question mark to the correct number
//change the background color to green.
//update the high score

//reset the game by attaching the event listener to the Again button.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Input a number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.score').textContent = score;

    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
  } else {
    document.querySelector('.message').textContent = 'You have lost';
  }
});
