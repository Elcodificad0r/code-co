// src/components/HeroToMisionCinematic.jsx
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isMobile;
}

// Lee dark mode del html.classList directamente — sin prop
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

export default function HeroToMisionCinematic({
  heroRef,
  misionRef,
  Hero,
  Mision,
}) {
  const isMobile = useIsMobile();
  const dark = useHtmlDark();
  const wrapRef = useRef(null);

  // Colores reactivos — inline style, no Tailwind (evita problema de purge)
  const bg = dark ? "#1E1E1E" : "#ECECEC";

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.5,
  });

  const heroOut = useTransform(p, [0.0, 0.55], [1, 0]);
  const washIn = useTransform(p, [0.1, 0.65], [0, 1]);
  const misionIn = useTransform(p, [0.35, 1.0], [0, 1]);

  const heroScale = useTransform(p, [0.0, 0.55], [1, 1.06]);
  const heroY = useTransform(p, [0.0, 0.55], [0, -24]);
  const heroBlur = useTransform(p, [0.0, 0.55], ["blur(0px)", "blur(10px)"]);
  const heroSat = useTransform(p, [0.0, 0.55], ["saturate(1)", "saturate(0.85)"]);

  const misionX = useTransform(p, [0.35, 1.0], ["8%", "0%"]);
  const misionY = useTransform(p, [0.35, 1.0], ["16px", "0px"]);
  const misionScale = useTransform(p, [0.35, 1.0], [1.02, 1]);

  const vignette = useTransform(p, [0.0, 0.6, 1.0], [0.12, 0.18, 0.12]);

  if (isMobile) {
    return (
      <section ref={wrapRef} className="relative" style={{ backgroundColor: bg }}>
        <section ref={heroRef} className="min-h-screen" style={{ backgroundColor: bg }}>
          <Hero />
        </section>

        <motion.section
          id="mision"
          ref={misionRef}
          className="h-80vh"
          style={{ backgroundColor: bg, willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 28, scale: 1.01 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Mision />
        </motion.section>
      </section>
    );
  }

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: "240vh", backgroundColor: bg }}
    >
      {/* Sticky scene */}
      <div
        className="sticky w-full overflow-hidden"
        style={{
          top: "var(--nav-h, 0px)",
          height: "calc(100vh - var(--nav-h, 0px))",
        }}
      >
        {/* Base bg */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: bg }} />

        {/* Cinematic vignette */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            opacity: vignette,
            background:
              "radial-gradient(1200px 700px at 50% 55%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.12) 100%)",
          }}
        />

        {/* HERO layer */}
        <motion.div
          className="absolute inset-0 z-[10]"
          style={{
            opacity: heroOut,
            y: heroY,
            scale: heroScale,
            filter: heroBlur,
            willChange: "opacity, transform, filter",
            pointerEvents: "auto",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ filter: heroSat, willChange: "filter" }}
          >
            <Hero />
          </motion.div>
        </motion.div>

        {/* Wash — color reactivo via JS */}
        <motion.div
          className="absolute inset-0 z-[20] pointer-events-none"
          style={{
            opacity: washIn,
            backgroundColor: bg,
            willChange: "opacity",
          }}
        />

        {/* MISIÓN layer */}
        <motion.div
          className="absolute inset-0 z-[30]"
          style={{
            opacity: misionIn,
            x: misionX,
            y: misionY,
            scale: misionScale,
            willChange: "opacity, transform",
            pointerEvents: "none",
          }}
        >
          <section
            id="mision"
            ref={misionRef}
            className="w-full h-full"
            style={{ backgroundColor: bg }}
          >
            <Mision />
          </section>
        </motion.div>
      </div>
    </section>
  );
}