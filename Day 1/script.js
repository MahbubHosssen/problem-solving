// Day 1;

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string, if there are multiple longest words, return the first one encountered.

//* Contains:

//? The input string may contain alphabetic charecters, digits, spaces and punctuation.
//? The input string is non empty
//? The input string may contain multiple words separated by spaces.

//* Note:
//? if the input string is empty or contains only whitespace, the function should return false
//? The function should ignore leading and trailing whitespace when determine the longest word.

// Example:
// console.log(findLongestWord("Watch thapa technical javascript course on youtube"))


function findLongestWord(str){
    if(str.trim().length === 0){
        return false;
    }
    str = str.split(" ")
    let longestWord = "";
    // for (let i = 0; i < str.length; i++) {
    //     const word = str[i];
    //     if(word.length > longestWord.length){
    //         longestWord = word;
    //     }
    // }return longestWord;
    str.map(word => {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord;
}
console.log(findLongestWord("Watch thapa technical javascript course on youtube"))