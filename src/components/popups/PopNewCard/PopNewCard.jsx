import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Colors } from "../../../Colors";
import { useContext } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { TaskContext } from "../../../context/TaskContext";
import {
  showSuccess,
  showError,
  showLoading,
  updateToast,
} from "../../../utils/toast";
import Calendar from "../../Calendar/Calendar";
import {
  Overlay,
  Container,
  Block,
  Content,
  Title,
  CloseButton,
  Wrap,
  Form,
  FormBlock,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  ValidationError,
  CreateButton,
} from "./PopNewCard.styled";
import {
  CategoriesContainer as CategoriesSection,
  CategoriesParagraph as CategoriesLabel,
  CategoriesThemes,
  CategoriesTheme as CategoryTheme,
} from "../../Categories/Categories.styled";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);
  const { isDarkMode } = useTheme();

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

  // Управление классом modal-open для скрытия фиксированной кнопки
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

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

    let loadingToast = null;
    try {
      setLoading(true);
      loadingToast = showLoading("Создание задачи...");

      const token = localStorage.getItem("token");
      if (!token) {
        updateToast(loadingToast, "error", "Необходимо войти в аккаунт");
        navigate("/sign-in");
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
      const success = await addTask(taskData);

      if (success) {
        updateToast(loadingToast, "success", "Задача успешно создана!");
        // После успешного создания задачи переходим на главную
        setTimeout(() => navigate("/"), 1000); // Небольшая задержка для показа уведомления
      } else {
        updateToast(loadingToast, "error", "Не удалось создать задачу");
      }
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
      if (loadingToast) {
        updateToast(
          loadingToast,
          "error",
          `Ошибка при создании задачи: ${err.message}`
        );
      } else {
        showError(`Ошибка при создании задачи: ${err.message}`);
      }
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
    <Overlay id="popNewCard">
      <Container onClick={handleClose}>
        <Block onClick={(e) => e.stopPropagation()}>
          <Content>
            <Title>Создание задачи</Title>
            <CloseButton onClick={handleClose}>&#10006;</CloseButton>
            <Wrap>
              <Form id="formNewCard" onSubmit={handleSubmit}>
                <FormBlock>
                  <Label htmlFor="formTitle">Название задачи</Label>
                  <Input
                    className={validationErrors.title ? "error" : ""}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                  />
                  {validationErrors.title && (
                    <ValidationError>{validationErrors.title}</ValidationError>
                  )}
                </FormBlock>
                <FormBlock>
                  <Label htmlFor="textArea">Описание задачи</Label>
                  <TextArea
                    className={validationErrors.description ? "error" : ""}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  {validationErrors.description && (
                    <ValidationError>
                      {validationErrors.description}
                    </ValidationError>
                  )}
                </FormBlock>
              </Form>
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
            </Wrap>
            <CategoriesSection>
              <CategoriesLabel>Категория</CategoriesLabel>
              <CategoriesThemes>
                <CategoryTheme
                  className={formData.topic === "Web Design" ? "active" : ""}
                  style={{
                    backgroundColor: isDarkMode
                      ? Colors.dark.orange.background
                      : Colors.light.orange.background,
                    color: isDarkMode
                      ? Colors.dark.orange.color
                      : Colors.light.orange.color,
                  }}
                  onClick={() => handleTopicSelect("Web Design")}
                >
                  <p>Web Design</p>
                </CategoryTheme>
                <CategoryTheme
                  className={formData.topic === "Research" ? "active" : ""}
                  style={{
                    backgroundColor: isDarkMode
                      ? Colors.dark.green.background
                      : Colors.light.green.background,
                    color: isDarkMode
                      ? Colors.dark.green.color
                      : Colors.light.green.color,
                  }}
                  onClick={() => handleTopicSelect("Research")}
                >
                  <p>Research</p>
                </CategoryTheme>
                <CategoryTheme
                  className={formData.topic === "Copywriting" ? "active" : ""}
                  style={{
                    backgroundColor: isDarkMode
                      ? Colors.dark.purple.background
                      : Colors.light.purple.background,
                    color: isDarkMode
                      ? Colors.dark.purple.color
                      : Colors.light.purple.color,
                  }}
                  onClick={() => handleTopicSelect("Copywriting")}
                >
                  <p>Copywriting</p>
                </CategoryTheme>
              </CategoriesThemes>
            </CategoriesSection>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <CreateButton
              id="btnCreate"
              type="submit"
              form="formNewCard"
              disabled={loading}
            >
              {loading ? "Создание..." : "Создать задачу"}
            </CreateButton>
          </Content>
        </Block>
      </Container>
    </Overlay>
  );
};

export default PopNewCard;
