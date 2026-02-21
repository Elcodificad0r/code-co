import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

function useHtmlDark() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export default function Nosotros() {
  const ref = useRef(null);
  const dark = useHtmlDark();

  const bg          = dark ? "#1E1E1E" : undefined;
  const textPrimary = dark ? "#F2F0E4" : undefined;
  const textMuted   = dark ? "#a0a8b8" : undefined;
  const starColor   = dark ? "#3a3a3a" : undefined;
  const overlayGrad = dark
    ? "linear-gradient(90deg, rgba(30,30,30,0.85) 0%, rgba(30,30,30,0.0) 55%, rgba(30,30,30,0.35) 100%)"
    : "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(236,236,236,0.0) 55%, rgba(236,236,236,0.35) 100%)";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.8 });

  const railY = useTransform(p, [0, 1], [-60, 60]);
  const brandX = useTransform(p, [0, 1], [40, -20]);
  const titleY = useTransform(p, [0, 1], [90, -90]);
  const titleX = useTransform(p, [0, 1], [-20, 20]);
  const bottomY = useTransform(p, [0, 1], [120, -40]);
  const bottomX = useTransform(p, [0, 1], [20, -20]);

  const bigStarY = useTransform(p, [0, 1], [80, -80]);
  const bigStarScale = useTransform(p, [0, 1], [1.08, 1.0]);

  const fadeIn = useTransform(p, [0.0, 0.12], [0, 1]);
  const settle = useTransform(p, [0, 1], [0.985, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-[#ECECEC] min-h-screen overflow-hidden px-5"
      style={{ backgroundColor: bg }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: useTransform(p, [0, 1], [0.22, 0.1]),
          background: overlayGrad,
        }}
      />

      <motion.div
        className="absolute right-4 top-0 bottom-0 w-4 flex flex-col justify-between py-20"
        style={{
          y: railY,
          opacity: fadeIn,
          willChange: "transform, opacity",
        }}
      >
        <div
          className="text-gray-500 text-xs tracking-wider whitespace-nowrap"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: textMuted }}
        >
          s-tier-studio
        </div>

        <div
          className="text-gray-600 text-xs tracking-wider whitespace-nowrap"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: textMuted }}
        >
          形を与える / 2024年以降
        </div>

        <div
          className="text-gray-700 text-xs tracking-wider whitespace-nowrap"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: textMuted }}
        >
          we build, we create, we code.
        </div>
      </motion.div>

      <motion.div
        className="absolute text-gray-600 font-rubik80s text-xl tracking-wide"
        style={{
          top: "calc(20% + 20px)",
          right: "80px",
          x: brandX,
          opacity: fadeIn,
          willChange: "transform, opacity",
          color: textMuted,
        }}
      >
        code&co.
      </motion.div>

      <motion.div
        className="pt-0 ms:pb-0 md:pt-32 px-8 md:px-16 relative"
        style={{
          x: titleX,
          y: titleY,
          opacity: fadeIn,
          willChange: "transform, opacity",
        }}
      >
        <div className="relative pb-0">
          <div className="flex items-baseline gap-4 mb-0 md:mb-2">
            <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight" style={{ color: textPrimary }}>We</h1>
            <h1 className="text-5xl md:text-8xl font-space font-light tracking-tight" style={{ color: textPrimary }}>are</h1>
          </div>

          <div className="flex items-baseline relative">
            <h1 className="text-7xl md:text-8xl font-light font-space tracking-tight" style={{ color: textPrimary }}>a</h1>
            <h1 className="text-9xl md:text-9xl ml-4 md:ml-15 lg:ml-15 font-rubik80s italic transform translate-y-2" style={{ color: textPrimary }}>
              form-giving
            </h1>
          </div>

          <div className="mt-0 md:mt-2">
            <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight" style={{ color: textPrimary }}>agency</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 transform translate-y-1/2 rotate-90 text-gray-700 text-10xl tracking-wider"
        style={{
          transformOrigin: "left center",
          right: "8px",
          y: useTransform(p, [0, 1], [30, -30]),
          opacity: fadeIn,
          willChange: "transform, opacity",
          color: textMuted,
        }}
      >
        *
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10"
        style={{
          y: bigStarY,
          scale: bigStarScale,
          opacity: useTransform(p, [0, 0.15], [0, 1]),
          willChange: "transform, opacity",
        }}
      >
        <div className="text-gray-200 text-[1000px] md:text-[1000px] lg:text-[800px] leading-none opacity-20" style={{ color: starColor }}>
          *
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-8 md:left-16 right-8 md:right-16 flex flex-row gap-50 md:gap-50 pt-20 px-5"
        style={{
          x: bottomX,
          y: bottomY,
          scale: settle,
          opacity: fadeIn,
          willChange: "transform, opacity",
        }}
      >
        <div className="w-1/2 space-y-4 text-gray-800 font-space leading-relaxed whitespace-normal" style={{ color: textMuted }}>
          <p className="!text-lg">
            Cada proyecto nace del diálogo. Lo llevamos de la idea a la forma:
            diseño claro, navegación intuitiva, estructura funcional. Nuestro proceso
            es modular, flexible y siempre con propósito.
          </p>
        </div>

        <div className="w-1/2 text-gray-900" style={{ color: textPrimary }}>
          <h2 className="!text-xl font-bold font-space tracking-wide mb-4">
            TU VISIÓN → SU FORMA MÁS CLARA.
          </h2>
          <p className="!text-lg font-space leading-relaxed">
            Pensamos en sistemas, diseñamos con intención.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 text-gray-300 text-[150px] md:text-[250px] lg:text-[350px] leading-none select-none pointer-events-none opacity-60"
        style={{
          y: useTransform(p, [0, 1], [18, -18]),
          opacity: fadeIn,
          willChange: "transform, opacity",
          color: starColor,
        }}
      >
        *
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          /* ✅ FIX: reducir altura en mobile para eliminar espacio vacío */
          section[class*="min-h-screen"] {
            min-height: 70vh !important;
            height: auto !important;
            padding-bottom: 6rem !important;
          }

          .pt-0 {
            padding-top: 2rem !important;
          }
          .text-7xl {
            font-size: 4.5rem !important;
            line-height: 0.9 !important;
            margin-bottom: 0.25rem !important;
          }
          .text-5xl {
            font-size: 3.5rem !important;
            line-height: 0.9 !important;
          }
          .text-9xl {
            font-size: 5rem !important;
            line-height: 0.9 !important;
          }
          .flex.items-baseline {
            margin-bottom: 0.25rem !important;
          }
          .relative .mt-0 {
            margin-top: 0.25rem !important;
          }
          .ml-4 {
            margin-left: 1rem !important;
          }
          div[style*="right: 80px"] {
            right: 60px !important;
            font-size: 1rem !important;
          }
          .text-\\[1000px\\] {
            font-size: 400px !important;
          }
          .text-\\[150px\\] {
            font-size: 80px !important;
          }
          div[style*="rotate-90"] {
            display: none !important;
          }
          .absolute.bottom-20 {
            flex-direction: column !important;
            gap: 1.5rem !important;
            bottom: 1rem !important;
            top: auto !important;
            position: static !important;
            margin-top: 1rem !important;
          }
          .absolute.bottom-20 > div {
            width: 100% !important;
          }
          .absolute.bottom-20 > div:first-child {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
          }
          .absolute.bottom-20 > div:first-child p {
            font-size: 1.5rem !important;
          }
          .absolute.bottom-20 > div:last-child h2 {
            font-size: 1.75rem !important;
          }
          .absolute.bottom-20 > div:last-child p {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}