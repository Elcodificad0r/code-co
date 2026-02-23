import{r as s,j as e}from"./react-vendor-Cnp1Yea5.js";import{g as t,S as x}from"./gsap-FdPegQMx.js";import"./vendor-qoGMWrsY.js";import"./spline-BMX4pKPO.js";t.registerPlugin(x);const h=[{num:"01",tag:"Discovery",title:"Entendemos tu negocio antes de escribir una sola línea de código.",body:"Nos sumergimos en tu industria, competencia y clientes ideales. No asumimos — investigamos. Al final de esta fase sabes exactamente qué construiremos, por qué y cómo va a diferenciarte."},{num:"02",tag:"Build",title:"Diseñamos y desarrollamos con intención, no con templates.",body:"Cada decisión de diseño tiene un argumento detrás. Tipografía, flujo, velocidad, UX — todo está calibrado para que tu visitante entienda tu propuesta de valor en segundos y quiera quedarse."},{num:"03",tag:"Iterate",title:"Tu feedback es parte del proceso, no un obstáculo.",body:"Trabajamos en ciclos cortos con entregas visibles. Ves el avance, opinas y ajustamos antes de que algo esté 'terminado'. Así llegamos al resultado correcto sin sorpresas al final."},{num:"04",tag:"Deploy",title:"Lanzamos rápido, medimos de inmediato y optimizamos sin parar.",body:"La entrega no es el fin — es el inicio. Monitoreamos rendimiento, velocidad y comportamiento de usuarios para que tu sitio mejore con el tiempo. Tu inversión se vuelve más inteligente cada mes."}];function R(){const n=s.useRef(null),u=s.useRef(null),y=s.useRef([]),c=s.useRef(null),l=s.useRef(null),d=s.useRef(null),f=s.useRef(null),m=s.useRef(null),g=s.useRef(null),b=s.useRef(null);s.useRef(null),s.useEffect(()=>{var a,p;if(typeof window>"u")return;const r=window.matchMedia("(max-width: 767px)").matches;return c.current&&(t.set(c.current,{yPercent:0}),x.create({trigger:n.current,start:"top 80%",onEnter:()=>{t.killTweensOf(c.current),t.to(c.current,{yPercent:-100,duration:1.1,ease:"power3.inOut",overwrite:!0})},onLeaveBack:()=>{t.killTweensOf(c.current),t.to(c.current,{yPercent:0,duration:.9,ease:"power3.inOut",overwrite:!0})}})),l.current&&(t.set(l.current,{yPercent:100}),x.create({trigger:n.current,start:"bottom 50%",onEnter:()=>{t.killTweensOf(l.current),t.to(l.current,{yPercent:-100,duration:1.6,ease:"power3.inOut",overwrite:!0})},onLeaveBack:()=>{t.killTweensOf(l.current),t.to(l.current,{yPercent:100,duration:1,ease:"power3.inOut",overwrite:!0})}})),d.current&&t.fromTo(d.current,{opacity:0,y:60,skewY:3},{opacity:1,y:0,skewY:0,duration:1.4,ease:"power4.out",clearProps:"transform",scrollTrigger:{trigger:d.current,start:"top 85%",once:!0}}),f.current&&t.fromTo(f.current,{opacity:0,x:-30},{opacity:1,x:0,duration:.8,ease:"power3.out",delay:.2,scrollTrigger:{trigger:f.current,start:"top 88%",once:!0}}),m.current&&(t.fromTo(m.current,{opacity:0,y:50},{opacity:1,y:0,duration:1.1,ease:"power3.out",delay:.4,scrollTrigger:{trigger:m.current,start:"top 88%",once:!0}}),r||t.to(m.current,{y:-30,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:!0}})),g.current&&t.fromTo(g.current,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.4,ease:"power3.out",scrollTrigger:{trigger:g.current,start:"top 92%",once:!0}}),u.current&&t.fromTo(u.current,{scaleY:0,transformOrigin:"top center"},{scaleY:1,duration:2,ease:"power3.out",scrollTrigger:{trigger:u.current,start:"top 75%",once:!0}}),y.current.forEach((o,i)=>{if(!o)return;const v=i%2===0;t.fromTo(o,{x:v?-80:80,opacity:0,rotateY:v?8:-8},{x:0,opacity:1,rotateY:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 85%",once:!0}}),r||t.to(o,{y:(i%2===0?-1:1)*25,ease:"none",scrollTrigger:{trigger:o,start:"top bottom",end:"bottom top",scrub:!0}})}),(a=n.current)==null||a.querySelectorAll(".proceso-dot").forEach((o,i)=>{t.fromTo(o,{scale:0,opacity:0},{scale:1,opacity:1,duration:.7,ease:"back.out(2.5)",scrollTrigger:{trigger:o,start:"top 90%",once:!0},delay:i*.1}),r||(t.to(o,{boxShadow:"0 0 0 10px rgba(255,255,255,0.0)",scale:1.15,duration:1.4,ease:"power1.inOut",yoyo:!0,repeat:-1,delay:i*.35}),t.to(o,{y:-(120+i*55),ease:"none",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom top",scrub:.8}}))}),b.current&&t.fromTo(b.current,{y:50,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:b.current,start:"top 95%",once:!0}}),r||(p=n.current)==null||p.querySelectorAll(".proceso-num").forEach((o,i)=>{t.to(o,{y:-40-i*10,ease:"none",scrollTrigger:{trigger:o,start:"top bottom",end:"bottom top",scrub:!0}})}),()=>x.getAll().forEach(o=>o.kill())},[]);const w=document.documentElement.classList.contains("dark")?"#1E1E1E":"#ECECEC";return e.jsxs("section",{id:"procesos",ref:n,className:"bg-[#0520F5] text-white relative overflow-hidden",style:{fontFamily:"'Space Grotesk', sans-serif"},children:[e.jsx("div",{ref:c,style:{position:"absolute",inset:0,background:w,zIndex:30,pointerEvents:"none",willChange:"transform"}}),e.jsx("div",{ref:l,style:{position:"absolute",inset:0,background:w,zIndex:29,pointerEvents:"none",willChange:"transform",transform:"translateY(100%)"}}),e.jsx("style",{children:`
        .proceso-tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          opacity: 0.55;
          font-weight: 600;
        }
        .proceso-num {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
          font-family: 'Space Grotesk', sans-serif;
          will-change: transform;
        }
        .proceso-step-title {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          line-height: 1.3;
        }
        .proceso-step-body {
          font-size: clamp(0.8rem, 1.4vw, 0.95rem);
          line-height: 1.7;
          opacity: 0.72;
        }
        .proceso-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.15);
          will-change: transform;
        }
        .proceso-line {
          width: 1px;
          background: rgba(255,255,255,0.18);
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .proceso-line { left: 1.5rem; }
          .proceso-desktop-row { display: none !important; }
          .proceso-mobile-list { display: flex !important; }
        }
        @media (min-width: 768px) {
          .proceso-mobile-list { display: none !important; }
          .proceso-desktop-row { display: grid !important; }
        }

        .proceso-grid-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        .proceso-cta-btn {
          position: relative;
          overflow: hidden;
        }
        .proceso-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }
        .proceso-cta-btn:hover::before {
          transform: translateX(0);
        }
        .proceso-cta-btn span {
          position: relative;
          z-index: 1;
          transition: color 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .proceso-cta-btn:hover span {
          color: #0520F5;
        }
      `}),e.jsx("div",{className:"proceso-grid-noise"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32",children:[e.jsxs("div",{className:"mb-20 md:mb-28",children:[e.jsx("p",{ref:f,className:"proceso-tag mb-4",children:"Metodología"}),e.jsx("h2",{ref:d,className:"proceso-hero-title font-space leading-none mb-6",style:{fontSize:"clamp(4rem, 14vw, 11rem)",fontWeight:900,letterSpacing:"-0.03em",lineHeight:.9},children:"PROCESO"}),e.jsxs("div",{ref:m,className:"proceso-subtitle-row flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-6",children:[e.jsx("p",{className:"font-space font-bold",style:{fontSize:"clamp(1.1rem, 2.5vw, 1.6rem)",maxWidth:"32rem",lineHeight:1.3},children:"Ruta hacia el Crecimiento"}),e.jsx("p",{className:"font-space opacity-60",style:{fontSize:"clamp(0.8rem, 1.3vw, 1rem)",maxWidth:"36rem",lineHeight:1.65},children:"Un proceso probado que transforma tu presencia digital en resultados tangibles. Cada fase tiene un propósito, una entrega y un impacto visible en tu negocio."})]}),e.jsx("div",{ref:g,className:"proceso-separator mt-10 h-px bg-white opacity-15"})]}),e.jsxs("div",{className:"proceso-desktop-row relative grid grid-cols-2 gap-x-24 gap-y-20",style:{display:"none"},children:[e.jsx("div",{ref:u,className:"proceso-line",style:{position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"1px",background:"rgba(255,255,255,0.18)"}}),h.map((r,a)=>{const p=a%2===0;return e.jsxs("div",{ref:o=>y.current[a]=o,className:`flex flex-col ${p?"items-end text-right pr-12":"items-start text-left pl-12"} ${p?"col-start-1":"col-start-2"}`,style:{gridRow:a+1,willChange:"transform"},children:[e.jsx("div",{className:"proceso-tag mb-3",children:r.tag}),e.jsx("div",{className:"proceso-num mb-4",children:r.num}),e.jsx("h3",{className:"proceso-step-title mb-3 max-w-xs",children:r.title}),e.jsx("p",{className:"proceso-step-body max-w-xs",children:r.body})]},r.num)}),h.map((r,a)=>e.jsx("div",{className:"proceso-dot absolute",style:{left:"50%",transform:"translateX(-50%)",top:`calc(${a*25}% + 2rem)`,position:"absolute"}},`dot-${a}`))]}),e.jsxs("div",{className:"proceso-mobile-list flex-col gap-0",style:{display:"none",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"1.5rem",width:"1px",background:"rgba(255,255,255,0.18)"}}),h.map((r,a)=>e.jsxs("div",{ref:p=>y.current[a]=p,className:"flex gap-6 pb-14",style:{paddingLeft:"3.5rem",position:"relative"},children:[e.jsx("div",{className:"proceso-dot",style:{position:"absolute",left:"calc(1.5rem - 6px)",top:"0.35rem"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"proceso-tag mb-2",children:r.tag}),e.jsx("div",{className:"proceso-num mb-3",children:r.num}),e.jsx("h3",{className:"proceso-step-title mb-2",children:r.title}),e.jsx("p",{className:"proceso-step-body",children:r.body})]})]},r.num))]}),e.jsxs("div",{ref:b,className:"proceso-cta mt-20 md:mt-28 mb-32 md:mb-48 pt-10 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[e.jsx("p",{className:"font-space opacity-60 text-sm",children:"¿Listo para empezar?"}),e.jsx("a",{href:"#contacto",className:"proceso-cta-btn font-space font-bold text-sm tracking-widest uppercase px-8 py-4 border border-white/40",style:{letterSpacing:"0.2em",textDecoration:"none",color:"white"},children:e.jsx("span",{children:"Agenda una llamada →"})})]})]})]})}export{R as default};
