import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopExit from "./components/popups/PopExit/PopExit";
import { cardsList } from "../data.js";
import "./App.css";

const App = () => {
  // Функция для фильтрации карточек по статусу
  const getCardsByStatus = (status) => {
    return cardsList.filter((card) => card.status === status);
  };

  return (
    <div className="wrapper">
      <PopNewCard />
      <PopBrowse />
      <PopExit />
      <Header />
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
    </div>
  );
};

export default App;
