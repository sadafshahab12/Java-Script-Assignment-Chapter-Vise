// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

document.write(`<h1> Empty Array </h1>`);

let emptyArr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
let matrix = "";
for (let i = 0; i < emptyArr.length; i++) {
  matrix += emptyArr[i].join(" ") + "<br>"; // Join each row with spaces
}

document.write(matrix);
// Write a program to print numeric counting from 1 to 10.

document.write(`<h1> Numeric Counting from 1 to 10 </h1>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${i}</br>`);
}

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
document.write(`<h1> Table Printer </h1>`);
let table = prompt("Enter a number to print Table");
let tableLength = prompt("Enter a number to end table");

let print = "";
for (let i = 1; i <= tableLength; i++) {
  print += `${table} x ${i} = ${table * i}<br>`;
}
document.write(print);

// Write a program to print items of the following array
// using for loop:
// fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]
document.write(`<h1> Print Items (using for loop) </h1>`);
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]} </br>`);
}

// Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write(`<h1> Counting </h1>`);
let counting = [];
for (i = 1; i <= 10; i++) {
  counting.push(i);
}
document.write(`${counting.join(" , ")} </br>`);

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write(`<h1>  Reverse counting </h1>`);

let reverseCounting = [];
for (i = 10; i > 0; i--) {
  reverseCounting.push(i);
}
document.write(`${reverseCounting.join(" , ")} </br>`);

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write(`<h1>  Even </h1>`);
let even = [];

for (i = 0; i <= 20; i += 2) {
  even.push(i);
}
document.write(`${even.join(" , ")} </br>`);

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write(`<h1> Odd </h1>`);
let oddNum = [];
for (let i = 1; i < 20; i += 2) {
  oddNum.push(i);
}
document.write(`${oddNum.join(" , ")} </br>`);

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k\
document.write(`<h1>  Series </h1>`);
let series = [];
for (let i = 1; i <= 10; i++) {
  series.push(2 * i);
}
document.write(`${series.join("k , ")} </br>`);

// You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

document.write(`<h1> Search by User Input </h1>`);
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userSearch = prompt("what do you want to order?");

if (A.includes(userSearch)) {
  document.write(
    `${userSearch} is available at index ${A.indexOf(userSearch)} in our bakery`
  );
} else {
  document.write(`Sorry! ${userSearch} is not available at our bakery`);
}

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

document.write(`<h1> Largest Number </h1>`);

let C = [24, 53, 78, 91, 12];
let largest = C[0];

for (let i = 1; i < C.length; i++) {
  if (C[i] > largest) {
    largest = C[i];
  }
}
document.write(`The largest number is: ${largest}`);

// Write a program to identify the smallest number in the
// given array.
document.write(`<h1> Smallest Number </h1>`);

let B = [24, 53, 78, 91, 12];
let smallest = B[0];

for (let i = 1; i < B.length; i++) {
  if (B[i] < smallest) {
    smallest = B[i];
  }
}
document.write(`The smallest number is: ${smallest}`);

// Write a program to print multiples of 5 ranging 1 to
// 100.

document.write(`<h1> multiples of 5 ranging 1 to 100 </h1>`);
let tables = 5;
for (let i = 1; i <= 20; i++) {
  let printTable = ` ${tables * i},`;
  document.write(printTable);
}
