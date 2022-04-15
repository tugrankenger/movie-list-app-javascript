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
    //clear.addEventListener("clik",claerAllFilms);
    
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;  

    if(title === "" || director === "" || url === ""){
        // error (empty string)
        UI.displayMessage("This field cannot be left blank","danger");
        console.log("debug")
    }else{
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        UI.displayMessage("Success!","success");

        UI.clearInputs(titleElement,directorElement,urlElement);
    }

    e.preventDefault();
    
}

function deleteFilm(e){
    //console.log(e.target);
    if(e.target.id === "delete-film"){
        if(confirm("Are you sure you want to delete the movie?")){
            UI.deleteFilmsToUI(e.target);
        }
    }
}