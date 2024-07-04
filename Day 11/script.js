//? Q: Write a function that takes a number as input and returs the sum of its digits.

//* Example:
// console.log(sumOfDigits(1234)) //output: 10;
// console.log(sumOfDigits(4321)) //output: 10;
// console.log(sumOfDigits(123456)) //output: 21;

//* Constrains:
// The input number will always be a positive integer.
// The input number can have a multiple digits.
// The output should be the sum of all the digits in the input number.

//* Homework:
// This function calculates the sum of digits without converting the number to a string.



function sumOfDigits(nums){

    let sum = 0;
    let num1 = Array.from(nums.toString())

    num1.map(num => {
        sum = sum + Number(num)
    })
    
    return sum

    // for (let i = 0; i < num.length; i++) {
    //     const element = num[i];
    //     sum = sum + Number(element)
    // }return sum
}
console.log(sumOfDigits(1234)) //output: 10;
console.log(sumOfDigits(4321)) //output: 10;
console.log(sumOfDigits(123456)) //output: 21;