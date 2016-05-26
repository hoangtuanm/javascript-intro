//Objects
//Object - Store data in key-value pairs
//Unlike Arrays, Ojects have no order
//Array and Object use key value pair, but array are special subset of key value pair where the key always the number and always in order; 
//...an object the key can be anything, doesn't matter if it a number and the name etc,. and no special order.
//use an array instead of Object
var person = ["Cindy", 32, "Minsoula"];

//to retrieve the person's hometown:
person[2] //this is not very meaningful code, it requires to provide index number

//This is very perfect use case for an Object
var person = {
	name: "Cindy",
	age: 32,
	city: "Minsoula"
};

//Creating Objects
//Like arrays, there are a few methods of nitializing objects

//make an empty object and then add to it
var person = {};
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

//Nesting: using array in conjunction with objects
//Array
var posts = [
	{
		//objects nested
		title: "Cats ar emediocre",
		author: "Author Name",
		//array nested
		comments: ["Awesome post", "terrible post"]
	},
	{
		//objects nested
		title: "Cats are actually awesome",
		author: "Author Name 2",
		//array nested
		comments: ["Love this", "Not very nice"]
	}
];
//Retrieve data from posts[]
posts[0].author
posts[1].title
posts[0].comments[1]

//another example
var someObject = { 		//object
  friends: [ 			//nested array
    {name: "Malfoy"},	  
    {name: "Crabbe"},	  
    {name: "Goyle"}		  
  ],
  color: "baby blue",
  isEvil: true
};
//retrieve "Malfoy" from someObject
someObject.friends[0].name

//another way of initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
persone.city = "LA";

//Retrieving Data from Object
//bracket notation, similiar to arrays:
console.log(person["name"]);
//dot notation:
console.log(person.name);

//Updating Data
//Just like an array: access a property and reassign it
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

//to update age
person["age"] += 1;
//to update city
person.city = "London";

//There are a few differences between the 2 notations:
//cannot use dot notation if the property starts with a number
someObject.1blah 	// INVALID
someObject["1blah"] //VALID

//lookup using a variable with bracket notation
var str = "name";
someObject.str 	//doesn't look for "name"
someObject.str  //does evaluate str and looks for "name"

//cannot use dot notation for property names with spaces
someObject.fav color   //INVALID
someObject["fav color"]; //VALID



