import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Layout/Sidebar";
import Header from "../../Components/Layout/Header";
import { ToastContainer } from "react-toastify";
import { useTheme } from "../../Contexts/Theme/themeContext";
export default function RootLayout({ layout }: { layout: "default" | "messages"}) {
   const { mode } = useTheme();

  return (
    <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
      <Sidebar />
      <main className="w-full">
        {layout === "default" && <Header />}
        <Outlet />
      </main>

      {/* Notificações!! */}
      <ToastContainer 
        theme={mode}
        autoClose={1000}
      />
    </div>
  )
}
