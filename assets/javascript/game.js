// A to Z variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f',
                        'g', 'h', 'i', 'j', 'k', 'l',
                        'm', 'n', 'o', 'p', 'q', 'r',
                        's', 't', 'u', 'v', 'w', 'x',
                        'y', 'z'];

// Game tracker variables
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Chooses a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
