import axios from "axios";
import { User2 } from "lucide-react";
import { useEffect, useState } from "react";

type UserData = {
    id: number,
    avatar_url: string,
    created_at: string,
    email: string,
    identificacao: string,
    nivel: string | number,
    nome: string,
    processo: number,
    senha: string
    sexo: "F" | "M",
    telefone: string,
    updated_at: string | null
}
export default function ListUsers() {
    
    const [user,setUser] = useState<UserData[] | []>([]);


    useEffect(()=> {
        const handleFetch = async ()=> {
            setUser((await axios("http://localhost:8000/api/dashboard")).data);
        }

        handleFetch();
    },[]);
    
    return (
        <div className="flex flex-col gap-2">
            {user.map(use => (
                <div key={use.id} className="px-4 py-2 flex gap-2 rounded-lg dark:bg-webschool-300">
                    <span className="w-12 h-12 relative rounded-xl overflow-hidden">
                        {use.avatar_url ? (
                            <img 
                                className=""
                                src={use.avatar_url.includes("https") ? use.avatar_url : `http://localhost:2206/api/files/${use.avatar_url}`} alt={`profile photo of ${use.nome}`} />
                        ): (
                            <User2 size={30} strokeWidth={1.5} />
                        )}
                    </span>
                    <div>
                        <span>{use.email}</span> <br />
                        <span>{use.nome}</span> <br />
                        <span>{use.telefone}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}