import axios from "axios";
import { getErrorMessage } from "../utils/errorHandler";

const API_URL = "https://wedev-api.sky.pro/api/user";

// Простая настройка axios
const authClient = axios.create({
  timeout: 10000,
});

export async function signIn(userData) {
  try {
    const response = await authClient.post(`${API_URL}/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.user;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await authClient.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return response.data.user;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getUsers() {
  try {
    const response = await authClient.get(API_URL);
    return response.data.users;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
