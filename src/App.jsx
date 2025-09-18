import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskContextProvider";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ToastProvider from "./components/ToastProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyles />
          <AppRoutes />
          <ToastProvider />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
