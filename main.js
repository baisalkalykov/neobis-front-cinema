
const API_KEY = "6167421d-7e3d-4e06-83e4-c7cd0b113afa";
const apiUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";
const apiSearchUrl= "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
getMovie(apiUrl);

async function getMovie(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData); 
}

function showMovies(data) {
    const movieSel = document.querySelector(".movies");
    data.items.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add("movie-card");
        movieEl.innerHTML = `
            <div class="movie-card-inner">
               <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movie-card__img">
               <div class="movie-card-darkened"></div>
            </div>
            <div class="movie__info">
               <p class="movie__title">${movie.nameRu}</p>
               <p class="movie__category">${movie.genres.map(genre => `${genre.genre}`).join(', ')}</p>
               <div class="movie__average movie__average__green">9</div>
            </div>
        `;
        movieSel.appendChild(movieEl);
    });
}

const form = document.querySelector(".header__form")
const search =document.querySelector(".form__input")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const apiSearch = `${apiSearchUrl}${search.value}`
    if(search.value){
        getMovie(apiSearch)
    }
})