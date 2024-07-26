'use strict';

/*

- Another way of selecting an element 
- Select by id is much faster than querySelector (Only for working with ids )
- no need # symbols

*/

// Selecting an elements

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let activePlayer = 0;

// Rolling dice function

btnRoll.addEventListener('click', function () {
  // 1. Generate a random number between 1 and 6

  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check if the dice rolled 1: if true, switch to next player

  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
    currentScore = 0;
  }
});
