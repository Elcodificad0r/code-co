import{r as l,j as t}from"./react-vendor-Cnp1Yea5.js";import"./vendor-qoGMWrsY.js";import"./spline-BMX4pKPO.js";function B({darkMode:n=!1}){const o=l.useRef(null),m=l.useMemo(()=>["img/marquee1.webp","img/marquee2.webp","img/marquee3.webp","img/marquee4.webp","img/marquee5.webp","img/marquee6.webp","img/marquee7.webp","img/marquee8.webp"],[]);l.useLayoutEffect(()=>{var x,f;const i=o.current;if(!i)return;const p=(f=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:f.matches,s=()=>{var a,r;const e=(r=(a=window.matchMedia)==null?void 0:a.call(window,"(max-width: 640px)"))==null?void 0:r.matches;return p?10:e?14:40},v=async()=>{const e=Array.from(i.querySelectorAll("img"));e.length&&await Promise.all(e.map(a=>new Promise(r=>{if(a.complete)return r();a.addEventListener("load",r,{once:!0}),a.addEventListener("error",r,{once:!0})})))},h=async()=>{await v();const e=i.querySelector(".marquee-set");if(!e)return;const a=e.getBoundingClientRect().width,r=window.matchMedia("(max-width: 640px)").matches?18:22,w=a+r,j=s(),E=w/j;i.style.animation=`marqueeScroll ${E}s linear infinite`;const d=document.createElement("style");d.textContent=`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${w}px); }
        }
      `;const b=document.getElementById("marquee-animation");b&&b.remove(),d.id="marquee-animation",document.head.appendChild(d)};h();const u=()=>{i.style.animation="none",requestAnimationFrame(()=>h())};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u);const e=document.getElementById("marquee-animation");e&&e.remove()}},[m]);const c=n?"rgb(30, 30, 30)":"rgba(236,236,236,1)",g=n?"rgba(17,19,24,0)":"rgba(236,236,236,0)",y="rgba(255,255,255,.72)",q=n?"rgba(255,255,255,.12)":"rgba(0,0,0,.10)";return t.jsxs("section",{className:"relative w-full",style:{backgroundColor:n?"#1e1e1e":"#ECECEC"},children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"marqueeWrap",children:[t.jsx("div",{className:"fadeEdge",style:{left:0,background:`linear-gradient(to right, ${c} 0%, ${g} 75%)`}}),t.jsx("div",{className:"fadeEdge",style:{right:0,background:`linear-gradient(to left, ${c} 0%, ${g} 75%)`}}),t.jsx("div",{ref:o,className:"track",children:[1,2,3].map(i=>t.jsx("div",{className:"marquee-set flex items-center gap-[inherit]","aria-hidden":i>1?!0:void 0,children:m.map((p,s)=>t.jsx(k,{src:p,pillBg:y,pillBorder:q},`set-${i}-${s}`))},i))})]})]})}function k({src:n,pillBg:o,pillBorder:m}){return t.jsx("div",{className:"pill",style:{background:o,border:`1px solid ${m}`},children:t.jsx("div",{className:"logoViewport",children:t.jsx("img",{src:n,alt:"logo",draggable:!1,className:"logoImg",loading:"eager",decoding:"async"})})})}export{B as default};
