

const notes = ["Note1", "Note2", "Note3"];
notes.push("Note4");
notes.unshift("newNote5");
notes.splice(3, 0, "This is the new item");
notes.pop();
notes.unshift("note6");
console.log(" ");

for (let count = 0; count <= notes.length; count++) {
	console.log(`Index: ${count}[${notes[count]}]`);
}

notes.indexOf("This is "); // this returns -1, which means it is not in the array
