// Day 13;
//? Q: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', 'u' as vowels (both lowercase and uppercase).

//* Example:
// console.log(countVowels("Hello World")) //output : 3;
// console.log(countVowels("thE quIck brOwn fOx")) //output : 5;
// console.log(countVowels("Brrp")) //output : 0;

//* Constrains:
// The input string may contain letters in both uppercase and lowercase.
// The ouput should be a non-negative integer representing the count of vowels in the input string.

function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u"]
    str = str.split("")
    let count = 0;
    for (let i = 0; i < str.length; i++) {  
        const element = str[i];  //  Self + Thapa
        if(vowels.includes(element.toLowerCase())){
            count++;
        }
    }return count;
}
console.log(countVowels("Hello World")) //output : 3;
console.log(countVowels("thE quIck brOwn fOx")) //output : 5;
console.log(countVowels("Brrp")) //output : 0;