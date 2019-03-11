// 350757fae503d9

const appendLocation = document.querySelector('#location')
appendLocation.textContent = "Hello World!"


getLocation().then((data) => {
	console.log(data)			
}).catch((err) => {
	console.log(`Error: ${err}`)
})



