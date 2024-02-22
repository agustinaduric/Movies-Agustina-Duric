const main=document.querySelector("main");
let newDiv=document.createElement('div');
main.appendChild(newDiv);
newDiv.id="container";
newDiv.classList.add("flex")
function creatingCard(list){
    return `<div class="flex flex-col mb-0.5">
    <article class="p-4 mb-4 text-[#F2F2F2] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 ">
        <img src="${list.image}" alt="${list.image}" class="w-32 h-32 mx-auto md:w-48 md:h-48 lg:w-auto lg:ml-0 lg:object-cover object-contain">
        <div class="flex flex-col lg:ml-0 lg:text-lg md:text-md md:self-center">
            <h2 class="font-bold text-left">${list.title}</h2>
            <p class="italic text-justify pb-2">${list.tagline}</p>  
            <p class="text-justify">${list.overview}</p>  
        </div>
        </article>
        <hr class="border border-[#C6C4F2]">
    <div>`;
}
function printingCards(list){
    let template = "";
    for (const movie of list) {
        template += creatingCard(movie);
    }
    newDiv.innerHTML=template;
}
printingCards(movies)