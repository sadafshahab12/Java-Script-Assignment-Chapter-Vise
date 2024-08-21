document.write(`<h2>IF…ELSE & ELSE IF STATEMENT, 
TESTING SET OF CONDITIONS</h2>`);

// Question# 1:
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a Character");
document.write(`Character is ${char}</br>`);
if (char == Number.parseInt(char)) {
  document.write(`Input is a number </br> </br>`);
} else if (char == char.toUpperCase()) {
  document.write(`Input is an uppercase letter </br></br>`);
} else if (char == char.toLowerCase()) {
  document.write(`Input is an lowercase letter </br></br>`);
} else {
  document.write(`Invalid Character! </br></br>`);
}

// Question# 2:
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var int_1 = Number.parseInt(prompt("Enter First integer!"));
var int_2 = Number.parseInt(prompt("Enter Second integer!"));

document.write(`First integer: ${int_1} </br>`);
document.write(`Second integer: ${int_2}</br>`);

if (int_1 == int_2) {
  document.write(`First integer is equal to Second integer </br></br>`);
} else if (int_1 > int_2) {
  document.write(`First integer is larger than Second integer </br></br> `);
} else {
  document.write(`Second integer is larger than First integer </br></br>`);
}

// Question# 3:
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var user_num = Number.parseInt(
  prompt("Enter a number whether check number positive, negative or zero")
);
document.write(`User Number: ${user_num} </br>`);

if (user_num > 0) {
  document.write(`User number is positive </br></br>`);
} else if (user_num < 0) {
  document.write(`User number is Negative </br></br>`);
} else {
  document.write(`User number is Zero </br></br>`);
}

// Question# 4:
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter a Character! (Vowel or not)");
var vowels = ["a", "e", "i", "o", "u"];
document.write(`Character: ${character}</br>`);
if (
  character == vowels[0] ||
  character == vowels[1] ||
  character == vowels[2] ||
  character == vowels[3] ||
  character == vowels[4]
) {
  document.write(`it is a vowel </br></br>`);
} else {
  document.write(`it is not vowel</br></br>`);
}

// Question# 5:
// 5. Write a program that
// a. Store correct password in a JS variable.
// b.  Asks user to enter his/her password
// c.  Validate the two passwords:
// i.
// Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii.
// Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correct_pswd = "sadaf";
var user_pswd = prompt("Enter Your Password!");

if (user_pswd == "") {
  alert(`Please enter your password!`);
  document.write(`Please enter your password!`);
} else if (user_pswd == correct_pswd) {
  document.write(
    `Correct! The password you entered matches the original password </br></br>`
  );
} else {
  document.write(`Incorrect password </br></br>`);
}

// Question# 6:

// 6.
// This if/else statement does not work. Try to fix it:
var greeting;
var hour = 20;
if (hour < 18) {
  document.write((greeting = "Good day </br></br>"));
} else {
  document.write((greeting = "Good evening </br></br>"));
}

// Question# 7:
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = 1900;

var user_time = Number.parseInt(prompt("Enter 24 hours clock format time"));
if (user_time >= 0 && user_time < 1200) {
  document.write(`Good Morning! </br></br>`);
} else if (user_time >= 1200 && user_time < 1700) {
  document.write(`Good Afternoon! </br></br>`);
} else if (user_time >= 1700 && user_time < 2100) {
  document.write(`Good Evening! </br></br>`);
} else if (user_time >= 2100 && user_time <= 2359) {
  document.write(`Good Night! </br></br>`);
}
