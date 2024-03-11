document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelector("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
});
