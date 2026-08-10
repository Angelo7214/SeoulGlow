const tiposPiel = [
  { img: 'Piel seca.png', label: 'Piel seca' },
  { img: 'Piel normal.png', label: 'Piel normal' },
  { img: 'Piel mixta.png', label: 'Piel mixta/grasa' },
  { img: 'Piel sensible.png', label: 'Piel sensible' },
  { img: 'Piel madura.png', label: 'Piel madura' },
  { img: 'Piel con acne.png', label: 'Piel acnéica' },
];

const problemasPiel = [
  { img: 'Problemas_piel seca.png', nombre: 'Piel seca', sub: 'Tirantez y descamación', texto: 'Pérdida de agua que causa tirantez, líneas finas visibles y textura áspera al tacto.' },
  { img: 'Problemas_piel grasa.png', nombre: 'Piel grasa', sub: 'Brillo y poros dilatados', texto: 'Exceso de sebo que genera brillo constante, poros visibles y tendencia a puntos negros.' },
  { img: 'Problemas_piel mixta.png', nombre: 'Piel mixta', sub: 'Zona T grasa, mejillas secas', texto: 'Combinación de zonas grasas y secas que necesita productos balanceados por área.' },
  { img: 'Problemas_piel sensible.png', nombre: 'Piel sensible', sub: 'Enrojecimiento y reactividad', texto: 'Reacciona con facilidad a nuevos productos, clima o fricción, mostrando rojeces.' },
  { img: 'Problemas_piel con acne.png', nombre: 'Piel acnéica', sub: 'Granitos e imperfecciones', texto: 'Brotes frecuentes, marcas post-acné y poros obstruidos que requieren cuidado específico.' },
  { img: 'Problemas_piel madura.png', nombre: 'Piel madura', sub: 'Firmeza y elasticidad', texto: 'Pérdida de firmeza, líneas de expresión más marcadas y luminosidad reducida.' },
];

const pasosRutina = [
  { num: '01', titulo: 'Limpiador', texto: 'Elimina impurezas y exceso de grasa sin resecar la piel.', tiempo: '1 min' },
  { num: '02', titulo: 'Tónico', texto: 'Equilibra el pH y prepara la piel para absorber mejor el resto de productos.', tiempo: '30 seg' },
  { num: '03', titulo: 'Sérum', texto: 'Trata necesidades específicas como hidratación, luminosidad o manchas.', tiempo: '1 min' },
  { num: '04', titulo: 'Contorno de ojos', texto: 'Cuida la piel más delgada del rostro, reduce ojeras y líneas finas.', tiempo: '30 seg' },
  { num: '05', titulo: 'Hidratante', texto: 'Sella la hidratación y fortalece la barrera cutánea.', tiempo: '1 min' },
  { num: '06', titulo: 'Protector solar', texto: 'Imprescindible de día: protege contra rayos UV y previene el envejecimiento.', tiempo: '1 min' },
];

const serums = [
  { color: 'dorado', path: 'M12 5V3M9 3.5l1 2M15 3.5l-1 2M9 13h6M12 10v6', circulo: true, nombre: 'Vitamina C', sub: 'Antioxidante y luminosidad', texto: 'Ilumina el tono de la piel, ayuda a unificarlo y protege contra el daño de radicales libres.' },
  { color: 'verde', path: 'M12 2c4 5 7 8.5 7 12a7 7 0 1 1-14 0c0-3.5 3-7 7-12z', nombre: 'Niacinamida', sub: 'Control de poros y sebo', texto: 'Regula la producción de grasa, minimiza la apariencia de los poros y calma el enrojecimiento.' },
  { color: 'azul', path: 'M12 3c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11z', nombre: 'Ácido hialurónico', sub: 'Hidratación profunda', texto: 'Atrae y retiene agua en la piel, dejándola más rellena, suave y con aspecto saludable.' },
  { color: 'morado', path: 'M17 4a5 5 0 0 1 0 10c-2.8 0-5-2.2-5-5', nombre: 'Retinol', sub: 'Renovación celular', texto: 'Acelera la renovación de la piel, suaviza líneas de expresión y mejora la textura general.' },
  { color: 'rojo', path: 'M9 3h6M11 3v5l-5 9a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-5-9V3', nombre: 'Ácido salicílico', sub: 'Exfoliación y limpieza', texto: 'Penetra los poros para disolver el exceso de grasa e impurezas, ideal para piel con acné.' },
  { color: 'verdeazulado', path: 'M9 12h6', nombre: 'Péptidos', sub: 'Firmeza y elasticidad', texto: 'Estimulan la producción de colágeno, ayudando a mantener la piel firme y con elasticidad.' },
];

