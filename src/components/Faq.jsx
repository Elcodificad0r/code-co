import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

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

const Faq = () => {
  const dark = useHtmlDark();

  const bg            = dark ? "#1E1E1E"           : "#ECECEC";
  const textPrimary   = dark ? "#F2F0E4"           : "#111827";
  const textMuted     = dark ? "#a0a8b8"           : "#4B5563";
  const textAnswer    = dark ? "#c8cfd8"           : "#1F2937";
  const borderMuted   = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const cardBg        = dark ? "rgba(42,42,42,0.95)"   : "rgba(255,255,255,0.95)";
  const cardBgIdle    = dark ? "rgba(42,42,42,0.80)"   : "rgba(255,255,255,0.80)";
  const cardBorder    = dark ? "#3b5bdb"           : "#1e40af";
  const cardBorderIdle= dark ? "#444444"           : "#e5e7eb";
  const numStroke     = dark ? "#7c9ef5"           : "#0520F5";
  const accentBlue    = dark ? "#7c9ef5"           : "#0520F5";

  const [openItems, setOpenItems] = useState(new Set());
  const [positions, setPositions] = useState([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroTextRef = useRef(null);
  const answerRefs = useRef({});
  const [zMap, setZMap] = useState({});
  const zCounterRef = useRef(60);

  const faqData = [
    {
      id: 1,
      question: " ¿Mi página aparecerá en Google?",
      answer: "Sí. Todas nuestras páginas incluyen estructura optimizada para SEO básico, velocidad optimizada y buenas prácticas técnicas para posicionamiento.",
      pos: { x: "15%", y: "20%" },
      rotation: -8,
      size: "medium",
    },
    {
      id: 2,
      question: "¿Qué incluye el precio?",
      answer: "Dominio, hosting, diseño, desarrollo, SEO básico y soporte técnico inicial.",
      pos: { x: "75%", y: "15%" },
      rotation: 12,
      size: "large",
    },
    {
      id: 3,
      question: "¿Cuánto tarda en estar lista mi página?",
      answer: "Una landing page puede estar lista en 5 a 10 días hábiles.",
      pos: { x: "40%", y: "45%" },
      rotation: -3,
      size: "small",
    },
    {
      id: 4,
      question: "¿Puedo pedir cambios después de publicada?",
      answer: "Sí, incluimos 2 rondas de revisiones menores sin costo. Y el mantenimiento mensual inicia desde 500 MXN.",
      pos: { x: "85%", y: "55%" },
      rotation: 15,
      size: "medium",
    },
    {
      id: 5,
      question: "¿Puedo tener tienda en línea o cobros?",
      answer: "Por supuesto. Integramos pasarelas de pago como Stripe, PayPal o sistemas locales según tu necesidad.",
      pos: { x: "68%", y: "72%" },
      rotation: -12,
      size: "large",
    },
    {
      id: 6,
      question: "¿Trabajan con empresas grandes?",
      answer: "Trabajamos con proyectos de cualquier escala, desde startups hasta corporativos. Cada proyecto recibe la misma dedicación.",
      pos: { x: "10%", y: "70%" },
      rotation: 6,
      size: "medium",
    },
    {
      id: 7,
      question: "¿Qué pasa si no me gusta el diseño?",
      answer: "Incluimos hasta 3 iteraciones de diseño. Trabajamos contigo hasta que el resultado sea exactamente lo que necesitas.",
      pos: { x: "32%", y: "90%" },
      rotation: -18,
      size: "small",
    },
  ];

  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { scale: 0.8, opacity: 0, rotation: -5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "power3.out" }
      );
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const newPositions = faqData.map((item) => ({
      left: `calc(${item.pos.x} + ${(Math.random() - 0.5) * 8}%)`,
      top: `calc(${item.pos.y} + ${(Math.random() - 0.5) * 8}%)`,
      rotation: item.rotation + (Math.random() - 0.5) * 8,
      scale: 0.95 + Math.random() * 0.1,
    }));
    setPositions(newPositions);
  }, []);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    const isOpening = !newOpenItems.has(id);

    if (isOpening) {
      newOpenItems.add(id);
      zCounterRef.current += 1;
      setZMap((prev) => ({ ...prev, [id]: zCounterRef.current }));
    } else {
      newOpenItems.delete(id);
    }

    setOpenItems(newOpenItems);

    if (answerRefs.current[id]) {
      const el = answerRefs.current[id];
      if (isOpening) {
        gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case "small": return "w-72 text-sm";
      case "large": return "w-96 text-base";
      default: return "w-80 text-sm";
    }
  };

  const MobileView = () => (
    <div className="mobile-faq w-full overflow-x-hidden">
      <style>{`
        .faq-mobile-item { border-top: 1.5px solid ${borderMuted}; }
        .faq-mobile-item:last-child { border-bottom: 1.5px solid ${borderMuted}; }
        .faq-mobile-bar { display: block; height: 2px; background: ${accentBlue}; width: 0%; transition: width 0.4s cubic-bezier(0.4,0,0.2,1); }
        .faq-mobile-bar.active { width: 100%; }
        .faq-mobile-num { font-family: inherit; font-size: clamp(2.5rem, 10vw, 3.5rem); font-weight: 900; line-height: 1; color: transparent; -webkit-text-stroke: 1.5px ${numStroke}; transition: color 0.3s, -webkit-text-stroke 0.3s; min-width: 3.5rem; }
        .faq-mobile-num.active { color: ${numStroke}; -webkit-text-stroke: 1.5px ${numStroke}; }
        .faq-mobile-toggle { width: 2rem; height: 2rem; border-radius: 50%; border: 1.5px solid ${accentBlue}; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: ${accentBlue}; transition: background 0.25s, color 0.25s; shrink: 0; }
        .faq-mobile-toggle.active { background: ${accentBlue}; color: ${dark ? "#1E1E1E" : "white"}; }
      `}</style>
      {faqData.map((item, index) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id} className="faq-mobile-item" style={item.id === 5 || item.id === 7 ? { paddingTop: "0.75rem" } : {}}>
            <span className={`faq-mobile-bar ${isOpen ? "active" : ""}`} />
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left flex items-center gap-4 py-5 px-1"
              style={{ background: "none", border: "none" }}
            >
              <span className={`faq-mobile-num font-rubik80s ${isOpen ? "active" : ""}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-space font-bold flex-1 min-w-0 break-words leading-snug"
                style={{ fontSize: "clamp(0.95rem, 3.8vw, 1.1rem)", color: textPrimary }}
              >
                {item.question}
              </h3>
              <span className={`faq-mobile-toggle shrink-0 ${isOpen ? "active" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              ref={(el) => (answerRefs.current[item.id] = el)}
              style={{ overflow: "hidden", height: isOpen ? "auto" : 0 }}
            >
              <p
                className="font-space text-sm leading-relaxed pb-6 px-1"
                style={{ paddingLeft: "calc(3.5rem + 1rem)", color: textMuted }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const DesktopView = () => (
    <div className="desktop-faq">
      <div className="relative w-full h-[90vh] mx-auto">
        {faqData.map((item, index) => {
          const isOpen = openItems.has(item.id);
          const pos = positions[index];
          const dynamicZ = isOpen ? (zMap[item.id] ?? 50) : 10;
          return (
            <div
              key={item.id}
              className="absolute cursor-pointer"
              style={{
                left: pos?.left,
                top: pos?.top,
                transform: `translate(-50%, -50%) rotate(${pos?.rotation}deg) scale(${pos?.scale})`,
                zIndex: dynamicZ,
              }}
              onClick={() => toggleItem(item.id)}
            >
              <div
                className={`relative rounded-2xl p-6 shadow-lg backdrop-blur-md transition-transform hover:scale-105 ${getSizeClasses(item.size)}`}
                style={{
                  background: isOpen ? cardBg : cardBgIdle,
                  border: isOpen ? `2px solid ${cardBorder}` : `1px solid ${cardBorderIdle}`,
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="font-space font-bold text-base" style={{ color: accentBlue }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space font-bold text-base" style={{ color: textPrimary }}>{item.question}</h3>
                    <div
                      ref={(el) => (answerRefs.current[item.id] = el)}
                      style={{ overflow: "hidden", height: isOpen ? "auto" : 0 }}
                    >
                      <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${cardBorderIdle}` }}>
                        <p className="font-space text-base leading-relaxed" style={{ color: textAnswer }}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: accentBlue, color: dark ? "#1E1E1E" : "white" }}
                >
                  {isOpen ? "−" : "+"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="faq-section-root min-h-screen py-16 px-4 md:px-6 relative overflow-visible"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        .mobile-faq { display: block; }
        .desktop-faq { display: none; }
        @media (min-width: 1024px) {
          .mobile-faq { display: none !important; }
          .desktop-faq { display: block !important; }
        }
        @media (max-width: 1023px) {
          .faq-section-root { overflow-x: hidden !important; max-width: 100vw !important; }
          .faq-title-wrap { overflow-x: hidden !important; width: 100% !important; }
        }
      `}</style>

      <div ref={heroTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="font-rubik80s text-[18vw] md:text-[12vw] lg:text-[8vw] text-blue-900 opacity-[0.03] select-none -rotate-12">
          FAQ
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="faq-title-wrap mb-16 text-center">
          <h2
            ref={titleRef}
            className="font-rubik80s font mb-6 leading-none"
            style={{ fontSize: "clamp(2rem, 12vw, 6rem)", color: textPrimary }}
          >
            PREGUNTAS
            <span className="block mt-2" style={{ fontSize: "clamp(1.8rem, 11vw, 5.5rem)", color: accentBlue }}>
              FRECUENTES*
            </span>
          </h2>
          <p className="font-space text-lg md:text-xl max-w-2xl mx-auto" style={{ color: textMuted }}>
            *ó no tan frecuentes, pero importantes para ti
          </p>
        </div>

        <MobileView />
        <DesktopView />

        <div className="mt-20 text-center">
          <p className="font-space text-lg mb-6" style={{ color: textMuted }}>¿No encuentras lo que buscas?</p>
          <button className="font-space text-white bg-gradient-to-r from-blue-800 to-purple-400 px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-105">
            CONVERSEMOS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;