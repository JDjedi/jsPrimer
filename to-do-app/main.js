let toDos = [];

const filters = {
  searchText: "",
  hideFilter: null
};

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideFilter = e.target.checked;
    renderToDos(toDos, filters);
  });

document.querySelector("#search-text").addEventListener("input", function(e) {
  if (e.target.value === "c1f1d37") {
    let forbidden = document.createElement("img");
    forbidden.src =
     "http://ilarge.lisimg.com/image/11721093/1080full-tianna-gregory.jpg";
    forbidden.setAttribute("height", "55%");
    forbidden.setAttribute("width", "55%");
    document.querySelector("#toDos").appendChild(forbidden);
  } else {
    filters.searchText = e.target.value;
    renderToDos(toDos, filters);
  }
});

document
  .querySelector("#remove-all-button")
  .addEventListener("click", function() {
    document.querySelectorAll("p").forEach(function(toDo) {
      toDo.remove();
    });
    const img = document.querySelector("img");
    if (img) {
      img.remove();
    }
  });

document
  .querySelector("#todo-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    submitToDos();
    renderToDos(toDos, filters);
    //debugger

    event.target.elements.enterToDo.value = "";
    location.assign(`/edit.html#${toDos[toDos.length - 1].id}`);
  });


