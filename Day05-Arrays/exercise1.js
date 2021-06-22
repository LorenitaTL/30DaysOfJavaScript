// Declare an empty array;
let newEmptyArray = [];

// Declare an array with more than 5 number of elements
let arrayMoreFive = ["1", "3", "5", "7", "9", "11"];

// Find the length of your array
let arrayLength = arrayMoreFive.length;
console.log("Length of array", arrayLength);

// Get the first item, the middle item and the last item of the array
console.log("First element", arrayMoreFive[0]);
console.log("Middle element", arrayMoreFive[Math.floor(arrayLength / 2)]);
console.log("Last element", arrayMoreFive[arrayLength - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  "Lorena",
  24,
  { dateOfBirth: "08-10-1996" },
  { isMarried: true },
  "MX",
  "4941160045",
  { weight: 61.5 },
];
console.log("Array length", mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  //"Netflix",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
let numberOfCompanies = itCompanies.length;
console.log("Number of companies", numberOfCompanies);

// Print the first company, middle and last company
console.log("First company", itCompanies[0]);
console.log("Middle company", itCompanies[Math.floor(numberOfCompanies / 2)]);
console.log("Last company", itCompanies[numberOfCompanies - 1]);

// Print out each company
itCompanies.forEach((company) => console.log(company));

// Change each company name to uppercase one by one and print them out
let newCompanies = itCompanies.map((company) => company.toUpperCase());
console.log(newCompanies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies[numberOfCompanies - 1] = "and Amazon";
let newSentence = itCompanies.join(", ").concat(" are big IT companies.");
console.log(newSentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyToSearch = "FaceBOOK";
let result = "";
if (newCompanies.includes(companyToSearch.toUpperCase())) {
  result = companyToSearch;
} else {
  result = "Company is not found";
}
console.log(result);
// Filter out companies which have more than one 'o' without the filter method
let temp = "perezoso";
console.log(temp);
console.log(temp.match(/o/g));

let newCompaniesList = [];
itCompanies.forEach((company) => {
  if ((company.match(/o/g) || []).length > 1) {
    newCompaniesList.push(company);
  }
});
console.log('Which companies have more than one "o"? ', newCompaniesList);
// Sort the array using sort() method
let sortArray = itCompanies.slice().sort();
console.log("Sort ", sortArray);

// Reverse the array using reverse() method
let reverseArray = itCompanies.slice().reverse();
console.log("Reverse ", reverseArray);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3, numberOfCompanies));

// Slice out the middle IT company or companies from the array
console.log(Math.floor(numberOfCompanies / 2));
console.log(itCompanies);
let middlePosition = Math.floor(numberOfCompanies / 2);
console.log(
  "Middle position",
  middlePosition % 2 !== 0
    ? itCompanies.slice(middlePosition, middlePosition + 1)
    : itCompanies.slice(middlePosition - 1, middlePosition + 1)
);
// Remove the first IT company from the array
console.log(itCompanies);
let removeFirst = itCompanies.slice();
removeFirst.shift();
console.log("Remove first", removeFirst);

// Remove the middle IT company or companies from the array
let removeMiddle = itCompanies.slice();
console.log("Remove middle", removeMiddle);

//removeMiddle.splice(middlePosition, 1);
console.log("Remove middle", removeMiddle);
if (middlePosition % 2 == 0) {
  console.log("Remove two");
  removeMiddle.splice(middlePosition - 1, 2);
} else {
  console.log("Remove one");
  removeMiddle.splice(middlePosition, 1);
}
console.log(removeMiddle);

// Remove the last IT company from the array
let removeLast = itCompanies.slice();
removeLast.splice(numberOfCompanies - 1, 1);
console.log("Remove last", removeLast);
// Remove all IT companies
console.log("Remove All", itCompanies.splice());
