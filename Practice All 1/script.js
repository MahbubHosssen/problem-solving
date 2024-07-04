// Day 1;
// function findLongestWord(str){
//     str = str.split(" ")
//     let longestWord = "";
//     for (let i = 0; i < str.length; i++) {
//         const word = str[i];
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }return longestWord
// }

// console.log(findLongestWord("Watch thapa technicalss javascript course on youtube"))


//Day 2;
// function generateHash(str){
//     if(str.trim().length === 0 || str.length >= 280){
//         return false
//     }

//     str = str.split(" ")
//     let concat = ""
//     for (let i = 0; i < str.length; i++) {
//         const word = str[i];
//         let wordFirstLater = word.replace(word[0], word[0].toUpperCase())
//         concat = concat + wordFirstLater
//     }return "#" + concat;
// }
// console.log(generateHash("My name is Mahbub Hossen")) // output = "#MyNameIsMahbubHossen"


// Day 3;

// function countChar(str, char){
//     str = str.toLowerCase()
//     char = char.toLowerCase()
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(element === char){
//             count++
//         }
//     }return count;

// }

// console.log(countChar("MissIssippiii", "I")) //output: 4;


//Day 4
// function checkTriangleType(num1, num2, num3){
//     if(num1 === num2 && num2 === num3){
//         return "equilateral"
//     }else if(num1 === num2 || num2 === num3 || num1 === num3){
//         return "isosceles"
//     }else{
//         return "scalene"
//     }
// }
// console.log(checkTriangleType(3, 3, 3)) //output: "equilateral";
// console.log(checkTriangleType(3, 4, 3)) //output: "isosceles";
// console.log(checkTriangleType(5, 8, 6)) //output: "scalene";


//Day 5;
// function sortAscending(arr){
//     return arr.sort(function (a, b){
//         return a - b
//     })   
// }
// console.log(sortAscending([5, 3, 1, 8])); //output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8,-5])); //output: [3, 5, 8, 10]
// console.log(sortAscending[0]);


// Day 6;
// function isPalindrome(str){
//     str = str.replace(/\W/g, "")
//     let strR = str.toLowerCase().split("").reverse().join("")
//     console.log(strR)
//     if(str === strR){
//         return true;
//     }else{
//         return false
//     }
// }

// console.log(isPalindrome("A man, a plan, a canal, panama")) //output: true;
// console.log(isPalindrome("racecar")) //output: true;
// console.log(isPalindrome("hello")) //output: flase;


//Day 7;
// function findMax(arr){
//     let max = arr[0];
//     for (let i= 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element > max){
//             max = element
//         }
//     }return max;
// }

// console.log(findMax([1, 5, 3, 9, 2])) //output : 9;
// console.log(findMax([-10, -5, -3, -9, -2])) //output : -2;
// console.log(findMax([5])) // output : 5;


// Day 9
// function calculateAverage(arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         total = total + element
//     }return total / arr.length
// }
// console.log(calculateAverage([5, 10, 2, 8])) //output : 6.25;

// Day 10;
// function arraysAreEqual(arr1, arr2){
//     if(arr1.length != arr2.length){
//         return false;
//     }
//     return arr1.every((element, index) => element === arr2[index])
// }

// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])) //output : true;
// console.log(arraysAreEqual([1, 2, 3], [1, 3, 2])) //output : false;
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 5])) //output : false;
// console.log(arraysAreEqual([], [])) //output : true;


// Day 11;
// function sumOfDigits(digits){
//     digits = Array.from(digits.toString())
//     let sum = 0
//     for (let i = 0; i < digits.length; i++) {
//         const element = digits[i];
//         sum = sum + Number(element)
//     }
//     return sum
// }

// console.log(sumOfDigits(1234)) //output: 10;
// console.log(sumOfDigits(4321)) //output: 10;
// console.log(sumOfDigits(123456)) //output: 21;


