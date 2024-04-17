import { z } from "zod";

export const loginUserFormSchema = z.object({
  email: z
    .string()
    .email("Forneça um email válido!")
    .min(1, "Este campo é obrigatório!"),
  password: z
    .string()
    .min(8, "Sua senha deve conter no mínimo 8 caracteres!")
    .regex(/[a-z]+/, "Sua senha deve contar ao menos uma letra minúscula!")
    .regex(/[A-Z]+/, "Sua senha deve contar ao menos uma letra maiúscula!")
    .regex(/[0-9]+/, "Sua senha deve contar ao menos um número!"),
});
