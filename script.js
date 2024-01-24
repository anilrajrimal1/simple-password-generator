// Selecting DOM elements
const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateButton = document.querySelector(".generate-button");

// Characters of alphabet (a-z/A-Z), numbers (0-9), and symbols ($%&[]...)
const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

// Function to generate a random password
const generatePassword = () => {
  let newPassword = "";

  // Loop to generate password based on rangeInput value
  for (let i = 0; i < rangeInput.value; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomIndex];
  }

  // Update passwordInput value
  passwordInput.value = newPassword;

  // Change copyIcon's icon to copy
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};

// Event listener for rangeInput to update sliderNumber and generate password
rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

// Event listener for copyIcon to copy passwordInput's value to clipboard
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  
  // Change copyIcon's icon to check mark
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

// Initial password generation on page load
//generatePassword();

// Event listener for generateButton to generate a new password
generateButton.addEventListener("click", generatePassword);