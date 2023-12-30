import { ReactNode, useLayoutEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeProvider({ children }: { children: ReactNode}) {

    const [mode, setMode] = useState<"dark" | "light">(localStorage.theme || "light");

    useLayoutEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}