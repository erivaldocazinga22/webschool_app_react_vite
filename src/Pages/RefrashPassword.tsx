import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormDataRefrashPassword, RefrashPasswordShema } from "../Schemas/RefrashPasswordSchema";
import { api } from "../axios.config";
import Loader from "../Components/basics/Loader";
import { ArrowLeft, Key } from "lucide-react";

export default function RefrashPassword() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataRefrashPassword>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(RefrashPasswordShema)
    });


    async function handleLogin(data: FormDataRefrashPassword) {
        try {
            setLoading(true);
            const response = await api.post("/account", data);
            console.log(response.data);
            
        } catch (error) {
            toast.error("Falha no login",{ 
                theme: "light",
                pauseOnHover: false
            })
         } finally {
            setLoading(false);

            toast.success("Acção realizada com sucesso", { 
                theme: "light",
                pauseOnHover: false
            });

            navigate("/", { replace: true });
        }
        
    }
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
            {/* Title do form */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                    <Key size={32} className="text-webschool-100" />
                </div>
                <h2 className="text-center text-2xl font-medium leading-9 tracking-tight">
                    Esqueceu a sua senha?
                </h2>
                <span className="text-sm text-webschool-100">Não se preocupe, enviaremos instruções de redefinição!</span>
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
                            {errors?.password && <p className="text-sm text-red-500">{errors?.password.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-webschool-100">
                            Confirme a Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                {...register("confirmPassword")}
                                type="password"
                                autoComplete="current-password-confirme"
                                required
                                className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none`, `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                            />
                        </div>
                        <div className="h-6 sm:h-8 flex items-center">
                            {errors?.confirmPassword && <p className="text-sm text-red-500">{errors?.confirmPassword.message}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md font-normal bg-webschool-first px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-webschool-first/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webg-webschool-first"
                        >
                            {loading ? (
                                <Loader /> 
                            ): "Resetar a password"}
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-5">
                        <Link to="/login" replace className="flex items-center gap-1 text-webschool-100 hover:text-zinc-400 ">
                            <ArrowLeft strokeWidth={1.5} />
                            <span>Já tem uma conta?</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}