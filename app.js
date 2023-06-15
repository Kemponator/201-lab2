"use strict";

console.log("Hello");

//var yourName = prompt("What is your name?"); {
//console.log("Nice to meet you, " + yourName);
//alert("Nice to meet you," + yourName);
//}

//if (yourName === Response) {
//console.log("Nice to meet you, " + yourName);
//alert("Nice to meet you," + yourName);
//}

let myName = prompt(
  "Is my name Sam? Please answer yes/no or y/n only"
).toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n") {
  alert("Please answer yes/no or y/n only");
  myName = prompt(
    "Is my name Sam? Please answer yes/no or y/n only"
  ).toLowerCase();
}

if (myName === "yes" || myName === "y") {
  console.log("Correct, my name is Sam");
  alert("Correct, my name is Sam");
} else if (myName === "no" || myName === "n") {
  console.log("That is not correct");
  alert("That is not correct");
}

let myStudy = prompt(
  "Did I study Media in college and University? Please answer yes/no or y/n"
).toLowerCase();

while (
  myStudy != "yes" &&
  myStudy != "no" &&
  myStudy != "y" &&
  myStudy != "n"
) {
  alert("Try again!");
  myStudy = prompt(
    "Did I study Media in college and University? Please answer yes/no or y/n"
  ).toLowerCase();
}

if (myStudy === "yes" || myStudy === "y") {
  console.log("Well done! I did study Media");
  alert("Well done - I did study Media");
} else if (myStudy === "no" || myStudy === "n") {
  console.log("Try that again!");
  alert("Try that again!");
}

let myBirthday = prompt("Is my birthday in 2002?").toLowerCase();

while (
  myBirthday != "yes" &&
  myBirthday != "no" &&
  myBirthday != "y" &&
  myBirthday != "n"
) {
  alert("Please answer yes/no or y/n only");
  myBirthday = prompt("Is my birthday in 2002?").toLowerCase();
}

if (myBirthday === "yes" || myBirthday === "y") {
  console.log("Incorrect, it's in 1994 (I'm ancient)");
  alert("Incorrect, it's in 1994 (I'm ancient)");
} else if (myBirthday === "no" || myBirthday === "n") {
  console.log("Correct, I'm ancient!");
  alert("Correct, I'm ancient!");
}

let myFood = prompt(
  "Is my favourite food sushi? Please answer yes/no or y/n only"
).toLowerCase();

while (myFood != "yes" && myFood != "no" && myFood != "y" && myFood != "n") {
  alert("Please answer yes/no or y/n only");
  myFood = prompt(
    "Is my favourite food sushi? Please answer yes/no or y/n only"
  ).toLowerCase();
}

if (myFood === "yes" || myFood === "y") {
  console.log("Correct, it's delicious!");
  alert("Correct, it's delicious!");
} else if (myFood === "no" || myFood === "n") {
  console.log("That is not correct");
  alert("That is not correct");
}

let myFuture = prompt(
  "Do I want to be an astronaut? Please answer yes/no or y/n only"
).toLowerCase();

while (
  myFuture != "yes" &&
  myFuture != "no" &&
  myFuture != "y" &&
  myFuture != "n"
) {
  alert("Please answer yes/no or y/n only");
  myFuture = prompt(
    "Do I want to be an astronaut? Please answer yes/no or y/n only"
  ).toLowerCase();
}

if (myFuture === "yes" || myFuture === "y") {
  console.log("Wrong, I want to be a developer");
  alert("Wrong, I want to be a developer");
} else if (myFuture === "no" || myFuture === "n") {
  console.log("That is correct - I want to be a software developer");
  alert("That is correct - I want to be a software developer");
}

// Generated-number guessing game.

function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;

  let number = parseInt(prompt("Guess a number from 1 to 10: "));

  while (number !== random) {
    number = parseInt(prompt("Guess a number from 1 to 10: "));
  }

  if (number == random) {
    console.log("You guessed the correct number.");
    alert("You guessed the correct number!");
  }
}

// My Process
// declare a variable named number set the value to number that is a string ie - "7"
// create a for loop that:
// initialises i as 3
// condition is i > 0
// afterthought / decrement by 1 i--
// inside the loop:
// declare a variable named guess equals to a prompt to guess a number
// create an if statement:
// if guess === number - console.log("You win")
// make sure you break the loop here as the correct answer was found
// else if guess > number - console.log("to high")
// else if guess < number - console.log("to low")
// create a second if statement:
// if i === 0 alert the correct number was + number
// break the code inside this if statement
// the loop runs to many times... so:
// at the top of the loop declare a varaible named guesses = i + 1
// change initialisation in for loop to 2
// change condition in for loop to i >= 0
// change i in prompt to guesses
// change console.log for an alert and set the messages to corrispond.
// change the number variable to use Math.floor and Math.random to generate a random number.
// declare a variable named guessNum and set the value to parseInt(guess)

guessNumber();

function guessNumber() {
  // const number = "7";
  const number = Math.floor(Math.random() * 10 + 1);
  console.log(number);

  for (let i = 2; i >= 0; i--) {
    let guesses = i + 1;

    let guess = prompt(
      "Guess a number between 1 and 10! You have " + guesses + " attempts"
    );

    const guessNum = parseInt(guess);

    if (guessNum === number) {
      // console.log("Well done, you win!");
      alert("Well done, you win!");
      break;
    } else if (guessNum < number) {
      // console.log("Too low!");
      alert("Too low!");
    } else if (guessNum > number) {
      // console.log("Too high!");
      alert("Too high!");
    }

    if (i === 0) {
      alert("The correct number was " + number);
      break;
    }
  }
}

function guessFood() {
  alert("Let's guess my favourite places to eat!");

  const answerFood = [
    "Benedicts",
    "Haggle",
    "Trattoria Rustica",
    "Shiki",
    "Kimchi",
    "Dhaba at Fifteen",
    "Namaste Village",
    "The Belgian Monk",
    "Roger Hickman's",
    "Don Txoko",
  ];

  for (let i = 5; i >= 0; i--) {
    let winner = false;
    console.log(winner);

    let attempts = i + 1;

    let restaurantGuess = prompt(
      "Can you name one of my Top Ten places to eat?\nYou have " +
        attempts +
        " tries left"
    ).toLowerCase;

    for (let j = 0; j < guessFood.length; j++) {
      if (guessFood[j].toLowerCase() == restaurantGuess) {
        console.log("You win!");
        alert("Well done " + guessFood[j] + " is a correct answer!");
        winner = !winner;
        console.log(winner);
        break;
      }
    }

    if (!winner) {
      alert("Oh no! " + guessFood + " is not a correct answer!");
    }

    if (i == 0 || winner == true) {
      alert("My Top Ten restaurants are " + guessFood);
      break;
    }
  }
}

function myFunc() {
  guessFood();
}
