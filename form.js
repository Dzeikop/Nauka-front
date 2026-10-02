const listElement = document.querySelector("#message-list");
const formElement = document.querySelector("#message-form");
const inputElement = document.querySelector("#message-input");
const nameInputElement = document.querySelector("#name-input");
const errorElement = document.querySelector("#form-error");

function saveMessages() {
  localStorage.setItem("messages", JSON.stringify(messages));
}

const saved = localStorage.getItem("messages");

let messages;
if(saved !== null) {
  messages = JSON.parse(saved);
}
else {
  messages = [];
}


function showMessages() {
  listElement.textContent = "";
  for (let i = 0; i < messages.length; i = i + 1) {
    const item = document.createElement("li");
    item.textContent = messages[i];
    listElement.appendChild(item);
  }
}

showMessages();

formElement.addEventListener("submit", function(event){
  event.preventDefault();

  const text = inputElement.value;
  const name = nameInputElement.value;
  if(name !== "" && text !== "") {
    errorElement.textContent = "";
    messages.push(name + ": " + text);
    showMessages();
    saveMessages();
    inputElement.value = "";
    nameInputElement.value = "";
  }
  else {
    errorElement.textContent = "Uzupełnij imię i wiadomość";
  }
});


