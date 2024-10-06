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

// function greet (firstName , lastName){
//     firstName = prompt("Enter First Name");
//     lastName= prompt("Enter Last Name");

//     document.write(`Good morning ${firstName} ${lastName}`)
// }
// greet();

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
document.write(`<h1> Adds two numbers </h1>`);
// function sum(num1, num2) {
//   num1 = Number(prompt("Enter First Number"));
//   num2 = Number(prompt("Enter Second Number"));
//   document.write(`Sum of two numbers: ${num1 + num2}`);
// }
// sum();

// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

document.write(`<h1> Calculator </h1>`);

// function calculator (numb1, numb2, operator){
//   numb1 = Number(prompt("Enter First Number"));
//   numb2 = Number(prompt("Enter Second Number"));
//   operator = prompt("Enter the operator");

// if(operator=== "+"){
//     document.write(`Addition: ${numb1+numb2}`);
// }
// else if(operator=== "-"){
//     document.write(`Subtarction: ${numb1-numb2}`);
// }
// else if(operator=== "*"){
//     document.write(`Multiplication: ${numb1*numb2}`);
// }
// else if(operator=== "/"){
//     document.write(`Division: ${numb1/numb2}`);
// }
// }
// calculator();

// Write a function that squares its argument.
document.write(`<h1> Squares </h1>`);
// function square(num) {
//   num = prompt("Enter a number");
//   let square = num ** 2;
//   document.write(`Square of ${num} is ${square}`);
// }
// square();

document.write(`<h1> Factorial of a Number </h1>`);
// Write a function that computes factorial of a number.

// Write a function that take start and end number as inputs
// & display counting in your browser.
document.write(`<h1> Counting </h1>`);
function counting(start, end) {
  start = Number(prompt("Enter start number"));
  end = Number(prompt("Enter end number"));
  for(let i = start; i<= end; i++){
      let count ="";
    count += i;
    document.write(`${count}</br>`);
  }
}
counting()
