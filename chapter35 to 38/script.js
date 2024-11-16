// Write a function that displays current date & time in your
// browser.

document.write(`<h1> Current Date and Time </h1>`);
function currDate() {
  let date = new Date();
  document.write(date);
}
currDate();

// Write a function that takes first & last name and then it
// greets the user using his full name.

document.write(`<h1> Greets to User </h1>`);

function greet(firstName, lastName) {
  firstName = prompt("Enter First Name");
  lastName = prompt("Enter Last Name");

  document.write(`Good morning ${firstName} ${lastName}`);
}
greet();

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
document.write(`<h1> Adds two numbers </h1>`);
function sum(num1, num2) {
  num1 = Number(prompt("Enter First Number"));
  num2 = Number(prompt("Enter Second Number"));
  document.write(`Sum of two numbers: ${num1 + num2}`);
}
sum();

// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

document.write(`<h1> Calculator </h1>`);

function calculator(numb1, numb2, operator) {
  numb1 = Number(prompt("Enter First Number"));
  numb2 = Number(prompt("Enter Second Number"));
  operator = prompt("Enter the operator");

  if (operator === "+") {
    document.write(`Addition: ${numb1 + numb2}`);
  } else if (operator === "-") {
    document.write(`Subtarction: ${numb1 - numb2}`);
  } else if (operator === "*") {
    document.write(`Multiplication: ${numb1 * numb2}`);
  } else if (operator === "/") {
    document.write(`Division: ${numb1 / numb2}`);
  }
}
calculator();

// Write a function that squares its argument.
document.write(`<h1> Squares </h1>`);
function square(num) {
  num = prompt("Enter a number");
  let square = num ** 2;
  document.write(`Square of ${num} is ${square}`);
}
square();

// Write a function that computes factorial of a number.
document.write(`<h1> Factorial of a Number </h1>`);

function factorial(num) {
  // num = prompt("Enter a number");
  if (num === 0 || num === 1) {
    // document.write(1)
    return 1;
  } else {
    // document.write(num * factorial(num - 1))
    return num * factorial(num - 1);
  }
}
document.write(factorial(5));
console.log(factorial(5));

// Write a function that take start and end number as inputs
// & display counting in your browser.
document.write(`<h1> Counting </h1>`);
function counting(start, end) {
  start = Number(prompt("Enter start number"));
  end = Number(prompt("Enter end number"));
  for (let i = start; i <= end; i++) {
    //   let count ="";
    // count += i;
    document.write(`${i}</br>`);
  }
}
counting();

// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

document.write(`<h1> Calculate Hypotenuse </h1>`);

function calculateHypotenuse(base, perpendicular) {
  function calcSquare(num) {
    return num * num;
  }
  let baseSquare = calcSquare(base);
  let perpendicularSquare = calcSquare(perpendicular);
  let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
  return hypotenuse;
}
document.write(calculateHypotenuse(5, 6));

// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

document.write(`<h1> Area of a Rectangle (Arguments as value) </h1>`);

function calcAreaOfRectangle(width, height) {
  return width * height;
}
document.write(calcAreaOfRectangle(8, 10));

document.write(`<h1> Area of a Rectangle (Arguments as variables) </h1>`);
let width = 8;
let height = 15;
document.write(calcAreaOfRectangle(width, height));

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
document.write(`<h1> String is Palindrome or not? </h1>`);
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
document.write(`${isPalindrome("madam")}<br>`);

document.write(`${isPalindrome("eye")} <br>`);
document.write(`${isPalindrome("ear")} <br>`);
document.write(`${isPalindrome("son")} <br>`);
document.write(`${isPalindrome("teeth")} <br>`);
document.write(`${isPalindrome("teeth")} <br>`);

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

document.write(`<h1> Capitalize </h1>`);
function capitalizeWord(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
document.write(capitalizeWord(`sadaf shahab <br>`));
document.write(capitalizeWord(`the quick brown fox <br>`));

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
document.write(`<h1> Largest Word  </h1>`);

function findLargestWord(largeWord) {
  let words = largeWord.split(" ");
  let longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
  return longestWord;
}
document.write(findLargestWord("Web Development Tutorial"));

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

document.write(`<h1> Count occurrences of a specific letter  </h1>`);

function countLetterOccurr(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}
document.write(countLetterOccurr("Circumference", "e"));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle    =     2πr
// Area of circle
// =
// πr2

document.write(`<h1> Properties of a Circle  </h1>`);

document.write(`<h4> Circumference of a Circle  </h4>`);

function circumference(radius) {
  return `The Circumference is ${2 * Math.PI * radius}`;
}
document.write(`${circumference(7)}`);

document.write(`<h4> Area of a Circle  </h4>`);

function area(radius) {
  return `The Area is ${Math.PI * radius * radius}`;
}
document.write(`${area(2)}`);
