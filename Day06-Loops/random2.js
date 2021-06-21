//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arrayRandom2 = [];

do {
  let value = Math.floor(Math.random() * 10);

  if (arrayRandom2.indexOf(value) === -1) {
    arrayRandom2.push(value);
  }
} while (arrayRandom2.length < 5);
console.log(arrayRandom2);
