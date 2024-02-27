//sprint 1
import{printingCards,filteringMoviesByTitle,creatingOptions,filteringMoviesByGenre} from "./module/functions.js"
const main=document.querySelector("main");
let newDiv=document.createElement('div');
main.appendChild(newDiv);
newDiv.id="container";
newDiv.classList.add("flex");
printingCards(movies,newDiv);
//sprint 2
//input:
const input=document.getElementById(`input`);
//filter:
const filter=document.getElementById(`filter`);
const genres=movies.map(movie => movie.genres).flat();
const sGenres=new Set(genres);
const moviesGenresArray= Array.from(sGenres);
moviesGenresArray.sort();
const fReduce=(template, genre)=> template + creatingOptions(genre);
filter.innerHTML+=moviesGenresArray.reduce(fReduce,"");
//events:
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