import FormSearch from "./formBusqueda";
import Peliculas from "./Peliculas";
import '@fortawesome/fontawesome-free/css/all.min.css';

function MainPage() {
    return (
        <>
            <FormSearch />
            <Peliculas />

        </>
    );
}

export default MainPage;
