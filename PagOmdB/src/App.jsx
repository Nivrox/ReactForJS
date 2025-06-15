//https://github.com/RamiroCeballes/React ----> EXAMPLE FOR API'S
//https://pokeapi.co/ -----> API POKEMON
//https://mui-com.translate.goog/material-ui/getting-started/installation/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc&_x_tr_hist=true
// PARA LA CLASE QUE VIENE 
import './App.css'
import {useEffect } from 'react';
import {useState } from 'react';
import FormSearch from './Componentes/FormBusqueda.jsx';
import Peliculas from './Componentes/Peliculas.jsx';
function App() {
  return(
    <div className="App">
      <FormSearch />
      <Peliculas />
    </div>  
  )
}

export default App 