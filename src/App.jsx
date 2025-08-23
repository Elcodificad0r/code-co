// App.jsx
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { useRef, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { HelmetProvider } from "react-helmet-async";

// Lazy loaded components
const Nosotros = lazy(() => import("./components/Nosotros"));
const Servicios = lazy(() => import("./components/Servicios"));
const Contact = lazy(() => import("./components/Contact"));
const WhyUs = lazy(() => import("./components/testimonios/WhyUs")); // 👈 cambiado

function App() {
  const heroRef = useRef(null);
  const nosotrosRef = useRef(null);
  const whyUsRef = useRef(null); // 👈 cambiado
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  const { ref: whyUsInViewRef, inView: isWhyUsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: serviciosInViewRef, inView: isServiciosInView } = useInView({
    threshold: 0.2,
  });
  const { ref: contactoInViewRef, inView: isContactoInView } = useInView({
    threshold: 1,
    rootMargin: "-100px 0px",
  });

  const shouldUseBlackText = isWhyUsInView || isServiciosInView;
  const shouldUseWhiteText = isContactoInView;

  return (
    <HelmetProvider>
      <div
        className={`App ${
          shouldUseWhiteText
            ? "text-white"
            : shouldUseBlackText
            ? "text-black"
            : "text-white"
        } transition-colors duration-500`}
      >
        <Navbar
          refs={{ heroRef, nosotrosRef, whyUsRef, serviciosRef, contactoRef }}
          isDarkSection={shouldUseBlackText && !shouldUseWhiteText}
        />

        {/* Hero */}
        <section id="hero" ref={heroRef} className="min-h-screen bg-[#ECECEC]">
          <Hero />
        </section>

        <Suspense fallback={<div className="min-h-screen">Cargando...</div>}>
          {/* Nosotros */}
          <section
            id="nosotros"
            ref={nosotrosRef}
            className="h-80vh bg-[#ECECEC]"
          >
            <Nosotros />
          </section>

          {/* WhyUs */}
          <section
            id="whyus"
            ref={(el) => {
              whyUsRef.current = el;
              whyUsInViewRef(el);
            }}
          >
            <WhyUs />
          </section>

          {/* Servicios */}
          <section
            id="servicios"
            ref={(el) => {
              serviciosRef.current = el;
              serviciosInViewRef(el);
            }}
            className="min-h-screen bg-[#ECECEC]"
          >
            <Servicios />
          </section>

          {/* Contacto */}
          <section
            id="contacto"
            ref={(el) => {
              contactoRef.current = el;
              contactoInViewRef(el);
            }}
            className="min-h-screen bg-[#ECECEC]"
          >
            <Contact />
          </section>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;