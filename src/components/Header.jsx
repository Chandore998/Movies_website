import React, { useState} from 'react'
import '../Static/CSS/Header.css'
import {Link} from 'react-router-dom'
import user from '../Static/images/user.png';
import search_cross_icon from '../Static/images/search_cross_icon.png';
import search_icon from '../Static/images/search_icon.gif'
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShow} from '../redux/store/movieSlice'

function Header() {
  const [movieInput, setMovieInput] = useState('')
  const dispatch = useDispatch()

  const handleSearch =(event) =>{
    setMovieInput(event.target.value)
    
  }
  const  handlerSubmit = () => {
    if(movieInput === ''){
      const moviesText = 'harry'
      const showText = 'friends'
      dispatch(fetchAsyncMovies(moviesText))
      dispatch(fetchAsyncShow(showText))
      setMovieInput('')

    }
    else{
      dispatch(fetchAsyncMovies(movieInput))
      dispatch(fetchAsyncShow(movieInput))
      setMovieInput('')
      
    }
    
  }

  function clearSearch(){
    setMovieInput('')
  }
  
  return (
    <div className='container-header'>
      <Link to='/'>
        <div className='movie-logo'>Movies App</div></Link>
        <div className='wrapper-search'>
          <input type="text"  value={movieInput} placeholder='Search here ...'  onChange={handleSearch}/>
          {
            movieInput.length >= 1 ?
            <div className='clear-search' >
              <img  src={search_cross_icon} alt="clear"  onClick={() => clearSearch()}/>
            </div>: ''
          }

          <div className='search'>
            <img src={search_icon} alt="search" onClick ={handlerSubmit} height={28} width={28} />
          </div>
            
        </div>
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header