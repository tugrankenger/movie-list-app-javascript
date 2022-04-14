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
    }

    static clearInputs(item1,item2,item3){
        item1.value="";
        item2.value="";
        item3.value="";
    }
}