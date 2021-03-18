// name, description, interests, url

let lela = {
  name: 'Mama Lela',
  description: 'Lela hates humans',
  likes: ['mice', 'ignoring you', 'spiting you'],
  url: 'http://somesite.com'
}

let dj = {
  name: 'DJ',
  description: 'Spins records cat style',
  likes: ['wax', 'deep cuts', 'grooves'],
  url: 'http://somesite.com'
}


const kittenProfilesElem = document.getElementById('kittenProfiles');

function createKitty() {
  const articleElem = document.createElement('article');

  const nameHeaderElem = document.createElement('h2');
  articleElem.appendChild(nameHeaderElem);
  nameHeaderElem.textContent = lela.name;


  // we need a new p element with description text
  const descriptionElement = document.createElement('p');
  articleElem.appendChild(descriptionElement);
  descriptionElement.textContent = lela.description;



  const imgElem = document.createElement('img');
  articleElem.appendChild(imgElem);
  imgElem.src = 'images/frankie.jpeg'


  //parentElem.appendChild(childElem)

  kittenProfilesElem.appendChild(articleElem);

  // 3 Amigos for high level DOM access and manipulation
  // getElementById
  // createElement
  // appendChild

  // each element can have textContent and attribute read/written
  // and also .textContent, imgElem.src = someImageUrl
}

createKitty();
createKitty();
createKitty();
createKitty();