import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import Card from "../components/Card/Card";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopExit from "../components/popups/PopExit/PopExit";
import { Wrapper } from "../Wrapper.styled";
import { cardsList } from "../../data.js";

const MainPage = ({ loading, setIsAuth }) => {
  const [cards] = useState(cardsList);

  const getCardsByStatus = (status) =>
    cards.filter((card) => card.status === status);

  return (
    <Wrapper>
      <PopNewCard />
      <PopBrowse />
      <PopExit setIsAuth={setIsAuth} />
      <Header />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "24px",
            color: "#94A6BE",
            fontWeight: "600",
          }}
        >
          Данные загружаются...
        </div>
      ) : (
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
