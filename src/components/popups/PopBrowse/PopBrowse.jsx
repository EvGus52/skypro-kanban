import React, { useEffect, useCallback, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Colors } from "../../../Colors";
import { fetchTaskById, editTask, deleteTask } from "../../../services/Api";
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
  TopBlock,
  Title,
  TitleInput,
  ThemeCategory,
  Wrap,
  Form,
  FormBlock,
  Label,
  TextArea,
  ButtonSection,
  ButtonGroup,
  ErrorMessage,
  ValidationError,
  DeleteModal,
  DeleteModalContent,
  DeleteModalTitle,
  DeleteModalText,
  DeleteModalButtons,
  DeleteModalButton,
  StatusSectionBrowse,
} from "./PopBrowse.styled";
import {
  StatusContainer as StatusSection,
  StatusParagraph as StatusLabel,
  StatusThemes,
  StatusTheme,
} from "../../Status/Status.styled";
import {
  CategoriesContainer as CategoriesSection,
  CategoriesParagraph as CategoriesLabel,
  CategoriesThemes,
  CategoriesTheme as CategoryTheme,
} from "../../Categories/Categories.styled";
import {
  ButtonBrowseClose,
  ButtonEditClose,
  ButtonEditEdit,
  ButtonEditCancel,
  ButtonEditDelete,
  ButtonBrowseEdit,
  ButtonBrowseDelete,
} from "../../Button/Button.styled";

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateTask, removeTask } = useContext(TaskContext);
  const { isDarkMode } = useTheme();
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
  const [validationErrors, setValidationErrors] = useState({});

  // Управление классом modal-open для скрытия фиксированной кнопки
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  // Загружаем задачу по ID
  useEffect(() => {
    const loadTask = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/sign-in");
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
    const colorSet = isDarkMode ? Colors.dark : Colors.light;
    switch (topic) {
      case "Web Design":
        return colorSet.orange;
      case "Research":
        return colorSet.green;
      case "Copywriting":
        return colorSet.purple;
      default:
        return colorSet.gray;
    }
  };

  // Функция для получения цвета статуса
  const getStatusColor = (status) => {
    const colorSet = isDarkMode ? Colors.dark : Colors.light;
    switch (status) {
      case "Без статуса":
        return colorSet.gray;
      case "Нужно сделать":
        return colorSet.gray;
      case "В работе":
        return colorSet.gray;
      case "Тестирование":
        return colorSet.gray;
      case "Готово":
        return colorSet.gray;
      default:
        return colorSet.gray;
    }
  };

  const themeColor = cardData
    ? getThemeColor(cardData.topic)
    : isDarkMode
    ? Colors.dark.orange
    : Colors.light.orange;
  const statusColor = cardData
    ? getStatusColor(cardData.status)
    : isDarkMode
    ? Colors.dark.gray
    : Colors.light.gray;

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
      setDeleteError(null); // Очищаем ошибки удаления при начале редактирования
      setValidationErrors({}); // Очищаем ошибки валидации
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
    setValidationErrors({}); // Очищаем ошибки валидации
  }, []);

  // Обработка изменения полей формы
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
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
  const handleEditTopicSelect = (topic) => {
    setEditData((prev) => ({
      ...prev,
      topic: topic,
    }));
  };

  // Обработка выбора статуса
  const handleEditStatusSelect = (status) => {
    console.log("Выбран статус:", status);
    setEditData((prev) => ({
      ...prev,
      status: status,
    }));
  };

  // Валидация формы редактирования
  const validateEditForm = () => {
    const errors = {};

    // Проверяем название задачи
    if (!editData.title || editData.title.trim() === "") {
      errors.title = "Название задачи обязательно для заполнения";
    }

    // Проверяем описание задачи
    if (!editData.description || editData.description.trim() === "") {
      errors.description = "Описание задачи обязательно для заполнения";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Обработка сохранения изменений
  const handleSaveEdit = async () => {
    // Валидируем форму перед отправкой
    if (!validateEditForm()) {
      return;
    }

    let loadingToast = null;
    try {
      setEditLoading(true);
      setEditError(null);
      loadingToast = showLoading("Сохранение изменений...");

      const token = localStorage.getItem("token");
      if (!token) {
        updateToast(loadingToast, "error", "Необходимо войти в аккаунт");
        navigate("/sign-in");
        return;
      }

      // Валидация ID
      if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        updateToast(loadingToast, "error", "Неверный формат ID задачи");
        return;
      }

      // Подготавливаем данные для отправки согласно API
      const taskData = {
        title: editData.title.trim(),
        topic: editData.topic || "Research",
        status: editData.status || "Без статуса",
        description: editData.description.trim(),
        date: editData.date || new Date().toISOString(),
      };

      console.log("Отправляем данные для изменения задачи:", taskData);

      // Используем updateTask из контекста (автоматически обновит список)
      const success = await updateTask(id, taskData);

      if (success) {
        updateToast(loadingToast, "success", "Задача успешно обновлена!");

        // Обновляем локальные данные
        setCardData((prev) => ({
          ...prev,
          ...taskData,
        }));

        // Выходим из режима редактирования
        setIsEditing(false);

        // Закрываем модальное окно и возвращаемся на главную
        setTimeout(() => navigate("/"), 1000); // Небольшая задержка для показа уведомления
      } else {
        updateToast(loadingToast, "error", "Не удалось сохранить изменения");
      }
    } catch (err) {
      console.error("Ошибка при изменении задачи:", err);
      if (loadingToast) {
        updateToast(
          loadingToast,
          "error",
          `Ошибка при изменении задачи: ${err.message}`
        );
      } else {
        showError(`Ошибка при изменении задачи: ${err.message}`);
      }
    } finally {
      setEditLoading(false);
    }
  };

  // Обработка удаления задачи
  const handleDeleteTask = () => {
    setDeleteError(null); // Очищаем предыдущие ошибки удаления
    setEditError(null); // Очищаем ошибки редактирования при начале удаления
    setShowDeleteModal(true);
  };

  // Подтверждение удаления
  const handleConfirmDelete = async () => {
    let loadingToast = null;
    try {
      setDeleteLoading(true);
      setDeleteError(null);
      loadingToast = showLoading("Удаление задачи...");

      const token = localStorage.getItem("token");
      if (!token) {
        updateToast(loadingToast, "error", "Необходимо войти в аккаунт");
        navigate("/sign-in");
        return;
      }

      // Валидация ID
      if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        updateToast(loadingToast, "error", "Неверный формат ID задачи");
        return;
      }

      console.log("Удаляем задачу с ID:", id);

      // Используем removeTask из контекста (автоматически обновит список)
      const success = await removeTask(id);

      if (success) {
        updateToast(loadingToast, "success", "Задача успешно удалена!");
        // Закрываем модальное окно и возвращаемся на главную
        setShowDeleteModal(false);
        setTimeout(() => navigate("/"), 1000); // Небольшая задержка для показа уведомления
      } else {
        updateToast(loadingToast, "error", "Не удалось удалить задачу");
      }
    } catch (err) {
      console.error("Ошибка при удалении задачи:", err);
      if (loadingToast) {
        updateToast(
          loadingToast,
          "error",
          `Ошибка при удалении задачи: ${err.message}`
        );
      } else {
        showError(`Ошибка при удалении задачи: ${err.message}`);
      }
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
      <Overlay id="popBrowse">
        <Container onClick={handleClose}>
          <Block onClick={(e) => e.stopPropagation()}>
            <Content>
              <div style={{ textAlign: "center", padding: "50px" }}>
                <p>Загрузка задачи...</p>
              </div>
            </Content>
          </Block>
        </Container>
      </Overlay>
    );
  }

  // Показываем ошибку
  if (error) {
    return (
      <Overlay id="popBrowse">
        <Container onClick={handleClose}>
          <Block onClick={(e) => e.stopPropagation()}>
            <Content>
              <div style={{ textAlign: "center", padding: "50px" }}>
                <p style={{ color: "red" }}>Ошибка: {error}</p>
                <button onClick={handleClose}>Закрыть</button>
              </div>
            </Content>
          </Block>
        </Container>
      </Overlay>
    );
  }

  return (
    <Overlay id="popBrowse">
      <Container onClick={handleClose}>
        <Block onClick={(e) => e.stopPropagation()}>
          <Content>
            <TopBlock className={!isEditing ? "browse-mode" : ""}>
              {isEditing ? (
                <div>
                  <TitleInput
                    className={validationErrors.title ? "error" : ""}
                    type="text"
                    name="title"
                    value={editData.title}
                    onChange={handleEditInputChange}
                  />
                  {validationErrors.title && (
                    <ValidationError>{validationErrors.title}</ValidationError>
                  )}
                </div>
              ) : (
                <Title>{cardData?.title || "Название задачи"}</Title>
              )}
              <ThemeCategory
                className="theme-top _active-category"
                $backgroundColor={themeColor.background}
                $color={themeColor.color}
              >
                <p>{cardData?.topic || "Web Design"}</p>
              </ThemeCategory>
            </TopBlock>
            <StatusSectionBrowse className={!isEditing ? "browse-mode" : ""}>
              <StatusLabel>Статус</StatusLabel>
              {isEditing ? (
                <StatusThemes>
                  {[
                    "Без статуса",
                    "Нужно сделать",
                    "В работе",
                    "Тестирование",
                    "Готово",
                  ].map((status) => (
                    <StatusTheme
                      key={status}
                      className={editData.status === status ? "active" : ""}
                      onClick={() => handleEditStatusSelect(status)}
                    >
                      <p>{status}</p>
                    </StatusTheme>
                  ))}
                </StatusThemes>
              ) : (
                <StatusThemes>
                  <StatusTheme
                    className={
                      cardData?.status === "Без статуса" ? "active" : "_hide"
                    }
                    style={
                      cardData?.status === "Без статуса"
                        ? {
                            backgroundColor: isDarkMode
                              ? "#94A6BE"
                              : statusColor.background,
                            color: isDarkMode ? "#151419" : statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Без статуса"
                          ? {
                              color: isDarkMode ? "#151419" : statusColor.color,
                            }
                          : {}
                      }
                    >
                      Без статуса
                    </p>
                  </StatusTheme>
                  <StatusTheme
                    className={
                      cardData?.status === "Нужно сделать" ? "active" : "_hide"
                    }
                    style={
                      cardData?.status === "Нужно сделать"
                        ? {
                            backgroundColor: isDarkMode
                              ? "#94A6BE"
                              : statusColor.background,
                            color: isDarkMode ? "#151419" : statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Нужно сделать"
                          ? {
                              color: isDarkMode ? "#151419" : statusColor.color,
                            }
                          : {}
                      }
                    >
                      Нужно сделать
                    </p>
                  </StatusTheme>
                  <StatusTheme
                    className={
                      cardData?.status === "В работе" ? "active" : "_hide"
                    }
                    style={
                      cardData?.status === "В работе"
                        ? {
                            backgroundColor: isDarkMode
                              ? "#94A6BE"
                              : statusColor.background,
                            color: isDarkMode ? "#151419" : statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "В работе"
                          ? {
                              color: isDarkMode ? "#151419" : statusColor.color,
                            }
                          : {}
                      }
                    >
                      В работе
                    </p>
                  </StatusTheme>
                  <StatusTheme
                    className={
                      cardData?.status === "Тестирование" ? "active" : "_hide"
                    }
                    style={
                      cardData?.status === "Тестирование"
                        ? {
                            backgroundColor: isDarkMode
                              ? "#94A6BE"
                              : statusColor.background,
                            color: isDarkMode ? "#151419" : statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Тестирование"
                          ? {
                              color: isDarkMode ? "#151419" : statusColor.color,
                            }
                          : {}
                      }
                    >
                      Тестирование
                    </p>
                  </StatusTheme>
                  <StatusTheme
                    className={
                      cardData?.status === "Готово" ? "active" : "_hide"
                    }
                    style={
                      cardData?.status === "Готово"
                        ? {
                            backgroundColor: isDarkMode
                              ? "#94A6BE"
                              : statusColor.background,
                            color: isDarkMode ? "#151419" : statusColor.color,
                          }
                        : {}
                    }
                  >
                    <p
                      style={
                        cardData?.status === "Готово"
                          ? {
                              color: isDarkMode ? "#151419" : statusColor.color,
                            }
                          : {}
                      }
                    >
                      Готово
                    </p>
                  </StatusTheme>
                </StatusThemes>
              )}
            </StatusSectionBrowse>
            <Wrap>
              <Form id="formBrowseCard" action="#">
                <FormBlock>
                  <Label htmlFor="textArea01">Описание задачи</Label>
                  <TextArea
                    className={validationErrors.description ? "error" : ""}
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
                    style={
                      isEditing && validationErrors.description
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  {isEditing && validationErrors.description && (
                    <ValidationError>
                      {validationErrors.description}
                    </ValidationError>
                  )}
                </FormBlock>
              </Form>
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
            </Wrap>
            <CategoriesSection className="theme-down">
              <CategoriesLabel>Категория</CategoriesLabel>
              {isEditing ? (
                <CategoryTheme
                  className="_active-category"
                  style={{
                    backgroundColor: themeColor.background,
                    color: themeColor.color,
                    opacity: 1,
                  }}
                >
                  <p>{editData?.topic || "Web Design"}</p>
                </CategoryTheme>
              ) : (
                <CategoryTheme
                  className="_active-category"
                  style={{
                    backgroundColor: themeColor.background,
                    color: themeColor.color,
                    opacity: 1,
                  }}
                >
                  <p>{cardData?.topic || "Web Design"}</p>
                </CategoryTheme>
              )}
            </CategoriesSection>
            <ButtonSection className={isEditing ? "hidden" : ""}>
              {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
              <ButtonGroup>
                <ButtonBrowseEdit onClick={handleStartEdit}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Редактировать задачу
                  </a>
                </ButtonBrowseEdit>
                <ButtonBrowseDelete
                  onClick={handleDeleteTask}
                  disabled={deleteLoading}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {deleteLoading ? "Удаление..." : "Удалить задачу"}
                  </a>
                </ButtonBrowseDelete>
              </ButtonGroup>
              <ButtonBrowseClose>
                <Link to="/">Закрыть</Link>
              </ButtonBrowseClose>
            </ButtonSection>
            <ButtonSection className={isEditing ? "" : "hidden"}>
              {editError && <ErrorMessage>{editError}</ErrorMessage>}
              {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
              <ButtonGroup className="edit-buttons">
                <ButtonEditEdit onClick={handleSaveEdit} disabled={editLoading}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {editLoading ? "Сохранение..." : "Сохранить"}
                  </a>
                </ButtonEditEdit>
                <ButtonEditCancel onClick={handleCancelEdit}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Отменить
                  </a>
                </ButtonEditCancel>
                <ButtonEditDelete
                  id="btnDelete"
                  onClick={handleDeleteTask}
                  disabled={deleteLoading}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {deleteLoading ? "Удаление..." : "Удалить задачу"}
                  </a>
                </ButtonEditDelete>
                <ButtonEditClose>
                  <Link to="/">Закрыть</Link>
                </ButtonEditClose>
              </ButtonGroup>
            </ButtonSection>
          </Content>
        </Block>
      </Container>

      {/* Модалка подтверждения удаления */}
      {showDeleteModal && (
        <DeleteModal onClick={handleCancelDelete}>
          <DeleteModalContent onClick={(e) => e.stopPropagation()}>
            <DeleteModalTitle>Удалить задачу</DeleteModalTitle>
            <DeleteModalText>
              Вы уверены, что хотите удалить задачу "
              {cardData?.title || "Без названия"}"?
            </DeleteModalText>
            {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
            <DeleteModalButtons>
              <DeleteModalButton
                className="cancel"
                onClick={handleCancelDelete}
                disabled={deleteLoading}
              >
                Отмена
              </DeleteModalButton>
              <DeleteModalButton
                className="confirm"
                onClick={handleConfirmDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? "Удаление..." : "Удалить"}
              </DeleteModalButton>
            </DeleteModalButtons>
          </DeleteModalContent>
        </DeleteModal>
      )}
    </Overlay>
  );
};

export default PopBrowse;
