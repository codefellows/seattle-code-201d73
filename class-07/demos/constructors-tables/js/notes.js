'use strict'

//define a Kitten
function KittenProfile(kittenName, likes, goodWithKids, goodWithDogs, goodWithOtherCats, imgUrl, breed) {
    this.name = kittenName;
    this.likes = likes;
    this.goodWithKids = goodWithKids;
    this.goodWithDogs = goodWithDogs;
    this.goodWithOtherCats = goodWithOtherCats;
    this.imgUrl = imgUrl;
    this.breed = breed;
    this.age = getRandomInt(1, 24); 
}

// display kitten data
KittenProfile.prototype.render = function(){
    const profileContainer = document.getElementById('kittenProfiles'); //kittenProfiles is pulled from HTML file

    const article = createChild('article', profileContainer);
    // const article = document.createElement('article');
    // profileContainer.appendChild(article);

    createChild('h2', article, this.name);
    // const nameHeader = document.createElement('h2');
    // article.appendChild(nameHeader);
    // nameHeader.textContent = this.name;

    createChild('p', article, this.breed);
    // const breedP = document.createElement('p');
    // article.appendChild(breedP);
    // breedP.textContent = this.breed;

    const ul = createChild('ul', article);
    for (let i = 0; i < this.likes.length; i += 1){
        createChild('li', ul, this.likes[i]);
    }


    const table = createChild('table', article);
    // rows for the table
    const headerRow = createChild('tr', table);

    createChild('th', headerRow, 'Kids');
    createChild('th', headerRow, 'Dogs');
    createChild('th', headerRow, 'Other Kitties');

    // data row

    const dataRow = createChild('tr', table);

    createChild('td', dataRow, this.goodWithKids);
    createChild('td', dataRow, this.goodWithDogs);
    createChild('td', dataRow, this.goodWithOtherCats);

    const img = createChild('img', article);
    img.src = this.imgUrl;
    img.alt = this.name + ' ' + this.breed;

}

// function for creating a child -- IMPORTANT!
function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    parent.appendChild(child);

    if(text !== undefined) {
        child.textContent = text;
    }
    return child;
}

// random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let kittenImageUrl = 'http://placekitten.com/200/200';


let maui = new KittenProfile('Maui', ['mice', 'lazing around'], false, false, true, kittenImageUrl, 'Persian');
// console.log(maui.name)
// console.log(maui.likes)
console.log(maui.age)

let willy = new KittenProfile('Willy', ['being silly', 'yarn'], true, true, true, kittenImageUrl, 'Siamese');
// console.log(willy.name)
// console.log(willy.goodWithDogs)

let chips = new KittenProfile('Chips', ['eatin chips', 'researching chips'], true, true, false, kittenImageUrl, 'Tortilla');
// console.log(willy.name)
// console.log(willy.goodWithDogs)

maui.render();
willy.render();
chips.render();