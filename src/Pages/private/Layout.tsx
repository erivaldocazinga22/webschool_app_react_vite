import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SessionProvider from "../../Contexts/Session/sessionProvider";
import Sidebar from "../../Components/Layout/Sidebar";
import Header from "../../Components/Layout/Header";
import { useTheme } from "../../Contexts/Theme/themeContext";
export default function RootLayout({ layout }: { layout: "default" | "messages"}) {
  
  const { mode } = useTheme();

  return (
    <SessionProvider>
      <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        <Sidebar />
        <main className="w-full">
          {layout === "default" && <Header />}
          <Outlet />
        </main>
        <ToastContainer theme={mode} autoClose={1000} />
      </div>
    </SessionProvider>
  )
}
