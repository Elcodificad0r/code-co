import React, { useEffect, useState, Suspense, useCallback } from "react";
import { Helmet } from "react-helmet-async";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

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

const heroStyles = `
  spline-viewer::part(logo),
  spline-viewer::part(watermark),
  spline-viewer::part(branding) {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
  spline-viewer a[href*="spline"] {
    display: none !important;
    pointer-events: none !important;
  }
  spline-viewer .logo,
  spline-viewer .watermark,
  spline-viewer .branding {
    display: none !important;
    pointer-events: none !important;
  }
  .hero-section * {
    pointer-events: none !important;
  }
  .hero-section canvas {
    pointer-events: auto !important;
  }
  .hero-section .hero-btn,
  .hero-section .hero-btn * {
    pointer-events: auto !important;
    cursor: pointer !important;
  }

  /* CAMBIO: mobile — títulos más pequeños y menos espacio entre líneas */
  @media (max-width: 767px) {
    .hero-text {
      font-size: clamp(2.4rem, 7.5vw, 2.2rem) !important;
      line-height: 1.20 !important;
      margin-top: 0 !important;
    }
    .hero-text .force-rubik {
      font-size: clamp(3.2rem, 20vw, 3.5rem) !important;
      line-height: 1.00 !important;
    }
  }
`;

