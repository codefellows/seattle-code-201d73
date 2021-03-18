// const kittenName = "????";

// what must our app "listen" for in order to update & render the known kitten names"

// listen for form submit "event"

const kittenForm = document.getElementById('kitten-form');

function addKittenHandler(event) {
  event.preventDefault();
  const kittenName = event.target.kittenName.value;

  const kittenListElem = document.getElementById('kitten-list');
  const li = document.createElement('li');
  kittenListElem.appendChild(li);

  li.textContent = kittenName;
  event.target.reset();
}

kittenForm.addEventListener('submit', addKittenHandler);
