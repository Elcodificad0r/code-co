import{r as n,j as e}from"./react-vendor-rgf-A-eq.js";import"./vendor-DIA31StL.js";import"./spline-ybgFhZPv.js";function B(){const[a,d]=n.useState(()=>document.documentElement.classList.contains("dark"));return n.useEffect(()=>{const l=new MutationObserver(()=>d(document.documentElement.classList.contains("dark")));return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>l.disconnect()},[]),a}const G=()=>{const a=B(),d=a?"#1E1E1E":"#ECECEC",l=a?"#F2F0E4":"#111827",m=a?"#a0a8b8":"#4B5563",k=a?"#c8cfd8":"#1F2937",w=a?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.10)",q=a?"rgba(42,42,42,0.95)":"rgba(255,255,255,0.95)",N=a?"rgba(42,42,42,0.80)":"rgba(255,255,255,0.80)",E=a?"#3b5bdb":"#1e40af",g=a?"#444444":"#e5e7eb",p=a?"#7c9ef5":"#0520F5",i=a?"#7c9ef5":"#0520F5",[u,S]=n.useState(new Set),[$,z]=n.useState([]),C=n.useRef(null),f=n.useRef(null),x=n.useRef(null),[b,y]=n.useState(!1),c=n.useRef({}),[R,M]=n.useState({}),v=n.useRef(60),h=[{id:1,question:" ¿Mi página aparecerá en Google?",answer:"Sí. Todas nuestras páginas incluyen estructura optimizada para SEO básico, velocidad optimizada y buenas prácticas técnicas para posicionamiento.",pos:{x:"15%",y:"20%"},rotation:-8,size:"medium"},{id:2,question:"¿Qué incluye el precio?",answer:"Dominio, hosting, diseño, desarrollo, SEO básico y soporte técnico inicial.",pos:{x:"75%",y:"15%"},rotation:12,size:"large"},{id:3,question:"¿Cuánto tarda en estar lista mi página?",answer:"Una landing page puede estar lista en 5 a 10 días hábiles.",pos:{x:"40%",y:"45%"},rotation:-3,size:"small"},{id:4,question:"¿Puedo pedir cambios después de publicada?",answer:"Sí, incluimos 2 rondas de revisiones menores sin costo. Y el mantenimiento mensual inicia desde 500 MXN.",pos:{x:"85%",y:"55%"},rotation:15,size:"medium"},{id:5,question:"¿Puedo tener tienda en línea o cobros?",answer:"Por supuesto. Integramos pasarelas de pago como Stripe, PayPal o sistemas locales según tu necesidad.",pos:{x:"68%",y:"72%"},rotation:-12,size:"large"},{id:6,question:"¿Trabajan con empresas grandes?",answer:"Trabajamos con proyectos de cualquier escala, desde startups hasta corporativos. Cada proyecto recibe la misma dedicación.",pos:{x:"10%",y:"70%"},rotation:6,size:"medium"},{id:7,question:"¿Qué pasa si no me gusta el diseño?",answer:"Incluimos hasta 3 iteraciones de diseño. Trabajamos contigo hasta que el resultado sea exactamente lo que necesitas.",pos:{x:"32%",y:"90%"},rotation:-18,size:"small"}];n.useEffect(()=>{if(typeof window<"u")if(window.gsap)y(!0);else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",t.onload=()=>y(!0),document.head.appendChild(t)}},[]),n.useEffect(()=>{if(b&&window.gsap){const t=window.gsap;x.current&&t.fromTo(x.current,{scale:.8,opacity:0,rotation:-5},{scale:1,opacity:1,rotation:0,duration:1.5,ease:"power3.out"}),f.current&&t.fromTo(f.current,{y:60,opacity:0,skewY:3},{y:0,opacity:1,skewY:0,duration:1,ease:"power3.out"})}},[b]),n.useEffect(()=>{const t=h.map(r=>({left:`calc(${r.pos.x} + ${(Math.random()-.5)*8}%)`,top:`calc(${r.pos.y} + ${(Math.random()-.5)*8}%)`,rotation:r.rotation+(Math.random()-.5)*8,scale:.95+Math.random()*.1}));z(t)},[]);const j=t=>{const r=new Set(u),o=!r.has(t);if(o?(r.add(t),v.current+=1,M(s=>({...s,[t]:v.current}))):r.delete(t),S(r),b&&window.gsap&&c.current[t]){const s=c.current[t];o?window.gsap.fromTo(s,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}):window.gsap.to(s,{height:0,opacity:0,duration:.3,ease:"power2.in"})}},T=t=>{switch(t){case"small":return"w-72 text-sm";case"large":return"w-96 text-base";default:return"w-80 text-sm"}},O=()=>e.jsxs("div",{className:"mobile-faq w-full overflow-x-hidden",children:[e.jsx("style",{children:`
        .faq-mobile-item {
          border-top: 1.5px solid ${w};
        }
        .faq-mobile-item:last-child {
          border-bottom: 1.5px solid ${w};
        }
        .faq-mobile-bar {
          display: block;
          height: 2px;
          background: ${i};
          width: 0%;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-mobile-bar.active {
          width: 100%;
        }
        .faq-mobile-num {
          font-family: inherit;
          font-size: clamp(2.5rem, 10vw, 3.5rem);
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px ${p};
          transition: color 0.3s, -webkit-text-stroke 0.3s;
          min-width: 3.5rem;
        }
        .faq-mobile-num.active {
          color: ${p};
          -webkit-text-stroke: 1.5px ${p};
        }
        .faq-mobile-toggle {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1.5px solid ${i};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          color: ${i};
          transition: background 0.25s, color 0.25s;
          shrink: 0;
        }
        .faq-mobile-toggle.active {
          background: ${i};
          color: ${a?"#1E1E1E":"white"};
        }
      `}),h.map((t,r)=>{const o=u.has(t.id);return e.jsxs("div",{className:"faq-mobile-item",style:t.id===5||t.id===7?{paddingTop:"0.75rem"}:{},children:[e.jsx("span",{className:`faq-mobile-bar ${o?"active":""}`}),e.jsxs("button",{onClick:()=>j(t.id),className:"w-full text-left flex items-center gap-4 py-5 px-1",style:{background:"none",border:"none"},children:[e.jsx("span",{className:`faq-mobile-num font-rubik80s ${o?"active":""}`,children:String(r+1).padStart(2,"0")}),e.jsx("h3",{className:"font-space font-bold flex-1 min-w-0 break-words leading-snug",style:{fontSize:"clamp(0.95rem, 3.8vw, 1.1rem)",color:l},children:t.question}),e.jsx("span",{className:`faq-mobile-toggle shrink-0 ${o?"active":""}`,children:o?"−":"+"})]}),e.jsx("div",{ref:s=>c.current[t.id]=s,style:{overflow:"hidden",height:o?"auto":0},children:e.jsx("p",{className:"font-space text-sm leading-relaxed pb-6 px-1",style:{paddingLeft:"calc(3.5rem + 1rem)",color:m},children:t.answer})})]},t.id)})]}),F=()=>e.jsx("div",{className:"desktop-faq",children:e.jsx("div",{className:"relative w-full h-[90vh] mx-auto",children:h.map((t,r)=>{const o=u.has(t.id),s=$[r],I=o?R[t.id]??50:10;return e.jsx("div",{className:"absolute cursor-pointer",style:{left:s==null?void 0:s.left,top:s==null?void 0:s.top,transform:`translate(-50%, -50%) rotate(${s==null?void 0:s.rotation}deg) scale(${s==null?void 0:s.scale})`,zIndex:I},onClick:()=>j(t.id),children:e.jsxs("div",{className:`relative rounded-2xl p-6 shadow-lg backdrop-blur-md transition-transform hover:scale-105 ${T(t.size)}`,style:{background:o?q:N,border:o?`2px solid ${E}`:`1px solid ${g}`},children:[e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"font-space font-bold text-base",style:{color:i},children:String(r+1).padStart(2,"0")}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-space font-bold text-base",style:{color:l},children:t.question}),e.jsx("div",{ref:P=>c.current[t.id]=P,style:{overflow:"hidden",height:o?"auto":0},children:e.jsx("div",{className:"mt-3 pt-3",style:{borderTop:`1px solid ${g}`},children:e.jsx("p",{className:"font-space text-base leading-relaxed",style:{color:k},children:t.answer})})})]})]}),e.jsx("div",{className:"absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",style:{backgroundColor:i,color:a?"#1E1E1E":"white"},children:o?"−":"+"})]})},t.id)})})});return e.jsxs("section",{ref:C,className:"faq-section-root min-h-screen py-16 px-4 md:px-6 relative overflow-visible",style:{backgroundColor:d},children:[e.jsx("style",{children:`
          .mobile-faq { display: block; }
          .desktop-faq { display: none; }
          @media (min-width: 1024px) {
            .mobile-faq { display: none !important; }
            .desktop-faq { display: block !important; }
          }
          @media (max-width: 1023px) {
            .faq-section-root { overflow-x: hidden !important; max-width: 100vw !important; }
            .faq-title-wrap { overflow-x: hidden !important; width: 100% !important; }
          }
        `}),e.jsx("div",{ref:x,className:"absolute inset-0 flex items-center justify-center pointer-events-none z-0",children:e.jsx("div",{className:"font-rubik80s text-[18vw] md:text-[12vw] lg:text-[8vw] text-blue-900 opacity-[0.03] select-none -rotate-12",children:"FAQ"})}),e.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[e.jsxs("div",{className:"faq-title-wrap mb-16 text-center",children:[e.jsxs("h2",{ref:f,className:"font-rubik80s font mb-6 leading-none",style:{fontSize:"clamp(2rem, 12vw, 6rem)",color:l},children:["PREGUNTAS",e.jsx("span",{className:"block mt-2",style:{fontSize:"clamp(1.8rem, 11vw, 5.5rem)",color:i},children:"FRECUENTES*"})]}),e.jsx("p",{className:"font-space text-lg md:text-xl max-w-2xl mx-auto",style:{color:m},children:"*O no tan frecuentes, pero importantes para ti"})]}),e.jsx(O,{}),e.jsx(F,{}),e.jsxs("div",{className:"mt-20 text-center",children:[e.jsx("p",{className:"font-space text-lg mb-6",style:{color:m},children:"¿No encuentras lo que buscas?"}),e.jsx("button",{className:"font-space text-white bg-gradient-to-r from-blue-800 to-purple-400 px-8 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-500 transform hover:scale-105",children:"CONVERSEMOS →"})]})]})]})};export{G as default};
