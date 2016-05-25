//printReverse()

//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order
//that don't actually reverse the array itself

//Problem
printReverse([1,2,3,4,]);
printReverse(["a", "b", "c"]);
//4
//3
//2
//1
>
//"c"
//"b"
//"a"

//Solution
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1,2,3]);



