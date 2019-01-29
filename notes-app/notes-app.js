
// Query and remove
const img = document.querySelector('img')
img.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
// 	//p.remove()
// 	console.log(p.textContent) // shows the selected element its contents
// 	p.textContent = '******' // changes selected elemtent and changes its contents
// })

// adds an event listener to button, first argument is what you are listenting for, the second what you want it to do
// target.addEventListener(type, listener)
document.querySelector('button').addEventListener('click', function(event) { // event arg is useful when you want to do something with the element it represents, in this case the button tag
	event.target.textContent = 'Note Created!'
})
