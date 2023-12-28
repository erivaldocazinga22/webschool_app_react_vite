import { ReactNode, useState } from "react";
import { setCookie } from "nookies";

import { AuthContext, UserResponseType } from "./authContext";
import { SignInRequestType } from "../../schemes/SignInSheme";
import { api } from "../../services/axios.config";

export default function AuthProvider({ children }:{ children: ReactNode }) {
    const [user, setUser] = useState<UserResponseType | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const hendleSignIn = async ({ email, password, remember_me }: SignInRequestType) => {
        console.log(`============== REQUEST ==============`);
        console.log({ email, password, remember_me});

        try {
            const response = await api.post("/account", {email, password});
            
            if(response.data.error) {
               return setError(response.data.message); 
            }

            const user: UserResponseType = response.data.results.user;
            const token: string = response.data.results.token;
 
            setUser({...user, nivel: +user.nivel});
            setCookie(undefined, "webschool.token", token, {
                maxAge: 60 * 60 * 24* 7 // 7 days
            });

            console.log(`============== RESPONSE ==============`);
            console.log({...user, nivel: +user.nivel});
            //location.href = "/"
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{user, error, hendleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}