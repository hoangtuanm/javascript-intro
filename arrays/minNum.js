//minNum()

//Write a function minNum() that accepts an array of numbers and 
//returns the minimum number in the array

maxNum([1,2,3]);		  //1
maxNum([10,3,10,4]);	//3
maxNum([-5,100]);		  //-5

//Solution
function minNum(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//other method
var arr = [1,3,5];

Array.prototype.min = function() {
  return Math.min.apply(null, this);
}
console.log(arr.min());