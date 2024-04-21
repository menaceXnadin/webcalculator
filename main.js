let my_str = "";
let inp_area = document.getElementById("inp-area");
let btn = document.querySelectorAll("button");

// Add event listeners to all buttons
Array.from(btn).forEach((button) => {
  button.addEventListener("click", (event) => {
    handleButtonPress(event.target.textContent);
  });
});

// Function to handle button presses
// Function to handle button presses
function handleButtonPress(buttonValue) {
  switch (buttonValue) {
    case "=":
      my_str = eval(my_str);
      break;
    case "C":
      my_str = "";
      break;
    case "DEL":
    case "Backspace": // Treat "DEL" and "Backspace" the same
      my_str = my_str.slice(0, my_str.length - 1);
      break;
    case "Enter":
      my_str = eval(my_str);
      break;
    default:
      my_str += buttonValue;
      break;
  }

  // Update input area value after handling button press
  inp_area.value = my_str;
}

// Add event listener to handle keyboard presses
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (
    !isNaN(key) ||
    key === "%" ||
    key === "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "Enter" ||
    key === "Escape" ||
    key === "Backspace"
  ) {
    handleButtonPress(key);
  }
});
