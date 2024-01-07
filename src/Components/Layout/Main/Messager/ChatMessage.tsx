import { User2 } from "lucide-react";
import { useChat } from "../../../../Contexts/Chat/chatContext";


export default function ChatMessages() {
    const { userMessage } = useChat();

    if (!userMessage) {
        return (
            <div className="flex-1 h-screen flex items-center justify-center">
                <h1>Nenhum usuário selecionado!</h1>
            </div>
        )
    }

    return (
        <section className="flex-1">
            <div className="h-[70px] w-full dark:bg-webschool-300">
                <div className="flex gap-4 items-center py-2 px-2">
                    <div className="relative w-12 h-12">
                        <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-zinc-300 dark:bg-webschool-200">
                            {userMessage?.avatar_url ? (
                                <img src={userMessage.avatar_url.includes("http") ? (
                                    userMessage?.avatar_url
                                ): (
                                    `http://localhost:2206/api/files/${userMessage?.avatar_url}`
                                )} alt={`profile photo of ${userMessage.nome}`} />
                            ): (
                                <User2 size={24} strokeWidth={1.5} />
                            )}
                        </div>
                        <div className="absolute top-1 right-0 w-3 h-3 border-2 border-zinc-200 dark:border-zinc-800 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="font-semibold text-white">{userMessage.nome}</span>
                        <small className="dark:text-webschool-100">escrevndo...</small>
                    </div>
                </div>
            </div>
        </section>
    )
}