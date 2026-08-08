const iconos = [
    { href: '#tiendas', img: 'tienda.png', label: 'Tiendas' },
    { href: '#cuenta', img: 'usuario.png', label: 'Mi cuenta' },
    { href: '#carrito', img: 'carrito.png', label: 'Carrito', badge: true },
];

const navLinks = [
    { href: '#productos', label: 'PRODUCTOS' },
    { href: '#piel', label: 'TIPOS DE PIEL' },
    { href: '#rutina', label: 'RUTINAS' },
    { href: '#favoritos', label: 'FAVORITOS' },
    { href: '#ofertas', label: 'OFERTAS' },
    { href: '#nosotros', label: 'SOBRE NOSOTROS' },
];

const Header = () => {
    const itemsIconos = iconos.map((item) => (
        <a key={item.label} href={item.href} className="icon-col">
            <img src={`/Img/${item.img}`} alt={item.label} className={item.badge ? 'icono-carrito' : 'icono-header'} />
            {item.badge && <span className="cart-badge">0</span>}
            <span>{item.label}</span>
        </a>
    ));

    const itemsNav = navLinks.map((item) => (
        <a key={item.label} href={item.href}>{item.label}</a>
    ));

    return (
        <>
            <div className="util-bar">
                <span>🌸 Skincare coreano seleccionado para ti</span>
                <span>🚚 Envíos a todo el Perú</span>
                <span>💳 Yape · Plin · Tarjetas</span>
            </div>

            <header className="site">
                <div className="header-row">
                    <a href="#" className="logo">
                        🌸 SEOUL GLOW
                        <small>Korean Skincare</small>
                    </a>

                    <div className="search">
                        <input type="text" placeholder="¿Qué estás buscando?" />
                        <span>⌕</span>
                    </div>

                    <div className="header-icons">{itemsIconos}</div>
                </div>

                <nav className="main">{itemsNav}</nav>
            </header>
        </>
    );
};

export default Header;