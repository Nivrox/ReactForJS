import { useContext } from "react";
import ItemFavoritos from "./Itemfavoritos";
import { DataContext } from "../../Context/dataContext";

const Favoritos = () => {
    const {favoritos} = useContext (DataContext);
    return (
        <>
            <button className="btn-favoritos" onClick={() => window.history.back()}>
                Volver
            </button>
            
                            
            <div className="movies-content" >
                {favoritos.length > 0 ? (
                    favoritos.map((peli) => (   
                    <ItemFavoritos
                        key={peli.imdbID}
                        id={peli.imdbID}
                        title={peli.Title}
                        type={peli.Type}
                        year={peli.Year}
                        poster={peli.Poster}
                        />
                    ))
                ):(
                    <h1 style={{color : "white"}}>
                        No tenes peliculas favoritas aún....
                    </h1>
                )
                }    
                    
            </div>
        
        
        
        </>
        
       
        
        
    );
}

export default Favoritos;