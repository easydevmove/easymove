"use server";

import { z } from "zod";
import { format } from "date-fns";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { MultiStepFormSchema } from "@/lib/types";
import { N8N_WEBHOOK_URL } from "@/lib/constants";

type FormSource = "hero-form" | "contact-form";

export async function submitLead(
  values: z.infer<typeof MultiStepFormSchema>,
  source: FormSource
) {
  const validatedFields = MultiStepFormSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      message: "Erro de validação. Por favor, verifique os campos e tente novamente.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data } = validatedFields;

  const leadData = {
    ...data,
    date: format(data.date, "yyyy-MM-dd"),
    createdAt: serverTimestamp(),
    source,
  };

  try {
    // Intentionally not awaiting this to make the UI feel faster
    addDoc(collection(db, "leads"), leadData);

    if (N8N_WEBHOOK_URL) {
      // Also not awaiting this
      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...leadData, createdAt: new Date().toISOString() }),
      }).catch(webhookError => {
        console.warn("Failed to send lead to N8N webhook:", webhookError);
      });
    }

    return {
      success: true,
      message: "Orçamento solicitado com sucesso!",
      data: {
        ...data,
        date: format(data.date, "dd/MM/yyyy"),
      },
    };
  } catch (error) {
    console.error("Error preparing lead data: ", error);
    return {
      success: false,
      message: "Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde.",
    };
  }
}
