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
  "Data type of my declared variable is number" + "<br/>" + "<br/>"
);

// Question# 4
// Declare 3 variables in one statement.
var age;
var year;
var date;

// Question# 5
// Declare 5 legal & 5 illegal variable names.
// ==============================================
// 5 Legal Variable name
var firstName;
var last_name;
var Full$Name;
var _birthDate;
var $person_name;
// ==============================================
// 5 Illegal Variable name
// var 1firstUser;  // number can't be written in the first of variable name.
// var &modelName; // symbols can't be used in teh starting of variable name.
// var user id;  //spaace is not allowed between varibale name it throws bugs.
// var class;  //reserved key is not being used because it has already been reserved and cannot used as variable it throws error.
// var car*name;  //special characters cannot be used between variable but $ sign can be used.

// Question# 6
// Display this in your browser
// a)  A heading stating “Rules for naming JS variables”
var rules_for_JS = "Rules for naming JS variables" + "<br/>" + "<br/>";
document.write(rules_for_JS);

// b)  Variable names can only contain ______, ______, ______ and ______.  For example $my_1stVariable

var variable_rules =
  "Variable names can only contain  _ , $ and number For example: $person_name1 " +
  "<br/>" +
  "<br/>";
document.write(variable_rules);

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
var vari_start_with =
  "Variables must begin with a letter, _ or $. For example $person, _person or person" +
  "<br/>" +
  "<br/>";
document.write(vari_start_with);

// d) Variable names are case _________
var variable_cases = "Variable names are case sensitive " + "<br/>" + "<br/>";
document.write(variable_cases);

// e) Variable names should not be JS _________
var variable_name =
  "Variable names should not be JS keywords." + "<br/>" + "<br/>";
document.write(variable_name);
