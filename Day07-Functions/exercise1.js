// Declare a function fullName and it print out your full name.
function fullName1() {
    console.log('Lorena Trujillo Landeros')
}
fullName1();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName2('Lorena', 'Trujillo'))
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(3, 5))
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log('ARea of rectangle', areaOfRectangle(7, 8))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}
console.log('Perimeter of rectangle', perimeterOfRectangle(3, 7))

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log('Volume of Prism', volumeOfRectPrism(3, 7, 6))

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    return Math.PI * radius * radius
}
console.log('Area od circle', areaOfCircle(5))

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    return 2 * Math.PI * radius
}
console.log('Circum of circel', circumOfCircle(7))

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume;
}
console.log('density', density(0.5, 3))

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
//Write a function which calculates a speed of a moving object, speed.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass) {
    const gravity = 9.8;
    return mass * gravity
}
console.log('Weight: ', weight(50) + ' N')

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(celcius) {
    return (celcius * (9 / 5) + 32)
}
console.log("convertCelciusToFahrenheit, " + convertCelciusToFahrenheit(34) + ' °F')

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBmi(weight, height) {
    let bmi = weight / (height * height);
    console.log(bmi);
    if (bmi < 18.5) {
        console.log('Your bmi is: ' + bmi + ' You are underweight')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('Your bmi is: ' + bmi + ' You are Normal')
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log('Your bmi is: ' + bmi + ' You are overweight')
    } else if (bmi >= 30) {
        console.log('Your bmi is: ' + bmi + ' You are obese')
    }
}
calculateBmi(51.6, 1.54)

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    let months = {
        september: 'Autumn',
        october: 'Autumn',
        november: 'Autumn',
        december: 'Winter',
        january: 'Winter',
        february: 'Winter',
        march: 'Spring',
        april: 'Spring',
        may: 'Spring',
        june: 'Summer',
        july: 'Summer',
        august: 'Summer',
    };
    const season = months[month];
    return season;
}
console.log(checkSeason('may'))
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(...args) {
    let c = 0;
    for (let num of args) {
        console.log(num);
        if (num > c) c = num
    }
    return c;
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))
