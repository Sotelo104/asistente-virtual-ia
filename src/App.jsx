import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Componente principal de la aplicación.
// Controla el estado de autenticación del usuario.
function App() {
  const [user, setUser] = useState(null);

  // Guarda los datos del usuario cuando inicia sesión.
  const handleLogin = (name) => {
    setUser({
      name: name,
    });
  };

  // Cierra la sesión y retorna al formulario de ingreso.
  const handleLogout = () => {
    setUser(null);
  };

  // Si no existe un usuario autenticado, se muestra el Login.
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Si existe un usuario, se muestra el componente principal.
  return (
    <Home
      user={user}
      onLogout={handleLogout}
    />
  );
}

export default App;