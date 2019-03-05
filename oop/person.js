

// Prototypal Inheritance
// myPerson --> Employee.prototype --> Person.prototype --> Object.prototype --> Null

class Person {
	constructor(firstName, lastName, age, likes = []) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.age = age,
		this.likes = likes
	}

	getBio() {
		let bio = `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\n`
		let age = `He is ${this.age}`

		this.likes.forEach((like) => {
			bio += `${this.firstName} likes ${like}\n`
		})

		return bio
	}

	set fullName(fullName) {
		const names = fullName.split(' ')
		this.firstName = names[0]
		this.lastName = names[1]
	}
}

class Employee extends Person { // subclass of Person, if methods are the same, the most recent class overides the parents!
	constructor(firstName, lastName, age, position, likes = []) { 
		super(firstName, lastName, age, likes)// inside of subclass you must envoke parents constructor fucntion via super() for those variables
		this.position = position
	}

	getBio() {
		return `${this.firstName} is a ${this.position}`
	}
}

const me = new Employee('Jonathan', 'Diaz', 29, "Software Engineer", ['Biking', 'Programming', 'Politics', 'History', 'Working Out'])

me.fullName = "Indiana Jones"

console.log(me);

