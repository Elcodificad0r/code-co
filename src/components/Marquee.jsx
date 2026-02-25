import React, { useLayoutEffect, useMemo, useRef } from "react";

export default function Marquee({ darkMode = false }) {
  const trackRef = useRef(null);

  const logos = useMemo(
    () => [
      "img/marquee1.webp",
      "img/marquee2.webp",
      "img/marquee3.webp",
      "img/marquee4.webp",
      "img/marquee5.webp",
      "img/marquee6.webp",
      "img/marquee7.webp",
      "img/marquee8.webp",
    ],
    []
  );

  // Animación solo se monta una vez — darkMode no la toca
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const getSpeed = () => {
      const isMobile = window.matchMedia?.("(max-width: 640px)")?.matches;
      if (prefersReduced) return 10;
      return isMobile ? 14 : 40;
    };

    const waitImages = async () => {
      const imgs = Array.from(track.querySelectorAll("img"));
      if (!imgs.length) return;
      await Promise.all(
        imgs.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) return resolve();
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            })
        )
      );
    };

    const setupAnimation = async () => {
  await waitImages();
  requestAnimationFrame(() => {
    const firstSet = track.querySelector(".marquee-set");
    if (!firstSet) return;
    const setWidth = firstSet.getBoundingClientRect().width;
    const gap = window.matchMedia("(max-width: 640px)").matches ? 18 : 22;
    const totalWidth = setWidth + gap;
    const speed = getSpeed();
    const duration = totalWidth / speed;
    track.style.animation = `marqueeScroll ${duration}s linear infinite`;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes marqueeScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
    `;
    const oldStyle = document.getElementById("marquee-animation");
    if (oldStyle) oldStyle.remove();
    styleSheet.id = "marquee-animation";
    document.head.appendChild(styleSheet);
  });
};

    setupAnimation();

    const onResize = () => {
      track.style.animation = "none";
      requestAnimationFrame(() => setupAnimation());
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      const oldStyle = document.getElementById("marquee-animation");
      if (oldStyle) oldStyle.remove();
    };
  }, [logos]); // darkMode NO está en las deps — animación nunca se reinicia

  // Colores reactivos — solo CSS cambia, la animación no se toca
  const fadeBg     = darkMode ? "rgb(30, 30, 30)"    : "rgba(236,236,236,1)";
  const fadeBgZero = darkMode ? "rgba(17,19,24,0)"    : "rgba(236,236,236,0)";
  const pillBg     = darkMode ? "rgba(255,255,255,.72)"  : "rgba(255,255,255,.72)";
  const pillBorder = darkMode ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.10)";

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ECECEC" }}
    >
      <style>{`
        .marqueeWrap{
          height: 10vh !important;
          min-height: 62px !important;
          max-height: 92px !important;
          overflow: hidden !important;
          width: 100% !important;
          position: relative !important;
        }
        @media (min-width: 1024px){
          .marqueeWrap{ height: 9vh !important; min-height: 64px !important; max-height: 88px !important; }
        }
        @media (max-width: 640px){
          .marqueeWrap{ height: 8vh !important; min-height: 56px !important; max-height: 78px !important; }
        }
        .fadeEdge{
          position:absolute !important; top:0 !important; bottom:0 !important;
          width: 140px !important; pointer-events:none !important; z-index: 20 !important;
        }
        @media (max-width: 640px){ .fadeEdge{ width: 170px !important; } }
        .track{
          display:flex !important; align-items:center !important; gap: 18px !important;
          width: max-content !important; will-change: transform !important;
          backface-visibility: hidden !important;
        }
        @media (min-width: 640px){ .track{ gap: 22px !important; } }
        .pill{
          height: 44px !important; width: 140px !important; padding: 0 26px !important;
          border-radius: 9999px !important; display:flex !important;
          align-items:center !important; justify-content:center !important;
          backdrop-filter: blur(10px) !important;
          box-shadow: 0 1px 0 rgba(0,0,0,.05) !important; flex: 0 0 auto !important;
        }
        @media (max-width: 640px){
          .pill{ height: 40px !important; width: 130px !important; padding: 0 22px !important; }
        }
        .logoViewport{
          height: 78% !important; width: 100% !important; display:flex !important;
          align-items:center !important; justify-content:center !important; overflow: hidden !important;
        }
        @media (max-width: 640px){ .logoViewport{ height: 80% !important; } }
        .logoImg{
          height: 100% !important; width: 100% !important; object-fit: contain !important;
          object-position: center !important; opacity: .98 !important; display:block !important;
          user-select:none !important; -webkit-user-drag: none !important;
          transform: scale(1.18) translateZ(0) !important; transform-origin: center !important;
          filter: contrast(1.06) saturate(1.06) !important;
        }
        @media (max-width: 640px){ .logoImg{ transform: scale(1.14) translateZ(0) !important; } }
      `}</style>

      <div className="marqueeWrap">
        <div
          className="fadeEdge"
          style={{ left: 0, background: `linear-gradient(to right, ${fadeBg} 0%, ${fadeBgZero} 75%)` }}
        />
        <div
          className="fadeEdge"
          style={{ right: 0, background: `linear-gradient(to left, ${fadeBg} 0%, ${fadeBgZero} 75%)` }}
        />

        <div ref={trackRef} className="track">
          {[1, 2, 3].map((set) => (
            <div
              key={set}
              className="marquee-set flex items-center gap-[inherit]"
              aria-hidden={set > 1 ? true : undefined}
            >
              {logos.map((src, i) => (
                <LogoPill
                  key={`set-${set}-${i}`}
                  src={src}
                  pillBg={pillBg}
                  pillBorder={pillBorder}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoPill({ src, pillBg, pillBorder }) {
  return (
    <div
      className="pill"
      style={{ background: pillBg, border: `1px solid ${pillBorder}` }}
    >
      <div className="logoViewport">
              <img
        src={src}
        alt="logo"
        width={116}
        height={65}
        draggable={false}
        className="logoImg"
        loading="eager"
        decoding="async"
      />
      </div>
    </div>
  );
}