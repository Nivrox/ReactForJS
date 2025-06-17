import DefaultImage from "/NoImage.png";
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ItemPeliculas = ({id, title, year, type, poster}) => {

    //let image = poster == "N/A" ? DefaultImage : poster;
    const [image, setImage] = useState(poster);
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
        

    return (
        
            <article>
                <Link to= {`/movies/${id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
                    <div className = "item-movie" style={{backgroundImage : `url(${image})`}}>
                        <div className="info">
                            <h4>{ title }</h4>
                            <p className="row-info">
                                <span>{ type }</span>
                                <span>{ year }</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </article>
        
    )
}

export default ItemPeliculas;