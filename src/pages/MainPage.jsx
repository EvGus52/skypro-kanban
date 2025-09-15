import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import Card from "../components/Card/Card";
import CardLoader from "../components/CardLoader";
import PopExit from "../components/popups/PopExit/PopExit";
import { Wrapper } from "../Wrapper.styled";
import { TaskContext } from "../context/TaskContext";

const MainPage = () => {
  const { tasks, loading, error } = useContext(TaskContext);

  const getCardsByStatus = (status) =>
    tasks.filter((card) => card.status === status);

  // Функция для отображения скелетонов загрузки
  const renderSkeletonCards = (count = 3) => {
    return Array.from({ length: count }, (_, index) => (
      <CardLoader key={`skeleton-${index}`} />
    ));
  };

  return (
    <Wrapper>
      <PopExit />
      <Header />

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

      <Main>
        <Column title="Без статуса">
          {loading
            ? renderSkeletonCards(5)
            : getCardsByStatus("Без статуса").map((card) => (
                <Card key={card.id} card={card} />
              ))}
        </Column>
        <Column title="Нужно сделать">
          {loading
            ? renderSkeletonCards(1)
            : getCardsByStatus("Нужно сделать").map((card) => (
                <Card key={card.id} card={card} />
              ))}
        </Column>
        <Column title="В работе">
          {loading
            ? renderSkeletonCards(3)
            : getCardsByStatus("В работе").map((card) => (
                <Card key={card.id} card={card} />
              ))}
        </Column>
        <Column title="Тестирование">
          {loading
            ? renderSkeletonCards(1)
            : getCardsByStatus("Тестирование").map((card) => (
                <Card key={card.id} card={card} />
              ))}
        </Column>
        <Column title="Готово">
          {loading
            ? renderSkeletonCards(1)
            : getCardsByStatus("Готово").map((card) => (
                <Card key={card.id} card={card} />
              ))}
        </Column>
      </Main>
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
