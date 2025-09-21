// Простая утилита для обработки ошибок
export const getErrorMessage = (error) => {
  // Если есть ответ от сервера
  if (error.response) {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      return "Ошибка авторизации";
    }
    if (status === 404) {
      return "Не найдено";
    }
    if (status >= 500) {
      return "Ошибка сервера";
    }

    // Возвращаем сообщение от сервера или дефолтное
    return error.response.data?.error || `Ошибка ${status}`;
  }

  // Если нет ответа (сетевая ошибка)
  if (error.request) {
    return "Ошибка сети. Проверьте подключение";
  }

  // Обычная ошибка
  return error.message || "Произошла ошибка";
};
