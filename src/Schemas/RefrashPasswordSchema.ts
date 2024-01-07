import { z } from "zod";

export const RefrashPasswordShema = z.object({
    email: z.string().email("Informe um email válido")
        .transform((fields)=> ({
            email: fields.toLowerCase()
        })),
    password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha deve conter no mínimo 6 caracteres")
}).refine((fields)=> fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais"
});

export type FormDataRefrashPassword = z.infer<typeof RefrashPasswordShema>;