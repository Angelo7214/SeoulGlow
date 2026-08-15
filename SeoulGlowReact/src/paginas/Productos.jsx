import { useState } from 'react';

const productos = [
    { id: 1, marca: 'ANUA', nombre: 'Anua Heartleaf 77% Soothing Toner', categoria: 'tonicos', piel: 'mixta', precio: 89.90, antes: 112.38, descuento: 20, imagen: 'ANUA TONICO.jpg' },
    { id: 2, marca: 'BEAUTY OF JOSEON', nombre: 'Tónico Glow Replenishing Rice Milk', categoria: 'tonicos', piel: 'normal', precio: 42.00, imagen: 'BEAUTY OF JOSEON TONICO.png' },
    { id: 3, marca: 'COSRX', nombre: 'Cosrx Aloe Soothing Sun Cream Protector Solar', categoria: 'protectores', piel: 'normal', precio: 57.00, imagen: 'COSRX PROTECTR SOLAR 2.jfif.jpeg' },
    { id: 4, marca: 'ANUA', nombre: 'Anua Niacinamide 10% + TXA 4% Serum', categoria: 'serums', piel: 'todas', precio: 90.90, antes: 113.62, descuento: 20, imagen: 'ANUA SERUM ANTOMANCHA.jpeg' },
    { id: 5, marca: 'BEAUTY OF JOSEON', nombre: 'Beauty of Joseon Glow Deep Serum Rice + Alpha-Arbutin', categoria: 'serums', piel: 'todas', precio: 79.90, imagen: 'BEAUTY OF JOSEON SERUM DESPIGMENTANTE.jpeg' },
    { id: 6, marca: 'SKIN1004', nombre: 'Madagascar Centella Hyalu-Cica Blue Serum', categoria: 'serums', piel: 'sensible', precio: 84.90, imagen: 'Beauty of Joseon, Suero calmante.png' },
    { id: 7, marca: 'ANUA', nombre: 'Anua Protector Solar Entero', categoria: 'protectores', piel: 'grasa', precio: 65.00, antes: 72.00, descuento: 10, imagen: 'ANUA PROTECTOR SOLAR ENTERO.jpeg' },
    { id: 8, marca: 'BEAUTY OF JOSEON', nombre: 'Beauty of Joseon Relief Sun: Rice + Probiotics', categoria: 'protectores', piel: 'sensible', precio: 68.00, imagen: 'BEAUTY OF JOSEON RELIEF SUN  RICE + PROBIOTICS.png' },
];

const tiposPiel = ['normal', 'seca', 'grasa', 'mixta', 'sensible', 'madura'];
const categorias = [
    { valor: 'limpiadores', label: 'Limpiadores' },
    { valor: 'tonicos', label: 'Tónicos' },
    { valor: 'serums', label: 'Sérums' },
    { valor: 'contorno', label: 'Contorno de ojos' },
    { valor: 'protectores', label: 'Protectores solares' },
    { valor: 'cremas', label: 'Cremas hidratantes' },
];

const TarjetaProducto = ({ p }) => (
    <div className="catalog-card">
        <div className="card-image">
            {p.descuento && <span className="discount">-{p.descuento}%</span>}
            <img src={`/Img/${p.imagen}`} alt={p.nombre} />
        </div>
        <div className="card-body">
            <span className="brand">{p.marca}</span>
            <h3>{p.nombre}</h3>
            <div className="tags"><span>{p.piel === 'todas' ? 'Todo tipo de piel' : `Piel ${p.piel}`}</span></div>
            <div className="price-row">
                <strong>S/{p.precio.toFixed(2)}</strong>
                {p.antes && <del>S/{p.antes.toFixed(2)}</del>}
            </div>
            <button className="btn-cart">Añadir al carrito</button>
        </div>
    </div>
);

