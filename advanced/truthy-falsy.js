
const products = []
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context

if (product) {				 // this string in place of a boolean won't break the program,
	console.log('Product found') // Js will simply try to evaluate the code as best as it can
} else {
	console.log('Product not found')
}

