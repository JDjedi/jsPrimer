const getLocation = (code) => {
	return fetch(`https://ipinfo.io/json?=350757fae503d9`, {}).then((response) => {
		if (response.status === 200) {
			return response.json()
		} else if (response.status === 429) {
			return console.log("Too many connection attempts you cheap fuck")
		} else {
			throw new Error('There was an error in retrieving the data')
		}
	})
}

