function UserProfile({ name }) {
  const firstLetter = name
    ? name.charAt(0).toUpperCase()
    : "U";

  return (
    <div className="user-profile">

      <div className="profile-avatar">
        {firstLetter}
      </div>

      <div className="profile-info">
        <strong>{name}</strong>
        <span>Usuario del asistente</span>
      </div>

    </div>
  );
}

export default UserProfile;