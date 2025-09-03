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

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage loading={loading} setIsAuth={setIsAuth} />}
        />
        <Route path="/card/add" element={<NewCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
      </Route>

      <Route path="/sign-in" element={<SignIn setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUp setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
