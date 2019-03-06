

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

// API http request method below


const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
// 	if (e.target.readyState === 4 && e.target.status === 200) {
// 		const data = JSON.parse(e.target.responseText)
// 		console.log(data)
// 	} else if (e.target.readyState === 4 && e.target.status === 400) {
// 		console.log("An error has taken place")
// 	}
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4')
// request.send()

const countryCode = "US"

request.addEventListener('readystatechange',(e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText)
		data.forEach((e) => {
			if (e.alpha2Code === countryCode) {
				console.log(e.name)
			}
		})
	} else if (e.target.readyState === 4 && e.target.status === 400) {
 		console.log("An error has taken place")
 	}
})

request.open('GET', 'https://restcountries.eu/rest/v2/all')
request.send()

