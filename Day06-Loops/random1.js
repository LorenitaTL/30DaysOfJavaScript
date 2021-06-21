//Develop a small script which generate array of 5 random numbers
let arrayRandom1 = [];
for (let i = 0; i < 5; i++) {
  arrayRandom1.push(Math.floor(Math.random() * 100));
}
console.log("Random array with 5 numbers", arrayRandom1);
