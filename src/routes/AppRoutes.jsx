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
import { validateToken } from "../services/Api";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        console.log("🔍 Проверка авторизации:");
        console.log("Token:", token ? "есть" : "нет");
        console.log("User:", user ? "есть" : "нет");

        if (token && user) {
          console.log("🔐 Проверяем валидность токена...");
          // Проверяем валидность токена
          const validation = await validateToken({ token });
          console.log("✅ Результат валидации:", validation);

          if (validation.isValid) {
            console.log("✅ Токен валидный, авторизуем пользователя");
            setIsAuth(true);
          } else {
            console.log("❌ Токен недействителен, очищаем localStorage");
            // Токен недействителен, очищаем localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsAuth(false);
          }
        } else {
          console.log("❌ Нет токена или пользователя, не авторизован");
          setIsAuth(false);
        }
      } catch (error) {
        console.error("💥 Ошибка проверки авторизации:", error);
        // В случае ошибки очищаем данные и считаем пользователя неавторизованным
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuth(false);
      } finally {
        console.log("🏁 Завершение проверки авторизации, loading: false");
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
  };

  console.log("🚀 AppRoutes render: isAuth =", isAuth, "loading =", loading);

  // Показываем загрузку во время проверки авторизации
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
        }}
      >
        Загрузка...
      </div>
    );
  }

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
