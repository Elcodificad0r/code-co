import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

export default function WorkGalleryJoffrey() {
  const dark = useHtmlDark();

  const projects = useMemo(
    () => [
      { id: 1, image: "img/work1.webp", title: "Creative Resources", descriptor3: "landing typo hero", tags: ["Landing", "Typo", "Hero"], description: "Creative resources landing page con hero visual y tipografía experimental", alt: "Creative resources landing page con hero visual y tipografía experimental" },
      { id: 2, image: "img/work2.webp", title: "Design System", descriptor3: "ui modular cards", tags: ["UI", "Cards", "Modular"], description: "Sistema de diseño con tarjetas y componentes modulares", alt: "Sistema de diseño con tarjetas y componentes modulares" },
      { id: 3, image: "img/work3.webp", title: "Wellness", descriptor3: "bienestar bold circular", tags: ["Landing", "Bold", "Circle"], description: "Landing page de bienestar con diseño circular y tipografía bold", alt: "Landing page de bienestar con diseño circular y tipografía bold" },
      { id: 4, image: "img/work4.webp", title: "Wireframes", descriptor3: "ux prototipos mobile", tags: ["UX", "Prototypes", "Mobile"], description: "Colección de wireframes y prototipos de aplicaciones móviles", alt: "Colección de wireframes y prototipos de aplicaciones móviles" },
      { id: 5, image: "img/work5.webp", title: "Responsive", descriptor3: "web responsiva colorida", tags: ["Web", "Tablet", "Showcase"], description: "Showcase de diseño web responsivo en tablet con interfaz colorida", alt: "Showcase de diseño web responsivo en tablet con interfaz colorida" },
      { id: 6, image: "img/work6.webp", title: "App Screens", descriptor3: "ui moderna interactiva", tags: ["UI", "Modern", "Interactive"], description: "Pantallas de aplicación con diseño moderno y componentes interactivos", alt: "Pantallas de aplicación con diseño moderno y componentes interactivos" },
      { id: 7, image: "img/work7.webp", title: "Brand System", descriptor3: "identidad paleta sistema", tags: ["Identity", "Palette", "Grid"], description: "Sistema de identidad de marca con paleta de colores experimentales", alt: "Sistema de identidad de marca con paleta de colores experimentales" },
      { id: 8, image: "img/work8.webp", title: "Typography Lab", descriptor3: "type variable motion", tags: ["Type", "Motion", "Variable"], description: "Experimento tipográfico con fuentes variables y animaciones", alt: "Experimento tipográfico con fuentes variables y animaciones" },
      { id: 9, image: "img/work9.webp", title: "UI Library", descriptor3: "componentes estados ui", tags: ["Components", "States", "System"], description: "Librería de componentes UI con estados interactivos", alt: "Librería de componentes UI con estados interactivos" },
      { id: 10, image: "img/work10.webp", title: "Dashboard", descriptor3: "datos graficas ux", tags: ["Data", "Charts", "UX"], description: "Dashboard con visualización de datos y gráficos interactivos", alt: "Dashboard con visualización de datos y gráficos interactivos" },
      { id: 11, image: "img/work11.webp", title: "Micro Motion", descriptor3: "motion micro detalles", tags: ["Motion", "Details", "UI"], description: "Elementos de motion graphics y microinteracciones", alt: "Elementos de motion graphics y microinteracciones" },
      { id: 12, image: "img/work12.webp", title: "Asymmetric Grid", descriptor3: "grid layout typo", tags: ["Grid", "Layout", "Type"], description: "Layout experimental con grid asimétrico y tipografía espacial", alt: "Layout experimental con grid asimétrico y tipografía espacial" },
    ],
    []
  );

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isMobile ? (
    <MobileWorkGallery projects={projects} dark={dark} />
  ) : (
    <DesktopWorkGallery projects={projects} dark={dark} />
  );
}