//Day 12
// function removeDuplicates(arr){
//     let uniques = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         index = uniques.indexOf(element)
//         if(index === -1){
//             uniques.push(element)
//         }
//     }
//     return uniques
// }
// console.log(removeDuplicates([1, 2, 3, 2, 1, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])) //output : [5, 6, 7, 8, 9];
// console.log(removeDuplicates([1, 2, 3, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([])) //output : [];


//Day 13;
// function countVowels(str){
//     str = str.toLowerCase()
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(vowels.includes(element)){
//             count++
//         }
//     }return count;
// }
// console.log(countVowels("Helloo World")) //output : 4;
// console.log(countVowels("thE quIck brOwn fOx")) //output : 4;
// console.log(countVowels("Brrp")) //output : 0;


//Day 14
// function isPowerOfTwo(num){
//     let output = false;
//     for (let i = 1; i < num; i++) {
//         const element = num[i];
//         if(2**i === num){
//             output = true
//         }
//     }return output;
// }


// console.log(isPowerOfTwo(8)) //output : true;
// console.log(isPowerOfTwo(7)) //output : false;


// Day 15
// function sumOfSquares(arr){
//     let square = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         square = square + element * element;
//     }return square
// }
// console.log(sumOfSquares([1, 2, 3])) //output : 14;
// console.log(sumOfSquares([1, 3, 3])) //output : 19;


// Day 16
// function findMin(arr){
//     let min = arr[0];
//     if(min === undefined){
//         return "any suitable message for empty array"
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element < min){
//             min = element
//         }
//     }return min;
// }
// console.log(findMin([5, 10, 2, 8])) //output : 2;
// console.log(findMin([5, -3, 0, 12, -7])) //output : 2;
// console.log(findMin([])) //output : undefind (or any suitable message for empty array);


// Day 17
// function camelCase
// function camelCase(str){
//     str = str.toLowerCase().split(" ")
//     let sentence = str[0];
//     for (let i = 1; i < str.length; i++) {
//         const element = str[i];
//         let replaceFirstLater = element.replace(element[0], element[0].toUpperCase())
//         sentence = sentence + replaceFirstLater;
//     }return sentence
// }
// console.log(camelCase("hello world tHapa")) //output : helloWorld


//Day 18;
// function isUpperCase(char){
//     if(char === char.toUpperCase()){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isUpperCase("S")) //output : true;
// console.log(isUpperCase("s")) //output : false;


//Day 2
// function generateHash(str){
//     str = str.split(" ")
//     let hash = "";
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         const firstLaterChange = element.replace(element[0], element[0].toUpperCase())
//         hash = hash + firstLaterChange
//     }
//     return "#" + hash;
// }
// console.log(generateHash("My name is Mahbub Hossen")) // output = "#MyNameIsMahbubHossen"


//Day 10
// function arraysAreEqual(arr1, arr2){
//     return arr1.every((currVal, index) => currVal === arr2[index])
// }
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])) //output : true;
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])) //output : false;
// console.log(arraysAreEqual([], [])) //output : true;

//Day 14;
// function isPowerOfTwo(num){
//     let isTrue = false;
//     for (let i = 1; i < num; i++) {
//         if(2**i == num){
//             isTrue = true
//         }
//     }return isTrue;
// }

// console.log(isPowerOfTwo(8)) //output : true;
// console.log(isPowerOfTwo(7)) //output : false;

// Day 20;
// function reverseStr(str){
//     let rStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         const element = str[i];
//         rStr = rStr + element
//     }return rStr
// }

// console.log(reverseStr("Hello")) //output: "olleh";

// function keyValue(arr){
//     let uniqueArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         index = uniqueArr.indexOf(element)
//         if(index === -1){
//             uniqueArr.push(element)
//         }   
//     }
// }

// console.log(keyValue([1, 2, 2, 3, 1, 4, 2]))

// class Phone{
//     constructor(){
//         this.phonePrice = 1000;
//     }
// }
// const phone1 = new Phone(1000)
// class Car extends Phone{
//     constructor(model, price){
//         super()
//         this.model = model;
//         this.price = price
//     }
//     totalPrice(){
//         return this.price + this.phonePrice;
//     }
// }
// const car1 = new Car('1000', 2000);
// console.log(car1.totalPrice())

