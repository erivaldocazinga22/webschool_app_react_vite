import { createContext, useContext } from "react";

export type UserResponseType = {
    "id": number,
    "processo": number,
    "identificacao": string,
    "avatar_url": string,
    "nome": string,
    "sexo": "M" | "F",
    "email": string,
    "telefone": string,
    "nivel": number,
    "created_at": Date,
    "updated_at": Date
}


type AuthContextProps = {
    user: UserResponseType | null
    error: string | null
    handleDefineUser: (data: UserResponseType)=> void
    handleDefineError: (error: string)=> void
}

export const AuthContext = createContext({} as AuthContextProps);
export const useAuth = ()=> useContext(AuthContext);