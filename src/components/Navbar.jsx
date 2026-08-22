import UserProfile from "./UserProfile";

function Navbar({ user, onLogout }) {
  return (
    <header className="navbar">

      <div className="navbar-brand">
        <h2>Asistente Virtual IA</h2>
      </div>

      <div className="navbar-user">

        <UserProfile
          name={user.name}
        />

        <button onClick={onLogout}>
          Cerrar sesión
        </button>

      </div>

    </header>
  );
}

export default Navbar;