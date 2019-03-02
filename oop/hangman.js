const Hangman = function( wordToGuess, numberOfGuesses, splitWord) {
	this.wordToGuess = wordToGuess
	this.numberOfGuesses = numberOfGuesses
	this.splitWord = splitWord
  
}

Hangman.prototype.wordSplitter = function() {
  this.splitWord = this.wordToGuess.split("");
  return this.splitWord
}

Hangman.prototype.startGame = function(userGuesses) {
	userGuesses.forEach(function(e) {
		splitWord.forEach(function(t) {
			if (e === t) {
				console.log(e);
			} else {
				console.log("No letter found")
			}
		})
	})

}


let userInput = ["a", "x", "t", "q"]
const game1 = new Hangman("Alexander", 5);
game1.wordSplitter()
game1.startGame(userInput)
