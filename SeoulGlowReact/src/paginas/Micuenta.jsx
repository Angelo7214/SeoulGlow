import { useState } from 'react';

const pedidos = [
    { num: 'SG-10482', productos: '3 productos', fecha: '24 jul. 2026', estado: 'Entregado', clase: 'entregado', total: 189.70 },
    { num: 'SG-10501', productos: '2 productos', fecha: '29 jul. 2026', estado: 'En camino', clase: 'camino', total: 149.80 },
    { num: 'SG-10515', productos: '1 producto', fecha: '1 ago. 2026', estado: 'Procesando', clase: 'procesando', total: 79.90 },
];

const favoritos = [
    { marca: 'ANUA', nombre: 'Heartleaf 77% Soothing Toner', precio: 79.90, antes: 99.90, imagen: 'ANUA TONICO.jpg' },
    { marca: 'COSRX', nombre: 'Advanced Snail 96 Mucin Power Essence', precio: 89.90, antes: 105.90, imagen: 'COSRX TONICO.jpg' },
    { marca: 'BEAUTY OF JOSEON', nombre: 'Relief Sun: Rice + Probiotics SPF50+', precio: 69.90, imagen: 'BEAUTY OF JOSEON RELIEF SUN  RICE + PROBIOTICS.png' },
];

const tabs = [
    { id: 'login', label: 'Iniciar sesión' },
    { id: 'registro', label: 'Registro' },
    { id: 'pedidos', label: 'Mis pedidos' },
    { id: 'favoritos', label: 'Mis favoritos' },
];

