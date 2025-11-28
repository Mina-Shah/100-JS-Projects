const colorPicker = document.getElementById("colorPicker");
const p = document.getElementsByClassName("code");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");

colorPicker.addEventListener("input", function () {
  document.body.style.background = colorPicker.value;
  colorCode.textContent = colorPicker.value;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(colorCode.textContent);
  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy Code";
  }, 1000);
});