let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = "to bottom";
let outputCode = document.getElementById("code");

function setDirection(value, _this) {
  let directions = document.querySelectorAll(".buttons button");
  for (let i of directions) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
  outputCode.value = `background-image: Linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function generateCode() {
  outputCode.value = `background-image: Linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
  document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

// copy text from the textfield
function copyText() {
  outputCode.select();
  document.execCommand("copy");
  alert("code copied!");
}

function forceWritting() {
  let input = document.getElementById("code");
    const answer = prompt("Type yes if you are sure you want to modify the text");
    if(answer === "yes") {
      input.removeAttribute("readonly")
    }
}
