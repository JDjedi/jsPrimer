'use strict'

const Person = function (firstName, lastName, age) { // constructor functions use a capital letter!
	this.firstName = firstName
	this.lastName = lastName
	this.age = age 
}

Person.prototype.getBio = function() {
	return `${this.firstName} ${this.lastName} - ${this.age}`
};

Person.prototype.setPerson = function(firstName, lastName, age) {
	this.firstName = firstName
	this.lastName = lastName
	this.age = lastName
};

const me  = new Person(); // constructor functions use a capital letter!
me.setPerson("Jonathan", "Diaz", 29)
me.getBio();


