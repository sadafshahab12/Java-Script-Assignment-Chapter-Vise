// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

document.write(`<h1> Custom Function </h1>`);
function power(a, b) {
  return Math.pow(a, b);
}
document.write(power(5, 2));

// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

document.write(`<h1> Leap Year or not </h1>`);
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}
document.write(`${isLeapYear(2016)} <br>`);
document.write(`${isLeapYear(2021)} <br>`);

// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

document.write(`<h1> Area of Triangle </h1>`);

function calArea(a, b, c) {
  let S = (a + b + c) / 2;
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
document.write(calArea(5, 8, 9));

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

document.write(`<h1> Average and Percentage </h1>`);

function mainFunction(marks) {
  let avg = calcAverage(marks);
  let percentage = calculatePercentage(marks);
  document.write(`Average : ${avg} <br>`);
  document.write(`Percentage : ${percentage}%`);
}

function calcAverage(marks) {
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}
function calculatePercentage(marks) {
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  return (total / (marks.length * 100)) * 100;
}
mainFunction([60, 33, 80]);

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

document.write(`<h1> Function indexOf </h1>`);

function findCharacter(word, character) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      return i;
    }
  }
  return -1;
}
document.write(findCharacter("hellow", "w"));

// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
document.write(`<h1> Delete All Vowels </h1>`);
function deleVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, "");
}
document.write(deleVowels("Please read this application"));

// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
document.write(`<h1> Vowel Pair </h1>`);
function vowelPair(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length - 1; i++) {
    let pair = sentence[i] + sentence[i + 1];
    switch (pair.toLowerCase()) {
      case "ae":
      case "ea":
      case "ei":
      case "io":
      case "ou":
      case "ui":
        count++;
        break;
    }
  }
  return count;
}
console.log(vowelPair("Pleases read this application and give me gratuity"));
document.write(vowelPair("Pleases read this application and give me gratuity"));

// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
document.write(`<h1> Distance in meters, feet, inches and centimeters </h1>`);
function convertDistance(km) {
  return {
    meters: km * 1000,
    feet: km * 3280.84,
    inches: km * 39370.1,
    centimeters: km * 100000,
  };
}
let distance = convertDistance(5);
document.write(`${distance.meters} <br>`);
document.write(`${distance.feet}<br>`);
document.write(`${distance.inches} <br>`);
document.write(`${distance.centimeters} <br>`);

// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

document.write(`<h1> Overtime Pay </h1>`);

function calOverTimePay(hoursWorked) {
  const overTimeRate = 150;
  if (hoursWorked > 40) {
    let overTimeHours = hoursWorked - 40;
    let overTimePay = overTimeHours * overTimeRate;
    return `Overtime pay : ${overTimePay}`;
  } else {
    return `No overtime pay`;
  }
}
document.write(`${calOverTimePay(45)} <br>`);
document.write(`${calOverTimePay(35)} <br>`);

// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
document.write(`<h1> Currency Denomination </h1>`);
function currDenomiation(amount) {
  let Note100 = Math.floor(amount / 100);
  amount %= 100;
  let Note50 = Math.floor(amount / 50);
  amount %= 50;
  let Note10 = Math.floor(amount / 10);

  return {
    "100 notes": Note100,
    "50 notes": Note50,
    "10 notes": Note10,
  };
}
let currDenomiations = currDenomiation(250);
document.write(
  `You have ${currDenomiations["100 notes"]} hundred note, ${currDenomiations["50 notes"]} fifty notes, ${currDenomiations["10 notes"]} ten notes <br>`
);
document.write(`100 Note ${currDenomiations["100 notes"]}<br>`);

document.write(`50 Note : ${currDenomiations["50 notes"]} <br>`);

document.write(`10 Note :${currDenomiations["10 notes"]} <br>`);
