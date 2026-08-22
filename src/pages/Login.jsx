import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Por favor, escribe tu nombre.");
      return;
    }

    setError("");
    onLogin(trimmedName);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Asistente Virtual IA</h1>

        <p>
          Bienvenido. Ingresa tu nombre para comenzar
          a utilizar el asistente.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Ingresar al asistente
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;