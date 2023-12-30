import React, { createContext, useContext } from "react";

type ThemeContextType = {
    mode: "dark" | "light",
    setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
export const useTheme = ()=> useContext(ThemeContext);