const tips = [
  { color: 'rojo', img: 'tip1.png', num: '01', etiqueta: 'Rutina', titulo: 'Guía básica para una rutina de skincare coreano', texto: 'Conoce los pasos esenciales para lograr una piel saludable y radiante.', min: '5 min lectura' },
  { color: 'naranja', img: 'tip2.png', num: '02', etiqueta: 'Ingredientes', titulo: 'Ingredientes que tu piel sí necesita', texto: 'Descubre los ingredientes estrella y sus beneficios reales para tu piel.', min: '4 min lectura' },
  { color: 'rosa', img: 'tip3.png', num: '03', etiqueta: 'Rutina', titulo: 'Cómo elegir productos según tu tipo de piel', texto: 'Encuentra los productos ideales para tu piel y mejora tu rutina desde hoy.', min: '3 min lectura' },
  { color: 'amarillo', img: 'tip4.png', num: '04', etiqueta: 'Mitos', titulo: '5 mitos del skincare coreano que debes olvidar', texto: 'Separamos la realidad de la exageración en el K-beauty.', min: '4 min lectura' },
  { color: 'morado', img: 'tip5.png', num: '05', etiqueta: 'Piel sensible', titulo: 'Cómo calmar la piel reactiva paso a paso', texto: 'Rutina mínima para pieles irritadas o en tratamiento. Cuida tu barrera cutánea.', min: '6 min lectura' },
];

const TarjetaReseña = ({ nombre, sub, texto, boton, icono }) => (
  <div className="reseñas-card">
    <div className="reseñas-top">{icono}<div><div className="reseñas-nombre">{nombre}</div><span>{sub}</span></div></div>
    <p className="reseñas-texto">{texto}</p>
    <a href="#" className="ver">{boton} →</a>
  </div>
);

const TarjetaPiel = ({ p }) => (
  <div className="piel-card">
    <div className="circulo-piel"><img src={`/Img/${p.img}`} alt={p.label} /></div>
    <span>{p.label}</span>
  </div>
);

const PasoRutina = ({ p }) => (
  <div className="paso-rutina">
    <span className="paso-num">{p.num}</span>
    <div className="paso-cuerpo"><div><h4>{p.titulo}</h4><p>{p.texto}</p></div><span className="paso-tiempo">{p.tiempo}</span></div>
  </div>
);

const TarjetaTip = ({ t }) => (
  <a href="#" className={`tips-item ${t.color}`}>
    <span className="tips-num">{t.num}</span>
    <div className="tips-img"><img src={`/Img/${t.img}`} alt={t.titulo} /></div>
    <div className="tips-contenido"><span className="tips-etiqueta">{t.etiqueta}</span><h3>{t.titulo}</h3><p>{t.texto}</p></div>
    <span className="tips-tiempo">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
      {t.min}
    </span>
    <span className="tips-flecha">→</span>
  </a>
);

