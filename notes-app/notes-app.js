
// Query and remove
const img = document.querySelector('img')
img.remove()


// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
	//p.remove()
	console.log(p.textContent) // shows the selected element its contents
	p.textContent = '******' // changes selected elemtent and changes its contents
})


