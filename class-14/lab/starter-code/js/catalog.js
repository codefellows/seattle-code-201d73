/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  selectElement.innerHTML = '';
  for (let i in Product.allProducts) {
    const currentProduct = Product.allProducts[i];
    const optionElem = document.createElement('option');
    selectElement.appendChild(optionElem);
    // optionElem.setAttribute("value", currentProduct.name);
    optionElem.textContent = currentProduct.name;
    optionElem.value = currentProduct.name; //works like the setAttribute
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODONE: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  const selectElement = document.getElementById('items');
  console.log(selectElement.value);
  // TODONE: suss out the item picked from the select list
  // TODONE: get the quantity
  const itemQuantity = parseInt(document.getElementById('quantity').value);

  // TODONE: using those, add one item to the Cart
  cart.addItem(selectElement.value, itemQuantity);
  // const id = selection.id;
  // console.log('within selected', selection);
  // let nameValue = document.getElementById("uniqueID").value;

}

// just a note

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  const headerCount = document.getElementById('itemCount');

  let totalItemQuantity = 0;
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i < cartItems.length; i++) {
    const counter = cartItems[i].quantity;
    totalItemQuantity += counter;
  }
  headerCount.textContent = totalItemQuantity;
  console.log(totalItemQuantity);
}

console.log(JSON.parse(localStorage.getItem('cart')));

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
