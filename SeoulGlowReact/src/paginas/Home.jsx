import { useState } from "react";
function Home() {
    /* =========================================================
       TIPOS DE PIEL
       ========================================================= */
 const tiposPiel = [
        {
            nombre: "Piel seca",
            imagen: "/Img/Piel seca.png",
            descripcion:
                "Necesita hidratación profunda, nutrición y productos que ayuden a mantener la barrera natural de la piel.",
            etiqueta: "HIDRATACIÓN INTENSA",
        },
        {
            nombre: "Piel grasa",
            imagen: "/Img/Piel grasa.png",
            descripcion:
                "Busca fórmulas ligeras que ayuden a controlar el exceso de sebo sin dejar una sensación pesada.",
            etiqueta: "EQUILIBRIO Y FRESCURA",
        },
        {
            nombre: "Piel mixta",
            imagen: "/Img/Piel mixta.png",
            descripcion:
                "Combina diferentes necesidades. Lo ideal es equilibrar las zonas grasas y mantener hidratadas las zonas secas.",
            etiqueta: "EQUILIBRIO INTELIGENTE",
        },
        {
            nombre: "Piel sensible",
            imagen: "/Img/Piel sensible.png",
            descripcion:
                "Necesita fórmulas suaves que ayuden a cuidar la piel y mantener una sensación de confort durante el día.",
            etiqueta: "CALMA Y CONFORT",
        },
        {
            nombre: "Piel normal",
            imagen: "/Img/Piel normal.png",
            descripcion:
                "Mantén su equilibrio natural con una rutina sencilla enfocada en hidratación, protección y luminosidad.",
            etiqueta: "CUIDADO DIARIO",
        },
        {
            nombre: "Piel madura",
            imagen: "/Img/Piel madura.png",
            descripcion:
                "Una rutina enfocada en hidratación, nutrición y luminosidad puede ayudar a cuidar la apariencia de la piel.",
            etiqueta: "NUTRICIÓN Y LUMINOSIDAD",
        },
    ];

    const [pielActual, setPielActual] = useState(0);

    const piel = tiposPiel[pielActual];
    const [modalAbierto, setModalAbierto] = useState(false);

    const seleccionarPiel = (indice) => {
        setPielActual(indice);
    };


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
            imagen: "/Img/COSRX LIMPIADOR 2.png",
            favorito: true,
        },
        {
            id: 2,
            marca: "ANUA",
            nombre: "Heartleaf 77% Soothing Toner",
            categoria: "Tónico",
            precio: "S/ 89.90",
            imagen: "/Img/ANUA TONIC.png",
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
    return (
        <div className="home-page">
            {/* =====================================================
                TIPOS DE PIEL
                ===================================================== */}

            <section className="skin-modern" id="piel">

                <div className="skin-experience">

                    {/* DECORACIÓN */}

                    <div className="skin-glow skin-glow-one"></div>
                    <div className="skin-glow skin-glow-two"></div>

             {/* CABECERA — ahora primero, más grande */}
        <div className="skin-experience-heading">
            <span className="section-eyebrow">CUIDADO PERSONALIZADO</span>
            <h2>
                Conoce lo que
                <br />
                <em>tu piel necesita.</em>
            </h2>
            <p>
                Descubre el cuidado que mejor acompaña las necesidades de tu piel.
            </p>
        </div>
        
{/* MENÚ — ahora debajo del título, en su propia tarjeta */}
        <div className="skin-selector-wrap">
            <div className="skin-selector">
                {tiposPiel.map((tipo, indice) => (
                    <button
                        key={tipo.nombre}
                        className={`skin-selector-item ${
                            pielActual === indice ? "active" : ""
                        }`}
                        onClick={() => seleccionarPiel(indice)}
                    >
                        <span className="skin-selector-number">
                            {String(indice + 1).padStart(2, "0")}
                        </span>
                        <span className="skin-selector-name">
                            {tipo.nombre.replace("Piel ", "")}
                        </span>
                    </button>
                ))}
            </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="skin-showcase">

            <div className="skin-showcase-content">

                {/* BARRA DE PROGRESO SEGMENTADA */}
                <div className="skin-counter-bar">
                    {tiposPiel.map((_, indice) => (
                        <span
                            key={indice}
                            className={`skin-counter-segment ${
                                indice === pielActual ? "active" : ""
                            } ${indice < pielActual ? "done" : ""}`}
                        ></span>
                    ))}
                </div>

                <span className="skin-label">{piel.etiqueta}</span>

                <button
                    className="skin-subtitle-trigger"
                    onClick={() => setModalAbierto(true)}
                >
                    <h3>{piel.nombre}</h3>
                    <span className="skin-subtitle-hint">Ver recomendación ⓘ</span>
                </button>

                <a href="#productos" className="skin-product-button">
                    DESCUBRIR PRODUCTOS
                    <span>→</span>
                </a>

            </div>

                 {/* IMAGEN */}

<div className="skin-showcase-visual">
                <div className="skin-image-aura"></div>
                <div className="skin-image-frame">
                    <img key={piel.imagen} src={piel.imagen} alt={piel.nombre} />
                </div>
            </div>

        </div>

    </div>

         {modalAbierto && (
        <div
            className="skin-modal-overlay"
            onClick={() => setModalAbierto(false)}
        >
            <div className="skin-modal" onClick={(e) => e.stopPropagation()}>

                <button
                    className="skin-modal-close"
                    onClick={() => setModalAbierto(false)}
                    aria-label="Cerrar"
                >
                    ×
                </button>

                <span className="skin-label">{piel.etiqueta}</span>
                <h3>{piel.nombre}</h3>
                <p>{piel.descripcion}</p>

                <a
                    href="#productos"
                    className="skin-product-button on-light"
                    onClick={() => setModalAbierto(false)}
                >
                    DESCUBRIR PRODUCTOS
                    <span>→</span>
                </a>

            </div>
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