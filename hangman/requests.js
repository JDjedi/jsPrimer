// A callback function - when you pass a function to another function




const getPuzzle = (callback) => { // ex-C. this is how you do a callback function, see app.js line 18-20
	// API http request method below
	// let data // ex-B. first workaround to return data FROM parent function
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', (e) => {
		if (e.target.readyState === 4 && e.target.status === 200) {
			const data = JSON.parse(e.target.responseText)
			callback(undefined, data.puzzle)
			//return data 	// ex-A. this will not work/ it is a child function inside of a parent function and
							// therefore will return to the parent function not allowing it to return FROM 
							// the parent function/ also, it will not complete the request in time before the 
							// next line of code on the next line in app.js fires - this is the problem that 
							// asynch JS fixes
		} else if (e.target.readyState === 4 && e.target.status === 400) {
			callback("An error has taken place.", undefined)
		}
	})

	request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4')
	request.send()
	// return data // ex-B.) this will not work either, returns before the callback fucnction completes its work
}






// const countryCode = "US"

// request.addEventListener('readystatechange',(e) => {
// 	if (e.target.readyState === 4 && e.target.status === 200) {
// 		const data = JSON.parse(e.target.responseText)
// 		data.forEach((e) => {
// 			if (e.alpha2Code === countryCode) {
// 				console.log(e.name)
// 			}
// 		})
// 	} else if (e.target.readyState === 4 && e.target.status === 400) {
//  		console.log("An error has taken place")
//  	}
// })

// request.open('GET', 'https://restcountries.eu/rest/v2/all')
// request.send()
