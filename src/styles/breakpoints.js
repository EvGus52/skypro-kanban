// Брейкпоинты для медиа-запросов
export const breakpoints = {
  mobile: "375px",
  tablet: "495px",
  desktop: "660px",
  large: "1200px",
};

// Медиа-запросы
export const media = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (max-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (max-width: ${breakpoints.desktop})`,
  large: `@media screen and (max-width: ${breakpoints.large})`,
};

// Общие стили для мобильных устройств
export const mobileStyles = `
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

// Общие стили для планшетов
export const tabletStyles = `
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

// Общие стили для больших экранов
export const largeScreenStyles = `
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: block;
  }
`;
