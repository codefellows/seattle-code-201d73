'use strict';

const catButtonElem = document.getElementById('catbutton');

const handleCatButtonClick = function () {

  if (!localStorage.cats) return;

  const catsFromLS = JSON.parse(localStorage.cats);

  for (let i in catsFromLS) {
    const catData = catsFromLS[i];
    const catInstance = new Cat(catData.name);
    catInstance.render(i);// pass in i to use as index when deleting
  }

};

function handleListClick(event) {

  if (event.target.classList.contains('deletable')) {

    const index = parseInt(event.target.index);

    if (!isNaN(index)) { // must do this way because NaN !== NaN believe it or not

      Cat.all.splice(index, 1);

      localStorage.cats = JSON.stringify(Cat.all);

      catListElem.innerHTML = "";

      for (let i in Cat.all) {
        const cat = Cat.all[i];
        cat.render(i); // pass in i to use as index when deleting
      }
    }
  }
}

catButtonElem.addEventListener('click', handleCatButtonClick);
catListElem.addEventListener('click', handleListClick);
