import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { fetchTasks, postTask, editTask, deleteTask } from "../services/Api";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    const loadTasks = async () => {
      if (!user) {
        setTasks([]);
        return;
      }

      try {
        setLoading(true);
        setError("");
        const token = localStorage.getItem("token");
        const data = await fetchTasks({ token });

        if (data) {
          // Преобразуем _id в id для совместимости с компонентами
          const tasksWithId = data.map((task) => ({
            ...task,
            id: task._id,
          }));
          setTasks(tasksWithId);
        }
      } catch (err) {
        console.error("Ошибка загрузки задач:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user?.id]); // Используем только ID пользователя, а не весь объект

  // Добавление новой задачи
  const addTask = async (taskData) => {
    if (!user) return;

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
      }
    } catch (err) {
      console.error("Ошибка добавления задачи:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Редактирование задачи
  const updateTask = async (id, taskData) => {
    if (!user) return;

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
      }
    } catch (err) {
      console.error("Ошибка редактирования задачи:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Удаление задачи
  const removeTask = async (id) => {
    if (!user) return;

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
      }
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
      setError(err.message);
    } finally {
      setLoading(false);
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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
