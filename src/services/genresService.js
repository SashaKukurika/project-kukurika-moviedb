import {axiosService} from "./axiosService";
import {urls} from "../configs";

const genresService = {
    getAll: () => axiosService.get(urls.genres),
    getById: (id, page = 1) => axiosService.get(`${urls.movies}?with_genres=${id}`, {params: {page}})
};

export {genresService};