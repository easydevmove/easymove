import { z } from "zod";



export const MultiStepFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres."),
  phone: z.string().min(10, "Telefone inválido."),
  origin: z.string().min(3, "Origem deve ter no mínimo 3 caracteres."),
  destination: z.string().min(3, "Destino deve ter no mínimo 3 caracteres."),
  date: z.date({
    required_error: "A data da mudança é obrigatória.",
  }),
  urgency: z.string().optional(),

  // Step 2 fields
  helpers_origin: z.number().min(0).optional(),
  helpers_destination: z.number().min(0).optional(),

  assemblers_origin: z.number().min(0).optional(),
  assemblers_destination: z.number().min(0).optional(),

  packers: z.number().min(0).optional(),

  // Step 3 fields
  itemsList: z.string().max(5000, "O limite é de 5000 caracteres.").optional(),
  lgpd: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar a política de privacidade." }),
  }),
});

export type MultiStepFormValues = z.infer<typeof MultiStepFormSchema>;
