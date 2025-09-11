import axios from "axios";
import { getErrorMessage } from "../utils/errorHandler";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

// Простая настройка axios с таймаутом
const apiClient = axios.create({
  timeout: 10000,
});

export async function validateToken({ token }) {
  try {
    const response = await apiClient.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { isValid: true, data: response.data };
  } catch (error) {
    return { isValid: false, error: getErrorMessage(error) };
  }
}
export async function fetchTasks({ token }) {
  try {
    const response = await apiClient.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function fetchTaskById({ token, id }) {
  try {
    const response = await apiClient.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.task;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function postTask({ token, task }) {
  try {
    const response = await apiClient.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function editTask({ token, id, task }) {
  try {
    const response = await apiClient.put(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function deleteTask({ token, id }) {
  try {
    const response = await apiClient.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
