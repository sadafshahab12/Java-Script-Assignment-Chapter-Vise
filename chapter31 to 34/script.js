// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Write a program that displays current date and time in
// your browser.
document.write(`<h1> Current Date and Time </h1>`);

let date = new Date();
document.write(date);

// Write a program that alerts the current month in words.
// For example December
document.write(`<h1> Current month </h1>`);

function alertCurrentMonth() {
  let currentDate = new Date();
  let options = { month: "long" }; // get full month name
  let currentMonth = currentDate.toLocaleString("default", options);
  alert(`The current month is: ${currentMonth}`);
  document.write(`The current month is: ${currentMonth}`);
}

// Call the function to execute it
alertCurrentMonth();

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

document.write(`<h1> First 3 Letters of the current day </h1>`);
function currDayShorcut() {
  let currDate = new Date();
  let options = { weekday: "short" }; //  get abbreviated day name
  let currDay = currDate.toLocaleString("default", options);
  alert(`Today is: ${currDay}`);
  document.write(`Today is: ${currDay}`);
}

// Call the function to execute it
currDayShorcut();

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
document.write(`<h1> “It’s Fun day” </h1>`);

function funDay() {
  let currDate = new Date();
  let currDayIndex = currDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  if (currDayIndex === 0 || currDayIndex === 6) {
    alert("It's Fun day!");
    document.write("It's Fun day!");
  } else {
    alert("It's a regular day.");
    document.write("It's a regular day.");
  }
}

// Call the function to execute it
funDay();

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

document.write(`<h1> “First fifteen days of the month” </h1>`);

function daysOfMon() {
  let currentDate = new Date();
  let dayOfMon = currentDate.getDate(); //current day of the month (1-31)

  if (dayOfMon < 16) {
    alert("First fifteen days of the month");
    document.write("First fifteen days of the month");
  } else {
    alert("Last days of the month");
    document.write("Last days of the month");
  }
}

// Call the function to execute it
daysOfMon();

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

document.write(`<h1> Minutes Since midnight, Jan. 1, 1970 </h1>`);
// Create a Date object for a specific date
let speciDate = new Date("Sat Dec 05 2015 22:32:23 GMT+0500 (PKT)");

// Get the current date
let currentDate = new Date();

// Get the number of milliseconds since the Unix epoch for the specific date
let millisecondsSinceEpoch = speciDate.getTime();

// Convert milliseconds to minutes
let minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);

// Output the results
document.write(`Current Date:  ${speciDate.toString()} </br>`);
document.write(
  `Elapsed milliseconds since January 1, 1970: ${millisecondsSinceEpoch} </br>`
);
document.write(
  `Elapsed minutes since January 1, 1970:  ${minutesSinceEpoch} </br>`
);

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

document.write(`<h1> Checking it is PM or AM </h1>`);
function timeOfDay() {
  let currDate = new Date(); // Get the current date and time
  let currHours = currDate.getHours(); // Get the current hour (0-23)

  if (currHours < 12) {
    alert("It's AM");
    document.write("It's AM");
  } else {
    alert("It's PM");
    document.write("It's PM");
  }
}

// Call the function to execute it
timeOfDay();

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// Create a Date object for the last day of the last month of 2020
document.write(
  `<h1> Date object for the last day of the last month of 2020 </h1>`
);
let laterDate = new Date(2020, 11, 31); // Month is 0-indexed (11 = December)

// Output the result
document.write(`Later Date: ${laterDate.toString()}`);

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

document.write(`<h1> 1st Ramadan was on June 18, 2015  </h1>`);
function daysRamadan() {
  // Create a Date object for 1st Ramadan (June 18, 2015)
  let ramadanStartDate = new Date(2015, 5, 18); // Month is 0-indexed (5 = June)

  // Get the current date
  let currentDate = new Date();

  // Calculate the difference in millisec
  let diffInMillisec = currentDate - ramadanStartDate;
  // console.log(diffInMillisec);
  // Convert milliseconds to days
  let daysOfRamadan = Math.floor(diffInMillisec / (1000 * 60 * 60 * 24));

  // Alert the result
  alert(`Number of days since 1st Ramadan: ${daysOfRamadan}`);
  document.write(`Number of days since 1st Ramadan: ${daysOfRamadan}`);
}

// Call the function to execute it
daysRamadan();

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

document.write(
  `<h1> Elapsed between the reference date and the beginning of 2015  </h1>`
);
function displayElapsedSeconds() {
  // Create a Date object for the beginning of 2015
  let referenceDate = new Date(2015, 0, 1); // January is 0-indexed

  // Get the current date
  let currentDate = new Date();

  // Calculate the difference in milliseconds
  let differenceInMilliseconds = currentDate - referenceDate;

  // Convert milliseconds to seconds
  let secondsElapsed = Math.floor(differenceInMilliseconds / 1000);

  // Display the result in the browser
  document.write(
    `Seconds elapsed since the beginning of 2015: ${secondsElapsed}`
  );
}

// Call the function to execute it
displayElapsedSeconds();

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
document.write(
  `<h1> Date Object  </h1>`
);
let curDate = new Date();
// console.log(curDate);
let getHours = curDate.getHours();
// console.log(getHours);
curDate.setHours(getHours + 1);
alert(`Update date : ${curDate}`);
document.write(`Update date : ${curDate} <br><br>`);

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
document.write(
  `<h1> Date 100 Years Back </h1>`
);
let currenDate = new Date();
let hundredYearsAgo = new Date(
  currenDate.setFullYear(currenDate.getFullYear() - 100)
);
document.write(`100 years ago : ${hundredYearsAgo} <br><br>`);
alert(`100 years ago : ${hundredYearsAgo}`);

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
document.write(
  `<h1> Birth Year </h1>`
);
let userAge = prompt("What is your age?");
document.write(`Your Age is ${userAge} <br>`);
let currentYear = new Date().getFullYear();
console.log(currentYear);
let birthYear = currentYear - userAge;
console.log(birthYear);
document.write(`Your Birth Year is ${birthYear} <br><br>`);
alert(`Your Birth Year is ${birthYear}`);

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write(
  `<h1> K-Electric Bill </h1>`
);
let customerName = prompt("Customer Name");
let currMonth = new Date().toLocaleString("default", { month: "long" });
let unitConsumed = 200;
let chargePerUnit = 50;
let netAmountPayable = unitConsumed * chargePerUnit;
let latePaymentSurcharge = 70;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write(`
  Customer Name : ${customerName}<br>
  Current Month : ${currMonth}<br>
  Number of Units : ${unitConsumed}<br>
  Charges Per Unit : ${chargePerUnit.toFixed(2)}<br><br>
  Net Amount Payable (Within Due Date) : ${netAmountPayable}<br>
  Gross Amount Payable (After Due Date) : ${grossAmountPayable.toFixed(2)}<br><br>
  `);
