
// *************************** callback pattern ***************************
// const getDataCallback = (callback) => {
// 	setTimeout(() => {
// 		callback(undefined, 'This is the data, 3 seconds - traditional callback')
// 	}, 3000)
// }

// getDataCallback((err, data) => {
// 	if (err) {

// 	} else {
// 		console.log(data)
// 	}
// })



// ***************************promise pattern ***************************
// const getBackPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		let test = true
// 		setTimeout(() => {
// 			if (test === true) {
// 				resolve('Connection Success! Promise Pattern 1!')
// 			} else {
// 				reject('Error is upon us! Promise Pattern 1!')
// 			}
// 		}, 3000)
// 	})	
// }

// const myPromise = getBackPromise()

// myPromise.then((data) => {			// this is the syntax, .then->, for when things go right, only!
// 	console.log(data)
// }, (err) => {						// this is what you put for the reject handler, from "," on
// 	console.log(err)
// })



// *************************** example 2, integrarting catch ***************************
// const myPromise2 = new Promise((resolve, reject) => {
// 	let test = false
// 	setTimeout(() => {
// 		if (test === true) {
// 			resolve('Connection Success! Promise Pattern 2!')
// 		} else {
// 			reject('Error is upon us! Promise Pattern 2!')
// 		}
// 	}, 3000)
// })

// let test2 = () => {
// 	myPromise2.then((data) => {			// this is the syntax, .then->, for when things go right, only!
// 		console.log(data)
// 	})
// 	.catch((err) => {					// this is what you put for the reject handler, from "," on
// 		console.log(err)
// 	})
// }			// Promises are synchronous!!!

// test2()



// *************************** Promies chaining pattern -- continues from example up above ***************************
const chainPromiseExp = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof num === 'number') {
				resolve(num * 2)
			} else {
				reject('Error is upon us! Promise Pattern 1!')
			}
		}, 2000)
	})	
}

chainPromiseExp(10).then((data) => { // CHAIN!!!
	return chainPromiseExp(data)
}).then((data) => {
	return chainPromiseExp(data)
}).then((data) => {
	return chainPromiseExp(data)
}).then((data) => {
	return chainPromiseExp(data)
}).then((data) => {
	console.log(data)
}).catch((err) => { // this is the error handler for the previous three function calls!
	console.log(err)
})

















