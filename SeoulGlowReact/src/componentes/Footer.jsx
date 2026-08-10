function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-wave">
                <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"
                        fill="#3d2029"
                    />
                </svg>
            </div>

            <div className="footer-decoration footer-decoration-one">✦</div>
            <div className="footer-decoration footer-decoration-two">✧</div>
            <div className="footer-decoration footer-decoration-three">🌸</div>

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

                        <div className="footer-socials">
                            <a href="#" aria-label="Instagram">◎</a>
                            <a href="#" aria-label="TikTok">♪</a>
                            <a href="#" aria-label="Facebook">f</a>
                        </div>

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
    );
}
export default Footer;