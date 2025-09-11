import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Ошибка в приложении:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "20px",
            margin: "20px",
            backgroundColor: "#ffebee",
            border: "1px solid #f44336",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d32f2f", marginBottom: "16px" }}>
            ❌ Произошла ошибка
          </h2>
          <p style={{ color: "#666", marginBottom: "16px" }}>
            Что-то пошло не так. Попробуйте обновить страницу.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Обновить страницу
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
