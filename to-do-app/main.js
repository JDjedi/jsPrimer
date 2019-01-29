const toDos = [
  {
    task: "Order cat food",
    completion: false
  },
  {
    task: "Workout",
    completion: false
  },
  {
    task: "Study code",
    completion: true
  },
  {
    task: "Go to Work",
    completion: false
  },
  {
    task: "Sleep",
    completion: true
  }
];

document
  .querySelector("#remove-all-button")
  .addEventListener("click", function() {
    document.querySelectorAll("p").forEach(function(note) {
      note.remove();
    });
  });

document
  .querySelector("#sort-todos-button")
  .addEventListener("click", function() {
    toDos.sort(function(a, b) {
      //    return -1 // returns a first!
      //    return 1 // returns b first!
      //    return 0 // order does not need to be changes
      if (a.completion < b.completion) {
        return -1;
      } else if (b.completion < a.completion) {
        return 1;
      } else {
        return 0;
      }
    });

    const newParagraph = document.querySelector("p"); // querySelector() used for id's primarily
    newParagraph.textContent =
      "List sorted! Also, I LOVE MARIELLE SHE IS MY BOO!";
  });

document
  .querySelector("#show-todos-button")
  .addEventListener("click", function() {
    toDos.forEach(function(post) {
      // dont need to pass in the list as an argument bc the scoping rules allow you to grab the list from the global scope
      if (post.completion == false) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = post.task;
        document.querySelector("body").appendChild(newParagraph);
      }
    });
  });

// console.log(toDos)
//
// old functionality
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//  //p.remove()
//  console.log(p.textContent) // shows the selected element its contents
//  p.textContent = 'completed!' // changes selected elemtent and changes its contents
// })