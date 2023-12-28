import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";

import { SignInDataScheme, SignInRequestType } from "../schemes/SignInSheme";
import { Link } from "react-router-dom";
import { SocialMedia } from "../components/basics/SocialMedia";
import { useAuth } from "../contexts/auth/authContext";

export default function SignIn() {

  const { hendleSignIn } = useAuth();

  const { register, handleSubmit, formState: { errors }} = useForm<SignInRequestType>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(SignInDataScheme)
  });

  const handleFormSubmit = async (data: SignInRequestType)=> {
    hendleSignIn(data);
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden text-zinc-900 bg-white dark:text-zinc-50 dark:bg-webschool-400 transition-colors duration-150">
      <header className="top-0 left-0 w-full min-h-basic h-basic px-6 flex items-center justify-between border-b border-webschool-100/20">
          <div className="flex items-center gap-2">
            <img
                className="mx-auto h-12 w-auto"
                src="/logomarca.svg"
                alt="webschool logomarca"
                width={20}
                height={20}
            />
            <span className="font-medium text-2xl">Webschool</span>
          </div>
        </header>
        <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-6 lg:px-8">
          {/* Title do form */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
              SignIn
            </h2>
          </div>
          {/* container do form */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
                <div className="h-auto py-1 flex items-center">
                    {errors?.email && <p className="text-sm text-red-500">{errors?.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-webschool-100">
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
                <div className="h-6 sm:h-12 flex items-center">
                  {errors?.password    && <p className="text-sm text-red-500">{errors?.password  .message}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <input 
                        id="remember-me" 
                        {...register("remember_me")} 
                        type="checkbox" 
                        className="bg-webschool-first"/>
                    <label htmlFor="remember-me" className="cursor-pointer">Lembrar de me</label>
                </div>
                <div className="text-sm">
                    <Link to="/auth/reset" className=" text-webschool-first hover:text-blue-600">
                        Esqueceu a sua senha?
                    </Link>
                </div>
              </div>


              <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md font-normal bg-webschool-first px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-webschool-first/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webg-webschool-first"
                >
                    Entrar
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex-1" aria-hidden="true">
                        <div className="w-full h-[1px] bg-webschool-100/30"></div>
                    </div>
                    <div className="ab lx ze awa awe awp">
                        <span className="text-webschool-100/80 text-sm select-none">Ou continue com</span>
                    </div>
                    <div className="flex-1" aria-hidden="true">
                        <div className="w-full h-[1px] bg-webschool-100/30"></div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                  <SocialMedia.Root href="#" text="facebook" className="hover:bg-[#1778f2] hover:border-[#1778f2]">
                    <SocialMedia.Icon.Facebook />
                  </SocialMedia.Root>

                  <SocialMedia.Root href="#" text="google">
                    <SocialMedia.Icon.Google />
                  </SocialMedia.Root>
                </div>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}