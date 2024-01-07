import ChatMessages from "../../Components/Layout/Main/Messager/ChatMessage";
import SidebarMessages from "../../Components/Layout/Main/Messager/SidebarMessages";
import ChatProvider from "../../Contexts/Chat/chatProvider";


export default function Message() {
    return (
        <ChatProvider>
            <div className="flex h-screen">
                <SidebarMessages />
                <ChatMessages />
            </div>
        </ChatProvider>
    )
}