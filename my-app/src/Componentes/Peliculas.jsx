import { useEffect, useContext } from "react";
import { DataContext } from "../Context/dataContext";
import ItemPeliculas from "./ItemPeliculas";

    const Peliculas = () => {
        const { isLoading, data } = useContext(DataContext);
        return (

            <div className="peliculas-content">
                {
                    !isLoading ? 
                    data.map(item => (
                        <ItemPeliculas>
                            key={item.ImdbID}
                            id={item.ImdbID}
                            title={item.Title}
                            type={item.Type}
                            year={item.Year}
                            poster={item.Poster}
                        </ItemPeliculas>
                    ))
                    :"Cargando...."

                }   
            </div>
        );
    }

export default Peliculas;