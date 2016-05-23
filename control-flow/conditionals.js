# Conditionals (making decisions with code)

#Exercise
If age is negative
	print an error message

If age is 21
	print "happy birthday!!"

If age is odd
	print "your age is odd"

If age is a perfect square
	print "age is perfect square" 

#Solution
var age = prompt("How old are you?");36
var isOdd = !((age % 2) === 0);
var isPerfectSquare = ((age % age) === 0);

if (age < 0 ) {
	alert("Error: age is < 0");
	console.log("Error: age is < 0");
} else if (age === 21 || age == "21") {
	alert("Happy birthday");
	console.log("Happy birthday");
} else if (isOdd) {
	alert("Your age is odd!");
	console.log("Your age is odd!");
} else if (isPerfectSquare) {
	alert("perfect square!");
	console.log("perfect square!");
} else {
	alert("Your age is " + age)
	console.log("Your age is " + age)
}