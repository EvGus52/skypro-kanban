import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { fetchTaskById } from "../services/Api";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCard = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Токен не найден");
          return;
        }

        const data = await fetchTaskById({ token, id });
        setCardData(data);
      } catch (err) {
        console.error("Ошибка загрузки карточки:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadCard();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="wrapper" style={{ padding: 24, textAlign: "center" }}>
        <h2>Загрузка карточки...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="wrapper" style={{ padding: 24 }}>
        <h2>Ошибка загрузки</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Вернуться на главную</button>
      </div>
    );
  }

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
      {cardData.description && <p>Описание: {cardData.description}</p>}
      <button onClick={() => navigate(`/card/${id}/browse`)}>
        Открыть в модальном окне
      </button>
      <Outlet />
    </div>
  );
};

export default CardPage;
