import React from "react";


export type UserDataType = {
    "id": number,
    "processo": number,
    "identificacao": string,
    "avatar_url": string | null,
    "nome": string,
    "sexo": string,
    "email": string,
    "telefone": string,
    "senha": string,
    "nivel": string,
    "created_at": Date | null,
    "updated_at": Date | null
}

export type SessionContextType = {
    user: UserDataType | null
    setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>
    token?: string | null
}