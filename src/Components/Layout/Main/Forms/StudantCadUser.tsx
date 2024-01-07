import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StudantFormSchema, StudantFormData } from "../../../../Schemas/FormsCad";
import { twMerge } from "tailwind-merge";
export default function StudantCadUser() {

    const { register, handleSubmit, formState: { errors }} = useForm<StudantFormData>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(StudantFormSchema)
    });

    async function handleFormSubmit(data: StudantFormData) {
        console.log(data);
    }

    return (
        <div>
            <div className="flex items-center justify-center py-2">
                <h1 className="text-2xl font-medium">Cadastramento de Aluno</h1>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="w-full flex items-center gap-4">
                    <div>
                        <label htmlFor="processo" className="block text-sm font-medium leading-6 dark:text-webschool-100">
                            Processo
                        </label>
                        <div className="mt-1">
                            <input
                                id="processo"
                                {...register("processo")}
                                type="number"
                                autoComplete="processo"
                                required
                                min={0}
                                minLength={0}
                                className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none`, `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                            />
                        </div>
                        <div className="h-6 sm:h-8 flex items-center">
                            {errors?.processo && <p className="text-sm text-red-500">{errors?.processo.message}</p>}
                        </div>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="nome" className="block text-sm font-medium leading-6 dark:text-webschool-100">
                            Nome do aluno
                        </label>
                        <div className="mt-1">
                            <input
                            id="nome"
                            {...register("nome")}
                            type="text"
                            autoComplete="nome"
                            required
                            className={twMerge(`block w-full px-4 rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-webschool-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-webschool-first sm:text-sm sm:leading-6 outline-none`, `${errors?.email && "ring-red-500 dark:ring-red-500 focus:ring-1 focus:ring-red-500"}`)}
                            />
                        </div>
                        <div className="h-6 sm:h-8 flex items-center">
                            {errors?.nome && <p className="text-sm text-red-500">{errors?.nome.message}</p>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}