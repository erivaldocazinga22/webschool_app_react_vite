import { useEffect, useRef, useState } from "react";
import { ListFilter, MessageCircleMore, Pin, Search, User2, Users2 } from "lucide-react";

import { useSession } from "../../../../Contexts/Session/sessionContext";
import PopUp from "../../../basics/PopUp";
import { api } from "../../../../axios.config";
import { useChat } from "../../../../Contexts/Chat/chatContext";

export default function SidebarMessages() {
    const { user } = useSession(); 
    const { setUserMessage } = useChat(); 
    const SidebarMessagesRef = useRef(null);

    const [users, setUsers] = useState([]);
    const [smss, setSmss] = useState([]);
    useEffect(() => {
        
        const getSMS = async ()=> {
            const response = await api("/", {
                baseURL: "http://127.0.0.1:8000/api/dashboard"
            });

            if (!response) return;

            const data = await response.data;
            if (data.length > 0) {
                setUsers([...data.map(item => ({ ...item, lastMessage: "Bom dia cota!" }))]);
                setSmss(data[0].smss);
            }
            
        }

        getSMS()
        
    }, [])

    useEffect(() => {
        if (SidebarMessagesRef.current) {
          SidebarMessagesRef.current.scrollTop = SidebarMessagesRef.current.scrollHeight;
        }
    }, [smss]);



    return (
        <section className="w-[350px] flex flex-col gap-1 border-r border-zinc-200 dark:border-webschool-300">
            {/* Header das mensagens */}
            <header className="w-full p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-zinc-300 dark:bg-webschool-200 overflow-hidden">
                        {user?.avatar_url ? (
                            <img src={user?.avatar_url} alt={`profile photo of ${user.nome}`} />
                        ): (
                            <User2 size={24} strokeWidth={1.5} />
                        )}
                    </div>
                    <h1 className="font-medium text-2xl">Conversas</h1>
                </div>
                <PopUp element={
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-200 dark:hover:bg-webschool-200">
                        <ListFilter strokeWidth={1.5}/>
                    </div>
                }>
                    <div className="absolute z-40 top-12 left-0">
                        <div className="w-max p-2 border border-zinc-200 bg-zinc-100 dark:bg-webschool-200 rounded-md shadow-lg">
                            <div className="px-3 py-1">
                                <h1 className="text-zinc-400 dark:text-webschool-100 select-none">Filtrar conversar por</h1>
                            </div>
                            <div>
                                <ul>
                                    <li className="px-3 py-[6px] flex items-center gap-2 select-none rounded-md hover:bg-zinc-200 dark:hover:bg-webschool-100/15">
                                        <MessageCircleMore size={20} strokeWidth={1.5} />
                                        <span>Não lidas</span>
                                    </li>
                                    <li className="px-3 py-[6px] flex items-center gap-2 select-none rounded-md hover:bg-zinc-200 dark:hover:bg-webschool-100/15">
                                        <Pin size={20} strokeWidth={1.5} />
                                        <span>Favoritos</span>
                                    </li>
                                    <li className="px-3 py-[6px] flex items-center gap-2 select-none rounded-md hover:bg-zinc-200 dark:hover:bg-webschool-100/15">
                                        <Users2 size={20} strokeWidth={1.5} />
                                        <span>Grupos</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </PopUp>
            </header>
            {/* Barra de pesquisa */}
            <div className="w-full px-4 pb-4 flex items-center justify-between">
                <div className="h-9 relative flex-1 rounded-md overflow-hidden bg-zinc-200 dark:bg-webschool-400 border border-zinc-100 dark:border-webschool-200">
                    <div className="w-full h-full px-2 flex items-center"> 
                        <Search  size={20} strokeWidth={1.5} className="-mr-2 text-webschool-100"/>
                        <input 
                            type="search" 
                            className="w-full h-full px-4 bg-transparent outline-none placeholder:text-webschool-100"
                            placeholder="Pesquisar ou começar uma nova conversa..."
                        />
                    </div>
                    <span className="h-[1.7px] w-full flex absolute bottom-0 left-0 bg-webschool-first"></span>
                </div>
            </div>
            {/* Menu de mensagesn */}
            <div ref={SidebarMessagesRef} className="px-4 flex-1 h-auto divide-y dark:divide-webschool-300 overflow-y-auto  scrollbar-thin dark:scrollbar-thumb-webschool-200 dark:scrollbar-track-webschool-400">
                { users.length !== 0 ? users.map((userTest, index)=> (
                    <div key={index} onClick={()=> setUserMessage(userTest)} className="flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-zinc-200 dark:hover:bg-webschool-300">
                        <div className="relative w-12 h-12">
                            <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-zinc-300 dark:bg-webschool-200">
                                {userTest?.avatar_url ? (
                                    <img src={userTest.avatar_url.includes("http") ? (
                                        userTest?.avatar_url
                                    ): (
                                        `http://localhost:2206/api/files/${userTest?.avatar_url}`
                                    )} alt={`profile photo of ${userTest.nome}`} />
                                ): (
                                    <User2 size={24} strokeWidth={1.5} />
                                )}
                            </div>
                            <div className="absolute top-1 right-0 w-3 h-3 border-2 border-zinc-200 dark:border-zinc-800 bg-emerald-500 rounded-full"></div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-zinc-900 dark:text-zinc-50 font-semibold">{userTest.nome}</span>
                            <span className="text-sm text-webschool-100">{userTest.lastMessage}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <Pin 
                                size={12}
                                strokeWidth={1.5}
                                className=""
                            />
                            <small>1:20</small>
                            <small className="w-4 h-4 text-xs flex items-center justify-center rounded-full text-white bg-webschool-first/80" >2</small>
                        </div>
                    </div>
                )): 
                
                <div className="flex-1 h-full flex items-center justify-center">
                    <h1>Conece uma conversa</h1>
                </div>
                }
            </div>
        </section>
    )
}