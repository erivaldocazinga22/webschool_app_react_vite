import { ReactNode, useState } from "react";
import { AuthContext, UserResponseType } from "./authContext";

export default function AuthProvider({ children }:{ children: ReactNode }) {
    const [user, setUser] = useState<UserResponseType | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const handleDefineUser = (data: UserResponseType)=> {
        setUser(data);
    }
    
    const handleDefineError = (error: string)=> {
        setError(error);
    }

    return (
        <AuthContext.Provider value={{user, error, handleDefineUser, handleDefineError }}>
            {children}
        </AuthContext.Provider>
    )
}