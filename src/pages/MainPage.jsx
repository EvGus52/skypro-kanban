import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import Card from "../components/Card/Card";
import SortableCard from "../components/Card/SortableCard";
import CardPlaceholder from "../components/Card/CardPlaceholder";
import DropZonePlaceholder from "../components/Card/DropZonePlaceholder";
import CardLoader from "../components/CardLoader";
import EmptyState from "../components/EmptyState";
import PopExit from "../components/popups/PopExit/PopExit";
import { Wrapper } from "../Wrapper.styled";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../hooks/useTheme";

const MainPage = () => {
  const { tasks, loading, error, moveTask } = useContext(TaskContext);
  const { isInitialized } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const [activeCard, setActiveCard] = React.useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getCardsByStatus = (status) =>
    tasks.filter((card) => card.status === status);

  const handleDragStart = (event) => {
    const { active } = event;
    const activeCard = tasks.find((task) => task.id === active.id);
    setActiveCard(activeCard);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveCard(null);

    if (!over) return;

    const activeCard = tasks.find((task) => task.id === active.id);

    // Проверяем, на что мы бросили карточку
    let targetStatus = null;

    if (over.data.current?.type === "column") {
      // Бросили на колонку
      targetStatus = over.data.current.status;
    } else if (over.data.current?.type === "card") {
      // Бросили на другую карточку
      const overCard = tasks.find((task) => task.id === over.id);
      targetStatus = overCard?.status;
    }

    if (!activeCard || !targetStatus) return;

    // Если карточка перемещается в ту же колонку, ничего не делаем
    if (activeCard.status === targetStatus) return;

    // Перемещаем карточку в новый статус
    try {
      await moveTask(activeCard.id, targetStatus);
    } catch (error) {
      console.error("Ошибка при перемещении карточки:", error);
    }
  };

  const handleDragCancel = () => {
    setActiveCard(null);
  };

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

    const cardElements = cards.map((card) => (
      <SortableCard key={card.id} card={card} />
    ));

    // Если идет перетаскивание, показываем placeholder только в других колонках (не в исходной)
    if (activeCard && activeCard.status !== status) {
      return [
        ...cardElements,
        <DropZonePlaceholder key={`placeholder-${status}`} />,
      ];
    }

    return cardElements;
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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <Main>
            <SortableContext
              items={tasks.map((task) => task.id)}
              strategy={verticalListSortingStrategy}
            >
              <Column title="Без статуса" status="Без статуса">
                {renderColumnContent("Без статуса")}
              </Column>
              <Column title="Нужно сделать" status="Нужно сделать">
                {renderColumnContent("Нужно сделать")}
              </Column>
              <Column title="В работе" status="В работе">
                {renderColumnContent("В работе")}
              </Column>
              <Column title="Тестирование" status="Тестирование">
                {renderColumnContent("Тестирование")}
              </Column>
              <Column title="Готово" status="Готово">
                {renderColumnContent("Готово")}
              </Column>
            </SortableContext>
          </Main>
          <DragOverlay>
            {activeCard ? (
              <div
                style={{
                  boxShadow: isDarkMode
                    ? "0px 10px 39px 0px rgba(148, 166, 190, 0.40)"
                    : "none",
                }}
              >
                <Card card={activeCard} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      ) : null}
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
