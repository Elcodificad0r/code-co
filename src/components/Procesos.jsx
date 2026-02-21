import React, { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    tag: "Discovery",
    title: "Entendemos tu negocio antes de escribir una sola línea de código.",
    body: "Nos sumergimos en tu industria, competencia y clientes ideales. No asumimos — investigamos. Al final de esta fase sabes exactamente qué construiremos, por qué y cómo va a diferenciarte.",
  },
  {
    num: "02",
    tag: "Build",
    title: "Diseñamos y desarrollamos con intención, no con templates.",
    body: "Cada decisión de diseño tiene un argumento detrás. Tipografía, flujo, velocidad, UX — todo está calibrado para que tu visitante entienda tu propuesta de valor en segundos y quiera quedarse.",
  },
  {
    num: "03",
    tag: "Iterate",
    title: "Tu feedback es parte del proceso, no un obstáculo.",
    body: "Trabajamos en ciclos cortos con entregas visibles. Ves el avance, opinas y ajustamos antes de que algo esté 'terminado'. Así llegamos al resultado correcto sin sorpresas al final.",
  },
  {
    num: "04",
    tag: "Deploy",
    title: "Lanzamos rápido, medimos de inmediato y optimizamos sin parar.",
    body: "La entrega no es el fin — es el inicio. Monitoreamos rendimiento, velocidad y comportamiento de usuarios para que tu sitio mejore con el tiempo. Tu inversión se vuelve más inteligente cada mes.",
  },
];

