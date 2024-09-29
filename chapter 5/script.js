// Question# 1:
//Write a program that take two numbers &
//add them in a new variable. Show the result in your browser.

document.write(`<h2> Familiar Expression </h2>`);

var num1 = 10;
var num2 = 2;
let add = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${add} </br>`);

// Question# 2 :
//Repeat task1 for subtraction,
//multiplication, division & modulus.

// subtraction:
let subtract = num1 - num2;
document.write(`Subtraction of ${num1} and ${num2} is ${subtract}  </br>`);
// multiplication:
let multiplication = num1 * num2;
document.write(
  `Multiplication of ${num1} and ${num2} is ${multiplication}  </br>`
);
// division:
let division = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${division}  </br>`);
// modulus:
let modulus = num1 % num2;
document.write(
  `Modulus of ${num1} and ${num2} is ${modulus}  </br> </br> </br>`
);

//Question 3:
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var value;
document.write(`Value after variable declaration is ${value} </br>`);
value = 5;
document.write(`Initial Value is ${value} </br>`);
value++;
document.write(`Value of variable after increment is ${value} </br>`);
value += 7;
document.write(`Value of variable after addition is ${value} </br>`);
value--;
document.write(`Value of variable after decrement is ${value} </br>`);
value %= 3;
document.write(
  `The remainder after division of variable's value is ${value} </br> </br>`
);

//Question 4:

// Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:

document.write(`<h2> Cost Calculation:</h2> `);
var ticket_price = 600;
var ticket_qty = 5;
var output = ticket_price * ticket_qty;
document.write(
  `Total cost to buy ${ticket_qty} tickets to a movie is ${output} </br> </br> `
);

//Question 5:

// Write a script to display multiplication table of any
// number in your browser

document.write(`<h2> Table of 4 </h2> `);
var table = 4;
document.write(`${table} x 1 = ${table * 1} </br> `);
document.write(`${table} x 2 = ${table * 2} </br> `);
document.write(`${table} x 3 = ${table * 3} </br> `);
document.write(`${table} x 4 = ${table * 4} </br> `);
document.write(`${table} x 5 = ${table * 5} </br> `);
document.write(`${table} x 6 = ${table * 6} </br> `);
document.write(`${table} x 7 = ${table * 7} </br> `);
document.write(`${table} x 8 = ${table * 8} </br> `);
document.write(`${table} x 9 = ${table * 9} </br> `);
document.write(`${table} x 10 = ${table * 10} </br> </br></br>`);

//Question 6:

// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write(`<h2>Celsius Temperature Calculation </h2>`);

var fahr_temp = 88;
var cels_calc = (fahr_temp - 32) * (5 / 9);
document.write(
  `${fahr_temp}<sup>0</sup>F is ${cels_calc}<sup>0</sup>C  </br></br>`
);

document.write(`<h2>Fahrenheit Temperature Calculation </h2>`);

var cels_temp = 88;
var fahr_calc = cels_temp * (9 / 5) + 32;
document.write(`${cels_temp}<sup>0</sup>C is ${fahr_calc}<sup>0</sup>F </br>`);

//Question 7:
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write(`<h2>Shopping Cart</h2>`);
var item1 = 650;
var item2 = 100;
var item1_qty = 3;
var item2_qty = 7;
var Shipping_charges = 100;
var item1_cost = item1 * item1_qty;
var item2_cost = item2 * item2_qty;
var total_cost = item1_cost + item2_cost + Shipping_charges;

document.write(`Price of Item 1 is ${item1} </br>`);
document.write(`Quantity of Item 1 is ${item1_qty} </br>`);
document.write(`Price of Item 2 is ${item2} </br>`);
document.write(`Quantity of Item 2 is ${item2_qty} </br>`);
document.write(`Shipping Charges  ${Shipping_charges} </br></br>`);
document.write(`Total cost of your order is ${total_cost}</br></br> `);

//Question 8:

// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write(`<h2>Marks Sheet </h2>`);
var total_marks = 980;
var Obt_marks = 804;
let percentage = (Obt_marks / total_marks) * 100;

document.write(`Total Marks:${total_marks}</br>`);
document.write(`Marks Obtained: ${Obt_marks}</br>`);
document.write(`Percentage${percentage}&percnt; </br></br>`);

//Question 9:

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write(`<h2>Currency in PKR</h2>`);
var us_dollars = 10;
var saudi_riyals = 25;

var exchange_rate = us_dollars * 104.8 + saudi_riyals * 28;
document.write(`Total Currency in PKR: ${exchange_rate} </br></br>`);

//Question 10:
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var numb = 4;
var calc = ((4 + 5) * 10) / 2;

//Question 11:
//  The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

document.write(`<h2>Age Calculator</h2>`);

var current_year = 2010;
var birth_year = 2005;
var age = current_year - birth_year;
document.write(`Current year: ${current_year} </br>`);
document.write(`Birth year: ${birth_year}</br>`);
document.write(`Your age is: ${age}</br> </br>`);

//Question 12:
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write(`<h2>The Geometrizer</h2>`);
var radius = 20;
var pie_value = 3.142;
var circumference = `${2 * pie_value * radius}`;
document.write(`Radius of a circle : ${radius} </br>`);
document.write(`The circumference is: ${circumference}</br>`);
document.write(`The area is: ${pie_value * radius ** 2}</br></br>`);

//Question 13:
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
document.write(`<h2>The Lifetime Supply Calculator</h2>`);

var favorite_snacks = "Chillz";
var curr_age = 14;
var max_age = 50;
var amount_per_snack = 10;
var snack_qty = 1000;

document.write(`Favourite Snack: ${favorite_snacks} </br>`);
document.write(`Current Age: ${curr_age} </br>`);
document.write(`Estimated Maximum Age: ${max_age} </br>`);
document.write(`Amountof Snacks per day: ${amount_per_snack} </br>`);
document.write(`Favourite Snack: ${favorite_snacks} </br>`);

document.write(
  `You will need ${snack_qty} to last you until the ripe old age of ${max_age} `
);
