


// closure - a combination of a function in the lexical scope where it was defined 
const myFunction = () => {
	const message = 'This is my message.'
	const bruh = 'Tony'
	const printMessage = () => {
		console.log(message)	// message can be accessed here bc print was defined within
								// the same lexical scope as printMessage() - this is closure
		console.log(bruh)		// the same goes for 'bruh'
	}

	return printMessage
}


// const myPrintMessage = myFunction()
// myPrintMessage()


// another example, this one makes use of closure to use private methods to make the script more secure

const createCounter = () => {
	let count = 0

	return {
		increment() {
			count++		// bc of closure count method has access to the count decleration up above
		},

		decrement() {
			count--
		},

		get() {			// must use the declared methods to maniplulate count, thus making it more secure
			return count 
		}
	}
}

const createTipper = (a) => {	//check this shit out, WOW
	return (b) => {
		return (a * b) + b
	}
}
const calculateTip = createTipper(.18)
console.log(calculateTip(100))
const calculateTip1 = createTipper(.15)
console.log(calculateTip(58.15))
const calculateTip2 = createTipper(.16)
console.log(calculateTip(27.50))
const calculateTip3 = createTipper(.20)
console.log(calculateTip(205.67))