import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import darkIcon from "../../assets/darkIcon.svg";
import lightIcon from "../../assets/lightIcon.svg";

function ThemeButton() {
  const themeContext = useContext(ThemeContext);
  const { theme, themeDispatch } = themeContext;
  return (
    <div>
      <button
        className={
          theme == "dark"
            ? "bg-dark border-1 border-primary rounded-circle"
            : "bg-light border-1 border-primary rounded-circle "
        }
        onClick={() =>
          theme == "light"
            ? themeDispatch({ type: "dark" })
            : themeDispatch({ type: "light" })
        }
      >
        {theme == "dark" ? (
          <img src={darkIcon} alt="no_image" />
        ) : (
          <img src={lightIcon} alt="no_image" />
        )}
      </button>
    </div>
  );
}

export default ThemeButton;
