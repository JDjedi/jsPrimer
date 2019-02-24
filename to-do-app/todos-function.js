const generateInitialDOM = function() {
  const toDosJSON = localStorage.getItem("toDos");

  if (toDosJSON !== null) {
    // this constantly scans todos array and outputs its contents
    toDos = JSON.parse(toDosJSON);
  }
};

const seedTodos = function(toDos) {
  toDos.push({
    id: uuidv4(),
    task: "Finish the fight - get into the tech industry.",
    completion: true
  });
};

const renderToDos = function(toDos, filters) {
  const filteredTodos = toDos.filter(function(element) {
    return element.task
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#toDos").innerHTML = ""; // this clears the div after every subsquent key stroke

  filteredTodos.forEach(function(toDos) {
    // the last item you search that matches shows, the previous line of code cuts out what is unecessary
    if (filters.hideFilter == true) {
      renderFilteredTodos(toDos);
    } else {
      renderUnfilteredTodos(toDos);
    }
  });
};

const renderFilteredTodos = function(toDos) {
  if (toDos.completion != filters.hideFilter) {
    renderUnfilteredTodos(toDos);
  } else {
    return;
  }
};

const renderUnfilteredTodos = function(toDoObject) {
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  const newLink = document.createElement("a");

  newLink.setAttribute("href", `/edit.html#${toDoObject.id}`);
  newInput.setAttribute("type", "checkbox");
  newButton.textContent = "x";
  newLink.textContent = toDoObject.task;

  newDiv.appendChild(newButton);
  newDiv.appendChild(newSpan);
  newLabel.appendChild(newInput);
  newDiv.appendChild(newLabel);
  newSpan.appendChild(newLink);

  document.querySelector("#toDos").appendChild(newDiv);
  saveToDos(toDos);

  newButton.addEventListener("click", function() {
    removeTodoTask(toDoObject.id);
    saveToDos(toDos);
    renderToDos(toDos, filters);
  });

  newLabel.addEventListener("change", function(e) {
    let finder = toDos.find(e => e.id === toDoObject.id);
    finder.completion = e.target.checked;
    saveToDos(toDos);
  });

  return;
};

const removeTodoTask = function(taskToRemove) {
  let finder = toDos.find(e => e.id === taskToRemove);
  let i = toDos.indexOf(finder);
  if (i != -1) {
    toDos.splice(i, 1);
  }
  return;
};

const submitToDos = function() {
  toDos.push({
    id: uuidv4(),
    task: event.target.elements.enterToDo.value,
    completion: false
  });
};

const saveToDos = function() {
  localStorage.setItem("toDos", JSON.stringify(toDos)); // this is where the user input gets inputed into simple storage
};

generateInitialDOM();





