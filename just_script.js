const myParagraph = document.getElementById("myParagraph");
const usernameInput = document.getElementById("username");
const passphraseInput = document.getElementById("passphrase");
const submitBtn = document.getElementById("submit-button");
const successContainer = document.getElementById("success");
const errorContainer = document.getElementById("error");
const successMsg = document.getElementById("success-msg");
const errorMsg = document.getElementById("error-msg");

console.log("Hello World!");

submitBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const isCorrect = passphraseInput.value === "lalalalalalala";

  successContainer.style.display = isCorrect ? "block" : "none";
  errorContainer.style.display = isCorrect ? "none" : "block";

  if (isCorrect) {
    successMsg.textContent = `Welcome to my world, ${username}`;
  } else {
    errorMsg.textContent = `How are you today, ${username}`;
  }
});
