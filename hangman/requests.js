// A callback function - when you pass a function to another function
// *********************************  old functionality ********************************* 

// const getPuzzle = (callback) => { // ex-C. this is how you do a callback function, see app.js line 18-20
// 	// API http request method below
// 	// let data // ex-B. first workaround to return data FROM parent function
// 	const request = new XMLHttpRequest()

// 	request.addEventListener('readystatechange', (e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText)
// 			callback(undefined, data.puzzle)
// 			//return data 	// ex-A. this will not work/ it is a child function inside of a parent function and
// 							// therefore will return to the parent function not allowing it to return FROM 
// 							// the parent function/ also, it will not complete the request in time before the 
// 							// next line of code on the next line in app.js fires - this is the problem that 
// 							// asynch JS fixes
// 		} else if (e.target.readyState === 4 && e.target.status === 400) {
// 			callback("An error has taken place.", undefined)
// 		}
// 	})

// 	request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4')
// 	request.send()
// 	// return data // ex-B.) this will not work either, returns before the callback fucnction completes its work
// }

// *********************************  old functionality ********************************* 

// below is just the same as above, its only in Proimise form!
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => { 
// 	const request = new XMLHttpRequest()

// 	request.addEventListener('readystatechange', (e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText)
// 			resolve(data.puzzle)
// 		} else if (e.target.readyState === 4 && e.target.status === 400) {
// 			reject("An error has taken place.")
// 		}
// 	})

// 	request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
// 	request.send()
// })

// const getCountry = (countryCode) => new Promise((resolve, reject) =>  {
// 	const request = new XMLHttpRequest()

// 	request.addEventListener('readystatechange',(e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText)
// 			data.forEach((e) => {
// 				if (e.alpha2Code === countryCode) {
// 					resolve(e.name, countryCode)
// 				}
// 			})
// 		} else if (e.target.readyState === 4 && e.target.status === 400) {
// 	 		resolve("An error has taken place")
// 	 	}
// 	})

// 	request.open('GET', 'https://restcountries.eu/rest/v2/all')
// 	request.send()
// })


// *********************************  old functionality ********************************* 

// same as above except using the fetch method pattern
// const getPuzzle = (wordCount) => {
// 	return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
// 		if (response.status === 200) {
// 			return response.json()
// 		} else {
// 			throw new Error('There was an error in retrieving the data')
// 		}
// 	})
// }

const getCountry = (countryCode) => {
	return fetch('https://restcountries.eu/rest/v2/all', {}).then((response) => {
		if (response.status === 200) {
			return response.json()
		} else {
			throw new Error('There was an error in retrieving the data')
		}
	}).then((data) => {
			return data.find((country) => country.alpha2Code === countryCode)
	})

}

// async-await functionality 
const getPuzzle = async (wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

	if (response.status === 200) {
		const data = await response.json()
		return data.puzzle
	} else {
		throw new Error('There was an error in retrieving the data')
	}
}





















