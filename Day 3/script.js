// Day 3;

//*  Count Occurances of charecters  *//

//? Q: Write a function called count char that takes two parameters: a string and a charecter to count. The function should return the number of times the specified charecter appears in the string.

// Example:
// console.log(countChar("MissIssippi", "I")) //output: 4;

//*todo contrains:
// The function should be case-sensitive.
// The function should handle both lowercase and uppercase charecter.
// The charecter parameter can be any printable ASCII charecter (The function should accept any charecter that is part of the ASCII charecter set and is printable)

function countChar(str, char){
    str = str.toLowerCase()
    char = char.toLowerCase()
    let count = 0;
    str = str.split("");
    str.map(later => {
        if(later.includes(char)){
            count++;
        }
    })
    return count;

    // for (let i = 0; i < str.length; i++) {
    //     const later = str[i];
    //     if(later == char){
    //         count++;
    //     }
    // }return count
}
console.log(countChar("MissIssippi", "I"))