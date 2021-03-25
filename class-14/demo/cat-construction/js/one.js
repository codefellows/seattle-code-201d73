'use strict';

if (localStorage.cats) {
  const catsFromLS = JSON.parse(localStorage.cats);
  // catsFromLS is now an array of generic objects
  for (let catData of catsFromLS) {
    const catInstance = new Cat(catData.name);
    catInstance.render();
  }
}

catFormElem.addEventListener('submit', handleCatSubmit);
