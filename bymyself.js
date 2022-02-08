'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const theMessage = function (theMessageText) {
  document.querySelector('.message').textContent = theMessageText;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    theMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = '🎉 Correct Number!';
      theMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      //   document.querySelector('.message').textContent = '💣 You lost the game!';
      theMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      theMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💣 You lost the game!';
      theMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  theMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
