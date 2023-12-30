export default function Header() {
    return (
        <header className="w-full flex-1 h-basic px-6 flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-semibold">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-2">
                {/* <ToggleDarkMode /> */}
            
                {/* <ProfilePopup.Root>
                    <ProfilePopup.Popup/>
                </ProfilePopup.Root> */}
            </div>
        </header>
    )
}