import axios from "axios";

import {baseURL} from "../configs";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGExNTNjNTdhMDlkMTRhZTVlZjZhNTRhMDIyMGEzYiIsInN1YiI6IjYzZWY2NGNiMGYwZGE1MDBhYWMwODJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5hs4Zjtr5hBszlHTl6ebK2gN2fzU8T9X9IdjvpM_1w';

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

export {axiosService};