import React from "react";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

// Страница добавления новой задачи.
// Сейчас используется как компонент-обёртка для существующего попапа.
// Маршрут к этой странице не подключён (сохраняем 6 доступных путей),
// попап по-прежнему открывается через hash (#popNewCard).
const NewCardPage = () => {
  return <PopNewCard />;
};

export default NewCardPage;
