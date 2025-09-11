import React, { useState, useEffect } from "react";

const ErrorNotification = ({ error, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);

      // Автоматически закрываем через 5 секунд
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose?.(), 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  if (!error || !isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 10000,
        backgroundColor: "#ffebee",
        border: "1px solid #f44336",
        borderRadius: "8px",
        padding: "16px",
        minWidth: "300px",
        maxWidth: "500px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h3
            style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#d32f2f" }}
          >
            ❌ Ошибка
          </h3>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            {error.message || "Произошла ошибка"}
          </p>
        </div>

        <button
          onClick={handleClose}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#666",
            padding: "0",
            marginLeft: "12px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ErrorNotification;
