import * as z from "zod";

export const SignInDataScheme = z.object({
    email: z.string().email("Informe um email válido!"),
    remember_me: z.boolean(),
    password: z.string().min(6, "A sua senha deve conter no minimo 6 cracteres"),
});

export type SignInRequestType = z.infer<typeof SignInDataScheme>;