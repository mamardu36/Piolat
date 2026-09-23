"use server";

import { sendEmail } from "@/lib/email";
import { subjects, MAX_FILE_MB, ACCEPTED_EXT } from "@/lib/contact";

export type FieldErrors = Partial<Record<"nom" | "email" | "message" | "consentement" | "fichier", string>>;
export type ContactValues = Partial<Record<"nom" | "societe" | "email" | "telephone" | "sujet" | "produit" | "reference" | "message", string>>;
export type ContactState = { status: "idle" | "success" | "error"; message?: string; errors?: FieldErrors; values?: ContactValues };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (f: FormData, k: string) => String(f.get(k) ?? "").trim();

export async function sendContact(_: ContactState, form: FormData): Promise<ContactState> {
  if (str(form, "website")) return { status: "success", message: "Message envoyé." }; // honeypot

  const data = {
    nom: str(form, "nom"),
    societe: str(form, "societe"),
    email: str(form, "email"),
    telephone: str(form, "telephone"),
    sujet: str(form, "sujet"),
    produit: str(form, "produit"),
    reference: str(form, "reference"),
    message: str(form, "message"),
  };
  const file = form.get("fichier");
  const hasFile = file instanceof File && file.size > 0;

  const errors: FieldErrors = {};
  if (data.nom.length < 2) errors.nom = "Indiquez votre nom.";
  if (!EMAIL.test(data.email)) errors.email = "Saisissez une adresse email valide, par exemple nom@entreprise.fr.";
  if (data.message.length < 10) errors.message = "Décrivez votre demande en quelques mots (10 caractères minimum).";
  if (!form.get("consentement")) errors.consentement = "Acceptez le traitement de vos données pour que nous puissions vous répondre.";
  if (hasFile) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ACCEPTED_EXT.includes(ext)) errors.fichier = `Format non accepté. Formats possibles : ${ACCEPTED_EXT.join(", ")}.`;
    else if (file.size > MAX_FILE_MB * 1024 * 1024) errors.fichier = `Fichier trop lourd (${MAX_FILE_MB} Mo maximum). Pour un fichier plus lourd, collez un lien de transfert dans le message.`;
  }
  if (Object.keys(errors).length) return { status: "error", message: "Corrigez les champs signalés.", errors, values: data };

  const sujetLabel = subjects.find((s) => s.value === data.sujet)?.label ?? "Demande de contact";
  const line = (label: string, v: string) => (v ? `${label} : ${v}` : null);
  const text = [
    `Sujet : ${sujetLabel}`,
    line("Produit", data.produit),
    line("Référence gravure initiale", data.reference),
    "",
    `Nom : ${data.nom}`,
    line("Société", data.societe),
    `Email : ${data.email}`,
    line("Téléphone", data.telephone),
    "",
    data.message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    await sendEmail({
      subject: `[Site] ${sujetLabel}${data.produit ? ` : ${data.produit}` : ""} (${data.societe || data.nom})`,
      text,
      replyTo: data.email,
      attachments: hasFile ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") }] : undefined,
    });
    return { status: "success", message: "Message envoyé. Nous vous répondons sous 48 heures ouvrées." };
  } catch (e) {
    console.error(e);
    return { status: "error", message: "L'envoi n'a pas abouti. Réessayez ou appelez-nous au 04 74 59 11 59.", values: data };
  }
}
