function Header({ setPaginaActual }) {
    return (
        <>
            <div className="util-bar">
                <span>🌸 Skincare coreano seleccionado para ti</span>
                <span>🚚 Envíos a todo el Perú</span>
                <span>💳 Yape · Plin · Tarjetas</span>
            </div>

            <header className="site">

                <div className="header-row">

                    <a
                        href="#"
                        className="logo"
                        onClick={() => setPaginaActual("home")}
                    >
                        🌸 SEOUL GLOW
                        <small>Korean Skincare</small>
                    </a>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="¿Qué estás buscando?"
                        />
                        <span>⌕</span>
                    </div>

                    <div className="header-icons">

                        <a
                            className="icon-col"
                            onClick={() => setPaginaActual("nosotros")}
                        >
                            <img
                                src="/Img/tienda.png"
                                alt="Tiendas"
                                className="icono-header"
                            />
                            <span>Tiendas</span>
                        </a>

                        <a
                            className="icon-col"
                            onClick={() => setPaginaActual("cuenta")}
                        >
                            <img
                                src="/Img/usuario.png"
                                alt="Cuenta"
                                className="icono-header"
                            />
                            <span>Mi cuenta</span>
                        </a>

                        <a
                            className="icon-col"
                            onClick={() => setPaginaActual("carrito")}
                        >
                            <img
                                src="/Img/carrito.png"
                                alt="Carrito"
                                className="icono-carrito"
                            />
                            <span className="cart-badge">0</span>
                            <span>Carrito</span>
                        </a>

                    </div>
                </div>

                <nav className="main">
                    <a onClick={() => setPaginaActual("productos")}>PRODUCTOS</a>
                    <a onClick={() => setPaginaActual("piel")}>TIPOS DE PIEL</a>
                    <a onClick={() => setPaginaActual("rutinas")}>RUTINAS</a>
                    <a onClick={() => setPaginaActual("favoritos")}>FAVORITOS</a>
                    <a onClick={() => setPaginaActual("ofertas")}>OFERTAS</a>
                    <a onClick={() => setPaginaActual("nosotros")}>SOBRE NOSOTROS</a>
                </nav>

            </header>
        </>
    );
}

export default Header;