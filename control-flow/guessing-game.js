//create secrectNumber
var secrectNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if (guess === secrectNumber) {
	alert("You got it right");
}

//otherwise, check if higher
else if (guess > secrectNumber) {
	alert("Too high. Guess again");
}

//otherwise, check if lower
else {
	alert("Too low. Guess again");
}