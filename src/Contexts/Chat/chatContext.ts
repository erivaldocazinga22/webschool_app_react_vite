import React, { createContext, useContext } from "react";
import { UserDataType } from "../Session/types";

export interface UserData extends UserDataType {
    lastMessage?: "Bom dia cota!"
}

type ChatContextType = {
    userMessage: UserData | null,
    setUserMessage: React.Dispatch<React.SetStateAction<UserData | null>>

}

export const ChatContext = createContext<ChatContextType>({} as ChatContextType);
export const useChat = ()=> useContext(ChatContext);