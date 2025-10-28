import { useParams } from "react-router-dom";
import { useFetch } from "../Usefetch/useFetch";
import DefaultImage from "/NoImage.png"; // Adjust the path as necessary
import { DataContext } from "../context/dataContext";
import { useContext } from "react";


const SingleMovie = () => {
    const {id} = useParams();
    const {isLoading, data} = useFetch(`&i=${id}`);
    const {favoritos, alternarFavorito} = useContext(DataContext)
    if (isLoading) {
        return <div className="loading"></div>;
    }

    if (!data || !data.Title) {
    return <div style={{ color: "white", textAlign: "center" }}>No se pudo cargar la película.</div>;
    }
    const {Poster, Title, Year, Runtime, Genre, Director, Country, Actors, Plot, Released, Type} = data;	
    const image = Poster && Poster !== "N/A" ? Poster : DefaultImage;
    
    const esFavorita = favoritos.some((f) => f.imdbID == id)
    return (
        
        <div className="single-movie">
            <img src= {image} alt = {Title} /> 
            
            <div className="single-info">
                <h2> { Title } </h2>
                <h3>Trama:</h3>
                <p> { Plot } </p>
                <p><strong>Country: </strong> { Country }</p>
                <p><strong>Actors: </strong> { Actors }</p>
                <p><strong>Year: </strong> { Year }</p>
                <p><strong>Released: </strong> { Released }</p>
                <p><strong>Runtime: </strong> { Runtime }</p>
                <p><strong>Genre: </strong> { Genre }</p>
                <p><strong>Director: </strong> { Director }</p>
                <div className="movie-buttons">
                    <button className="btn-volver" onClick={() => window.history.back()}>Volver</button>
                    <button className="btn-favorito" onClick={() => 
                        alternarFavorito({
                            imdbID: id,
                            Title,
                            Year,
                            Type: Type,
                            Poster,
                        })}>{esFavorita ? "Quitar de Favoritos" : "Agregar a Favoritos"}</button>
                </div>
            </div>
        </div>
        
    );
};

export default SingleMovie;
