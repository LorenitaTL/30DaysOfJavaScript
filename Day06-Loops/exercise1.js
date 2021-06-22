//Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log("For loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("While loop");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("Do while loop");
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

//Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log("For loop reverse");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("While loop reverse");
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

console.log("Do while loop reverse");
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

//Iterate 0 to n using for loop
console.log("For loop 0 to n");
let n = 15;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

//Write a loop that makes the following pattern using console.log()
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("#");
  }
  console.log("\n");
}

//Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${i} = ${i * i}`);
}

//Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}

//Use for loop to iterate from 0 to 100 and print only even numbers
console.log("Print even numbers");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("Print odd numbers");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}
//Use for loop to iterate from 0 to 100 and print only prime numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all is: ", sum);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumEven += i) : (sumOdd += i);
}
console.log("The sum of evens is: ", sumEven);
console.log("The sum of odds is: ", sumOdd);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumsArray = [sumEven, sumOdd];
console.log(sumsArray);
