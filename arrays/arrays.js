//Arrays

//Initialize an empty array two ways:
var friends = []; //common
var friends = new Array(); //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var num = [45, 37, 89, 24];
num.length //4

//Array come with a few built-in methods
//push/pop 
//shift/unshift
//indexOf
//slice

//Use push to add to the end of array:
var colors ["red", "yellow"];
colors.push("green"); //["red", "yellow", "green"]

//Use pop to remove the last item in an array:
var colors ["red", "orange", "yellow"];
colors.pop(); //["red", "yellow"]

//Shift and Unshift
//Use unshift to add to the front of an array:
var clors = ["red", "orange", "yellow"];
colors.unshift("infrared"); //["infrared","red", "orange", "yellow"]

//Use shift to remove the first item in an array
var clors = ["red", "orange", "yellow"];
colors.shift; //["orange", "yellow"]
//shift also returns the removed element can be store in a variable
var col = colors.shift(); //orange

//IndexOf
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4
//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1

//Slice
//Use slice() to copy parts of an array (slice() take two arguments)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//use slice to coy  the 2nd and 3d fruits
//specify index where the new array starts(1) and ends (3)
var citrus = fruits.slice(1, 3);

//this does not alter the origional fruits array
//fruit contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]
//citrus contains ["Orange, "Lemon"]

//use slice() to copy entire array
var nums = [1, 2, 3];
var otherNums = nums.slice(); //both array are [1,2,3]

//two dimensional arrays
var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];
//result above line:
console.log(friendGroups[2][0]); //Mooney


