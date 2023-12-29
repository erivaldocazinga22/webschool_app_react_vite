import { toast } from "react-toastify";
import { useAuth } from "../contexts/auth/authContext";
import React from "react";

export default function Dashboard() {

  const { user } = useAuth();

  const updateToast = () => toast.success("toastId.current");
  
  return (
    <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        <h1>Dashboard</h1>

        <span>Name: {user?.nome}</span>

        <button onClick={updateToast}>abrir2</button>
    </div>
  )
}