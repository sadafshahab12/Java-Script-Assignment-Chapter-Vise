document.write(`<h2>ARRAYS</h2>`);

// Question# 1:
// 1.  Declare an empty array using JS literal notation to store
// student names in future.
// Question# 2:
// 2. Declare an empty array using JS object notation to store
// student names in future.

var std_names = [];

// Question# 3:
// 3. Declare and initialize a strings array.
var friend_name = ["Ummulqura", "Ramla", "Maheen", "Sakina", "Usbah"];

// Question# 4:
// 4.  Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question# 5:
// 5.  Declare and initialize a boolean array.
var conditional = [true, false, true, true, false, false];

// Question# 6:
// 6. Declare and initialize a mixed array.
var mixed_arr = ["Aleena", 5, false, 6, 10, true, "Aleeza"];

// Question# 7:
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// document.write(`<h3>Qualifications</h3>`);
// var edu_qualifi = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write(`1) ${edu_qualifi[0]} </br>`);
// document.write(`2) ${edu_qualifi[1]} </br>`);
// document.write(`3) ${edu_qualifi[2]} </br>`);
// document.write(`4) ${edu_qualifi[3]} </br>`);
// document.write(`5) ${edu_qualifi[4]} </br>`);
// document.write(`6) ${edu_qualifi[5]} </br>`);
// document.write(`7) ${edu_qualifi[6]} </br>`);
// document.write(`8) ${edu_qualifi[7]} </br> </br>`);

// Question# 8:
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stud_name = ["Izma", "Naddiya", "Ayesha"];
// var stud_score = [400, 490, 400];
// var total_marks = 500;
// let stud1_per = (stud_score[0] / total_marks) * 100;
// let stud2_per = (stud_score[1] / total_marks) * 100;
// let stud3_per = (stud_score[2] / total_marks) * 100;

// document.write(
//   `Score of ${stud_name[0]} is ${stud_score[0]}. Percentage: ${stud1_per}% </br>`
// );
// document.write(
//   `Score of ${stud_name[1]} is ${stud_score[1]}. Percentage: ${stud2_per}% </br> `
// );
// document.write(
//   `Score of ${stud_name[2]} is ${stud_score[2]}. Percentage: ${stud3_per}% </br> </br> `
// );

// Question# 9:
// Initialize an array with color names. Display the array
// elements in your browser.

// var color = ["red", "blue", "green", "black", "yellow"];
// document.write(`${color} </br>`);
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// var user_color = prompt("Enter a color to add in beginning of the array");
// color.unshift(user_color);
// // Display the updated array in your browser.
// document.write(`${color} </br>`);
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.

// var user_color1 = prompt("Enter a color to add in End of the array");
// color.push(user_color1);
// document.write(`${color} </br>`);
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// color.unshift("pink", "parrot");
// document.write(`${color} </br>`);

// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// color.shift();
// document.write(`${color} </br>`);

// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// color.pop();
// document.write(`${color} </br>`);

// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// var user_index = prompt("At which index you want to add color?");
// var user_color2 = prompt("Enter a color to add the color to desired index!");
// color.splice(user_index, 0, user_color2);
// document.write(`${color} </br>`);

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index.Display the updated array in your
// // browser.
// var user_index1 = prompt("At which index you want to delete color");
// var delete_clr = prompt("how many colors you want to delete?");
// color.splice(user_index1, delete_clr);
// document.write(`${color} </br>  </br>`);

// Question# 10:
// 'Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method. '
var std_scores = [260, 450, 100, 200, 250, 240, 350, 105, 112];
document.write(`Score of Students: ${std_scores}  </br>`);
std_scores.sort();
document.write(`Order Score of Students: ${std_scores} </br> </br>`);

// Question# 11:
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city_name = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Multan",
  "Quetta",
  "Peshawar",
  "Rawalpindi",
];
document.write(`Cities List:</br> ${city_name}  </br>`);
var selected_cities = ["Karachi", "Islamabad", "Quetta"];
document.write(`selected Cities List: </br> ${selected_cities} </br> </br>`);

// Question# 12:
// Write a program to create a single string from the
// below mentioned array:
var arr = ["This", "is", " my", "cat"];
// (Use array’s join method)
var sentence = arr.join(" ");
document.write(`${sentence} </br></br>`);

// Question# 13:

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var elec_appliances = ["Fridge", "Fan", "Room Cooler", "Ac", "Iron", "Grinder"];
document.write(`Out: </br> ${elec_appliances[0]}</br>`);
document.write(`Out: </br> ${elec_appliances[1]}</br>`);
document.write(`Out: </br> ${elec_appliances[2]}</br>`);
document.write(`Out: </br> ${elec_appliances[3]}</br>`);
document.write(`Out: </br> ${elec_appliances[4]}</br>`);
document.write(`Out: </br> ${elec_appliances[5]}</br></br>`);

// Question# 14:
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In
// First Out)
var fabric = [
  "Lawn",
  "Silk",
  "Cotton",
  "Tissue",
  "Pluster Cotton",
  "Georgette",
];
document.write(`Out: </br> ${fabric[5]}</br>`);
document.write(`Out: </br> ${fabric[4]}</br>`);
document.write(`Out: </br> ${fabric[3]}</br>`);
document.write(`Out: </br> ${fabric[2]}</br>`);
document.write(`Out: </br> ${fabric[1]}</br>`);
document.write(`Out: </br> ${fabric[0]}</br></br>`);

// Question# 15:
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var ph_manufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(
  `<form action="">
      <select name="phone-manufacturer">
        <option value="${ph_manufac[0]}">${ph_manufac[0]}</option>
        <option value="${ph_manufac[1]}">${ph_manufac[1]}</option>
        <option value="${ph_manufac[2]}">${ph_manufac[2]}</option>
        <option value="${ph_manufac[3]}">${ph_manufac[3]}</option>
        <option value="${ph_manufac[4]}">${ph_manufac[4]}</option>
        <option value="${ph_manufac[5]}">${ph_manufac[5]}</option>
      </select>
    </form>`
  );
