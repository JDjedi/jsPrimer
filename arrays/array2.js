// Main Lesson is below
const notes = [
  {
    title: "Workout",
    body: "Cardio Circuit"
  },
  {
    title: "Coding Lesson",
    body: "Learn some more JS"
  },
  {
    title: "Budget",
    body: "Balance checkbook"
  }
];

// use this to find the index, like if you want to delete the object or change it
const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title.toLowerCase === noteTitle.toLowerCase; // Case insensitive search!
  });
  return notes[index];
};

// use this below if you just want to find a particular object!
const findNote2 = function(notes, noteTitle) {
  // this is another way to search, diff from above!
  return notes.find(function(note, index) {
    return note.title.toLowerCase === noteTitle.toLowerCase; // Case insensitive search!
  });
};

// const note = findNote(notes, 'Coding Lesson')
// console.log(note)

// challenge  is below

const toDos = [
  {
    task: "Order cat food",
    completion: true
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
    completion: true
  },
  {
    task: "Sleep",
    completion: false
  }
];

console.log(toDos); // this is just to see the original array in unaltered form

const deleteNote = function(toDos, toDoTitle) {
  const index = toDos.findIndex(function(note, index) {
    return note.task === toDoTitle; // .toLowerCase would not work here for some reason
  });

  console.log("\n"); // used for clarity between the diff outputs

  if (index >= 0) {
    // anything above zero means the array has the obj we are looking for
    toDos.splice(index, 1); // array.splice(indexToBeginSplicingAt, the amount of entries to splice)
    return toDos;
  } else {
    console.log("The Element you wish to delete is not located in this array");
  }
};

const addNote = function(toDos, noteToAdd) {
  toDos.push({ task: noteToAdd, completion: false });
  console.log("\n"); // used for clarity between the diff outputs
  return toDos;
};

const checkNote = function(toDos, noteToCheckOff) {
  const index = toDos.findIndex(function(note, index) {
    return note.task === toDoTitle; // .toLowerCase would not work here for some reason
  });

  if (index >= 0) {
    // anything above zero means the array has the obj we are looking for

    return toDos;
  } else {
    console.log("The Element you wish to delete is not located in this array");
  }
};

deleteNote(toDos, "Go to Work");
deleteNote(toDos, "Sleep");
deleteNote(toDos, "Ride the donkey");
addNote(toDos, "Wash the Dishes");
