import React from "react";
import "./App.css";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainColumn from "./components/MainColumn/MainColumn";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main>
        <MainColumn title="Без статуса">
          <Card
            theme="_orange"
            themeText="Web Design"
            title="Название задачи"
            date="30.10.23"
          />
        </MainColumn>
        <MainColumn title="Нужно сделать">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </MainColumn>
        <MainColumn title="В работе">
          <Card
            theme="_orange"
            themeText="Web Design"
            title="Название задачи"
            date="30.10.23"
          />
          <Card
            theme="_purple"
            themeText="Copywriting"
            title="Название задачи"
            date="30.10.23"
          />
          <Card
            theme="_orange"
            themeText="Web Design"
            title="Название задачи"
            date="30.10.23"
          />
        </MainColumn>
        <MainColumn title="Тестирование">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </MainColumn>
        <MainColumn title="Готово">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </MainColumn>
      </Main>
    </div>
  );
}

export default App;
