const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const form = document.getElementById("film-form");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

eventListeners(); // all event transactions for elements

function eventListeners(){
    form.addEventListener("submit", addFilm);
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",claerAllFilms);
    
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();

        films.forEach(function(film){
            UI.addFilmToUI(film);
        });
    });
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;  

    if(title === "" || director === "" || url === ""){
        // error (empty string)
        UI.displayMessage("This field cannot be left blank","danger");
        //console.log("debug")
    }else{
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessage("Success!","success");
    }

    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
    
}

function deleteFilm(e){
    //console.log(e.target);
    if(e.target.id === "delete-film"){
        if(confirm("Are you sure you want to delete the movie?")){
            UI.deleteFilmsToUI(e.target);
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        }
    }
}

function claerAllFilms(){
    if(confirm("Are you sure you want to delete all movies?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsToStorage();
    }
}