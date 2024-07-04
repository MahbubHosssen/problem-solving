// Day 20;
//? Q: Write a function to reverse a string without using ant built-in methods or libraries. The function should take an string as input and return the reversed string.

//* Example:
// console.log(reverseStr("Hello")) //output: "olleh";

function reverseStr(str){
    let rStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        rStr = rStr + str[i]
    }return rStr
}
console.log(reverseStr("Hello")) //output: "olleh";