export default function Proceso() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const overlayRef = useRef(null);
  const overlayBottomRef = useRef(null);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const subtitleRef = useRef(null);
  const sepRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRevealRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGsap = async () => {
      if (!window.gsap) {
        await new Promise((res) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
          s.onload = res;
          document.head.appendChild(s);
        });
      }
      if (!window.ScrollTrigger) {
        await new Promise((res) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
          s.onload = res;
          document.head.appendChild(s);
        });
        window.gsap.registerPlugin(window.ScrollTrigger);
      }

      const gsap = window.gsap;
      const ST = window.ScrollTrigger;

      // ── 1. FULL SCREEN COLOR WIPE: kill any running tween before starting ──
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { yPercent: 0 });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.killTweensOf(overlayRef.current);
            gsap.to(overlayRef.current, {
              yPercent: -100,
              duration: 1.1,
              ease: "power3.inOut",
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.killTweensOf(overlayRef.current);
            gsap.to(overlayRef.current, {
              yPercent: 0,
              duration: 0.9,
              ease: "power3.inOut",
              overwrite: true,
            });
          },
        });
      }

      // ── 1b. BOTTOM WIPE: kill any running tween before starting ──
      if (overlayBottomRef.current) {
        gsap.set(overlayBottomRef.current, { yPercent: 100 });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "bottom 50%",
          onEnter: () => {
            gsap.killTweensOf(overlayBottomRef.current);
            gsap.to(overlayBottomRef.current, {
              yPercent: -100,
              duration: 1.6,
              ease: "power3.inOut",
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.killTweensOf(overlayBottomRef.current);
            gsap.to(overlayBottomRef.current, {
              yPercent: 100,
              duration: 1.0,
              ease: "power3.inOut",
              overwrite: true,
            });
          },
        });
      }

      // ── 2. PROCESO title — reveal only, NO scrub parallax (prevents jiggle) ──
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 60, skewY: 3 },
          {
            opacity: 1, y: 0, skewY: 0,
            duration: 1.4, ease: "power4.out",
            clearProps: "transform",
            scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true },
          }
        );
      }

      // ── 3. Tag line stagger reveal ──
      if (tagRef.current) {
        gsap.fromTo(tagRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
            scrollTrigger: { trigger: tagRef.current, start: "top 88%", once: true } }
        );
      }

      // ── 4. Subtitle parallax + reveal ──
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.4,
            scrollTrigger: { trigger: subtitleRef.current, start: "top 88%", once: true } }
        );
        gsap.to(subtitleRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ── 5. Separator scaleX wipe ──
      if (sepRef.current) {
        gsap.fromTo(sepRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.4, ease: "power3.out",
            scrollTrigger: { trigger: sepRef.current, start: "top 92%", once: true } }
        );
      }

      // ── 6. Vertical center line scaleY ──
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 2, ease: "power3.out",
            scrollTrigger: { trigger: lineRef.current, start: "top 75%", once: true } }
        );
      }

      // ── 7. Steps: alternating slide + depth ──
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLeft = i % 2 === 0;
        // Reveal
        gsap.fromTo(el,
          { x: isLeft ? -80 : 80, opacity: 0, rotateY: isLeft ? 8 : -8 },
          {
            x: 0, opacity: 1, rotateY: 0,
            duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
        // Subtle parallax per step
        gsap.to(el, {
          y: (i % 2 === 0 ? -1 : 1) * 25,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // ── 8. Dots: elastic pop stagger ──
      sectionRef.current?.querySelectorAll(".proceso-dot").forEach((dot, i) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(2.5)",
            scrollTrigger: { trigger: dot, start: "top 90%", once: true },
            delay: i * 0.1,
          }
        );
        // Pulse glow loop
        gsap.to(dot, {
          boxShadow: "0 0 0 10px rgba(255,255,255,0.0)",
          scale: 1.15,
          duration: 1.4,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.35,
        });
        // Parallax: dots avanzan hacia arriba fuerte a distintas velocidades
        gsap.to(dot, {
          y: -(120 + i * 55),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      // ── 9. CTA reveal ──
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 95%", once: true } }
        );
      }

      // ── 10. Floating num parallax (slower drift) ──
      sectionRef.current?.querySelectorAll(".proceso-num").forEach((num, i) => {
        gsap.to(num, {
          y: -40 - i * 10,
          ease: "none",
          scrollTrigger: {
            trigger: num,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    };

    loadGsap();
  }, []);

  const isDark = document.documentElement.classList.contains("dark");
  const overlayColor = isDark ? "#1E1E1E" : "#ECECEC";

  return (
    <section
      id="procesos"
      ref={sectionRef}
      className="bg-[#0520F5] text-white relative overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* ── WIPE OVERLAY: full panel that slides UP on scroll ── */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: overlayColor,
          zIndex: 30,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* ── Bottom wipe: second panel that slides DOWN on scroll-out ── */}
      <div
        ref={overlayBottomRef}
        style={{
          position: "absolute",
          inset: 0,
          background: overlayColor,
          zIndex: 29,
          pointerEvents: "none",
          willChange: "transform",
          transform: "translateY(100%)",
        }}
      />

      <style>{`
        .proceso-tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          opacity: 0.55;
          font-weight: 600;
        }
        .proceso-num {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
          font-family: 'Space Grotesk', sans-serif;
          will-change: transform;
        }
        .proceso-step-title {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          line-height: 1.3;
        }
        .proceso-step-body {
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          line-height: 1.7;
          opacity: 0.72;
        }
        .proceso-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.15);
          will-change: transform;
        }
        .proceso-line {
          width: 1px;
          background: rgba(255,255,255,0.18);
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .proceso-line { left: 1.5rem; }
          .proceso-desktop-row { display: none !important; }
          .proceso-mobile-list { display: flex !important; }
        }
        @media (min-width: 768px) {
          .proceso-mobile-list { display: none !important; }
          .proceso-desktop-row { display: grid !important; }
        }

        .proceso-grid-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        .proceso-cta-btn {
          position: relative;
          overflow: hidden;
        }
        .proceso-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }
        .proceso-cta-btn:hover::before {
          transform: translateX(0);
        }
        .proceso-cta-btn span {
          position: relative;
          z-index: 1;
          transition: color 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .proceso-cta-btn:hover span {
          color: #0520F5;
        }
      `}</style>

      {/* Noise texture */}
      <div className="proceso-grid-noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">

        {/* Header */}
        <div className="mb-20 md:mb-28">
          <p ref={tagRef} className="proceso-tag mb-4">Metodología</p>
          <h2
            ref={titleRef}
            className="proceso-hero-title font-space leading-none mb-6"
            style={{
              fontSize: "clamp(4rem, 14vw, 11rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
            }}
          >
            PROCESO
          </h2>
          <div ref={subtitleRef} className="proceso-subtitle-row flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-6">
            <p
              className="font-space font-bold"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", maxWidth: "32rem", lineHeight: 1.3 }}
            >
              Ruta hacia el Crecimiento
            </p>
            <p
              className="font-space opacity-60"
              style={{ fontSize: "clamp(0.8rem, 1.3vw, 1rem)", maxWidth: "36rem", lineHeight: 1.65 }}
            >
              Un proceso probado que transforma tu presencia digital en resultados tangibles.
              Cada fase tiene un propósito, una entrega y un impacto visible en tu negocio.
            </p>
          </div>

          <div ref={sepRef} className="proceso-separator mt-10 h-px bg-white opacity-15" />
        </div>

        {/* ── DESKTOP ── */}
        <div className="proceso-desktop-row relative grid grid-cols-2 gap-x-24 gap-y-20" style={{ display: "none" }}>
          <div
            ref={lineRef}
            className="proceso-line"
            style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: "1px", background: "rgba(255,255,255,0.18)" }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.num}
                ref={(el) => (itemsRef.current[i] = el)}
                className={`flex flex-col ${isLeft ? "items-end text-right pr-12" : "items-start text-left pl-12"} ${!isLeft ? "col-start-2" : "col-start-1"}`}
                style={{ gridRow: i + 1, willChange: "transform" }}
              >
                <div className="proceso-tag mb-3">{step.tag}</div>
                <div className="proceso-num mb-4">{step.num}</div>
                <h3 className="proceso-step-title mb-3 max-w-xs">{step.title}</h3>
                <p className="proceso-step-body max-w-xs">{step.body}</p>
              </div>
            );
          })}

          {steps.map((_, i) => (
            <div
              key={`dot-${i}`}
              className="proceso-dot absolute"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                top: `calc(${i * 25}% + 2rem)`,
                position: "absolute",
              }}
            />
          ))}
        </div>

        {/* ── MOBILE ── */}
        <div className="proceso-mobile-list flex-col gap-0" style={{ display: "none", position: "relative" }}>
          <div
            style={{
              position: "absolute", top: 0, bottom: 0, left: "1.5rem",
              width: "1px", background: "rgba(255,255,255,0.18)",
            }}
          />
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex gap-6 pb-14"
              style={{ paddingLeft: "3.5rem", position: "relative" }}
            >
              <div
                className="proceso-dot"
                style={{ position: "absolute", left: "calc(1.5rem - 6px)", top: "0.35rem" }}
              />
              <div className="flex flex-col">
                <div className="proceso-tag mb-2">{step.tag}</div>
                <div className="proceso-num mb-3">{step.num}</div>
                <h3 className="proceso-step-title mb-2">{step.title}</h3>
                <p className="proceso-step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="proceso-cta mt-20 md:mt-28 mb-32 md:mb-48 pt-10 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-space opacity-60 text-sm">
            ¿Listo para empezar?
          </p>
          <a
            href="#contacto"
            className="proceso-cta-btn font-space font-bold text-sm tracking-widest uppercase px-8 py-4 border border-white/40"
            style={{ letterSpacing: "0.2em", textDecoration: "none", color: "white" }}
          >
            <span>Agenda una llamada →</span>
          </a>
        </div>
      </div>
    </section>
  );
}