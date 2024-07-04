// Day 4;
//? Q: Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

//* Examples:
// console.log(checkTriangleType(3, 3, 3)) //output: "equilateral";
// console.log(checkTriangleType(3, 4, 3)) //output: "isosceles";
// console.log(checkTriangleType(5, 8, 6)) //output: "scalene";

//todo the function should adhere to the following rules:
//? If all three side are equal length, return "equilateral"
//? If only two sides are equal length, return "isosceles"
//? If all three sides are different lengths, return "scalene";


function checkTriangleType(num1, num2, num3){
    if(num1 === num2 && num2 === num3){
        return "equilateral";
    }else if(num1 === num2 || num1 === num3 || num2 === num3){
        return "isosceles"
    }else{
        return "scalene"
    }
}
console.log(checkTriangleType(3, 3, 3)) //output: "equilateral";
console.log(checkTriangleType(3, 4, 3)) //output: "isosceles";
console.log(checkTriangleType(5, 8, 6)) //output: "scalene";