import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { getAIResponse } from "../services/aiService";

function Chat({ conversation, onMessagesChange }) {
  const [messages, setMessages] = useState(
    conversation.messages
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateMessages = (newMessages) => {
    setMessages(newMessages);

    onMessagesChange(
      conversation.id,
      newMessages
    );
  };

  const handleSendMessage = async (text) => {
    setError("");

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
    };

    const messagesWithUser = [
      ...messages,
      userMessage,
    ];

    updateMessages(messagesWithUser);

    setLoading(true);

    try {
      const response = await getAIResponse(text);

      const assistantMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        text: response,
      };

      const messagesWithAssistant = [
        ...messagesWithUser,
        assistantMessage,
      ];

      updateMessages(messagesWithAssistant);
    } catch {
      setError(
        "No fue posible obtener una respuesta."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="chat-container">

      <div className="chat-header">
        <h2>{conversation.title}</h2>

        <p>
          Escribe una pregunta para comenzar una
          conversación.
        </p>
      </div>

      <div className="messages">

        {messages.map((message) => (
          <Message
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))}

        {loading && <Loading />}

        {error && (
          <ErrorMessage message={error} />
        )}

      </div>

      <ChatInput
        onSendMessage={handleSendMessage}
      />

    </section>
  );
}

export default Chat;