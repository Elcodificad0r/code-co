import React, { useEffect, useState, Suspense } from "react";
import { Helmet } from "react-helmet-async";

// Lazy load de Spline
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [useHeavyImage, setUseHeavyImage] = useState(true);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const slowTypes = ["slow-2g", "2g", "3g"];
    if (connection && slowTypes.includes(connection.effectiveType)) {
      setUseHeavyImage(false);
    }
    const img = new Image();
    img.src = useHeavyImage
      ? "/img/hero-code.webp"
      : "/img/hero-code-light.jpg";
    img.onload = () => {
      setBgLoaded(true);
    };
  }, [useHeavyImage]);

  return (
    <>
      <Helmet>
        <title>Landing Pages a Medida | Código Real, Rendimiento Real</title>
        <meta
          name="description"
          content="Creamos landing pages rápidas, escalables y sin límites. Código real, rendimiento real."
        />
        <meta property="og:title" content="Landing Pages a Medida" />
        <meta
          property="og:description"
          content="Sitios web únicos, sin plantillas y sin límites. Desarrollados con código limpio y alto rendimiento."
        />
        <meta property="og:image" content="/img/hero-code.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com" />
        {useHeavyImage && (
          <link rel="preload" as="image" href="/img/hero-code.webp" />
        )}
      </Helmet>

      <div className="hero-section h-screen overflow-x-hidden relative bg-lightBg">
        {/* Background con Spline (Lazy load) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/ynRlLABAAAV7NTz5/scene.splinecode" />
          </Suspense>
        </div>

        {/* Imagen de fallback */}
        <picture>
          <source
            srcSet="/img/hero-code.webp"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <img
            src={
              useHeavyImage
                ? "/img/hero-code.webp"
                : "/img/hero-code-light.jpg"
            }
            alt="Código y desarrollo web"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              bgLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={useHeavyImage ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={useHeavyImage ? "high" : "low"}
          />
        </picture>

        {!bgLoaded && (
          <img
            src="/img/hero-code-lazy.jpg"
            alt="Preload bajo"
            className="absolute inset-0 w-full h-full object-cover object-center blur-md"
            loading="lazy"
          />
        )}

        {/* Contenido */}
        <div className="hero-wrapper relative z-10 flex flex-col justify-center h-full px-6 md:pl-25 bg-lightBg/80 leading-none">
          <h1 className="hero-text text-left md:text-center w-full md:w-[70%] text-4xl md:text-7xl text-black font-bold mt-10 md:mt-15 font-space leading-tight">
            We don't template, <br />
            we don't limit, <br />
            <span className="force-rubik text-8xl">we code.</span>
          </h1>

          <p className="text-left md:text-center text-base md:text-xl text-black font-normal mt-4 md:mt-1 font-space">
            Sitios web rápidos, escalables y sin límites. Código real, rendimiento real.
          </p>

          <div className="flex justify-end mt-8 w-full pr-4 md:pr-12">
            <a href="#about" className="flex items-center gap-2 group">
              <span className="text-black font-space text-lg">DESCUBRE MÁS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-black group-hover:translate-x-5 group-hover:-translate-y-1 transition-transform duration-200 -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l8-8m0 0l-8-8m8 8H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;