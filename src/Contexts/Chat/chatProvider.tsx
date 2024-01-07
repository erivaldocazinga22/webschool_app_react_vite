import { ReactNode, useState } from "react";
import { ChatContext, UserData } from "./chatContext";



export default function ChatProvider({ children }: { children: ReactNode}) {

    const [userMessage, setUserMessage] = useState<UserData | null>(null);

    return (
        <ChatContext.Provider value={{ userMessage, setUserMessage }}>
            {children}
        </ChatContext.Provider>
    )
}