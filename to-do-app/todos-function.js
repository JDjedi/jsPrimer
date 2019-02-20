const generateInitialDOM = function() {
  const toDosJSON = localStorage.getItem("toDos");

  if (toDosJSON !== null) {
    // this constantly scans todos array and outputs its contents
    toDos = JSON.parse(toDosJSON);
  }
};

const seedTodos = function(toDos) {
  toDos.push({
    task: "Finish the fight - get into the tech industry.",
    completion: true
  });
};

const renderToDos = function(toDos, filters) {
  const filteredTodos = toDos.filter(function(toDo) {
    return toDo.task.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#toDos").innerHTML = ""; // this clears the div after every subsquent key stroke

  filteredTodos.forEach(function(toDos) {
    // the last item you search that matches shows, the previous line of code cuts out what is unecessary
    if (filters.hideFilter == true) {
      renderFilteredTodos(toDos);
    } else {
      renderTodosList(toDos);
    }
  });
};

const renderFilteredTodos = function(toDos) {
  if (toDos.completion != filters.hideFilter) {
    renderTodosList(toDos);
  } else {
    return;
  }
};

const renderTodosList = function(toDos) {
  const toDosDiv = document.createElement("div");
  const toDosElem = document.createElement("span");
  const button = document.createElement("button");
  button.textContent = "x"
  toDosElem.textContent = toDos.task;
  toDosDiv.appendChild(button);
  toDosDiv.appendChild(toDosElem);
  document.querySelector("#toDos").appendChild(toDosDiv)
  return
}

const submitAndSaveTodos = function() {
  toDos.push({
    task: event.target.elements.enterToDo.value,
    completion: false
  });
  localStorage.setItem("toDos", JSON.stringify(toDos)); // this is where the user input gets inputed into simple storage
};

seedTodos(toDos);
generateInitialDOM();
renderToDos(toDos, filters);
