import { cn } from "@/lib/cn";

export const inputClass = (invalid?: boolean) =>
  cn(
    "block w-full min-h-11 rounded-sm border bg-white px-3 py-2 text-base text-ink placeholder:text-steel/70 transition-colors",
    "focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/25",
    invalid ? "border-red-600" : "border-line hover:border-steel/60",
  );

type Props = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: (a11y: { id: string; "aria-describedby"?: string; "aria-invalid"?: true; required?: boolean }) => React.ReactNode;
};

/** Associe label, aide et message d'erreur à un champ. */
export function Field({ id, label, required, hint, error, className, children }: Props) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[0.9375rem] font-semibold">
        {label}
        {required ? <span className="text-red-700" aria-hidden> *</span> : <span className="font-normal text-steel"> (facultatif)</span>}
      </label>
      {children({ id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined, required })}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-sm text-steel">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}
