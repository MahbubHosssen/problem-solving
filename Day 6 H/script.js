// Day 6;
//? Q: Write a function to determine whether a given string is a palindrome or not. A palindrome is a word phrase, number or other sequence of charecters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

// console.log(isPalindrome("A man, a plan, a canal, panama")) //output: true;
// console.log(isPalindrome("rececar")) //output: true;
// console.log(isPalindrome("hello")) //output: flase;

//* Contrains:

// The input string may contain letters, digits, spaces, punctuation and special charecters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces, punctuation and special charecters when determinig if a string is palindrome.
// The function should return true if the input string is palindrome and false otherwise.


function isPalindrome(str){
    str = str.toLowerCase().replace(/\W/g, "");
    console.log(str)
    let rStr = str.split("").reverse().join("")
    // console.log(str1)
    if(str === rStr){
        return true;
    }
    else{
        return false; 
    }
}

console.log(isPalindrome("A man, a plan, a canal, panama")) //output: true;
console.log(isPalindrome("racecar")) //output: true;
console.log(isPalindrome("hello")) //output: flase;