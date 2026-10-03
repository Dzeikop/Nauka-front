const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputText = document.querySelector("#text");
const errorMessage = document.querySelector("#error");
const formList = document.querySelector("#form-list");

function saveForm() {
    localStorage.setItem("messages", JSON.stringify(messages));
}

let messages;
const saved = localStorage.getItem("messages");
if(saved !== null) {
    messages = JSON.parse(saved);
}
else {
    messages = [];
}

function showMessages() {
    formList.textContent = "";
    for(let i=0; i<messages.length; i=i+1) {
        const message = document.createElement("li");
        message.textContent = messages[i];

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Usuń komentarz";


        btnRemove.addEventListener("click", function(){
            messages.splice(i, 1);
            showMessages();
            saveForm();
        });

        formList.appendChild(message);
        message.appendChild(btnRemove);
    }
}
showMessages();

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nameVal = inputName.value;
    const textVal = inputText.value;
    if(nameVal !== "" && textVal !== "") {
        errorMessage.textContent = "";
        messages.push(nameVal + ": " + textVal);
        showMessages();
        saveForm();
        inputName.value = "";
        inputText.value = "";
    }
    else {
        errorMessage.textContent = "Podaj imię i wiadomość!";
    }
});


