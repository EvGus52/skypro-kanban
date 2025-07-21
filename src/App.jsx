import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";
import Calendar from "./components/Calendar/Calendar";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopUser from "./components/popups/PopUser/PopUser";
import PopExit from "./components/popups/PopExit/PopExit";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <PopUser />
      <Header />
      <Main>
        <Column title="Без статуса">
          <Card
            theme="_orange"
            themeText="Web Design"
            title="Название задачи"
            date="30.10.23"
          >
            <Calendar />
          </Card>
        </Column>
        <Column title="Нужно сделать">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </Column>
        <Column title="В работе">
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
        </Column>
        <Column title="Тестирование">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </Column>
        <Column title="Готово">
          <Card
            theme="_green"
            themeText="Research"
            title="Название задачи"
            date="30.10.23"
          />
        </Column>
      </Main>
    </div>
  );
}

export default App;
