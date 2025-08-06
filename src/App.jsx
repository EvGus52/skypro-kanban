import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopExit from "./components/popups/PopExit/PopExit";
import "./App.css";

const App = () => (
  <div className="wrapper">
    <PopNewCard />
    <PopBrowse />
    <PopExit />
    <Header />
    <Main>
      <Column title="Без статуса">
        <Card theme="orange" title="Web Design" />
      </Column>
      <Column title="Нужно сделать">
        <Card theme="green" title="Research" />
      </Column>
      <Column title="В работе">
        <Card theme="purple" title="Copywriting" />
      </Column>
      <Column title="Тестирование">
        <Card theme="green" title="Research" />
      </Column>
      <Column title="Готово">
        <Card theme="green" title="Research" />
      </Column>
    </Main>
  </div>
);

export default App;
