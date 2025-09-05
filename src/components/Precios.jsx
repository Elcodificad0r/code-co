import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function PricingSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const pricingData = [
    {
      letter: "C",
      title: "DISEÑ*\nWEB.2",
      description: "Creamos el concepto visual de tu sitio.",
      features: [
        "Prototipo wireframe navegable y mockups realistas.",
        "Perfecto si quieres visualizar antes de construir."
      ],
      price: "$1,500 MXN"
    },
    {
      letter: "O", 
      title: "SITI* WEB.2\nBÁSICO",
      description: "Presencia digital inmediata, sencilla y profesional.",
      features: [
        "✓ 3 secciones (Inicio, Servicios, Contacto)",
        "✓ Hosting + SSL incluido",
        "✓ Formulario de contacto básico"
      ],
      price: "$ 3,500 MXN"
    },
    {
      letter: "D",
      title: "SITI* WEB.2\nINTELIGENTE", 
      description: "Haz que tu sitio hable y venda por ti.",
      features: [
        "✓ Más secciones",
        "✓ Agente con inteligencia artificial",
        "✓ Hosting + Dominio + SSL",
        "✓ Contacto directo por correo",
        "Automatiza tu comunicación y gana tiempo."
      ],
      price: "$ 6,999 MXN"
    },
    {
      letter: "E",
      title: "SITI* WEB.2\nALTAMENTE\nPERSONALIZADO",
      description: "Tu sitio con diseño premium y funciones avanzadas.",
      features: [
        "✓ Incluye todo lo anterior",
        "✓ Elementos 3D interactivos", 
        "✓ Ingreso de usuarios con Google Auth",
        "✓ Agentes de IA personalizados",
        "✓ Animaciones, dashboards y más"
      ],
      price: "$20,000 MXN"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set('.pricing-card', {
        opacity: 0,
        y: 100,
        scale: 0.9
      });

     
      gsap.set('.pricing-letter', {
        rotation: -10,
        opacity: 0.5
      });

    
      gsap.to('.pricing-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });

      
      gsap.to('.pricing-letter', {
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8
      });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
      
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      const distance = Math.abs(index - i);
      let scale = 1;
      
      if (i === index) {
        scale = 1.05;
      } else if (distance === 1) {
        scale = 0.95;
      } else if (distance === 2) {
        scale = 0.9;
      } else {
        scale = 0.85;
      }
      
      gsap.to(card, {
        scale: scale,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
      
    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      gsap.to(card, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  };

  return (
    <section ref={containerRef} className="bg-[#ECECEC] py-16 px-8 sm:px-16">
      
      <div className="flex flex-row gap-4 justify-center items-stretch max-w-7xl mx-auto mb-12 flex-wrap md:flex-nowrap">
        {pricingData.map((item, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="pricing-card bg-white border-2 border-black p-8 flex-1 min-h-[600px] flex flex-col justify-between transform-gpu w-full md:w-1/4 hover:cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            
            <div className="pricing-letter text-[200px] font-rubik80s text-black mb-0 pb-0">
              {item.letter}
            </div>
            
          
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-space leading-tight whitespace-pre-line text-black">
                {item.title}
              </h3>
            </div>
            
           
            <p className="text-sm font-space mb-6 text-gray-700">
              {item.description}
            </p>
            
           
            <div className="flex-grow mb-8">
              <ul className="space-y-2 text-sm font-space">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            
            <div className="mt-auto">
              <div className="text-xs font-space text-gray-500 mb-2">DESDE</div>
              <div className="text-2xl sm:text-3xl font-bold font-space text-black mb-4">
                {item.price}
              </div>
              <button className="w-full bg-black text-white py-3 px-6 font-bold font-space text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 border-2 border-black hover:scale-105 transform">
                COTIZAR
              </button>
            </div>
          </div>
        ))}
      </div>
      
  
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h4 className="text-xl font-bold font-space text-black mb-4">Servicios adicionales</h4>
        <p className="text-sm font-space text-gray-700 leading-relaxed">
          Puedes contratar cualquier servicio por separado: agente de inteligencia artificial, bot automatizado para WhatsApp, dominio 
          .com, hosting seguro, certificado SSL, integración de contacto por email, diseño visual personalizado del sitio.
        </p>
      </div>
      
     
      <div className="text-center">
        <button className="bg-black text-white px-12 py-4 font-bold font-space text-lg tracking-wider hover:bg-gray-800 transition-colors duration-300 border-2 border-black hover:scale-105 transform transition-transform">
          COTIZAR
        </button>
      </div>
    </section>
  );
}