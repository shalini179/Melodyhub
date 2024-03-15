const section = document.querySelector(".sec");
const button = document.querySelector(".Btn");
const select = document.querySelector(".NewColor-Select");
const circle = document.querySelector(".ClipPath-Circle");

let NewColor;

button.addEventListener("click", (e) => {
  e.preventDefault();
  NewColor = select.value; // Get the selected color from the select box
  section.style.background = NewColor;
  circle.style.background = NewColor;
  circle.classList.add("active");
});

circle.addEventListener("transitionend", () => {
  circle.classList.remove("active");
});


const fontSizeSelect = document.getElementById("font-size");
const changeFontSizeBtn = document.querySelector(".Btn-Font-Size");
const section3 = document.querySelector(".section_3");
const content = document.querySelector(".content");
const header = document.querySelector(".Header");
const fontElements = document.querySelectorAll(".face back h4, .face back p");

changeFontSizeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedFontSize = fontSizeSelect.value;
  updateFontSize(selectedFontSize);
});

function updateFontSize(size) {
  section3.classList.remove("small-font-size", "medium-font-size", "large-font-size");
  section3.classList.add(size);
  content.classList.remove("small-font-size", "medium-font-size", "large-font-size");
  content.classList.add(size);
  header.classList.remove("small-font-size", "medium-font-size", "large-font-size");
  header.classList.add(size);
  fontElements.forEach((element) => {
    element.classList.remove("small-font-size", "medium-font-size", "large-font-size");
    element.classList.add(size);
  });
}
