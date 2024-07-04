// Day 18;
//? Q: Write a function to check if a charecter is uppercase or lowecase.

//* Example Usage:
// console.log(isUpperCase("S")) //output : true;
// console.log(isUpperCase("s")) //output : false;


//* contrains:
// The input charecter will be a single charecter.
// The charecter can be any printable ASCII charecter.
// You can assume that the input will always be a string of length 1.

//* Note: 
// Ensure that the function correctly identifies uppercase charecters based on their ASCII values.
// optimize the function to handle edge cases officientlty.

function isUpperCase(later){
    if(later.toUpperCase() === later){
        return true;
    }else{
        return false
    }
}
console.log(isUpperCase("M")) 
console.log(isUpperCase("s")) 