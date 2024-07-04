// Day 16;
//* Find the minimum value in an array *//

//? Q: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Example: 
// console.log(findMin([5, 10, 2, 8])) //output : 2;
// console.log(findMin([5, -3, 0, 12, -7])) //output : 2;
// console.log(findMin([])) //output : 2;


//* Constrains:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.


function findMin(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];  // Self
        if(element < min){
            min = element
        }
    }return min
}
console.log(findMin([5, 10, 2, 8])) //output : 2;
console.log(findMin([5, -3, 0, 12, -7])) //output : 2;
console.log(findMin([])) //output : 2;