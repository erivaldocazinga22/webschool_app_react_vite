import { useState, useRef, useEffect, ReactNode } from "react";
import { User2 } from "lucide-react";
import { useSession } from "../../../../Contexts/Session/sessionContext";

interface ProfilePopupRootProps {
  children: ReactNode;
}

export default function ProfilePopupRoot({ children }: ProfilePopupRootProps): JSX.Element {
  const { user } = useSession();

  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const profilePhotoRef = useRef<HTMLDivElement>(null);
  const profilePopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profilePhotoRef.current &&
        !profilePhotoRef.current.contains(event.target as Node) &&
        profilePopupRef.current &&
        !profilePopupRef.current.contains(event.target as Node)
      ) {
        setProfilePopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profilePhotoRef, profilePopupRef]);




  return (
    <div className="relative">
      <div
        id="profilephoto"
        className="relative w-12 h-12 cursor-pointer text-webschool-100 rounded-2xl overflow-hidden bg-zinc-300/80 dark:bg-webschool-200 flex items-center justify-center transition-colors duration-150"
        onClick={() => setProfilePopupOpen(!isProfilePopupOpen)}
        ref={profilePhotoRef}
      >
        {user?.avatar_url ? (
            <img src={user?.avatar_url} alt={`profile photo of ${user.nome}`} />
        ): (
            <User2 size={30} strokeWidth={1.5} />
        )}
      </div>
      {isProfilePopupOpen && <div ref={profilePopupRef}>{children}</div>}
    </div>
  );
}
