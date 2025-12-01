const passwordOutput = document.querySelector(".password-output");
const generateBtn = document.querySelector(".generate-btn");
const lengthSlider = document.querySelector(".length-slider");
const lengthValue = document.querySelector(".length-value");
const uppercaseToggle = document.querySelector(".uppercase-option");
const lowercaseToggle = document.querySelector(".lowercase-option");
const numbersToggle = document.querySelector(".numbers-option");
const symbolsToggle = document.querySelector(".symbols-option");
const message = document.querySelector(".message")

let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+~";

lengthSlider.addEventListener("change", function () {
  lengthValue.innerHTML = lengthSlider.value;
});

function generatePassword() {
  let allowedChars = "";

  if (uppercaseToggle.checked) {    
    allowedChars += uppercaseChars;
  }
  if (lowercaseToggle.checked) {
    allowedChars += lowercaseChars;
  }
  if (numbersToggle.checked) {
    allowedChars += numberChars;
  }
  if (symbolsToggle.checked) {
    allowedChars += symbolChars;
  }
  if (!allowedChars) {
    message.textContent = "Please enable at least one setting";
    return;
  }else{
        message.textContent = ''
    }
   
  let password = ''

  for (let i = 0; i < lengthSlider.value; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randomIndex]  
  }
  
  passwordOutput.value = password
  console.log(password);
}

generateBtn.addEventListener('click', function() {
    generatePassword()
})
