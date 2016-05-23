// While Loops (repeat code WHILE a condition is true)

while (someCondition) {
	//run some code
}

// Very similar to an if statement, EXCEPT it repeats a given code block instaed of just running once.

// Example 1

var count = 1;

while (count < 6) {
	console.log("count is " + count);
	count++;
}

//Example 2
 
 var count = 5;

while (count <= 20) {
	console.log("count is " + count);
	count+=2;
}

// Example 3

// String we're looping over;
var str = "hello";

//first character is at the index
var count = 0;

while (count < str.length) {
	console.log(str[count]);
	count++;
} 

