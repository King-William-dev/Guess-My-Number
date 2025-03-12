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

//UPDATING HIGHSCORE
//Store Highscore in localStorage
//check if score is lower than highScore maintain current highScore
//If score is higher than highScore then update highscore with current score

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
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Have Lost';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Have Lost';
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore; 
    };
  } else {
    document.querySelector('.message').textContent = 'You have lost';
  }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = score;
});
