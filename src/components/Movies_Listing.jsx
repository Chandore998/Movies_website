import React from 'react'
import '../Static/CSS/MoviesListing.css'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../redux/store/movieSlice'
import MoviesCard from './Movies_card';
import Slider from "react-slick";
import Settings from './responsiveSlick';


function Movies_Listing() {
  let movies = useSelector(getAllMovies)
  let shows = useSelector(getAllShows)
  
  let moviesList = '' ;
  let showList = '';
  

  function moviesLists(){

    moviesList = movies.Response === 'True' ? 
    (movies.Search === {} ? console.log('loading...'): movies.Search.map((s,i)=> 
    <MoviesCard key={i} data={s}/>))
    :(<div><h1>loading....</h1></div>)
  }

  function showLists(){
  
    showList = movies.Response === 'True' ? 
        (shows.Search === {} ? console.log('loading...2') : shows.Search.map((s,i)=> 
                  <MoviesCard key={i} data={s}/>))
                        :(<div><h1>loading....</h1></div>)
  }

    moviesLists()
    showLists()

  
  return (
    <div >
      <section>
            <div className='heading'>Movies</div>
                <div className='movie-Container'>
                  <Slider {...Settings}>
                    {moviesList}
                  </Slider>
                </div>
      </section>
      <section>
            <div className='heading'>Show</div>
                  <div className='movie-Container'>
                  <Slider {...Settings}>
                  {showList}
                  </Slider>
                        
                  </div>
      </section>
    </div>
    
  )
}

export default Movies_Listing