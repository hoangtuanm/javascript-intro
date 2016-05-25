//avgNum()

//Write a function avgNum() that accepts an array of numbers and 
//returns the average number in the array

maxNum([1,4,9,12]);		//6.5
maxNum([10,20,30,40]);	//25
maxNum([-5,40,100]);	//45

//Solution
function avgNum(arr) {
	var total = 0;
	for(var i = 0; i < arr.length; i++) {
    total += arr[i];
    var avg = total / arr.length
	}
	return avg;
}