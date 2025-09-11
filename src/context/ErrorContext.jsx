import React, { createContext, useContext, useState, useCallback } from "react";
import ErrorNotification from "../components/ErrorNotification/ErrorNotification";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = useCallback((message) => {
    setError(new Error(message));
  }, []);

  const hideError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    error,
    showError,
    hideError,
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
      {error && <ErrorNotification error={error} onClose={hideError} />}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
