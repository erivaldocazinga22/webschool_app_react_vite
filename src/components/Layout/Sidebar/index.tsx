import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, MessageCircle, PieChart, PlusSquare, Settings, User2 } from "lucide-react";
import Modal from "../../basics/Modal";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
export default function Sidebar() {
    const location = useLocation();

    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") setActive(0);
        if (path === "/users") setActive(1);
        if (path === "/publication") setActive(2);
        if (path === "/messages") setActive(3);
        if (path === "/vitrine") setActive(4);
    }, [location.pathname]);

    const handleIsSidebarOpen = (index: number) => {
        setActive(index);
    };

    return (
        <aside className="w-basic min-w-basic h-screen py-2 flex flex-col items-center justify-between bg-webschool-100/15 text-webschool-100 dark:bg-webschool-300 transition-colors duration-150"> 
            <Link to="/">
                <div className={`w-14 h-14 relative`}>
                    <img src="/logomarca.svg"  alt="logomarca webschool" className="w-12 h-12" />
                </div>
            </Link>

            <NavBar.Root>
                <NavBar.Element 
                    index={0} 
                    aberto={active === 0}
                    alternarVisibilidade={handleIsSidebarOpen}
                    text="Dashboard" icon={PieChart} href="/" 
                />
                <NavBar.Element 
                    index={1} 
                    aberto={active === 1}
                    alternarVisibilidade={handleIsSidebarOpen}
                    text="Usuários" icon={User2} href="/users" 
                />
                <NavBar.Element 
                    index={2} 
                    aberto={active === 2}
                    alternarVisibilidade={handleIsSidebarOpen}
                    text="Publicações" icon={PlusSquare} href="/publication" 
                />
                <NavBar.Element 
                    index={3} 
                    aberto={active === 3}
                    alternarVisibilidade={handleIsSidebarOpen}
                    text="Mensagens" icon={MessageCircle} href="/messages" 
                />
                <NavBar.Element 
                    index={4} 
                    aberto={active === 4}
                    alternarVisibilidade={handleIsSidebarOpen}
                    text="Vitrine" icon={LayoutGrid} href="/vitrine" 
                />
            </NavBar.Root>

            <Modal element={
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer bg-zinc-300/50  dark:bg-webschool-200 transition-colors duration-150">
                    <Settings />
                </div>
            }>
                Definições
            </Modal>
        </aside>
    )
}