'use strict'

const Person = function (firstName, lastName, age) { // constructor functions use a capital letter!
	this.firstName = firstName
	this.lastName = lastName
	this.age = age 
}

const me  = new Person("Jonathan", "Diaz", 29); // constructor functions use a capital letter!

console.log(me);