const Productos = () => {
    const [filtroPiel, setFiltroPiel] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [precioMax, setPrecioMax] = useState(300);
    const [orden, setOrden] = useState('vendidos');
    const [mostrarFiltros, setMostrarFiltros] = useState(true);

    const alternarPiel = (valor) => {
        if (filtroPiel.includes(valor)) {
            setFiltroPiel(filtroPiel.filter((v) => v !== valor));
        } else {
            setFiltroPiel([...filtroPiel, valor]);
        }
    };

    const alternarCategoria = (valor) => {
        if (filtroCategoria.includes(valor)) {
            setFiltroCategoria(filtroCategoria.filter((v) => v !== valor));
        } else {
            setFiltroCategoria([...filtroCategoria, valor]);
        }
    };

    let productosFiltrados = productos.filter((p) => {
        const pasaPiel = filtroPiel.length === 0 || filtroPiel.includes(p.piel) || p.piel === 'todas';
        const pasaCategoria = filtroCategoria.length === 0 || filtroCategoria.includes(p.categoria);
        const pasaPrecio = p.precio <= precioMax;
        return pasaPiel && pasaCategoria && pasaPrecio;
    });

    if (orden === 'menor') productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio);
    if (orden === 'mayor') productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio);

    return (
        <section className="catalog-page">
            <div className="wrap">

                <div className="catalog-breadcrumb">
                    <a href="#">Inicio</a>
                    <span>›</span>
                    <a href="#">Productos</a>
                    <span>›</span>
                    <strong>Catálogo</strong>
                </div>

                <div className="catalog-header">
                    <div>
                        <h1>Catálogo de productos</h1>
                        <p>Encuentra el mejor skincare coreano para tu tipo de piel.</p>
                    </div>
                    <div className="catalog-badge">
                        <span>🎁</span>
                        <div><strong>Envío gratis</strong><small>En compras mayores a S/149</small></div>
                    </div>
                </div>

                <div className="catalog-layout">

                    <aside className="catalog-sidebar">
                        <button className="btn-filter" onClick={() => setMostrarFiltros(!mostrarFiltros)}>
                            {mostrarFiltros ? 'Ocultar filtros' : 'Mostrar filtros'}
                        </button>

                        {mostrarFiltros && (
                            <>
                                <div className="filter-group">
                                    <h4>Tipo de piel</h4>
                                    {tiposPiel.map((tipo) => (
                                        <label key={tipo}>
                                            <input type="checkbox" checked={filtroPiel.includes(tipo)} onChange={() => alternarPiel(tipo)} />
                                            Piel {tipo}
                                        </label>
                                    ))}
                                </div>

                                <div className="filter-group">
                                    <h4>Categoría</h4>
                                    {categorias.map((cat) => (
                                        <label key={cat.valor}>
                                            <input type="checkbox" checked={filtroCategoria.includes(cat.valor)} onChange={() => alternarCategoria(cat.valor)} />
                                            {cat.label}
                                        </label>
                                    ))}
                                </div>

                                <div className="filter-group">
                                    <h4>Rango de precio</h4>
                                    <input type="range" min="0" max="300" value={precioMax} onChange={(e) => setPrecioMax(Number(e.target.value))} />
                                    <div className="price-range">
                                        <span>S/0</span>
                                        <span>{precioMax >= 300 ? 'S/300+' : `S/${precioMax}`}</span>
                                    </div>
                                </div>

                                <button className="btn-apply">Aplicar filtros</button>
                            </>
                        )}
                    </aside>

                    <div className="catalog-content">
                        <div className="catalog-toolbar">
                            <div className="toolbar-left">
                                <label>Ordenar por:</label>
                                <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                                    <option value="vendidos">Más vendidos</option>
                                    <option value="menor">Precio: menor a mayor</option>
                                    <option value="mayor">Precio: mayor a menor</option>
                                </select>
                            </div>
                            <div className="toolbar-right">
                                Mostrando {productosFiltrados.length} de {productos.length} productos
                            </div>
                        </div>

                        <div className="catalog-grid">
                            {productosFiltrados.map((p) => <TarjetaProducto key={p.id} p={p} />)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Productos;