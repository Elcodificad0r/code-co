import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

export default function PricingSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const dark = useHtmlDark();

  const bg          = dark ? "#1E1E1E"  : undefined;
  const cardBg      = dark ? "#2a2a2a"  : "#ffffff";
  const cardBorder  = dark ? "#444444"  : "#000000";
  const textPrimary = dark ? "#F2F0E4"  : "#000000";
  const textMuted   = dark ? "#a0a8b8"  : undefined;
  const btnBg       = dark ? "#F2F0E4"  : "#000000";
  const btnText     = dark ? "#1E1E1E"  : "#ffffff";
  const btnBorder   = dark ? "#F2F0E4"  : "#000000";
  const badgeBg     = dark ? "#2a2a2a"  : "#ffffff";
  const badgeBorder = dark ? "#444444"  : "#000000";

  const [vhLevel, setVhLevel] = useState("full");

  const DESKTOP_H = "min(calc(100vh - 220px), 640px)";
  const MOBILE_H = "min(62svh, 480px)";
  const [cardH, setCardH] = useState(DESKTOP_H);

  useEffect(() => {
    const applyH = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setCardH(isMobile ? MOBILE_H : DESKTOP_H);
    };
    applyH();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener?.("change", applyH);
    return () => mq.removeEventListener?.("change", applyH);
  }, []);

  useEffect(() => {
    const applyVhLevel = () => {
      const vh = window.innerHeight;
      if (vh >= 700) setVhLevel("full");
      else if (vh >= 580) setVhLevel("noDesc");
      else if (vh >= 460) setVhLevel("noFeatures");
      else setVhLevel("noLetter");
    };
    applyVhLevel();
    window.addEventListener("resize", applyVhLevel);
    return () => window.removeEventListener("resize", applyVhLevel);
  }, []);

  const showLetter   = vhLevel === "full";
  const showDesc     = true;
  const showFeatures = vhLevel === "full" || vhLevel === "noDesc";

  const pricingData = useMemo(
    () => [
      {
        letter: "C",
        title: "SITIO WEB.2\nBÁSICO",
        description: "Presencia digital profesional lista para generar prospectos.",
        features: [
          "✓ Hasta 3 secciones",
          "✓ Diseño responsive",
          "✓ SEO básico incluido",
          "✓ Hosting + SSL 1 año",
          "✓ Formulario de contacto",
        ],
        price: "$ 1,999 MXN",
      },
      {
        letter: "O",
        title: "APLICACIÓN WEB.2\nPROFESIONAL",
        description: "Un sitio completo que posiciona tu marca.",
        features: [
          "✓ Incluye todo lo anterior",
          "✓ Hasta 6 secciones",
          "✓ SEO optimizado",
          "✓ Dominio + Hosting + SSL",
          "✓ Integración WhatsApp o correo",
        ],
        price: "$ 6,999 MXN",
      },
      {
        letter: "D",
        title: "NEGOCIO DIGITAL.2\nE-COMMERCE",
        description: "Tu tienda online lista para vender 24/7.",
        features: [
          "✓ Incluye todo lo anterior",
          "✓ Tienda en línea",
          "✓ Pasarela de pagos",
          "✓ Carrito y gestión de pedidos",
          "✓ SEO para productos",
        ],
        price: "$ 9,999 MXN",
      },
      {
        letter: "E",
        title: "PLATAFORMA WEB.2\nPERSONALIZADA",
        description: "Desarrollo a medida para proyectos avanzados.",
        features: [
          "✓ Incluye todo lo anterior",
          "✓ Funcionalidades a medida",
          "✓ Integraciones API",
          "✓ SEO técnico avanzado",
          "✓ Escalabilidad empresarial",
        ],
        price: "¡PLATIQUEMOS!",
      },
    ],
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".pricing-card", { opacity: 0, y: 100, scale: 0.9 });
      gsap.set(".pricing-letter", { rotation: -10, opacity: 0.5 });
      gsap.to(".pricing-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true },
      });
      gsap.to(".pricing-letter", {
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", once: true },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, { scale: 1.02, duration: 0.45, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.to(card, { scale: 1, duration: 0.45, ease: "power3.out" });
    });
  };

  const handleCotizarClick = (planTitle) => {
    const subject = encodeURIComponent(`Cotización: ${planTitle.replace(/\n/g, " ")}`);
    const body = encodeURIComponent(
      `Hola, me gustaría recibir una cotización para el plan: ${planTitle.replace(/\n/g, " ")}\n\n`
    );
    window.location.href = `mailto:hola@codenco.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hola@codenco.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section ref={containerRef} className="bg-[#ECECEC] py-16 px-8 sm:px-16" style={{ backgroundColor: bg }}>
      <style>{`
        @keyframes premium-spin { to { transform: rotate(360deg); } }

        .premium-border-overlay {
          position: absolute; inset: -3px; pointer-events: none;
          z-index: 5; padding: 3px; overflow: hidden;
          border-radius: 0px; box-sizing: border-box;
        }
        .premium-border-overlay::before {
          content: ""; position: absolute; inset: 0;
          background: conic-gradient(from 0deg, #7C3AED, #22D3EE, #34D399, #F59E0B, #EF4444, #7C3AED);
          opacity: .95;
        }
        .premium-border-overlay::after {
          content: ""; position: absolute; inset: 0;
          background: conic-gradient(
            from 0deg,
            rgba(255,255,255,0) 0deg, rgba(255,255,255,0) 300deg,
            rgba(255,255,255,.12) 318deg, rgba(255,255,255,.95) 332deg,
            rgba(255,255,255,.14) 348deg, rgba(255,255,255,0) 360deg
          );
          animation: premium-spin 7.2s linear infinite;
          transform-origin: center; mix-blend-mode: screen;
          filter: blur(3px) saturate(1.35) brightness(1.35);
          opacity: .95; will-change: transform;
        }
        .premium-border-overlay {
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
        }
        .premium-glow {
          position: absolute; inset: -22px; pointer-events: none; z-index: 4;
          background: conic-gradient(
            from 0deg,
            rgba(124,58,237,.55), rgba(34,211,238,.55), rgba(52,211,153,.55),
            rgba(245,158,11,.55), rgba(239,68,68,.55), rgba(124,58,237,.55)
          );
          filter: blur(22px) saturate(1.7) brightness(1.15);
          opacity: .28; mix-blend-mode: screen;
        }

        @media (min-width: 768px) {
          .pricing-row { flex-direction: row !important; }
        }

        @media (min-width: 768px) {
          .pricing-cta-row { flex-direction: row !important; align-items: center !important; justify-content: flex-end !important; }
          .pricing-card { transition: none !important; }
          .pricing-letter { margin-top: 0.25rem !important; }
          .pricing-title { font-size: 15px !important; line-height: 1.2 !important; }
          .pricing-desc { font-size: 11px !important; margin-bottom: 6px !important; }
          .pricing-feat { font-size: 11px !important; }
          .pricing-price { font-size: 18px !important; margin-bottom: 8px !important; }
          .pricing-btn { padding-top: 7px !important; padding-bottom: 7px !important; font-size: 11px !important; }
          .pricing-desde { font-size: 10px !important; margin-bottom: 4px !important; }
          .pricing-features-scroll { overflow: hidden; }
          .pricing-inner-top { margin-top: 1.5rem !important; }
          .pricing-content-gap { margin-top: 0.5rem !important; }
        }

        @media (max-width: 767px) {
          .pricing-card { transition: height 0.4s ease, min-height 0.4s ease; }
          .pricing-card        { padding: 12px !important; }
          .pricing-letter      { font-size: 72px !important; }
          .pricing-title       { font-size: 15px !important; line-height: 1.1 !important; }
          .pricing-desc        { font-size: 10px !important; margin-bottom: 8px !important; }
          .pricing-feat        { font-size: 10px !important; }
          .pricing-price       { font-size: 22px !important; }
          .pricing-btn         { padding-top: 8px !important; padding-bottom: 8px !important; font-size: 10px !important; }
          .pricing-content-gap {
            padding-left: 2rem !important;
            padding-right: 1.25rem !important;
            min-height: 0 !important;
          }
          .pricing-title  { text-align: left !important; }
          .pricing-desc   { text-align: left !important; }
          .pricing-feat li { text-align: left !important; }
          .pricing-inner-top { margin-top: 3.5rem !important; }
          .pricing-badge-label { text-align: center !important; letter-spacing: 0.25em !important; }
          .pricing-desc {
            overflow: hidden !important;
            display: -webkit-box !important;
            -webkit-box-orient: vertical !important;
            -webkit-line-clamp: 2 !important;
            text-overflow: ellipsis !important;
          }
          .pricing-features-scroll {
            overflow: auto !important;
            -webkit-overflow-scrolling: touch !important;
            min-height: 0 !important;
          }
        }
      `}</style>

      <div className="pricing-row flex flex-col gap-4 justify-center items-stretch max-w-7xl mx-auto mb-12">
        {pricingData.map((item, index) => {
          const isFeatured = item.price.includes("6,999");
          const refSetter = (el) => (cardsRef.current[index] = el);
          const baseCardClass =
            "pricing-card bg-white border-2 border-black px-7 py-6 md:px-6 md:py-5 flex-1 flex flex-col transform-gpu w-full md:w-1/4 hover:cursor-pointer relative will-change-transform";

          return (
            <div
              key={index}
              ref={refSetter}
              className={baseCardClass}
              style={{ height: cardH, minHeight: cardH, backgroundColor: cardBg, borderColor: cardBorder }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {isFeatured && (
                <>
                  <div className="premium-glow" />
                  <div className="premium-border-overlay" />
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 z-[20] bg-white border border-black px-3 py-1"
                    style={{ backgroundColor: badgeBg, borderColor: badgeBorder }}
                  >
                    <span
                      className="pricing-badge-label text-[10px] tracking-[0.35em] uppercase font-space text-black block text-center"
                      style={{ color: textPrimary }}
                    >
                      MÁS VENDIDO
                    </span>
                  </div>
                </>
              )}

              {showLetter && (
                <div className="pricing-inner-top mt-9 md:mt-12 flex justify-center">
                  <div
                    className="pricing-letter text-[150px] md:text-[150px] lg:text-[130px] xl:text-[120px] font-rubik80s text-black leading-none text-center"
                    style={{ color: textPrimary }}
                  >
                    {item.letter}
                  </div>
                </div>
              )}

              <div className="pricing-content-gap mt-6 md:mt-15 lg:mt-12 flex-1 flex flex-col sm:px-8 lg:px-8 min-h-0">
                <div className={showLetter ? "mb-9" : "mb-4"}>
                  <h3
                    className="pricing-title text-xl sm:text-2xl md:text-[20px] lg:text-[18px] font-bold font-space leading-tight mt-1 whitespace-pre-line text-black"
                    style={{ color: textPrimary }}
                  >
                    {item.title}
                  </h3>
                </div>

                {showDesc && (
                  <p
                    className="pricing-desc text-sm font-space mb-4 md:mb-3 text-gray-700"
                    style={{ color: textMuted }}
                  >
                    {item.description}
                  </p>
                )}

                {showFeatures && (
                  <div className="flex-grow mb-4 min-h-0 pricing-features-scroll">
                    <ul className="space-y-2 pricing-feat text-sm font-space">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700" style={{ color: textMuted }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <div
                  className="pricing-desde text-xs font-space text-gray-500 mb-2"
                  style={{ color: textMuted }}
                >
                  DESDE
                </div>
                <div
                  className="pricing-price text-2xl sm:text-3xl font-bold font-space text-black mb-4"
                  style={{ color: textPrimary }}
                >
                  {item.price}
                </div>
                <div className="flex gap-2">
                  <button
                    className="pricing-btn flex-1 bg-black text-white py-3 px-4 font-bold font-space text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 border-2 border-black hover:scale-105 transform flex items-center justify-center gap-2"
                    style={{ backgroundColor: btnBg, color: btnText, borderColor: btnBorder }}
                    onClick={() => handleCotizarClick(item.title)}
                    title="Enviar correo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    COTIZAR
                  </button>

                  <button
                    className="pricing-btn bg-black text-white py-3 px-4 font-bold font-space text-sm hover:bg-gray-800 transition-all duration-300 border-2 border-black hover:scale-105 transform flex items-center justify-center"
                    style={{ backgroundColor: btnBg, color: btnText, borderColor: btnBorder }}
                    onClick={copyEmail}
                    title={copiedEmail ? "¡Copiado!" : "Copiar email"}
                  >
                    {copiedEmail ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl md:ml-auto md:mr-12 md:text-right mb-5">
        <h4
          className="text-xl font-bold font-space text-black mb-2"
          style={{ color: textPrimary }}
        >
          Condiciones adicionales*
        </h4>
        <p
          className="text-sm font-space text-gray-700 leading-relaxed"
          style={{ color: textMuted }}
        >
          La ronda de cambios incluye ajustes menores posteriores a la entrega.
          El mantenimiento mensual inicia desde $500 MXN, dependiendo del tipo de
          proyecto y funcionalidades implementadas. Para más detalles consulta nuestros{" "}
          <a href="#terminos" className="underline hover:opacity-70 transition" style={{ color: textPrimary }}>
            términos y condiciones
          </a>
          .
        </p>

        {/* CTA plan personalizado */}
        <div className="pricing-cta-row mt-5 flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-3">
          <p className="text-sm font-space" style={{ color: textMuted ?? "#374151" }}>
            ¿No tenemos un plan para ti? Escríbenos a{" "}
            <span className="font-bold" style={{ color: textPrimary }}>hola@codenco.mx</span>
            {" "}y lleguemos a un acuerdo.
          </p>
          <a
            href="mailto:hola@codenco.mx"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 font-bold font-space text-sm text-white tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#0520F5",
              borderRadius: "9999px",
              boxShadow: "0 0 18px rgba(5,32,245,0.55), 0 0 40px rgba(5,32,245,0.25)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 28px rgba(5,32,245,0.85), 0 0 60px rgba(5,32,245,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 0 18px rgba(5,32,245,0.55), 0 0 40px rgba(5,32,245,0.25)";
            }}
          >
            Escríbenos 🫱🏻‍🫲🏼
          </a>
        </div>
      </div>
    </section>
  );
}