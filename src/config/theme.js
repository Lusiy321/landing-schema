/**
 * THEME CONFIG
 * Измените цвета здесь, чтобы поменять всю цветовую гамму сайта.
 */
export const theme = {
  colors: {
    // Основные цвета
    primary: "#c4ed82", // Зелёно-жёлтый акцент (кнопки, хайлайты)
    primaryDark: "#aac976", // Тёмный вариант акцента
    primaryLight: "rgba(196, 237, 130, 0.5)", // Полупрозрачный акцент
    primaryHover: "#b5de6e", // Hover на кнопках

    // Текстовые цвета
    textDark: "#3f5028", // Тёмный текст на кнопке
    textPrimary: "#1a1a1a", // Основной текст
    textSecondary: "#555555", // Вторичный текст
    textLight: "#777777", // Светлый текст

    // Фоны
    bgWhite: "#ffffff",
    bgLight: "#f8f7f3", // Очень светлый бежевый
    bgMedium: "#eeecd6", // Светло-бежевый
    bgCard: "#f0ede6", // Карточки
    bgDark: "#ebead6", // Чуть темнее

    // Границы и разделители
    border: "#e0ddd4",

    // Тёмная секция footer
    footerBg: "#1a1a1a",
    footerText: "#ffffff",
  },

  fonts: {
    family: "'Lexend', 'Lexend Fallback', sans-serif",
    sizeBase: "16px",
  },

  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    xl: "32px",
    full: "999px",
  },

  spacing: {
    sectionPadding: "80px 0",
    containerMaxWidth: "1160px",
    containerPadding: "0 24px",
  },
};

export default theme;
