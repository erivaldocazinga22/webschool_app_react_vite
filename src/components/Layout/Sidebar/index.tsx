import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
export default function Sidebar() {
    return (
        <aside className="w-basic min-w-basic h-screen py-2 flex flex-col items-center justify-between bg-zinc-100 text-webschool-100 dark:bg-webschool-300 transition-colors duration-150"> 
            <Link to="/">
                <div className={`w-14 h-14 relative`}>
                    <img src="/logomarca.svg"  alt="logomarca webschool" className="w-12 h-12" />
                </div>
            </Link>

            <div className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer bg-zinc-300/50  dark:bg-webschool-200 transition-colors duration-150">
                <Settings />
            </div>
        </aside>
    )
}