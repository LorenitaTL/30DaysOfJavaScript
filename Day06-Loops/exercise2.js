//Develop a small script which generate any number of characters random id
let possibleChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
let size = Math.floor(Math.random() * 15);
for (let i = 0; i < size; i++) {
  id += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
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
