import React from "react";
import { Link } from "react-router-dom";

const FavoritesButton = () =>{
    
    return (
        <div className="header-buttons">
            <Link to ={`/Favorites`} style={{ color: "inherit", textDecoration: "inherit" }}>
                <button className="btn-favoritos">⭐ Favoritos</button>
            </Link>
                        
        </div>
            
    )
}

export default FavoritesButton;