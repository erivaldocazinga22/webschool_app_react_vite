import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, MessageCircle, PieChart, PlusSquare, Settings, User2 } from "lucide-react";
import Modal from "../../basics/Modal";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
export default function Sidebar() {
    const location = useLocation();

    const [active, setActive] = useState<string>("");

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    return (
        <aside className="w-basic min-w-basic h-screen py-2 flex flex-col items-center justify-between bg-webschool-100/15 text-webschool-100 dark:bg-webschool-300 transition-colors duration-150"> 
            <Link to="/">
                <div className={`w-14 h-14 relative`}>
                    <img src="/logomarca.svg"  alt="logomarca webschool" className="w-12 h-12" />
                </div>
            </Link>

            <NavBar.Root>
                <NavBar.Element  
                    active={active}
                    text="Dashboard" icon={PieChart} href="/" 
                />
                <NavBar.Element  
                    active={active}
                    text="Usuários" icon={User2} href="/users" 
                />
                <NavBar.Element  
                    active={active}
                    text="Publicações" icon={PlusSquare} href="/publication" 
                />
                <NavBar.Element  
                    active={active}
                    text="Mensagens" icon={MessageCircle} href="/messages" 
                />
                <NavBar.Element  
                    active={active}
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