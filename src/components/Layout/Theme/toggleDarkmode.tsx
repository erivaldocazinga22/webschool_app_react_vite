import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/Theme/themeContext";

export default function ToggleDarkMode() {
    
    const { mode, handleDarkMode } = useTheme();

    return (
        <button 
            onClick={handleDarkMode} 
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-200/90 dark:bg-webschool-200 hover:bg-zinc-300/80 transition-colors duration-150"
        >
           {mode === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}