import { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Productos from "./paginas/Productos";
import Carrito from "./paginas/Carrito";
import Micuenta from "./paginas/Micuenta";
import Nosotros from "./paginas/Nosotros";
import TipsyRutinas from "./paginas/TipsyRutinas";
import "./App.css";

function App() {
    const [paginaActual, setPaginaActual] = useState("home");

    const renderPagina = () => {
        switch (paginaActual) {
            case "home":
                return <Home />;
            case "productos":
                return <Productos />;
            case "carrito":
                return <Carrito />;
            case "cuenta":
                return <Micuenta />;
            case "nosotros":
                return <Nosotros />;
            case "rutinas":
                return <TipsyRutinas />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Header
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}
            />
            {renderPagina()}
            <Footer />
        </div>
    );
}

export default App;