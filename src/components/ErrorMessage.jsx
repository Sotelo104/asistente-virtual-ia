// Componente utilizado para mostrar mensajes de error al usuario.
function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <strong>Error:</strong>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;