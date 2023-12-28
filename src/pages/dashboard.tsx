import { useAuth } from "../contexts/auth/authContext"

export default function Dashboard() {

  const { user } = useAuth();


  console.log(user);
  
  return (
    <div className="w-screen h-screen flex overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
        <h1>Dashboard</h1>

        <span>Name: {user?.nome}</span>
    </div>
  )
}