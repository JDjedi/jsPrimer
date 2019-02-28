const Hangman = function( wordToGuess, numberOfGuesses) {
	this.wordToGuess = wordToGuess
	this.numberOfGuesses = numberOfGuesses
}

const game1 = new Hangman("Poster", 3);
const game2 = new Hangman("Desk", 5);

console.log(game1);
console.log(game2);