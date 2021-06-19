console.log("EXERCISE LEVEL 1");
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Lorena";
let lastName = "Trujillo";
let country = "México";
let city = "Jerez";
let age = 24;
let isMarried = true;
let year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Check if type of '10' is equal to 10
console.log(typeof "10" === typeof 10 ? "Is equal!" : "Not equal ");

//Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10 ? "Is equal to 10" : "Isn't equal to 10 ");
//Boolean value is either true or false.
//  -Write three JavaScript statement which provide truthy value.
//String
//Number
//true

//  -Write three JavaScript statement which provide falsy value.
//false
//0
//'a'+5 = NaN

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 => true
// 4 >= 3 => true
// 4 < 3 => false
// 4 <= 3 => false
// 4 == 4 => true
// 4 === 4 => true
// 4 != 4 => false
// 4 !== 4 =>false
// 4 != '4' => false
// 4 == '4' => true
// 4 === '4' => false
// Find the length of python and jargon and make a falsy comparison statement.
//('python'.length<'jargon'.length)

console.log("4 > 3: ", 4 > 3);
console.log("4 >= 3: ", 4 >= 3);
console.log("4 < 3: ", 4 < 3);
console.log("4 <= 3: ", 4 <= 3);
console.log("4 == 4: ", 4 == 4);
console.log("4 === 4: ", 4 === 4);
console.log("4 != 4: ", 4 != 4);
console.log("4 !== 4: ", 4 !== 4);
console.log("4 != '4': ", 4 != "4");
console.log("4 == '4': ", 4 == "4");
console.log("4 === '4': ", 4 === "4");
console.log("python".length < "jargon".length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 => true
// 4 > 3 && 10 > 12 => false
// 4 > 3 || 10 < 12 => true
// 4 > 3 || 10 > 12 => true
// !(4 > 3) =>false
// !(4 < 3) => true
// !(false) => true
// !(4 > 3 && 10 < 12) => false
// !(4 > 3 && 10 > 12) => true
// !(4 === '4') => true
// There is no 'on' in both dragon and python
//!('dragon'.includes('on')&&'jargon'.includes('on'))

console.log("4 > 3 && 10 < 12: ", 4 > 3 && 10 < 12);
console.log("4 > 3 && 10 > 12: ", 4 > 3 && 10 > 12);
console.log("4 > 3 || 10 < 12: ", 4 > 3 || 10 < 12);
console.log("4 > 3 || 10 > 12: ", 4 > 3 || 10 > 12);
console.log("!(4 > 3): ", !(4 > 3));
console.log("!(4 < 3): ", !(4 < 3));
console.log("!(false): ", !false);
console.log("!(4 > 3 && 10 < 12): ", !(4 > 3 && 10 < 12));
console.log("!(4 > 3 && 10 > 12): ", !(4 > 3 && 10 > 12));
console.log("!(4 === '4'): ", !(4 === "4"));
console.log(!("dragon".includes("on") && "jargon".includes("on")));

//Use the Date object to do the following activities
let dateToday = new Date();
console.log("What is the year today?", dateToday.getFullYear());
console.log("What is the month today as a number?", dateToday.getMonth() + 1);
console.log("What is the date today?", dateToday.getDate());
console.log("What is the day today as a number?", dateToday.getDay());
console.log("What is the hours now?", dateToday.getHours());
console.log("What is the minutes now?", dateToday.getMinutes());
console.log(
  "Find out the numbers of seconds elapsed from January 1, 1970 to now.",
  dateToday.getTime()
);
