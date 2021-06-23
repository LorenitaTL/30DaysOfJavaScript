//Develop a small script which generate any number of characters random id
let possibleChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
let size = Math.floor(Math.random() * 15);
for (let i = 0; i < size; i++) {
  id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
}
console.log(id);

//Write a script which generates a random hexadecimal number.
let hexValue = "#" + Math.floor(Math.random() * 16777215).toString(16);
console.log(hexValue);

//Write a script which generates a random rgb color number.
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

let rgb = `rgb (${red}, ${green}, ${blue})`;
console.log(rgb);

//Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newCountriesArray = [];
for (let i = 0; i < countries.length; i++) {
  newCountriesArray.push(countries[i].toUpperCase());
}

console.log(newCountriesArray);

//Using the above countries array, create an array for countries length'.
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//Use the countries array to create the following array of arrays:
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

let arrayOfArrays = [];
for (let i = 0; i < countries.length; i++) {
  arrayOfArrays.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}
console.log(arrayOfArrays);

// In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array.
//If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland', 'Iceland']
let landCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    landCountries.push(countries[i]);
  }
}
console.log(
  landCountries.length != 0 ?
  landCountries :
  "All these countries are without land"
);

// In above countries array, check if there is a country or countries end with a substring 'ia'.
//If there are countries end with, print it as array.
//If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
let countriesIa = [];
for (let i = 0; i < countries.length; i++) {
  let endOfWord = countries[i].substr(-2);
  if (endOfWord === "ia") {
    countriesIa.push(countries[i]);
  }
}
console.log(countriesIa);

// Using the above countries array, find the country containing the biggest number of characters.
let count = 0;
let country = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > count) {
    count = countries[i].length;
    country = countries[i];
  }
}
console.log(country + " Is the biggest");
// Ethiopia

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let lengthFive = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    lengthFive.push(countries[i]);
  }
}
console.log(lengthFive);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// Find the longest word in the webTechs array
let biggestCounter = 0;
let biggestTech = "";
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > biggestCounter) {
    biggestCounter = webTechs[i].length;
    biggestTech = webTechs[i];
  }
}
console.log("The biggest tech is " + biggestTech);

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let lengthOfWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  lengthOfWebTechs.push([webTechs[i], webTechs[i].length]);
}
console.log(lengthOfWebTechs);

// An application created using MongoDB, Express, React and Node is called a MERN stack app.
//Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let mernWord = "";
for (let i = 0; i < mernStack.length; i++) {
  mernWord += mernStack[i].substring(0, 1);
}
console.log(mernWord);
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let fullStack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let i = 0; i < fullStack.length; i++) {
  console.log(fullStack[i]);
}
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits.reverse());
// Print all the elements of array as shown below.
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
for (let i = 0; i < fullStack.length; i++) {
  console.log(fullStack[i].toUpperCase());
}

// Copy countries array(Avoid mutation)
const copyCountries = countries.slice();
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = copyCountries.sort();
console.log(sortedCountries);
// Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);
const sortedMernStack = mernStack.sort();
console.log(sortedMernStack);
// Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesLand.push(countries[i]);
  }
}
console.log(countriesLand);

// Find the country containing the hightest number of characters in the countries array
let c = 0;
let countryHighest = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > count) {
    c = countries[i].length;
    countryHighest = countries[i];
  }
}
console.log(countryHighest + " Is the highest");

// Reverse the countries array and capitalize each country and stored it as an array
for (let i = countries.length - 1; i >= 0; i--) {
  console.log(countries[i].toUpperCase())
}