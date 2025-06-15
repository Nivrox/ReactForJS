import { useState, useEffect } from 'react';
import axios from 'axios';


const API_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = '38f1dae683ae1a666e87d70b403a81ce';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const URL_IMAGE = 'https://image.tmdb.org/t/p/original';


export const useFetch = params => { 
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({title : "Cargando Peliculas.."});
    const [playing, setPlaying] = useState (false);

    const fetchMovie = async(searchKey) =>{
        const type = searchKey ? 'search' : 'discover';
        const {data: {results}} = await axios.get(`${API_ENDPOINT}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });
        setMovies(results);
        setMovie(results[0]);

    useEffect(() => {
        fetchMovie(params.searchKey);	

    }, [params])
    }
    return {
        movies,
        movie,
        searchKey,
    }
}