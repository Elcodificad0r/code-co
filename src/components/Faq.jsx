import React, { useState, useEffect, useRef } from "react";

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [positions, setPositions] = useState([]); // Posiciones random fijas por render
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const heroTextRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const answerRefs = useRef({});

  const faqData = [
    { id: 1, question: "¿Usan plantillas?", answer: "No. Todo lo que hacemos es código real, personalizado a tu proyecto.", pos: { x: "15%", y: "20%" }, rotation: -8, size: "medium" },
    { id: 2, question: "¿Qué incluye el precio?", answer: "Dominio, hosting, diseño, desarrollo, SEO básico y soporte técnico inicial.", pos: { x: "75%", y: "15%" }, rotation: 12, size: "large" },
    { id: 3, question: "¿Cuánto tarda en estar lista mi página?", answer: "Una landing page puede estar lista en 7 a 10 días hábiles.", pos: { x: "40%", y: "45%" }, rotation: -3, size: "small" },
    { id: 4, question: "¿Puedo pedir cambios después de publicada?", answer: "Sí, incluimos 2 rondas de revisiones menores sin costo. Cambios mayores se cotizan por separado.", pos: { x: "85%", y: "55%" }, rotation: 15, size: "medium" },
    { id: 5, question: "¿Puedo tener tienda en línea o cobros?", answer: "Por supuesto. Integramos pasarelas de pago como Stripe, PayPal o sistemas locales según tu necesidad.", pos: { x: "60%", y: "75%" }, rotation: -12, size: "large" },
    { id: 6, question: "¿Trabajan con empresas grandes?", answer: "Trabajamos con proyectos de cualquier escala, desde startups hasta corporativos. Cada proyecto recibe la misma dedicación.", pos: { x: "10%", y: "70%" }, rotation: 6, size: "medium" },
    { id: 7, question: "¿Qué pasa si no me gusta el diseño?", answer: "Incluimos hasta 3 iteraciones de diseño. Trabajamos contigo hasta que el resultado sea exactamente lo que necesitas.", pos: { x: "35%", y: "85%" }, rotation: -18, size: "small" },
  ];

  // Cargar GSAP
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.gsap) {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.onload = () => setGsapLoaded(true);
        document.head.appendChild(script);
      } else setGsapLoaded(true);
    }
  }, []);

  // Animaciones hero y título
  useEffect(() => {
    if (gsapLoaded && window.gsap) {
      const gsap = window.gsap;
      if (heroTextRef.current) {
        gsap.fromTo(heroTextRef.current, { scale: 0.8, opacity: 0, rotation: -5 }, { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "power3.out" });
      }
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { y: 60, opacity: 0, skewY: 3 }, { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out" });
      }
    }
  }, [gsapLoaded]);

  // Generar posiciones random solo una vez al montar
  useEffect(() => {
    const newPositions = faqData.map(item => ({
      left: `calc(${item.pos.x} + ${(Math.random() - 0.5) * 8}%)`,
      top: `calc(${item.pos.y} + ${(Math.random() - 0.5) * 8}%)`,
      rotation: item.rotation + (Math.random() - 0.5) * 8, // un toque experimental
      scale: 0.95 + Math.random() * 0.1 // ligeras variaciones de tamaño
    }));
    setPositions(newPositions);
  }, []);

  // Toggle smooth
  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    const isOpening = !newOpenItems.has(id);
    isOpening ? newOpenItems.add(id) : newOpenItems.delete(id);
    setOpenItems(newOpenItems);

    if (gsapLoaded && window.gsap && answerRefs.current[id]) {
      const el = answerRefs.current[id];
      if (isOpening) {
        window.gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        window.gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  };

  const getSizeClasses = (size) => {
    switch(size) {
      case "small": return "w-72 text-sm";
      case "large": return "w-96 text-base";
      default: return "w-80 text-sm";
    }
  };

  const MobileView = () => (
    <div className="mobile-faq">
      {faqData.map((item, index) => (
        <div key={item.id} className="faq-item">
          <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-6 text-left flex items-center justify-between"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="font-space text-2xl font-bold text-blue-600">{String(index+1).padStart(2,"0")}</div>
                <h3 className="font-space text-lg font-bold text-gray-900">{item.question}</h3>
              </div>
              <span className="text-xl text-blue-600">{openItems.has(item.id) ? "−" : "+"}</span>
            </button>
            <div
              ref={el => answerRefs.current[item.id] = el}
              style={{ overflow: "hidden", height: openItems.has(item.id) ? "auto" : 0 }}
            >
              <div className="px-6 pb-6">
                <p className="font-space text-gray-700 text-base leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const DesktopView = () => {
    return (
      <div className="desktop-faq">
        <div className="relative w-full h-[90vh] mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(item.id);
            const pos = positions[index]; // posiciones fijas del render
            return (
              <div
                key={item.id}
                className="absolute cursor-pointer"
                style={{
                  left: pos?.left,
                  top: pos?.top,
                  transform: `translate(-50%, -50%) rotate(${pos?.rotation}deg) scale(${pos?.scale})`,
                  zIndex: isOpen ? 50 : 10,
                }}
                onClick={() => toggleItem(item.id)}
              >
                <div className={`relative rounded-2xl p-6 shadow-lg backdrop-blur-md transition-transform hover:scale-105 ${getSizeClasses(item.size)} ${
                  isOpen ? "bg-white/95 border-2 border-blue-200" : "bg-white/80 border border-gray-200"
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 font-space font-bold text-base">{String(index+1).padStart(2,"0")}</div>
                    <div className="flex-1">
                      <h3 className="font-space font-bold text-gray-900 text-base">{item.question}</h3>
                      <div
                        ref={el => answerRefs.current[item.id] = el}
                        style={{ overflow: "hidden", height: isOpen ? "auto" : 0 }}
                      >
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <p className="text-gray-800 font-space text-base leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#ECECEC] py-16 px-4 md:px-6 relative overflow-visible">
      <style>
        {`
          .mobile-faq { display: block; }
          .desktop-faq { display: none; }
          @media (min-width: 1024px) {
            .mobile-faq { display: none; }
            .desktop-faq { display: block; }
          }
        `}
      </style>

      <div ref={heroTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="font-rubik80s text-[18vw] md:text-[12vw] lg:text-[8vw] text-blue-900 opacity-[0.03] select-none -rotate-12">FAQ</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className="font-rubik80s text-6xl md:text-6xl lg:text-9xl font text-gray-900 mb-6 leading-none">
            PREGUNTAS
            <span className="block text-blue-600 mt-2 text-5xl md:text-7xl lg:text11xl">FRECUENTES*</span>
          </h2>
          <p className="font-space text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">*O no tan frecuentes, pero importantes para ti</p>
        </div>

        <MobileView />
        <DesktopView />

        <div className="mt-20 text-center">
          <p className="font-space text-gray-600 text-lg mb-6">¿No encuentras lo que buscas?</p>
          <button className="font-space text-white bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-105">
            CONVERSEMOS →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Faq;