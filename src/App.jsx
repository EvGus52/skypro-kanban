import React, { useState, useEffect } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopExit from "./components/popups/PopExit/PopExit";
import { cardsList } from "../data.js";
import { GlobalStyles } from "./GlobalStyles";
import { Wrapper } from "./Wrapper.styled";
import SignIn from "./pages/SignIn";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    const loadCards = () => {
      setTimeout(() => {
        setCards(cardsList);
        setIsLoading(false);
      }, 2000);
    };

    loadCards();
  }, []);

  // Функция для фильтрации карточек по статусу
  const getCardsByStatus = (status) => {
    return cards.filter((card) => card.status === status);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <PopNewCard />
        <PopBrowse />
        <PopExit />
        <Header />
        {isLoading ? (
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
      </Wrapper>
    </>
  );
};

export default App;
