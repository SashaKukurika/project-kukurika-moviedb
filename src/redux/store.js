import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlice";
import {genresReducer} from "./slices/genresSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genresReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}