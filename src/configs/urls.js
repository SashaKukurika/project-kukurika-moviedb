const baseURL = 'https://api.themoviedb.org/3';
const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    search: '/search/movie?&query=',
    poster: 'https://image.tmdb.org/t/p/w500',
    getVideo: '/movie'
}

export {
    urls,
    baseURL
}