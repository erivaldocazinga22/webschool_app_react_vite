import { Outlet } from "react-router-dom";
import SessionProvider from "../contexts/auth/sessionProvider";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

export default function App() {
  return (
    <SessionProvider>
      <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        <Sidebar />
        <main className="">
          <Header />
          <Outlet />
        </main>
      </div>
    </SessionProvider>
  )
}