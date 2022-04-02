    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import axios from 'axios'

    export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (input) => {

        let searchInput = input
        let response = await axios.get(`http://www.omdbapi.com/?&apikey=780960ed&s=${searchInput}&type=movie`).catch((error) => console.log(error))
        return response.data
    })

    export const fetchAsyncShow = createAsyncThunk('movies/fetchAsyncShow', async (input) => {
        let searchInput = input
        let response = await axios.get(`http://www.omdbapi.com/?&apikey=780960ed&s=${searchInput}&type=series`).catch((error) => console.log(error))
        return response.data
    })

    export const fetchAsyncAllDetail = createAsyncThunk('movies/fetchAsyncAllDetail', async (iomdb) => {
        const id = iomdb
        let response = await axios.get(`http://www.omdbapi.com/?&apikey=780960ed&i=${id}&plot=full`).catch((error) => console.log(error))
        return response.data
    })

    const initialState = {
        movies:{},
        shows:{},
        moviesShowAll:{}
    }

    const movieSlice = createSlice({
        name:'movies',
        initialState,
        reducers:{
            removeSelectorAllDetail : (state) =>{
                state.moviesShowAll = {}
            }
        },
        extraReducers:{
            [fetchAsyncMovies.pending] : () =>{
                console.log("initially state is pending");
            },
            [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
                console.log("yes")
                return {...state, movies: payload};
            },
            [fetchAsyncMovies.rejected]: () =>{
            console.log("state is rejected")
             },

            [fetchAsyncShow.fulfilled]:(state,{payload}) =>{
                return {...state, shows: payload};
            },
                [fetchAsyncAllDetail.fulfilled]:(state,{payload}) =>{
            return {...state, moviesShowAll : payload};
            },
    }
    
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getShowMoviesAll = (state) => state.movies.moviesShowAll;
export const {removeSelectorAllDetail} = movieSlice.actions;
export default movieSlice.reducer

