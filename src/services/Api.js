import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

// Функция для проверки валидности токена
export async function validateToken({ token }) {
  try {
    console.log(
      "🔐 validateToken: проверяем токен",
      token?.substring(0, 10) + "..."
    );

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("✅ validateToken: токен валидный, статус:", response.status);
    return { isValid: true, data: response.data };
  } catch (error) {
    console.error("❌ validateToken: ошибка валидации токена:", error);
    console.error("Статус ошибки:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    if (error.response?.status === 401 || error.response?.status === 403) {
      console.log("❌ validateToken: токен недействителен (401/403)");
      return { isValid: false, error: "Недействительный токен" };
    }
    console.log("❌ validateToken: другая ошибка:", error.message);
    return { isValid: false, error: error.message || "Ошибка проверки токена" };
  }
}
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

export async function fetchTaskById({ token, id }) {
  try {
    console.log("Отправляем запрос на:", API_URL + "/" + id);
    console.log("Токен:", token);
    console.log("ID задачи:", id);

    const data = await axios.get(API_URL + "/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Полный ответ сервера:", data);
    console.log("Данные задачи:", data.data);

    return data.data.task;
  } catch (error) {
    console.error("Детали ошибки:", error);
    console.error("Статус ответа:", error.response?.status);
    console.error("Данные ошибки:", error.response?.data);

    if (error.response?.status === 404) {
      throw new Error("Задача не найдена");
    }

    throw new Error(
      error.response?.data?.error ||
        error.message ||
        "Неизвестная ошибка при загрузке задачи"
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
