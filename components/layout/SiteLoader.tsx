"use client";

/* From Uiverse.io by SelfMadeSystem */
import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import "./loader.css";

const MIN_MS = 600;
const MAX_MS = 2000;

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);

    const started = performance.now();
    let finished = false;

    const dismiss = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - started;
      const wait = Math.max(0, MIN_MS - elapsed);
      window.setTimeout(() => {
        setExiting(true);
        window.setTimeout(() => setVisible(false), 350);
      }, wait);
    };

    const maxTimer = window.setTimeout(dismiss, MAX_MS);

    const ready = () => {
      if (document.fonts?.ready) {
        document.fonts.ready.then(dismiss).catch(dismiss);
      } else {
        dismiss();
      }
    };

    if (document.readyState === "complete") {
      ready();
    } else {
      window.addEventListener("load", ready, { once: true });
    }

    return () => {
      window.clearTimeout(maxTimer);
      mq.removeEventListener("change", onChange);
      window.removeEventListener("load", ready);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fb-site-loader-overlay${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Fedbelly Group Limited"
      aria-hidden={exiting}
    >
      {reducedMotion ? (
        <Image
          src="/brand/logo-mark.png"
          alt="Fedbelly Group Limited"
          width={64}
          height={64}
          priority
        />
      ) : (
        <div className="fb-loader">
          <svg
            height="0"
            width="0"
            viewBox="0 0 64 64"
            className="fb-loader-absolute"
            aria-hidden
          >
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="2"
                x2="0"
                y1="62"
                x1="0"
                id="fb-loader-b"
              >
                <stop stopColor="#FF4D6A" />
                <stop stopColor="#2EE6D6" offset="1" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="0"
                y1="64"
                x1="0"
                id="fb-loader-c"
              >
                <stop stopColor="#FFB020" />
                <stop stopColor="#E83E8C" offset="1" />
                <animateTransform
                  repeatCount="indefinite"
                  keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                  keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  dur="8s"
                  values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                  type="rotate"
                  attributeName="gradientTransform"
                />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="2"
                x2="0"
                y1="62"
                x1="0"
                id="fb-loader-d"
              >
                <stop stopColor="#2EE6D6" />
                <stop stopColor="#C8F542" offset="1" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            height="64"
            width="64"
            className="fb-loader-inline-block"
            aria-hidden
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="8"
              stroke="url(#fb-loader-b)"
              d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z"
              className="fb-loader-dash"
              id="y"
              pathLength="360"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            style={
              {
                ["--rotation-duration"]: "0ms",
                ["--rotation-direction"]: "normal",
              } as CSSProperties
            }
            viewBox="0 0 64 64"
            height="64"
            width="64"
            className="fb-loader-inline-block"
            aria-hidden
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="10"
              stroke="url(#fb-loader-c)"
              d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
              className="fb-loader-spin"
              id="o"
              pathLength="360"
            />
          </svg>
          <div className="fb-loader-w-2" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            height="64"
            width="64"
            className="fb-loader-inline-block"
            aria-hidden
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="8"
              stroke="url(#fb-loader-d)"
              d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z"
              className="fb-loader-dash"
              id="u"
              pathLength="360"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
