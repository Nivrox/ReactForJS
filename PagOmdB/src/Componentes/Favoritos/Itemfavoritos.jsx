import DefaultImage from "/NoImage.png";
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DataContext } from "../../Context/dataContext";


const ItemFavoritos = ({id, title, year, type, poster}) => {

    //let image = poster == "N/A" ? DefaultImage : poster;
    const [image, setImage] = useState(poster);
    const { alternarFavorito  } = useContext(DataContext);
        useEffect(() => {
            if (poster === "N/A") {
                setImage(DefaultImage);
            } else {    
                const img = new Image();
                img.src = poster;
                img.onload = () => {
                    setImage(poster);
                };
                img.onerror = () => {
                    setImage(DefaultImage);
                };
            }
        }, [poster]);

        const pelicula={
            imdbID: id,
            Title: title,
            Year: year,
            Type: type,
            Poster: poster,
        };
    return (
        
        <article>
            <Link to= {`/movies/${id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
                <div className = "item-movie" style={{backgroundImage : `url(${image})`}}>
                    <div className="info">
                        <h4>{ title }</h4>
                        <h4 className="row-info">
                            <span>{ type }</span>
                            <span>{ year }</span>
                        </h4>
                    </div>
                </div>
            </Link>
            
        
            <button onClick={() => alternarFavorito (pelicula)} className="delete-fav">
                Quitar de Favoritos
            </button>
        </article>
    )
}

export default ItemFavoritos;