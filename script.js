'use strict';
let secretNumber = Math.trunc(Math.random() * '20') + 1;
let highscore = 0;
let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

//Guessing Range for game difficulty

document.querySelector('.difficultySet').addEventListener('click', function () {
  let difficultyInput = Number(document.querySelector('.difficulty').value);
  secretNumber = Math.trunc(Math.random() * difficultyInput) + 1;

  document.querySelector('.difficulty').value = difficultyInput;
  document.querySelector(
    '.between'
  ).textContent = `<Between 1 and ${difficultyInput}>`;

  console.log(secretNumber);
});
const disableButton = function () {
  document.querySelector('.check').disabled = true;
  document.querySelector('.difficultySet').disabled = true;
};
document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.difficultySet').disabled = true;
  const userNumber = Number(document.querySelector('.guess').value);
  // no input

  if (!userNumber || userNumber === 0) {
    document.querySelector('.message').textContent = 'Enter Number 1 to 20!';
  }
  // playing during game!
  else if (score > 1) {
    if (userNumber > secretNumber) {
      document.querySelector('.message').textContent = 'Guess Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (userNumber < secretNumber) {
      document.querySelector('.message').textContent = 'Guess High!';
      score--;
      document.querySelector('.score').textContent = score;

      //player wins!
    } else if (userNumber === secretNumber) {
      disableButton();
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        console.log(highscore);
      }
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b247';
      document.querySelector('.number').style.width = '30rem';
    }

    //player looses!
  } else {
    document.querySelector('.message').textContent = 'Game Over!!!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#7a1a1a';
    disableButton();
  }
});

//resetting the page(Again!)

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * '20') + 1;
  score = 20;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.difficulty').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.difficultySet').disabled = false;
  document.querySelector('.check').disabled = false;
});
