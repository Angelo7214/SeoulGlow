import React, { useState } from "react";

// ===== Arreglos de datos (antes contenido repetido a mano en el HTML) =====

const tabs = [
    { id: "historia", label: "Historia" },
    { id: "mision", label: "Misión, Visión y Metas" },
    { id: "valores", label: "Valores" },
    { id: "proceso", label: "Proceso de Fabricación" },
    { id: "sostenibilidad", label: "Sostenibilidad" },
];

const timeline = [
    {
        year: "2019",
        titulo: "El inicio",
        descripcion:
            "Nace Seoul Glow como una tienda online pequeña, con una selección curada de marcas coreanas poco conocidas en el país.",
        badge: "Fundación",
    },
    {
        year: "2021",
        titulo: "Crecimiento de catálogo",
        descripcion:
            "Sumamos más de 20 marcas coreanas y creamos nuestra primera guía de rutina por tipo de piel.",
        badge: "Expansión",
    },
    {
        year: "2022",
        titulo: "Asesoría personalizada",
        descripcion:
            "Lanzamos la atención 24/7 para acompañar a cada clienta a encontrar su rutina ideal.",
        badge: "Servicio",
    },
    {
        year: "2024",
        titulo: "Seoul Glow hoy",
        descripcion:
            "Más de 40 marcas, envíos a todo el Perú y una comunidad que crece cuidando su piel con nosotras.",
        badge: "Actualidad",
    },
];

const mision = [
    {
        icono: "◎",
        colorBg: "var(--icon-red-bg)",
        color: "var(--icon-red)",
        sub: "Misión",
        titulo: "Lo que hacemos hoy",
        descripcion:
            "Acercar el skincare coreano original a cada persona en el Perú, con asesoría honesta y productos 100% auténticos.",
    },
    {
        icono: "◧",
        colorBg: "var(--icon-blue-bg)",
        color: "var(--icon-blue)",
        sub: "Visión",
        titulo: "Hacia dónde vamos",
        descripcion:
            "Ser la tienda de K-beauty de referencia en el país, reconocida por la confianza de nuestra comunidad.",
    },
    {
        icono: "✎",
        colorBg: "var(--icon-green-bg)",
        color: "var(--icon-green)",
        sub: "Metas",
        titulo: "Nuestros próximos pasos",
        descripcion:
            "Abrir más tiendas físicas, ampliar nuestro catálogo y seguir educando sobre skincare consciente.",
    },
];

const valores = [
    {
        icono: "✿",
        colorBg: "var(--icon-red-bg)",
        color: "var(--icon-red)",
        titulo: "Autenticidad",
        descripcion: "Solo trabajamos con distribuidores oficiales; cada producto es 100% original.",
    },
    {
        icono: "◔",
        colorBg: "var(--icon-blue-bg)",
        color: "var(--icon-blue)",
        titulo: "Cercanía",
        descripcion: "Asesoría real de persona a persona, no respuestas genéricas.",
    },
    {
        icono: "❁",
        colorBg: "var(--icon-green-bg)",
        color: "var(--icon-green)",
        titulo: "Sostenibilidad",
        descripcion: "Buscamos marcas y procesos cada vez más responsables con el planeta.",
    },
    {
        icono: "✦",
        colorBg: "var(--icon-gold-bg)",
        color: "var(--gold)",
        titulo: "Innovación",
        descripcion: "Estamos siempre al día con las tendencias e ingredientes del K-beauty.",
    },
    {
        icono: "✓",
        colorBg: "var(--icon-purple-bg)",
        color: "var(--icon-purple)",
        titulo: "Calidad",
        descripcion: "Seleccionamos cada marca con altos estándares antes de sumarla al catálogo.",
    },
    {
        icono: "◈",
        colorBg: "var(--icon-teal-bg)",
        color: "var(--icon-teal)",
        titulo: "Transparencia",
        descripcion: "Información clara sobre ingredientes, precios y tiempos de entrega.",
    },
];

