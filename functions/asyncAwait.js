// async functions always return a promise

const myAsyncFunction = async () => { 				// this must be resolved with a promise
	return "This is a string with the number 12"
}

myAsyncFunction().then((data) => {
	console.log("This is the preliminary data\n", data)
}).catch((error) => {
	console.log("Error:", error)
})

