const columnas = [
  { titulo: 'COMPRAR', links: ['Productos', 'Marcas', 'Tipos de piel', 'Ofertas'] },
  { titulo: 'AYUDA', links: ['Preguntas frecuentes', 'Envíos y devoluciones', 'Métodos de pago', 'Contacto'] },
  { titulo: 'SEOUL GLOW', links: ['Nuestra historia', 'Tips & Rutina', 'Sostenibilidad', 'Blog'] },
];

const Footer = () => {
  const gruposFooter = columnas.map((col) => (
    <div key={col.titulo}>
      <h5>{col.titulo}</h5>
      <ul>
        {col.links.map((link) => <li key={link}>{link}</li>)}
      </ul>
    </div>
  ));

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">🌸 SEOUL GLOW</div>
            <p>Korean skincare seleccionado para ayudarte a construir una rutina que realmente disfrutes.</p>
            <div className="socials">
              <a href="#"><img src="/Img/instagram.png" alt="Instagram" /></a>
              <a href="#"><img src="/Img/logotipo-de-twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="/Img/facebook (1).png" alt="Facebook" /></a>
            </div>
          </div>
          {gruposFooter}
        </div>

        <div className="foot-bottom">
          <span>© 2026 Seoul Glow. Todos los derechos reservados.</span>
          <span>Visa · Yape · Plin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;