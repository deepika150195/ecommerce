import { createContext, useReducer } from "react";

export const ThemeContext = createContext("");

export function ThemeProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function themeReducer(theme, action) {
  switch (action.type) {
    case "dark":
      theme = "dark";
      return theme;

    case "light":
      theme = "light";
      return theme;

    default:
      return;
  }
}

export const initialTheme = "dark";
