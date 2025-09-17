import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import Card from "../components/Card/Card";
import CardLoader from "../components/CardLoader";
import EmptyState from "../components/EmptyState";
import PopExit from "../components/popups/PopExit/PopExit";
import { Wrapper } from "../Wrapper.styled";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";

const MainPage = () => {
  const { tasks, loading, error } = useContext(TaskContext);
  const { isInitialized } = useContext(AuthContext);

  const getCardsByStatus = (status) =>
    tasks.filter((card) => card.status === status);

  // Функция для отображения скелетонов загрузки
  const renderSkeletonCards = (count = 3) => {
    return Array.from({ length: count }, (_, index) => (
      <CardLoader key={`skeleton-${index}`} />
    ));
  };

  // Функция для отображения контента колонки
  const renderColumnContent = (status) => {
    const cards = getCardsByStatus(status);

    if (loading) {
      // При первой загрузке показываем 1 скелетон
      // При последующих загрузках (обновление данных) показываем количество реальных карточек
      const skeletonCount = tasks.length === 0 ? 1 : Math.max(cards.length, 1);
      return renderSkeletonCards(skeletonCount);
    }

    return cards.map((card) => <Card key={card.id} card={card} />);
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

      {/* Показываем сообщение "Новых задач нет" только если инициализация завершена, загрузка не идет и нет карточек */}
      {isInitialized && !loading && tasks.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            padding: "40px 20px",
          }}
        >
          <EmptyState message="Новых задач нет" />
        </div>
      )}

      {/* Показываем колонки только если есть карточки или идет загрузка, или если еще не завершена инициализация */}
      {(!loading && tasks.length > 0) || loading || !isInitialized ? (
        <Main>
          <Column title="Без статуса">
            {renderColumnContent("Без статуса")}
          </Column>
          <Column title="Нужно сделать">
            {renderColumnContent("Нужно сделать")}
          </Column>
          <Column title="В работе">{renderColumnContent("В работе")}</Column>
          <Column title="Тестирование">
            {renderColumnContent("Тестирование")}
          </Column>
          <Column title="Готово">{renderColumnContent("Готово")}</Column>
        </Main>
      ) : null}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
