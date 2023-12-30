import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../Contexts/Theme/themeContext";

export default function ToggleDarkMode() {
    const { mode, setMode } = useTheme();

    function handleDarkMode() {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.theme = newMode;
    }

    return (
        <button 
            onClick={handleDarkMode} 
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-200/90 hover:bg-zinc-300/80 dark:bg-webschool-200 dark:hover:bg-webschool-100/20 transition-colors duration-150"
        >
           {mode === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}