import { createContext, useState, useEffect } from "react";
import { useFetch } from "../Usefetch/useFetch";
import { toast } from "react-toastify";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("superman");
    const { isLoading, error, data } = useFetch(`&s=${query}`);
    const [favoritos, setFavoritos] = useState(() => {
        const favoritosGuardados = localStorage.getItem("favoritos");
        return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
    });

    const alternarFavorito = (pelicula) => {
        const existente = favoritos.some((fav) => fav.imdbID === pelicula.imdbID);
        let nuevosFavoritos;
        if (existente) {
            nuevosFavoritos = favoritos.filter((fav) => fav.imdbID !== pelicula.imdbID);
            toast.info(`${pelicula.Title} fue quitada de tus favoritos`);
        } else {
            nuevosFavoritos = [...favoritos, pelicula];
            toast.success(`${pelicula.Title} fue agregada a tus favoritos`);
        }
        setFavoritos(nuevosFavoritos);
    };

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    return (
        <DataContext.Provider value={{ query, setQuery, isLoading, error, data, favoritos, alternarFavorito }}>
            {children}
        </DataContext.Provider>
    );
}
