import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    selectedMovie: null,
    searchMovies: [],

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

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({searchWords}, {rejectWithValue}) => {
        try {
            console.log(searchWords);
            const {data: {results}} = await moviesService.search(searchWords);
            console.log(results)
            return results;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        },
    },
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
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.loading = false
                state.searchMovies = action.payload
            })

});

const {reducer: movieReducer, actions: {setSelectedMovie}} = moviesSlice;

const movieAction = {
    setSelectedMovie,
    getAll,
    searchMovie
}

export {
    movieReducer,
    movieAction
}