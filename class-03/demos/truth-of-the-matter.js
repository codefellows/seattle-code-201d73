// What is the truth

let aThingIsTrue = true;
let faveColor = 'green';
let colorResponse = 'purple';

let a = 2;
let b = 4;
let c = 5;

// if(a + b > a + c) {
//   console.log('truly it is')
// } else {
//   console.log('not true');
// }

// Logical operators OR and AND 
// || , &&

// if(a === 2 && b === 5) {
//   console.log('yep');
// } else {
//   console.log('nope');
// }

let value = ``;

// if(value) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

// The falsy things are...
// false
// 0
// 0.0
// undefined
// null
// NaN
// an empty string

value = true;
let otherValue = true;

// if(value && otherValue) {
//   console.log('truthy;')
// } else {
//   console.log('falsy')
// }

if(value || otherValue) {
  console.log('or condition met');
} else {
  console.log('or condition NOT met');
}


// common use of short circuiting

// lets say a userName variable may or may not have been defined somewhere in application
let userName = 'Kyle';

// then way later in code we need to check if it's been defined, and give a value of 'unknown' if not

// option 1
// if(userName) {
//   // leave as is
// } else {
//   userName = 'unknown';
// }

// option 2 - Negation
// if(!userName) {
//   userName = 'unknown';
// }

// Option 3 - Short Circuit
userName = userName || 'unknown';

console.log('user name', userName);

// The way negation operator works
// determine the truthiness after the ! and negate
console.log(!'');