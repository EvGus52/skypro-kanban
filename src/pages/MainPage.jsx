import React, { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import Card from "../components/Card/Card";
import PopExit from "../components/popups/PopExit/PopExit";
import { Wrapper } from "../Wrapper.styled";
import { fetchTasks } from "../services/Api.js";

const MainPage = ({ setIsAuth }) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Токен не найден");
        return;
      }

      const data = await fetchTasks({ token });
      console.log("Загружены задачи с сервера:", data);

      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const getCardsByStatus = (status) =>
    tasks.filter((card) => card.status === status);

  return (
    <Wrapper>
      <PopExit setIsAuth={setIsAuth} />
      <Header />

      {/* Отображение состояния загрузки */}
      {loading && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e3f2fd",
            margin: "10px",
            borderRadius: "8px",
            textAlign: "center",
            color: "#1976d2",
          }}
        >
          Загружаем задачи с сервера...
        </div>
      )}

      {error && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffebee",
            margin: "10px",
            borderRadius: "8px",
            textAlign: "center",
            color: "#d32f2f",
          }}
        >
          Ошибка загрузки задач: {error}
        </div>
      )}

      {!loading && !error && (
        <Main>
          <Column title="Без статуса">
            {getCardsByStatus("Без статуса").map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
          <Column title="Нужно сделать">
            {getCardsByStatus("Нужно сделать").map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
          <Column title="В работе">
            {getCardsByStatus("В работе").map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
          <Column title="Тестирование">
            {getCardsByStatus("Тестирование").map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
          <Column title="Готово">
            {getCardsByStatus("Готово").map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Column>
        </Main>
      )}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
