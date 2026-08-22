const responses = [
  {
    keywords: ["hola", "buenas", "hey"],
    response:
      "Hola. Soy tu asistente virtual con inteligencia artificial. ¿En qué puedo ayudarte?",
  },

  {
    keywords: ["inteligencia artificial", "ia", "artificial"],
    response:
      "La inteligencia artificial es una tecnología que permite a los sistemas informáticos realizar tareas que normalmente requieren capacidades humanas, como comprender información, analizar datos y generar respuestas.",
  },

  {
    keywords: ["software", "programación", "programar"],
    response:
      "El desarrollo de software es el proceso de diseñar, construir, probar y mantener aplicaciones y sistemas informáticos.",
  },

  {
    keywords: ["sena"],
    response:
      "El SENA es una institución colombiana que ofrece formación profesional integral y contribuye al desarrollo social y económico del país.",
  },
];

export const getAIResponse = async (question) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const normalizedQuestion = question.toLowerCase();

  const foundResponse = responses.find((item) =>
    item.keywords.some((keyword) =>
      normalizedQuestion.includes(keyword)
    )
  );

  if (foundResponse) {
    return foundResponse.response;
  }

  return "Interesante pregunta. Actualmente estoy funcionando en modo de demostración. Mi sistema puede ampliarse posteriormente para conectarse con un servicio real de inteligencia artificial.";
};