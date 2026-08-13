const heroPorPagina = {
    home: {
        banners: [
            {
                eyebrow: "Nueva colección",
                title: "Tu mejor piel,",
                highlight: "tu mejor versión.",
                description: "Descubre lo mejor del skincare coreano para una piel saludable, hidratada y radiante.",
                button: "DESCUBRIR PRODUCTOS",
                buttonLink: "#productos",
                image: "/Img/Imagen fondo 1.png",
            },
        ],
    },
    productos: {
        banners: [
            {
                eyebrow: "Catálogo completo",
                title: "Encuentra tu",
                highlight: "producto ideal.",
                description: "Explora nuestra selección curada de marcas coreanas.",
                button: "VER CATÁLOGO",
                image: "/Img/Imagen fondo 2.png",
            },
        ],
    },
    carrito: {
        banners: [
            {
                eyebrow: "Tu compra",
                title: "Revisa tu",
                highlight: "carrito.",
                description: "Verifica tus productos antes de finalizar tu compra.",
                button: "SEGUIR COMPRANDO",
                image: "/Img/Imagen fondo 3.png",
            },
        ],
    },
    cuenta: {
        banners: [
            {
                eyebrow: "Bienvenida",
                title: "Tu espacio,",
                highlight: "tu cuenta.",
                description: "Gestiona tus pedidos, direcciones y preferencias.",
                button: "IR A PRODUCTOS",
                image: "/Img/Imagen fondo 4.png",
            },
        ],
    },
    nosotros: {
        banners: [
            {
                eyebrow: "Nuestra historia",
                title: "Conoce a",
                highlight: "Seoul Glow.",
                description: "Así nació nuestra pasión por el K-Beauty.",
                button: "DESCUBRIR MÁS",
                image: "/Img/Imagen fondo 6.png",
            },
        ],
    },
    rutinas: {
        banners: [
            {
                eyebrow: "K-Beauty routine",
                title: "Tips y",
                highlight: "rutinas.",
                description: "Aprende a construir tu rutina ideal paso a paso.",
                button: "VER RUTINAS",
                image: "/Img/Imagen fondo 5.png",
            },
        ],
    },
};

const beneficiosHero = [
    { icono: "🌿", titulo: "Ingredientes naturales" },
    { icono: "💧", titulo: "Testado dermatológicamente" },
    { icono: "🐰", titulo: "Cruelty Free" },
    { icono: "🧴", titulo: "Fórmulas limpias" },
];

function Header({ paginaActual, setPaginaActual }) {

    const paginaHero = heroPorPagina[paginaActual] || heroPorPagina.home;
    const bannerData = paginaHero.banners[0]; // fijo, sin rotación

    return (
        <>
            <div className="util-bar">
                <span>🌸 Skincare coreano seleccionado para ti</span>
                <span>🚚 Envíos a todo el Perú</span>
                <span>💳 Yape · Plin · Tarjetas</span>
            </div>

            <section className="hero-modern">

                <div
                    className="hero-bg-layer active"
                    style={{ backgroundImage: `url("${bannerData.image}")` }}
                />

                <div className="hero-background-overlay"></div>

                <div className="hero-decoration hero-decoration-one">✦</div>
                <div className="hero-decoration hero-decoration-two">✧</div>

                <div className="hero-glass">

                    <header className="hero-header">

                        <a
                            href="#"
                            className="hero-logo"
                            onClick={(e) => { e.preventDefault(); setPaginaActual("home"); }}
                        >
                            🌸 SEOUL GLOW
                            <small>Korean Skincare</small>
                        </a>
    
                        <nav className="hero-menu">
                            <a onClick={() => setPaginaActual("productos")}>Productos</a>
                            <a onClick={() => setPaginaActual("home")} href="#piel">Tipos de piel</a>
                            <a onClick={() => setPaginaActual("rutinas")}>Rutinas</a>
                            <a onClick={() => setPaginaActual("nosotros")}>Sobre nosotros</a>
                        </nav>

                        <div className="hero-actions">

                            <button type="button" aria-label="Buscar" className="hero-icon">
                                ⌕
                            </button>

                            <button
                                type="button"
                                aria-label="Carrito"
                                className="hero-icon cart-icon"
                                onClick={() => setPaginaActual("carrito")}
                            >
                                🛒
                                <span>2</span>
                            </button>

                            <button type="button" aria-label="Menú" className="hero-icon menu-icon">
                                ☰
                            </button>

                        </div>
                    
                    </header>

                    <div className="hero-main">

                        <div className="hero-copy">

                            <span className="hero-eyebrow">{bannerData.eyebrow}</span>

                            <h1>
                                {bannerData.title}
                                <br />
                                <em>{bannerData.highlight}</em>
                            </h1>

                            <p>{bannerData.description}</p>

                            <div className="hero-buttons">
                                <a href={bannerData.buttonLink || "#"} className="hero-primary">
                                    {bannerData.button}
                                    <span>→</span>
                                </a>

                                <a
                                    href="#favoritos"
                                    className="hero-secondary"
                                    onClick={() => setPaginaActual("home")}
                                >
                                    Explorar favoritos
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="hero-bottom">
                        {beneficiosHero.map((beneficio) => (
                            <div className="hero-bottom-item" key={beneficio.titulo}>
                                <span className="hero-bottom-icon">{beneficio.icono}</span>
                                <strong>{beneficio.titulo}</strong>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    );
}

export default Header;