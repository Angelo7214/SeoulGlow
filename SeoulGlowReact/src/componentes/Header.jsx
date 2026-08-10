import { useState, useEffect } from "react";

/* =========================================================
   CONTENIDO DEL HERO POR PÁGINA
   ========================================================= */

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
                image: "/Img/Banner 2.png",
            },
            {
                eyebrow: "K-Beauty para ti",
                title: "Cuida tu piel,",
                highlight: "conoce tu glow.",
                description: "Encuentra productos seleccionados para crear una rutina de skincare que realmente disfrutes.",
                button: "EXPLORAR COLECCIÓN",
                buttonLink: "#favoritos",
                image: "/Img/Banner 1.png",
            },
            {
                eyebrow: "Belleza coreana",
                title: "Una rutina que",
                highlight: "tu piel agradecerá.",
                description: "Ingredientes innovadores, fórmulas efectivas y el mejor cuidado inspirado en Corea.",
                button: "VER FAVORITOS",
                buttonLink: "#favoritos",
                image: "/Img/Banner 3.png",
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
                image: "/Img/Banner Productos.png",
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
                image: "/Img/Banner Carrito.png",
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
                image: "/Img/Banner Cuenta.png",
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
                image: "/Img/Banner Nosotros.png",
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
                image: "/Img/tips-rutina-banner.png",
            },
        ],
    },
};

/* =========================================================
   BENEFICIOS FIJOS (iguales en todas las páginas)
   ========================================================= */

const beneficiosHero = [
    { icono: "🌿", titulo: "Ingredientes naturales" },
    { icono: "💧", titulo: "Testado dermatológicamente" },
    { icono: "🐰", titulo: "Cruelty Free" },
    { icono: "🧴", titulo: "Fórmulas limpias" },
];

const beneficios = [
    { icono: "🚚", titulo: "Envíos a todo el Perú", descripcion: "Rápidos y seguros" },
    { icono: "✓", titulo: "Productos originales", descripcion: "Marcas seleccionadas" },
    { icono: "🔒", titulo: "Compra segura", descripcion: "Tus datos protegidos" },
    { icono: "💬", titulo: "Atención personalizada", descripcion: "Estamos para ayudarte" },
];

function Header({ paginaActual, setPaginaActual }) {

    const paginaHero = heroPorPagina[paginaActual] || heroPorPagina.home;
    const banners = paginaHero.banners;

    const [bannerActual, setBannerActual] = useState(0);

    useEffect(() => {
        setBannerActual(0);
    }, [paginaActual]);

    const bannerData = banners[bannerActual] || banners[0];

    const [capas, setCapas] = useState([
        { imagen: bannerData.image, activa: true },
        { imagen: bannerData.image, activa: false },
    ]);

    useEffect(() => {
        setCapas((prev) => {
            const indiceActiva = prev.findIndex((c) => c.activa);
            if (prev[indiceActiva].imagen === bannerData.image) return prev;

            const indiceInactiva = indiceActiva === 0 ? 1 : 0;
            const nuevo = [...prev];
            nuevo[indiceInactiva] = { imagen: bannerData.image, activa: false };
            return nuevo;
        });

        const timeout = setTimeout(() => {
            setCapas((prev) => {
                const indiceActiva = prev.findIndex((c) => c.activa);
                const indiceInactiva = indiceActiva === 0 ? 1 : 0;
                return prev.map((capa, i) => ({
                    ...capa,
                    activa: i === indiceInactiva,
                }));
            });
        }, 30);

        return () => clearTimeout(timeout);
    }, [bannerData.image]);

    const siguienteBanner = () => {
        setBannerActual((actual) => (actual === banners.length - 1 ? 0 : actual + 1));
    };

    const anteriorBanner = () => {
        setBannerActual((actual) => (actual === 0 ? banners.length - 1 : actual - 1));
    };

    return (
        <>
            <div className="util-bar">
                <span>🌸 Skincare coreano seleccionado para ti</span>
                <span>🚚 Envíos a todo el Perú</span>
                <span>💳 Yape · Plin · Tarjetas</span>
            </div>

            <section className="hero-modern">

                {capas.map((capa, i) => (
                    <div
                        key={i}
                        className={`hero-bg-layer ${capa.activa ? "active" : ""}`}
                        style={{ backgroundImage: `url("${capa.imagen}")` }}
                    />
                ))}

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
                            <a onClick={() => setPaginaActual("home")} href="#favoritos">Favoritos</a>
                            <a onClick={() => setPaginaActual("home")} href="#ofertas">Ofertas</a>
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

                        <div className="hero-benefits">
                            {beneficiosHero.map((beneficio) => (
                                <div className="hero-benefit" key={beneficio.titulo}>
                                    <span className="hero-benefit-icon">{beneficio.icono}</span>
                                    <strong>{beneficio.titulo}</strong>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="hero-bottom">
                        {beneficios.map((beneficio) => (
                            <div className="hero-bottom-item" key={beneficio.titulo}>
                                <span className="hero-bottom-icon">{beneficio.icono}</span>
                                <div>
                                    <strong>{beneficio.titulo}</strong>
                                    <small>{beneficio.descripcion}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {banners.length > 1 && (
                    <>
                        <button className="modern-arrow left" onClick={anteriorBanner} aria-label="Banner anterior">
                            ←
                        </button>

                        <button className="modern-arrow right" onClick={siguienteBanner} aria-label="Banner siguiente">
                            →
                        </button>

                        <div className="modern-dots">
                            {banners.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setBannerActual(index)}
                                    className={bannerActual === index ? "active" : ""}
                                    aria-label={`Ir al banner ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

            </section>
        </>
    );
}

export default Header;