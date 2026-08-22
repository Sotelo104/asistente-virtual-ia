# Asistente Virtual con Inteligencia Artificial

## Descripción

El presente proyecto corresponde al desarrollo de un prototipo de interfaz web para un Asistente Virtual con Inteligencia Artificial. La aplicación permite al usuario iniciar sesión mediante su nombre, interactuar con un asistente virtual, realizar preguntas, recibir respuestas, crear nuevas conversaciones y consultar el historial de conversaciones durante la sesión.

El proyecto fue desarrollado utilizando React y Vite, aplicando una estructura basada en componentes reutilizables y separación de responsabilidades.

## Objetivo

Desarrollar una interfaz web funcional para un asistente virtual que facilite la interacción entre el usuario y un sistema de respuestas automatizadas mediante una interfaz sencilla, organizada y responsive.

## Tecnologías utilizadas

* React
* JavaScript
* Vite
* HTML5
* CSS3
* ESLint
* Node.js
* npm
* Git
* GitHub

## Requisitos

Para ejecutar el proyecto se requiere tener instalado:

* Node.js
* npm
* Un navegador web moderno
* Git, si se desea trabajar con control de versiones

## Instalación

1. Descargar o clonar el repositorio.

2. Abrir una terminal dentro de la carpeta del proyecto.

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

5. Abrir en el navegador la dirección proporcionada por Vite, normalmente:

```text
http://localhost:5173/
```

## Ejecución

Para iniciar el servidor de desarrollo se utiliza:

```bash
npm run dev
```

Para verificar el código mediante ESLint:

```bash
npm run lint
```

Actualmente el proyecto supera la validación de ESLint sin errores ni advertencias.

## Funcionalidades

### Inicio de sesión

El usuario puede ingresar su nombre para acceder al asistente virtual.

La aplicación valida que el campo no se encuentre vacío.

### Asistente virtual

El usuario puede escribir preguntas y enviarlas mediante el campo de entrada del chat.

El sistema procesa la pregunta y muestra una respuesta.

### Respuestas automatizadas

El proyecto cuenta con un servicio independiente denominado `aiService.js`, encargado de procesar determinadas preguntas y generar respuestas de demostración.

Esta estructura permite posteriormente reemplazar el servicio de demostración por una conexión con un servicio real de inteligencia artificial.

### Historial de conversaciones

El usuario puede crear diferentes conversaciones y consultar nuevamente las conversaciones disponibles durante la sesión.

### Nueva conversación

El botón "+ Nueva conversación" permite iniciar una nueva conversación sin cerrar sesión ni regresar a la pantalla de inicio.

### Perfil de usuario

El nombre ingresado durante el inicio de sesión se muestra en el perfil ubicado en la barra superior.

### Indicador de carga

Mientras el asistente procesa una solicitud se muestra un indicador que informa al usuario que el sistema está generando una respuesta.

### Manejo de errores

La aplicación dispone de un componente para mostrar mensajes cuando se presenta un problema durante el procesamiento de una solicitud.

### Diseño responsive

La interfaz adapta su distribución a diferentes tamaños de pantalla, ocultando la barra lateral en dispositivos con menor resolución y reorganizando el campo de entrada.

## Estructura del proyecto

```text
asistente-virtual-ia
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │   ├── Chat.jsx
│   │   ├── ChatHistory.jsx
│   │   ├── ChatInput.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Loading.jsx
│   │   ├── Message.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── UserProfile.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   │
│   ├── services
│   │   └── aiService.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Componentes principales

### App.jsx

Controla el estado principal de autenticación y determina si se muestra la pantalla de inicio de sesión o la aplicación principal.

### Login.jsx

Permite al usuario ingresar su nombre y valida que el campo no esté vacío.

### Home.jsx

Representa la pantalla principal del asistente y administra las conversaciones disponibles.

### Chat.jsx

Controla la visualización y el envío de mensajes, además de gestionar las respuestas del asistente.

### ChatInput.jsx

Permite escribir y enviar preguntas.

### Message.jsx

Representa visualmente los mensajes enviados por el usuario y las respuestas del asistente.

### Sidebar.jsx

Muestra las conversaciones disponibles y permite iniciar una nueva conversación.

### Navbar.jsx

Contiene el nombre del sistema, el perfil del usuario y la opción para cerrar sesión.

### UserProfile.jsx

Muestra la información básica del usuario autenticado.

### Loading.jsx

Muestra el estado de procesamiento mientras se genera una respuesta.

### ErrorMessage.jsx

Muestra mensajes informativos cuando ocurre un error.

### aiService.js

Contiene la lógica utilizada para procesar las preguntas y generar respuestas de demostración.

## Pruebas realizadas

Se realizaron pruebas funcionales de los principales módulos de la aplicación:

| Prueba                          | Resultado |
| ------------------------------- | --------- |
| Validación del inicio de sesión | Aprobada  |
| Inicio de sesión con nombre     | Aprobada  |
| Visualización del perfil        | Aprobada  |
| Envío de mensajes               | Aprobada  |
| Recepción de respuestas         | Aprobada  |
| Nueva conversación              | Aprobada  |
| Creación de historial           | Aprobada  |
| Selección de conversaciones     | Aprobada  |
| Conservación de mensajes        | Aprobada  |
| Indicador de carga              | Aprobada  |
| Cierre de sesión                | Aprobada  |
| Diseño responsive               | Aprobada  |
| Validación mediante ESLint      | Aprobada  |

## Validación del código

El proyecto fue validado mediante ESLint utilizando:

```bash
npm run lint
```

La validación se completó correctamente sin errores ni advertencias.

## Ejecución del proyecto

El proyecto se ejecuta mediante el servidor de desarrollo de Vite:

```bash
npm run dev
```

La aplicación puede ser visualizada desde el navegador utilizando la dirección local proporcionada por Vite.

## Autor

Daniel Camilo Sotelo Pedraza

Proyecto desarrollado como parte del proceso de formación del programa Tecnólogo en Análisis y Desarrollo de Software del SENA.
