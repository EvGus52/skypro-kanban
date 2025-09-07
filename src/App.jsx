import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskContextProvider";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <GlobalStyles />
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
