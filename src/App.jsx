// src/App.jsx
import "./App.css";
import { useRef, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { HelmetProvider } from "react-helmet-async";
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = lazy(() => import("./components/navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Marquee = lazy(() => import("./components/Marquee"));
const HeroToMisionCinematic = lazy(() => import("./components/HeroToMisionCinematic"));
const Mision = lazy(() => import("./components/Mision"));
const Servicios = lazy(() => import("./components/Servicios"));
const Precios = lazy(() => import("./components/Precios"));
const Nosotros = lazy(() => import("./components/testimonios/Nosotros"));
const Work = lazy(() => import("./components/Work"));
const Faq = lazy(() => import("./components/Faq"));
const Contact = lazy(() => import("./components/Contact"));
const Procesos = lazy(() => import("./components/Procesos"));

// SectionFallback recibe bg directamente — sin clases Tailwind arbitrarias
const SectionFallback = ({ minH = "100vh", bg }) => (
  <div style={{ minHeight: minH, backgroundColor: bg }} />
);

function App() {
  const { darkMode, toggle } = useDarkMode();

  // Una sola fuente de verdad — igual que usan todos los componentes internamente
  const bg = darkMode ? "#1E1E1E" : "#ECECEC";

  const heroRef = useRef(null);
  const misionRef = useRef(null);
  const nosotrosRef = useRef(null);
  const workRef = useRef(null);
  const serviciosRef = useRef(null);
  const procesosRef = useRef(null);
  const contactoRef = useRef(null);
  const faqRef = useRef(null);

  const { ref: nosotrosInViewRef, inView: isWhyUsInView } = useInView({ threshold: 0.2 });
  const { ref: workInViewRef, inView: isWorkInView } = useInView({ threshold: 0.2 });
  const { ref: faqInViewRef, inView: isFaqInView } = useInView({ threshold: 0.2 });
  const { ref: serviciosInViewRef, inView: isServiciosInView } = useInView({ threshold: 0.2 });
  const { ref: procesosInViewRef, inView: isProcesosInView } = useInView({ threshold: 0 });
  const { ref: contactoInViewRef, inView: isContactoInView } = useInView({
    threshold: 1,
    rootMargin: "-100px 0px",
  });

  const shouldUseBlackText =
    isWhyUsInView || isWorkInView || isServiciosInView || isFaqInView || isProcesosInView;

  const shouldUseWhiteText = isContactoInView;

  return (
    <HelmetProvider>
      <div
        className={`App ${
          shouldUseWhiteText ? "text-white" : shouldUseBlackText ? "text-black" : "text-white"
        } transition-colors duration-500`}
        style={{ backgroundColor: bg }}
      >
        <Suspense fallback={<div style={{ height: "64px", backgroundColor: bg }} />}>
          <Navbar
            refs={{ heroRef, misionRef, nosotrosRef, workRef, serviciosRef, procesosRef, contactoRef, faqRef }}
            isDarkSection={shouldUseBlackText && !shouldUseWhiteText}
            darkMode={darkMode}
            onToggleDark={toggle}
          />
        </Suspense>

        <Suspense fallback={<SectionFallback bg={bg} />}>
          <HeroToMisionCinematic
            id="hero"
            heroRef={heroRef}
            misionRef={misionRef}
            Hero={Hero}
            Mision={Mision}
          />
        </Suspense>

        {/* Marquee recibe darkMode — maneja su propio fondo internamente */}
        <Suspense fallback={<SectionFallback minH="80px" bg={bg} />}>
          <Marquee darkMode={darkMode} />
        </Suspense>

        <section
          id="nosotros"
          ref={(el) => { nosotrosRef.current = el; nosotrosInViewRef(el); }}
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Nosotros />
          </Suspense>
        </section>

        <section
          id="servicios"
          ref={(el) => { serviciosRef.current = el; serviciosInViewRef(el); }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Servicios />
          </Suspense>
        </section>

        <section
          id="precios"
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Precios />
          </Suspense>
        </section>

        <section
          id="procesos"
          ref={(el) => { procesosRef.current = el; procesosInViewRef(el); }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Procesos />
          </Suspense>
        </section>

        <section
          id="work"
          ref={(el) => { workRef.current = el; workInViewRef(el); }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Work />
          </Suspense>
        </section>

        <section
          id="faq"
          ref={(el) => { faqRef.current = el; faqInViewRef(el); }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <Faq />
          </Suspense>
        </section>

        <section
          id="contacto"
          ref={(el) => { contactoRef.current = el; contactoInViewRef(el); }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          <Suspense fallback={<SectionFallback minH="50vh" bg={bg} />}>
            <Contact />
          </Suspense>
        </section>
      </div>
    </HelmetProvider>
  );
}

export default App;