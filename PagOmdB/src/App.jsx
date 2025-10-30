//https://github.com/RamiroCeballes/React ----> EXAMPLE FOR API'S
//https://pokeapi.co/ -----> API POKEMON
//https://mui-com.translate.goog/material-ui/getting-started/installation/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc&_x_tr_hist=true
// PARA LA CLASE QUE VIENE 
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SingleMovie from "./Componentes/SingleMovies.jsx";
import MainPage from "./Componentes/MainPage.jsx";
import Favoritos from './Componentes/Favoritos/Favoritos.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return(
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}   />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/favorites" element={<Favoritos/>} />
        </Routes>
        <ToastContainer />     
      </BrowserRouter>
      
    </div>
    
  )
}

export default App;