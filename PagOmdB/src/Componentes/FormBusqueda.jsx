import { useState, useContext } from 'react';
import { DataContext} from '../Context/dataContext';

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
        </div>
    )
}

export default FormSearch;