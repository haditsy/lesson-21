import React, { useState } from "react";

export const ThemeContext = React.createContext({
  mode: "dark",
  onchangeMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [appMode, setAppMode] = useState("dark");

  const changeModeHandler = (e) => {
    if (e.target.checked) {
        return setAppMode('dark')
    }
    return setAppMode('light')
  }
  return (
    <ThemeContext.Provider value={{ mode: appMode, onchangeMode: changeModeHandler, }}>
      {children}
    </ThemeContext.Provider>
  );
};
