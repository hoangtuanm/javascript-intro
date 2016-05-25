//sumArray()

//Write a function sumArray() that accepts an array of numbers and 
//returns the sum of all numbers in the array

sumArray([1,2,3]); 		//6
sumArray([10,3,10,4]); 	//27
sumArray([-5,100]); 	//95

//Solution
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}