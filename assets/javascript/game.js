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
var guessesLeft = 10;

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();

  var guesses = '';
  guesses = userGuess;

  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {
    wins++;
  } else if (userGuess != computerGuess) {
    losses++;
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    alert('You Lost! Game will reset!');
  }

  var html =
    '<p>You chose: ' +
    userGuess +
    '</p>' +
    '<p>The computer chose: ' +
    computerGuess +
    '</p>' +
    '<p>Wins: ' +
    wins +
    '</p>' +
    '<p>Losses: ' +
    losses +
    '</p>' +
    '<p>Guesses left: ' +
    guessesLeft +
    '</p>' +
    '<p>Guesses so far: ' +
    guesses +
    '</p>';

  document.querySelector('#game').innerHTML = html;
};
