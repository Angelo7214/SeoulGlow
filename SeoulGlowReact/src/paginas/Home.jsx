import { useState } from "react";
function Home() {

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

        </div>
    );
}

export default Home;