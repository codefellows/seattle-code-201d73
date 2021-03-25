'use strict';

const catFormElem = document.getElementById('catform');
const catListElem = document.getElementById('catlist');

function Cat(name) {
  this.name = name;
  Cat.all.push(this);
}

Cat.all = [];

Cat.prototype.render = function (deleteIndex) {
  const liElem = createChildElement('li', catlist);

  createChildElement('span', liElem, this.name);

  if (deleteIndex !== undefined) {
    const deleteElem = createChildElement('span', liElem, '[x]');
    deleteElem.index = deleteIndex;
    deleteElem.classList.add('deletable');
  }

};


function handleCatSubmit(e) {
  e.preventDefault();
  const newCat = new Cat(e.target.kitteh.value);
  catFormElem.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(Cat.all);
}

function createChildElement(tag, parent, text) {
  const child = document.createElement(tag);
  parent.appendChild(child);
  if (text !== undefined) {
    child.textContent = text;
  }
  return child;
}
