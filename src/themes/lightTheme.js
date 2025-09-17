export const lightTheme = {
  colors: {
    // Основные цвета
    primary: "#565EEF",
    secondary: "#33399B",

    // Фоновые цвета
    background: "#f1f1f1",
    surface: "#FFFFFF",
    cardBackground: "#FFFFFF",
    popupBackground: "#FFFFFF",

    // Текстовые цвета
    text: "#000000",
    textSecondary: "#94A6BE",
    textMuted: "#94A6BE",
    buttonText: "#FFFFFF",
    link: "#565EEF",
    checkboxSlider: "#94A6BE",

    // Границы
    border: "rgba(148, 166, 190, 0.4)",
    borderLight: "rgba(148, 166, 190, 0.4)",

    // Цвета для категорий
    orange: "#FF6D00",
    orangeText: "#FFE4C2",
    green: "#06B16E",
    greenText: "#B4FDD1",
    purple: "#9A48F1",
    purpleText: "#E9D4FF",
    gray: "#94A6BE",
    grayText: "#FFFFFF",

    // Hover эффекты
    hoverPrimary: "#33399B",
    hoverSecondary: "#565EEF",

    // Состояния
    active: "#94A6BE",
    activeText: "#FFFFFF",
    disabled: "#EAEEF6",

    // Тени и оверлеи
    overlay: "rgba(0, 0, 0, 0.8)",
    shadow: "0px 4px 67px -12px rgba(26, 56, 101, 0.21)",
    shadowLight: "0px 10px 39px 0px rgba(26, 56, 101, 0.21)",

    // Лоадер
    loaderGradient:
      "linear-gradient(90deg, #c1cddc 25%, #e9eef7 50%, #c1cddc 75%)",

    // Специальные цвета для календаря
    calendarBackground: "#FFFFFF",
    calendarCellHover: "#f1f1f1",
    calendarActiveDay: "#94A6BE",
    calendarActiveDayText: "#FFFFFF",

    // Кнопки
    buttonPrimary: "#565EEF",
    buttonSecondary: "transparent",
    buttonBorder: "#565EEF",
    secondaryButtonText: "#565EEF",
    secondaryButtonBorder: "#565EEF",
    secondaryButtonWeight: "medium",
    secondaryButtonHoverBorder: "#565EEF",

    // Формы
    inputBackground: "#FFFFFF",
    inputBorder: "#D4DBE5",
    inputPlaceholder: "#94A6BE",
    titleInputWeight: "bold",
    textareaReadonlyBackground: "#eaeef6",

    // Логотипы
    logoDisplay: "block",
    logoDarkDisplay: "none",
  },

  // Размеры
  sizes: {
    borderRadius: "10px",
    borderRadiusSmall: "4px",
    borderRadiusLarge: "24px",

    // Отступы
    padding: "30px",
    paddingSmall: "16px",
    paddingLarge: "50px",

    // Высоты
    headerHeight: "70px",
    buttonHeight: "30px",
    buttonHeightLarge: "40px",

    // Ширины
    maxWidth: "1260px",
    popupMaxWidth: "630px",
    popupMaxWidthSmall: "370px",
  },

  // Шрифты
  fonts: {
    family: '"Roboto", Arial, Helvetica, sans-serif',
    size: {
      small: "10px",
      normal: "14px",
      large: "20px",
      xlarge: "24px",
    },
    weight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1",
      normal: "1.5",
      relaxed: "1.8",
    },
  },

  // Анимации
  animations: {
    transition: "0.5s",
    cardAnimation: "card-animation 500ms linear",
  },

  // Z-index
  zIndex: {
    dropdown: "2",
    popup: "5",
    popupNew: "6",
    popupBrowse: "7",
    fixed: "3",
    modal: "8",
    overlay: "9",
  },
};
