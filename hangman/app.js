

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


getPuzzle(3).then((data) => {			// this is the syntax, .then->, for when things go right, only!
	console.log(data)			// you can return anything you like from the chain, not just other promise callbacks
}).catch((err) => {
	console.log(`Error: ${err}`)
})

getCountry(countryCode).then((data) => {			// this is the syntax, .then->, for when things go right, only!
	console.log(data.name)
}).catch((err) => {						// this is what you put for the reject handler, from "," on
	console.log(`Error: ${err}`)
})



// below is for testing purposes only, demonstrating callback async
console.log("Herro")	// this will fire before the callback above finishes its work, thats why it logs before 
						// the code above returns its value