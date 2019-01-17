
// undefined - represents the absence of a value
// Three most common cases below

let name // no value assigned, JS will assign the value to undefined 
name = "Jenn"

if (name === undefined) {
    console.log("Please provide a name!")
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function(num) { // no argument value provided for variable, JS will set undefined as its value
    console.log(num)
}
square()

// if a function does not return anything, undefined is returned in its place
let result = square()
console.log(result)


// null value, which is essentially an empty value
let age = 27
age = undefined // noooooooo
age = null // yassssss

