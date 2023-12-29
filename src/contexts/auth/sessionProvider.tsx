import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserResponseType, useAuth } from "./authContext";
import { api } from "../../services/axios.config";
import Loader from "../../components/basics/Loader";

export default function SessionProvider({ children }: { children : ReactNode}) {
    const { user, handleDefineUser, handleDefineError } = useAuth();
    const navigate = useNavigate();

    const handleAuthorization = async () => {
        const response = await api.post("/validate");

        const { error, message, data} = response.data;

        if (error) {
            handleDefineError(message);
            return false;
        }

        const dataUser: UserResponseType = data;

        handleDefineUser(dataUser);
        return true;
    }
    
    useEffect(()=> {
        handleAuthorization();
    },[]);

    if(!user) {

            navigate("/auth/account", { replace: true });
        

        return (
            <div className="w-screen h-screen flex items-center justify-center overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
                <Loader />
            </div>
        )
    }

    return (
        <>{children}</>
    )

}