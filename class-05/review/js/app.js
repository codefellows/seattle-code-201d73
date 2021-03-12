//*

footballPlayerQuiz();

function footballPlayerQuiz() {

  let success = false;

  let allowedAttempts = 6;

  for (let attemptCounter = 1; attemptCounter <= allowedAttempts; attemptCounter += 1) {

    success = checkResponse();

    if (success) {
      break;
    }

  }

  giveFeedback(success);

}

function checkResponse() {

  let faves = ['Russel Wilson', 'Bobby Wagner', 'Marshawn Lynch', 'Kam Chancellor', 'Earl Thomas'];

  let favePlayerResponse = prompt("Who is one of my favorite football players?");

  for (let i = 0; i < faves.length; i += 1) {

    let currentFavePlayer = faves[i];

    if (favePlayerResponse === currentFavePlayer) {

      return true;
    }
  }

  return false;
}

function giveFeedback(success) {
  if (success) {
    // give appropriate feedback
    alert('You got it!')
  } else {
    // give appropriate feedback
    alert('nope');
  }
}




