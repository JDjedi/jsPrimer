const renderInitialTodos = function() {
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
      const toDosElem = document.createElement("p");
      toDosElem.textContent = toDos.task;
      document.querySelector("#toDos").appendChild(toDosElem);
    }
  });
};

const renderFilteredTodos = function(toDos) {
  if (toDos.completion != filters.hideFilter) {
    const toDosElem = document.createElement("p");
    toDosElem.textContent = toDos.task;
    document.querySelector("#toDos").appendChild(toDosElem);
  } else {
    return;
  }
};

const submitTodos = function() {
  toDos.push({
    task: event.target.elements.enterToDo.value,
    completion: false
  });
  localStorage.setItem("toDos", JSON.stringify(toDos)); // this is where the user input gets inputed into simple storage
};

seedTodos(toDos);
renderInitialTodos();
renderToDos(toDos, filters);
