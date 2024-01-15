const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const apiUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const apiSearchUrl=  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
getMovie2(apiUrl);

async function getMovie2(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    console.log(respData)
    showMovies2(respData);
}
showMovies2(apiUrl)
function showMovies2(data) {
    const moviesEl = document.querySelector(".movies");
    moviesEl.innerHTML = ""; // Очищаем предыдущие фильмы

    data.films.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add("movie-card");
        movieEl.innerHTML = `
        <div class="movie-card-inner">
        <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movie-card__img">
        <div class="movie-card-darkened"></div>
    </div>
    <div class="movie__info">
        <p class="movie__title">${movie.nameRu}</p>
        <p class="movie__category">${movie.genres.map(genre => genre.genre).join(', ')}</p>
        <div class="movie__average movie__average__green">9</div>
    </div>
        `;
        moviesEl.appendChild(movieEl);
        
    });
    if(data){}
}

const form = document.querySelector(".header__form")
const search =document.querySelector(".form__input")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const apiSearch = `${apiSearchUrl}${search.value}`
    if(search.value){
        getMovie2(apiSearch)
        search.value = ""
    }
})