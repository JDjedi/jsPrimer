
// callback pattern
const getDataCallback = (callback) => {
	setTimeout(() => {
		callback(undefined, 'This is the data, 3 seconds - traditional callback')
	}, 3000)
}

getDataCallback((err, data) => {
	if (err) {

	} else {
		console.log(data)
	}
})

// promise pattern
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is the data, 3 seconds - Promise syntax')
		//reject('Error is upon us!')
	}, 3000)
})


myPromise.then((data) => {			// this is the syntax, .then->, for when things go right, only!
	console.log(data)
}, (err) => {						// this is what you put for the reject handler, from "," on
	console.log(err)
})



