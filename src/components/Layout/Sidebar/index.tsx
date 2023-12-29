import { Link } from "react-router-dom";
import { LayoutGrid, MessageCircle, PieChart, PlusSquare, Settings, User2 } from "lucide-react";

import Modal from "../../basics/Modal";
import Icon from "../../basics/Icon";
import NavBar from "./NavBar";

export default function Sidebar() {
    return(
        <aside className="w-basic min-w-basic h-screen py-2 flex flex-col items-center justify-between bg-zinc-100 text-webschool-100 dark:bg-webschool-300 transition-colors duration-150">
            <Link to="/">
                <div className={`w-14 h-14 relative`}>
                    <img src="/logomarca.svg"  alt="logomarca webschool" className="w-12 h-12" />
                </div>
            </Link>

            <NavBar.Root>
                <NavBar.Element text="Dashboard" icon={PieChart} href="/" />
                <NavBar.Element text="Usuários" icon={User2} href="/users" />
                <NavBar.Element text="Publicações" icon={PlusSquare} href="/publication" />
                <NavBar.Element text="Mensagens" icon={MessageCircle} href="/messages" />
                <NavBar.Element text="Vitrine" icon={LayoutGrid} href="/vitrine" />
            </NavBar.Root>

            <div>
                <Modal style={{modalBox: "text-zinc-900 dark:text-white"}}  element={
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer bg-zinc-300/50  dark:bg-webschool-200 transition-colors duration-150">
                        <Icon icon={Settings}  />
                    </div>
                }>
                    Definições
                </Modal>
                
            </div>
        </aside>
    )
}