export default function NavBarRoot({ children } : { children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-2 items-center">
            {children}
        </div>
    )   
}