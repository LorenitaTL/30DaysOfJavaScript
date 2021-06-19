let canDrive = document.getElementById("can-drive");
let driveResult = document.getElementById("drive-result");

let olderBtn = document.getElementById("older");
let olderResult = document.getElementById("older-result");

let evenBtn = document.getElementById("even");
let evenResult = document.getElementById("even-result");

//Get user input using prompt(“Enter your age:”).
//If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
let canDriveFunc = () => {
  let years = Number(window.prompt("Enter your age "));
  driveResult.innerHTML =
    years >= 18
      ? "You are " + years + ". You are old enough to drive"
      : "You are left with " + (18 - years) + " years to drive.";
};

//Compare the values of myAge and yourAge using if … else.
//Based on the comparison and log the result to console stating who is older (me or you).
//Use prompt(“Enter your age:”) to get the age as input.
let compareAge = () => {
  let yourAge = 25;
  let myAge = Number(prompt("Enter your age"));

  if (myAge < yourAge) {
    console.log(yourAge - myAge);
    olderResult.innerHTML =
      "You are " + (yourAge - myAge) + " years older than me";
  } else {
    olderResult.innerHTML =
      "I am " + (myAge - yourAge) + " years older than you";
  }
};

//If a is greater than b return 'a is greater than b' else 'a is less than b'.
//Try to implement it in to ways
let a = 4;
let b = 3;
if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(b + " is greater than " + a);
}

console.log(a > b ? a + " is greater than " + b : b + " is greater than " + a);

//Even numbers are divisible by 2 and the remainder is zero.
//How do you check, if a number is even or not using JavaScript?
let evenNumbers = () => {
  let num = Number(window.prompt("Enter number"));
  evenResult.innerHTML =
    num % 2 === 0 ? num + " is an even number" : num + " is an odd number";
};

canDrive.addEventListener("click", canDriveFunc);
olderBtn.addEventListener("click", compareAge);
even.addEventListener("click", evenNumbers);
