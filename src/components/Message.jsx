function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        <strong>
          {sender === "assistant" ? "Asistente" : "Usuario"}
        </strong>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;