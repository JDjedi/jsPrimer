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

// old functionality
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
// 	//p.remove()
// 	console.log(p.textContent) // shows the selected element its contents
// 	p.textContent = 'completed!' // changes selected elemtent and changes its contents
// })


const sortToDos = function(toDosList) {
  toDosList.sort(function(a, b) {
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
};

sortToDos(toDos);

toDos.forEach(function (post) {
  if (post.completion == false) {
    let newParagraph = document.createElement('p')
    newParagraph.textContent = post.task
    document.querySelector('body').appendChild(newParagraph)
  }

})
// console.log(toDos)





