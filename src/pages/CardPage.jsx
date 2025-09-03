import React from "react";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const { id } = useParams();
  return (
    <div className="wrapper" style={{ padding: 24 }}>
      <h2>Карточка: {id}</h2>
      {/* Здесь будет просмотр/редактирование карточки, а для id === 'new' — создание */}
    </div>
  );
};

export default CardPage;
