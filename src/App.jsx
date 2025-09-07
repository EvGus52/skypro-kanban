import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