/* =========================
   MOBILE (NO FRAMER / NO RAF)
   Scroll nativo, ligero
========================= */
function MobileWorkGallery({ projects, dark }) {
  const bg             = dark ? "#1E1E1E"                : "#ECECEC";
  const cardBg         = dark ? "rgba(42,42,42,0.55)"    : "rgba(255,255,255,0.55)";
  const cardBorder     = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const textPrimary    = dark ? "#F2F0E4"                : "#111";
  const textMuted      = dark ? "#a0a8b8"                : "#4B5563";
  const labelColor     = dark ? "#8899aa"                : "rgba(17,17,17,0.55)";
  const workColor      = dark ? "#7c9ef5"                : "#1e40af"; // más claro en dark
  const casesColor     = dark ? "#F2F0E4"                : "#111";
  const showreelLabel  = dark ? "#8899aa"                : "#6B7280";
  // CAMBIO: botón skip más claro / blanco en dark para que se entienda
  const skipColor      = dark ? "#F2F0E4"                : "#1d4ed8";
  const skipBorder     = dark ? "rgba(242,240,228,0.35)" : "rgba(29,78,216,0.30)";
  const skipBg         = dark ? "rgba(242,240,228,0.08)" : "rgba(255,255,255,0.50)";

  const showreelItems = [
    "3d interactive particles",
    "ui modular cards",
    "experimental 3d ux",
    "2d custom animation",
    "audio playback ui",
    "motion brand identity",
    "editorial typo hero",
    "e-commerce product ui",
    "data visualization",
    "micro interaction kit",
    "generative art ui",
    "immersive web xr",
  ];

  return (
    <section className="relative overflow-x-hidden" style={{ backgroundColor: bg }}>
      <style>{`
        .m-card {
          border: 1px solid ${cardBorder};
          background: ${cardBg};
          backdrop-filter: blur(10px);
          border-radius: 18px;
          overflow: hidden;
        }
        .m-img {
          width: 100%;
          height: auto;
          display: block;
          transform: translateZ(0);
        }
        .m-title {
          letter-spacing: -0.03em;
        }
        .m-tag {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${labelColor};
        }
      `}</style>

      {/* Title */}
      <div className="pt-10 pb-6 px-6">
        <div
          className="font-rubik80s leading-none tracking-[-0.03em] text-[84px] sm:text-[110px] select-none pointer-events-none"
          style={{ color: workColor }}
        >
          WORK
        </div>
      </div>

      {/* Meta header row */}
      <div className="px-6 flex items-end justify-between pb-4">
        <div
          className="font-space font-semibold"
          style={{ fontSize: "clamp(34px, 7vw, 54px)", letterSpacing: "-0.02em", lineHeight: 0.95, color: casesColor }}
        >
          Cases
        </div>
        <div className="text-right">
          <div className="font-space text-[11px] tracking-[0.22em] uppercase" style={{ color: showreelLabel }}>Showreel</div>
          <div className="mt-2 font-space text-[13px] opacity-70 leading-6" style={{ color: textPrimary }}>
            {showreelItems.slice(0, 3).join(" · ")}
          </div>
        </div>
      </div>

      {/* CAMBIO: Skip button ARRIBA en mobile — antes de la lista */}
      <div className="px-6 pb-6">
        <a
          href="#faq"
          className="inline-flex items-center justify-center w-full font-space text-[12px] tracking-[0.22em] uppercase rounded-full py-4"
          style={{ color: skipColor, backgroundColor: skipBg, border: `1px solid ${skipBorder}` }}
        >
          Scroll → FAQ
        </a>
      </div>

      {/* Native scroll list */}
      <div className="px-6 pb-10 space-y-6">
        {projects.map((p, idx) => (
          <article key={p.id} className="m-card">
            <img
              src={p.image}
              alt={p.alt}
              className="m-img select-none"
              draggable={false}
              loading={idx < 2 ? "eager" : "lazy"}
            />

            <div className="p-5">
              <div className="font-space text-[11px] tracking-[0.28em] uppercase" style={{ color: labelColor }}>
                {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>

              <div className="mt-2 font-space text-[20px] font-semibold m-title" style={{ color: textPrimary }}>
                {p.title}
              </div>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {p.tags?.map((t) => (
                  <span key={t} className="m-tag font-space">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 font-space text-[13px] leading-relaxed" style={{ color: textMuted }}>
                {p.description}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================
   DESKTOP (TU EXPERIENCIA)
========================= */
function DesktopWorkGallery({ projects, dark }) {
  const bg             = dark ? "#1E1E1E"                    : "#ECECEC";
  const textPrimary    = dark ? "#F2F0E4"                    : "#111";
  const textMuted      = dark ? "#a0a8b8"                    : "#4B5563";
  const labelColor     = dark ? "#8899aa"                    : "#4B5563";
  const workColor      = dark ? "#7c9ef5"                    : "#1e40af"; // más claro en dark
  const gradFrom       = dark ? "#1E1E1E"                    : "#ECECEC";
  const showreelActive = dark ? "#F2F0E4"                    : "#111";
  const showreelIdle   = dark ? "rgba(242,240,228,0.30)"     : "rgba(17,17,17,0.32)";
  // CAMBIO: skip btn más claro / blanco en dark
  const skipStroke     = dark ? "#F2F0E4"                    : "#0520F5";
  const skipBg         = dark ? "rgba(242,240,228,0.08)"     : "rgba(5,32,245,0.10)";
  const skipBorder     = dark ? "rgba(242,240,228,0.35)"     : "rgba(5,32,245,0.5)";

  const perProjectVh = 80;
  const totalVh = Math.max(200, projects.length * perProjectVh);

  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const desktopSpring = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    mass: 0.6,
  });

  const tIndex = useTransform(desktopSpring, [0, 1], [0, projects.length - 1]);
  const workOpacity = useTransform(desktopSpring, [0, 0.06, 0.12], [1, 0.55, 0]);
  const workY = useTransform(desktopSpring, [0, 0.12], [0, -28]);

  useEffect(() => {
    const unsub = tIndex.on("change", (v) => {
      const idx = Math.max(0, Math.min(projects.length - 1, Math.round(v)));
      setActive(idx);
    });
    return () => unsub();
  }, [tIndex, projects.length]);

  const showreelItems = [
    "3d interactive particles",
    "ui modular cards",
    "experimental 3d ux",
    "2d custom animation",
    "audio playback ui",
    "motion brand identity",
    "editorial typo hero",
    "e-commerce product ui",
    "data visualization",
    "micro interaction kit",
    "generative art ui",
    "immersive web xr",
  ];

  return (
    <section ref={sectionRef} className="relative" style={{ backgroundColor: bg, height: `${totalVh}vh` }}>
      <style>{`
        .shotW { width: 42vw !important; max-width: 600px !important; }
        .stack { width: 42vw !important; max-width: 600px !important; }
        .stackWrap { transform: translateX(14%) !important; }
        .metaPanel { width: 240px !important; opacity: 0.92 !important; }
        .metaPanel .titleBig { font-size: 18px !important; line-height: 1.25 !important; }
        .metaPanel .desc     { font-size: 12px !important; line-height: 1.7  !important; }
        .metaPanel .label    { font-size: 10px !important; letter-spacing: 0.30em !important; }
        .rightPanel .label   { font-size: 11px !important; letter-spacing: 0.26em !important; }
        .rightPanel .item    { font-size: 13px !important; }

        @keyframes skipBounceDesktop {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(8px) scale(0.96); }
        }
        @keyframes skipPulse {
          0%   { box-shadow: 0 0 0 0 rgba(5,32,245,0.35), 0 2px 16px rgba(5,32,245,0.18); border-color: ${skipBorder}; }
          60%  { box-shadow: 0 0 0 14px rgba(5,32,245,0), 0 4px 28px rgba(5,32,245,0.28); border-color: ${skipBorder}; }
          100% { box-shadow: 0 0 0 0 rgba(5,32,245,0), 0 2px 16px rgba(5,32,245,0.18); border-color: ${skipBorder}; }
        }
        @keyframes hintFade {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .skipBtn {
          position: absolute; left: 40px; bottom: 180px; z-index: 50;
          background: ${skipBg};
          border: 1.5px solid ${skipBorder};
          border-radius: 50%; width: 80px; height: 80px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; backdrop-filter: blur(14px);
          animation: skipBounceDesktop 1.6s ease-in-out infinite, skipPulse 1.6s ease-in-out infinite;
          transition: background 0.25s ease, transform 0.15s ease;
        }
        .skipBtn:hover  { background: ${dark ? "rgba(242,240,228,0.15)" : "rgba(5,32,245,0.22)"}; animation-play-state: paused; transform: scale(1.08); }
        .skipBtn:active { transform: scale(0.93); }
        .skipBtn svg    { width: 30px; height: 30px; stroke: ${skipStroke}; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }

        .skipHint {
          position: absolute; left: 78px; bottom: 196px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: ${skipStroke};
          opacity: 0.6; white-space: nowrap; z-index: 50;
          animation: hintFade 1.6s ease-in-out infinite;
          pointer-events: none;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* WORK title */}
        <motion.div
          className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none"
          style={{ opacity: workOpacity, y: workY }}
        >
          <div
            className="font-rubik80s leading-none tracking-[-0.03em] opacity-[1] !text-[220px] lg:!text-[370px] xl:!text-[30vw]"
            style={{ color: workColor }}
          >
            WORK
          </div>
        </motion.div>

        <div className="relative h-full w-full max-w-[1400px] mx-auto px-10">
          {/* Stack */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative stackWrap">
              <div className="relative stack">
                {projects.map((proj, i) => (
                  <Shot key={proj.id} proj={proj} i={i} tIndex={tIndex} />
                ))}
              </div>
            </div>
          </div>

          {/* Cases */}
          <div className="absolute left-10 bottom-12">
            <div
              className="font-space font-semibold"
              style={{ fontSize: "clamp(44px,6.5vw,92px)", letterSpacing: "-0.02em", color: textPrimary, lineHeight: 0.95 }}
            >
              Cases
            </div>
          </div>

          {/* Showreel */}
          <div className="absolute right-10 bottom-14 text-right rightPanel">
            <div className="font-space label uppercase" style={{ color: labelColor }}>Showreel</div>
            <div className="mt-2 overflow-hidden" style={{ height: "4.5rem" }}>
              <div
                style={{
                  transform: `translateY(${-active * 1.5}rem)`,
                  transition: "transform 400ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {showreelItems.map((desc, idx) => {
                  const offset = idx - active;
                  const isActive = offset === 0;
                  const visible = Math.abs(offset) <= 1;
                  return (
                    <div
                      key={idx}
                      className="font-space item"
                      style={{
                        color: isActive ? showreelActive : showreelIdle,
                        fontWeight: isActive ? 600 : 400,
                        opacity: visible ? 1 : 0,
                        textTransform: "capitalize",
                        lineHeight: "1.5rem",
                        transition: "color 350ms cubic-bezier(0.4,0,0.2,1), opacity 350ms cubic-bezier(0.4,0,0.2,1), font-weight 350ms ease",
                        pointerEvents: "none",
                      }}
                    >
                      {desc}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Meta panel */}
          <div className="absolute left-10 top-[42%] -translate-y-1/2 hidden md:block metaPanel">
            <div className="flex items-center gap-3 font-space label uppercase" style={{ color: labelColor }}>
              <span>PORTFOLIO</span><span className="opacity-40">/</span><span>SELECTED</span>
            </div>
            <div className="mt-8">
              <div className="font-space titleBig" style={{ color: textPrimary }}>{projects[active]?.title}</div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {projects[active]?.tags?.map((t) => (
                  <span key={t} className="font-space text-[11px] tracking-[0.22em] uppercase" style={{ color: labelColor }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 font-space desc" style={{ color: textMuted }}>{projects[active]?.description}</div>
              <div className="mt-8 font-space label uppercase" style={{ color: labelColor }}>
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Skip hint + button */}
          <div className="skipHint">Scroll</div>
          <a href="#faq" className="skipBtn">
            <svg fill="none" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </a>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24"
          style={{ backgroundImage: `linear-gradient(to bottom, ${gradFrom}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{ backgroundImage: `linear-gradient(to top, ${gradFrom}, transparent)` }}
        />
      </div>
    </section>
  );
}

// Desktop only — untouched
function Shot({ proj, i, tIndex }) {
  const dist = useTransform(tIndex, (v) => i - v);
  const y = useTransform(dist, [-3, -2, -1, 0, 1, 2, 3], [-760, -520, -260, 0, 280, 560, 820]);
  const scale = useTransform(dist, [-3, -2, -1, 0, 1, 2, 3], [0.74, 0.82, 0.92, 1.0, 0.92, 0.82, 0.74]);
  const opacity = useTransform(dist, [-3, -2, -1, 0, 1, 2, 3], [0.12, 0.28, 0.62, 1.0, 0.62, 0.28, 0.12]);
  const blur = useTransform(dist, [-3, -2, -1, 0, 1, 2, 3], [5, 4, 2.2, 0, 2.2, 4, 5]);
  const imgY = useTransform(dist, [-3, 0, 3], [26, 0, -26]);

  return (
    <motion.figure className="absolute left-1/2 top-1/2" style={{ x: "-50%", y, scale, opacity }}>
      <div className="relative bg-transparent">
        <motion.img
          src={proj.image}
          alt={proj.alt}
          className="block shotW h-auto select-none"
          draggable={false}
          style={{ y: imgY, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
        />
      </div>
    </motion.figure>
  );
}