const proceso = [
    {
        paso: "1",
        titulo: "Selección de marca",
        descripcion: "Evaluamos distribuidores oficiales y verificamos autenticidad antes de sumar un producto.",
    },
    {
        paso: "2",
        titulo: "Control de calidad",
        descripcion: "Revisamos lotes, fechas de vencimiento y condiciones de almacenamiento.",
    },
    {
        paso: "3",
        titulo: "Empaque responsable",
        descripcion: "Usamos materiales reciclados y evitamos plástico innecesario en cada envío.",
    },
    {
        paso: "4",
        titulo: "Entrega a tu puerta",
        descripcion: "Consolidamos rutas de envío a todo el Perú para reducir el impacto de cada pedido.",
    },
];

const sostenibilidad = [
    {
        icono: "♻",
        colorBg: "var(--icon-green-bg)",
        color: "var(--icon-green)",
        titulo: "Envases reciclables",
        sub: "Menos plástico",
        descripcion: "Priorizamos marcas con envases reciclables o rellenables en su línea de productos.",
    },
    {
        icono: "✂",
        colorBg: "var(--icon-purple-bg)",
        color: "var(--icon-purple)",
        titulo: "Cruelty free",
        sub: "Sin pruebas en animales",
        descripcion: "Trabajamos solo con marcas que no testean sus productos en animales.",
    },
    {
        icono: "❀",
        colorBg: "var(--icon-teal-bg)",
        color: "var(--icon-teal)",
        titulo: "Fórmulas veganas",
        sub: "Ingredientes conscientes",
        descripcion: "Cada vez más productos de nuestro catálogo cuentan con fórmulas 100% veganas.",
    },
    {
        icono: "▤",
        colorBg: "var(--icon-blue-bg)",
        color: "var(--icon-blue)",
        titulo: "Envíos optimizados",
        sub: "Menor huella de carbono",
        descripcion: "Consolidamos pedidos y rutas de entrega para reducir el impacto de cada envío.",
    },
    {
        icono: "◫",
        colorBg: "var(--icon-gold-bg)",
        color: "var(--gold)",
        titulo: "Empaques responsables",
        sub: "Menos residuos",
        descripcion: "Usamos materiales reciclados y evitamos plásticos innecesarios en el empaque.",
    },
    {
        icono: "♥",
        colorBg: "var(--icon-red-bg)",
        color: "var(--icon-red)",
        titulo: "Alianzas responsables",
        sub: "Marcas comprometidas",
        descripcion: "Sumamos marcas que comparten nuestro compromiso ambiental y social.",
    },
];

