

class Country {
	constructor(name, region, civilization, population, language, status = [], currency) {
		this.name = name
		this.region = region
		this.civilization = civilization
		this.population = population
		this.language = language
		this.status = status
		this.currency = currency
	}

	getInfo() {
		let info = `Name: ${this.name}\n Region: ${this.region}\n Civilization: ${this.civilization}\n Population: ${this.population}\n Language: ${this.language}\n Status: ${this.status}\n Currency: ${this.currency}`
		return info
	}

	setStatus(currentStatus) {
		this.status = currentStatus
	}

}

const venezuela = new Country('Venezuela', 'South America', 'Western', 31.5, 'Spanish', [], 12)
venezuela.setStatus("Failed State")

const changeCurrencyXch = (num) => {
	return new Promise((resolve, reject) => {
		if (typeof num === 'number') {
			resolve(venezuela.currency = num * 2)
		} else {
			reject('Error is upon us! Promise Pattern 1!')
		}
	})	
}

changeCurrencyXch(venezuela.currency).then((data) => { // CHAIN!!!
	return changeCurrencyXch(data)
}).then((data) => {
	return changeCurrencyXch(data)
}).then((data) => {
	return changeCurrencyXch(data)
}).catch((err) => { // this is the error handler for the previous three function calls!
	console.log(err)
})

setTimeout(() => {
	console.log(venezuela.getInfo())
}, 4000)






