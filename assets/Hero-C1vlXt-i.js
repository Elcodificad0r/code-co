const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-vendor-Cnp1Yea5.js","assets/vendor-qoGMWrsY.js","assets/spline-BMX4pKPO.js"])))=>i.map(i=>d[i]);
import{_ as C}from"./spline-BMX4pKPO.js";import{r as n,j as e,d as S,R as E}from"./react-vendor-Cnp1Yea5.js";import"./vendor-qoGMWrsY.js";const T=E.lazy(()=>C(()=>import("./react-vendor-Cnp1Yea5.js").then(t=>t.e),__vite__mapDeps([0,1,2])));function L(){const[t,a]=n.useState(()=>document.documentElement.classList.contains("dark"));return n.useEffect(()=>{const s=new MutationObserver(()=>a(document.documentElement.classList.contains("dark")));return s.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>s.disconnect()},[]),t}const I=`
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
`;function B(){const t=L(),[a,s]=n.useState(!1),[u,c]=n.useState(!1),[x,h]=n.useState(!0),b=t?"#1E1E1E":void 0,i=t?"#F2F0E4":"#000000",y=t?"rgba(30,30,30,0.80)":"rgba(255,255,255,0.75)",w=t?"rgba(30,30,30,0.30)":"rgba(255,255,255,0.30)",v=t?"rgba(30,30,30,0.55)":"rgba(236,236,236,0.55)",d=t?"rgba(5,32,245,0.20)":"rgba(255,255,255,0.40)",f=t?"rgba(5,32,245,0.40)":"rgba(255,255,255,0.70)",j=t?"rgba(5,32,245,0.30)":"rgba(255,255,255,0.60)";n.useEffect(()=>{const o=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(o&&["slow-2g","2g","3g"].includes(o.effectiveType)){h(!1);return}"requestIdleCallback"in window?requestIdleCallback(()=>c(!0),{timeout:2e3}):setTimeout(()=>c(!0),1500)},[]);const k=n.useCallback(o=>{var m,g;const l=document.getElementById(o);if(!l)return;const p=(window.scrollY||0)+l.getBoundingClientRect().top-80;if((g=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))!=null&&g.matches){window.scrollTo({top:p,behavior:"auto"});return}window.scrollTo({top:p,behavior:"smooth"})},[]),r={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%"};return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx("title",{children:"Web apps a la medida | Código Real, Rendimiento Real"}),e.jsx("meta",{name:"description",content:"Creamos aplicaciones web rápidas, escalables y sin límites. Código real, rendimiento real."}),e.jsx("meta",{property:"og:title",content:"Landing Pages a Medida"}),e.jsx("meta",{property:"og:description",content:"Sitios web únicos, sin plantillas y sin límites. Desarrollados con código limpio y alto rendimiento."}),e.jsx("meta",{property:"og:image",content:"/img/hero-code.webp"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:"https://tusitio.com"}),x&&e.jsx("link",{rel:"preload",as:"image",href:"/img/lowresherospline.jpg"})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:I}}),e.jsxs("div",{id:"home",className:"hero-section relative bg-lightBg",style:{backgroundColor:b,scrollMarginTop:"0px",height:"100vh",overflow:"hidden"},children:[e.jsx("span",{id:"hero",style:{position:"absolute",top:0}}),e.jsx("img",{src:"img/lowresherospline.jpg",alt:"Hero background",style:{...r,objectFit:"cover",objectPosition:"center",opacity:t?.15:1},loading:"eager",decoding:"sync",fetchPriority:"high"}),u&&e.jsx("div",{style:{...r,opacity:a?1:0,transition:"opacity 600ms ease"},children:e.jsx(n.Suspense,{fallback:null,children:e.jsx(T,{scene:"https://prod.spline.design/ynRlLABAAAV7NTz5/scene.splinecode",onLoad:()=>s(!0)})})}),e.jsx("div",{style:{...r,zIndex:4,backgroundColor:v}}),e.jsx("div",{style:{...r,zIndex:5,background:`linear-gradient(to right, ${y} 0%, ${w} 50%, transparent 100%)`}}),e.jsxs("div",{className:"hero-wrapper pointer-events-none px-6 md:pl-25 leading-none -translate-y-6 md:-translate-y-10",style:{...r,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"72px"},children:[e.jsxs("h1",{className:"hero-text pointer-events-none text-left md:text-center w-full md:w-[70%] text-4xl md:text-7xl font-bold mt-10 md:mt-15 font-space leading-tight",style:{color:i,textShadow:t?"0 5px 20px rgba(0,0,0,0.5)":"0 5px 20px rgba(255,255,255,0.8)"},children:["We don't template, ",e.jsx("br",{}),"we don't limit, ",e.jsx("br",{}),e.jsx("span",{className:"force-rubik text-8xl",children:"we code."})]}),e.jsx("p",{className:"pointer-events-none select-none text-left md:text-center text-base md:text-xl font-normal mt-4 md:mt-1 font-space",style:{color:i},children:"Sitios web rápidos, escalables y sin límites. Código real, rendimiento real."}),e.jsx("div",{className:"pointer-events-auto flex justify-center md:!justify-end mt-8 w-full md:!pr-12",children:e.jsxs("a",{href:"#precios",onClick:o=>{o.preventDefault(),k("precios")},className:"hero-btn pointer-events-auto flex items-center gap-3 group px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-md transition-all duration-300",style:{backgroundColor:d,border:`1px solid ${f}`,boxShadow:"0 0 20px rgba(0,21,255,0.8), 0 10px 40px rgba(255,255,255,0.6)"},onMouseEnter:o=>o.currentTarget.style.backgroundColor=j,onMouseLeave:o=>o.currentTarget.style.backgroundColor=d,children:[e.jsx("span",{className:"font-space text-base md:text-lg tracking-wide",style:{color:i,textShadow:"0 0 8px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.7)"},children:"DESCUBRE MÁS"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 md:h-20 md:w-20 -rotate-45 group-hover:translate-x-4 group-hover:-translate-y-1 transition-transform duration-300",style:{color:i,filter:"drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 25px rgba(255,255,255,0.8))"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 17l8-8m0 0l-8-8m8 8H3"})})]})})]})]})]})}export{B as default};
