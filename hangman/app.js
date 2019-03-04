

const Hangman = function(wordToGuess, numberOfGuesses) {
	this.wordToGuess = wordToGuess.toLowerCase().split("")
	this.numberOfGuesses = numberOfGuesses
}

Hangman.prototype.startGame = function(userGuess) {
	let answerPiece = ''
	this.wordToGuess.forEach(function(e) {
		if (userGuess.includes(e)) {
			answerPiece += userGuess
		} else {
			answerPiece += '*'
		}

	})
	return answerPiece
}

Hangman.prototype.takeAGuess = function(userGuess) {
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
	return guesses
}


const game = new Hangman("Alexander", 3);
game.takeAGuess(["q", "L", "t"])
game.startGame(guesses)

// window.addEventListener('keypress', function(e) {
// 	let guess = String.fromCharCode(e.charCode);
// 	game.takeAGuess(guess);
// })