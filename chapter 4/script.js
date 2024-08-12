// Question# 1
// Declare 3 variables in one statement.
var age;
var year;
var date;
// Question# 2
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

// Question# 3
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
