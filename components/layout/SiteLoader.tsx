"use client";

/* Simple text wordmark loader — timer-based dismiss, never gated on animation */
import { useEffect, useRef, useState } from "react";
import "./loader.css";

const MIN_MS = 700;
const MAX_MS = 2500;
const EXIT_MS = 320;
const LOADER_WORD = "fedbelly";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timersRef.current.push(id);
      return id;
    };

    const started = performance.now();

    // Sync with inline hard-fallback if it already dismissed
    const existing = document.getElementById("fb-site-loader");
    if (existing?.dataset.done === "1") {
      finishedRef.current = true;
      setExiting(true);
      schedule(() => setVisible(false), EXIT_MS);
      return clearTimers;
    }

    const dismiss = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      const el = document.getElementById("fb-site-loader");
      if (el) el.dataset.done = "1";

      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_MS - elapsed);

      schedule(() => {
        setExiting(true);
        schedule(() => setVisible(false), EXIT_MS);
      }, wait);
    };

    // Hard ceiling — always fires even if load/fonts hang
    schedule(dismiss, MAX_MS);

    const onReady = () => schedule(dismiss, 120);

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimers();
      window.removeEventListener("load", onReady);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="fb-site-loader"
      className={`fb-site-loader-overlay${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Fedbelly Group Limited"
      aria-hidden={exiting}
      onClick={() => {
        if (finishedRef.current) return;
        finishedRef.current = true;
        const el = document.getElementById("fb-site-loader");
        if (el) el.dataset.done = "1";
        setExiting(true);
        window.setTimeout(() => setVisible(false), EXIT_MS);
      }}
    >
      <p className="fb-loader-wordmark" aria-hidden>
        {LOADER_WORD.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={`fb-loader-char fb-loader-char--${index % 4}`}
            style={{ animationDelay: `${index * 55}ms` }}
          >
            {letter}
          </span>
        ))}
      </p>
      <span className="fb-loader-hint">Click to continue</span>
    </div>
  );
}