// একটি ক্লাস থেকে যখন অন্য একটি ক্লাস এর প্রোপারটি বা মেথড ব্যবহার করবো তখন সেটাকে ক্লাস হেরিটেন্স বলবে।

// অনেক গুলো অবজেক্ট এর যদি প্রোপার্টি গুলো একই হয় তখন আমরা ক্লাস ব্যবহার করে থাকি;

// এবার 
// একটি ক্লাস থেকে যখন অন্য একটি ক্লাস এর প্রোপারটি বা মেথড ব্যবহার করবো তখন সেটাকে ক্লাস হেরিটেন্স বলবে;
// যেমনঃ
// class Phone{
//     constructor(){
//         this.phonePrice = 1000;
//     }
// }
// class Car extends Phone{
//     constructor(model, carPrice){
//         super()
//         this.model = model;
//         this.carPrice = carPrice
//     }
//     totalPrice(){
//         return `Car and Phone Total Price ${this.carPrice + this.phonePrice}`;
//     }
// }
// const car1 = new Car( "6568", 2000);
// console.log(car1.totalPrice())
// let a = null;
// console.log(a)


// অনেক গুলো object এর যদি প্রোপার্টি গুলো একই হয় তখন আমরা class ব্যবহার করে থাকি;

// এবার 
// একটি class থেকে যখন অন্য একটি class এর প্রোপারটি ব্যবহার করবো তখন সেটাকে class inheritence বলবে;
// যেমনঃ
// class Phone{
//     constructor(){
//         this.phonePrice = 1000;
//     }
// }
// class Car extends Phone{
//     constructor(model, carPrice){
//         super()
//         this.model = model;
//         this.carPrice = carPrice
//     }
//     totalPrice(){
//         return `Car and Phone Total Price ${this.carPrice + this.phonePrice}$`;
//     }
// }
// const car = new Car( "6568", 2000);
// console.log(car.totalPrice())

// const playwright = require('playwright');

// (async () => {
  // Replace 'playwright-webkit' with your preferred browser ('playwright-chromium' or 'playwright-firefox')
//   const browser = await playwright.chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   try {
    // Search term (replace with your desired word)
//     const searchTerm = 'example';

    // Navigate to the search engine (replace with your target search engine URL)
//     await page.goto('https://www.google.com/');

    // Locate the search input element
//     const searchInput = await page.locator('[name="q"]'); // Adjust selector based on search engine

    // Fill the search input with the term
//     await searchInput.fill(searchTerm);

    // Submit the search form (adjust selector if needed)
//     await page.locator('form[name="f"]').submit();

    // Wait for search results to load (adjust selector or use navigation events if necessary)
//     await page.waitForSelector('.g h3'); // Adjust selector for search result headings

    // Extract and display search results (modify based on your desired format)
//     const results = await page.$$eval('.g h3', (elements) => elements.map(el => el.textContent));
//     console.log(`Search results for "${searchTerm}":`);
//     results.forEach(result => console.log(result));
//   } catch (error) {
//     console.error('Error during search:', error);
//   } finally {
    // Always close the browser context
//     await context.close();
//     await browser.close();
//   }
// })();


// * Day 1
// function findLongestWord (str){
//     if(str.trim().length === 0){
//         return false
//     }
//     str = str.split(" ")
//     let longestWord = "";
//     for (let i = 0; i < str.length; i++) {
//         const word = str[i];
//         if(longestWord.length < word.length){
//             longestWord = word
//         }
//     }return longestWord;

// }
// console.log(findLongestWord("My name is Mahbub Hossen"))

//* Day 2
// function generateHash(str){
//     if(str.trim().length === 0 || str.length > 280){
//         return false
//     }
//     str = str.split(" ")
//     let concat = "";
//     for (let i = 0; i < str.length; i++) {
//         const word = str[i];
//         let capitalizedWord = word.replace(word[0], word[0].toUpperCase())
//         concat = concat + capitalizedWord
//     }
//     return "#" + concat;
// }
// console.log(generateHash("My name is Mahbub Hossen")) // output = "#MyNameIsMahbubHossen"