const Micuenta = () => {
    const [tab, setTab] = useState('login');

    // ----- INICIAR SESIÓN -----
    const [loginCorreo, setLoginCorreo] = useState('');
    const [loginClave, setLoginClave] = useState('');
    const [recordarme, setRecordarme] = useState(false);
    const [sesionIniciada, setSesionIniciada] = useState(false);

    const actLoginCorreo = (evt) => setLoginCorreo(evt.target.value);
    const actLoginClave = (evt) => setLoginClave(evt.target.value);
    const actRecordarme = (evt) => setRecordarme(evt.target.checked);

    const enviarLogin = (evt) => {
        evt.preventDefault();
        setSesionIniciada(true);
    };

    // ----- REGISTRO -----
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');
    const [acepta, setAcepta] = useState(false);
    const [registroEnviado, setRegistroEnviado] = useState(false);

    const actNombre = (evt) => setNombre(evt.target.value);
    const actCorreo = (evt) => setCorreo(evt.target.value);
    const actClave = (evt) => setClave(evt.target.value);
    const actConfirmarClave = (evt) => setConfirmarClave(evt.target.value);
    const actAcepta = (evt) => setAcepta(evt.target.checked);

    const enviarRegistro = (evt) => {
        evt.preventDefault();
        setRegistroEnviado(true);
    };

    return (
        <>
            <div className="account-banner">
                <h1>Mi cuenta</h1>
                <p>Gestiona tus datos, pedidos y preferencias en un solo lugar.</p>
            </div>

            <div className="wrap account-layout">

                <aside className="account-sidebar">
                    <nav className="account-nav">
                        {tabs.map((t) => (
                            <button
                                key={t.id}
                                className={tab === t.id ? 'account-nav-item on' : 'account-nav-item'}
                                onClick={() => setTab(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                <div className="account-panel">

                    {tab === 'login' && (
                        <div className="account-tabpanel account-tabpanel-split">
                            <div className="account-form-col">
                                <h2>Iniciar sesión</h2>
                                <p className="hint">Ingresa a tu cuenta para ver tus pedidos y favoritos.</p>

                                <form onSubmit={enviarLogin}>
                                    <div className="form-group">
                                        <label htmlFor="loginEmail">Correo electrónico</label>
                                        <input type="email" id="loginEmail" placeholder="nombre@correo.com" value={loginCorreo} onChange={actLoginCorreo} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginClave">Contraseña</label>
                                        <input type="password" id="loginClave" placeholder="········" value={loginClave} onChange={actLoginClave} required />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-check">
                                            <input type="checkbox" checked={recordarme} onChange={actRecordarme} /> Recordarme
                                        </label>
                                        <a href="#">¿Olvidaste tu contraseña?</a>
                                    </div>
                                    <button type="submit" className="cta-btn block">Ingresar</button>
                                    <p className="form-footnote">
                                        ¿Aún no tienes cuenta?{' '}
                                        <button type="button" className="link-btn" onClick={() => setTab('registro')}>Regístrate aquí</button>
                                    </p>
                                </form>

                                {sesionIniciada && (
                                    <div className="account-preview">
                                        <p>Sesión iniciada con: <strong>{loginCorreo}</strong></p>
                                        <p>Recordarme: {recordarme ? 'Sí' : 'No'}</p>
                                    </div>
                                )}
                            </div>

                            <div className="account-visual">
                                <img src="/Img/Imagen_Mi_cuenta1.png" alt="Seoul Glow" />
                                <p>“Skincare coreano seleccionado para una piel saludable y radiante.”</p>
                            </div>
                        </div>
                    )}

                    {tab === 'registro' && (
                        <div className="account-tabpanel account-tabpanel-split">
                            <div className="account-form-col">
                                <h2>Crea tu cuenta</h2>
                                <p className="hint">Regístrate para guardar tus pedidos y favoritos.</p>

                                <form onSubmit={enviarRegistro}>
                                    <div className="form-group">
                                        <label htmlFor="regNombre">Nombre completo</label>
                                        <input type="text" id="regNombre" placeholder="Tu nombre" value={nombre} onChange={actNombre} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regCorreo">Correo electrónico</label>
                                        <input type="email" id="regCorreo" placeholder="nombre@correo.com" value={correo} onChange={actCorreo} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regClave">Contraseña</label>
                                        <input type="password" id="regClave" placeholder="········" value={clave} onChange={actClave} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regClave2">Confirmar contraseña</label>
                                        <input type="password" id="regClave2" placeholder="········" value={confirmarClave} onChange={actConfirmarClave} required />
                                    </div>
                                    <div className="form-row">
                                        <label className="form-check">
                                            <input type="checkbox" checked={acepta} onChange={actAcepta} required /> Acepto los términos y la política de privacidad
                                        </label>
                                    </div>
                                    <button type="submit" className="cta-btn block">Crear cuenta</button>
                                </form>

                                {registroEnviado && (
                                    <div className="account-preview">
                                        <p>Cuenta creada para: <strong>{nombre}</strong></p>
                                        <p>Correo: {correo}</p>
                                        <p>Contraseñas coinciden: {clave !== '' && clave === confirmarClave ? 'Sí' : 'No'}</p>
                                    </div>
                                )}
                            </div>

                            <div className="account-visual">
                                <img src="/Img/Imagen_Mi_cuenta2.png" alt="Seoul Glow" />
                                <p>“Únete a la comunidad Seoul Glow y arma tu rutina perfecta.”</p>
                            </div>
                        </div>
                    )}

                    {tab === 'pedidos' && (
                        <div className="account-tabpanel">
                            <h2>Mis pedidos</h2>
                            <p className="hint">Revisa el estado de tus compras recientes.</p>

                            {pedidos.map((p) => (
                                <div key={p.num} className="order-item">
                                    <div className="order-info">
                                        <strong>Pedido #{p.num}</strong>
                                        <span>{p.productos} · {p.fecha}</span>
                                    </div>
                                    <span className={`order-status ${p.clase}`}>{p.estado}</span>
                                    <span className="order-total">S/ {p.total.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {tab === 'favoritos' && (
                        <div className="account-tabpanel">
                            <h2>Mis favoritos</h2>
                            <p className="hint">Productos que guardaste para más tarde.</p>

                            <div className="favorites-grid">
                                {favoritos.map((f) => (
                                    <div key={f.nombre} className="catalog-card">
                                        <div className="card-image">
                                            <img src={`/Img/${f.imagen}`} alt={f.nombre} />
                                        </div>
                                        <div className="card-body">
                                            <span className="brand">{f.marca}</span>
                                            <h3>{f.nombre}</h3>
                                            <div className="price-row">
                                                <strong>S/{f.precio.toFixed(2)}</strong>
                                                {f.antes && <del>S/{f.antes.toFixed(2)}</del>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Micuenta;