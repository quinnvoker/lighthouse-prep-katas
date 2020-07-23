let prompt = require("prompt-sync")();

let numberGuesser = function(max) {
  const answer = Math.floor(Math.random() * max);
  let attempts = [];
  let guess;
  while (guess !== answer) {
    let input = prompt('Guess a number: ');
    if (isNaN(input)) {
      console.log('Not a number! Try again.');
    } else {
      guess = Number(input);
      if (attempts.includes(guess)) {
        console.log('Already guessed ' + guess + '! Try again.');
      } else {
        attempts.push(guess);
        if (guess > answer) {
          console.log("Too high!");
        } else if (guess < answer) {
          console.log("Too low!");
        }
      }
    }
  }
  console.log("You got it! It took you " + attempts.length + " attempts.");
};

numberGuesser(1000);