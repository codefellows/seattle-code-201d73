'use strict';

// Globals
const goatImageSectionTag = document.getElementById('all-goats');
const leftGoatImageTag = document.getElementById('left-goat-img');
const rightGoatImageTag = document.getElementById('right-goat-img');
const leftGoatHeaderTag = document.getElementById('left-goat-h2');
const rightGoatHeaderTag = document.getElementById('right-goat-h2');

const maxClicks = 5;
let totalClicks = 0;

// Variables to store the goats already on the page
let leftGoatOnThePage = null;
let rightGoatOnThePage = null;

const Goat = function (title, imageSrc) {
  this.title = title;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  // the all array is a property of the Goat constructor
  Goat.all.push(this);
};

// initialize Constructor property
Goat.all = [];

function pickNewGoats() {
  shuffle(Goat.all);
  leftGoatOnThePage = Goat.all[0];
  rightGoatOnThePage = Goat.all[1];

  renderNewGoats();
}

const renderNewGoats = function () {

  leftGoatImageTag.src = leftGoatOnThePage.url;
  leftGoatImageTag.alt = leftGoatOnThePage.title;
  leftGoatHeaderTag.textContent = leftGoatOnThePage.title;

  rightGoatImageTag.src = rightGoatOnThePage.url;
  rightGoatImageTag.alt = rightGoatOnThePage.title;
  rightGoatHeaderTag.textContent = rightGoatOnThePage.title;
};

const handleClickOnGoat = function (event) {

  // if they can still click, do clicky things
  if (totalClicks < maxClicks) {

    const thingWeClickedOn = event.target;
    const id = thingWeClickedOn.id;

    //track the goat clicks and times shown
    if (id === 'left-goat-img' || id === 'right-goat-img') {

      if (id === 'left-goat-img') {
        leftGoatOnThePage.clicks += 1;
      } else if (id === 'right-goat-img') {
        rightGoatOnThePage.clicks += 1;
      }

      leftGoatOnThePage.timesShown += 1;
      rightGoatOnThePage.timesShown += 1;

      //after we update the old, safe to pick new goats
      pickNewGoats();
    }
  }
  // increment amount of clicks
  totalClicks += 1;

  //when they reach total max clicks, remove the clicky function
  if (totalClicks === maxClicks) {
    goatImageSectionTag.removeEventListener('click', handleClickOnGoat);
    // console.log('you picked 5 goats, thanks!');
    alert('All this clicking has goat to stop');

    //display the clicks to the page
    renderLikes();

  }


};

function renderLikes() {
  const likesListElem = document.getElementById('goat-clicks');
  likesListElem.innerHTML = '';
  for (let i = 0; i < Goat.all.length; i++) {
    const goatPicture = Goat.all[i];
    const goatItemElem = document.createElement('li');
    likesListElem.appendChild(goatItemElem);
    goatItemElem.textContent = goatPicture.title + ' : ' + goatPicture.clicks;
  }
}

/* fisher yates style shuffle
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

// Add Event Listeners
goatImageSectionTag.addEventListener('click', handleClickOnGoat);


// Instantiate Goat objects
new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');
new Goat('Smiley', './images/smiling-goat.jpg');
new Goat('Sassy', './images/sassy-goat.jpg');
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');

pickNewGoats();

renderLikes();
