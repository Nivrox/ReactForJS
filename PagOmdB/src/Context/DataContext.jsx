import { createContext, } from "react";
import { useState } from "react";
import { useFetch } from "../Usefetch/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);
    
    return (
        <DataContext.Provider value={{ query, setQuery, isLoading, error, data }}>
            {children}
        </DataContext.Provider>
    );
}