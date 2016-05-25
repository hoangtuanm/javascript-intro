//maxNum()

//Write a function maxNum() that accepts an array of numbers and 
//returns the maximum number in the array

maxNum([1,2,3]);		//3
maxNum([10,3,10,4]);	//10
maxNum([-5,100]);		//100

//Solution
function maxNum(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

//other method
function maxNum(arr) {
  var len = arr.length; 
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

//other method
var arr = [1,3,5];

Array.prototype.max = function() {
  return Math.max.apply(null, this);
}
console.log(arr.max());