//*Day 3
// function countChar(str, char){
//     str = str.toLowerCase()
//     char = char.toLowerCase()
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const later = str[i];
//         if(later.includes(char)){
//             count++
//         }
//     }return count;
// }   
// console.log(countChar("MissIssippii", "I")) //output: 4;

//*Day 4

// function checkTriangleType(num1, num2, num3){
//     if(num1 === num2 && num2 === num3){
//         return "equilateral"
//     }else if(num1 === num2 || num2 === num3 || num1 === num3){
//         return "isosceles"
//     }else{
//         return "scalene"
//     }
// }
// console.log(checkTriangleType(3, 3, 3)) //output: "equilateral";
// console.log(checkTriangleType(3, 4, 3)) //output: "isosceles";
// console.log(checkTriangleType(5, 8, 6)) //output: "scalene";


//*Day 5
// function sortAscending(arr){
//     return arr.sort(function(a, b){
//         return a - b;
//     })
// }
// console.log(sortAscending([5, 3, 1, 8])); //output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); //output: [3, 5, 8, 10]
// console.log(sortAscending([0]));


//* Day 6
// function isPalindrome(str){
//     str = str.toLowerCase().replace(/\W/g, "");
//     console.log(str)
//     let strR = str.split("").reverse().join("")
//     if(str === strR){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPalindrome("A man, a plan, a canal, panama")) //output: true;
// console.log(isPalindrome("racecar")) //output: true;
// console.log(isPalindrome("hello")) //output: flase;

//*Day 7
// function findMax(arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(max < element){
//             max = element
//         }
//     }return max;
// }
// console.log(findMax([1, 5, 3, 9, 2])) //output : 9;
// console.log(findMax([-10, -5, -3, -9, -2])) //output : -2;
// console.log(findMax([5])) // output : 5;

//*Day 9

// function calculateAverage(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum = sum + element;
//     }
//     return sum / arr.length
// }
// console.log(calculateAverage([5, 10, 2, 8])) //output : 6.25;

//*Day 10
// function arraysAreEqual(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     return arr1.every((currEle, index) => currEle === arr2[index])
// }
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])) //output : true;
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])) //output : false;
// console.log(arraysAreEqual([], [])) //output : true;


//*Day  11

// function sumOfDigits(digit){
//     digit = Array.from(String(digit))
//     let sum = 0;
//     for (let i = 0; i < digit.length; i++) {
//         const element = digit[i];
//         sum = sum + Number(element)
//     }
//     return sum;
// }
// console.log(sumOfDigits(1234)) //output: 10;
// console.log(sumOfDigits(4321)) //output: 10;
// console.log(sumOfDigits(123456)) //output: 21;


//*day 12
// function removeDuplicates(arr){
//     let uniques = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         index = uniques.indexOf(element)
//         if(index === -1){
//             uniques.push(element)
//         }
//     }return uniques;
// }
// console.log(removeDuplicates([1, 2, 3, 2, 1, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])) //output : [5, 6, 7, 8, 9];
// console.log(removeDuplicates([1, 2, 3, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([])) //output : [];

