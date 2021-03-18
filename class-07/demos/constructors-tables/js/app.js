// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

'use strict';

// define a Kitten

function KittenProfile(kittenName, likes, goodWithKids, goodWithDogs, goodWithOtherCats, imgUrl, breed) {
  this.name = kittenName;
  this.likes = likes;
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithOtherCats = goodWithOtherCats;
  this.imgUrl = imgUrl;
  this.breed = breed;
  this.age = getRandomInt(1, 24); // in months
}

KittenProfile.prototype.render = function () {

  const profileContainer = document.getElementById('kittenProfiles');

  const article = createChild('article', profileContainer);

  createChild('h2', article, this.name);

  createChild('p', article, this.breed);

  const ul = createChild('ul', article);

  for (let i = 0; i < this.likes.length; i++) {
    createChild('li', ul, this.likes[i]);
  }

  const table = createChild('table', article);

  // we need rows for the table
  const headerRow = createChild('tr', table);

  createChild('th', headerRow, 'Kids');
  createChild('th', headerRow, 'Dogs');
  createChild('th', headerRow, 'Other Cats');

  // we need data row - doing old style for reference, aka not using createChild function
  const dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  createChild('td', dataRow, this.goodWithKids);
  createChild('td', dataRow, this.goodWithDogs);
  createChild('td', dataRow, this.goodWithOtherCats);

  const img = createChild('img', article);
  img.src = this.imgUrl;
  img.alt = this.name + ' ' + this.breed;

}

function createChild(tag, parent, text) {

  const child = document.createElement(tag);

  parent.appendChild(child);

  if (text !== undefined) {
    child.textContent = text;
  }

  return child;

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let kittenImageUrl = 'http://placekitten.com/200/200';

let maui = new KittenProfile('Maui', ['mice', 'lazing around'], false, false, true, kittenImageUrl, 'Persian');
let patches = new KittenProfile('Patches Ohoolihan', ['being silly', 'yarn'], true, true, true, kittenImageUrl, 'Siamese');

let zoey = new KittenProfile('Zoey', ['being silly', 'yarn'], true, true, true, kittenImageUrl, 'Siamese');

patches.render();
maui.render();
zoey.render();
