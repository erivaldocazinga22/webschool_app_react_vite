import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserResponseType, useAuth } from "./authContext";
import { api } from "../../services/axios.config";

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
        handleAuthorization()
    },[]);

    if(!user) {
        
        setTimeout(()=> {
            navigate("/auth/account");
        }, 5000)

        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )

}