import { toast } from "react-toastify";

// Конфигурация для всех toast-уведомлений
const defaultConfig = {
  position: "top-right",
  autoClose: 1200,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Успешные уведомления
export const showSuccess = (message, options = {}) => {
  return toast.success(message, {
    ...defaultConfig,
    ...options,
  });
};

// Ошибки
export const showError = (message, options = {}) => {
  return toast.error(message, {
    ...defaultConfig,
    autoClose: 5000, // Ошибки показываем дольше
    ...options,
  });
};

// Предупреждения
export const showWarning = (message, options = {}) => {
  return toast.warning(message, {
    ...defaultConfig,
    ...options,
  });
};

// Информационные сообщения
export const showInfo = (message, options = {}) => {
  return toast.info(message, {
    ...defaultConfig,
    ...options,
  });
};

// Загрузка (с возможностью обновления)
export const showLoading = (message = "Загрузка...", options = {}) => {
  return toast.loading(message, {
    ...defaultConfig,
    autoClose: false,
    closeOnClick: false,
    draggable: false,
    ...options,
  });
};

// Обновление существующего toast
export const updateToast = (toastId, type, message, options = {}) => {
  return toast.update(toastId, {
    render: message,
    type: type,
    isLoading: false,
    ...defaultConfig,
    ...options,
  });
};

// Закрытие всех toast
export const dismissAll = () => {
  toast.dismiss();
};
