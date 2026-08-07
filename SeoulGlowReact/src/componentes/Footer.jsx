import { useState, useRef, useEffect } from 'react';

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [mensajes]);

  const openChat = (fromPrivacy = false) => {
    setChatOpen(true);
    if (!chatStarted) {
      setMensajes((m) => [...m, { from: 'bot', text: '¡Hola! Soy el asistente de Seoul Glow 🌸 ¿En qué puedo ayudarte?' }]);
      setChatStarted(true);
    }
    if (fromPrivacy) {
      setMensajes((m) => [...m, { from: 'bot', text: 'Veo que querías ver nuestra Política de Privacidad. Protegemos tus datos y solo los usamos para procesar tus pedidos. ¿Quieres saber algo específico (datos, pagos, cookies)?' }]);
    }
  };

  const closeChat = () => setChatOpen(false);

  const sendChat = () => {
    const val = input.trim();
    if (!val) return;
    setMensajes((m) => [...m, { from: 'user', text: val }]);
    setInput('');
    setTimeout(() => {
      setMensajes((m) => [...m, { from: 'bot', text: 'Gracias por tu mensaje. Un asesor revisará esto — mientras tanto, ¿quieres ver nuestras ofertas del día?' }]);
    }, 600);
  };

  const columnas = [
    { titulo: 'COMPRAR', links: ['Productos', 'Marcas', 'Tipos de piel', 'Ofertas'] },
    { titulo: 'AYUDA', links: ['Preguntas frecuentes', 'Envíos y devoluciones', 'Métodos de pago', 'Términos y condiciones'] },
    { titulo: 'SOBRE NOSOTROS', links: ['Nuestra historia', 'Misión, visión y valores', 'Sostenibilidad', 'Blog'] },
    { titulo: 'MI CUENTA', links: ['Iniciar sesión', 'Mis pedidos', 'Mis favoritos', 'Direcciones'] },
  ];

  const gruposFooter = columnas.map((col) => (
    <div key={col.titulo}>
      <h5>{col.titulo}</h5>
      <ul>
        {col.links.map((link) => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
        {col.titulo === 'AYUDA' && (
          <li>
            <a href="#" className="privacy-link" onClick={(e) => { e.preventDefault(); openChat(true); }}>
              Políticas de privacidad
            </a>
          </li>
        )}
      </ul>
    </div>
  ));

  const mensajesChat = mensajes.map((m, i) => (
    <div key={i} className={`msg ${m.from}`}>{m.text}</div>
  ));

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo" style={{ fontSize: 19 }}>🌸 SEOUL GLOW</div>
              <p>Lo mejor del skincare coreano para una piel saludable y radiante.</p>
              <div className="socials">
                <a href="#"><img src="/Img/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="/Img/logotipo-de-twitter.png" alt="Twitter" /></a>
                <a href="#"><img src="/Img/facebook (1).png" alt="Facebook" /></a>
              </div>
            </div>
            {gruposFooter}
          </div>

          <div className="foot-bottom">
            <span>© 2024 Seoul Glow. Todos los derechos reservados.</span>
            <div className="payment-icons">
              <img src="/Img/visa.png" alt="Visa" />
              <img src="/Img/yape-app-seeklogo.png" alt="Yape" />
              <img src="/Img/plin-seeklogo.png" alt="Plin" />
            </div>
          </div>
        </div>
      </footer>

      <button className="chat-fab" onClick={() => openChat(false)}>💬</button>
      <div className={chatOpen ? 'chat-panel open' : 'chat-panel'}>
        <div className="chat-head">
          <div><strong>Asistente Seoul Glow</strong><br /><span>Normalmente responde al instante</span></div>
          <button onClick={closeChat}>×</button>
        </div>
        <div className="chat-body" ref={chatBodyRef}>{mensajesChat}</div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendChat()}
          />
          <button onClick={sendChat}>➤</button>
        </div>
      </div>
    </>
  );
};

export default Footer;