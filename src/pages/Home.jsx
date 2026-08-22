import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Home({ user, onLogout }) {
  const initialMessage = {
    id: 1,
    sender: "assistant",
    text: "Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?",
  };

  const [conversations, setConversations] = useState([
    {
      id: 1,
      title: "Conversación 1",
      messages: [initialMessage],
    },
  ]);

  const [activeConversationId, setActiveConversationId] =
    useState(1);

  const activeConversation = conversations.find(
    (conversation) =>
      conversation.id === activeConversationId
  );

  const handleNewChat = () => {
    const newConversation = {
      id: Date.now(),
      title: `Conversación ${
        conversations.length + 1
      }`,
      messages: [
        {
          id: Date.now() + 1,
          sender: "assistant",
          text: "Nueva conversación iniciada. ¿En qué puedo ayudarte?",
        },
      ],
    };

    setConversations((previousConversations) => [
      ...previousConversations,
      newConversation,
    ]);

    setActiveConversationId(newConversation.id);
  };

  const handleSelectConversation = (id) => {
    setActiveConversationId(id);
  };

  const handleMessagesChange = (
  conversationId,
  messages
) => {
  setConversations((previousConversations) =>
    previousConversations.map((conversation) => {

      if (conversation.id !== conversationId) {
        return conversation;
      }

      let updatedTitle = conversation.title;

      const firstUserMessage = messages.find(
        (message) => message.sender === "user"
      );

      if (
        firstUserMessage &&
        conversation.title.startsWith("Conversación")
      ) {
        updatedTitle =
          firstUserMessage.text.length > 30
            ? `${firstUserMessage.text.substring(0, 30)}...`
            : firstUserMessage.text;
      }

      return {
        ...conversation,
        title: updatedTitle,
        messages: messages,
      };
    })
  );
};

  return (
    <div className="app-container">

      <Navbar
  user={user}
  onLogout={onLogout}
/>

      <div className="main-container">

        <Sidebar
          conversations={conversations}
          onNewChat={handleNewChat}
          onSelectConversation={
            handleSelectConversation
          }
        />

        <main className="content">

          {activeConversation && (
            <Chat
              key={activeConversation.id}
              conversation={activeConversation}
              onMessagesChange={handleMessagesChange}
            />
          )}

        </main>

      </div>

    </div>
  );
}

export default Home;