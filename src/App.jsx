import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";
import Calendar from "./components/Calendar/Calendar";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopUser from "./components/popups/PopUser/PopUser";
import "./App.css";

const App = () => (
  <div className="wrapper">
    <PopNewCard />
    <PopBrowse />
    <PopUser />
    <Header />
    <Main>
      {/* Здесь будут колонки и карточки */}
      <Column title="Без статуса">
        <Card />
      </Column>
      <Column title="Нужно сделать">
        <Card />
      </Column>
      <Column title="В работе">
        <Card />
      </Column>
      <Column title="Тестирование">
        <Card />
      </Column>
      <Column title="Готово">
        <Card />
      </Column>
    </Main>
    <Calendar />
  </div>
);

export default App;
