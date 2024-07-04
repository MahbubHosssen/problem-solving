// Day 5
//? Q: Write a function to sort an array of numbers in an ascending order.

//* Example:
// console.log(sortAscending([5, 3, 1, 8])); //output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); //output: [3, 5, 8, 10]
// console.log(typeof sortAscending[2]);

// todo Requirements:
//? The function should take an array of numbers as input.
//? If should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

function sortAscending(arr){
    return arr.sort(function(a, b){
        return a - b
    })
}
const arry = [5, 3, 1, 8];
console.log(sortAscending(arry)); //output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); //output: [3, 5, 8, 10]
// console.log(typeof sortAscending[2]);



