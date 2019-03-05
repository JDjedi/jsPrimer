const data = {
	locations: [],
	get location() {
		return this._location // need the _ in front of location
	},

	set location(value) {
		this._location = value.trim() // need the _ in front of location
		this._locations.push(this._location)
	}
}

data.location = "Austin"

console.log(data.location)






