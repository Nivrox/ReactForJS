import { useContext } from "react"; 
import { DataContext } from "../context/dataContext";
import ItemPeliculas from "./ItemPeliculas";

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