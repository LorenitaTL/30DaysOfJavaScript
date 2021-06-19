console.log("EXERCISE LEVEL 2");

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let triangleArea = document.getElementById("triangle-area");
let triangleAreaRes = document.getElementById("triangle-area-res");

let trianglePerimeter = document.getElementById("triangle-perimeter");
let trianglePerimeterRes = document.getElementById("triangle-perimeter-res");

let rectangleArea = document.getElementById("rectangle-area");
let rectangleAreaRes = document.getElementById("rectangle-area-res");
let rectanglePerimeterRes = document.getElementById("rectangle-perimeter-res");

let circleArea = document.getElementById("circle-area");
let circleAreaRes = document.getElementById("circle-area-res");
let circunference = document.getElementById("circunference-res");

let slope = document.getElementById("slope");
let slopeRes = document.getElementById("slope-res");
let slopeBetweenRes = document.getElementById("slope-between-res");

let pay = document.getElementById("pay");
let payResult = document.getElementById("pay-result");

let canDrive = document.getElementById("can-drive");
let driveResult = document.getElementById("drive-result");

let yearsLivedBtn = document.getElementById("years");
let yearsResult = document.getElementById("years-result");
triangleArea.addEventListener("click", triangleAreaFunc);
trianglePerimeter.addEventListener("click", trianglePerimeterFunc);
rectangleArea.addEventListener("click", dataRectangle);
circleArea.addEventListener("click", dataCircle);
slope.addEventListener("click", slopeFunc);
pay.addEventListener("click", payPerHour);
canDrive.addEventListener("click", canDriveFunc);
yearsLivedBtn.addEventListener("click", yearsLived);

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function triangleAreaFunc() {
  console.log("Area");
  let base = Number(window.prompt("Enter base"));
  let height = Number(window.prompt("Enter height"));
  triangleAreaRes.innerHTML += height * base * 0.5;
}

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
function trianglePerimeterFunc() {
  let sideA = Number(window.prompt("Enter side a"));
  let sideB = Number(window.prompt("Enter side b"));
  let sideC = Number(window.prompt("Enter side c"));

  trianglePerimeterRes.innerHTML += sideA + sideB + sideC;
}

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function dataRectangle() {
  let widthRectangle = Number(window.prompt("Enter width"));
  let heightRectangle = Number(window.prompt("Enter height"));

  rectangleAreaRes.innerHTML += widthRectangle * heightRectangle;
  rectanglePerimeterRes.innerHTML += (widthRectangle + heightRectangle) * 2;
}

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function dataCircle() {
  let radius = Number(window.prompt("Enter radius"));
  circleAreaRes.innerHTML += Math.PI * (radius * radius);
  circunference.innerHTML += 2 * Math.PI * radius;
}

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
function slopeFunc() {
  let xValue = Number(window.prompt("Enter X"));
  slopeRes.innerHTML += 2 * xValue - 2;
}

//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
//m = y2-y1 / x2-x1
//point (x1, y1) and point(x2,y2)
//point (2, 2) and point(6,10)
slopeBetweenRes.innerHTML += (10 - 2) / (6 - 2);

//Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xValue = -3;
let yValue = Math.pow(xValue, 2) + 6 * xValue + 9;
console.log(yValue);

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
function payPerHour() {
  let hours = Number(window.prompt("Enter hours: "));
  let rate = Number(window.prompt("Enter rate per hour"));

  payResult.innerHTML += hours * rate;
}

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Lorenita";
console.log(myName.length > 7 ? "Your name is long" : "Your name is short");

//Compare your first name length and your family name length and you should get this output.
let myfirstName = "Lorena";
let mylastName = "Trujillo";

let sizeName = myfirstName.length < mylastName.length ? "shorter" : "longer";
console.log(
  "Your first name, " +
    myfirstName +
    " is " +
    sizeName +
    " than your family name, " +
    mylastName
);

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
let olderOrYounger =
  myAge < yourAge
    ? yourAge - myAge + " years younger"
    : myAge - yourAge + " years older";
console.log("I am " + olderOrYounger + " than you");

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

function canDriveFunc() {
  let yearBirth = Number(window.prompt("Enter birth year "));
  let dateNow = new Date().getFullYear();
  let years = dateNow - yearBirth;
  console.log(years);
  console.log(
    years >= 18
      ? "You are " + years + ". You are old enough to drive"
      : "You are " +
          years +
          ". You will be allowed to drive after " +
          (18 - years) +
          " years."
  );
}

//Write a script that prompt the user to enter number of years.
//Calculate the number of seconds a person can live.
//Assume some one lives just hundred years
function yearsLived() {
  let yearsLived = Number(window.prompt("Enter number of years you live"));
  yearsResult.innerHTML =
    "Your lived " + 60 * 60 * 24 * 365 * yearsLived + " seconds";
}

//Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const now = new Date();
const yearNow = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`); // 4/1/2020 0:56
console.log(`${date}-${month}-${year} ${hours}:${minutes}`); // 4/1/2020 0:56
console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
