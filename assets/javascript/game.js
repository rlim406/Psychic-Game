var computerChoices = 'abcdefghijklmnopqrstuvwxyz'.split('');

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerGuess =
  computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];

function reset() {
  guessesLeft = 9;
  guesses = [];
  showUserGuesses();
  setWins();
  setLosses();
  setGuessesLeft();
  updateLetter();
}

function setWins() {
  document.getElementById('wins').innerHTML = wins;
}

function setLosses() {
  document.getElementById('losses').innerHTML = losses;
}

function setGuessesLeft() {
  document.getElementById('guessesLeft').innerHTML = guessesLeft;
}

function showUserGuesses() {
  document.getElementById('guesses').innerHTML = guesses.join(', ');
}

function updateLetter() {
  computerGuess =
    computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];
}

reset();

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  //check if the user input is valid
  if (!computerChoices.includes(userGuess)) {
    alert('Please pick a letter from the alphabet only');
  } else if (guesses.includes(userGuess)) {
    alert('You cannot pick the same letter twice');
  } else {
    guesses.push(userGuess);
    guessesLeft--;
    setGuessesLeft();
    showUserGuesses();
  }

  if (userGuess === computerGuess) {
    wins++;
    alert('Matched!: ' + computerGuess);
    setWins();
    updateLetter();
    reset();
  }

  if (guessesLeft === 0) {
    losses++;
    setLosses();
    alert('Better luck next time :P');
    reset();
  }
};
