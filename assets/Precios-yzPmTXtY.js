import{r as i,j as e}from"./react-vendor-Cnp1Yea5.js";import{g as n,S as T}from"./gsap-FdPegQMx.js";import"./vendor-qoGMWrsY.js";import"./spline-BMX4pKPO.js";n.registerPlugin(T);function R(){const[a,p]=i.useState(()=>document.documentElement.classList.contains("dark"));return i.useEffect(()=>{const g=new MutationObserver(()=>p(document.documentElement.classList.contains("dark")));return g.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>g.disconnect()},[]),a}function G(){const a=i.useRef(null),p=i.useRef([]),[g,f]=i.useState(-1),[b,h]=i.useState(!1),o=R(),C=o?"#1E1E1E":void 0,N=o?"#2a2a2a":"#ffffff",L=o?"#444444":"#000000",s=o?"#F2F0E4":"#000000",d=o?"#a0a8b8":void 0,w=o?"#F2F0E4":"#000000",v=o?"#1E1E1E":"#ffffff",y=o?"#F2F0E4":"#000000",S=o?"#2a2a2a":"#ffffff",z=o?"#444444":"#000000",[x,m]=i.useState("full"),E="min(calc(100vh - 220px), 640px)",I="min(62svh, 480px)",[k,M]=i.useState(E);i.useEffect(()=>{var c;const t=()=>{const l=window.matchMedia("(max-width: 767px)").matches;M(l?I:E)};t();const r=window.matchMedia("(max-width: 767px)");return(c=r.addEventListener)==null||c.call(r,"change",t),()=>{var l;return(l=r.removeEventListener)==null?void 0:l.call(r,"change",t)}},[]),i.useEffect(()=>{const t=()=>{const r=window.innerHeight;r>=700?m("full"):r>=580?m("noDesc"):r>=460?m("noFeatures"):m("noLetter")};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const j=x==="full",D=x==="full"||x==="noDesc",O=i.useMemo(()=>[{letter:"C",title:`SITIO WEB.2
BÁSICO`,description:"Presencia digital profesional lista para generar prospectos.",features:["✓ Hasta 3 secciones","✓ Diseño responsive","✓ SEO básico incluido","✓ Hosting + SSL 1 año","✓ Formulario de contacto"],price:"$ 1,999 MXN"},{letter:"O",title:`APLICACIÓN WEB.2
PROFESIONAL`,description:"Un sitio completo que posiciona tu marca.",features:["✓ Incluye todo lo anterior","✓ Hasta 6 secciones","✓ SEO optimizado","✓ Dominio + Hosting + SSL","✓ Integración WhatsApp o correo"],price:"$ 6,999 MXN"},{letter:"D",title:`NEGOCIO DIGITAL.2
E-COMMERCE`,description:"Tu tienda online lista para vender 24/7.",features:["✓ Incluye todo lo anterior","✓ Tienda en línea","✓ Pasarela de pagos","✓ Carrito y gestión de pedidos","✓ SEO para productos"],price:"$ 9,999 MXN"},{letter:"E",title:`PLATAFORMA WEB.2
PERSONALIZADA`,description:"Desarrollo a medida para proyectos avanzados.",features:["✓ Incluye todo lo anterior","✓ Funcionalidades a medida","✓ Integraciones API","✓ SEO técnico avanzado","✓ Escalabilidad empresarial"],price:"¡PLATIQUEMOS!"}],[]);i.useEffect(()=>{const t=n.context(()=>{n.set(".pricing-card",{opacity:0,y:100,scale:.9}),n.set(".pricing-letter",{rotation:-10,opacity:.5}),n.to(".pricing-card",{opacity:1,y:0,scale:1,duration:1.2,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:a.current,start:"top 80%",once:!0}}),n.to(".pricing-letter",{rotation:0,opacity:1,duration:1.5,stagger:.1,ease:"elastic.out(1, 0.5)",delay:.3,scrollTrigger:{trigger:a.current,start:"top 80%",once:!0}})},a);return()=>t.revert()},[]);const F=t=>{f(t);const r=p.current[t];r&&n.to(r,{scale:1.02,duration:.45,ease:"power3.out"})},A=()=>{f(-1),p.current.forEach(t=>{t&&n.to(t,{scale:1,duration:.45,ease:"power3.out"})})},B=t=>{const r=encodeURIComponent(`Cotización: ${t.replace(/\n/g," ")}`),c=encodeURIComponent(`Hola, me gustaría recibir una cotización para el plan: ${t.replace(/\n/g," ")}

`);window.location.href=`mailto:hola@codenco.com?subject=${r}&body=${c}`},H=()=>{navigator.clipboard.writeText("hola@codenco.com"),h(!0),setTimeout(()=>h(!1),2e3)};return e.jsxs("section",{ref:a,className:"bg-[#ECECEC] py-16 px-8 sm:px-16",style:{backgroundColor:C},children:[e.jsx("style",{children:`
        @keyframes premium-spin { to { transform: rotate(360deg); } }

        .premium-border-overlay {
          position: absolute; inset: -3px; pointer-events: none;
          z-index: 5; padding: 3px; overflow: hidden;
          border-radius: 0px; box-sizing: border-box;
        }
        .premium-border-overlay::before {
          content: ""; position: absolute; inset: 0;
          background: conic-gradient(from 0deg, #7C3AED, #22D3EE, #34D399, #F59E0B, #EF4444, #7C3AED);
          opacity: .95;
        }
        .premium-border-overlay::after {
          content: ""; position: absolute; inset: 0;
          background: conic-gradient(
            from 0deg,
            rgba(255,255,255,0) 0deg, rgba(255,255,255,0) 300deg,
            rgba(255,255,255,.12) 318deg, rgba(255,255,255,.95) 332deg,
            rgba(255,255,255,.14) 348deg, rgba(255,255,255,0) 360deg
          );
          animation: premium-spin 7.2s linear infinite;
          transform-origin: center; mix-blend-mode: screen;
          filter: blur(3px) saturate(1.35) brightness(1.35);
          opacity: .95; will-change: transform;
        }
        .premium-border-overlay {
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
        }
        .premium-glow {
          position: absolute; inset: -22px; pointer-events: none; z-index: 4;
          background: conic-gradient(
            from 0deg,
            rgba(124,58,237,.55), rgba(34,211,238,.55), rgba(52,211,153,.55),
            rgba(245,158,11,.55), rgba(239,68,68,.55), rgba(124,58,237,.55)
          );
          filter: blur(22px) saturate(1.7) brightness(1.15);
          opacity: .28; mix-blend-mode: screen;
        }

        @media (min-width: 768px) {
          .pricing-row { flex-direction: row !important; }
        }

        @media (min-width: 768px) {
          .pricing-card { transition: none !important; }
          .pricing-letter { margin-top: 0.25rem !important; }
          .pricing-title { font-size: 15px !important; line-height: 1.2 !important; }
          .pricing-desc { font-size: 11px !important; margin-bottom: 6px !important; }
          .pricing-feat { font-size: 11px !important; }
          .pricing-price { font-size: 18px !important; margin-bottom: 8px !important; }
          .pricing-btn { padding-top: 7px !important; padding-bottom: 7px !important; font-size: 11px !important; }
          .pricing-desde { font-size: 10px !important; margin-bottom: 4px !important; }
          .pricing-features-scroll { overflow: hidden; }
          .pricing-inner-top { margin-top: 1.5rem !important; }
          .pricing-content-gap { margin-top: 0.5rem !important; }
        }

        @media (max-width: 767px) {
          .pricing-card { transition: height 0.4s ease, min-height 0.4s ease; }
          .pricing-card        { padding: 12px !important; }
          .pricing-letter      { font-size: 72px !important; }
          .pricing-title       { font-size: 15px !important; line-height: 1.1 !important; }
          .pricing-desc        { font-size: 10px !important; margin-bottom: 8px !important; }
          .pricing-feat        { font-size: 10px !important; }
          .pricing-price       { font-size: 22px !important; }
          .pricing-btn         { padding-top: 8px !important; padding-bottom: 8px !important; font-size: 10px !important; }
          .pricing-content-gap {
            padding-left: 2rem !important;
            padding-right: 1.25rem !important;
            min-height: 0 !important;
          }
          .pricing-title  { text-align: left !important; }
          .pricing-desc   { text-align: left !important; }
          .pricing-feat li { text-align: left !important; }
          .pricing-inner-top { margin-top: 3.5rem !important; }
          .pricing-badge-label { text-align: center !important; letter-spacing: 0.25em !important; }
          .pricing-desc {
            overflow: hidden !important;
            display: -webkit-box !important;
            -webkit-box-orient: vertical !important;
            -webkit-line-clamp: 2 !important;
            text-overflow: ellipsis !important;
          }
          .pricing-features-scroll {
            overflow: auto !important;
            -webkit-overflow-scrolling: touch !important;
            min-height: 0 !important;
          }
        }
      `}),e.jsx("div",{className:"pricing-row flex flex-col gap-4 justify-center items-stretch max-w-7xl mx-auto mb-12",children:O.map((t,r)=>{const c=t.price.includes("6,999"),l=u=>p.current[r]=u;return e.jsxs("div",{ref:l,className:"pricing-card bg-white border-2 border-black px-7 py-6 md:px-6 md:py-5 flex-1 flex flex-col transform-gpu w-full md:w-1/4 hover:cursor-pointer relative will-change-transform",style:{height:k,minHeight:k,backgroundColor:N,borderColor:L},onMouseEnter:()=>F(r),onMouseLeave:A,children:[c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"premium-glow"}),e.jsx("div",{className:"premium-border-overlay"}),e.jsx("div",{className:"absolute top-3 left-1/2 -translate-x-1/2 z-[20] bg-white border border-black px-3 py-1",style:{backgroundColor:S,borderColor:z},children:e.jsx("span",{className:"pricing-badge-label text-[10px] tracking-[0.35em] uppercase font-space text-black block text-center",style:{color:s},children:"MÁS VENDIDO"})})]}),j&&e.jsx("div",{className:"pricing-inner-top mt-9 md:mt-12 flex justify-center",children:e.jsx("div",{className:"pricing-letter text-[150px] md:text-[150px] lg:text-[130px] xl:text-[120px] font-rubik80s text-black leading-none text-center",style:{color:s},children:t.letter})}),e.jsxs("div",{className:"pricing-content-gap mt-6 md:mt-15 lg:mt-12 flex-1 flex flex-col sm:px-8 lg:px-8 min-h-0",children:[e.jsx("div",{className:j?"mb-9":"mb-4",children:e.jsx("h3",{className:"pricing-title text-xl sm:text-2xl md:text-[20px] lg:text-[18px] font-bold font-space leading-tight mt-1 whitespace-pre-line text-black",style:{color:s},children:t.title})}),e.jsx("p",{className:"pricing-desc text-sm font-space mb-4 md:mb-3 text-gray-700",style:{color:d},children:t.description}),D&&e.jsx("div",{className:"flex-grow mb-4 min-h-0 pricing-features-scroll",children:e.jsx("ul",{className:"space-y-2 pricing-feat text-sm font-space",children:t.features.map((u,P)=>e.jsx("li",{className:"text-gray-700",style:{color:d},children:u},P))})})]}),e.jsxs("div",{className:"mt-auto",children:[e.jsx("div",{className:"pricing-desde text-xs font-space text-gray-500 mb-2",style:{color:d},children:"DESDE"}),e.jsx("div",{className:"pricing-price text-2xl sm:text-3xl font-bold font-space text-black mb-4",style:{color:s},children:t.price}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{className:"pricing-btn flex-1 bg-black text-white py-3 px-4 font-bold font-space text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 border-2 border-black hover:scale-105 transform flex items-center justify-center gap-2",style:{backgroundColor:w,color:v,borderColor:y},onClick:()=>B(t.title),title:"Enviar correo",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),"COTIZAR"]}),e.jsx("button",{className:"pricing-btn bg-black text-white py-3 px-4 font-bold font-space text-sm hover:bg-gray-800 transition-all duration-300 border-2 border-black hover:scale-105 transform flex items-center justify-center",style:{backgroundColor:w,color:v,borderColor:y},onClick:H,title:b?"¡Copiado!":"Copiar email",children:b?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),e.jsx("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})]},r)})}),e.jsxs("div",{className:"max-w-5xl md:ml-auto md:mr-12 md:text-right mb-5",children:[e.jsx("h4",{className:"text-xl font-bold font-space text-black mb-2",style:{color:s},children:"Condiciones adicionales*"}),e.jsxs("p",{className:"text-sm font-space text-gray-700 leading-relaxed",style:{color:d},children:["La ronda de cambios incluye ajustes menores posteriores a la entrega. El mantenimiento mensual inicia desde $500 MXN, dependiendo del tipo de proyecto y funcionalidades implementadas. Para más detalles consulta nuestros"," ",e.jsx("a",{href:"#terminos",className:"underline hover:opacity-70 transition",style:{color:s},children:"términos y condiciones"}),"."]})]})]})}export{G as default};
