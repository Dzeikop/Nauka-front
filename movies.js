const form = document.querySelector("#form");
const title = document.querySelector("#title");
const year = document.querySelector("#year");
const formList = document.querySelector("#form-list");
const errorText = document.querySelector("#error");
const search = document.querySelector("#search");
const filterAll = document.querySelector("#filter-all");
const filterWatched = document.querySelector("#filter-watched");
const sortTitle = document.querySelector("#sort-title");
const sortYear = document.querySelector("#sort-year");
const stats = document.querySelector("#stats");
const btnCancel = document.querySelector("#btn-cancel");
const btnAdd = document.querySelector("#btn-add");


function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

let movies;
let editingIndex = null;
let filter = "all";
let sort = "none";

const saved = localStorage.getItem("movies");

if(saved !== null) {
    movies = JSON.parse(saved);
}
else {
    movies = [];
}


function showMovies() {
    formList.textContent = "";
    let visibleCount = 0;
    const query = search.value.toLowerCase();

    if(sort === "title") {
        movies.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
        saveMovies();
    }

    if(sort === "year") {
        movies.sort(function(a, b) {
            return a.year.localeCompare(b.year);
        });
        saveMovies();
    }

    for(let i=0; i<movies.length; i++) {
        
        if(!movies[i].title.toLowerCase().startsWith(query)) {
            continue;
        }

        if(filter==="watched" && !movies[i].watched) {
            continue;
        }

        visibleCount = visibleCount + 1;

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
            btnCancel.style.display = "inline-block";
            btnAdd.textContent = "Zapisz";
        });

   
    }

    let watchedCount = 0;
    for(let j=0; j<movies.length; j++) {
        if(movies[j].watched) {
            watchedCount = watchedCount + 1;
        }
    }

    stats.textContent = `filmy: ${movies.length} (Obejrzne: ${watchedCount})`;

    if(visibleCount === 0) {
        formList.textContent = "Brak filmów";
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
    btnCancel.style.display = "none";
    btnAdd.textContent = "Dodaj";

});

search.addEventListener("input", function() {
    showMovies();
});

filterAll.addEventListener("click", function() {
    filter = "all";
    showMovies();
});

filterWatched.addEventListener("click", function() {
    filter = "watched";
    showMovies();
});

sortTitle.addEventListener("click", function() {
    sort = "title";
    showMovies();
});

sortYear.addEventListener("click", function() {
    sort = "year";
    showMovies();
});

btnCancel.addEventListener("click", function() {
    title.value = "";
    year.value = "";
    editingIndex = null;
    errorText.textContent = "";
    btnCancel.style.display = "none";
    btnAdd.textContent = "Dodaj";
});

showMovies();