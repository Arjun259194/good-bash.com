console.log("Connected");

const textArea = document.querySelector('#input-text');
const command = document.querySelector('#command');
const terminal = document.querySelector('#terminal');

window.addEventListener("keyup",()=>{
  command.innerHTML = textArea.value;
  textArea.focus();
})

//!Error
textArea.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    runCommand(textArea.value);  
    textArea.value = "";
  }
})

//!Error
function runCommand(command) {
  console.log("🚀 ~ file: app.js ~ line 22 ~ runCommand ~ textArea.value", textArea.value)
  switch (command.toLowerCase()) {
    case "help":
      terminal.innerHTML += `<p>You will get help</p>`
      break;
  
    default:
      terminal.innerHTML = `<p>error try again</p>`
      break;
  }
}