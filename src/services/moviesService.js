import {axiosService} from "./axiosService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page =1) => axiosService.get(urls.movies, {params: {page}}),
    search: (word) => axiosService.get(`${urls.search}${word}`),
    getById: (id) => axiosService.get(`https://api.themoviedb.org/3/movie/${id}`)
};

export {moviesService};