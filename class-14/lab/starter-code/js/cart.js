/* global Cart */
'use strict';

let button = document.createElement('button');
button.addEventListener('click', removeItemFromCart);
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart.items)  // .length after items to see how long the array is
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tBodyElem = document.getElementsByName('tbody')
  tBodyElem.innerHtml = '';
  // const trElem = document.createElement('tr');
  // tBodyElem.appendChild(trElem);

  // trElem.remove();
}

// TODONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODONE: Find the table body
  const tBodyElem = document.getElementsByName('tbody');

  // TODONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++); {
    let currentCartItem = cart.items[i];

    // TODONE: Create a TR
    const trElem = document.createElement('tr');
    tBodyElem.appendChild(trElem);
    // TODONE: Create a TD for the delete link, quantity,  and the item
    const tdElem1 = document.createElement('td');
    trElem.appendChild(tdElem1);
    // tdElem1.textContent = button;
    tdElem1.appendChild(button);

    const tdElem2 = document.createElement('td');
    trElem.appendChild(tdElem2);
    tdElem2.textContent = currentCartItem.quantity;

    const tdElem3 = document.createElement('td');
    trElem.appendChild(tdElem3);
    tdElem3.textContent = currentCartItem.product;
    // TODONE: Add the TR to the TBODY and each of the TD's to the TR


  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
