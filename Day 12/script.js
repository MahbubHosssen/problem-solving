// Day 12;

//? Q: Write a function that takes an array of integers as input and removes any duplicte elements, return a new array with only the unique elements.

//* Examlple:
// console.log(removeDuplicates([1, 2, 3, 2, 1, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])) //output : [5, 6, 7, 8, 9];
// console.log(removeDuplicates([1, 2, 3, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([-3, 1, -2, 3, 4, -2])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([])) //output : [];

// The new Set() method in javascript creates a new set object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object references.

//* Constrains:
// The input array may contain both positive and negative integers.
// The input array may be empty.
// The elements in the input array are not guaranteed to be sorted.
// The output array should return the original order of elements from the input array.

function removeDuplicates(arr){
    // let newArr = [...new Set(arr)] // 2nd Method;
    // console.log(newArr)

    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const uniqueElement = unique.indexOf(element)  // first Method
        if(uniqueElement == -1){
            unique.push(element)
        }
    }return unique;
}
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])) //output : [1, 2, 3, 4];
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])) //output : [5, 6, 7, 8, 9];
console.log(removeDuplicates([1, 2, 3, 4])) //output : [1, 2, 3, 4];
console.log(removeDuplicates([])) //output : [];
console.log(removeDuplicates([-3, 1, -2, 3, -5, 4, -2, -5])) //output : [1, 2, 3, 4];