function Hero() {
  const dark = useHtmlDark();
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);
  const [splineVisible, setSplineVisible] = useState(false);
  const [useHeavyImage, setUseHeavyImage] = useState(true);

  // Progressive image state
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [desktopMrLoaded, setDesktopMrLoaded] = useState(false);
  const [desktopMrVisible, setDesktopMrVisible] = useState(false);
  const [mobileMrLoaded, setMobileMrLoaded] = useState(false);
  const [mobileMrVisible, setMobileMrVisible] = useState(false);

  const bg          = dark ? "#1E1E1E"             : undefined;
  const textColor   = dark ? "#F2F0E4"             : "#000000";
  const gradFrom    = dark ? "rgba(30,30,30,0.80)" : "rgba(255, 255, 255, 0.64)";
  const gradMid     = dark ? "rgba(30,30,30,0.30)" : "rgba(255, 255, 255, 0.18)";
  const overlayFull = dark ? "rgba(30,30,30,0.55)" : "rgba(236,236,236,0.55)";
  const btnBg       = dark ? "rgba(5,32,245,0.20)" : "rgba(255,255,255,0.40)";
  const btnBorder   = dark ? "rgba(5,32,245,0.40)" : "rgba(255,255,255,0.70)";
  const btnHover    = dark ? "rgba(5,32,245,0.30)" : "rgba(255,255,255,0.60)";

  // Scene and image paths — switch on dark mode
  const splineScene = dark
    ? "https://prod.spline.design/ynMwmLIvAIz3qg87/scene.splinecode"
    : "https://prod.spline.design/ynRlLABAAAV7NTz5/scene.splinecode";

  const desktopLr = dark ? "/img/darklowresherospline.webp"        : "/img/lowresherospline.webp";
  const desktopMr = dark ? "/img/darklowresherosplinemr.webp"      : "/img/lowresherosplinemr.webp";
  const mobileLr  = dark ? "/img/darklazyloadinghomemobilelr.webp" : "/img/lazyloadinghomemobilelr.webp";
  const mobileMr  = dark ? "/img/darklazyloadinghomemobilemr.webp" : "/img/lazyloadinghomemobilemr.webp";

  // Detect mobile on resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Reload mid-res images when dark mode toggles
  useEffect(() => {
    if (!useHeavyImage) return;

    setDesktopMrLoaded(false);
    setDesktopMrVisible(false);
    setMobileMrLoaded(false);
    setMobileMrVisible(false);

    const imgDesktop = new Image();
    imgDesktop.src = desktopMr;
    imgDesktop.onload = () => {
      setDesktopMrLoaded(true);
      requestAnimationFrame(() => setDesktopMrVisible(true));
    };

    const imgMobile = new Image();
    imgMobile.src = mobileMr;
    imgMobile.onload = () => {
      setMobileMrLoaded(true);
      requestAnimationFrame(() => setMobileMrVisible(true));
    };
  }, [useHeavyImage, dark]);

  // Reset spline when dark mode changes so new scene triggers on next interaction
  useEffect(() => {
    setLoadSpline(false);
    setSplineLoaded(false);
    setSplineVisible(false);
  }, [dark]);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const slowTypes = ["slow-2g", "2g", "3g"];
    if (connection && slowTypes.includes(connection.effectiveType)) {
      setUseHeavyImage(false);
      return;
    }

    const heroEl = document.getElementById("home");
    if (!heroEl) return;

    const onInteract = () => {
      setLoadSpline(true);
      heroEl.removeEventListener("mousemove", onInteract);
      heroEl.removeEventListener("touchstart", onInteract);
    };

    heroEl.addEventListener("mousemove", onInteract, { passive: true });
    heroEl.addEventListener("touchstart", onInteract, { passive: true });

    return () => {
      heroEl.removeEventListener("mousemove", onInteract);
      heroEl.removeEventListener("touchstart", onInteract);
    };
  }, [dark]); // re-attach when dark changes

  useEffect(() => {
    if (splineLoaded) {
      requestAnimationFrame(() => setSplineVisible(true));
    }
  }, [splineLoaded]);

  const smoothScrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const start = window.scrollY || 0;
    const target = start + el.getBoundingClientRect().top - 80;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      window.scrollTo({ top: target, behavior: "auto" });
      return;
    }
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  const fillStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  };

  const waMessage = encodeURIComponent("Hola, me interesaría recibir información sobre mi sitio web a la medida.");
  const waHref = `https://wa.me/528121528399?text=${waMessage}`;

  return (
    <>
      <Helmet>
        <title>Desarrollo Web a la Medida en México | Codenco</title>
        <meta name="description" content="Creamos aplicaciones web rápidas, escalables y sin límites. Código real, rendimiento real. Agencia de desarrollo web en México." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codenco.mx/" />
        <meta property="og:title" content="Desarrollo Web a la Medida | Codenco" />
        <meta property="og:description" content="Sitios web únicos, sin plantillas y sin límites. Desarrollados con código limpio y alto rendimiento." />
        <meta property="og:image" content="https://codenco.mx/img/hero-code.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Codenco" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://codenco.mx/" />
        <meta name="twitter:title" content="Desarrollo Web a la Medida | Codenco" />
        <meta name="twitter:description" content="Sitios web únicos, sin plantillas y sin límites. Código real, rendimiento real." />
        <meta name="twitter:image" content="https://codenco.mx/img/hero-code.webp" />

        {/* Canonical */}
        <link rel="canonical" href="https://codenco.mx/" />

        {/* Preload LR images */}
        {useHeavyImage && (
          <>
            <link rel="preload" as="image" href={desktopLr} media="(min-width: 768px)" />
            <link rel="preload" as="image" href={mobileLr}  media="(max-width: 767px)" />
          </>
        )}
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <div
        id="home"
        className="hero-section relative bg-lightBg"
        style={{
          backgroundColor: bg,
          scrollMarginTop: "0px",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <span id="hero" style={{ position: "absolute", top: 0 }} />

        {/* ── DESKTOP background images ── */}
        {!isMobile && (
          <>
            <img
              key={desktopLr}
              src={desktopLr}
              alt="Hero background"
              style={{ ...fillStyle, objectFit: "cover", objectPosition: "center", opacity: 1 }}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            {desktopMrLoaded && (
              <img
                key={desktopMr}
                src={desktopMr}
                alt=""
                aria-hidden="true"
                style={{
                  ...fillStyle,
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: desktopMrVisible ? 1 : 0,
                  transition: "opacity 700ms ease",
                }}
              />
            )}
          </>
        )}

        {/* ── MOBILE background images ── */}
        {isMobile && (
          <>
            <img
              key={mobileLr}
              src={mobileLr}
              alt="Hero background"
              style={{ ...fillStyle, objectFit: "cover", objectPosition: "center", opacity: 1 }}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            {mobileMrLoaded && (
              <img
                key={mobileMr}
                src={mobileMr}
                alt=""
                aria-hidden="true"
                style={{
                  ...fillStyle,
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: mobileMrVisible ? 1 : 0,
                  transition: "opacity 700ms ease",
                }}
              />
            )}
          </>
        )}

        {/* ── Spline (on interact) — scene switches with dark mode ── */}
        {loadSpline && (
          <div style={{ ...fillStyle, opacity: splineVisible ? 1 : 0, transition: "opacity 600ms ease" }}>
            <Suspense fallback={null}>
              <Spline
                key={splineScene}
                scene={splineScene}
                onLoad={() => setSplineLoaded(true)}
              />
            </Suspense>
          </div>
        )}

        <div style={{ ...fillStyle, zIndex: 4, backgroundColor: overlayFull }} />

        {/* Gradient wrapper — only in light mode */}
        {!dark && (
          <div
            style={{
              ...fillStyle,
              zIndex: 5,
              background: `linear-gradient(to right, ${gradFrom} 0%, ${gradMid} 0%, transparent 100%)`,
            }}
          />
        )}

        <div
          className="hero-wrapper pointer-events-none px-6 md:pl-25 leading-none -translate-y-6 md:-translate-y-10"
          style={{
            ...fillStyle,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "72px",
          }}
        >
          <h1
            className="hero-text pointer-events-none text-left md:text-center w-full md:w-[70%] text-4xl md:text-7xl font-bold mt-10 md:mt-15 font-space leading-tight"
            style={{
              color: textColor,
              textShadow: dark
                ? "0 5px 20px rgba(0,0,0,0.5)"
                : "0 5px 20px rgba(255,255,255,0.8)",
            }}
          >
            We don't template, <br />
            we don't limit, <br />
            <span className="force-rubik text-8xl">we code.</span>
          </h1>

          <p
            className="pointer-events-none select-none text-left md:text-center text-base md:text-xl font-normal mt-4 md:mt-1 font-space"
            style={{ color: textColor }}
          >
            Sitios web rápidos, escalables y sin límites. Código real, rendimiento real.
          </p>

          {/* ── Botones ── */}
          <div className="pointer-events-auto flex justify-start md:!justify-end items-center gap-3 mt-8 w-full md:!pr-12">

            {/* Botón WhatsApp — primero */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn pointer-events-auto flex items-center gap-3 group px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: btnBg,
                border: `1px solid ${btnBorder}`,
                boxShadow: "0 0 20px rgba(0,21,255,0.8), 0 10px 40px rgba(255,255,255,0.6)",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = btnHover}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = btnBg}
              aria-label="Contactar por WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-9 w-9 md:h-20 md:w-12 flex-shrink-0"
                style={{
                  fill: textColor,
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,0.8))",
                }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span
                className="font-space text-base md:text-lg tracking-wide"
                style={{
                  color: textColor,
                  textShadow: "0 0 8px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7)",
                }}
              >
                WHATSAPP
              </span>
            </a>

            {/* Botón "Descubre más" — segundo, intacto */}
            <a
              href="#precios"
              onClick={(e) => { e.preventDefault(); smoothScrollToId("precios"); }}
              className="hero-btn pointer-events-auto flex items-center gap-3 group px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: btnBg,
                border: `1px solid ${btnBorder}`,
                boxShadow: "0 0 20px rgba(0,21,255,0.8), 0 10px 40px rgba(255,255,255,0.6)",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = btnHover}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = btnBg}
            >
              <span
                className="font-space text-base md:text-lg tracking-wide"
                style={{
                  color: textColor,
                  textShadow: "0 0 8px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7)",
                }}
              >
                DESCUBRE MÁS
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 md:h-20 md:w-20 -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-1 transition-transform duration-300"
                style={{
                  color: textColor,
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,0.8))",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l8-8m0 0l-8-8m8 8H3" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;