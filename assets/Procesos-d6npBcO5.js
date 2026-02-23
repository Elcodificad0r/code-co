import{r as a,j as e}from"./react-vendor-Cnp1Yea5.js";import"./vendor-qoGMWrsY.js";import"./spline-BMX4pKPO.js";const y=[{num:"01",tag:"Discovery",title:"Entendemos tu negocio antes de escribir una sola línea de código.",body:"Nos sumergimos en tu industria, competencia y clientes ideales. No asumimos — investigamos. Al final de esta fase sabes exactamente qué construiremos, por qué y cómo va a diferenciarte."},{num:"02",tag:"Build",title:"Diseñamos y desarrollamos con intención, no con templates.",body:"Cada decisión de diseño tiene un argumento detrás. Tipografía, flujo, velocidad, UX — todo está calibrado para que tu visitante entienda tu propuesta de valor en segundos y quiera quedarse."},{num:"03",tag:"Iterate",title:"Tu feedback es parte del proceso, no un obstáculo.",body:"Trabajamos en ciclos cortos con entregas visibles. Ves el avance, opinas y ajustamos antes de que algo esté 'terminado'. Así llegamos al resultado correcto sin sorpresas al final."},{num:"04",tag:"Deploy",title:"Lanzamos rápido, medimos de inmediato y optimizamos sin parar.",body:"La entrega no es el fin — es el inicio. Monitoreamos rendimiento, velocidad y comportamiento de usuarios para que tu sitio mejore con el tiempo. Tu inversión se vuelve más inteligente cada mes."}];function k(){const n=a.useRef(null),d=a.useRef(null),x=a.useRef([]),i=a.useRef(null),c=a.useRef(null),m=a.useRef(null),u=a.useRef(null),p=a.useRef(null),g=a.useRef(null),f=a.useRef(null);a.useRef(null),a.useEffect(()=>{if(typeof window>"u")return;(async()=>{var l,b;window.gsap||await new Promise(r=>{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",o.onload=r,document.head.appendChild(o)}),window.ScrollTrigger||(await new Promise(r=>{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",o.onload=r,document.head.appendChild(o)}),window.gsap.registerPlugin(window.ScrollTrigger));const t=window.gsap;i.current&&(t.set(i.current,{yPercent:0}),ScrollTrigger.create({trigger:n.current,start:"top 80%",onEnter:()=>{t.killTweensOf(i.current),t.to(i.current,{yPercent:-100,duration:1.1,ease:"power3.inOut",overwrite:!0})},onLeaveBack:()=>{t.killTweensOf(i.current),t.to(i.current,{yPercent:0,duration:.9,ease:"power3.inOut",overwrite:!0})}})),c.current&&(t.set(c.current,{yPercent:100}),ScrollTrigger.create({trigger:n.current,start:"bottom 50%",onEnter:()=>{t.killTweensOf(c.current),t.to(c.current,{yPercent:-100,duration:1.6,ease:"power3.inOut",overwrite:!0})},onLeaveBack:()=>{t.killTweensOf(c.current),t.to(c.current,{yPercent:100,duration:1,ease:"power3.inOut",overwrite:!0})}})),m.current&&t.fromTo(m.current,{opacity:0,y:60,skewY:3},{opacity:1,y:0,skewY:0,duration:1.4,ease:"power4.out",clearProps:"transform",scrollTrigger:{trigger:m.current,start:"top 85%",once:!0}}),u.current&&t.fromTo(u.current,{opacity:0,x:-30},{opacity:1,x:0,duration:.8,ease:"power3.out",delay:.2,scrollTrigger:{trigger:u.current,start:"top 88%",once:!0}}),p.current&&(t.fromTo(p.current,{opacity:0,y:50},{opacity:1,y:0,duration:1.1,ease:"power3.out",delay:.4,scrollTrigger:{trigger:p.current,start:"top 88%",once:!0}}),t.to(p.current,{y:-30,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:!0}})),g.current&&t.fromTo(g.current,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.4,ease:"power3.out",scrollTrigger:{trigger:g.current,start:"top 92%",once:!0}}),d.current&&t.fromTo(d.current,{scaleY:0,transformOrigin:"top center"},{scaleY:1,duration:2,ease:"power3.out",scrollTrigger:{trigger:d.current,start:"top 75%",once:!0}}),x.current.forEach((r,o)=>{if(!r)return;const w=o%2===0;t.fromTo(r,{x:w?-80:80,opacity:0,rotateY:w?8:-8},{x:0,opacity:1,rotateY:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%",once:!0}}),t.to(r,{y:(o%2===0?-1:1)*25,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})}),(l=n.current)==null||l.querySelectorAll(".proceso-dot").forEach((r,o)=>{t.fromTo(r,{scale:0,opacity:0},{scale:1,opacity:1,duration:.7,ease:"back.out(2.5)",scrollTrigger:{trigger:r,start:"top 90%",once:!0},delay:o*.1}),t.to(r,{boxShadow:"0 0 0 10px rgba(255,255,255,0.0)",scale:1.15,duration:1.4,ease:"power1.inOut",yoyo:!0,repeat:-1,delay:o*.35}),t.to(r,{y:-(120+o*55),ease:"none",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom top",scrub:.8}})}),f.current&&t.fromTo(f.current,{y:50,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:f.current,start:"top 95%",once:!0}}),(b=n.current)==null||b.querySelectorAll(".proceso-num").forEach((r,o)=>{t.to(r,{y:-40-o*10,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})})})()},[]);const h=document.documentElement.classList.contains("dark")?"#1E1E1E":"#ECECEC";return e.jsxs("section",{id:"procesos",ref:n,className:"bg-[#0520F5] text-white relative overflow-hidden",style:{fontFamily:"'Space Grotesk', sans-serif"},children:[e.jsx("div",{ref:i,style:{position:"absolute",inset:0,background:h,zIndex:30,pointerEvents:"none",willChange:"transform"}}),e.jsx("div",{ref:c,style:{position:"absolute",inset:0,background:h,zIndex:29,pointerEvents:"none",willChange:"transform",transform:"translateY(100%)"}}),e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"proceso-grid-noise"}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32",children:[e.jsxs("div",{className:"mb-20 md:mb-28",children:[e.jsx("p",{ref:u,className:"proceso-tag mb-4",children:"Metodología"}),e.jsx("h2",{ref:m,className:"proceso-hero-title font-space leading-none mb-6",style:{fontSize:"clamp(4rem, 14vw, 11rem)",fontWeight:900,letterSpacing:"-0.03em",lineHeight:.9},children:"PROCESO"}),e.jsxs("div",{ref:p,className:"proceso-subtitle-row flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-6",children:[e.jsx("p",{className:"font-space font-bold",style:{fontSize:"clamp(1.1rem, 2.5vw, 1.6rem)",maxWidth:"32rem",lineHeight:1.3},children:"Ruta hacia el Crecimiento"}),e.jsx("p",{className:"font-space opacity-60",style:{fontSize:"clamp(0.8rem, 1.3vw, 1rem)",maxWidth:"36rem",lineHeight:1.65},children:"Un proceso probado que transforma tu presencia digital en resultados tangibles. Cada fase tiene un propósito, una entrega y un impacto visible en tu negocio."})]}),e.jsx("div",{ref:g,className:"proceso-separator mt-10 h-px bg-white opacity-15"})]}),e.jsxs("div",{className:"proceso-desktop-row relative grid grid-cols-2 gap-x-24 gap-y-20",style:{display:"none"},children:[e.jsx("div",{ref:d,className:"proceso-line",style:{position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"1px",background:"rgba(255,255,255,0.18)"}}),y.map((s,t)=>{const l=t%2===0;return e.jsxs("div",{ref:b=>x.current[t]=b,className:`flex flex-col ${l?"items-end text-right pr-12":"items-start text-left pl-12"} ${l?"col-start-1":"col-start-2"}`,style:{gridRow:t+1,willChange:"transform"},children:[e.jsx("div",{className:"proceso-tag mb-3",children:s.tag}),e.jsx("div",{className:"proceso-num mb-4",children:s.num}),e.jsx("h3",{className:"proceso-step-title mb-3 max-w-xs",children:s.title}),e.jsx("p",{className:"proceso-step-body max-w-xs",children:s.body})]},s.num)}),y.map((s,t)=>e.jsx("div",{className:"proceso-dot absolute",style:{left:"50%",transform:"translateX(-50%)",top:`calc(${t*25}% + 2rem)`,position:"absolute"}},`dot-${t}`))]}),e.jsxs("div",{className:"proceso-mobile-list flex-col gap-0",style:{display:"none",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"1.5rem",width:"1px",background:"rgba(255,255,255,0.18)"}}),y.map((s,t)=>e.jsxs("div",{ref:l=>x.current[t]=l,className:"flex gap-6 pb-14",style:{paddingLeft:"3.5rem",position:"relative"},children:[e.jsx("div",{className:"proceso-dot",style:{position:"absolute",left:"calc(1.5rem - 6px)",top:"0.35rem"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"proceso-tag mb-2",children:s.tag}),e.jsx("div",{className:"proceso-num mb-3",children:s.num}),e.jsx("h3",{className:"proceso-step-title mb-2",children:s.title}),e.jsx("p",{className:"proceso-step-body",children:s.body})]})]},s.num))]}),e.jsxs("div",{ref:f,className:"proceso-cta mt-20 md:mt-28 mb-32 md:mb-48 pt-10 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[e.jsx("p",{className:"font-space opacity-60 text-sm",children:"¿Listo para empezar?"}),e.jsx("a",{href:"#contacto",className:"proceso-cta-btn font-space font-bold text-sm tracking-widest uppercase px-8 py-4 border border-white/40",style:{letterSpacing:"0.2em",textDecoration:"none",color:"white"},children:e.jsx("span",{children:"Agenda una llamada →"})})]})]})]})}export{k as default};
