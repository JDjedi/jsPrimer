

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Alexander', 7)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})


getPuzzle((error, puzzle) => { // Async code get this to run and return callback value when it is finshed!
	if (error) {
		console.log(`An error occoured ${error}`)
	} else {
		console.log(puzzle )
	}
})

// below is for testing purposes only, demonstrating callback async
console.log("Herro")	// this will fire before the callback above finishes its work, thats why it logs before 
						// the code above returns its value

