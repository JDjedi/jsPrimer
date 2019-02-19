let toDos = [
];

const filters = {
  searchText: "",
  hideFilter: null
};

const toDosJSON = localStorage.getItem('toDos')

if (toDosJSON !== null) {
  toDos = JSON.parse(toDosJSON)
}

const renderToDos = function(Todos, filters) {
  const filteredTodos = Todos.filter(function(toDo) {
    return toDo.task.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#toDos").innerHTML = ""; // this clears the div after every subsquent key stroke

  filteredTodos.forEach(function(toDos) {
    // the last item you search that matches shows, the previous line of code cuts out what is unecessary
    if (filters.hideFilter == true) {
      if (toDos.completion != filters.hideFilter) {
        const toDosElem = document.createElement("p");
         toDosElem.textContent = toDos.task;
         document.querySelector("#toDos").appendChild(toDosElem); 
      } else {
        return
      }
    } else {
       const toDosElem = document.createElement("p");
       toDosElem.textContent = toDos.task;
       document.querySelector("#toDos").appendChild(toDosElem);  
    }
  })
}

document.querySelector("#hide-completed").addEventListener("change", function(e) {
  filters.hideFilter = e.target.checked
  renderToDos(toDos, filters);
})

document.querySelector("#search-text").addEventListener("input", function(e) {
  if (e.target.value === "c1f1d37") {
    let newBogie = document.createElement("img");
    //newBogie.src =
    //  "http://ilarge.lisimg.com/image/11721093/1080full-tianna-gregory.jpg";
    newBogie.setAttribute("height", "55%");
    newBogie.setAttribute("width", "55%");
    document.querySelector("#toDos").appendChild(newBogie);
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
    toDos.push({
      task: event.target.elements.enterToDo.value,
      completion: false
    });
    localStorage.setItem('toDos', JSON.stringify(toDos))
    renderToDos(toDos, filters);
    event.target.elements.enterToDo.value = "";
  });


renderToDos(toDos, filters);

// **************************************** old functionality ****************************************

// document
//   .querySelector("#sort-todos-button")
//   .addEventListener("click", function() {
//     toDos.sort(function(a, b) {
//       //    return -1 // returns a first!
//       //    return 1 // returns b first!
//       //    return 0 // order does not need to be changes
//       if (a.completion < b.completion) {
//         return -1;
//       } else if (b.completion < a.completion) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });

//     const newParagraph = document.querySelector("p"); // querySelector() used for id's primarily
//     newParagraph.textContent = "List sorted! Also, I love Marielle Tovar!";
//   });

// document.querySelector("#search-text").addEventListener("input", function(e) {
//   if (e.target.value === "c1f1d37") {
//     let newBogie = document.createElement("img");
//     newBogie.src =
//       "http://ilarge.lisimg.com/image/11721093/1080full-tianna-gregory.jpg";
//     newBogie.setAttribute("height", "85%");
//     newBogie.setAttribute("width", "85%");
//     document.querySelector("#toDos").appendChild(newBogie);
//   } else {
//     filters.searchText = e.target.value;
//     renderToDos(toDos, filters);
//   }
// });

// document
//   .querySelector("#show-todos-button")
//   .addEventListener("click", function() {
//     toDos.forEach(function(post) {
//       // dont need to pass in the list as an argument bc the scoping rules allow you to grab the list from the global scope
//       if (post.completion == false) {
//         let newParagraph = document.createElement("p");
//         newParagraph.textContent = post.task;
//         document.querySelector("body").appendChild(newParagraph);
//       }
//     });
//   });

// console.log(toDos)
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//  //p.remove()
//  console.log(p.textContent) // shows the selected element its contents
//  p.textContent = 'completed!' // changes selected elemtent and changes its contents
// })
