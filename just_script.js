console.log("Hello World!");

document.getElementById("myParagraph").innerHTML = "And I like to learn.";

const submit_btn = document.getElementById("submit-button");

submit_btn.addEventListener("click", () => {
  window.alert("Submitted!");
});
