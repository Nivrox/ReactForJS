import FormSearch from "./formBusqueda.jsx";
import Peliculas from "./peliculas";
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
