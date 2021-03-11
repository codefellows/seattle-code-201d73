// JS passes through and defines ALL the functions
// that started with function whatEver

// use a function
console.log('booyah','hello there!');

sayHello();

function sayHello() {
  console.log('Hello Bonjour Hola Nihao Salaam');
  let x = 2 + 2;
}

// console.log(sayHello);

sayHello();

function sayGoodbye(recipient) {
  console.log('Goodbye adios aloha arrivaderche ' + recipient);
}


let userName = 'Kyle' ; //prompt('What is your name?');
console.log(userName);

sayGoodbye(userName);

let globalLabel = 'I am global';



function getFullName(firstName, lastName) {

  let localLabel = "I am local";

  if(true) {
    let innerLabel = "inner";
    console.log(localLabel);
  }

  let i = 1000000;
  
  for(let i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i);

  // console.log(innerLabel);

  return firstName + ' ' + lastName;
}

// console.log(firstName);
// console.log(localLabel);

// let fullName;

let fullName = getFullName('Momo', 'Cecilia');

console.log(fullName);





