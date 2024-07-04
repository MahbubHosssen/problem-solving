// Day 7;
//? Q: Write a function findMax that takes an array of numbers as input and returns the maximum numbers i the array.

// Example Usage:
// console.log(findMax([1, 5, 3, 9, 2])) //output : 9;
// console.log(findMax([-10, -5, -3, -9, -2])) //output : -2;
// console.log(findMax([5])) // output : 5;

function findMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element > max){
            max = element
        }
    }
    return max;
}

console.log(findMax([1, 5, 3, 9, 2])) //output : 9;
console.log(findMax([-10, -5, -3, -9, -2])) //output : -2;
console.log(findMax([5])) // output : 5;