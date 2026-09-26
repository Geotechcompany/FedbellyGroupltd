"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export type FormIntent = "contact" | "careers";

type InquiryFormProps = {
  intent: FormIntent;
  submitLabel: string;
  successMessage: string;
  showCompany?: boolean;
  showCatalogSize?: boolean;
  showWantToSee?: boolean;
  showPrimaryNeed?: boolean;
  tone?: "dark" | "light";
};

const roles = ["Artist", "Producer", "Manager", "Label", "Other"] as const;
const catalogSizes = [
  "1-5 releases",
  "6-20 releases",
  "21-100 releases",
  "100+ releases",
] as const;
const primaryNeeds = [
  "Collaboration",
  "Distribution",
  "Rights",
  "Reporting",
] as const;

export function InquiryForm({
  intent,
  submitLabel,
  successMessage,
  showCompany = false,
  showCatalogSize = false,
  showWantToSee = false,
  showPrimaryNeed = false,
  tone = "dark",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isLight = tone === "light";
  const labelClass = isLight
    ? "text-sm font-medium text-ink"
    : "text-sm font-medium text-ivory";
  const inputClass = isLight
    ? "w-full rounded-md border border-graphite/30 bg-white px-3 py-2.5 text-ink placeholder:text-[#7a7f8c] focus:border-mint-deep focus:outline-none focus:ring-2 focus:ring-coral/60"
    : "w-full rounded-md border border-graphite bg-ink px-3 py-2.5 text-ivory placeholder:text-mist/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-coral/60";
  const helperClass = isLight ? "text-xs text-[#5a5f6c]" : "text-xs text-mist";
  const errorClass = "text-xs text-coral mt-1";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!role) nextErrors.role = "Select a role.";
    if (!message) {
      nextErrors.message = "Message is required.";
    }
    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          name,
          email,
          role,
          message,
          company: data.get("company") || undefined,
          catalogSize: data.get("catalogSize") || undefined,
          wantToSee: data.get("wantToSee") || undefined,
          primaryNeed: data.get("primaryNeed") || undefined,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-md border p-6 ${
          isLight
            ? "border-mint-deep/40 bg-white text-ink"
            : "border-mint/40 bg-charcoal text-ivory"
        }`}
        role="status"
      >
        <p className="font-medium">{successMessage}</p>
        <button
          type="button"
          className={`mt-4 text-sm underline ${isLight ? "text-mint-deep" : "text-mint"}`}
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name ? (
            <p id="name-error" className={errorClass} role="alert">
              {fieldErrors.name}
            </p>
          ) : (
            <p className={helperClass}>How we should address you.</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className={errorClass} role="alert">
              {fieldErrors.email}
            </p>
          ) : (
            <p className={helperClass}>We reply to this address.</p>
          )}
        </div>
      </div>

      {showCompany ? (
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClass}>
            Company / Act
          </label>
          <input id="company" name="company" className={inputClass} />
          <p className={helperClass}>Optional act or company name.</p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className={labelClass}>
            Role
          </label>
          <select
            id="role"
            name="role"
            className={inputClass}
            defaultValue=""
            aria-invalid={!!fieldErrors.role}
          >
            <option value="" disabled>
              Select role
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {fieldErrors.role ? (
            <p className={errorClass} role="alert">
              {fieldErrors.role}
            </p>
          ) : null}
        </div>

        {showCatalogSize ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="catalogSize" className={labelClass}>
              Catalog size
            </label>
            <select
              id="catalogSize"
              name="catalogSize"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select range
              </option>
              {catalogSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {showPrimaryNeed ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="primaryNeed" className={labelClass}>
              Primary need
            </label>
            <select
              id="primaryNeed"
              name="primaryNeed"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select need
              </option>
              {primaryNeeds.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      {showWantToSee ? (
        <div className="flex flex-col gap-2">
          <label htmlFor="wantToSee" className={labelClass}>
            What you want to see
          </label>
          <input id="wantToSee" name="wantToSee" className={inputClass} />
          <p className={helperClass}>
            Collaboration, splits, distribution, rights, reporting.
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          aria-invalid={!!fieldErrors.message}
        />
        {fieldErrors.message ? (
          <p className={errorClass} role="alert">
            {fieldErrors.message}
          </p>
        ) : (
          <p className={helperClass}>
            Tell us the release problem you want solved.
          </p>
        )}
      </div>

      {error ? (
        <p className={errorClass} role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
