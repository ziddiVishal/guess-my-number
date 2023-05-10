'use strict';
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secrectNumber);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let winAudio = new Audio('win.wav');
let clickAudio = new Audio('click.wav');

//document.querySelector('.check').addEventListener('click', function () {});
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    clickAudio.play();
    //

    // when guess is no number
    if (!guess) {
      displayMessage('🔴 No number');

      // when guess is correct
    } else if (guess === secrectNumber) {
      displayMessage('🎉Correct answer🎉');

      const openModal = function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      };
      openModal();
      winAudio.play();
      document.querySelector('body').style.backgroundColor = '#2900e3';
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').style.color = 'black';
      document.querySelector('.number').textContent = secrectNumber;

      document.querySelector('.highscore').textContent = score;

      // var link = document.createElement('a');
      // link.href = URL.createObjectURL(Blob);
      // link.download = 'print1.pdf';
      // link.dispatchEvent(new MouseEvent('click'));
      // window.open(URL, 'print1.pdf');
      // document.querySelector('.highscore').textContent = link;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secrectNumber) {
      if (score > 1) {
        // convert in to ternary opreater
        displayMessage(guess > secrectNumber ? ' 📈 Too high' : '📉 Too low');

        score--;

        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('you lose this game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  // when guess is too high
  // } else if (guess > secrectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose this game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secrectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose this game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
);

// play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  clickAudio.play();
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  closeModal();
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// show output
