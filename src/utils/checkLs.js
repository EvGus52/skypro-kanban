// Функция для проверки localStorage на наличие данных пользователя
export const checkLs = () => {
  try {
    const userInfo = localStorage.getItem("user");
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Ошибка при чтении данных из localStorage:", error);
    return null;
  }
};
