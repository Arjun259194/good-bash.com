console.log("Connected");

const textArea = document.querySelector("#input-text");
const command = document.querySelector("#command");
const terminal = document.querySelector("#terminal");
const time = document.querySelector("#time");
const date = document.querySelector("#date");
const inputSection = document.querySelector(".input-section");

let commands = [];
let commandIterator;

window.onload = () => {
  addToTerminal(starterTemplate);
  textArea.focus();
  time.innerHTML = currentTime();
  date.innerHTML = currentDate();
};

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

    case "git-gt-0":
    case "git-gt-1":
    case "git-gt-2":
    case "git-gt-3":
    case "git-gt-4":
    case "git-gt-5":
      gitGt(command[command.length - 1]);
      break;

    case "social-v-0":
    case "social-v-1":
    case "social-v-2":
      socialVisit(command[command.length - 1]);
      break;

    case "who":
      addToTerminal(who);
      break;

    default:
      addToTerminal(`<p>Error</p>`);
      break;
  }
}

function commandHistory() {
  command.innerHTML = commands[commandIterator];
  textArea.value = commands[commandIterator];
  if (commandIterator == 0) {
    commandIterator = commands.length - 1;
  } else {
    commandIterator--;
  }
}

function currentTime() {
  let date = new Date();
  const timeObj = {
    HH: date.getHours(),
    MM: date.getMinutes(),
  };
  return `${timeObj.HH}:${timeObj.MM}`;
}

function currentDate() {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();

  return cDay + "-" + cMonth + "-" + cYear;
}

window.addEventListener("keyup", (e) => {
  if (e.keyCode == "38") {
    commandHistory();
  } else {
    command.innerHTML = textArea.value;
  }
  time.innerHTML = currentTime();
  date.innerHTML = currentDate();
});

inputSection.addEventListener("click", () => {
  textArea.focus();
});

textArea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    commandIterator = commands.length;
    commands.push(textArea.value.toLowerCase());
    runCommand(textArea.value);
    textArea.value = "";
  }
});
