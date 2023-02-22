import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState = {
    genresList: [],
    errors: null,
    loading: null,
    genreMovies: []
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data:{genres}} = await genresService.getAll();
            return genres;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const getById = createAsyncThunk(
    'genresSlice/getById',
    async ({id,page}, {rejectWithValue}) => {
        try {
            console.log(id, page)
            const {data:{results}} = await genresService.getById(id,page);
            console.log(results);
            return results;
        } catch (e) {
            return rejectWithValue(e.response.data.errors);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.genresList = action.payload;

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
                state.genreMovies = action.payload;

            })

});

const {reducer: genresReducer} = genresSlice;

const genresAction = {
    getAll,
    getById
}

export {
    genresAction,
    genresReducer
}