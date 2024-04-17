import { z } from "zod";

export const createUserFormSchema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório!"),
    email: z
      .string()
      .email("Forneça um email válido!")
      .min(1, "Este campo é obrigatório!"),
    phone: z
      .string()
      .regex(
        /^\(?\d{2}\)?\s?-?\s?9\d{8}$/,
        "Digite um número de celular válido!"
      ),
    password: z
      .string()
      .min(8, "Sua senha deve conter no mínimo 8 caracteres!")
      .regex(/[a-z]+/, "Sua senha deve contar ao menos uma letra minúscula!")
      .regex(/[A-Z]+/, "Sua senha deve contar ao menos uma letra maiúscula!")
      .regex(/[0-9]+/, "Sua senha deve contar ao menos um número!"),
    confirmPassword: z.string().min(1, "Este campo é obrigatório!"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas devem ser iguais!",
    path: ["confirmPassword"],
  });
