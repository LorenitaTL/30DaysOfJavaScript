// Exercises: Level 1
console.log("EXERCISES LEVEL 1");
// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log("Dog", dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Firulais";
dog.legs = 4;
dog.age = 5;
dog.color = "Brown with white";
dog.bark = function () {
  return "woof woof!";
};

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "Beagle";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.breed} dog, he has ${this.age} years old and he is ${this.color}`;
};

