import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs";

// Написали обычный реакт-компонент, который принимает всё приложение
// В виде пропса children
const AuthProvider = ({ children }) => {
  // checkLs проверяет лс на наличие ключа user
  const [user, setUser] = useState(checkLs()); // Здесь будет лежать инфа о юзере
  const [isInitialized, setIsInitialized] = useState(false); // Состояние инициализации

  useEffect(() => {
    // А тут мы проверяем ЛС, когда приложение запускается
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
      setUser(null);
    } finally {
      setIsInitialized(true); // Помечаем, что инициализация завершена
    }
  }, []);

  // Обновляем данные о пользователе и сохраняем в лс
  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    // Очищаем токен при выходе
    localStorage.removeItem("token");
    return true;
  };
  // В сам провайдер нужно обязательно прокинуть те значения,
  // которые мы хотим использовать в разных частях приложения
  return (
    <AuthContext.Provider
      value={{ user, login, logout, updateUserInfo, isInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
