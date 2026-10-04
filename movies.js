const form = document.querySelector("#form");
const title = document.querySelector("#title");
const year = document.querySelector("#year");
const formList = document.querySelector("#form-list");
const errorText = document.querySelector("#error");

function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

let movies;
let editingIndex = null;

const saved = localStorage.getItem("movies");

if(saved !== null) {
    movies = JSON.parse(saved);
}
else {
    movies = [];
}


function showMovies() {
    formList.textContent = "";
    for(let i=0; i<movies.length; i++) {
        const formListElement = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = `${movies[i].title} - ${movies[i].year}`;

        formListElement.appendChild(text);

        if (movies[i].watched) {
            text.classList.add("watched");
        }
        formList.appendChild(formListElement);

        const btnWatched = document.createElement("button");
        btnWatched.textContent = "Obejrzane";
        formListElement.appendChild(btnWatched);

        btnWatched.addEventListener("click", function() {
            movies[i].watched = !movies[i].watched;
            saveMovies();
            showMovies();
        });

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Usuń";
        formListElement.appendChild(btnRemove);

        btnRemove.addEventListener("click", function() {
            movies.splice(i, 1);
            saveMovies();
            showMovies();
        });

        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Edytuj";
        formListElement.appendChild(btnEdit);
        btnEdit.addEventListener("click", function() {
            title.value = movies[i].title;
            year.value = movies[i].year;
            editingIndex = i;
        });



   
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    
    if(title.value === "" || year.value === "") {
          errorText.textContent = "Pola nie mogą być puste";
          return;
    }

    if (!/^\d{4}$/.test(year.value)) {
        errorText.textContent = "Rok musi mieć 4 cyfry";
        return;
     }
     

   


    if(editingIndex !== null) {
        movies[editingIndex].title = title.value;
        movies[editingIndex].year = year.value;
        editingIndex = null;
    }
    else {
        movies.push({ title: title.value, year: year.value, watched: false});
    }

    saveMovies();
    showMovies();
    errorText.textContent = "";
    title.value = "";
    year.value = "";

});

showMovies();