'use strict';

// references to the elements for form and ul
const orderFormElem = document.getElementById('orderForm');
const previousOrdersUlElem = document.getElementById('previousOrders');

// create a constructor function for the Coffee Drinks
//name=Sara&size=8&milk=soy&drinkType=americano
function Coffee(name, size, milk, drinkType) {
  // this is the new instance of coffee we are creating
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.drinkType = drinkType;

  // an array for all Coffee
  // add this Coffee into the array
  Coffee.all.push(this);
}
Coffee.all = [];


// RENDER the drinks to the page
Coffee.prototype.renderCoffee = function () {
  // create an LI and append it to the previousOrdersUlElem
  const previousOrdersLiElem = document.createElement('li');
  previousOrdersUlElem.appendChild(previousOrdersLiElem);
  // create a p elem and append it to the LI
  const previousOrdersPElem = document.createElement('p');
  previousOrdersLiElem.appendChild(previousOrdersPElem)
  // add text Content to the p element
  previousOrdersPElem.textContent = `${this.name} ordered a ${this.size}oz ${this.drinkType} with ${this.milk} Milk`
  // `Sara ordered a 12oz Americano with Soy Milk`
}
// fuction that itterates through my Coffee.all and calls renderCoffee on each individual Coffee
function renderAllCoffee() {
  // clear inner html for the ul
  previousOrdersUlElem.innerHTML = '';


  // loop through all coffees and render them
  for (let drink of Coffee.all) {
    drink.renderCoffee()
  }
}

// Getting items
function getOrders() {
// getItems method
  let orders = localStorage.getItem('orders')
// parse
  // check if I got something back
  if (orders !== null) {
    let parsedOrders = JSON.parse(orders);
    console.log(parsedOrders);
    // they aren't COFFEE objects
    // organize it through the constructor
    for (let drink of parsedOrders) {
      new Coffee(drink.name, drink.size, drink.milk, drink.drinkType);
    }
    // render all coffees
    renderAllCoffee();
  }

  
  
}



// Setting items
function setOrders() {
  console.log(Coffee.all)
  // stringify
  let stringifiedOrders = JSON.stringify(Coffee.all);
  console.log(stringifiedOrders);
  // setItems method
  localStorage.setItem('orders', stringifiedOrders);
}

// event listener for the form
function handleSubmit(event) {
  event.preventDefault();
  // get back all input info from the target
  let name = event.target.name.value;
  let size = event.target.size.value;
  let milk = event.target.milk.value;
  let drinkType = event.target.drinkType.value;
  // organize it through the constructor
  new Coffee(name, size, milk, drinkType);
  // update storage
  setOrders();
  // render all coffees to the page
  renderAllCoffee();
  event.target.reset()
}

getOrders();
orderFormElem.addEventListener('submit', handleSubmit);

// UTILIZE LOCAL STORAGE
// JSON - Javascript object notation - minimized version of data - great for sending data
// stringified - turns the data into strings and minimizes whitespaces and space







