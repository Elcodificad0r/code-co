import React, { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const widgetRef = useRef(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  // GSAP loader
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.gsap) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.onload = () => setGsapLoaded(true);
        document.head.appendChild(script);
      } else setGsapLoaded(true);
    }
  }, []);

  // GSAP animations
  useEffect(() => {
    if (gsapLoaded && window.gsap) {
      const gsap = window.gsap;
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 80, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
        );
      }

      if (widgetRef.current) {
        gsap.fromTo(
          widgetRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );
      }
    }
  }, [gsapLoaded]);

  // Load Calendly script and initialize widget
  useEffect(() => {
    if (typeof window !== "undefined" && widgetRef.current) {
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          if (window.Calendly && widgetRef.current) {
            window.Calendly.initInlineWidget({ 
              url: "https://calendly.com/guido-gueta/30min", 
              parentElement: widgetRef.current 
            });
          }
        };
        document.body.appendChild(script);
      } else if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({ 
          url: "https://calendly.com/guido-gueta/30min", 
          parentElement: widgetRef.current 
        });
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#ECECEC] py-16 px-4 md:px-6 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:!grid-cols-2 gap-12 lg:!gap-16 items-center lg:!items-start justify-items-center lg:!justify-items-start text-center lg:!text-left">
          
          {/* Left Content */}
          <div className="space-y-8 w-full max-w-lg lg:!max-w-none">
            <div ref={titleRef} className="space-y-4">
              <h1 className="font-rubik80s text-5xl md:text-7xl lg:!text-8xl text-gray-900 leading-none">
                Hablemos
                <span className=" text-blue-600 mt-2"> de tu</span>
                <span className=" text-gray-900 mt-2"> proyecto*</span>
              </h1>
              <p className="font-space text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:!mx-0 lg:!max-w-lg">
                *Sin compromisos, solo una conversación honesta sobre lo que necesitas
              </p>
            </div>

            <div className="space-y-6">
              <div className="font-space text-gray-700">
                <h3 className="font-bold text-lg mb-3">¿Qué incluye la llamada?</h3>
                <ul className="space-y-2 text-base text-left max-w-md mx-auto lg:!mx-0 lg:!max-w-none">
                  <li className="flex items-start space-x-3"><span className="text-blue-600 font-bold">01</span><span>Análisis de tu proyecto actual</span></li>
                  <li className="flex items-start space-x-3"><span className="text-blue-600 font-bold">02</span><span>Propuesta de solución técnica</span></li>
                  <li className="flex items-start space-x-3"><span className="text-blue-600 font-bold">03</span><span>Timeline y presupuesto aproximado</span></li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 max-w-md mx-auto lg:!mx-0 lg:!max-w-none">
                <p className="font-space text-sm text-gray-600 italic text-left">
                  "En 30 minutos puedes saber exactamente qué necesitas para llevar tu idea al siguiente nivel"
                </p>
                <p className="font-space text-xs text-gray-500 mt-2 text-left">— Code&Co. Team</p>
              </div>
            </div>
          </div>

          {/* Right Content - Calendly Widget */}
          <div className="lg:!pl-8 w-full max-w-md mx-auto lg:!mx-0 lg:!max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl" style={{ height: "600px", maxHeight: "600px" }}>
                <div
                  ref={widgetRef}
                  className="relative w-full h-full"
                  style={{ minHeight: "500px" }}
                ></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="font-space text-gray-600">¿Prefieres escribirnos directamente?</p>
          <button className="font-space text-white bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-105">
            ENVIAR EMAIL →
          </button>
        </div>

        {/* Footer transparente */}
        <footer className="mt-12 w-full bg-white/10 backdrop-blur-sm rounded-xl py-6 px-4 md:px-8 text-black font-space">
  <div className="flex flex-col items-center text-center 
                  md:!flex-row md:!justify-between md:!items-center 
                  space-y-2 md:!space-y-0 w-full">
    <span className="w-auto text-xs">Code&Co. Monterrey N.L.</span>
    <span className="w-auto text-xs">権利が留保されています / 2024年以降</span>
    <span className="w-auto text-xs">we build, we create, we code.</span>
  </div>
</footer>
      </div>
    </section>
  );
};

export default ContactSection;