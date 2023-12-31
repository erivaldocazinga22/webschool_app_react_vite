import { createContext, useContext } from "react";
import { SessionContextType } from "./types";

export const SessionContext = createContext<SessionContextType>({} as SessionContextType);
export const useSession = ()=> useContext(SessionContext);