console.log('EXERCISE LEVEL 2');
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = () => {

}

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = (array) => array.forEach(elem => console.log(elem))

printArray([1, 2, 3])
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let showDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours =
        now.getHours() < 10 ? "0" + now.getHours() : now.getHours(); // return number (0 - 23)
    const minutes =
        now.getMinutes() < 10 ?
        "0" + now.getMinutes() :
        now.getMinutes(); // return number (0 -59)
    return `${year}-${month}-${day} ${hours}:${minutes}`
}
console.log(showDateTime())
// Declare a function name swapValues. This function swaps value of x to y.
let swapValues = (a, b) => {
    return `x => ${b}, y=> ${a}`
}
console.log(swapValues(3, 4))

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let reverseArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}
reverseArray([5, 7, 9, 2, 3, 9, 8])

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalizeArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].charAt(0))
        let valueTorepalce = array[i].charAt(0);
        newArray.push(array[i].replace(valueTorepalce, valueTorepalce.toUpperCase()))
    }
    console.log(newArray)
}
capitalizeArray(['maria', 'camila', 'sofia'])
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// Write a function which takes any number of arguments and return the sum of the arguments
let sumArgs = (args) => {
    return args.reduce((a, b) => a + b)
}
console.log(sumArgs([4, 5, 6]))

// Writ a function which generates a randomUserIp.
let randomUserIp = () => {
    return `${Math.floor(Math.random() *255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
}
console.log('Random IP', randomUserIp())

// Write a function which generates a randomMacAddress
let randomMacAddress = () => {
    let macAddress = "XX:XX:XX:XX:XX:XX";
    let hexDigits = "0123456789ABCDEF";
    return macAddress.replace(/X/g, () => hexDigits.charAt(Math.floor(Math.random() * 16)))
}
console.log('Random MAC Address', randomMacAddress())
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
let randomHexaNumberGenerator = () => {
    let size = Math.floor(Math.random() * 10);
    let num = '';
    let hexDigits = "0123456789ABCDEF";
    for (let i = 0; i < size; i++) {
        num += hexDigits.charAt(Math.floor(Math.random() * 16));
    }
    return num;
}
console.log('Random hexadecimal ', randomHexaNumberGenerator())
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
let randomId = () => {
    let possibleChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    let size = Math.floor(Math.random() * 15);
    for (let i = 0; i < size; i++) {
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return id;
}
console.log(randomId());