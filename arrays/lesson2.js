

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

console.log(notes.indexOf({})); // two objects DO NOT equal each other

let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject); // --> TRUE
// what makes them equal is if theyre
// the exact same obj. in memory

const index = notes.findIndex(function(note) {
	return note.title === "Budget";
});

console.log(index);