function Nosotros({ setPaginaActual }) {
    const [tabActivo, setTabActivo] = useState("historia");
    const [email, setEmail] = useState("");
    const [suscrito, setSuscrito] = useState(false);

    const irASeccion = (id) => {
        setTabActivo(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleSuscribir = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        console.log("Suscripción newsletter:", email);
        setSuscrito(true);
        setEmail("");
        setTimeout(() => setSuscrito(false), 3000);
    };

    return (
        <>
            <div className="about-crumb">
                <div className="wrap">
                    <a onClick={() => setPaginaActual("home")}>Inicio</a>
                    <span className="sep">/</span>
                    <span className="current">Sobre Nosotros</span>
                </div>
            </div>

            {/* HERO */}
            <section className="about-hero">
                <div className="wrap about-hero-row">
                    <div className="about-hero-text">
                        <span className="about-badge">Sobre nosotros</span>
                        <h1>
                            Belleza coreana auténtica,<em>pensada para tu piel</em>
                        </h1>
                        <p>
                            Somos Seoul Glow: una tienda peruana enamorada del K-beauty que acerca lo mejor del
                            skincare coreano a tu rutina diaria, con productos originales y asesoría real.
                        </p>
                        <div className="about-hero-actions">
                            <a href="#historia" className="cta-btn" onClick={(e) => { e.preventDefault(); irASeccion("historia"); }}>
                                Conoce nuestra historia
                            </a>
                            <a href="#sostenibilidad" className="btn-outline" onClick={(e) => { e.preventDefault(); irASeccion("sostenibilidad"); }}>
                                Nuestro compromiso
                            </a>
                        </div>
                        <div className="about-stats">
                            <div><strong>2019</strong><span>desde que empezamos</span></div>
                            <div><strong>+40</strong><span>marcas coreanas</span></div>
                            <div><strong>100%</strong><span>productos originales</span></div>
                        </div>
                    </div>
                    <div className="about-hero-media">
                        <span className="flower">✿</span>
                        <img src="/Img/Logotipo.jpg" alt="Equipo Seoul Glow" />
                    </div>
                </div>
            </section>

            {/* TABS — generados a partir del arreglo "tabs" */}
            <nav className="about-tabs">
                <div className="wrap about-tabs-row">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${tabActivo === tab.id ? "on" : ""}`}
                            onClick={() => irASeccion(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* HISTORIA — timeline generado a partir del arreglo "timeline" */}
            <section id="historia" className="about-section">
                <div className="wrap">
                    <div className="section-title">
                        <div className="tag">Nuestra historia</div>
                        <h2>De Seúl a tu rutina diaria</h2>
                        <p>Un recorrido guiado por la pasión por el K-beauty y las ganas de compartirlo con el Perú.</p>
                    </div>
                    <div className="timeline">
                        {timeline.map((item) => (
                            <div className="timeline-item" key={item.year}>
                                <div className="timeline-year"><strong>{item.year}</strong></div>
                                <div className="timeline-card">
                                    <div>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descripcion}</p>
                                    </div>
                                    <span className="timeline-badge">{item.badge}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISIÓN / VISIÓN / METAS + VALORES */}
            <section id="mision" className="about-section alt-bg">
                <div className="wrap">
                    <div className="section-title">
                        <div className="tag">Hacia dónde vamos</div>
                        <h2>Misión, Visión y Metas</h2>
                        <p>Los principios que guían cada decisión, desde qué marcas traemos hasta cómo te atendemos.</p>
                    </div>
                    <div className="mission-grid">
                        {mision.map((item) => (
                            <div className="mission-card" key={item.sub}>
                                <div className="mission-icon" style={{ background: item.colorBg, color: item.color }}>
                                    {item.icono}
                                </div>
                                <div className="sub">{item.sub}</div>
                                <h3>{item.titulo}</h3>
                                <p>{item.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    <div className="section-title">
                        <div className="tag">Lo que nos define</div>
                        <h2>Nuestros valores</h2>
                        <p>Cada producto que vendemos y cada consejo que damos pasa por estos filtros.</p>
                    </div>
                    <div id="valores" className="values-grid about-section" style={{ padding: 0, scrollMarginTop: "74px" }}>
                        {valores.map((item) => (
                            <div className="value-card" key={item.titulo}>
                                <div className="value-icon" style={{ background: item.colorBg, color: item.color }}>
                                    {item.icono}
                                </div>
                                <h4>{item.titulo}</h4>
                                <p>{item.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESO DE FABRICACIÓN */}
            <section id="proceso" className="about-section">
                <div className="wrap">
                    <div className="section-title">
                        <div className="tag">Cómo trabajamos</div>
                        <h2>Proceso de Fabricación</h2>
                        <p>Desde la selección de la marca hasta que el producto llega a tu puerta.</p>
                    </div>
                    <div className="process-strip">
                        {proceso.map((item) => (
                            <div className="process-card" key={item.paso}>
                                <span className="process-step">{item.paso}</span>
                                <h4>{item.titulo}</h4>
                                <p>{item.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOSTENIBILIDAD + NEWSLETTER */}
            <section id="sostenibilidad" className="about-section alt-bg">
                <div className="wrap">
                    <div className="section-title">
                        <div className="tag">Nuestro compromiso</div>
                        <h2>Sostenibilidad</h2>
                        <p>Elegimos marcas y prácticas que cuidan tu piel y también el planeta.</p>
                    </div>
                    <div className="sustain-grid">
                        {sostenibilidad.map((item) => (
                            <div className="sustain-card" key={item.titulo}>
                                <div className="sustain-icon" style={{ background: item.colorBg, color: item.color }}>
                                    {item.icono}
                                </div>
                                <h4>{item.titulo}</h4>
                                <div className="sub">{item.sub}</div>
                                <p>{item.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    <div className="about-newsletter">
                        <div>
                            <strong>¡Únete a Seoul Glow!</strong>
                            <p>Recibe novedades, ofertas exclusivas y tips para tu piel.</p>
                        </div>
                        <form onSubmit={handleSuscribir}>
                            <input
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">{suscrito ? "¡Gracias! ✓" : "Suscribirme"}</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Nosotros;