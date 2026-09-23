"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2, Paperclip } from "lucide-react";
import Link from "next/link";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { subjects, MAX_FILE_MB, ACCEPTED_EXT } from "@/lib/contact";
import { buttonClass } from "@/components/ui/Button";
import { Field, inputClass } from "./Field";

const initial: ContactState = { status: "idle" };

export function ContactForm({ defaultSubject, defaultProduct }: { defaultSubject?: string; defaultProduct?: string }) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const e = state.errors ?? {};
  const v = state.values ?? {};

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-md border border-line bg-mist p-8 focus:outline-none">
        <CheckCircle2 aria-hidden className="size-8 text-blue" />
        <p className="mt-4 text-h3 font-bold">{state.message}</p>
        <p className="mt-2 text-steel">Nous vous répondrons à l&apos;adresse email indiquée.</p>
        <Link href="/gamme" className={buttonClass("secondary", "mt-6")}>Retour à la gamme</Link>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} noValidate className="grid gap-6 sm:grid-cols-2">
      <div ref={statusRef} tabIndex={-1} role="alert" className="focus:outline-none sm:col-span-2 empty:hidden">
        {state.status === "error" && (
          <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-medium text-red-800">{state.message}</p>
        )}
      </div>

      <Field id="nom" label="Nom et prénom" required error={e.nom}>
        {(a) => <input {...a} name="nom" defaultValue={v.nom} autoComplete="name" className={inputClass(!!e.nom)} />}
      </Field>
      <Field id="societe" label="Société">
        {(a) => <input {...a} name="societe" defaultValue={v.societe} autoComplete="organization" className={inputClass()} />}
      </Field>
      <Field id="email" label="Email" required error={e.email}>
        {(a) => <input {...a} name="email" defaultValue={v.email} type="email" autoComplete="email" inputMode="email" className={inputClass(!!e.email)} />}
      </Field>
      <Field id="telephone" label="Téléphone">
        {(a) => <input {...a} name="telephone" defaultValue={v.telephone} type="tel" autoComplete="tel" className={inputClass()} />}
      </Field>

      <Field id="sujet" label="Objet de la demande" required>
        {(a) => (
          <select {...a} name="sujet" defaultValue={v.sujet ?? defaultSubject ?? "devis"} className={inputClass()}>
            {subjects.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        )}
      </Field>
      <Field id="produit" label="Produit concerné" hint="Exemple : Screen 640 × 1750, Galvano 820">
        {(a) => <input {...a} name="produit" defaultValue={v.produit ?? defaultProduct} className={inputClass()} />}
      </Field>

      <Field id="reference" label="Référence gravure initiale" hint="Utile pour une regravure." className="sm:col-span-2">
        {(a) => <input {...a} name="reference" defaultValue={v.reference} className={inputClass()} />}
      </Field>

      <Field id="message" label="Votre demande" required error={e.message} hint="Rapport, longueur, mesh, nombre de couleurs, quantité, délai souhaité…" className="sm:col-span-2">
        {(a) => <textarea {...a} name="message" defaultValue={v.message} rows={6} className={inputClass(!!e.message) + " resize-y"} />}
      </Field>

      <Field id="fichier" label="Fichier du motif" error={e.fichier} hint={`${ACCEPTED_EXT.join(", ").toUpperCase()}. ${MAX_FILE_MB} Mo maximum ; au-delà, collez un lien de transfert dans votre message.`} className="sm:col-span-2">
        {(a) => (
          <div className="relative">
            <Paperclip aria-hidden className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-steel" />
            <input
              {...a}
              name="fichier"
              type="file"
              accept={ACCEPTED_EXT.map((x) => "." + x).join(",")}
              className={inputClass(!!e.fichier) + " pl-9 file:mr-3 file:rounded-sm file:border-0 file:bg-mist file:px-3 file:py-1.5 file:font-semibold file:text-ink hover:file:bg-sky"}
            />
          </div>
        )}
      </Field>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="sm:col-span-2">
        <div className="flex gap-3">
          <input
            id="consentement"
            name="consentement"
            type="checkbox"
            required
            aria-invalid={e.consentement ? true : undefined}
            aria-describedby={e.consentement ? "consentement-error" : undefined}
            className="mt-1 size-5 shrink-0 accent-blue"
          />
          <label htmlFor="consentement" className="text-[0.9375rem] text-steel">
            J&apos;accepte que Piolat Rotary utilise ces informations pour répondre à ma demande.{" "}
            <Link href="/confidentialite" className="text-ink underline underline-offset-4 hover:text-blue">Politique de confidentialité</Link>
          </label>
        </div>
        {e.consentement && <p id="consentement-error" className="mt-1.5 text-sm font-medium text-red-700">{e.consentement}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={pending} className={buttonClass("primary", "min-w-48")}>
          {pending ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <p className="text-sm text-steel"><span className="text-red-700">*</span> Champs obligatoires</p>
      </div>
    </form>
  );
}
