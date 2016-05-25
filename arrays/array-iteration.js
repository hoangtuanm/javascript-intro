//Array Iteration
//Use a for loop to iterate over an Array
//Use forEach to iterate over an Array
//Compare and contrast for loops and forEach

//For loop
//To loop over an array using a for loop, we need to make use of the array's length property
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

//forEach
//JavaScript provides an easy built-in way to iterating over an array: forEach
//array.forEach(someFunction)
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(colors) { //colors is place holder, can be named with anything
console.log("Color: " + colors);
});

//for vs. forEach
//The following 2 code snippets do the same thing:

//with a for loop
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

//with a forEach
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
	console.log(color);
});