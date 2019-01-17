
// let myBook = {
//     title: 'The Landmark Arrian: The Campaigns of Alexander',
//     author: 'Arrian',
//     pageCount: 1166
// }

// console.log(`I am currently reading ${myBook.title}, and I am really enjoying it.`)

// myBook.title = 'The Gallic Wars'
// myBook.author = 'Julius Caesar'

// console.log(`I am currently reading ${myBook.title}, and I am really enjoying it.`)


// let myGf = {
//     name: 'Marille Tovar',
//     age: 24,
//     location: 'Austin, Tx'
// }

// console.log(`My girlfriend's name is ${myGf.name}, she is  ${myGf.age}, and she lives in ${myGf.location}.`)
// myGf.age = myGf.age + 1
// console.log(`This year she will turn ${myGf.age}`)

// ******************************* Objects lesson 2 *******************************

// let myBook = {
//     title: 'The Landmark Arrian: The Campaigns of Alexander',
//     author: 'Arrian',
//     pageCount: 1166
// }

// let myOtherBook = {
//     title: 'The Landmark Julius Caesar: The Gallic Wars',
//     author: 'Julius Caesar',
//     pageCount: 1245
// }

// let getSummary = function(book) {
//     return {
//         summary: `${book.title} by ${book.author} is ${book.pageCount} pages long`
//     }
// }

// let bookSummary = getSummary(myBook)
// let bookOtherSummary = getSummary(myOtherBook)

// console.log(bookSummary.summary)
// console.log(bookOtherSummary.summary)

// ******************************* Objects lesson 3 *******************************

// let userAccount = {
//     name: 'Jonathan Diaz',
//     expenses: 0,
//     income: 0,
//     balance: 0
// }

// let addExpense = function(account, amount) { // this ref. the orginal object, thus changing it!
//     account.expenses = account.expenses + amount
// }

// let addIncome = function(account, amount) {
//     account.income = account.income + amount
// }

// let getBalance = function(account) {
//     account.balance = account.income - account.expenses
// }

// let resetAccount = function(account) {
//     account.expenses = 0
//     account.income = 0
//     account.balance = 0
// }

// addExpense(userAccount, 200.00)
// addIncome(userAccount, 1414.89)
// getBalance(userAccount)
// console.log(`The summary for ${userAccount.name}, expenses:${userAccount.expenses}, income:${userAccount.income} for a balance of ${userAccount.balance}.`)

// resetAccount(userAccount)
// console.log(`The summary for ${userAccount.name}, expenses:${userAccount.expenses}, income:${userAccount.income} for a balance of ${userAccount.balance}.`)

// ******************************* Objects lesson 4 *******************************

let restaurant = {
    name: 'Ramen Tatsuya',
    guestCapacity: 60,
    guestCount: 0,

    checkAvailability: function() {
        //console.log(this) // 'this' references the object the method is defined on

        if (this.guestCount <= this.guestCapacity) {
            console.log(`You may seat more guests, there is room!`)
            restaurant.seatParty(11)
        } else {
            console.log(`You may not seat additional guests, there is not enough room!`)
            restaurant.removeParty
        }
    },

    seatParty: function(partySizeToAdd) {
        this.guestCount = this.guestCount + partySizeToAdd
        console.log(`You are seating ${this.guestCount} out of ${this.guestCapacity} available seats.`)
    },

    removeParty: function(partySizeToLeave){
        this.guestCount = this.guestCount - partySizeToLeave
        console.log(`You are seating ${this.guestCount} out of ${this.guestCapacity} available seats.`)
    }
}

restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()
restaurant.checkAvailability()


