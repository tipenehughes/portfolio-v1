import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const handleSetIsLight = () => {
        return isLight ? setIsLight(false) : setIsLight(true);
    };

    return (
        <ThemeContext.Provider
            value={{ isLight, handleSetIsLight }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
