var todos = ["Buy New Turle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	//handle input
	if (input === "list") {
		listTodo();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();	
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

//Refactor into functions
function listTodo() {
	console.log("**********");
	todos.forEach(function(todo, i) {
	console.log(i + ": " + todo);
	});
	console.log("**********");
}

function addTodo() {
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	//ask for index of todo to be deteled
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");
}