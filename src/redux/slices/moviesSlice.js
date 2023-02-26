import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    movieById: null,
    searchMovies: [],
    videoById: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.getAll(page);
            return results;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return [data];
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({searchWords}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.search(searchWords);
            return results;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const getVideoById = createAsyncThunk(
    'movieSlice/getVideoById',
    async (id, {rejectWithValue}) => {
        try {
            const {data: {results}} = await moviesService.getVideoById(id);
            return results;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload;

            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false
                state.movieById = action.payload;

            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.loading = false
                state.searchMovies = action.payload
            })
            .addCase(getVideoById.fulfilled, (state, action) => {
                state.loading = false
                state.videoById = action.payload;

            })

});

const {reducer: movieReducer} = moviesSlice;

const movieAction = {
    getAll,
    searchMovie,
    getById,
    getVideoById
}

export {
    movieReducer,
    movieAction
}