

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
    completion: false
  },
  {
    task: "Go to Work",
    completion: false
  },
  {
    task: "Sleep",
    completion: false
  }
];

const checkNote = function(toDosList, noteToCheckOff) {
  const index = toDosList.findIndex(function(note, index) {
    return note.task.toLowerCase() === noteToCheckOff.toLowerCase();
  });

  console.log("\n"); // used for clarity between the diff outputs

  if (index >= 0) {
    // anything above zero means the array has the obj we are looking for
    toDosList[index].completion = true;
    return toDosList;
  } else {
    console.log("The Element you wish to delete is not located in this array");
  }
};

const deleteNote = function(toDosList, toDoTask) {
  const index = toDosList.findIndex(function(note, index) {
    return note.task.toLowerCase() === toDoTask.toLowerCase(); // .toLowerCase would not work here for some reason
  });
  console.log("\n"); // used for clarity between the diff outputs

  if (index >= 0) {
    // anything above zero means the array has the obj we are looking for
    toDosList.splice(index, 1); // array.splice(indexToBeginSplicingAt, the amount of entries to splice)
    return toDosList;
  } else {
    console.log("The Element you wish to delete is not located in this array");
  }
};

const addNote = function(toDosList, noteToAdd) {
  toDosList.push({ task: noteToAdd, completion: false });
  console.log("\n"); // used for clarity between the diff outputs
  return toDosList;
};

const searchNotes = function(toDosList, searchQuery) {
  console.log("\n"); // used for clarity between the diff outputs
  return toDosList.filter(function(notes, index) {
    // returns 1 or 0, true or false, for each object
    return notes.completion === searchQuery;
  });
};

const sortNotes = function(toDosList) {
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

//deleteNote(toDos, 'Ride the donkey')
//addNote(toDos, 'WaSh tHe dishes')
checkNote(toDos, "worKout");
checkNote(toDos, "study Code");
checkNote(toDos, "order cat Food");
//searchNotes(toDos, true)
sortNotes(toDos);
console.log("\n"); // used for clarity between the diff outputs

console.log(toDos);
