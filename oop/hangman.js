

class HangmanClass {
	constructor(wordToGuess, numberOfGuesses, guessedLetters = []) {
	this.wordToGuess = wordToGuess.toLowerCase().split("")
	this.numberOfGuesses = numberOfGuesses
	this.guessedLetters = guessedLetters
	}

	startGame() {
		let answerPiece = ''
		let guessedLetters = this.guessedLetters

		this.wordToGuess.forEach(function(e) {
			if (guessedLetters.includes(e)) {
				answerPiece += e
			} else {
				answerPiece += '*'
			}
		})
		return answerPiece
	}

	takeAGuess(userGuess) {
		let guesses = []
		let guessCount = this.numberOfGuesses

		userGuess.forEach(function(e) {
			e.toLowerCase()
			if (!(guesses.includes(e)) && (guesses.length < guessCount)) {
				guesses.push(e);
			} else if(guesses.includes(e)) {
				console.log(`You already guessed the letter ${e}`)
			} else if(guesses.length >= guessCount) {
				console.log(`You have made too many guesses, the letter ${e} will not be included`)
			} else {
				console.log("Something else went wrong LOL")
			}
		})
		this.guessedLetters = guesses
	}
}


const game = new HangmanClass("Alexander", 10);
game.takeAGuess(["a", "l", "e", "p", "d"])
console.log(game.startGame())
