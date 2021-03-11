// doing several times
// under certain conditions

// let condition = false;
// let counter = 0;

// while(counter < 10) {

//   counter += 1;

//   if(counter === 2) {
//     continue;
//   } else if (counter === 10) {
//     console.log('done!')
//     break;
//   }

//   console.log('jumping jacks', counter);
// }

// While loop checks condition first

// let userResponse = prompt('Wanna play?');

// userResponse = userResponse.toLowerCase();

// while(userResponse !== 'y') {
//   userResponse = prompt('I really need a y');
// }

// console.log('finally got a y');


// Do While does "the thing" once then checks condition

// let userResponse;

// do {

//   userResponse = prompt("Wanna play?")
  
//   userResponse = userResponse.toLowerCase();

// } while(userResponse !== 'y');

// console.log('finally got a y');


// For loop
for(let i = 0; i < 10; i += 1) {
  console.log("Jumping Jack", i);
}