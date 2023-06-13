"use strict"

let myName = prompt("Is my name Sam? Please answer yes/no or y/n only").toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n") {
  alert("Please answer yes/no or y/n only");
  myName = prompt("Is my name Sam? Please answer yes/no or y/n only").toLowerCase();
}

if (myName === "yes" || myName === "y") {
    console.log("Correct, my name is Sam");
  alert("Correct, my name is Sam");
} else if (myName === "no" || myName === "n") {
    console.log("That is not correct");
  alert("That is not correct");
}
