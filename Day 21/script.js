//Day 21;
//? Q: Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//* Todo in match, the mean is the average of a set of numbers or the numeric value that represents the center of a calculation of numbers.

//* Constrins:
// The input array may contain positive and negative integers.
// The input array may be empty. if it is empty, the function should return 0;

//* Example:
// console.log(calculateMean(1, 2, 3, 4, 5)); //output: 3;
// console.log(calculateMean(10, 20, 30)); //output: 20;
// console.log(calculateMean(-1, 0, 1)); //output: 0;
// console.log(calculateMean([])); //output: 0;

function calculateMean(nums){
    // console.log(nums)
    if(nums.length === 0){
        return 0
    }
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total = total + num;
    }return total / nums.length
    
}
console.log(calculateMean([1, 2, 3, 4, 5])); //output: 3;
console.log(calculateMean([10, 20, 30])); //output: 20;
console.log(calculateMean([-1, 0, 1])); //output: 0;
console.log(calculateMean([])); //output: 0;