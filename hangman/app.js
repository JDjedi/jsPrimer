

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Alexander', 7)
const countryCode = "MX"

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})


getPuzzle(7).then((puzzle) => {			// this is the syntax, .then->, for when things go right, only!
	console.log(puzzle)
}, (err) => {						// this is what you put for the reject handler, from "," on
	console.log(err)
})

getCountry(countryCode).then((country) => {			// this is the syntax, .then->, for when things go right, only!
	console.log(country)
}, (err) => {						// this is what you put for the reject handler, from "," on
	console.log(err)
})



// below is for testing purposes only, demonstrating callback async
console.log("Herro")	// this will fire before the callback above finishes its work, thats why it logs before 
						// the code above returns its value