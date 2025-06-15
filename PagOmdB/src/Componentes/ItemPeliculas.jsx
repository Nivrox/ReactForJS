import DefaultImage from "/NoImage.png";
import { useEffect, useState } from 'react';


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
            <div className = "item-movie" style={{backgroundImage : `url(${image})`}}>
             
             
             <div className="info">
                <h4>{ title }</h4>
                <p className="row-info"><span>{ type }</span>
                    <span>{ year }</span>
                </p>
             </div>

            </div>
        </article>
    )
}

export default ItemPeliculas;