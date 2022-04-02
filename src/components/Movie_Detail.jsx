import React,{useEffect} from 'react';
import '../Static/CSS/MoviesDetail.css';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncAllDetail} from '../redux/store/movieSlice';
import { getShowMoviesAll } from '../redux/store/movieSlice';
import { removeSelectorAllDetail } from '../redux/store/movieSlice';


function Movie_Detail() {
  const param = useParams()
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector(getShowMoviesAll)
  const {Title,Poster,Year,Plot,imdbRating,imdbVotes,Runtime,Director,Actors,Genre,Language} = selector

  useEffect(() => {
    dispatch(fetchAsyncAllDetail(param.imdbID))
    return () =>{
      dispatch(removeSelectorAllDetail())
    }
  }, [dispatch])



  
  return (
    <div className='wrapper-detail'>
      <div style={{paddingBottom:'10px'}} >
        <button className="back_btn" onClick={() => navigator('/')}>Back</button> 
      </div>
      
      {Object.keys(selector).length === 0 ? 
      <div>...loading</div> :  
      <>
      <div className='left-detail'>
        <h2 className='movie-title'>{Title}</h2>
        <div className='movies-rating'>
          <span>IMDB Rating  <i className='fa fa-star'></i> : {imdbRating}</span>
          <span>IMDB Voting <i className='fa fa-thumbs-up'></i> :{imdbVotes}</span>
          <span>Run-Time <i className='fa fa-film'></i> :{Runtime}</span>
          <span>Year <i className='fa fa-calendar'></i>  :{Year}</span>
        </div>
        <div className='movie-plot'>{Plot}</div>
        <div className='movie-Info'>
          <div>
            <span>Director</span>
            <span>{Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{Language}</span>
          </div>
        </div>

      </div>
      <div  className='right-detail'>
      <img src={Poster} alt="" />
      </div>
      </>
      }

    </div>
  )
}

export default Movie_Detail