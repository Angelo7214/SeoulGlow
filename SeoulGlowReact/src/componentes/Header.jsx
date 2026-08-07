import { useState, useEffect } from 'react';

const mensajesUtil = [
    '💳 Aceptamos pagos con Tarjeta, Yape o Plin',
    '🚚 Envíos a todo el Perú en 24-48h',
    '💬 Atención personalizada 24/7',
];

const iconos = [
    { href: '#locator', img: 'tienda.png', label: 'Tiendas' },
    { href: 'Micuenta.html', img: 'usuario.png', label: 'Iniciar sesión' },
    { href: 'Carrito.html', img: 'carrito.png', label: 'Carrito', badge: true },
];

const navLinks = [
    { href: 'Productos.html', label: 'PRODUCTOS ▾' },
    { href: '#', label: 'MARCAS ▾' },
    { href: '#', label: 'TIPOS DE PIEL ▾' },
    { href: 'TipsyRutina.html', label: 'TIPS & RUTINA' },
];

const Header = () => {
    const [idx, setIdx] = useState(0);
    const [cartCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % mensajesUtil.length), 3500);
        return () => clearInterval(id);
    }, []);

    const slidesUtil = mensajesUtil.map((msg, i) => (
        <div key={msg} className={i === idx ? 'util-slide active' : 'util-slide'}>{msg}</div>
    ));

    const dotsUtil = mensajesUtil.map((msg, i) => (
        <span key={msg} className={i === idx ? 'active' : ''} />
    ));

    const itemsIconos = iconos.map((item) => (
        <a key={item.label} href={item.href} className="icon-col">
            <img src={`/Img/${item.img}`} alt={item.label} className={item.badge ? 'icono-carrito' : 'icono-header'} />
            {item.badge && <span className="cart-badge">{cartCount}</span>}
            <span>{item.label}</span>
        </a>
    ));

    const itemsNav = navLinks.map((item) => (
        <a key={item.label} href={item.href}>{item.label}</a>
    ));

    return (
        <>
            <div className="util-bar">
                <div className="util-track">{slidesUtil}</div>
                <div className="util-dots">{dotsUtil}</div>
            </div>

            <header className="site">
                <div className="header-row">
                    <a href="Home.html" className="logo">
                        🌸 SEOUL GLOW<small>Korean Skincare</small>
                    </a>

                    <div className="search">
                        <input type="text" placeholder="Buscar productos, marcas o tipos de piel..." />
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>

                    <div className="header-icons">{itemsIconos}</div>
                </div>

                <nav className="main">
                    <div className="nav-row">
                        {itemsNav}
                        <div className="nav-highlight">
                            <a href="#" className="on">OFERTAS</a>
                            <a href="#">NOVEDADES</a>
                        </div>
                        <a href="SobreNosotros.html" className="nav-tail">SOBRE NOSOTROS</a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;