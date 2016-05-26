//Function as Object's property (called Method, rather Function)
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	add: function(x, y) {
		return x + y;
	}
}
//calling add() "function as method" inside obj Object
obj.add(5,2); //10