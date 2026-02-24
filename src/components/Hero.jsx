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
  const [useHeavyImage, setUseHeavyImage] = useState(true);

  const bg           = dark ? "#1E1E1E"             : undefined;
  const textColor    = dark ? "#F2F0E4"             : "#000000";
  const gradFrom     = dark ? "rgba(30,30,30,0.80)" : "rgba(255,255,255,0.75)";
  const gradMid      = dark ? "rgba(30,30,30,0.30)" : "rgba(255,255,255,0.30)";
  const overlayFull  = dark ? "rgba(30,30,30,0.55)" : "rgba(236,236,236,0.55)";
  const btnBg        = dark ? "rgba(5,32,245,0.20)" : "rgba(255,255,255,0.40)";
  const btnBorder    = dark ? "rgba(5,32,245,0.40)" : "rgba(255,255,255,0.70)";
  const btnHover     = dark ? "rgba(5,32,245,0.30)" : "rgba(255,255,255,0.60)";

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
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setLoadSpline(true), { timeout: 2000 });
    } else {
      setTimeout(() => setLoadSpline(true), 1500);
    }
  }, []);

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

  return (
    <>
      <Helmet>
        <title>Web apps a la medida | Código Real, Rendimiento Real</title>
        <meta name="description" content="Creamos aplicaciones web rápidas, escalables y sin límites. Código real, rendimiento real." />
        <meta property="og:title" content="Landing Pages a Medida" />
        <meta property="og:description" content="Sitios web únicos, sin plantillas y sin límites. Desarrollados con código limpio y alto rendimiento." />
        <meta property="og:image" content="/img/hero-code.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codenco.mx" />
        {useHeavyImage && <link rel="preload" as="image" href="/img/lowresherospline.webp" />}
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

        <img
          src="img/lowresherospline.webp"
          alt="Hero background"
          style={{ ...fillStyle, objectFit: "cover", objectPosition: "center", opacity: dark ? 0.15 : 1 }}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        {loadSpline && (
          <div style={{ ...fillStyle, opacity: splineLoaded ? 1 : 0, transition: "opacity 600ms ease" }}>
            <Suspense fallback={null}>
              <Spline
                scene="https://prod.spline.design/8gCBWVCMxa2XLtJN/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
              />
            </Suspense>
          </div>
        )}

        <div style={{ ...fillStyle, zIndex: 4, backgroundColor: overlayFull }} />

        <div
          style={{
            ...fillStyle,
            zIndex: 5,
            background: `linear-gradient(to right, ${gradFrom} 0%, ${gradMid} 50%, transparent 100%)`,
          }}
        />

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

          <div className="pointer-events-auto flex justify-center md:!justify-end mt-8 w-full md:!pr-12">
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