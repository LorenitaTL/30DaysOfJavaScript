 console.log('EXERCISE LEVEL 3')
 //Write a function name rgbColorGenerator and it generates rgb colors.
 let rgbColorGenerator = () => {

     let red = Math.floor(Math.random() * 255);
     let green = Math.floor(Math.random() * 255);
     let blue = Math.floor(Math.random() * 255);

     return `rgb (${red}, ${green}, ${blue})`;
 }
 console.log('RGB Color Generator ', rgbColorGenerator());

 // Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
 let hexaColorsGenerator = () => {
     return "#" + Math.floor(Math.random() * 16777215).toString(16);
 }
 console.log('Hexa Color Generator', hexaColorsGenerator());

 // Write a function arrayOfRgbColors which return any number of RGB colors in an array.
 let rgbColorsArray = (num) => {
     let rgbArray = []
     for (let i = 0; i < num; i++) {
         rgbArray.push(rgbColorGenerator())
     }
     return rgbArray;
 }
 console.log('Array of rgb ', rgbColorsArray(5))
 // Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
 let hexaColorsArray = (num) => {
     let hexaArray = [];
     for (let i = 0; i < num; i++) {
         hexaArray.push(hexaColorsGenerator())
     }
     return hexaArray
 }
 console.log('Array of hexa', hexaColorsArray(7))
 // Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

 // Write a function generateColors which can generate any number of hexa or rgb colors.
 let generateColors = (color, size) => {
     if (color === 'rgb') {
         return rgbColorsArray(size)
     }
     if (color === 'hexa') {
         return hexaColorsArray(size)
     }
 }

 console.log(generateColors('rgb', 3))
 console.log(generateColors('hexa', 5))
 console.log(generateColors('rgb', 7))


 // Call your function isEmpty, it takes a parameter and it checks if it is empty or not
 let isEmpty = (param) => {
     return param == null || undefined || '' ? 'isEmpty' : 'Is not empty'
 }
 console.log('Is empty? ', isEmpty('Hello'))

 // Call your function sum, it takes any number of arguments and it returns the sum.
 let sum = (args) => {
     return args.reduce((a, b) => a + b)
 }
 console.log('Sum ', sum([6, 5, 8, 9]))
 // Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

 let sumOfArrayItems = (array) => {
     let isAllNumber = true;
     array.forEach(element => {
         if (isNaN(element)) {
             isAllNumber = false;
         }
     })
     if (!isAllNumber) {
         return "Can't sum the items";
     }

     return array.reduce((a, b) => a + b);
 }
 console.log(sumOfArrayItems([1, 4, 7, 9]))
 console.log(sumOfArrayItems([1, 'a', 7, 9]))
 // Write a function called average, it takes an array parameter and returns the average of the items. 
 //Check if all the array items are number types. If not give return reasonable feedback.
 let average = (numbers) => {
     let isAllNumber = true;
     numbers.forEach(element => {
         if (isNaN(element)) {
             isAllNumber = false;
         }
     })
     if (!isAllNumber) {
         return "Can't get average of the items";
     }

     return numbers.reduce((a, b) => a + b) / numbers.length
 }

 console.log('Average ', average([6, 7, 8, 6, 5, 6, 9, 6]))


 // Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
 let modifyArray = (array) => {

     if (array.length < 5) {
         return 'Item not found';
     } else {
         array[4] = array[4].toUpperCase();
         return array
     }
 }

 console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))

 // Write a function called isPrime, which checks if a number is prime number.
 let isPrime = (num) => {

     if (num === 1) {
         return false;
     } else if (num === 2) {
         return true;
     } else {
         for (let i = 2; i < num; i++) {
             if (num % 2 === 0) {
                 return false
             }
         }
         return true;
     }
 }
 console.log('isPrime ', isPrime(37))
 // Write a functions which checks if all items are unique in the array.
 let unique = (elements) => {
     let newArray = []
     for (let el of elements) {

         if (newArray.includes(el)) {
             return 'Array contains duplicate elements'
         }
         newArray.push(el)
     }
     return 'All elements are unique'

 }

 console.log(unique(['a', 1, 1, {
     name: 'Lorena'
 }]))
 // Write a function which checks if all the items of the array are the same data type.
 let dataType = (elements) => {
     let types = []
     elements.forEach(item => {
         if (!types.includes(typeof item)) {
             types.push(typeof item)
         }
     })
     return types
 }
 console.log('The array contains ' + dataType(['a', 1, 1, {
     name: 'Lorena'
 }]).length + ' data types')
 // JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
 let isValidVariable = (name) => {
     let validCharacters = /^[A-Za-z$_]+$/;
     return name.match(validCharacters) ? true : false
 }
 console.log('is valid variable? ', isValidVariable('$Lorena_'))
 // Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
 let sevenRandomNumbers = () => {
     let numbers = [];
     do {
         let value = Math.floor(Math.random() * (9 - 0) + 0);
         if (numbers.indexOf(value) === -1) {
             numbers.push(value);
         }
     } while (numbers.length < 7);

     return numbers;
 }
 console.log(sevenRandomNumbers())
 // Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
 let reverseCountries = (countries) => {
     let reverseArray = []
     for (let i = countries.length - 1; i >= 0; i--) {
         reverseArray.push(countries[i])
     }
     return reverseArray;
 }

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
 let copyCountries = countries.slice();
 console.log(reverseCountries(copyCountries));