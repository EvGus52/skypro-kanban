import React from "react";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../hooks/useTheme";

const ToastProvider = () => {
  const { isDarkMode } = useTheme();

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={isDarkMode ? "dark" : "light"}
      toastStyle={{
        backgroundColor: isDarkMode ? "#20202C" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
        border: `1px solid ${
          isDarkMode ? "#4E5566" : "rgba(148, 166, 190, 0.4)"
        }`,
        borderRadius: "8px",
        fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
      }}
      progressStyle={{
        background: "#565EEF",
      }}
    />
  );
};

export default ToastProvider;
