import { creatingDetailCard } from "./module/functions.js"
const div=document.getElementById("divDetails")
const urlParams= new URLSearchParams(location.search)
const id= urlParams.get(`id`)
const movieFound=movies.find(movie=> movie.id==id)
div.innerHTML=creatingDetailCard(movieFound);