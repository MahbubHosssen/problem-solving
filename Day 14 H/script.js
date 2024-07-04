// Day 14;

//? Q: Write a function called isPowerOfTwo that takes an integer number as input and returns true if number is a power of two, and false otherwise.

//* Example:
// console.log(isPowerOfTwo(8)) //output : true;
// console.log(isPowerOfTwo(7)) //output : false;

//* Notes:
// The input number will be a positive integer.
// Zero and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, and false otherwise.

// We can solve it using bitwise operator too but its your chance todo it and let me know in the comment section

function isPowerOfTwo(num){
    let output = false;
    for (let i = 1; i < num; i++) {
        if(2**i == num){
            output = true
        }
    }return output
}
console.log(isPowerOfTwo(8)) //output : true;
console.log(isPowerOfTwo(7)) //output : false;