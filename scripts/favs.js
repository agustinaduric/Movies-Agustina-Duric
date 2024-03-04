import{printingCardsFavs} from "./module/functions.js"
document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector("main");
    let favDiv = document.createElement('div');
    main.appendChild(favDiv);
    favDiv.id = "favContainer";
    favDiv.classList.add("flex");
    favDiv.classList.add("italic");
    favDiv.classList.add("justify-center")
    favDiv.classList.add("py-6")
        let favorites = JSON.parse(localStorage.getItem('moviesFavs')) || [ ];
        if (favContainer && favorites.length > 0) {
            printingCardsFavs(favorites, favContainer);
        }
        else{
            favDiv.innerHTML="No favorites film yet..."
        }
    });