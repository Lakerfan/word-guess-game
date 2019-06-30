// A to Z variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Game tracker variables
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// Chooses a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Updates the guess counter and selecting the HTML id guesses to track attempts
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//the keyword this. refers to the object
var updateGuessesLeft = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// Displays the guesses attempted so far
var updateGuessesSoFar = function() {
    document.querySelector('#guesses').innerHTML =" Your Guesses so far!" + guessedLetters.join(', ');
};

// This is the reset function
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
+
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// This is the onkeyup event once the key is released
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
             if (userGuess == letterToGuess){
                 wins++;
                 document.querySelector('#wins').innerHTML = "Wins: " + wins;
-                alert("Yes, the letter was " + computerGuess.toUpperCase());
+                alert("Yes, you are psychic!");
                 reset();
             }
         }else if(guessesLeft == 0){
             // Then we will loss and we'll update the html to display the loss 
             losses++;
             document.querySelector('#losses').innerHTML = "Losses: " + losses;
-            alert("Sorry, the correct letter was " + computerGuess.toUpperCase() + " maybe try again?");
+            alert("Sorry, you're not psychic, maybe try again?");
             // Then we'll call the reset. 
             reset();
         }
};