//*day 13
// function countVowels(str){
//     let vowels = ["a", "e", "i", "o", "u"]
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(vowels.includes(element)){
//             count++;
//         }
//     }return count
// }
// console.log(countVowels("Helloo World")) //output : 4;
// console.log(countVowels("thE quIck brOwn fOx")) //output : 4;
// console.log(countVowels("Brrp")) //output : 0;

//*Day 14
// function isPowerOfTwo(num){
//     let value = false;
//     for (let i = 1; i <= 8; i++) {
//         if(2**i === num){
//             value = true
//         }
//     }return value
// }
// console.log(isPowerOfTwo(8)) //output : true;
// console.log(isPowerOfTwo(7)) //output : false;


//*Day 15
// function sumOfSquares(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum = sum + element * element;
//     }return sum
// }

// console.log(sumOfSquares([1, 2, 3])) //output : 14;

//*Day 16
// function findMin(arr){
//     let min = arr[0]; 
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(min > element){
//             min = element
//         }
//     }return min;
// }
// console.log(findMin([5, 10, 2, 8])) //output : 2;
// console.log(findMin([5, -3, 0, -12, -7])) //output : 2;
// console.log(findMin([])) //output : undefind (or any suitable message for empty array);

//*Day 17
// function camelCase(str){
//     str = str.trim().toLowerCase().split(" ");
//     let firstWord = str[0]
//     let sentence = "";
//     let camel = str[0];
//     for (let i = 1; i < str.length; i++) {
//         const element = str[i];
//         upperCase = element.replace(element[0], element[0].toUpperCase())
//         sentence = sentence + upperCase
//     }return firstWord + sentence
// }
// console.log(camelCase("hello world")) //output : helloWorld

// function snakeCase(str){
//     str = str.trim().toLowerCase().split(" ")
//     let firstWord = str[0]
//     let sentence = ""
//     for (let i = 1; i < str.length; i++) {
//         const element = str[i];
//         sentence = sentence + "_" + element
//     }return firstWord + sentence
// }
// console.log(snakeCase("hello world")) //output : helloWorld


//*Day 18
// function isUpperCase(char){
//     if(char === char.toUpperCase()){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isUpperCase("S")) //output : true;
// console.log(isUpperCase("s")) //output : false;

//*Day 19;

// function startWith(str, word){
//     word = word.toLowerCase()
//     str =str.toLowerCase().split(" ")
//     if(str[0] === word){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(startWith("Hello world", "hello")) //output: true;
// console.log(startWith("Hello world", "world")) //output: false;

//*Day 20

// function reverseStr(str){
//     let rStr = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         rStr = rStr + str[i]
//     }return rStr
// }

// console.log(reverseStr("Hello")) //output: "olleh";

//*Day 21
// function calculateMean(nums){
//     if(nums.length === 0){
//         return 0;
//     }
//     total = 0
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         total = total + element
//     }return total / nums.length;
// }
// console.log(calculateMean([1, 2, 3, 4, 5])); //output: 3;
// console.log(calculateMean([10, 20, 30])); //output: 20;
// console.log(calculateMean([-1, 0, 1])); //output: 0;
// console.log(calculateMean([])); //output: 0;

//*Day 22
// function findMedian(arr){
//     median1 = 0;
//     median = arr.length / 2;
//     if(arr.length / 2 === 1){
        
//     }
// }
// console.log(findMedian([5, 3, 9, 1, 7])); //output: 9;
// console.log(findMedian([2, 4, 6, 8])); //output: 5;
// console.log(findMedian([1, 3, 5, 7, 9, 11])); //output: 6;

//*Day 1
// function findLongestWord(str){
    // if(str.trim().length === 0){
    //     return false;
    // }
//     str = str.split(" ")
//     let longestWord = "";
//     for(i = 0; i < str.length; i++){
//         const element = str[i]
//         if(longestWord.length < element.lenght){
//             longestWord = element
//             console.log(longestWord)
//         }
//     }return longestWord
// }
// console.log(findLongestWord("Watch thapa technical javascript course on youtube"))

// function findLongestWord(str){
//     if(str.trim().length === 0){
//         return false
//     }
//     str = str.split(" ")
//     let longestWord = "";
//     for(i = 0; i < str.length; i++){
//         const element = str[i]
//         if(element.length > longestWord.length){
//             longestWord = element
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord("Watch thapa technical javascript course on youtube"))

//*Day 2
// function generateHash(str){
//     if(str.trim().length === 0 || str.length > 280){
//         return false
//     }
//     let concat = ""
//     str = str.split(" ")
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         const changeFirstLater = element.replace(element[0], element[0].toUpperCase())
//         concat = concat + changeFirstLater;
//     }
//     return "#"+concat;
// }
// console.log(generateHash("My name is Mahbub Hossen")) // output = "#MyNameIsMahbubHossen"

//*Day 3
// function countChar(str, char){
//     str = str.toLowerCase()
//     char = char.toLowerCase()
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(char.includes(element)){
//             count++
//         }
//     }return count;
// }
// console.log(countChar("MissIssippi", "I")) //output: 4;

//*Day 4
// function checkTriangleType(num1, num2, num3){
//     if(num1 === num2 && num1 === num3){
//         return "equilateral"
//     }if(num1 === num2 || num2 === num3 || num1 === num3){
//         return "isosceles"
//     }else{
//         return "scalene"
//     }
// }
// console.log(checkTriangleType(3, 3, 3)) //output: "equilateral";
// console.log(checkTriangleType(3, 4, 3)) //output: "isosceles";
// console.log(checkTriangleType(5, 8, 6)) //output: "scalene";

//*Day 5
// function sortAscending(arr){
//     return arr.sort(function(a, b){
//         return a-b
//     })
// }
// console.log(sortAscending([5, 3, 1, 8])); //output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); //output: [3, 5, 8, 10]
// console.log(sortAscending[0]);

// //*Day 6
// function isPalindrome(str){
//     str = str.toLowerCase().replace(/\W/g, "")
//     strRe = str.split("").reverse().join("")
//     if(str === strRe){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(isPalindrome("A man, a plan, a canal, panama")) //output: true;
// console.log(isPalindrome("racecar")) //output: true;
// console.log(isPalindrome("hello")) //output: flase;

//*Day 7
// function findMax(arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element > max){
//             max = element
//         }
//     }return max
// }
// console.log(findMax([1, 5, 3, 9, 2])) //output : 9;
// console.log(findMax([-10, -5, -3, -9, -2])) //output : -2;
// console.log(findMax([5])) // output : 5;

//*Day 9

// function calculateAverage(arr){
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         max = max + element / arr.length
//     }
//     return max 
// }
// console.log(calculateAverage([5, 10, 2, 8])) //output : 6.25;

//*Day 10
// function arraysAreEqual(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     return arr1.every((currEl, index) => currEl === arr2[index])
// }
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])) //output : true;
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])) //output : false;
// console.log(arraysAreEqual([], [])) //output : true;

