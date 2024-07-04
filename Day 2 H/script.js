// Day 2;

//? Q: You are required to implement a function generateHash that generates a hash tag from a given input string. The hash Tag should be constructed as follows.

//? The input string should be converted to a hash tag formate, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is generate than 280 charecters or if the input string is empty or contains only whitespaces, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with it.
//* Write a function generateHash to accomplish this task.

//* Example:
// console.log(generateHash("My name is Mahbub Hossen")) // output = "#MyNameIsMahbubHossen";


function generateHash(str){
    if(str.trim().length === 0 || str.length > 280){
        return false
    }
    let wordHash = ""
    str = str.split(" ")

    str = str.map(word => word.replace(word[0], word[0].toUpperCase()))
    return "#" + str.join("")

    // for (let i = 0; i < str.length; i++) {
    //     const word = str[i];
    //     let changeFirst =  word.replace(word[0], word[0].toUpperCase())
    //     wordHash = wordHash + changeFirst
    // }return "#" + wordHash
}
console.log(generateHash("My Name is Mahbub Hossen I am from dhaka"))