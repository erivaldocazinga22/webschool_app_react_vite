import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormDataLogin, LoginSchema } from "../Schemas/LoginSchema";
import { api } from "../axios.config";
import Loader from "../Components/basics/Loader";
import { useTheme } from "../Contexts/Theme/themeContext";
import { setCookie } from "nookies";

export default function Login() {
    const navigate = useNavigate();
    const { mode } = useTheme();
    const [loading, setLoading] = useState<boolean>(false);
    

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataLogin>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(LoginSchema)
    });


    async function handleLogin(data: FormDataLogin) {
        try {
            setLoading(true);
            const response = await api.post("/register", { email: data.email, password: data.password});

            setCookie(undefined, "webschool.token", response.data.token, {
                maxAge: 60 * 60 * 24 * 7, //7 days
                path: "/",
                sameSite: "strict",
                secure: true
            });
        

            navigate("/", { replace: true });
            
            toast.success(response.data.message, {
                pauseOnHover: false
            });


            
        } catch (error) {
            toast.error("Falha no login",{ 
                pauseOnHover: false,
                style: {
                    background: mode === "dark" ? "#181818" : "rgb(228 228 231)" 
                }
            })
         } finally {
            setLoading(false);
        }
        
    }
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
            {/* Title do form */}
            <div className="-mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-medium leading-9 tracking-tight">
                    SignIn
                </h2>
            </div>
            {/* container do form */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-webschool-100">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                            id="email"
                            {...register("email")}
                            type="email"
                            autoComplete="email"
                            required
                            className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none`, `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                            />
                        </div>
                        <div className="h-6 sm:h-8 flex items-center">
                            {errors?.email && <p className="text-sm text-red-500">{errors?.email.message}</p>}
                        </div>
                    </div>
                    

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-webschool-100">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                {...register("password")}
                                type="password"
                                autoComplete="current-password"
                                required
                                className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none`, `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                            />
                        </div>
                        <div className="h-6 sm:h-8 flex items-center">
                            {errors?.password    && <p className="text-sm text-red-500">{errors?.password  .message}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <input 
                                id="rememberMe" 
                                {...register("rememberMe")} 
                                type="checkbox" 
                                className="bg-webschool-first"/>
                            <label htmlFor="rememberMe" className="cursor-pointer">Lembrar de me</label>
                        </div>
                        <div className="text-sm">
                            <Link to="/reset" className=" text-webschool-first hover:text-blue-600">
                                Esqueceu a sua senha?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className={`flex w-full justify-center rounded-md font-normal bg-webschool-first px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-webschool-first/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webg-webschool-first
                                ${loading && "cursor-not-allowed"}
                            `}
                        >
                            {loading ? (
                                <Loader /> 
                            ): "Entrar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}