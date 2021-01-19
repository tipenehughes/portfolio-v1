import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const theme = window.matchMedia("(prefers-color-scheme: light").matches
        ? true
        : false;

    const [isLight, setIsLight] = useState(theme);

    const handleSetIsLight = () => {
        return isLight ? setIsLight(false) : setIsLight(true);
    };

    return (
        <ThemeContext.Provider value={{ isLight, handleSetIsLight }}>
            {children}
        </ThemeContext.Provider>
    );
};
