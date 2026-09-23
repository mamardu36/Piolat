"use client";

import { useActionState } from "react";
import { subscribe, type NewsletterState } from "@/app/actions/newsletter";
import { buttonClass } from "@/components/ui/Button";

const initial: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, initial);
  return (
    <form action={action} className="max-w-md" noValidate>
      <label htmlFor="newsletter-email" className="font-display text-lg font-bold text-white">
        Recevoir nos actualités
      </label>
      <p id="newsletter-help" className="mt-1 text-sm text-white/70">Nouveautés techniques et informations pratiques, quelques fois par an.</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="nom@entreprise.fr"
          aria-describedby="newsletter-help newsletter-status"
          aria-invalid={state.status === "error" || undefined}
          className="min-h-11 flex-1 rounded-sm border border-white/25 bg-white/5 px-3 text-white placeholder:text-white/45 focus:border-white focus:outline-none"
        />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button type="submit" disabled={pending} className={buttonClass("inverse")}>
          {pending ? "Inscription…" : "S'inscrire"}
        </button>
      </div>
      <p id="newsletter-status" role="status" className={state.status === "error" ? "mt-2 text-sm text-red-300" : "mt-2 text-sm text-sky"}>
        {state.message}
      </p>
    </form>
  );
}
