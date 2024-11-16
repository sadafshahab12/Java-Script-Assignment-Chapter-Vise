// Create a signup form and display form data in your web
// page on submission.

let form = document.getElementById("signup-form");
let signupInfo = document.querySelector(".signup-info");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let emailAddress = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check if any required fields are missing
  if (!firstName || !lastName || !emailAddress || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Displaying the form data
  signupInfo.style.display = "inline-block"
  signupInfo.innerHTML = `
  <p>First Name: ${firstName}</p>
  <p>Last Name: ${lastName}</p>
  <p>Email Address: ${emailAddress}</p>
  <p>Password: ${password}</p> `;
});

// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

let readBtn = document.querySelector(".readmore-btn");
let items = document.querySelector(".items p");

readBtn.addEventListener("click", () => {
  let halfText = `A product detail page (PDP) is a web page....`;
  let fullText = `A product detail page (PDP) is a web page on an eCommerce site that presents the description of a specific product in view. The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase.`;
  if (items.innerText === halfText && readBtn.innerText === "Read More") {
    items.innerText = fullText;
    readBtn.innerText = `Read Less`;
  } else {
    items.innerText = halfText;
    readBtn.innerText = `Read More`;
  }
});

// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
let currentRowIndex = null; // To track the row being edited

// Adding a student
function addStudent(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email-address").value;
  const address = document.getElementById("res-address").value;

  const table = document
    .getElementById("student-table")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td class = "student-btn">
      <button class="edit-btn" onclick="editStudent(this)">Edit</button>
      <button class="del-btn" onclick="deleteStudent(this)">Delete</button>
    </td>
  `;
}

// Delete student function
function deleteStudent(button) {
  // Find the row containing the button and remove it
  const row = button.closest("tr");
  row.remove();
}

// Edit student function
function editStudent(button) {
  const row = button.closest("tr");
  const firstName = row.cells[0].innerText;
  const lastName = row.cells[1].innerText;
  const email = row.cells[2].innerText;
  const address = row.cells[3].innerText;

  // Populate the hidden form with existing values
  document.getElementById("editFirstName").value = firstName;
  document.getElementById("editLastName").value = lastName;
  document.getElementById("editEmail").value = email;
  document.getElementById("editAddress").value = address;

  // Show the hidden edit form
  document.getElementById("editForm").style.display = "block";

  // Save the row index to update the correct row later
  currentRowIndex = row.rowIndex;
}

// Update the student details
function updateStudent(event) {
  event.preventDefault();

  const firstName = document.getElementById("editFirstName").value;
  const lastName = document.getElementById("editLastName").value;
  const email = document.getElementById("editEmail").value;
  const address = document.getElementById("editAddress").value;

  const table = document
    .getElementById("student-table")
    .getElementsByTagName("tbody")[0];
  const row = table.rows[currentRowIndex - 1]; // Row index is 1-based, so subtract 1
  row.cells[0].innerText = firstName;
  row.cells[1].innerText = lastName;
  row.cells[2].innerText = email;
  row.cells[3].innerText = address;

  // Close the edit form
  closeEditForm();
}

// Close the edit form
function closeEditForm() {
  document.getElementById("editForm").style.display = "none";
}

// Event listener for adding students
document.getElementById("student-form").addEventListener("submit", addStudent);
