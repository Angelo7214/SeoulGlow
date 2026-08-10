import { useState } from "react";

function Home() {
    /* =========================================================
       CARRUSEL PRINCIPAL
       ========================================================= */

    const banners = [
        {
            eyebrow: "Nueva colección",
            title: "Tu mejor piel,",
            highlight: "tu mejor versión.",
            description:
                "Descubre lo mejor del skincare coreano para una piel saludable, hidratada y radiante.",
            button: "DESCUBRIR PRODUCTOS",
            image: "../Img/Banner 2.png",
        },
        {
            eyebrow: "K-Beauty para ti",
            title: "Cuida tu piel,",
            highlight: "conoce tu glow.",
            description:
                "Encuentra productos seleccionados para crear una rutina de skincare que realmente disfrutes.",
            button: "EXPLORAR COLECCIÓN",
            image: "../Img/Banner 1.png",
        },
        {
            eyebrow: "Belleza coreana",
            title: "Una rutina que",
            highlight: "tu piel agradecerá.",
            description:
                "Ingredientes innovadores, fórmulas efectivas y el mejor cuidado inspirado en Corea.",
            button: "VER FAVORITOS",
            image: "../Img/Banner 3.png",
        },
    ];

         const [bannerActual, setBannerActual] = useState(0);

        const siguienteBanner = () => {
         setBannerActual((actual) =>
        actual === banners.length - 1 ? 0 : actual + 1
      );
    };

         const anteriorBanner = () => {
         setBannerActual((actual) =>
        actual === 0 ? banners.length - 1 : actual - 1
       );
    };  
    /* =========================================================
       BENEFICIOS DEL HERO
       ========================================================= */

    const beneficiosHero = [
        {
            icono: "🌿",
            titulo: "Ingredientes naturales",
        },
        {
            icono: "💧",
            titulo: "Testado dermatológicamente",
        },
        {
            icono: "🐰",
            titulo: "Cruelty Free",
        },
        {
            icono: "🧴",
            titulo: "Fórmulas limpias",
        },
    ];

    /* =========================================================
       BENEFICIOS GENERALES
       ========================================================= */

    const beneficios = [
        {
            icono: "🚚",
            titulo: "Envíos a todo el Perú",
            descripcion: "Rápidos y seguros",
        },
        {
            icono: "✓",
            titulo: "Productos originales",
            descripcion: "Marcas seleccionadas",
        },
        {
            icono: "🔒",
            titulo: "Compra segura",
            descripcion: "Tus datos protegidos",
        },
        {
            icono: "💬",
            titulo: "Atención personalizada",
            descripcion: "Estamos para ayudarte",
        },
    ];

    /* =========================================================
       TIPOS DE PIEL
       ========================================================= */

    const tiposPiel = [
        {
            nombre: "Piel seca",
            imagen: "/Img/Piel seca.png",
        },
        {
            nombre: "Piel grasa",
            imagen: "/Img/Piel grasa.png",
        },
        {
            nombre: "Piel mixta",
            imagen: "/Img/Piel mixta.png",
        },
        {
            nombre: "Piel sensible",
            imagen: "/Img/Piel sensible.png",
        },
        {
            nombre: "Piel normal",
            imagen: "/Img/Piel normal.png",
        },
        {
            nombre: "Piel madura",
            imagen: "/Img/Piel madura.png",
        },
    ];

    const [pielSeleccionada, setPielSeleccionada] = useState("");

    /* =========================================================
       PRODUCTOS
       ========================================================= */

    const productos = [
        {
            id: 1,
            marca: "COSRX",
            nombre: "Advanced Snail 96 Mucin Power Essence",
            categoria: "Esencia",
            precio: "S/ 79.90",
            imagen: "/Img/COSRX.png",
            favorito: true,
        },
        {
            id: 2,
            marca: "ANUA",
            nombre: "Heartleaf 77% Soothing Toner",
            categoria: "Tónico",
            precio: "S/ 89.90",
            imagen: "/Img/Anua.png",
            favorito: true,
        },
        {
            id: 3,
            marca: "SKIN1004",
            nombre: "Madagascar Centella Ampoule",
            categoria: "Ampolla",
            precio: "S/ 99.90",
            imagen: "/Img/Skin1004.png",
            favorito: false,
        },
    ];

    /* =========================================================
       RUTINA K-BEAUTY
       ========================================================= */

    const rutina = [
        {
            numero: "01",
            icono: "🫧",
            titulo: "Limpieza",
            descripcion: "Elimina impurezas y prepara tu piel.",
        },
        {
            numero: "02",
            icono: "💧",
            titulo: "Tónico",
            descripcion: "Equilibra e hidrata tu piel.",
        },
        {
            numero: "03",
            icono: "✨",
            titulo: "Esencia",
            descripcion: "Aporta hidratación y luminosidad.",
        },
        {
            numero: "04",
            icono: "💗",
            titulo: "Tratamiento",
            descripcion: "Cuida necesidades específicas.",
        },
        {
            numero: "05",
            icono: "🧴",
            titulo: "Hidratación",
            descripcion: "Sella la hidratación y protege.",
        },
    ];

    /* =========================================================
       RESEÑAS
       ========================================================= */

    const resenas = [
        {
            texto:
                "Me encanta que puedo encontrar productos coreanos y además elegirlos según mi tipo de piel.",
            nombre: "Valeria",
            inicial: "V",
        },
        {
            texto:
                "La selección de productos está muy bien pensada. Mi rutina cambió completamente.",
            nombre: "Camila",
            inicial: "C",
        },
        {
            texto:
                "Seoul Glow tiene una estética preciosa y los productos que he probado me han encantado.",
            nombre: "Andrea",
            inicial: "A",
        },
    ];

    /* =========================================================
       RENDER
       ========================================================= */

    return (
        <div className="home-page">

            {/* =====================================================
                HERO MODERNO
                ===================================================== */}

            <section
                className="hero-modern"
                style={{
                    backgroundImage: `url("${banners[bannerActual].image}")`,
                }}
            >

                <div className="hero-background-overlay"></div>

                <div className="hero-decoration hero-decoration-one">
                    ✦
                </div>

                <div className="hero-decoration hero-decoration-two">
                    ✧
                </div>

                <div className="hero-glass">

                    {/* HEADER */}

                    <header className="hero-header">

                        <a href="#" className="hero-logo">
                            🌸 SEOUL GLOW
                            <small>Korean Skincare</small>
                        </a>

                        <nav className="hero-menu">
                            <a href="#productos">Productos</a>
                            <a href="#piel">Tipos de piel</a>
                            <a href="#rutinas">Rutinas</a>
                            <a href="#favoritos">Favoritos</a>
                            <a href="#ofertas">Ofertas</a>
                            <a href="#nosotros">Sobre nosotros</a>
                        </nav>

                        <div className="hero-actions">

                            <button
                                type="button"
                                aria-label="Buscar"
                                className="hero-icon"
                            >
                                ⌕
                            </button>

                            <button
                                type="button"
                                aria-label="Carrito"
                                className="hero-icon cart-icon"
                            >
                                🛒
                                <span>2</span>
                            </button>

                            <button
                                type="button"
                                aria-label="Menú"
                                className="hero-icon menu-icon"
                            >
                                ☰
                            </button>

                        </div>

                    </header>


                    {/* CONTENIDO HERO */}

                    <div className="hero-main">

                        <div className="hero-copy">

                            <span className="hero-eyebrow">
                                {banners[bannerActual].eyebrow}
                            </span>

                            <h1>
                                {banners[bannerActual].title}
                                <br />
                                <em>
                                    {banners[bannerActual].highlight}
                                </em>
                            </h1>

                            <p>
                                {banners[bannerActual].description}
                            </p>

                            <div className="hero-buttons">

                                <a
                                    href="#productos"
                                    className="hero-primary"
                                >
                                    {banners[bannerActual].button}

                                    <span>→</span>
                                </a>

                                <a
                                    href="#favoritos"
                                    className="hero-secondary"
                                >
                                    Explorar favoritos
                                </a>

                            </div>

                        </div>


                        {/* BENEFICIOS */}

                        <div className="hero-benefits">

                            {beneficiosHero.map((beneficio) => (
                                <div
                                    className="hero-benefit"
                                    key={beneficio.titulo}
                                >

                                    <span className="hero-benefit-icon">
                                        {beneficio.icono}
                                    </span>

                                    <strong>
                                        {beneficio.titulo}
                                    </strong>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* BARRA INFERIOR */}

                    <div className="hero-bottom">

                        {beneficios.map((beneficio) => (
                            <div
                                className="hero-bottom-item"
                                key={beneficio.titulo}
                            >

                                <span className="hero-bottom-icon">
                                    {beneficio.icono}
                                </span>

                                <div>
                                    <strong>
                                        {beneficio.titulo}
                                    </strong>

                                    <small>
                                        {beneficio.descripcion}
                                    </small>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* FLECHAS */}

                <button
                    className="modern-arrow left"
                    onClick={anteriorBanner}
                    aria-label="Banner anterior"
                >
                    ←
                </button>

                <button
                    className="modern-arrow right"
                    onClick={siguienteBanner}
                    aria-label="Banner siguiente"
                >
                    →
                </button>


                {/* PUNTOS */}

                <div className="modern-dots">

                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setBannerActual(index)}
                            className={
                                bannerActual === index
                                    ? "active"
                                    : ""
                            }
                            aria-label={`Ir al banner ${index + 1}`}
                        />
                    ))}

                </div>

            </section>


            {/* =====================================================
                BENEFICIOS
                ===================================================== */}

            <section className="feature-modern">

                {beneficios.map((beneficio) => (
                    <div
                        className="feature-modern-item"
                        key={beneficio.titulo}
                    >

                        <span>
                            {beneficio.icono}
                        </span>

                        <div>
                            <strong>
                                {beneficio.titulo}
                            </strong>

                            <small>
                                {beneficio.descripcion}
                            </small>
                        </div>

                    </div>
                ))}

            </section>


            {/* =====================================================
                TIPOS DE PIEL
                ===================================================== */}

            <section
                className="skin-modern"
                id="piel"
            >

                <div className="section-heading">

                    <span className="section-eyebrow">
                        CUIDADO PERSONALIZADO
                    </span>

                    <h2>
                        Conoce lo que
                        <br />
                        <em>tu piel necesita.</em>
                    </h2>

                    <p>
                        Elige tu tipo de piel y descubre productos
                        pensados para acompañar tu rutina.
                    </p>

                </div>


                <div className="skin-modern-grid">

                    {tiposPiel.map((tipo) => (

                        <button
                            key={tipo.nombre}
                            className={`skin-modern-card ${
                                pielSeleccionada === tipo.nombre
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() =>
                                setPielSeleccionada(tipo.nombre)
                            }
                        >

                            <div className="skin-modern-image">

                                <img
                                    src={tipo.imagen}
                                    alt={tipo.nombre}
                                />

                            </div>

                            <span>
                                {tipo.nombre}
                            </span>

                            <small>
                                Descubrir →
                            </small>

                        </button>

                    ))}

                </div>


                {pielSeleccionada && (

                    <div className="skin-selected">

                        <div>

                            <span>
                                TU SELECCIÓN
                            </span>

                            <h3>
                                Productos para {pielSeleccionada}
                            </h3>

                            <p>
                                Hemos seleccionado opciones que pueden
                                ayudarte a construir una rutina pensada
                                para las necesidades de tu piel.
                            </p>

                        </div>

                        <a href="#productos">
                            VER PRODUCTOS →
                        </a>

                    </div>

                )}

            </section>


            {/* =====================================================
                PRODUCTOS
                ===================================================== */}

            <section
                className="products-modern"
                id="productos"
            >

                <div className="products-heading">

                    <div>

                        <span className="section-eyebrow">
                            FAVORITOS DE LA COMUNIDAD
                        </span>

                        <h2>
                            Los más
                            <br />
                            <em>amados.</em>
                        </h2>

                    </div>

                    <a href="#productos">
                        VER TODOS LOS PRODUCTOS →
                    </a>

                </div>


                <div className="product-modern-grid">

                    {productos.map((producto) => (

                        <article
                            className="product-modern-card"
                            key={producto.id}
                        >

                            <div className="product-modern-image">

                                {producto.favorito && (
                                    <span className="product-tag">
                                        FAVORITO
                                    </span>
                                )}

                                <button
                                    className="product-heart"
                                    aria-label="Agregar a favoritos"
                                >
                                    ♡
                                </button>

                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                />

                                <button className="product-quick">
                                    AGREGAR AL CARRITO
                                </button>

                            </div>


                            <div className="product-modern-info">

                                <span>
                                    {producto.marca}
                                </span>

                                <h3>
                                    {producto.nombre}
                                </h3>

                                <p>
                                    {producto.categoria}
                                </p>

                                <strong>
                                    {producto.precio}
                                </strong>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =====================================================
                RUTINA
                ===================================================== */}

            <section
                className="routine-modern"
                id="rutinas"
            >

                <div className="routine-modern-inner">

                    <div className="routine-modern-heading">

                        <span className="section-eyebrow">
                            K-BEAUTY ROUTINE
                        </span>

                        <h2>
                            El secreto está
                            <br />
                            <em>en la rutina.</em>
                        </h2>

                        <p>
                            Descubre los pasos esenciales de una rutina
                            coreana y crea un momento especial para tu piel.
                        </p>

                    </div>


                    <div className="routine-modern-grid">

                        {rutina.map((paso) => (

                            <article
                                className="routine-modern-card"
                                key={paso.numero}
                            >

                                <span className="routine-number">
                                    {paso.numero}
                                </span>

                                <span className="routine-icon">
                                    {paso.icono}
                                </span>

                                <h3>
                                    {paso.titulo}
                                </h3>

                                <p>
                                    {paso.descripcion}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                LOCALIZADOR
                ===================================================== */}

            <section className="store-modern">

                <div className="store-modern-content">

                    <span className="section-eyebrow">
                        ENCUÉNTRANOS
                    </span>

                    <h2>
                        Tu skincare
                        <br />
                        <em>más cerca de ti.</em>
                    </h2>

                    <p>
                        Visita nuestras tiendas y descubre tus productos
                        favoritos de Seoul Glow.
                    </p>

                    <button>
                        ENCONTRAR UNA TIENDA →
                    </button>

                </div>

                <div className="store-modern-visual">
                    📍
                </div>

            </section>


            {/* =====================================================
                RESEÑAS
                ===================================================== */}

            <section
                className="reviews-modern"
                id="favoritos"
            >

                <div className="section-heading">

                    <span className="section-eyebrow">
                        AMADOS POR NUESTRA COMUNIDAD
                    </span>

                    <h2>
                        Lo que dicen
                        <br />
                        <em>de Seoul Glow.</em>
                    </h2>

                </div>


                <div className="reviews-modern-grid">

                    {resenas.map((resena) => (

                        <article
                            className="review-modern-card"
                            key={resena.nombre}
                        >

                            <div className="review-stars">
                                ★★★★★
                            </div>

                            <p>
                                “{resena.texto}”
                            </p>

                            <div className="review-person">

                                <span>
                                    {resena.inicial}
                                </span>

                                <strong>
                                    {resena.nombre}
                                </strong>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =====================================================
                NEWSLETTER
                ===================================================== */}

            <section
                className="newsletter-modern"
                id="ofertas"
            >

                <span className="section-eyebrow">
                    SEUL GLOW LETTER
                </span>

                <h2>
                    Un poco de glow
                    <br />
                    <em>en tu bandeja.</em>
                </h2>

                <p>
                    Recibe novedades, recomendaciones de skincare,
                    lanzamientos y ofertas especiales.
                </p>

                <form
                    className="newsletter-form"
                    onSubmit={(e) => e.preventDefault()}
                >

                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        aria-label="Correo electrónico"
                    />

                    <button type="submit">
                        SUSCRIBIRME
                    </button>

                </form>

            </section>


            {/* =====================================================
                FOOTER
                ===================================================== */}

            <footer
                className="footer-modern"
                id="nosotros"
            >

                <div className="footer-modern-grid">

                    <div className="footer-brand">

                        <a href="#" className="footer-logo">
                            🌸 SEOUL GLOW
                            <small>
                                Korean Skincare
                            </small>
                        </a>

                        <p>
                            Skincare coreano seleccionado para
                            acompañarte a descubrir tu mejor piel.
                        </p>

                        <div className="footer-socials">

                            <a href="#" aria-label="Instagram">
                                ◎
                            </a>

                            <a href="#" aria-label="TikTok">
                                ♪
                            </a>

                            <a href="#" aria-label="Facebook">
                                f
                            </a>

                        </div>

                    </div>


                    <div>

                        <h4>
                            COMPRAR
                        </h4>

                        <ul>
                            <li>
                                Productos
                            </li>

                            <li>
                                Tipos de piel
                            </li>

                            <li>
                                Rutinas
                            </li>

                            <li>
                                Ofertas
                            </li>
                        </ul>

                    </div>


                    <div>

                        <h4>
                            AYUDA
                        </h4>

                        <ul>
                            <li>
                                Envíos
                            </li>

                            <li>
                                Cambios y devoluciones
                            </li>

                            <li>
                                Preguntas frecuentes
                            </li>

                            <li>
                                Contáctanos
                            </li>
                        </ul>

                    </div>


                    <div>

                        <h4>
                            SEOUL GLOW
                        </h4>

                        <ul>
                            <li>
                                Sobre nosotros
                            </li>

                            <li>
                                Nuestras tiendas
                            </li>

                            <li>
                                Blog
                            </li>

                            <li>
                                Términos y condiciones
                            </li>
                        </ul>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 Seoul Glow. Todos los derechos reservados.
                    </span>

                    <span>
                        Korean Skincare · Lima, Perú
                    </span>

                </div>

            </footer>

        </div>
    );
}

export default Home;