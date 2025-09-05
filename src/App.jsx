// App.jsx
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { useRef, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { HelmetProvider } from "react-helmet-async";


const Mision = lazy(() => import("./components/Mision"));
const Servicios = lazy(() => import("./components/Servicios"));
const Precios = lazy(() => import("./components/Precios")); 
const Nosotros = lazy(() => import("./components/testimonios/Nosotros"));
const Work = lazy(() => import("./components/Work"));
const Faq = lazy(() => import("./components/Faq"));
const Contact = lazy(() => import("./components/Contact")); 

function App() {
  const heroRef = useRef(null);
  const misionRef = useRef(null);
  const nosotrosRef = useRef(null);
  const workRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);
  const faqRef = useRef(null);

  const { ref: nosotrosInViewRef, inView: isWhyUsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: workInViewRef, inView: isWorkInView } = useInView({
    threshold: 0.2,
  });
  const { ref: faqInViewRef, inView: isFaqInView } = useInView({
    threshold: 0.2,
  });
  const { ref: serviciosInViewRef, inView: isServiciosInView } = useInView({
    threshold: 0.2,
  });
  const { ref: contactoInViewRef, inView: isContactoInView } = useInView({
    threshold: 1,
    rootMargin: "-100px 0px",
  });

  const shouldUseBlackText =
    isWhyUsInView || isWorkInView || isServiciosInView || isFaqInView;
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
          refs={{
            heroRef,
            misionRef,
            nosotrosRef,
            workRef,
            serviciosRef,
            contactoRef,
            faqRef,
          }}
          isDarkSection={shouldUseBlackText && !shouldUseWhiteText}
        />

       
        <section id="hero" ref={heroRef} className="min-h-screen bg-[#ECECEC]">
          <Hero />
        </section>

        <Suspense fallback={<div className="min-h-screen">Cargando...</div>}>
          {/* Misión */}
          <section id="mision" ref={misionRef} className="h-80vh bg-[#ECECEC]">
            <Mision />
          </section>

         
          <section
            id="nosotros"
            ref={(el) => {
              nosotrosRef.current = el;
              nosotrosInViewRef(el);
            }}
          >
            <Nosotros />
          </section>

  
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

       
          <section
            id="precios"
            className="min-h-screen bg-[#ECECEC]"
          >
            <Precios />
          </section>

      
          <section
            id="work"
            ref={(el) => {
              workRef.current = el;
              workInViewRef(el);
            }}
            className="min-h-screen bg-[#ECECEC]"
          >
            <Work />
          </section>

         
          <section
            id="faq"
            ref={(el) => {
              faqRef.current = el;
              faqInViewRef(el);
            }}
            className="min-h-screen bg-[#ECECEC]"
          >
            <Faq />
          </section>

        
          <section id="contacto" ref={contactoRef} className="min-h-screen bg-gray-100">
            <Contact />
          </section>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;