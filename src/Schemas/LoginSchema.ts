import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Informe um email válido"),
    password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
    rememberMe: z.boolean()
});

export type FormDataLogin = z.infer<typeof LoginSchema>;