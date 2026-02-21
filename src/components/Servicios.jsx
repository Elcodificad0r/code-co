import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

export default function ServicesHero() {
  const containerRef = useRef(null);
  const mainTextRef = useRef(null);
  const topSectionRef = useRef(null);
  const weekRef = useRef(null);
  const eyeRef = useRef(null);
  const barcodeRef = useRef(null);
  const servicesTextRef = useRef(null);
  const [currentWeek, setCurrentWeek] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const dark = useHtmlDark();

  const bg          = dark ? "#1E1E1E"  : undefined;
  const textPrimary = dark ? "#F2F0E4"  : undefined;
  const textMuted   = dark ? "#a0a8b8"  : undefined;
  const textStrong  = dark ? "#F2F0E4"  : "#000000";
  const starColor   = dark ? "#2a2a2a"  : undefined;

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const week = Math.ceil(dayOfYear / 7);
    setCurrentWeek(`${week}/52`);
    setCurrentYear(now.getFullYear().toString().split('').join('<br/>'));
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const sectionStart = isMobile ? "top 95%" : "top 70%";
    const mainStart = isMobile ? "top 95%" : "top 80%";

    // CAMBIO: mobile y desktop con triggers distintos para el scrub del texto principal
    // Mobile: se activa cuando el elemento entra a pantalla (top 85%)
    // Desktop: se activa mucho más tarde — cuando el elemento está casi centrado en pantalla
    const mainScrubStart = isMobile ? "top 95%" : "center 90%";
    const mainScrubEnd   = isMobile ? "bottom 20%" : "bottom 10%";

    const ctx = gsap.context(() => {
      gsap.set(mainTextRef.current, { opacity: 0, y: 100, scale: 0.8 });
      gsap.set('.animate-section', { opacity: 0, y: 50 });
      gsap.set('.service-item', { opacity: 0, x: -30 });

      gsap.to('.animate-section', {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: topSectionRef.current, start: sectionStart, toggleActions: "play none none reverse" }
      });

      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTl
        .to(weekRef.current, { duration: 0.1, skewX: 70, ease: "power4.inOut" })
        .to(weekRef.current, { duration: 0.04, skewX: 0, opacity: 0.8, ease: "power4.inOut" })
        .to(weekRef.current, { duration: 0.04, opacity: 1, ease: "power4.inOut" })
        .to(weekRef.current, { duration: 0.1, skewX: -20, ease: "power4.inOut" })
        .to(weekRef.current, { duration: 0.04, skewX: 0, ease: "power4.inOut" });

      ScrollTrigger.create({
        trigger: eyeRef.current, start: "top 80%", end: "bottom 20%", scrub: 1,
        onUpdate: (self) => {
          const opacity = Math.sin(self.progress * Math.PI * 2) * 0.3 + 0.7;
          gsap.to(eyeRef.current, { opacity, duration: 0.3 });
        }
      });

      ScrollTrigger.create({
        trigger: barcodeRef.current, start: "top bottom", end: "bottom top", scrub: 2,
        onUpdate: (self) => {
          gsap.to(barcodeRef.current, { y: self.progress * -50, rotation: self.progress * 5, duration: 0.3 });
        }
      });

      gsap.to('.service-item', {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.3, delay: 1.2,
        scrollTrigger: { trigger: servicesTextRef.current, start: sectionStart, toggleActions: "play none none reverse" }
      });

      gsap.to(mainTextRef.current, {
        opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: mainTextRef.current, start: mainStart, toggleActions: "play none none reverse" }
      });

      // CAMBIO: mainScrubStart y mainScrubEnd diferenciados por device
      ScrollTrigger.create({
        trigger: mainTextRef.current, start: mainScrubStart, end: mainScrubEnd, scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const isDark = document.documentElement.classList.contains("dark");
          const tc = isDark ? "#F2F0E4" : "black";

          if (progress < 0.09) {
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space" style="color:${tc}">DISEÑ</span><span class="font-rubik80s text-red-500">*</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]" style="color:${tc}">WEB</span>
                </div>
              `;
            }
          } else if (progress < 0.26) {
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space" style="color:${tc}">AP</span><span class="font-rubik80s text-blue-800">P</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]" style="color:${tc}">WEB</span>
                </div>
              `;
            }
          } else {
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space" style="color:${tc}">SEO</span><span class="font-rubik80s text-green-800">*</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]" style="color:${tc}">WEB</span>
                </div>
              `;
            }
          }

          gsap.to(mainTextRef.current, { scale: 1 + (Math.sin(progress * Math.PI * 4) * 0.02), duration: 0.1 });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#ECECEC] min-h-screen overflow-hidden py-16" style={{ backgroundColor: bg }}>

      <div ref={topSectionRef} className="flex flex-row flex-wrap justify-between items-end px-8 md:px-16 mb-20">

        <div className="animate-section flex-shrink-0">
          <div ref={weekRef} className="text-gray-600 text-lg tracking-wider" style={{ color: textMuted }}>
            <div className="font-bold">WE</div>
            <div className="font-bold">EK</div>
            <div className="font-light text-xl mt-1 font-mono">{currentWeek}</div>
          </div>
        </div>

        <div className="animate-section flex-shrink-0 mx-8">
          <div className="relative">
            <img
              ref={eyeRef}
              src="img/ojoservicios.webp"
              alt="Eye service"
              className="w-48 md:w-64 h-auto grayscale transition-opacity duration-300"
            />
            <div className="absolute inset-0 border-2 border-gray-400 border-dashed" style={{ borderColor: textMuted }}></div>
          </div>
        </div>

        <div className="animate-section flex-shrink-0 mx-8">
          <div
            className="text-gray-600 text-sm tracking-wider font-light leading-tight mb-6"
            style={{ color: textMuted }}
            dangerouslySetInnerHTML={{ __html: currentYear }}
          />

          {/* CAMBIO: text-xl → text-base en mobile, xl en desktop */}
          <div ref={servicesTextRef} className="space-y-3 text-gray-700 max-w-xs text-base md:text-xl" style={{ color: textMuted }}>
            <div className="service-item font-space">
              <strong style={{ color: textStrong }}>Landing Page →</strong> Sitios rápidos y efectivos.
            </div>
            <div className="service-item font-regular">
              <strong style={{ color: textStrong }}>Sitio web.2* →</strong> Ideal para consultorios, marcas y empresas.
            </div>
            <div className="service-item font-regular">
              <strong style={{ color: textStrong }}>SEO* →</strong> Significa visibilidad: más clics, más clientes.
            </div>
            <div className="service-item font-regular">
              <strong style={{ color: textStrong }}>Diseño→</strong> Funcionalidades avanzadas según necesidades.
            </div>
          </div>
        </div>

        <div className="animate-section flex-shrink-0 flex flex-col items-center">
          <img
            ref={barcodeRef}
            src="img/codigoservicios.png"
            alt="Barcode"
            className="w-24 h-auto opacity-60 mb-4 transition-transform duration-300"
            style={{ filter: dark ? "invert(1) opacity(0.6)" : undefined }}
          />

          <svg className="w-8 h-8 text-gray-600 animate-bounce" fill="currentColor" viewBox="0 0 24 24" style={{ color: textMuted }}>
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      <div className="flex justify-center items-center px-8 md:px-16">
        <div ref={mainTextRef} className="text-center">
          <div className="text-8xl md:text-9xl lg:text-[24rem] leading-none tracking-tight">
            <span className="font-bold font-space text-black" style={{ color: textStrong }}>DISEÑ</span>
            <span className="font-bold font-rubik80s text-red-500">*</span>
            <br/>
            <span className="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]" style={{ color: textStrong }}>WEB</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <div className="text-gray-200 text-[400px] md:text-[600px] lg:text-[800px] leading-none opacity-10 animate-pulse" style={{ color: starColor }}>
          *
        </div>
      </div>
    </section>
  );
}