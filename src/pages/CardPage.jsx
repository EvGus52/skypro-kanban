import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { cardsList } from "../../data";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Находим карточку по ID
  const cardData = cardsList.find((card) => card.id === parseInt(id));

  // Если карточка не найдена, показываем сообщение об ошибке
  if (!cardData) {
    return (
      <div className="wrapper" style={{ padding: 24 }}>
        <h2>Карточка не найдена</h2>
        <p>Карточка с ID {id} не существует.</p>
        <button onClick={() => navigate("/")}>Вернуться на главную</button>
      </div>
    );
  }

  return (
    <div className="wrapper" style={{ padding: 24 }}>
      <h2>Карточка: {id}</h2>
      <p>Название: {cardData.title}</p>
      <p>Тема: {cardData.topic}</p>
      <p>Статус: {cardData.status}</p>
      <p>Дата: {cardData.date}</p>
      <button onClick={() => navigate(`/card/${id}/browse`)}>
        Открыть в модальном окне
      </button>
      <Outlet />
    </div>
  );
};

export default CardPage;
