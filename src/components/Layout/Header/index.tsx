//import ToggleDarkMode from "../Theme/toggleDarkmode";
import ProfilePopup from "./ProfilePopup";

export default function Header() {
    return (
        <div className="w-full flex-1 h-basic px-6 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-semibold">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-2">
                {/* <ToggleDarkMode /> */}
            
                <ProfilePopup.Root>
                    <ProfilePopup.Popup/>
                </ProfilePopup.Root>
            </div>
        </div>
    )
}