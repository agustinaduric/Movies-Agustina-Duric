import{printingCards,filteringMoviesByTitle,creatingOptions,filteringMoviesByGenre} from "./module/functions.js"
let movies=[];
let main=null;
let newDiv=null;
let input=null;
let filter=null;
let genres=null;
let sGenres=null;
let moviesGenresArray=null;
let divFav=null;
const url="https://moviestack.onrender.com/api/movies";
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}
fetch(url, init)
    .then(response => response.json())
    .then(dataResponse => {
        movies = dataResponse.movies;
        main = document.querySelector("main");
        newDiv = document.createElement('div');
        main.appendChild(newDiv);
        newDiv.id = "container";
        newDiv.classList.add("flex");
        printingCards(movies, newDiv);
        input=document.getElementById(`input`);
        filter=document.getElementById(`filter`);
        genres=movies.map(movie => movie.genres).flat();
        sGenres=new Set(genres);
        moviesGenresArray=Array.from(sGenres);
        moviesGenresArray.sort();
        let fReduce=(template, genre)=> template + creatingOptions(genre);
        filter.innerHTML+=moviesGenresArray.reduce(fReduce,"");
        input.addEventListener(`input`, ()=>{
            let titleFilter= filteringMoviesByTitle(movies,input.value); 
            if(filter.value=="first"){
                printingCards(titleFilter,newDiv);
            }
            else{
                const genderFilter=filteringMoviesByGenre(titleFilter,filter.value);
                printingCards(genderFilter,newDiv);
            }
        })
        filter.addEventListener('change', ()=> {
            let titleFilter= filteringMoviesByTitle(movies,input.value);
            if(filter.value=="first"){
                printingCards(titleFilter,newDiv);
            }
            else{
                const genderFilter=filteringMoviesByGenre(titleFilter,filter.value);
                printingCards(genderFilter,newDiv);
            }
        });
        divFav=document.getElementById("detectingFav");
        movies.forEach(movie => {
            movie.checked = false;
        });
        let toFavs=JSON.parse(localStorage.getItem('moviesFavs'))||[];
        let miStorage=window.localStorage;
        toFavs.forEach(favMovie => {
            const movieIndex = movies.findIndex(movie => movie.id === favMovie.id);
            if (movieIndex !== -1) {
                movies[movieIndex].checked = true;
                const checkbox = document.querySelector(`[data-idcheckbox="${favMovie.id}"]`);
                checkbox.checked = true;
            }
        });
        divFav.addEventListener(`input`, (a)=>{
            let updateFavs = movies.find(movie => movie.id == a.target.dataset.idcheckbox);
            if (a.target.checked) {
                toFavs.push(updateFavs);
                updateFavs.checked = true;
            } else {
                toFavs = toFavs.filter(movie => movie.id != a.target.dataset.idcheckbox);
                if(updateFavs) {
                    updateFavs.checked = false; 
                }
            }
            localStorage.setItem('moviesFavs', JSON.stringify(toFavs));
        })
    })
    .catch(err => console.log(err));