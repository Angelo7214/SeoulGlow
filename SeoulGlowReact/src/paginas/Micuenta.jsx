import { useState } from "react";

function Micuenta() {
    const [modo, setModo] = useState("crear"); // "crear" o "ingresar"
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const [datos, setDatos] = useState({
        nombre: "",
        correo: "",
        password: "",
        confirmarPassword: ""
    });

    const manejarCambio = (campo) => (e) => {
        setDatos({ ...datos, [campo]: e.target.value });
    };

    return (
        <div className="cuenta-page">

            {/* PANEL VISUAL IZQUIERDO */}
            <div className="cuenta-visual">
                <div className="cuenta-visual-overlay" />

                <div className="cuenta-visual-content">

                    <a href="/" className="logo">
                        🌸 SEOUL GLOW
                    </a>

                    <h1>
                        Tu mejor piel,
                        <br />
                        <em>tu mejor versión.</em>
                    </h1>

                    <p>
                        Skincare coreano seleccionado para una
                        piel saludable, hidratada y radiante.
                    </p>

                    <div className="cuenta-stats">

                        <div className="cuenta-stat">
                            <span>🌿</span>
                            <div>
                                <strong>100% Original</strong>
                                <small>Productos certificados</small>
                            </div>
                        </div>

                        <div className="cuenta-stat">
                            <span>💕</span>
                            <div>
                                <strong>+5K</strong>
                                <small>Clientas felices</small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* PANEL DE FORMULARIO DERECHO */}
            <div className="cuenta-form-panel">

                <div className="cuenta-form-header">

                    <span className="tag">
                        {modo === "crear" ? "CREAR CUENTA" : "INICIAR SESIÓN"}
                    </span>

                    <button
                        className="link-btn"
                        onClick={() =>
                            setModo(modo === "crear" ? "ingresar" : "crear")
                        }
                    >
                        {modo === "crear"
                            ? "¿Ya tienes cuenta? Inicia sesión"
                            : "¿Aún no tienes cuenta? Regístrate"}
                    </button>

                </div>

                <h2>
                    {modo === "crear" ? "Crea tu cuenta" : "Bienvenida de nuevo"}
                </h2>

                <p className="cuenta-subtitle">
                    {modo === "crear"
                        ? "Únete a la comunidad Seoul Glow."
                        : "Ingresa para ver tus pedidos y favoritos."}
                </p>

                <form
                    className="cuenta-form"
                    onSubmit={(e) => e.preventDefault()}
                >

                    {modo === "crear" && (
                        <div className="campo">
                            <label>Nombre completo</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                value={datos.nombre}
                                onChange={manejarCambio("nombre")}
                            />
                        </div>
                    )}

                    <div className="campo">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="tu@correo.com"
                            value={datos.correo}
                            onChange={manejarCambio("correo")}
                        />
                    </div>

                    <div className="campo">
                        <label>Contraseña</label>

                        <div className="campo-password">
                            <input
                                type={mostrarPassword ? "text" : "password"}
                                placeholder="Crea una contraseña"
                                value={datos.password}
                                onChange={manejarCambio("password")}
                            />

                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() =>
                                    setMostrarPassword(!mostrarPassword)
                                }
                            >
                                {mostrarPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                    </div>

                    {modo === "crear" && (
                        <div className="campo">
                            <label>Confirmar contraseña</label>
                            <input
                                type={mostrarPassword ? "text" : "password"}
                                placeholder="Confirma tu contraseña"
                                value={datos.confirmarPassword}
                                onChange={manejarCambio("confirmarPassword")}
                            />
                        </div>
                    )}

                    <button type="submit" className="cta-btn cuenta-submit">
                        {modo === "crear" ? "CREAR CUENTA" : "INGRESAR"}
                    </button>

                </form>

                <p className="cuenta-encryption">
                    🔒 Tus datos están protegidos
                </p>

            </div>

        </div>
    );
}

export default Micuenta;