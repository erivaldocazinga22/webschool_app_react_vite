import React, { useEffect, useState } from "react";
import { SessionContext } from "./sessionContext";
import { UserDataType } from "./types";
import { api } from "../../axios.config";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataType | null>(null);

  useEffect(() => {
    const handleAuthenticated = async () => {
      const { "webschool.token": token } = parseCookies();

      if (token) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        try {
          const response = await api.post("/validate");
          const { data: user } = response.data;
          setUser(user);
        } catch (error) {
          console.error("Validation error:", error);
        }
      } else {
        navigate("/login", { replace: true });
      }
    };
    handleAuthenticated();
  }, [navigate]);

  return user && (
    <SessionContext.Provider value={{ user, setUser }}>
        {children}
    </SessionContext.Provider>
  )
}
