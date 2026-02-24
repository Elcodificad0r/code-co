// src/App.jsx
import "./App.css";
import { useRef, lazy, Suspense, useState, useCallback } from "react";
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

const SectionFallback = ({ minH = "100vh", bg }) => (
  <div style={{ minHeight: minH, backgroundColor: bg }} />
);

// Secciones con Framer que NO deben montarse hasta que estén cerca o el nav las active
const FRAMER_SECTIONS = ["nosotros", "work", "mision"];

function App() {
  const { darkMode, toggle } = useDarkMode();
  const bg = darkMode ? "#1E1E1E" : "#ECECEC";

  // Controla qué secciones con Framer ya están "desbloqueadas" para montarse
  const [unlockedSections, setUnlockedSections] = useState(new Set());

  // Desbloquea una sección — llamado por el navbar al hacer click
  const unlockSection = useCallback((sectionId) => {
    setUnlockedSections((prev) => {
      if (prev.has(sectionId)) return prev;
      const next = new Set(prev);
      next.add(sectionId);
      return next;
    });
  }, []);

  // Callback que el navbar llama antes de hacer scroll
  const onNavClick = useCallback((sectionId) => {
    // Desbloquea la sección clickeada y todas las intermedias
    const order = ["hero", "mision", "nosotros", "servicios", "precios", "procesos", "work", "faq", "contacto"];
    const idx = order.indexOf(sectionId);
    if (idx === -1) return;
    // Desbloquea todo hasta la sección destino
    order.slice(0, idx + 1).forEach((id) => {
      if (FRAMER_SECTIONS.includes(id)) unlockSection(id);
    });
  }, [unlockSection]);

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

  // Desbloquea secciones Framer cuando se acercan al viewport (300px antes)
  const { ref: nosotrosNearRef } = useInView({
    threshold: 0,
    rootMargin: "300px 0px",
    onChange: (inView) => { if (inView) unlockSection("nosotros"); },
  });
  const { ref: workNearRef } = useInView({
    threshold: 0,
    rootMargin: "300px 0px",
    onChange: (inView) => { if (inView) unlockSection("work"); },
  });
  const { ref: misionNearRef } = useInView({
    threshold: 0,
    rootMargin: "300px 0px",
    onChange: (inView) => { if (inView) unlockSection("mision"); },
  });

  const shouldUseBlackText =
    isWhyUsInView || isWorkInView || isServiciosInView || isFaqInView || isProcesosInView;

  const shouldUseWhiteText = isContactoInView;

  const isMisionUnlocked = unlockedSections.has("mision");
  const isNosotrosUnlocked = unlockedSections.has("nosotros");
  const isWorkUnlocked = unlockedSections.has("work");

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
            onNavClick={onNavClick}
          />
        </Suspense>

        {/* HeroToMision — siempre montado, contiene Hero y Mision */}
        <div ref={misionNearRef}>
          <Suspense fallback={<SectionFallback bg={bg} />}>
            <HeroToMisionCinematic
              id="hero"
              heroRef={heroRef}
              misionRef={misionRef}
              Hero={Hero}
              // Mision solo se pasa cuando está desbloqueada — evita que Framer corra desde el inicio
              Mision={isMisionUnlocked ? Mision : null}
            />
          </Suspense>
        </div>

        <Suspense fallback={<SectionFallback minH="80px" bg={bg} />}>
          <Marquee darkMode={darkMode} />
        </Suspense>

        {/* Nosotros — se monta solo cuando está cerca o el nav lo activa */}
        <section
          id="nosotros"
          ref={(el) => {
            nosotrosRef.current = el;
            nosotrosInViewRef(el);
            nosotrosNearRef(el);
          }}
          style={{ backgroundColor: bg }}
        >
          {isNosotrosUnlocked ? (
            <Suspense fallback={<SectionFallback bg={bg} />}>
              <Nosotros />
            </Suspense>
          ) : (
            <SectionFallback bg={bg} />
          )}
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

        {/* Work — se monta solo cuando está cerca o el nav lo activa */}
        <section
          id="work"
          ref={(el) => {
            workRef.current = el;
            workInViewRef(el);
            workNearRef(el);
          }}
          className="min-h-screen"
          style={{ backgroundColor: bg }}
        >
          {isWorkUnlocked ? (
            <Suspense fallback={<SectionFallback bg={bg} />}>
              <Work />
            </Suspense>
          ) : (
            <SectionFallback bg={bg} />
          )}
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