import { useState, useRef, useEffect, ReactNode } from "react";
import { User2 } from "lucide-react";

interface ProfilePopupRootProps {
  children: ReactNode;
}

export default function ProfilePopupRoot({ children }: ProfilePopupRootProps): JSX.Element {
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

  const handleProfilePhotoClick = () => {
    setProfilePopupOpen(!isProfilePopupOpen);
  };

  return (
    <div className="relative">
      <div
        id="profilephoto"
        className="relative w-12 h-12 cursor-pointer text-webschool-100 rounded-2xl overflow-hidden bg-zinc-300/80 dark:bg-webschool-200 flex items-center justify-center transition-colors duration-150"
        onClick={handleProfilePhotoClick}
        ref={profilePhotoRef}
      >
        <User2 strokeWidth={1.5} />
      </div>
      {isProfilePopupOpen && <div ref={profilePopupRef}>{children}</div>}
    </div>
  );
}
