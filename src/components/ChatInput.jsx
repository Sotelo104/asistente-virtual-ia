// Campo de entrada utilizado para escribir y enviar mensajes.
import { useState } from "react";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSendMessage(trimmedMessage);

    setMessage("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Escribe tu pregunta..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button type="submit">
        Enviar
      </button>

    </form>
  );
}

export default ChatInput;