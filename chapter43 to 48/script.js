// Show an alert box on click on a link.

// document.write(`<h1> Alert Box </h1>`);
function showAlert() {
  alert("You Clicked the Link");
}

// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
let mobImg = document.querySelectorAll(".mob-img img");

mobImg.forEach((img) => {
  img.addEventListener("click", () => {
    alert("Thank for purchansing mobile phone");
  });
});

// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

let studentRecord = document.querySelectorAll(".student-record");
let deleteBtn = document.querySelectorAll(".deleBtn");
deleteBtn.forEach((button) =>
  button.addEventListener("click", () => {
    button.parentNode.parentNode.remove();
  })
);

// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
let changeImage = document.querySelector(".changeImage img");
changeImage.addEventListener("mouseover", () => {
  changeImage.src = "/images/mob3.jpg";
});
changeImage.addEventListener("mouseout", () => {
  changeImage.src = "/images/mob1.webp";
});
// .Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let decreaseBtn = document.querySelectorAll(".counter button")[0];
let counterNum = document.querySelectorAll(".counter button")[1];
let increaseBtn = document.querySelectorAll(".counter button")[2];
let count = 0;
decreaseBtn.addEventListener("click", () => {
  count--;
  counterNum.innerText = count;
});
increaseBtn.addEventListener("click", () => {
  count++;
  counterNum.innerText = count;
});
