'use strict'
//Dynamics Typed
let message = 1234;
message = "hello"; // No errors

// Infinity numbers:
let inf = 1 / 0;
console.log(inf);

// or just Infinity

inf = Infinity;

console.log(inf);

// NAN return a no numeric number -> not a number : 

let notANumber = "olá" / 2;

console.log(notANumber);

// BIG INT 
const bigInt = 32132142148217348217382147213214213n;

console.log(bigInt);

// String 

let name = 'Marcos';

console.log(`Hello ${name}, welcome!`);

// Boolean 

let nameFieldChecked = true;
let ageFieldChecked = false;  

// or in result of comparisons
let isGreater = 4 > 1; 
console.log(isGreater);

// null 
let age = null;
console.log(age);

// undefined
let whatYAge;
console.log(whatYAge);

// typeof
console.log(typeof nameFieldChecked);
console.log(typeof bigInt);
console.log(typeof notANumber);
console.log(typeof Math);
console.log(typeof alert);

// Tasks
// What is the output of the script?

      // let name = "Ilya";
      //
      // alert( `hello ${1}` ); hello 1
      //
      // alert( `hello ${"name"}` ); // hello name 
      //
      // alert( `hello ${name}` ); // hello Ilya


