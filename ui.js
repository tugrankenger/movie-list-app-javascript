class UI{
    static displayMessage(message,type){
        const cardBody = document.querySelector(".card-body");

        const div = document.createElement("div");
        div.className= `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2000)
    }

    static addFilmToUI(newFilm){
        console.log(newFilm);

        const filmList = document.getElementById("films");

        filmList.innerHTML += `
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" width="100" height="100"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        `

        if(filmList.childElementCount>0 && filmList.childElementCount<2){
            const removeTab = document.querySelector(".removeAfter");
            const newRemoveTab = document.createElement("th");
            newRemoveTab.className= "text-warning";
            newRemoveTab.textContent="Remove";
            removeTab.appendChild(newRemoveTab);
        }
    }

    static clearInputs(item1,item2,item3){
        item1.value="";
        item2.value="";
        item3.value="";
    }

    static deleteFilmsToUI(e){
        e.parentElement.parentElement.remove();
        this.displayMessage("The movie was deleted","danger");
        // if(this.filmList == null){
        //     setTimeout(function(){
        //         console.log(this.removeTab.lastChild);
        //     },2000)
        // }
        //window.location.reload();
    }

    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");

        //filmList.remove();
        //filmList.innerHTML ="";

        while(filmList.firstChild != null){
            filmList.firstChild.remove();
        }

        window.location.reload();
    }
}