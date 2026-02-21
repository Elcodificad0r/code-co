import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function Mision() {
  const ref = useRef(null);
  const dark = useHtmlDark();

  const bg        = dark ? "#1E1E1E"   : "#ECECEC";
  const textColor = dark ? "#F2F0E4"   : "#0A0F0D";
  const overlayGradient = dark
    ? "linear-gradient(90deg, rgba(30,30,30,0.92) 0%, rgba(30,30,30,0.40) 55%, rgba(30,30,30,0.15) 100%)"
    : "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(236,236,236,0.40) 55%, rgba(236,236,236,0.15) 100%)";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-35, 35]);

  const imgY = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [-0.6, 0.6]);

  const textY = useTransform(scrollYProgress, [0, 1], [22, -22]);
  const textX = useTransform(scrollYProgress, [0, 1], ["1.2%", "-1.2%"]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.14], [0.98, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.08]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] w-full flex items-start justify-start overflow-hidden mb-0"
      style={{ backgroundColor: bg }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: overlayOpacity, background: overlayGradient }}
      />

      {/* Título */}
      <motion.h1
        className="absolute text-nowrap top-20 md:!top-100 left-18/32 -translate-x-1/3 font-rubik80s text-[9vw] leading-none opacity-90 z-10 text-center tracking-tight pointer-events-none"
        style={{
          x: titleX,
          y: titleY,
          opacity,
          color: textColor,
          willChange: "transform, opacity",
        }}
      >
        CÓDIG* 
        
        REAL
      </motion.h1>

      <div className="relative flex flex-col md:!flex-row w-full gap-10 items-center">
        {/* Imagen */}
        <div className="md:!w-1/2 h-[300px] md:!h-[500px] flex items-center justify-start md:!justify-start md:!pl-5">
          <motion.img
            src={dark ? "img/FOTONOSOTROSLT.webp" : "img/FOTONOSOTROS.webp"}
            alt="Nosotros"
            className="w-full h-full object-cover rounded-2xl mt-10 pointer-events-none"
            style={{
              y: imgY,
              rotate: imgRotate,
              scale,
              opacity,
              willChange: "transform, opacity",
            }}
          />
        </div>

        {/* Texto */}
        <motion.div
          className="w-full md:!w-1/2 flex flex-col gap-6 px-4 md:!px-0 text-center md:!text-left pt-10 md:!pt-0 pointer-events-none"
          style={{
            x: textX,
            y: textY,
            opacity,
            willChange: "transform, opacity",
          }}
        >
          <p className="text-2xl font-space font-black" style={{ color: textColor }}>
            Diseño + programación + SEO.
          </p>

          <h2 className="text-2xl md:!text-4xl font-space leading-tight" style={{ color: textColor }}>
            ESCRIBIMOS{" "}
            <span className="font-bold">CÓDIG* QUE IMPULSA</span>{" "}
            NEGOCIOS ESCALABLES.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}