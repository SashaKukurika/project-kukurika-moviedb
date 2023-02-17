import {axiosService} from "./axiosService";
import {urls} from "../configs";

const moviesService = {
    getAll: () => axiosService.get(urls.movies),
    search: (word) => axiosService.get(`${urls.search}${word}`),
};

export {moviesService};