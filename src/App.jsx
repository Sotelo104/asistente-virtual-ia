import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (name) => {
    setUser({
      name: name,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Home
      user={user}
      onLogout={handleLogout}
    />
  );
}

export default App;