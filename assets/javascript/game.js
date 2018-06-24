var computerChoices = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var userChoices = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

function reset() {
  guesses = [];
  guessesLeft = 9;
}

function hardReset() {
  wins = 0;
  losses = 0;
  guessesLeft = 9;
  guesses = [];
}
function startAgain() {
  computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
  var userGuess = event.key;

  if (userGuess === computerGuess) {
    wins++;
    reset();
    alert('Matched!: ' + computerGuess);
    startAgain();
  }

  if (userGuess != computerGuess) {
    guessesLeft--;
    guesses.push(userGuess);
  }

  if (guessesLeft === 0) {
    losses++;
    reset();
  }
  if (userGuess === '5') {
    hardReset();
  }

  var html =
    '<p> Wins: ' +
    wins +
    '</p>' +
    '<p> Losses: ' +
    losses +
    '</p>' +
    '<p> Guesses remaining: ' +
    guessesLeft +
    '</p>' +
    '<p> Guesses so far: ' +
    guesses +
    '</p>';

  document.querySelector('#game').innerHTML = html;
};
