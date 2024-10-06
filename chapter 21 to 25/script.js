// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
document.write(`<h1> String Method </h1>`);

let firstName = prompt("Enter First Name");
let lastName = prompt("Enter Last Name");
let fullName = `${firstName} ${lastName}`;
document.write(fullName);

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
document.write(`<h1> Favorite mobile phone model </h1>`);
let mobilePhone = prompt("Enter your favourite mobile phone model.");

document.write(
  `Favorite mobile phone model is${mobilePhone} : Length of ${mobilePhone} is ${mobilePhone.length}`
);

// Write a program to find the index of letter "n" in the word
// "Pakistani" and display the result in your browser .

document.write(`<h1> Index of letter "n" </h1>`);
let country = "Pakistani";
document.write(`${country} </br>`);
document.write(`Index of  "n" : ${country.indexOf("n")}`);

// Write a program to find the last index of letter "l" in the
// word "Hello World" and display the result in your browser
document.write(`<h1> Last index of letter "l" </h1>`);
let word = "Hello World";
document.write(`${word} </br>`);
document.write(`Last Index of  "l" : ${word.lastIndexOf("l")}`);

// Write a program to find the letteracter at 3rd index in the
// word "Pakistani" and display the result in your browser;

document.write(`<h1> Find the letteracter at 3rd index </h1>`);
document.write(`${country} </br>`);
document.write(`letteracter at 3rd index is ${country.charAt(3)}`); //this method also work
// document.write(country[3]);   this method also work

// Repeat Q1 using string concat() method.
document.write(`<h1> concat() </h1>`);
let fullName2 = `${firstName.concat(lastName)}`;
document.write(fullName2);

// Write a program to replace the "Hyder" to "Islam" in the
// word "Hyderabad" and display the result in your browser.

document.write(`<h1> Replace the "Hyder" to "Islam" </h1>`);

let city = "Hyderabad";
document.write(`${city} </br>`);
document.write(`After replacement : ${city.replace("Hyder", "Islam")}`);

// Write a program to replace all occurrences of "and" in the
// string with "&" and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and
// football together.";

document.write(
  `<h1> Replace all occurrences of "and" in the string with "&" </h1>`
);
let message =
  "Ali and Sami are best friends. They play cricket and football together.";
document.write(
  `After replacement: ${message.replaceAll("and", "&")} </br></br>`
);

// Write a program that converts a string "472" to a number
// 472. Display the values & types in your browser.

document.write(`<h1> String to Number</h1>`);
let numStr = "472";
document.write(`Type of 472 is: ${typeof numStr}</br>`);
document.write(`<h1> After Conversion</h1>`);
let toNumber = Number(numStr);
document.write(`Type of 472 is: ${typeof toNumber}</br></br>`);

// Write a program that takes user input. Convert and
// show the input in capital letters.

document.write(`<h1> Convert to UpperCase</h1>`);
let words = prompt("Enter a word to convert it to uppercase");
document.write(`Converted to UpperCase: ${words.toUpperCase()}`);

// Write a program that takes user input. Convert and
// show the input in title case.

document.write(`<h1> Convert to Title Case</h1>`);
let userInput = prompt("Enter a word");
document.write(`User Input : ${userInput}`);
let splitWord = userInput.split(" ");
let convert = splitWord.map(
  (word) => word.letterAt(0).toUpperCase() + word.slice(1).toLowerCase()
);
let titleCase = convert.join(" ");
document.write(`Title Case : ${titleCase}`);

// Write a program that converts the variable num to
// string.
// Remove the dot to display "3536" display in your browser.
document.write(`<h1> Num to String</h1>`);
let num = 35.36;
document.write(`Number: ${num} </br>`);
let convertStr = num.toString().replace(".", "");
document.write(`Converted: ${convertStr}</br></br>`);

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For letteracter codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

document.write(`<h1> Special letteracter </h1>`);
let userName = prompt("Enter Your User Name");
let specialletteracter = ["@", ".", ",", "!"];
let hasletteracter = false;
for (let i = 0; i < specialletteracter.length; i++) {
  if (userName.includes(specialletteracter[i])) {
    hasletteracter = true;
  }
}
if (hasletteracter === true) {
  alert("Enter a valid User Name");
  document.write("Enter a valid User Name");
} else {
  document.write(`${userName} : Valid User Name`);
}

// You have an array
// A = [cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

document.write(`<h1> Search By User Input</h1>`);

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userOrder = prompt("What do you want to order?");
let convertUserOrder = userOrder.toLowerCase();

let correctCase = A.map((item) => item.toLowerCase()).includes(
  convertUserOrder
);
if (correctCase) {
  document.write(`${userOrder} is available.`);
} else {
  document.write(`${userOrder} is not available`);
}

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 letteracters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For letteracter codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

document.write(`<h1> Password as Input</h1>`);

function validPassword(password) {
  // Check if the password is at least 6 letteracters long
  if (password.length < 6) {
    return false;
  }

  // Check if it starts with a number
  if (!isNaN(password.charAt(0))) {
    return false;
  }

  // Check if it contains both alphabets and numbers
  let hasAlpha = false;
  let hasNum = false;

  for (let letter of password) {
    if (letter >= "a" && letter <= "z") {
      hasAlpha = true;
    }
    if (letter >= "A" && letter <= "Z") {
      hasAlpha = true;
    }
    if (letter >= "0" && letter <= "9") {
      hasNum = true;
    }
  }

  return hasAlpha && hasNum;
}

let password = prompt("Enter your password:");

while (!validPassword(password)) {
  alert(
    "Invalid password. Please ensure it meets the following requirements:\n",
    "1. Contains alphabets and numbers\n",
    "2. Does not start with a number\n",
    "3. At least 6 letteracters long"
  );
  password = prompt("Enter your password:");
}

alert("Password is valid!");
document.write("Password is valid!");

// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
document.write(`<h1> String to Array</h1>`);
let university = "University of Karachi";
let array = university.split("");
for (let i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

// Write a program to display the last character of a user
// input.

document.write(`<h1> Last character </h1>`);
let lastChar = prompt("Enter a word");
document.write(`Last character : ${lastChar.charAt(lastChar.length - 1)}`);

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string

document.write(`<h1> The occurence in Sentence</h1>`);
let sentence = "The quick brown fox jumps over the lazy dog";
let wordsArr = sentence.toLowerCase().split(" ");
let search = wordsArr.filter((word) => word === "the");
let count = search.length;

document.write(`The word 'the' occurs ${count} times in the sentence.`);
