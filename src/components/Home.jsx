
import React,{useEffect,} from 'react';
import MoviesListing from './Movies_Listing';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShow} from '../redux/store/movieSlice'

const Home = () =>{

    const dispatch = useDispatch()
    const moviesText = 'harry'
    const showText = 'friends'
    useEffect(()=>{
        dispatch(fetchAsyncMovies(moviesText))
        dispatch(fetchAsyncShow(showText))
    },[dispatch])
    return (
    <div >
        <MoviesListing/>
    </div>)
}

export default Home;