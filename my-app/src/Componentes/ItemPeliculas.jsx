const ItemPeliculas = ({id, title, year, type, poster}) => {
    return (
        <article>
            <div classname = "item-pelicula">
             <p>{title}</p>
            </div>
        </article>
    )
}

export default ItemPeliculas;