import {Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/Movie_Detail';
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/movies/:imdbID' element={<MovieDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
     </div>
     
    </div>
  );
}

export default App;
