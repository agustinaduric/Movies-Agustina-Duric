import { creatingDetailCard } from "./module/functions.js"
let movies=[];
let div=null;
let urlParams=null;
let id=null;
let movieFound=null;
const url="https://moviestack.onrender.com/api/movies";
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}
fetch( url, init )
    .then( response => response.json() )
    .then( dataResponse => {movies=dataResponse.movies;
        div=document.getElementById("divDetails");
        urlParams=new URLSearchParams(location.search);
        id=urlParams.get(`id`);
        movieFound=movies.find(movie=> movie.id==id);
        div.innerHTML=creatingDetailCard(movieFound);
        printingCards( movieFound, newDiv)
    } )
    .catch( err => console.log(err) )