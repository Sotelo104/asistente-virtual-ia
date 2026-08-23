// Barra lateral que muestra el historial de conversaciones
// y permite iniciar una nueva conversación.
function Sidebar({
  conversations,
  onNewChat,
  onSelectConversation,
}) {
  return (
    <aside className="sidebar">

      <h3>Conversaciones</h3>

      <button
        className="new-chat"
        onClick={onNewChat}
      >
        + Nueva conversación
      </button>

      <div className="history">

        {conversations.map((conversation) => (
          <p
            key={conversation.id}
            onClick={() =>
              onSelectConversation(
                conversation.id
              )
            }
          >
            {conversation.title}
          </p>
        ))}

      </div>

    </aside>
  );
}

export default Sidebar;