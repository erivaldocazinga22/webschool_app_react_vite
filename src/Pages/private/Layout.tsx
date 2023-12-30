import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Layout/Sidebar";
import Header from "../../Components/Layout/Header";

export default function RootLayout() {
  return (
    <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
      <Sidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
