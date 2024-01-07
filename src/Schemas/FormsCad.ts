import { z } from "zod";

export const StudantFormSchema = z.object({
    processo: z.number().min(1, "Número Inválido"),
    nome: z.string(), 
    sexo: z.enum(["M", "F"]), 
    email: z.string(), 
    telefone: z.string(), 
    senha: z.string(), 
    nivel: z.number(),
    identificacao: z.string(),
});

export type StudantFormData = z.infer<typeof StudantFormSchema>;