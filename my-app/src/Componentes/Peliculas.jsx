import { useContext } from "react"; 
import { DataContext } from "../Context/dataContext";
import ItemPeliculas from "./ItemPeliculas";

    const Peliculas = () => {
        const { movies, movie } = useContext(DataContext);
        return (

            <div className="movies-content" style={{color : 'white'}}>
                {
                     (
                        movies.map(movie => (
                            <ItemPeliculas
                                key={movie.id}
                                movie={movie}
                            />
                        ))
                    ) : "Cargando...."
                }
            </div>
        );
    }

export default Peliculas;