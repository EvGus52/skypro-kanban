import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CardPage from "../pages/CardPage";
import ExitPage from "../pages/ExitPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NewCardPage from "../pages/NewCardPage";
import PrivateRoute from "../components/PrivateRoute";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем, есть ли токен в localStorage
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage loading={loading} setIsAuth={handleLogout} />}
        >
          <Route path="card/:id/browse" element={<PopBrowse />} />
          <Route path="card/new" element={<PopNewCard />} />
        </Route>
        <Route path="/card/add" element={<NewCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage setIsAuth={handleLogout} />} />
      </Route>

      <Route path="/sign-in" element={<SignIn setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUp setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
