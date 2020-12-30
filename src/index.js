// //Map -Create a new array by doing something with each item in an array.
var numbers = [3, 56, 2, 48, 5];
function double(x) {
  return x * 2;
}

const newNumber = numbers.map(double);

console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
// var numbers = [3, 56, 2, 48, 5];
// const newNumber = numbers.filter(function (x) {
//   return x > 10;
// });

// console.log(newNumber);

// //Reduce - Accumulate a value by doing something to each item in an array.

// var numbers = [3, 56, 2, 48, 5];

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulatore= " + accumulator);
//   console.log("currentNumber= " + currentNumber);
//   return accumulator + currentNumber;
// });
// // will return 114 - which is the total of all the numbers in the array
// console.log(newNumber);

// //Find - find the first item that matches from an array.

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (x) {
//   return x > 10;
// });
// // will return 56
// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex(function (x) {
//   return x > 10;
// });
// // will return 1
// console.log(newNumber);
