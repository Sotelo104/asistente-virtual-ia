function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <strong>Error:</strong>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;