import { useState } from "react";

function Carrito() {

    const [items, setItems] = useState([
        {
            id: 1,
            marca: "COSRX",
            nombre: "Advanced Snail 96 Mucin Power Essence",
            imagen: "/Img/COSRX LIMPIADOR 2.jfif.jpeg",
            precio: 79.90,
            cantidad: 1,
        },
        {
            id: 2,
            marca: "ANUA",
            nombre: "Heartleaf 77% Soothing Toner",
            imagen: "/Img/ANUA TONICO.jpg",
            precio: 89.90,
            cantidad: 2,
        },
        {
            id: 3,
            marca: "SKIN1004",
            nombre: "Madagascar Centella Ampoule",
            imagen: "/Img/Madagascar Centella Tone Brightening Ampolla de cápsulas.png",
            precio: 99.90,
            cantidad: 1,
        },
    ]);

    /* =========================================================
       CANTIDAD
       ========================================================= */

    const aumentarCantidad = (id) => {
        setItems((actual) =>
            actual.map((item) =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const disminuirCantidad = (id) => {
        setItems((actual) =>
            actual.map((item) =>
                item.id === id && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const eliminarItem = (id) => {
        setItems((actual) => actual.filter((item) => item.id !== id));
    };

    /* =========================================================
       TOTALES
       ========================================================= */

    const subtotal = items.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

    const envio = subtotal >= 150 || subtotal === 0 ? 0 : 12.90;
    const total = subtotal + envio;
    const cantidadTotal = items.reduce((sum, item) => sum + item.cantidad, 0);

    return (
        <div className="cart-page">

            {/* CABECERA */}
            <div className="cart-header wrap">

                <div>
                    <span className="cart-breadcrumb">
                        Inicio <span className="sep">/</span> Carrito
                    </span>

                    <h1>
                        Tu <em>carrito</em>
                    </h1>

                    <p>
                        {items.length > 0
                            ? `Tienes ${cantidadTotal} ${cantidadTotal === 1 ? "producto" : "productos"} listos para el siguiente paso.`
                            : "Todavía no agregaste productos."}
                    </p>
                </div>

            </div>


            {items.length === 0 ? (

                /* =====================================================
                   ESTADO VACÍO
                   ===================================================== */

                <div className="cart-empty wrap">
                    <span className="cart-empty-icon">🛍️</span>
                    <h2>Tu carrito está vacío</h2>
                    <p>Explora nuestro catálogo y encuentra tu próximo favorito coreano.</p>
                    <a href="#productos" className="cta-btn">
                        VER PRODUCTOS
                        <span>→</span>
                    </a>
                </div>

            ) : (

                /* =====================================================
                   CARRITO CON PRODUCTOS
                   ===================================================== */

                <div className="cart-layout wrap">

                    {/* LISTA DE PRODUCTOS */}
                    <div className="cart-items">

                        {items.map((item) => (

                            <div className="cart-item" key={item.id}>

                                <div className="cart-item-image">
                                    <img src={item.imagen} alt={item.nombre} />
                                </div>

                                <div className="cart-item-info">
                                    <span className="brand">{item.marca}</span>
                                    <h3>{item.nombre}</h3>

                                    <button
                                        className="cart-item-remove"
                                        onClick={() => eliminarItem(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>

                                <div className="cart-item-qty">
                                    <button
                                        onClick={() => disminuirCantidad(item.id)}
                                        aria-label="Disminuir cantidad"
                                    >
                                        −
                                    </button>

                                    <span>{item.cantidad}</span>

                                    <button
                                        onClick={() => aumentarCantidad(item.id)}
                                        aria-label="Aumentar cantidad"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="cart-item-price">
                                    S/ {(item.precio * item.cantidad).toFixed(2)}
                                </div>

                            </div>

                        ))}

                    </div>


                    {/* RESUMEN */}
                    <div className="cart-summary">

                        <h3>Resumen del pedido</h3>

                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>S/ {subtotal.toFixed(2)}</span>
                        </div>

                        <div className="cart-summary-row">
                            <span>Envío</span>
                            <span>
                                {envio === 0 ? "Gratis" : `S/ ${envio.toFixed(2)}`}
                            </span>
                        </div>

                        {envio > 0 && (
                            <p className="cart-shipping-hint">
                                Te faltan S/ {(150 - subtotal).toFixed(2)} para envío gratis.
                            </p>
                        )}

                        <div className="cart-summary-total">
                            <span>Total</span>
                            <span>S/ {total.toFixed(2)}</span>
                        </div>

                        <button className="cta-btn block">
                            FINALIZAR COMPRA
                            <span>→</span>
                        </button>

                        <a href="#" className="cart-continue">
                            Seguir comprando
                        </a>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Carrito;