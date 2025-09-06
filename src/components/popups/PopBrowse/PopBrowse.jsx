import React, { useEffect, useCallback, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Colors } from "../../../Colors";
import { fetchTaskById, editTask, deleteTask } from "../../../services/Api";
import { useTaskContext } from "../../../hooks/useTaskContext";
import Calendar from "../../Calendar/Calendar";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshTasks } = useTaskContext();
  const [cardData, setCardData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: new Date().toISOString(),
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Загружаем задачу по ID
  useEffect(() => {
    const loadTask = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Валидация ID - должен быть строкой из 24 hex символов
        if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
          setError("Неверный формат ID задачи");
          return;
        }

        const task = await fetchTaskById({ token, id });
        // Преобразуем _id в id для совместимости
        const taskWithId = {
          ...task,
          id: task._id || task.id,
        };
        setCardData(taskWithId);
      } catch (err) {
        console.error("Ошибка при загрузке задачи:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadTask();
    }
  }, [id, navigate]);

  // Функция для получения цвета темы
  const getThemeColor = (topic) => {
    switch (topic) {
      case "Web Design":
        return Colors.orange;
      case "Research":
        return Colors.green;
      case "Copywriting":
        return Colors.purple;
      default:
        return Colors.gray;
    }
  };

  // Функция для получения цвета статуса
  const getStatusColor = (status) => {
    switch (status) {
      case "Без статуса":
        return Colors.gray;
      case "Нужно сделать":
        return Colors.gray;
      case "В работе":
        return Colors.gray;
      case "Тестирование":
        return Colors.gray;
      case "Готово":
        return Colors.gray;
      default:
        return Colors.gray;
    }
  };

  const themeColor = cardData ? getThemeColor(cardData.topic) : Colors.orange;
  const statusColor = cardData ? getStatusColor(cardData.status) : Colors.gray;

  const handleClose = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Обработка начала редактирования
  const handleStartEdit = useCallback(() => {
    if (cardData) {
      setEditData({
        title: cardData.title || "",
        description: cardData.description || "",
        topic: cardData.topic || "Research",
        status: cardData.status || "Без статуса",
        date: cardData.date || new Date().toISOString(),
      });
      setIsEditing(true);
      setEditError(null);
    }
  }, [cardData]);

  // Обработка отмены редактирования
  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditData({
      title: "",
      description: "",
      topic: "Research",
      status: "Без статуса",
      date: new Date().toISOString(),
    });
    setEditError(null);
  }, []);

  // Обработка изменения полей формы
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработка выбора категории
  const handleEditTopicSelect = (topic) => {
    setEditData((prev) => ({
      ...prev,
      topic: topic,
    }));
  };

  // Обработка выбора статуса
  const handleEditStatusSelect = (status) => {
    setEditData((prev) => ({
      ...prev,
      status: status,
    }));
  };

  // Обработка сохранения изменений
  const handleSaveEdit = async () => {
    try {
      setEditLoading(true);
      setEditError(null);

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Валидация ID
      if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        setEditError("Неверный формат ID задачи");
        return;
      }

      // Подготавливаем данные для отправки согласно API
      const taskData = {
        title: editData.title || "Новая задача",
        topic: editData.topic || "Research",
        status: editData.status || "Без статуса",
        description: editData.description || "Описание не указано",
        date: editData.date || new Date().toISOString(),
      };

      console.log("Отправляем данные для изменения задачи:", taskData);

      await editTask({ token, id, task: taskData });

      // Обновляем список задач на главной странице
      refreshTasks();

      // Обновляем локальные данные
      setCardData((prev) => ({
        ...prev,
        ...taskData,
      }));

      // Выходим из режима редактирования
      setIsEditing(false);

      // Закрываем модальное окно и возвращаемся на главную
      navigate("/");
    } catch (err) {
      console.error("Ошибка при изменении задачи:", err);
      setEditError(err.message);
    } finally {
      setEditLoading(false);
    }
  };

  // Обработка удаления задачи
  const handleDeleteTask = () => {
    setShowDeleteModal(true);
  };

  // Подтверждение удаления
  const handleConfirmDelete = async () => {
    try {
      setDeleteLoading(true);
      setDeleteError(null);

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Валидация ID
      if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        setDeleteError("Неверный формат ID задачи");
        return;
      }

      console.log("Удаляем задачу с ID:", id);

      await deleteTask({ token, id });

      // Обновляем список задач на главной странице
      refreshTasks();

      // Закрываем модальное окно и возвращаемся на главную
      setShowDeleteModal(false);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при удалении задачи:", err);
      setDeleteError(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Отмена удаления
  const handleCancelDelete = useCallback(() => {
    setShowDeleteModal(false);
    setDeleteError(null);
  }, []);

  // Обработка клавиши Escape и блокировка прокрутки
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (showDeleteModal) {
          handleCancelDelete();
        } else {
          handleClose();
        }
      }
    };

    // Блокируем прокрутку страницы когда модальное окно открыто
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Восстанавливаем прокрутку при закрытии модального окна
      document.body.style.overflow = "unset";
    };
  }, [handleClose, showDeleteModal, handleCancelDelete]);

  // Показываем загрузку
  if (loading) {
    return (
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container" onClick={handleClose}>
          <div
            className="pop-browse__block"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pop-browse__content">
              <div style={{ textAlign: "center", padding: "50px" }}>
                <p>Загрузка задачи...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Показываем ошибку
  if (error) {
    return (
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container" onClick={handleClose}>
          <div
            className="pop-browse__block"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pop-browse__content">
              <div style={{ textAlign: "center", padding: "50px" }}>
                <p style={{ color: "red" }}>Ошибка: {error}</p>
                <button onClick={handleClose}>Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container" onClick={handleClose}>
        <div className="pop-browse__block" onClick={(e) => e.stopPropagation()}>
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              {isEditing ? (
                <input
                  className="pop-browse__ttl"
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditInputChange}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                />
              ) : (
                <h3 className="pop-browse__ttl">
                  {cardData?.title || "Название задачи"}
                </h3>
              )}
              <div
                className="categories__theme theme-top _active-category"
                style={{
                  backgroundColor: themeColor.background,
                  color: themeColor.color,
                }}
              >
                <p style={{ color: themeColor.color }}>
                  {cardData?.topic || "Web Design"}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {isEditing ? (
                <div className="status__themes">
                  {[
                    "Без статуса",
                    "Нужно сделать",
                    "В работе",
                    "Тестирование",
                    "Готово",
                  ].map((status) => (
                    <div
                      key={status}
                      className={`status__theme ${
                        editData.status === status ? "_active-status" : ""
                      }`}
                      style={{
                        backgroundColor:
                          editData.status === status ? "#94A6BE" : "#f5f5f5",
                        color: editData.status === status ? "white" : "#666",
                        cursor: "pointer",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        padding: "8px 12px",
                        margin: "4px",
                        display: "inline-block",
                      }}
                      onClick={() => handleEditStatusSelect(status)}
                    >
                      <p
                        style={{
                          color: editData.status === status ? "white" : "#666",
                          margin: 0,
                          fontSize: "14px",
                        }}
                      >
                        {status}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="status__themes">
                  <div
                    className={`status__theme ${
                      cardData?.status === "Без статуса" ? "" : "_hide"
                    }`}
                    style={
                      cardData?.status === "Без статуса"
                        ? {
                            backgroundColor: statusColor.background,
                            color: statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Без статуса"
                          ? { color: statusColor.color }
                          : {}
                      }
                    >
                      Без статуса
                    </p>
                  </div>
                  <div
                    className={`status__theme ${
                      cardData?.status === "Нужно сделать" ? "" : "_hide"
                    }`}
                    style={
                      cardData?.status === "Нужно сделать"
                        ? {
                            backgroundColor: statusColor.background,
                            color: statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Нужно сделать"
                          ? { color: statusColor.color }
                          : {}
                      }
                    >
                      Нужно сделать
                    </p>
                  </div>
                  <div
                    className={`status__theme ${
                      cardData?.status === "В работе" ? "" : "_hide"
                    }`}
                    style={
                      cardData?.status === "В работе"
                        ? {
                            backgroundColor: statusColor.background,
                            color: statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "В работе"
                          ? { color: statusColor.color }
                          : {}
                      }
                    >
                      В работе
                    </p>
                  </div>
                  <div
                    className={`status__theme ${
                      cardData?.status === "Тестирование" ? "" : "_hide"
                    }`}
                    style={
                      cardData?.status === "Тестирование"
                        ? {
                            backgroundColor: statusColor.background,
                            color: statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Тестирование"
                          ? { color: statusColor.color }
                          : {}
                      }
                    >
                      Тестирование
                    </p>
                  </div>
                  <div
                    className={`status__theme ${
                      cardData?.status === "Готово" ? "" : "_hide"
                    }`}
                    style={
                      cardData?.status === "Готово"
                        ? {
                            backgroundColor: statusColor.background,
                            color: statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Готово"
                          ? { color: statusColor.color }
                          : {}
                      }
                    >
                      Готово
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={
                      isEditing
                        ? editData.description
                        : cardData?.description || ""
                    }
                    onChange={isEditing ? handleEditInputChange : undefined}
                  ></textarea>
                </div>
              </form>
              <Calendar
                selectedDate={isEditing ? editData.date : cardData?.date}
                onDateSelect={(date) => {
                  if (isEditing) {
                    setEditData((prev) => ({
                      ...prev,
                      date: date.toISOString(),
                    }));
                  }
                }}
                isEditing={isEditing}
              />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              {isEditing ? (
                <div className="categories__themes">
                  <div
                    className={`categories__theme ${
                      editData.topic === "Web Design" ? "_active-category" : ""
                    }`}
                    style={{
                      backgroundColor:
                        editData.topic === "Web Design"
                          ? "#94A6BE"
                          : Colors.orange.background,
                      color:
                        editData.topic === "Web Design"
                          ? "white"
                          : Colors.orange.color,
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "8px 12px",
                      margin: "4px",
                      display: "inline-block",
                    }}
                    onClick={() => handleEditTopicSelect("Web Design")}
                  >
                    <p
                      style={{
                        color:
                          editData.topic === "Web Design"
                            ? "white"
                            : Colors.orange.color,
                        margin: 0,
                        fontSize: "14px",
                      }}
                    >
                      Web Design
                    </p>
                  </div>
                  <div
                    className={`categories__theme ${
                      editData.topic === "Research" ? "_active-category" : ""
                    }`}
                    style={{
                      backgroundColor:
                        editData.topic === "Research"
                          ? "#94A6BE"
                          : Colors.green.background,
                      color:
                        editData.topic === "Research"
                          ? "white"
                          : Colors.green.color,
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "8px 12px",
                      margin: "4px",
                      display: "inline-block",
                    }}
                    onClick={() => handleEditTopicSelect("Research")}
                  >
                    <p
                      style={{
                        color:
                          editData.topic === "Research"
                            ? "white"
                            : Colors.green.color,
                        margin: 0,
                        fontSize: "14px",
                      }}
                    >
                      Research
                    </p>
                  </div>
                  <div
                    className={`categories__theme ${
                      editData.topic === "Copywriting" ? "_active-category" : ""
                    }`}
                    style={{
                      backgroundColor:
                        editData.topic === "Copywriting"
                          ? "#94A6BE"
                          : Colors.purple.background,
                      color:
                        editData.topic === "Copywriting"
                          ? "white"
                          : Colors.purple.color,
                      cursor: "pointer",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "8px 12px",
                      margin: "4px",
                      display: "inline-block",
                    }}
                    onClick={() => handleEditTopicSelect("Copywriting")}
                  >
                    <p
                      style={{
                        color:
                          editData.topic === "Copywriting"
                            ? "white"
                            : Colors.purple.color,
                        margin: 0,
                        fontSize: "14px",
                      }}
                    >
                      Copywriting
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="categories__theme _active-category"
                  style={{
                    backgroundColor: themeColor.background,
                    color: themeColor.color,
                  }}
                >
                  <p style={{ color: themeColor.color }}>
                    {cardData?.topic || "Web Design"}
                  </p>
                </div>
              )}
            </div>
            <div
              className={`pop-browse__btn-browse ${isEditing ? "_hide" : ""}`}
            >
              {deleteError && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {deleteError}
                </div>
              )}
              <div className="btn-group">
                <button
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={handleStartEdit}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Редактировать задачу
                  </a>
                </button>
                <button
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDeleteTask}
                  disabled={deleteLoading}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {deleteLoading ? "Удаление..." : "Удалить задачу"}
                  </a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className={`pop-browse__btn-edit ${isEditing ? "" : "_hide"}`}>
              {editError && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {editError}
                </div>
              )}
              {deleteError && (
                <div
                  style={{
                    color: "red",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {deleteError}
                </div>
              )}
              <div className="btn-group">
                <button
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleSaveEdit}
                  disabled={editLoading}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {editLoading ? "Сохранение..." : "Сохранить"}
                  </a>
                </button>
                <button
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleCancelEdit}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Отменить
                  </a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                  onClick={handleDeleteTask}
                  disabled={deleteLoading}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {deleteLoading ? "Удаление..." : "Удалить задачу"}
                  </a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модалка подтверждения удаления */}
      {showDeleteModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={handleCancelDelete}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              maxWidth: "400px",
              width: "100%",
              padding: "24px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                margin: "0 0 16px 0",
                fontSize: "20px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Удалить задачу
            </h3>
            <p
              style={{
                margin: "0 0 24px 0",
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.5",
              }}
            >
              Вы уверены, что хотите удалить задачу "
              {cardData?.title || "Без названия"}"?
            </p>
            {deleteError && (
              <div
                style={{
                  color: "red",
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
              >
                {deleteError}
              </div>
            )}
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  background: "#f5f5f5",
                  color: "#666",
                  minWidth: "100px",
                }}
                onClick={handleCancelDelete}
                disabled={deleteLoading}
              >
                Отмена
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: deleteLoading ? "not-allowed" : "pointer",
                  background: deleteLoading ? "#ccc" : "#dc3545",
                  color: "white",
                  minWidth: "100px",
                }}
                onClick={handleConfirmDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? "Удаление..." : "Удалить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopBrowse;
