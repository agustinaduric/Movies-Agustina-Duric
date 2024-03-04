export function creatingCard(list){
    const imageUrl = `https://moviestack.onrender.com/static/${list.image}`;
    return `<div class="flex flex-col mb-0.5" id="detectingFav">
    <article class="p-4 mb-4 text-[#BFBFBF] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 ">
        <img src="${imageUrl}" alt="${list.image}" class="mx-auto md:w-48 md:h-48 lg:w-auto lg:ml-0 lg:object-cover object-contain">
        <div class="flex flex-col lg:ml-0 lg:text-lg md:text-md md:self-center">
            <h2 class="font-bold text-left">${list.title}</h2>
            <p class="italic text-justify pb-2">${list.tagline}</p>  
            <p class="text-justify">${list.overview}</p> 
            </div>
            <label class="pointer inline-block relative">
            <input type="checkbox" data-idCheckbox="${list.id}"></input>
            </label>
            <a href="./details.html?id=${list.id}" class="underline text-sm md:text-md lg:text-lg">Details</a>
        </article>
        <hr class="border border-[#400D0D]">
    <div>`;
}
export function printingCards(list,element){
    let template =" "
    for (const movie of list) {
        template += creatingCard(movie);
    }
    element.innerHTML=template;
}
export function filteringMoviesByTitle(moviesarray,movietitle){
    let moviesFilteredByTitle= moviesarray.filter(movie=> movie.title.toUpperCase().startsWith(movietitle.toUpperCase()));
    return moviesFilteredByTitle;
}
export function creatingOptions(genre){
    return `<option value=${genre} id="option">${genre}</option>`;
}
export function filteringMoviesByGenre(moviesarray,moviegenre){
    const filteredMoviesByGender = moviesarray.filter(movie => movie.genres.includes(moviegenre));
    return filteredMoviesByGender;
}
export function creatingDetailCard(list){
    const imageUrl = `https://moviestack.onrender.com/static/${list.image}`;
    return `
    <div class="flex flex-col md:flex-row mt-4">
    <div class="flex flex-col md:flex-row w-full lg:ml-36">
        <div class="mb-4 md:mb-0">
            <img src="${imageUrl}" alt="${list.title}" class="pb-6 mx-auto md:w-48 md:h-48 lg:w-auto lg:object-cover object-contain">
            <table class="border-collapse border border-gray-200 mx-auto mt-8">
                <tr>
                    <th class="border border-gray-200 text-left p-2">Original language</th>
                    <td class="border border-gray-200 text-left p-2">${list.original_language}</td>
                </tr>
                <tr>
                <th class="border border-gray-200 text-left p-2">Release date</th>
                <td class="border border-gray-200 text-left p-2">${list.release_date}</td>
            </tr>
            <tr>
                <th class="border border-gray-200 text-left p-2">Runtime</th>
                <td class="border border-gray-200 text-left p-2">${list.runtime}</td>
            </tr>
            <tr>
                <th class="border border-gray-200 text-left p-2">Status</th>
                <td class="border border-gray-200 text-left p-2">${list.status}</td>
            </tr>
            </table>
        </div>
    </div>
    <div class="flex flex-col w-full md:mt-0 md:ml-8 lg:mr-36">
        <article class="flex flex-col">
            <h2 class="font-bold text-left">${list.title}</h2>
            <p class="italic text-justify pb-2">${list.tagline}</p>  
            <p class="text-justify">${list.overview}</p> 
        </article>
        <div class="md:hidden mt-4">
            <table class="border-collapse border border-gray-200">
                <tr>
                    <th class="border border-gray-200 text-left p-2">Release date</th>
                    <td class="border border-gray-200 text-left p-2">${list.release_date}</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 text-left p-2">Runtime</th>
                    <td class="border border-gray-200 text-left p-2">${list.runtime}</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 text-left p-2">Status</th>
                    <td class="border border-gray-200 text-left p-2">${list.status}</td>
                </tr>
            </table>
        </div>
        <table class="mb-4 border-collapse border border-gray-200 mt-4">
            <tr>
                <th class="border border-gray-200 text-left p-2">Vote average</th>
                <td class="border border-gray-200 text-left p-2">${list.vote_average}</td>
            </tr>
            <tr>
                <th class="border border-gray-200 text-left p-2">Budget</th>
                <td class="border border-gray-200 text-left p-2">${list.budget}</td>
            </tr>
            <tr>
                <th class="border border-gray-200 text-left p-2">Revenue</th>
                <td class="border border-gray-200 text-left p-2">${list.revenue}</td>
            </tr>
        </table>
    </div>
</div>`;
}
export function creatingCardFav(list){
    const imageUrl = `https://moviestack.onrender.com/static/${list.image}`;
    return `<div class="flex flex-col mb-0.5" id="detectingFav">
    <article class="p-4 mb-4 text-[#BFBFBF] flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 ">
        <img src="${imageUrl}" alt="${list.image}" class="mx-auto md:w-48 md:h-48 lg:w-auto lg:ml-0 lg:object-cover object-contain">
        <div class="flex flex-col lg:ml-0 lg:text-lg md:text-md md:self-center">
            <h2 class="font-bold text-left">${list.title}</h2>
            <p class="italic text-justify pb-2">${list.tagline}</p>  
            <p class="text-justify">${list.overview}</p> 
            </div>
            <a href="./details.html?id=${list.id}" class="underline text-sm md:text-md lg:text-lg">Details</a>
        </article>
        <hr class="border border-[#400D0D]">
    <div>`;
}
export function printingCardsFavs(list,element){
    let template =" "
    for (const movie of list) {
        template += creatingCardFav(movie);
    }
    element.innerHTML=template;
}