const TipsyRutinas = () => (
  <>
    <p className="ruta">Inicio / <span>Tips & Rutina</span></p>

    <section className="tips-banner">
      <div>
        <span className="etiqueta">Guía completa de skincare coreano</span>
        <h1>Aprende, descubre y arma <em>tu rutina perfecta</em> de skincare</h1>
        <p>Todo lo que necesitas saber sobre tu piel: descubre tu tipo, entiende sus necesidades y arma una rutina coreana paso a paso, con tips de expertos.</p>
        <div className="botones">
          <a href="#paso1" className="cta-btn">Descubre tu tipo de piel</a>
          <a href="#paso3" className="btn-outline">Arma tu rutina</a>
        </div>
        <div className="cifras">
          <div><strong>6</strong><span>Tipos de piel</span></div>
          <div><strong>30+</strong><span>Guías y tips</span></div>
          <div><strong>6 pasos</strong><span>Rutina coreana</span></div>
        </div>
      </div>
    </section>

    <nav className="tabs">
      <a href="#paso1" className="activo">Tipo de piel</a>
      <a href="#paso2">Problemas por piel</a>
      <a href="#paso3">Arma tu rutina</a>
      <a href="#paso4">Cómo funcionan los sérums</a>
      <a href="#paso5">Tips de skincare</a>
    </nav>
    
    <section id="paso1">
      <div className="contenedor">
        <div className="titulo-seccion">
          <div className="tag">PASO 1</div>
          <h2>¿Cómo descubrir mi tipo de piel?</h2>
          <p>Conocer tu tipo de piel es la base de toda buena rutina. Responde un test de 2 minutos o explora cada tipo directamente.</p>
        </div>
        <div className="test-card">
          <div>
            <h3>Test de tipo de piel</h3>
            <p>Un cuestionario rápido que analiza brillo, sensibilidad y textura para recomendarte los productos ideales.</p>
            <div className="pasos-mini">
              <span><b>1</b>Responde 6 preguntas</span>
              <span><b>2</b>Descubre tu tipo</span>
              <span><b>3</b>Recibe tu rutina</span>
            </div>
            <a href="#" className="cta-btn">Iniciar test de piel</a>
          </div>
          <div className="piel-grid">
            {tiposPiel.map((p) => <TarjetaPiel key={p.label} p={p} />)}
          </div>
        </div>
      </div>
    </section>

    <section id="paso2">
      <div className="contenedor">
        <div className="titulo-seccion">
          <div className="tag">PASO 2</div>
          <h2>Problemas por tipo de piel</h2>
          <p>Cada tipo de piel enfrenta retos distintos. Identifica el tuyo y descubre cómo tratarlo.</p>
        </div>
        <div className="reseñas-grid">
          {problemasPiel.map((p) => (
            <TarjetaReseña key={p.nombre} nombre={p.nombre} sub={p.sub} texto={p.texto} boton="Ver soluciones"
              icono={<div className="icono"><img src={`/Img/${p.img}`} alt={p.nombre} /></div>} />
          ))}
        </div>
      </div>
    </section>

    <section id="paso3">
      <div className="contenedor">
        <div className="titulo-seccion">
          <div className="tag">PASO 3</div>
          <h2>Arma tu rutina de skincare</h2>
          <p>El orden importa: aplica tus productos de la textura más ligera a la más pesada. Elige mañana o noche.</p>
        </div>
        <div className="interruptor">
          <a href="#" className="activo">Rutina de día</a>
          <a href="#">Rutina de noche</a>
        </div>
        <div className="linea-tiempo">
          {pasosRutina.map((p) => <PasoRutina key={p.num} p={p} />)}
        </div>
      </div>
    </section>

    <section id="paso4">
      <div className="contenedor">
        <div className="titulo-seccion">
          <div className="tag">PASO 4</div>
          <h2>¿Cómo funcionan los sérums?</h2>
          <p>Los sérums son concentrados de ingredientes activos que atacan necesidades específicas de tu piel. Conoce los más comunes y para qué sirve cada uno.</p>
        </div>
        <div className="reseñas-grid">
          {serums.map((s) => (
            <TarjetaReseña key={s.nombre} nombre={s.nombre} sub={s.sub} texto={s.texto} boton="Ver productos"
              icono={
                <div className={`icono ${s.color}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    {s.circulo && <circle cx="12" cy="13" r="8" />}
                    <path d={s.path} />
                  </svg>
                </div>
              } />
          ))}
        </div>
      </div>
    </section>

    <section id="paso5">
      <div className="contenedor">
        <div className="titulo-seccion">
          <div className="tag">PASO 5</div>
          <h2>Tips de <em>skincare</em></h2>
          <p>Guías, mitos y consejos de expertas para que aproveches al máximo tu rutina coreana.</p>
        </div>
        <div className="tips-filtros">
          <a href="#" className="activo">Todos</a>
          <a href="#">Rutina</a>
          <a href="#">Ingredientes</a>
          <a href="#">Mitos</a>
          <a href="#">Piel sensible</a>
        </div>
        <div className="tips-lista">
          {tips.map((t) => <TarjetaTip key={t.num} t={t} />)}
        </div>
      </div>
    </section>
  </>
);

export default TipsyRutinas;
