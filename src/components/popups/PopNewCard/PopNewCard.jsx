import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Colors } from "../../../Colors";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import Calendar from "../../Calendar/Calendar";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  // Состояние формы
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: new Date().toISOString(),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleClose = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Обработка изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Очищаем ошибку валидации для этого поля при изменении
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Обработка выбора категории
  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({
      ...prev,
      topic: topic,
    }));
  };

  // Валидация формы
  const validateForm = () => {
    const errors = {};

    // Проверяем название задачи
    if (!formData.title || formData.title.trim() === "") {
      errors.title = "Название задачи обязательно для заполнения";
    }

    // Проверяем описание задачи
    if (!formData.description || formData.description.trim() === "") {
      errors.description = "Описание задачи обязательно для заполнения";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидируем форму перед отправкой
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Подготавливаем данные для отправки согласно API
      const taskData = {
        title: formData.title.trim(),
        topic: formData.topic || "Research",
        status: formData.status || "Без статуса",
        date: formData.date || new Date().toISOString(),
        description: formData.description.trim(),
      };

      console.log("Отправляем данные задачи:", taskData);

      // Используем addTask из контекста (автоматически обновит список)
      await addTask(taskData);

      // После успешного создания задачи переходим на главную
      navigate("/");
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Обработка клавиши Escape и блокировка прокрутки
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
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
  }, [handleClose]);

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container" onClick={handleClose}>
        <div
          className="pop-new-card__block"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className={`form-new__input ${
                      validationErrors.title ? "error" : ""
                    }`}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                  />
                  {validationErrors.title && (
                    <div
                      className="validation-error"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {validationErrors.title}
                    </div>
                  )}
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className={`form-new__area ${
                      validationErrors.description ? "error" : ""
                    }`}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  {validationErrors.description && (
                    <div
                      className="validation-error"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {validationErrors.description}
                    </div>
                  )}
                </div>
              </form>
              <Calendar
                selectedDate={formData.date}
                onDateSelect={(date) => {
                  setFormData((prev) => ({
                    ...prev,
                    date: date.toISOString(),
                  }));
                }}
                isEditing={true}
              />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme ${
                    formData.topic === "Web Design" ? "_active-category" : ""
                  }`}
                  style={{
                    backgroundColor: Colors.orange.background,
                    color: Colors.orange.color,
                  }}
                  onClick={() => handleTopicSelect("Web Design")}
                >
                  <p style={{ color: Colors.orange.color }}>Web Design</p>
                </div>
                <div
                  className={`categories__theme ${
                    formData.topic === "Research" ? "_active-category" : ""
                  }`}
                  style={{
                    backgroundColor: Colors.green.background,
                    color: Colors.green.color,
                  }}
                  onClick={() => handleTopicSelect("Research")}
                >
                  <p style={{ color: Colors.green.color }}>Research</p>
                </div>
                <div
                  className={`categories__theme ${
                    formData.topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  style={{
                    backgroundColor: Colors.purple.background,
                    color: Colors.purple.color,
                  }}
                  onClick={() => handleTopicSelect("Copywriting")}
                >
                  <p style={{ color: Colors.purple.color }}>Copywriting</p>
                </div>
              </div>
            </div>
            {error && (
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              type="submit"
              form="formNewCard"
              disabled={loading}
            >
              {loading ? "Создание..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
