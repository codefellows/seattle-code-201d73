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

'use strict'



// create a kitten factory
function Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats) {
  // this is a capital K kitten because it's a constructor function
  this.name = name;
  this.age = this.getAge();
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}


// add getAge method - here we define the function inline
Kitten.prototype.getAge = function () {
  this.age = randomInRange(3, 12) + ' months';
};

Kitten.prototype.meow = function () {
  console.log('meow!');
};

// add render method - here we define the function later
Kitten.prototype.render = render;

// tell the factory to create a specific kitten, using the new keyword
const frankie = new Kitten('frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);
frankie.getAge();
frankie.meow();
frankie.render();

const serena = new Kitten('serena', ['sitting on laps', 'climbing curtains', 'eating treats'], true, false, true);
serena.getAge();
serena.render();

const jumper = new Kitten('jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true);
jumper.getAge();
jumper.render();

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* generic way to create and append child to parent element and optionally set textContent */
function createChild(tag, parent, text) {

  const elem = document.createElement(tag);

  parent.appendChild(elem);

  if (text !== undefined) {
    elem.textContent = text;
  }

  return elem;
}

function render() {

  const parentElement = document.getElementById('kittenProfiles');

  const article = createChild('article', parentElement);

  createChild('h2', article, this.name);

  createChild('p', article, this.name + ' is adorable, and is ' + this.age + ' old.')

  const ul = createChild('ul', article);

  for (let i = 0; i < this.interests.length; i++) {
    createChild('li', ul, this.interests[i]);
  }

  const table = createChild('table', article);

  const headerRow = createChild('tr', table);
  createChild('th', headerRow, 'Kids');
  createChild('th', headerRow, 'Dogs');
  createChild('th', headerRow, 'Other Cats');

  const dataRow = createChild('tr', table);
  createChild('td', dataRow, this.isGoodWithKids);
  createChild('td', dataRow, this.isGoodWithDogs);
  createChild('td', dataRow, this.isGoodWithOtherCats);

  const img = createChild('img', article);

  const imgSize = randomInRange(300, 800);

  img.src = 'http://placekitten.com/' + imgSize + '/' + imgSize;

  img.alt = 'cute picture of ' + this.name + ', who is an orange and white cat. You should really adopt him.';

}

/* STRETCH
function Cat(breed, eyeColor) {
  this.breed = breed;
  this.eyeColor = eyeColor;
}

Cat.prototype.chaseLaserPointer = function () {
  console.log('run around!!!!!!');
};

// tell Kitten to inherit from Cat
// WARNING: this must happen before other prototype additions are made to Kitten or else they get lost
// So move code around as needed

Kitten.prototype = new Cat();
*/



