export const darkTheme = {
  colors: {
    // Основные цвета
    primary: "#565EEF",
    secondary: "#33399B",

    // Фоновые цвета
    background: "#151419",
    surface: "#20202C",
    cardBackground: "#20202C",
    popupBackground: "#20202C",

    // Текстовые цвета
    text: "#FFFFFF",
    textSecondary: "#94A6BE",
    textMuted: "#94A6BE",
    buttonText: "#FFFFFF",
    link: "#FFFFFF",
    checkboxSlider: "#565EEF",

    // Границы
    border: "#4E5566",
    borderLight: "rgba(148, 166, 190, 0.4)",

    // Цвета для категорий (поменяны местами для темной темы)
    orange: "#FF6D00",
    orangeText: "#FFE4C2",
    green: "#06B16E",
    greenText: "#B4FDD1",
    purple: "#9A48F1",
    purpleText: "#E9D4FF",
    gray: "#94A6BE",
    grayText: "#FFFFFF",

    // Hover эффекты
    hoverPrimary: "#4A52D1",
    hoverSecondary: "#565EEF",

    // Состояния
    active: "#94A6BE",
    activeText: "#151419",
    disabled: "#EAEEF6",

    // Тени и оверлеи
    overlay: "rgba(0, 0, 0, 0.8)",
    shadow: "0px 4px 67px -12px rgba(0, 0, 0, 0.13)",
    shadowLight: "0px 10px 39px 0px rgba(148, 166, 190, 0.40)",

    // Лоадер
    loaderGradient:
      "linear-gradient(90deg, #475B77 0%, #94A6BE 45.83%, #475B77 97.4%)",

    // Специальные цвета для календаря
    calendarBackground: "#151419",
    calendarCellHover: "#151419",
    calendarActiveDay: "#94A6BE",
    calendarActiveDayText: "#151419",

    // Кнопки
    buttonPrimary: "#565EEF",
    buttonSecondary: "transparent",
    buttonBorder: "#FFFFFF",
    secondaryButtonText: "#FFFFFF",
    secondaryButtonBorder: "#FFFFFF",
    secondaryButtonWeight: "normal",
    secondaryButtonHoverBorder: "transparent",

    // Формы
    inputBackground: "#20202C",
    inputBorder: "#94A6BE66",
    inputPlaceholder: "#94A6BE",
    titleInputWeight: "semibold",
    textareaReadonlyBackground: "#151419",

    // Логотипы
    logoDisplay: "none",
    logoDarkDisplay: "block",
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
    paddingAuth: "50px 60px",

    // Высоты
    headerHeight: "70px",
    buttonHeight: "30px",
    buttonHeightLarge: "40px",

    // Ширины
    maxWidth: "1260px",
    popupMaxWidth: "630px",
    popupMaxWidthSmall: "368px",
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
    modal: "8",
    overlay: "9",
    fixed: "10", // Хедер должен быть поверх модальных окон
  },
};
