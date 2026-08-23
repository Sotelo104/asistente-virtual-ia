// Indicador visual mostrado mientras se procesa una respuesta.
function Loading() {
  return (
    <div className="message assistant">
      <div className="message-content loading-message">
        <strong>Asistente</strong>

        <p>Escribiendo...</p>
      </div>
    </div>
  );
}

export default Loading;