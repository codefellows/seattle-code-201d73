'use strict';

// Globals
const goatImageSectionTag = document.getElementById('goat-pics');
const leftGoatImageTag = document.getElementById('left-goat-img');
const rightGoatImageTag = document.getElementById('right-goat-img');
const leftGoatHeaderTag = document.getElementById('left-goat-h2');
const rightGoatHeaderTag = document.getElementById('right-goat-h2');

const maxClicks = 5;
let totalClicks = 0;

// Variables to store the goats already on the page
let leftGoatOnThePage = null;
let rightGoatOnThePage = null;

const Goat = function (name, imageSrc) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  // the all array is a property of the Goat constructor
  Goat.all.push(this);
};

// initialize Constructor property
Goat.all = [];

function pickNewGoats() {

  // rule: next goats can NOT have been any of the previous goats
  // AND not break the unique rule

  const previousLeft = leftGoatOnThePage; // the goat just shown on left
  const previousRight = rightGoatOnThePage;  // the goat just shown on right

  shuffle(Goat.all);

  for (let goat of Goat.all) {
    // goat = current goat object in array
    if (goat !== previousLeft && goat !== previousRight) {
      leftGoatOnThePage = goat;
      break;
    }
  }

  for (let goat of Goat.all) {
    if (goat !== previousLeft && goat !== previousRight && goat !== leftGoatOnThePage) {
      rightGoatOnThePage = goat;
      break;
    }
  }

  renderNewGoats();
}

const renderNewGoats = function () {

  leftGoatImageTag.src = leftGoatOnThePage.url;
  leftGoatImageTag.alt = leftGoatOnThePage.name;
  leftGoatHeaderTag.textContent = leftGoatOnThePage.name;

  rightGoatImageTag.src = rightGoatOnThePage.url;
  rightGoatImageTag.alt = rightGoatOnThePage.name;
  rightGoatHeaderTag.textContent = rightGoatOnThePage.name;
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
      } else {
        rightGoatOnThePage.clicks += 1;
      }

      leftGoatOnThePage.timesShown += 1;
      rightGoatOnThePage.timesShown += 1;


    }
  }
  // increment amount of clicks
  totalClicks += 1;

  //when they reach total max clicks, remove the clicky function
  if (totalClicks < maxClicks) {

    pickNewGoats();

  } else {

    goatImageSectionTag.removeEventListener('click', handleClickOnGoat);
    // console.log('you picked 5 goats, thanks!');
    alert('All this clicking has goat to stop');

    //display the clicks to the page
    renderLikes();

    makeAGoatChart();

  }


};

function renderLikes() {
  const likesListElem = document.getElementById('goat-clicks');
  likesListElem.innerHTML = '';
  for (let i = 0; i < Goat.all.length; i++) {
    const goatPicture = Goat.all[i];
    const goatItemElem = document.createElement('li');
    likesListElem.appendChild(goatItemElem);
    goatItemElem.textContent = goatPicture.name + ' : ' + goatPicture.clicks;
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



// ==================================
// ChartJs Implementation
// ==================================

function makeAGoatChart() {

  const goatNamesArray = [];
  const goatLikesArray = [];


  // refactoring opportunity?
  // for (let i = 0; i < Goat.all.length; i++) {
  //   const singleGoatName = Goat.all[i].name;
  //   goatNamesArray.push(singleGoatName);

  // }

  // for (let i = 0; i < Goat.all.length; i++) {
  //   const currentGoat = Goat.all[i];
  //   const singleGoatLikes = currentGoat.clicks;
  //   goatLikesArray.push(singleGoatLikes);
  // }

  /* alternate way to build local arrays
     Notice the "of" */

  for (let goat of Goat.all) {
    goatNamesArray.push(goat.name);
    goatLikesArray.push(goat.clicks);
  }

  const ctx = document.getElementById('goatChart').getContext('2d');
  const goatChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: goatNamesArray,
      datasets: [{
        label: 'Goat Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: goatLikesArray
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
