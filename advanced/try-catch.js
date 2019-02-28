

const getTip = (amount) => {
	if (typeof amount === 'number') {
		return amount * .25
	} else {
		throw 'Argument must be a number' 
	}
}

//const result = getTip('hello')
//console.log(result)

try {                          // do something when things go well!
  const result = getTip(12)
  console.log(result)
} catch (e) {                  // do something when things DONT go well!
  console.log('catch block is running, error!')
}