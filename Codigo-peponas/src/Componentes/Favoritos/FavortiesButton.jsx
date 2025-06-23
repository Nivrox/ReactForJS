import React from "react";
import Favoritos from "./Favoritos";
import { Link } from "react-router-dom";

const FavoritesButton = () =>{
    
    return (
        <div className="header-buttons">
            <Link to ={`/favorites`} style={{ color: "inherit", textDecoration: "inherit" }}>
                <button className="btn-favoritos">⭐ Favoritos</button>
            </Link>
                        
        </div>
            
    )
}

export default FavoritesButton;