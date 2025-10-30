import { useState, useContext } from 'react';
import FavoritesButton from './Favoritos/favoritiesButton.jsx';
import { DataContext} from '../Context/DataContext.jsx';


//https://www.omdbapi.com/?apikey=18190454&s=batman
//https://www.omdbapi.com/?apikey=18190454&i=tt0372784

const FormSearch = () => {
    const [tittle, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext);

    //const {data} = useContext(DataContext);

    const handleSubmit = e =>{
        e.preventDefault();
        setQuery(tittle);   
        //console.log("tittle", tittle);
    } 
    return (
        <div className="form-search">
            
            <h2 style = {{color : 'white'}}>Buscar Peliculas</h2>
            <form onSubmit={handleSubmit}>
                <input type = "text" placeholder = "Tittle movie" onChange = {e =>setTitle(e.target.value)}/>
                <input type = "submit" value = "buscar"/> 
            </form>
            

            {error && <p className= "error" style={{color: 'white'}}> La pelicula No existe<br />
            Recuerde Escribir El Nombre En Ingles</p>}
            
            <div className='form-search'>
                    <FavoritesButton></FavoritesButton>
            </div>
          
            
        </div>
        
    )
}

export default FormSearch;
