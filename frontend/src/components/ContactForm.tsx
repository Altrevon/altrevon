"use client";

import { useState, type FormEvent } from "react";
import { submitContact } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";

export function ContactForm({ email }: { email: string }) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const result = await submitContact({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        company: String(data.get("company") || ""),
        budget: String(data.get("budget") || "undecided"),
        message: String(data.get("message") || ""),
        website: String(data.get("website") || ""),
      });
      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(45,212,168,0.1),transparent_60%),var(--paper)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
          {t.contact.title}
        </h2>
        <p className="mt-4 text-muted">{t.contact.lede}</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 text-left">
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t.contact.name} name="name" required placeholder="Alex Chen" />
            <Field
              label={t.contact.email}
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t.contact.company} name="company" placeholder="Acme Labs" />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">
                {t.contact.budget}
              </span>
              <select
                name="budget"
                defaultValue="undecided"
                className="w-full rounded-lg border border-[var(--line)] bg-surface px-3.5 py-3 text-ink outline-none transition focus:border-jade-bright focus:shadow-[0_0_0_3px_rgba(45,212,168,0.15)]"
              >
                <option value="undecided">{t.contact.budgetOptions.undecided}</option>
                <option value="under-25k">{t.contact.budgetOptions.under25}</option>
                <option value="25k-75k">{t.contact.budgetOptions.mid}</option>
                <option value="75k-150k">{t.contact.budgetOptions.high}</option>
                <option value="150k-plus">{t.contact.budgetOptions.plus}</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">
              {t.contact.message}
            </span>
            <textarea
              name="message"
              required
              rows={5}
              minLength={10}
              placeholder={t.contact.messagePlaceholder}
              className="w-full resize-y rounded-lg border border-[var(--line)] bg-surface px-3.5 py-3 text-ink outline-none transition focus:border-jade-bright focus:shadow-[0_0_0_3px_rgba(45,212,168,0.15)]"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 rounded-lg bg-jade-bright px-5 py-3.5 text-[0.95rem] font-semibold text-on-accent shadow-[0_14px_36px_rgba(45,212,168,0.22)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? t.contact.sending : t.contact.submit}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${status === "error" ? "text-red-500" : "text-jade-bright"}`}
            role="status"
          >
            {message}
          </p>
        )}

        <p className="mt-5 text-sm text-muted">
          {t.contact.orReach}{" "}
          <a
            href={`mailto:${email}`}
            className="font-semibold text-jade-bright underline underline-offset-2"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--line)] bg-surface px-3.5 py-3 text-ink outline-none transition placeholder:text-muted/50 focus:border-jade-bright focus:shadow-[0_0_0_3px_rgba(45,212,168,0.15)]"
      />
    </label>
  );
}
