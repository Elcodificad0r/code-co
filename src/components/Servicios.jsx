import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

  // Get current week and year
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
    const ctx = gsap.context(() => {
      // Initial setup for main text
      gsap.set(mainTextRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      // Initial setup for top sections with stagger
      gsap.set('.animate-section', {
        opacity: 0,
        y: 50
      });

      // Initial setup for services text
      gsap.set('.service-item', {
        opacity: 0,
        x: -30
      });

      // Animate top sections first
      gsap.to('.animate-section', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: topSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Glitch effect for week numbers
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTl
        .to(weekRef.current, {
          duration: 0.1,
          skewX: 70,
          ease: "power4.inOut"
        })
        .to(weekRef.current, {
          duration: 0.04,
          skewX: 0,
          opacity: 0.8,
          ease: "power4.inOut"
        })
        .to(weekRef.current, {
          duration: 0.04,
          opacity: 1,
          ease: "power4.inOut"
        })
        .to(weekRef.current, {
          duration: 0.1,
          skewX: -20,
          ease: "power4.inOut"
        })
        .to(weekRef.current, {
          duration: 0.04,
          skewX: 0,
          ease: "power4.inOut"
        });

      // Eye fade in/out effect with scroll
      ScrollTrigger.create({
        trigger: eyeRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const opacity = Math.sin(progress * Math.PI * 2) * 0.3 + 0.7;
          gsap.to(eyeRef.current, {
            opacity: opacity,
            duration: 0.3
          });
        }
      });

      // Barcode parallax effect
      ScrollTrigger.create({
        trigger: barcodeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(barcodeRef.current, {
            y: progress * -50,
            rotation: progress * 5,
            duration: 0.3
          });
        }
      });

      // Services text staggered fade in after arrow
      gsap.to('.service-item', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.3,
        delay: 1.2,
        scrollTrigger: {
          trigger: servicesTextRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Main text entrance animation with scale
      gsap.to(mainTextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Text change animation based on scroll with enhanced effects
      ScrollTrigger.create({
        trigger: mainTextRef.current,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (progress < 0.09) {
            // Show DISEÑ*
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space text-black">DISEÑ</span><span class="font-rubik80s text-black text-red-500">*</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]">WEB</span>
                </div>
              `;
            }
          } else if (progress < 0.26) {
            // Show SITI*S
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space text-black">SITI</span><span class="font-rubik80s text-blue-500">*S</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]">WEB</span>
                </div>
              `;
            }
          } else {
            // Show SEO*
            if (mainTextRef.current) {
              mainTextRef.current.innerHTML = `
                <div class="text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
                  <span class="font-bold font-space text-black">SEO</span><span class="font-rubik80s text-green-500">*</span>
                  <br/>
                  <span class="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]">WEB</span>
                </div>
              `;
            }
          }

          // Add text pulsing effect
          gsap.to(mainTextRef.current, {
            scale: 1 + (Math.sin(progress * Math.PI * 4) * 0.02),
            duration: 0.1
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#ECECEC] min-h-screen overflow-hidden py-16">
      
      {/* Top section with 4 divs in row */}
      <div ref={topSectionRef} className="flex flex-row flex-wrap justify-between items-start px-8 md:px-16 mb-20">
        
        {/* Div 1: Week info - Left with glitch effect */}
        <div className="animate-section flex-shrink-0">
          <div ref={weekRef} className="text-gray-600 text-sm tracking-wider">
            <div className="font-bold">WE</div>
            <div className="font-bold">EK</div>
            <div className="font-light text-xs mt-1 font-mono">{currentWeek}</div>
          </div>
        </div>

        {/* Div 2: Eye image - Center Left with fade effect */}
        <div className="animate-section flex-shrink-0 mx-8">
          <div className="relative">
            <img 
              ref={eyeRef}
              src="/img/ojoservicios.png" 
              alt="Eye service" 
              className="w-48 md:w-64 h-auto grayscale transition-opacity duration-300"
            />
            <div className="absolute inset-0 border-2 border-gray-400 border-dashed"></div>
          </div>
        </div>

        {/* Div 3: Year and services info - Center Right */}
        <div className="animate-section flex-shrink-0 mx-8">
          {/* Year */}
          <div 
            className="text-gray-600 text-sm tracking-wider font-light leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: currentYear }}
          />
          
          {/* Services info with staggered animations */}
          <div ref={servicesTextRef} className="space-y-3 text-gray-700 max-w-xs text-sm">
            <div className="service-item font-regular">
              <strong className="text-black">Landing Page →</strong> Sitios rápidos y efectivos.
            </div>
            <div className="service-item font-regular">
              <strong className="text-black">Siti* web.2 →</strong> Ideal para consultorios, marcas y empresas.
            </div>
            <div className="service-item font-regular">
              <strong className="text-black">SE* →</strong> Significa visibilidad: más clics, más clientes.
            </div>
            <div className="service-item font-regular">
              <strong className="text-black">Diseño→</strong> Funcionalidades avanzadas según necesidades.
            </div>
          </div>
        </div>

        {/* Div 4: Barcode and arrow - Right with parallax */}
        <div className="animate-section flex-shrink-0 flex flex-col items-center">
          {/* Barcode with parallax effect */}
          <img 
            ref={barcodeRef}
            src="/img/codigoservicios.png" 
            alt="Barcode" 
            className="w-24 h-auto opacity-60 mb-4 transition-transform duration-300"
          />
          
          {/* Arrow */}
          <svg 
            className="w-8 h-8 text-gray-600 animate-bounce" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {/* Bottom section - Large text with enhanced presence */}
      <div className="flex justify-center items-center px-8 md:px-16">
        <div 
          ref={mainTextRef}
          className="text-center"
        >
          {/* Initial content - will be replaced by GSAP */}
          <div className="text-8xl md:text-9xl lg:text-[24rem] leading-none tracking-tight">
            <span className="font-bold font-space text-black">DISEÑ</span>
            <span className="font-bold font-rubik80s text-red-500">*</span>
            <br/>
            <span className="font-rubik80s text-8xl md:text-9xl lg:text-[12rem]">WEB</span>
          </div>
        </div>
      </div>

      {/* Background decorative asterisk with subtle animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <div className="text-gray-200 text-[400px] md:text-[600px] lg:text-[800px] leading-none opacity-10 animate-pulse">
          *
        </div>
      </div>
    </section>
  );
}