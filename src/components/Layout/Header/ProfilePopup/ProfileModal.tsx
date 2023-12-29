import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileModal() {


    return (
        <div className="z-40 absolute top-16 right-0 w-[200px] rounded-md overflow-hidden shadow dark:drop-shadow-md dark:shadow-webschool-300">
            <div className="h-14 bg-gradient-to-t to-blue-500 from-blue-400">
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
                    <Link to="/profile">
                        <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-zinc-300 dark:bg-webschool-200 overflow-hidden">
                            <User2 size={30} strokeWidth={1.5} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center pb-4 pt-10 bg-zinc-50 dark:bg-webschool-300">
                <span className="font-medium text-zinc-900 dark:text-white">Username</span>
                <span className="text-sm dark:text-webschool-100">email@exemplo.com</span>
            </div>
            <div className="border-t border-zinc-200 dark:border-webschool-200">
                <button className="w-full flex-1 px-4 py-2 flex items-center gap-1 justify-center bg-zinc-50 dark:bg-webschool-300 hover:bg-zinc-200/20 dark:hover:bg-webschool-200/80 text-zinc-900 dark:text-zinc-50">
                    <LogOut/>
                    <span>Terminar Sessão</span>
                </button>
            </div>
        </div>
    )
}
