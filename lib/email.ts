import "server-only";

/**
 * Envoi d'emails via l'API HTTP de Resend (aucune dépendance).
 * Variables : RESEND_API_KEY, CONTACT_TO, CONTACT_FROM, RESEND_AUDIENCE_ID (optionnelle).
 * Sans clé, en développement ou en démo (DEMO_MODE=1), les messages sont affichés dans la console
 * et le formulaire confirme l'envoi.
 */
type Attachment = { filename: string; content: string }; // content en base64

const API = "https://api.resend.com";

export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY);

async function call(path: string, body: unknown) {
  const res = await fetch(API + path, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function sendEmail(opts: { subject: string; text: string; replyTo?: string; attachments?: Attachment[] }) {
  if (!emailConfigured()) {
    if (process.env.NODE_ENV !== "production" || process.env.DEMO_MODE === "1") {
      console.info("[email:dev]", opts.subject, "\n" + opts.text, opts.attachments?.map((a) => a.filename));
      return;
    }
    throw new Error("RESEND_API_KEY manquante");
  }
  await call("/emails", {
    from: process.env.CONTACT_FROM ?? "Site Piolat <site@piolat.fr>",
    to: [process.env.CONTACT_TO ?? "service-client@piolat.fr"],
    reply_to: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    attachments: opts.attachments,
  });
}

export async function addNewsletterContact(email: string) {
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (emailConfigured() && audience) {
    await call(`/audiences/${audience}/contacts`, { email, unsubscribed: false });
    return;
  }
  await sendEmail({ subject: "Nouvelle inscription newsletter", text: `Adresse : ${email}` });
}
