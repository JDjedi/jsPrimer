
// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
	//p.remove()
	console.log(p.textContent) // shows the selected element its contents
	p.textContent = 'completed!' // changes selected elemtent and changes its contents
})

