// Question# 1:
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write(`<h2> Arithmetic</h2> `);

var a = 10;
document.write(`The value of a is: ${a} </br>`);
document.write(`The value of a is : ${++a} </br>`);
document.write(`Now the value of a is : ${a} </br>`);
document.write(`The value of a is : ${a++} </br>`);
document.write(`Now the value of a is : ${a} </br>`);
document.write(`The value of a is : ${--a} </br>`);
document.write(`Now the value of a is : ${a} </br>`);
document.write(`The value of a is : ${a--} </br>`);
document.write(`Now the value of a is : ${a} </br> </br>`);
// Question# 2 :
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a = 2;
var b = 1;
document.write(`a is ${a}</br>`);
document.write(`b is ${b}</br>`);
// --a;  decrement of 1 a = 1
// --a - --b;  decrement of 1 from 'a' and decrement of 1 from b  a = 1 , b = 0
// --a - --b + ++b;   1 - 0 + (increment of 1 in b) 1;
//--a - --b + ++b + b--;  1 - 0 + 1 + (after decrement) 1
var result = --a - --b + ++b + b--; // answer will be 3
document.write(`result is ${result}</br></br>`);

//Question 3:
// Write a program that takes input a name from user &
// greet the user.
var user_name = prompt("Enter your Name");
document.write(`Good Morning! ${user_name}</br></br>  `);

//Question 4:

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = prompt("Enter a number!")|| 5;
document.write(`${table} x 1 = ${table * 1}</br>`);
document.write(`${table} x 2 = ${table * 2}</br>`);
document.write(`${table} x 3 = ${table * 3}</br>`);
document.write(`${table} x 4 = ${table * 4}</br>`);
document.write(`${table} x 5 = ${table * 5}</br>`);
document.write(`${table} x 6 = ${table * 6}</br>`);
document.write(`${table} x 7 = ${table * 7}</br>`);
document.write(`${table} x 8 = ${table * 8}</br>`);
document.write(`${table} x 9 = ${table * 9}</br>`);
document.write(`${table} x 10 = ${table * 10}</br></br>`);

//Question 5:
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subj1 = "English";
var subj2 = "Urdu";
var subj3 = "Maths";
var total_marks = 100;
var subj1_obt_marks = 75;
var subj2_obt_marks = 85;
var subj3_obt_marks = 95;
var subj1_per = (subj1_obt_marks / total_marks) * 100;
var subj2_per = (subj2_obt_marks / total_marks) * 100;
var subj3_per = (subj3_obt_marks / total_marks) * 100;

document.write(`
  <table border = "1" style="border-collapse: collapse" >
  <tr>
  <th> Subject</th>
  <th> Total Marks</th>
  <th> Obtained Marks</th>
  <th> Percentage</th>
  </tr> 
  <tr>
  <td> ${subj1}</td>
  <td> ${total_marks}</td>
  <td> ${subj1_obt_marks}</td>
  <td> ${subj1_per}% </td>
  </tr>
  <tr>
  <td> ${subj2}</td>
  <td> ${total_marks}</td>
  <td> ${subj2_obt_marks}</td>
  <td> ${subj2_per}% </td>
  </tr>

  <tr>
  <td> ${subj3}</td>
  <td> ${total_marks}</td>
  <td> ${subj3_obt_marks}</td>
  <td> ${subj3_per}% </td>
  </tr>

  <tr>
  <td></td>
  <td style="text-align: right;  font-weight: bold;">
  ${total_marks + total_marks + total_marks} 
  </td>
  <td style="text-align: right; font-weight: bold;">
  ${subj1_obt_marks + subj2_obt_marks + subj3_obt_marks} </td>
  <td style="text-align: right; font-weight: bold;">
  ${(subj1_per + subj2_per + subj3_per) / 3}% </td>
  </tr>
  </table>
  `);

