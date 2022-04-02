import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Static/CSS/PageNotFound.css'
function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className='containers'>
        <h2 className='Error_title'>404</h2>
        <h3 className='error-message'>ERROR 404</h3>
        <h3 style={{color: '#261e1e7d'}}>Page Not Found</h3>
        <button className='back_btn' onClick={() => navigate('/')}>Back</button>
    </div>
  )
}

export default PageNotFound