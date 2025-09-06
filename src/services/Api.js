import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";
export async function fetchTasks({ token }) {
  try {
    console.log("Отправляем запрос на:", API_URL);
    console.log("Токен:", token);

    const data = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // добавляем "Bearer " к токену
      },
    });

    console.log("Полный ответ сервера:", data);
    console.log("Данные задач:", data.data);

    return data.data.tasks;
  } catch (error) {
    console.error("Детали ошибки:", error);
    console.error("Статус ответа:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    throw new Error(
      error.response?.data?.error ||
        error.message ||
        "Неизвестная ошибка при загрузке данных"
    );
  }
}

export async function postTask({ token, task }) {
  try {
    console.log("Отправляем POST запрос на:", API_URL);
    console.log("Токен:", token);
    console.log("Данные задачи:", task);

    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    console.log("Полный ответ сервера:", data);
    console.log("Обновленный список задач:", data.data);

    return data.data.tasks;
  } catch (error) {
    console.error("Детали ошибки:", error);
    console.error("Статус ответа:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    throw new Error(
      error.response?.data?.error ||
        error.message ||
        "Неизвестная ошибка при создании задачи"
    );
  }
}

export async function editTask({ token, id, task }) {
  try {
    console.log("Отправляем PUT запрос на:", API_URL + "/" + id);
    console.log("Токен:", token);
    console.log("ID задачи:", id);
    console.log("Данные задачи:", task);

    const data = await axios.put(API_URL + "/" + id, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    console.log("Полный ответ сервера:", data);
    console.log("Обновленный список задач:", data.data);

    return data.data.tasks;
  } catch (error) {
    console.error("Детали ошибки:", error);
    console.error("Статус ответа:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    throw new Error(
      error.response?.data?.error ||
        error.message ||
        "Неизвестная ошибка при редактировании задачи"
    );
  }
}

export async function deleteTask({ token, id }) {
  try {
    console.log("Отправляем DELETE запрос на:", API_URL + "/" + id);
    console.log("Токен:", token);
    console.log("ID задачи для удаления:", id);

    const data = await axios.delete(API_URL + "/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    console.log("Полный ответ сервера:", data);
    console.log("Обновленный список задач:", data.data);

    return data.data.tasks;
  } catch (error) {
    console.error("Детали ошибки:", error);
    console.error("Статус ответа:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    throw new Error(
      error.response?.data?.error ||
        error.message ||
        "Неизвестная ошибка при удалении задачи"
    );
  }
}