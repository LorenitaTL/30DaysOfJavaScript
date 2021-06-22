console.log("EXERCISE 2");

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log("Countries ", countries);
console.log("Web techs ", webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let newText = text.replace(/[^a-zA-Z ]/g, "");
console.log(newText);
let words = newText.split(" ");
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);
let honeyAllergies = true;
if (honeyAllergies) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
}
{
  webTechs.push("Sass");
}
console.log(webTechs);

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log("FullStack", fullStack);

console.log("EXERCISELEVEL 3");
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
let agesSort = ages.slice().sort();
let agesLength = ages.length;
console.log(agesSort);
let minAge = agesSort[0];
let maxAge = agesSort[agesLength - 1];
console.log("Min age", minAge);
console.log("Max age", maxAge);

// Find the median age(one middle item or two middle items divided by two)
let middleAge = Math.floor(ages.length / 2);
agesLength % 2 == 0
  ? console.log("Two items", agesSort.slice(middleAge - 1, middleAge + 1))
  : console.log("One item", agesSort.slice(middleAge, middleAge + 1));

// Find the average age(all items divided by number of items)
let average = ages.reduce((a, b) => a + b, 0) / agesLength;
console.log("Average", average);
// Find the range of the ages(max minus min)
let range = agesSort[agesLength - 1] - agesSort[0];
console.log("Range", range);
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
let value1 = Math.abs(minAge - average);
let value2 = Math.abs(maxAge - average);

console.log(
  value1 > value2
    ? "|min - average| is larger than |max - average|"
    : "|max - average| is larger than |min - average|"
);

// 1.Slice the first ten countries from the countries array
console.log(countries);
console.log(countries.slice(0, 10));

//Find the middle country(ies) in the countries array
let countriesLength = countries.length;
console.log(countriesLength);
let middleCountry = Math.floor(countriesLength / 2);
console.log(middleCountry);
middleCountry % 2 == 0
  ? console.log(
      "Two middle countries",
      countries.slice(middleCountry - 1, middleCountry + 1)
    )
  : console.log(
      "One middle country",
      countries.slice(middleCountry, middleCountry + 1)
    );

//Divide the countries array into two equal arrays if it is even.
//If countries array is not even , one more country for the first half.
console.log(countries);
let firstArray =
  middleCountry % 2 == 0
    ? countries.slice(0, middleCountry)
    : countries.slice(0, middleCountry + 1);
let secondArray =
  middleCountry % 2 == 0
    ? countries.slice(middleCountry, countriesLength)
    : countries.slice(middleCountry + 1, countriesLength);
console.log(firstArray);
console.log(secondArray);
