"use server";

import { addNewsletterContact } from "@/lib/email";

export type NewsletterState = { status: "idle" | "success" | "error"; message?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function subscribe(_: NewsletterState, formData: FormData): Promise<NewsletterState> {
  if (formData.get("website")) return { status: "success", message: "Inscription enregistrée." }; // honeypot
  const email = String(formData.get("email") ?? "").trim();
  if (!EMAIL.test(email)) return { status: "error", message: "Saisissez une adresse email valide, par exemple nom@entreprise.fr." };
  try {
    await addNewsletterContact(email);
    return { status: "success", message: "Inscription enregistrée. Vous recevrez nos prochaines actualités." };
  } catch (e) {
    console.error(e);
    return { status: "error", message: "L'inscription n'a pas abouti. Réessayez dans quelques minutes." };
  }
}
