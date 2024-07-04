// Day 19;

//? Q: Write a function to check if a given string starts with a spacific substring.

//* Input: 
//? str: A string (e.g, 'Hello world')
//? subStr : A substring to check if it starts the given string (e.g, hello')
//? Output : true if the given string starts with the spacifid substring, otherwise false.

//* Example:
// console.log(startWith("Hello world", "hello")) //output: true;
// console.log(startWith("Hello world", "world")) //output: false;

function startWith(str, word){
    // str = str.toLowerCase().split(' ')
    // word = word.toLowerCase()
    // if(str[0] === word){  // self
    //     return true
    // }else{
    //     return false
    // }

    return str.toLowerCase().startsWith(word.toLowerCase()) //Thapa
}

console.log(startWith("Hello world", "hello")) //output: true;
console.log(startWith("Hello world", "world")) //output: false;