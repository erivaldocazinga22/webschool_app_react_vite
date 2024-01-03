import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { destroyCookie } from "nookies";

import { useSession } from "../../../../Contexts/Session/sessionContext";
export default function ProfileModal() {

    const { user } = useSession();


    const handleLogOut = ()=> {
        destroyCookie(undefined, "webschool.token");
        window.location.reload();
    }

    return (
        <div className="z-40 absolute top-16 right-0 w-[200px] rounded-md overflow-hidden shadow dark:drop-shadow-md dark:shadow-webschool-300">
            <div className="h-14 bg-gradient-to-t to-blue-500 from-blue-400">
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
                    <Link to="/profile">
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-zinc-300 dark:bg-webschool-200 overflow-hidden">
                            {user?.avatar_url ? (
                                <img src={user?.avatar_url} alt={`profile photo of ${user.nome}`} />
                            ): (
                                <User2 size={24} strokeWidth={1.5} />
                            )}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center pb-4 pt-10 bg-zinc-50 dark:bg-webschool-300">
                <span className="font-medium text-zinc-900 dark:text-white">{user?.nome}</span>
                <span className="text-sm dark:text-webschool-100">{user?.email}</span>
            </div>
            <div className="border-t border-zinc-200 dark:border-webschool-200">
                <button onClick={handleLogOut} className="w-full flex-1 px-4 py-2 flex items-center gap-1 justify-center bg-zinc-50 dark:bg-webschool-300 hover:bg-zinc-200/20 dark:hover:bg-webschool-200/80 text-zinc-900 dark:text-zinc-50">
                    <LogOut/>
                    <span>Terminar Sessão</span>
                </button>
            </div>
        </div>
    )
}

