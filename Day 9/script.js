// Day 9;
//  Calculate Average  //

//? Q: Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

//* Your Function should:
// accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Devide the sum by the total number of elements in the array to find the average.
// Return the calculate average

//* Example:
// console.log(calculateAverage([5, 10, 2, 8])) //output : 6.25;

//* Note:
// Ensure the function handles arrays of any length.
// The average should be returned as a floating point number.

function calculateAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum = sum + element / arr.length
    }
    return sum
}
console.log(calculateAverage([5, 10, 2, 8]))