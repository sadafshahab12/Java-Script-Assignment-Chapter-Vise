document.write(`<h2> USER INPUT & CONDITIONAL STATEMENT</h2> `);

// Question# 1:

// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city_name = prompt("Enter City Name!");

if (city_name == "karachi" || city_name == "Karachi") {
  document.write(`Welcome to the city of lights.</br></br>`);
} else {
  document.write(`Welcome! </br></br>`);
}

// Question# 2:
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender!");

if (gender == "male") {
  document.write(`Good Morning! Sir </br></br>`);
} else {
  document.write(`Good Morning Ma’am </br></br>`);
}

// Question# 3:
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var light_clr = prompt("Enter Traffic Signal color!");

if (light_clr == "Red") {
  document.write(`Must Stop</br></br>`);
} else if (light_clr == "Yellow") {
  document.write(`Ready to move</br></br>`);
} else if (light_clr == "Green") {
  document.write(`Move Now!</br></br>`);
} else {
  document.write(`Enter a Valid traffic color</br></br>`);
}

// Question# 4:
// Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

var curr_fuel = prompt(`How many fuel are remaining in litres!`);

if (curr_fuel < 0.25) {
  document.write(`Please refill the fuel in your car </br></br>`);
} else {
  document.write(`No need for refilling! </br></br>`);
}

// Question# 5:
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.
var a = 4;
if (++a === 5) {
  // this condition shows an alert.
  alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
  // this condition does not show an alert.
  alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
  // this condition does not show an alert.
  alert("condition 1 is true");
}
if (c === 13) {
  // this condition also does not show an alert.
  alert("condition 2 is true");
}
if (++c < 14) {
  //Now, this condition shows an alert.
  alert("condition 3 is true");
}
if (c === 14) {
  // this condition does not show an alert.
  alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  // this condition shows an alert.
  alert("The cost equals");
}

// e.
if (true) {
  // this condition shows an alert.
  alert("True");
}
if (false) {
  // this condition does not show an alert.
  alert("False");
}

// f.
if ("car" < "cat") {
  // this condition shows an alert.
  alert("car is smaller than cat");
}

// Question# 6:
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

document.write(`<h2>Marks Sheet </h2> `);
var eng = Number.parseInt(prompt("Enter Obtained Marks of English!"));
var urdu = Number.parseInt(prompt("Enter Obtained Marks of Urdu!"));
var math = Number.parseInt(prompt("Enter Obtained Marks of Maths!"));
var obtained_marks = `${eng + urdu + math}`;
var total_marks = prompt("Enter Total Marks");
document.write(`Total Marks: ${total_marks} </br>`);
document.write(`Marks Obtained: ${obtained_marks} </br>`);
var calc_percent = (obtained_marks / total_marks) * 100;
document.write(`Percentage: ${calc_percent}% </br>`);

if (calc_percent >= 80) {
  document.write(`Grade: A-one </br>`);
  document.write(`Remarks: Excellent!</br></br>`);
} else if (calc_percent >= 70) {
  document.write(`Grade: A</br>`);
  document.write(`Remarks: Good!</br></br>`);
} else if (calc_percent >= 60) {
  document.write(`Grade: B</br>`);
  document.write(`Remarks: You Need to Improve!</br></br>`);
} else if (calc_percent < 60) {
  document.write(`Grade: Fail</br>`);
  document.write(`Remarks: Sorry!</br></br>`);
} else {
  document.write(`You are expelled</br></br>`);
}

// Question# 7:
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_num = 5;

var guess_num = prompt("Guess the number!");

// a.
if (guess_num == secret_num) {
  document.write(`Bingo! Correct answer </br></br>`);
}

// b.
if (guess_num > secret_num) {
  document.write(`Close enough to the correct answer</br></br>`);
}

// Question# 8:
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt("Enter a number for division!");

if (num % 3 == 0) {
  document.write(`The given number is divisible by 3 </br></br>`);
} else {
  document.write(`Cannot Divide </br></br>`);
}

// Question# 9:
// Write a program that checks whether the given input is an
// even number or an odd number.

var check_num = prompt("Enter a number for checking Even or Odd! ");

if (check_num % 2 == 0) {
  document.write(`Even Number </br></br>`);
} else {
  document.write(`Odd number </br></br>`);
}

// Question# 10:

// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var user_temp = prompt("Enter the current Temperature!");

if (user_temp > 40) {
  document.write(`It is too hot outside.</br></br>`);
} else if (user_temp > 30) {
  document.write(`The Weather today is Normal.</br></br>`);
} else if (user_temp > 20) {
  document.write(`Today’s Weather is cool.</br></br>`);
} else if (user_temp > 10) {
  document.write(`OMG! Today’s weather is so Cool.</br></br>`);
} else {
  document.write(`It is winter! </br></br>`);
}

// Question# 11:
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var num1 = Number.parseInt(prompt("Enter First Number"));
var num2 = Number.parseInt(prompt("Enter Second Number"));
var Operator = prompt("Enter the operator to perform the operation!");

if (Operator == "+") {
  document.write(`Addition: ${num1 + num2} </br></br>`);
} else if (Operator == "-") {
  document.write(`Subtraction: ${num1 - num2} </br></br>`);
} else if (Operator == "*") {
  document.write(`Multiplication: ${num1 * num2} </br></br>`);
} else if (Operator == "/") {
  document.write(`Division: ${num1 / num2} </br></br>`);
} else if (Operator == "%") {
  document.write(`Modulus: ${num1 % num2} </br></br>`);
} else {
  document.write(`Invalid operation </br></br>`);
}
