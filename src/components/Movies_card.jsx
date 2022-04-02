import React from 'react'
import '../Static/CSS/MoviesCard.css'
import no_image_icon from '../Static/images/no_image_icon.png'
import { Link } from 'react-router-dom'




function Movies_card({data}) {
  let {Title, Poster, Year , imdbID} = data
  return (
    <div className='card-item'>
      <Link to={`/movies/${imdbID}`}>
        <div className='card-inner'>
          <div className='card-top'>
          <img src={Poster === 'N/A' ? no_image_icon: Poster} alt={Title} />
          </div>
        <div className='card-body'>
          <div className='content'>
          <h3>{Title}</h3>
          <h4>{Year}</h4>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Movies_card