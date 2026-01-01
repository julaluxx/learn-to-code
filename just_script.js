const loginContainer = document.getElementById("login");
const usernameInput = document.getElementById("username");
const passphraseInput = document.getElementById("passphrase");
const submitBtn = document.getElementById("submit-button");
const output = document.getElementById("output");
const outputText = document.getElementById("output-text");

console.log("Hello World!");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const isCorrect = passphraseInput.value === "lalala";

  output.classList.remove("hidden");

  if (isCorrect) {
    loginContainer.style.display = "none";
    outputText.textContent = `Welcome to my world, ${username}`;
  } else {
    outputText.textContent = `How are you today, ${username}`;
  }
});
