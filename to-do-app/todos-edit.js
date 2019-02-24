

const toDoID = location.hash.substring(1)

const matchedToDo = toDos.find(function(e) {
	return e.id === toDoID
})

if (matchedToDo === undefined) {
	location.assign('index.html')
}


document.querySelector("#edit-todo-body").value = matchedToDo.task