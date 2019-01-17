

// multiple arugments
// let add = function(a, b) {
//     return a + b
// }

// let result = add(12, 10)
// console.log(result)

// Default arguments - undefined assigned in its place
// let getScoreText = function(name = 'Anonymous', score = 0) { // you can assign a default of 0 here, this is legal!
//     return 'Name: ' + name + ' ' + 'Score: ' + score
// }

// let scoreTest = getScoreText()
// console.log(scoreTest)

// JS string interpolation! Uses (``) not ('') or ("")
// let newName = "Jonathan"
// let someNumber = 56
// console.log(`Hey, my name is ${newName}!`) 
// console.log(`The number you are looking for is ${someNumber}`)

// coding challenge 

// global scope - getTip
//   local scope - getTip, tipPercent, total
//     local scope - getTip, tipPercent, total, msg // this scope can access all the way up the root tree, not vice versa!

let getTip = function(total, tipPercent = .15) {
    let tip = tipPercent * total
    let finalBill = total + tip

    if (tipPercent <= .14) {
        let msg = `Damn your tip is $${tip}, below 14%, you a cheap ass!`
        console.log(msg)
    }
    return `Your total bill of $${total} with tip is $${finalBill}`
}

let result = getTip(25, .08)
console.log(result)



