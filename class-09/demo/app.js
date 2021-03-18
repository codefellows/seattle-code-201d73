const allKittens = [];

const table = document.getElementById('kitten-chart');


function Kitten(name, breed, interests, coatColor, goodWithKids, goodWithDogs, goodWithCats) {
  this.name = name;
  this.breed = breed || 'unknown';
  this.interests = interests || 'none';
  this.coatColor = coatColor || 'not specified';
  this.goodWithKids = goodWithKids;
  this.goodWithDogs = goodWithDogs;
  this.goodWithCats = goodWithCats;

  allKittens.push(this);
}

Kitten.prototype.render = function () {
  const row = createChild('tr', table);
  const propertyNames = ['name', 'breed', 'interests', 'coatColor', 'goodWithKids', 'goodWithDogs', 'goodWithCats'];
  for (let i = 0; i < propertyNames.length; i++) {
    const currentPropertyName = propertyNames[i];

    // common use for bracket notation instead of dot notation
    const currentPropertyValue = this[currentPropertyName];
    createChild('td', row, currentPropertyValue);
  }

}

function createChild(tag, parent, text) {
  const child = document.createElement(tag);
  parent.appendChild(child);
  if (text !== undefined) {
    child.textContent = text;
  }
  return child;
}

function createHeaderRow() {

  const row = createChild('tr', table);

  const columnNames = ['name', 'breed', 'interests', 'coatColor', 'goodWithKids', 'goodWithDogs', 'goodWithCats'];

  for (let i = 0; i < columnNames.length; i++) {
    createChild('th', row, columnNames[i]);
  }
}

function createFooterRow() {

  const row = createChild('tr', table);

  const th = createChild('th', row, 'Kittens to Adopt ' + allKittens.length);
  th.setAttribute('colspan', '7');

}

function renderKittens() {
  for (let i = 0; i < allKittens.length; i++) {
    allKittens[i].render();
  }
}



// listen for submits

function addKittenHandler(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const breed = event.target.breed.value;
  const coatColor = event.target.coatColor.value;
  let interests = event.target.interests.value;
  // interests = interests.split(',');
  const isGoodWithKids = event.target.goodWithKids.checked;
  const isGoodWithDogs = event.target.goodWithDogs.checked;
  const isGoodWithOtherCats = event.target.goodWithOtherCats.checked;

  const newKitten = new Kitten(name, breed, interests, coatColor, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats);

  table.innerHTML = '';

  renderTable();

  event.target.reset();

}

function renderTable() {

  createHeaderRow();

  renderKittens();

  createFooterRow();
}

// wire up event listener
const addKittenForm = document.getElementById('add-kitten-form');
addKittenForm.addEventListener('submit', addKittenHandler);

// let's always add Hissy who nobody ever adopts :(

const hissy = new Kitten('Hissy', 'Tabby', 'hissing, more hissing', 'brown', false, false, false);

renderTable();