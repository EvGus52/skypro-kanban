import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "./Card";
import CardPlaceholder from "./CardPlaceholder";

const SortableCard = ({ card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "card",
      card,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease",
  };

  // Если карточка перетаскивается, показываем placeholder
  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style}>
        <CardPlaceholder />
      </div>
    );
  }

  // Обычная карточка
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card card={card} />
    </div>
  );
};

export default SortableCard;
