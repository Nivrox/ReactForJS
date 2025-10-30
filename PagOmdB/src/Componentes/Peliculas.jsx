import { useContext } from "react"; 
import { DataContext } from '../Context/dataContext.jsx';
import ItemPeliculas from "./Itempeliculas.jsx";

    const Peliculas = () => {
        const { isLoading, data } = useContext(DataContext);    
        return (
            <div className="movies-content" >
                {
                    !isLoading ? 
                    data.map(item => (
                        <ItemPeliculas
                            key={item.imdbID}
                            id={item.imdbID}
                            title={item.Title}
                            type={item.Type}
                            year={item.Year}
                            poster={item.Poster}
                        />
                    ))
                    :"Cargando...."

                }   
            </div>
        );
    }
export default Peliculas;