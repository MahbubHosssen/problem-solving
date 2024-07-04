// Day 17;
//? Q: Write a function to convert a string to camelCase and snake-case;

//*Example:
// console.log(camelCase("hello world")) //output : helloWorld

//* todo Homework
// console.log(snake_case("helloWorld")) //output : hello_world

function toCamelCase(str){
    str = str.trim().toLowerCase().split(" ");
    let firstWord = str[0];
    let totalWord = "";
    for (let i = 1; i < str.length; i++) {  // Self
        const element = str[i];
        let elementReplace = element.replace(element[0], element[0].toUpperCase());
        totalWord = totalWord + elementReplace;
    }return firstWord + totalWord;
}   
console.log(toCamelCase("my name is mahHub hOSSen"))

