import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { useError } from "./ErrorContext";
import { fetchTasks, postTask, editTask, deleteTask } from "../services/Api";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, isInitialized } = useContext(AuthContext);
  const { showError } = useError();

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    const loadTasks = async () => {
      // Ждем инициализации AuthProvider
      if (!isInitialized) {
        return;
      }

      // Проверяем наличие пользователя и токена
      const token = localStorage.getItem("token");
      if (!user || !token) {
        setTasks([]);
        return;
      }

      try {
        setLoading(true);
        setError("");
        console.log(
          "🔄 TaskContextProvider: Загружаем задачи для пользователя:",
          user
        );

        const data = await fetchTasks({ token });

        if (data) {
          // Преобразуем _id в id для совместимости с компонентами
          const tasksWithId = data.map((task) => ({
            ...task,
            id: task._id,
          }));
          setTasks(tasksWithId);
          console.log(
            "✅ TaskContextProvider: Задачи загружены:",
            tasksWithId.length
          );
        }
      } catch (err) {
        console.error("Ошибка загрузки задач:", err);
        setError(err.message);
        showError("Не удалось загрузить задачи");
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user, isInitialized]); // Зависим от пользователя и состояния инициализации

  // Добавление новой задачи
  const addTask = async (taskData) => {
    if (!user) return false;

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      const data = await postTask({ token, task: taskData });

      if (data) {
        const tasksWithId = data.map((task) => ({
          ...task,
          id: task._id,
        }));
        setTasks(tasksWithId);
        return true; // Успешное добавление
      }
      return false;
    } catch (err) {
      console.error("Ошибка добавления задачи:", err);
      setError(err.message);
      throw err; // Перебрасываем ошибку для обработки в компоненте
    } finally {
      setLoading(false);
    }
  };

  // Редактирование задачи
  const updateTask = async (id, taskData) => {
    if (!user) return false;

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      const data = await editTask({ token, id, task: taskData });

      if (data) {
        const tasksWithId = data.map((task) => ({
          ...task,
          id: task._id,
        }));
        setTasks(tasksWithId);
        return true; // Успешное редактирование
      }
      return false;
    } catch (err) {
      console.error("Ошибка редактирования задачи:", err);
      setError(err.message);
      throw err; // Перебрасываем ошибку для обработки в компоненте
    } finally {
      setLoading(false);
    }
  };

  // Удаление задачи
  const removeTask = async (id) => {
    if (!user) return false;

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      const data = await deleteTask({ token, id });

      if (data) {
        const tasksWithId = data.map((task) => ({
          ...task,
          id: task._id,
        }));
        setTasks(tasksWithId);
        return true; // Успешное удаление
      }
      return false;
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
      setError(err.message);
      throw err; // Перебрасываем ошибку для обработки в компоненте
    } finally {
      setLoading(false);
    }
  };

  // Перемещение задачи в другой статус
  const moveTask = async (taskId, newStatus) => {
    if (!user) return false;

    try {
      // Оптимистичное обновление UI
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      setTasks(updatedTasks);

      // Отправляем изменения на сервер
      const token = localStorage.getItem("token");
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      if (!taskToUpdate) {
        throw new Error("Задача не найдена");
      }

      const data = await editTask({
        token,
        id: taskId,
        task: { ...taskToUpdate, status: newStatus },
      });

      if (data) {
        const tasksWithId = data.map((task) => ({
          ...task,
          id: task._id,
        }));
        setTasks(tasksWithId);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Ошибка перемещения задачи:", err);
      // В случае ошибки возвращаем исходное состояние
      const originalTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: task.status } : task
      );
      setTasks(originalTasks);
      setError(err.message);
      showError("Не удалось переместить задачу");
      return false;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        error,
        addTask,
        updateTask,
        removeTask,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
