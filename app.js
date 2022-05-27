console.log("Connected");

const textArea = document.querySelector("#input-text");
const command = document.querySelector("#command");
const terminal = document.querySelector("#terminal");

function addToTerminal(content) {
  terminal.innerHTML += content;
}

function runCommand(command) {
  switch (command.toLowerCase()) {
    case "help":
      addToTerminal(help);
      break;

    case "clear":
      clear();
      break;

    case "clear -a":
      clearA();
      break;

    case "social":
      addToTerminal(social);
      break;

    case "git":
      addToTerminal(git);
      break;

    case "who":
      addToTerminal(who);
      break;

    default:
      addToTerminal(`<p>Error</p>`);
      break;
  }
}

window.onload = () => {
  addToTerminal(starterTemplate);
};

window.addEventListener("keyup", () => {
  command.innerHTML = textArea.value;
  textArea.focus();
});

textArea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    runCommand(textArea.value);
    textArea.value = "";
  }
});