//*Day 11

// function sumOfDigits(digits){
//     digits = digits.toString().split("")
//     let count = 0;
//     for (let i = 0; i < digits.length; i++) {
//         const element = digits[i];
//         count = count + Number(element)
//     }
//     return count;
// }

// console.log(sumOfDigits(1234)) //output: 10;
// console.log(sumOfDigits(4321)) //output: 10;
// console.log(sumOfDigits(123456)) //output: 21;

//*Day 12
// function removeDuplicates(arr){
//     let uniqueArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         unique = uniqueArr.indexOf(element)
//         if(unique === -1){
//             uniqueArr.push(element)
//         }
//     }return uniqueArr;
// }
// console.log(removeDuplicates([1, 2, 3, 2, 1, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])) //output : [5, 6, 7, 8, 9];
// console.log(removeDuplicates([1, 2, 3, 4])) //output : [1, 2, 3, 4];
// console.log(removeDuplicates([])) //output : [];

//*Day 13
// function countVowels(str){
//     let vowels = ["a", "e", "i", "o", "u"]
//     str = str.toLowerCase()
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(vowels.includes(element)){
//             count++
//         }
//     }return count;
// }
// console.log(countVowels("Helloo World")) //output : 4;
// console.log(countVowels("thE quIck brOwn fOx")) //output : 5;
// console.log(countVowels("Brrp")) //output : 0;

//*day 14
function isPowerOfTwo(num){
    let value = false;
    for (let i = 1; i < num; i++) {
        if(2**i === num){
            value = true
        }
    }return value
}
console.log(isPowerOfTwo(8)) //output : true;
console.log(isPowerOfTwo(7)) //output : false;
