"use strict";
console.clear();

// operand 5 + 3 -> operand is the 5 and 3 and operator '+'
let x = 50;
console.log(-x); // invert de sinal

// Math
console.log(2 ** 2); // 4
console.log(4 ** (1 / 2));

// String concatanation with binary
console.log("a" + "b"); // 'ab'
console.log(2 + "1"); // 21

// The order is relevant

console.log("1" + 2 + 2); // 122
console.log(2 + 2 + "1"); // 41

// Unary +
let number = 1;
let boolTest = true;
console.log(+number); // doe's nothing
console.log(+boolTest); // convert to 1

// Tasks
/* The postfix and prefix forms
importance: 5

What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

a -> 2
b -> 2
c = 2
d -> 1
*/

// What are the values of a and x after the code below?
//
// let a = 2;
//
// let x = 1 + (a *= 2);
// a -> 4
// x -> 5
// What are results of these expressions?
//
// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1 // because "" - 1 convert to -> 0 - 1
// true + false // 1 -> 1 + 0
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" '9px'
// "$" + 4 + 5 '$45'
// "4" - 2 // 2
// "4px" - 2 // NaN -> NaN - 2 -> NaN
// // "  -9  " + 5 // '-9  5'
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // 2 -> 0 - 2
//
// importance: 5
//
// Here’s a code that asks the user for two numbers and shows their sum.
//
// It works incorrectly. The output in the example below is 12 (for default prompt values).
//
// Why? Fix it. The result should be 3.
//
// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

//
// alert(a + b); // 12
