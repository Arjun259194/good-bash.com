console.log("Connected");

const textArea = document.querySelector('#input-text');
const command = document.querySelector('#command');

window.addEventListener("keyup",()=>{
  command.innerHTML = textArea.value;
  textArea.focus();
})