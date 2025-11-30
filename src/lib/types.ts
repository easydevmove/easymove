import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

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
  itemsList: z.string().optional(),
  itemsImage: z.any()
    .refine((file) => !file || file?.size <= MAX_FILE_SIZE, `O tamanho máximo da imagem é 1MB.`)
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Apenas os formatos .jpg, .jpeg, .png e .webp são aceitos."
    ).optional(),
  itemsAudio: z.any().optional(),
  lgpd: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar a política de privacidade." }),
  }),
});

export type MultiStepFormValues = z.infer<typeof MultiStepFormSchema>;
