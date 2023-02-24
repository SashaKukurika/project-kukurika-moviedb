import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    movieById: null,
    searchMovies: [],
    videoById: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data:{results}} = await moviesService.getAll(page);
            console.log(results);
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
            console.log(results)
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
            const {data:{results}} = await moviesService.getVideoById(id);
            console.log(results);
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
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
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