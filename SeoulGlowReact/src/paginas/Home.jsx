import { useState } from "react";

function Home() {

    // =========================
    // HERO
    // =========================

    const banners = [
        {
            eyebrow: "Nueva colección",
            title: "Tu mejor piel,",
            highlight: "tu mejor versión.",
            description:
                "Descubre lo mejor del skincare coreano para una piel saludable, hidratada y radiante.",
            button: "DESCUBRIR PRODUCTOS",
            image: "/Img/Banner 2.png"
        },
        {
            eyebrow: "Ritual coreano",
            title: "Construye tu",
            highlight: "rutina perfecta.",
            description:
                "Encuentra productos pensados para las necesidades reales de tu piel.",
            button: "DESCUBRIR MI RUTINA",
            image: "/Img/Banner 1.png"
        },
        {
            eyebrow: "-20% esta semana",
            title: "Tu piel merece",
            highlight: "un poco de glow.",
            description:
                "Descubre favoritos de la comunidad y encuentra nuevas formas de cuidar tu piel.",
            button: "VER OFERTAS",
            image: "/Img/Banner 3.png"
        }
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


    // =========================
    // TIPO DE PIEL
    // =========================

    const tiposPiel = [
        {
            nombre: "Piel Grasa/Mixta",
            imagen: "/Img/Piel mixta.png"
        },
        {
            nombre: "Piel Seca",
            imagen: "/Img/Piel seca.png"
        },
        {
            nombre: "Piel Sensible",
            imagen: "/Img/Piel sensible.png"
        },
        {
            nombre: "Piel Madura",
            imagen: "/Img/Piel madura.png"
        },
        {
            nombre: "Piel con Acné",
            imagen: "/Img/Piel con acne.png"
        },
        {
            nombre: "Piel Normal",
            imagen: "/Img/Piel normal.png"
        }
    ];

    const [pielSeleccionada, setPielSeleccionada] = useState(null);


    // =========================
    // PRODUCTOS
    // =========================

    const productos = [
        {
            id: 1,
            nombre: "Advanced Snail Essence",
            marca: "COSRX",
            precio: 79.90,
            categoria: "Esencia",
            piel: "Piel Seca",
            imagen: "/Img/Banner 1.png",
            favorito: true
        },
        {
            id: 2,
            nombre: "Relief Sun",
            marca: "Beauty of Joseon",
            precio: 89.90,
            categoria: "Protector solar",
            piel: "Piel Sensible",
            imagen: "/Img/Banner 2.png",
            favorito: true
        },
        {
            id: 3,
            nombre: "Heartleaf Toner",
            marca: "Anua",
            precio: 74.90,
            categoria: "Tónico",
            piel: "Piel Grasa/Mixta",
            imagen: "/Img/Banner 3.png",
            favorito: false
        }
    ];

    const productosRecomendados = pielSeleccionada
        ? productos.filter(producto => producto.piel === pielSeleccionada)
        : productos;


    // =========================
    // RUTINA
    // =========================

    const pasosRutina = [
        {
            numero: "01",
            titulo: "Limpia",
            descripcion: "Elimina impurezas sin alterar la barrera de tu piel.",
            icono: "🫧"
        },
        {
            numero: "02",
            titulo: "Prepara",
            descripcion: "Equilibra e hidrata tu piel para recibir los siguientes productos.",
            icono: "💧"
        },
        {
            numero: "03",
            titulo: "Trata",
            descripcion: "Utiliza ingredientes específicos para las necesidades de tu piel.",
            icono: "✨"
        },
        {
            numero: "04",
            titulo: "Hidrata",
            descripcion: "Mantén la hidratación y fortalece la barrera cutánea.",
            icono: "🌸"
        },
        {
            numero: "05",
            titulo: "Protege",
            descripcion: "Finaliza tu rutina con protección solar durante el día.",
            icono: "☀️"
        }
    ];


    // =========================
    // RESEÑAS
    // =========================

    const reseñas = [
        {
            nombre: "Valeria",
            inicial: "V",
            texto:
                "Me encantó poder encontrar productos según mi tipo de piel. La página se siente mucho más personalizada.",
            estrellas: 5
        },
        {
            nombre: "Camila",
            inicial: "C",
            texto:
                "La selección de productos coreanos está muy bien organizada y la experiencia de compra es sencilla.",
            estrellas: 5
        },
        {
            nombre: "Andrea",
            inicial: "A",
            texto:
                "La sección de rutinas me ayudó a entender qué productos necesitaba realmente.",
            estrellas: 5
        }
    ];


    return (
        <div className="seoul-glow-home">

            {/* =========================================
                BARRA SUPERIOR
            ========================================= */}

            <div className="util-bar">
                <span>🌸 Skincare coreano seleccionado para ti</span>
                <span>🚚 Envíos a todo el Perú</span>
                <span>💳 Yape · Plin · Tarjetas</span>
            </div>


            {/* =========================================
                NAVBAR
            ========================================= */}

            <header className="site">

                <div className="header-row">

                    <a href="#" className="logo">
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

                        <a href="#tiendas" className="icon-col">
                            <img
                                src="/Img/tienda.png"
                                alt="Tiendas"
                                className="icono-header"
                            />
                            <span>Tiendas</span>
                        </a>

                        <a href="#cuenta" className="icon-col">
                            <img
                                src="/Img/usuario.png"
                                alt="Cuenta"
                                className="icono-header"
                            />
                            <span>Mi cuenta</span>
                        </a>

                        <a href="#carrito" className="icon-col">
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

                    <a href="#productos">PRODUCTOS</a>
                    <a href="#piel">TIPOS DE PIEL</a>
                    <a href="#rutina">RUTINAS</a>
                    <a href="#favoritos">FAVORITOS</a>
                    <a href="#ofertas">OFERTAS</a>
                    <a href="#nosotros">SOBRE NOSOTROS</a>

                </nav>

            </header>


            {/* =========================================
                HERO
            ========================================= */}

            <section className="hero-carousel">

                <div className="hero-slide">

                    <div className="hero-content">

                        <span className="eyebrow">
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

                        <a href="#piel" className="cta-btn">
                            {banners[bannerActual].button}
                            <span>→</span>
                        </a>

                    </div>


                    <div className="hero-art">

                        <span className="hero-decor hero-decor-1">
                            ✿
                        </span>

                        <span className="hero-decor hero-decor-2">
                            ✦
                        </span>

                        <img
                            src={banners[bannerActual].image}
                            alt="Skincare coreano"
                        />

                    </div>

                </div>


                <button
                    className="hero-nav prev"
                    onClick={anteriorBanner}
                >
                    ‹
                </button>

                <button
                    className="hero-nav next"
                    onClick={siguienteBanner}
                >
                    ›
                </button>


                <div className="hero-dots">

                    {banners.map((_, index) => (

                        <button
                            key={index}
                            className={
                                bannerActual === index
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setBannerActual(index)}
                        />

                    ))}

                </div>

            </section>


            {/* =========================================
                PROPUESTA DE VALOR
            ========================================= */}

            <section className="feature-carousel">

                <div className="feature-slide">
                    <span>🚚</span>
                    <div>
                        <strong>Envíos a todo el Perú</strong>
                        <small>Rápidos y seguros</small>
                    </div>
                </div>

                <div className="feature-slide">
                    <span>✓</span>
                    <div>
                        <strong>Productos originales</strong>
                        <small>Marcas seleccionadas</small>
                    </div>
                </div>

                <div className="feature-slide">
                    <span>🔒</span>
                    <div>
                        <strong>Compra segura</strong>
                        <small>Tus datos protegidos</small>
                    </div>
                </div>

                <div className="feature-slide">
                    <span>💬</span>
                    <div>
                        <strong>Atención personalizada</strong>
                        <small>Estamos para ayudarte</small>
                    </div>
                </div>

            </section>


            {/* =========================================
                DESCUBRE TU TIPO DE PIEL
            ========================================= */}

            <section id="piel" className="skin-section">

                <div className="wrap">

                    <div className="section-title">

                        <span className="tag">
                            ✿ DESCUBRE TU RUTINA
                        </span>

                        <h2>
                            ¿Qué necesita realmente
                            <br />
                            <em>tu piel?</em>
                        </h2>

                        <p>
                            Selecciona tu tipo de piel y descubre
                            productos que pueden formar parte de
                            tu rutina.
                        </p>

                    </div>


                    <div className="skin-grid">

                        {tiposPiel.map((tipo) => (

                            <button
                                key={tipo.nombre}
                                className={
                                    pielSeleccionada === tipo.nombre
                                        ? "skin-card selected"
                                        : "skin-card"
                                }
                                onClick={() =>
                                    setPielSeleccionada(tipo.nombre)
                                }
                            >

                                <div className="skin-avatar">

                                    <img
                                        src={tipo.imagen}
                                        alt={tipo.nombre}
                                    />

                                </div>

                                <span>{tipo.nombre}</span>

                            </button>

                        ))}

                    </div>


                    {pielSeleccionada && (

                        <div className="skin-result">

                            <div>

                                <span className="tag">
                                    RECOMENDADO PARA TI
                                </span>

                                <h3>
                                    Productos para {pielSeleccionada}
                                </h3>

                            </div>

                            <button
                                className="btn-outline"
                                onClick={() => setPielSeleccionada(null)}
                            >
                                Ver todos
                            </button>

                        </div>

                    )}

                </div>

            </section>


            {/* =========================================
                PRODUCTOS
            ========================================= */}

            <section
                id="productos"
                className="products-section"
            >

                <div className="wrap">

                    <div className="prod-header">

                        <div>

                            <span className="tag">
                                LOS MÁS AMADOS 💗
                            </span>

                            <h2>
                                {pielSeleccionada
                                    ? `Favoritos para ${pielSeleccionada}`
                                    : "Descubre tus nuevos favoritos"}
                            </h2>

                        </div>

                        <a href="#">
                            Ver todos →
                        </a>

                    </div>


                    <div className="prod-grid">

                        {productosRecomendados.map((producto) => (

                            <article
                                className="product-card"
                                key={producto.id}
                            >

                                <div className="product-image">

                                    {producto.favorito && (
                                        <span className="favorite">
                                            ♥
                                        </span>
                                    )}

                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />

                                </div>


                                <div className="product-info">

                                    <span className="product-brand">
                                        {producto.marca}
                                    </span>

                                    <h3>
                                        {producto.nombre}
                                    </h3>

                                    <p>
                                        {producto.categoria}
                                    </p>

                                    <strong>
                                        S/ {producto.precio.toFixed(2)}
                                    </strong>

                                    <button className="add-cart">
                                        AGREGAR AL CARRITO
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================
                RUTINA K-BEAUTY
            ========================================= */}

            <section
                id="rutina"
                className="routine-section"
            >

                <div className="wrap">

                    <div className="routine-heading">

                        <span className="tag">
                            EL RITUAL COREANO
                        </span>

                        <h2>
                            Tu rutina,
                            <br />
                            <em>paso a paso.</em>
                        </h2>

                        <p>
                            El secreto no está en tener cientos
                            de productos. Está en saber cuáles
                            necesita tu piel y cuándo utilizarlos.
                        </p>

                    </div>


                    <div className="routine-grid">

                        {pasosRutina.map((paso) => (

                            <div
                                className="routine-card"
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

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================
                TIENDA
            ========================================= */}

            <section
                id="tiendas"
                className="locator"
            >

                <div>

                    <span className="tag">
                        SEOUL GLOW CERCA DE TI
                    </span>

                    <h2>
                        Tu próximo
                        <br />
                        <em>ritual comienza aquí.</em>
                    </h2>

                    <p>
                        Encuentra nuestra tienda más cercana
                        y descubre tus productos favoritos.
                    </p>

                </div>

                <button className="cta-btn">
                    ENCONTRAR TIENDA →
                </button>

            </section>


            {/* =========================================
                RESEÑAS
            ========================================= */}

            <section
                id="reviews"
                className="reviews-full"
            >

                <div className="wrap">

                    <div className="section-title">

                        <span className="tag">
                            LO QUE DICE NUESTRA COMUNIDAD 💕
                        </span>

                        <h2>
                            Pieles reales.
                            <br />
                            <em>Historias reales.</em>
                        </h2>

                    </div>


                    <div className="review-grid">

                        {reseñas.map((reseña) => (

                            <article
                                className="review-card"
                                key={reseña.nombre}
                            >

                                <div className="review-stars">
                                    {"★".repeat(reseña.estrellas)}
                                </div>

                                <p>
                                    "{reseña.texto}"
                                </p>

                                <div className="review-user">

                                    <span>
                                        {reseña.inicial}
                                    </span>

                                    <strong>
                                        {reseña.nombre}
                                    </strong>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================
                NEWSLETTER
            ========================================= */}

            <section className="newsletter">

                <div className="wrap">

                    <span className="tag">
                        STAY GLOWING ✨
                    </span>

                    <h2>
                        Un poquito de Corea
                        <br />
                        <em>en tu inbox.</em>
                    </h2>

                    <p>
                        Recibe novedades, lanzamientos,
                        descuentos y consejos para cuidar tu piel.
                    </p>

                    <div className="nl-form">

                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                        />

                        <button>
                            QUIERO MI GLOW
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer>

                <div className="wrap">

                    <div className="foot-grid">

                        <div className="foot-brand">

                            <div className="logo">
                                🌸 SEOUL GLOW
                            </div>

                            <p>
                                Korean skincare seleccionado
                                para ayudarte a construir una
                                rutina que realmente disfrutes.
                            </p>

                        </div>


                        <div>
                            <h5>COMPRAR</h5>

                            <ul>
                                <li>Productos</li>
                                <li>Marcas</li>
                                <li>Tipos de piel</li>
                                <li>Ofertas</li>
                            </ul>
                        </div>


                        <div>
                            <h5>AYUDA</h5>

                            <ul>
                                <li>Preguntas frecuentes</li>
                                <li>Envíos y devoluciones</li>
                                <li>Métodos de pago</li>
                                <li>Contacto</li>
                            </ul>
                        </div>


                        <div>
                            <h5>SEOUL GLOW</h5>

                            <ul>
                                <li>Nuestra historia</li>
                                <li>Tips & Rutina</li>
                                <li>Sostenibilidad</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                    </div>


                    <div className="foot-bottom">

                        <span>
                            © 2026 Seoul Glow.
                            Todos los derechos reservados.
                        </span>

                        <span>
                            Visa · Yape · Plin
                        </span>

                    </div>

                </div>

            </footer>

        </div>
    );
}

export default Home;