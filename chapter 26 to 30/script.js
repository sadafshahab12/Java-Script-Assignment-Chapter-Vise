// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write(`<h1> Math Methods </h1>`);

let posInteg = Number(prompt("Enter a Positive Integer Number"));
document.write(`Number : ${posInteg} </br>`);

document.write(`Round Off Value : ${Math.round(posInteg)}</br>`);
document.write(`Floor Value : ${Math.floor(posInteg)}</br>`);
document.write(`Ceil Value : ${Math.ceil(posInteg)}</br>`);

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write(`<h1> Math Methods </h1>`);

let negInteg = Number(prompt("Enter a Negative Integer Number"));
document.write(`Number : ${negInteg} </br>`);

document.write(`Round Off Value : ${Math.round(negInteg)}</br>`);
document.write(`Floor Value : ${Math.floor(negInteg)}</br>`);
document.write(`Ceil Value : ${Math.ceil(negInteg)}</br>`);

// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write(`<h1> Math.abs()  --> Absolute value </h1>`);

let num = Number(prompt("Enter a Number"));
document.write(`Absolute value : ${Math.abs(num)} </br>`);

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
document.write(`<h1> Value of dice </h1>`);
let diceNum = Math.floor(Math.random() * 6) + 1;
document.write(`Value of dice : ${diceNum} </br>`);

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
document.write(`<h1> Coin Toss </h1>`);
let random = Math.floor(Math.random() * 2) + 1;
if (random === 2) {
  document.write(`${random} , Coin Value : head </br>`);
} else {
  document.write(`${random} , Coin Value : tail </br>`);
}

// Write a program that shows a random number between 1
// and 100 in your browser.
document.write(`<h1> Random Number between 1 and 100 </h1>`);
let randomNum = Math.floor(Math.random() * 100) + 1;
document.write(`Random Number between 1 and 100 :  ${randomNum}`);

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write(`<h1>User Weight </h1>`);

let userWeight = Number(prompt("Enter Your Weight in kilograms"));
document.write(`The weight of user is ${Math.round(userWeight)}kg`);

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

document.write(`<h1>Guess the Number </h1>`);
let secretNum = Math.floor(Math.random() * 10) + 1;

let userGuess = Number(prompt("Guess the Number"));
if (userGuess === secretNum) {
  document.write("Congratulation! You Guess the Right");
} else {
  document.write(`You Loss the game. The Number was ${secretNum}`);
}
