// Question# 1
// Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 5;
alert("I am" + " " + age + " " + "years old.");
console.log("I am" + " " + age + " " + "years old.");

// Question# 2
// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit_count;
visit_count = 10;
alert("You have visited this site" + " " + visit_count + " " + "times.");
console.log("You have visited this site" + " " + visit_count + " " + "times.");

// Question# 3
// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birth_year = 2015;
document.write("My birth year is" + " " + birth_year + "<br/>");
document.write(
  "Data type of my declared variable is number" + "<br/>"
);

// Question# 4
// A visitor visits an online clothing store 
// www.xyzClothing.com . Write a script to store in variables 
// the following information: 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to 
// order 
// Show the following message in your browser: “John 
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var product_name = "T-Shirts";
var quantity = 5;
var visitor_name = "John Doe";

document.write(`${visitor_name} ordered ${quantity} ${product_name} on XYZ Clothing store`);
