import React, { useState, useEffect, useRef } from 'react';

const WorkGallery = () => {

  const projects = [
    {
      id: 1,
      image: "/path/to/creative-resources-hero.jpg",
      alt: "Creative resources landing page con hero visual y tipografía experimental",
      size: "large" 
    },
    {
      id: 2,
      image: "/path/to/design-system-cards.jpg", 
      alt: "Sistema de diseño con tarjetas y componentes modulares",
      size: "medium"
    },
    {
      id: 3,
      image: "/path/to/wellbeing-hero.jpg",
      alt: "Landing page de bienestar con diseño circular y tipografía bold",
      size: "medium"
    },
    {
      id: 4,
      image: "/path/to/wireframes-collection.jpg",
      alt: "Colección de wireframes y prototipos de aplicaciones móviles",
      size: "large"
    },
    {
      id: 5,
      image: "/path/to/tablet-showcase.jpg",
      alt: "Showcase de diseño web responsivo en tablet con interfaz colorida",
      size: "medium"
    },
    {
      id: 6,
      image: "/path/to/app-screens.jpg",
      alt: "Pantallas de aplicación con diseño moderno y componentes interactivos", 
      size: "small"
    },
    {
      id: 7,
      image: "/path/to/branding-identity.jpg",
      alt: "Sistema de identidad de marca con paleta de colores experimentales",
      size: "small"
    },
    {
      id: 8,
      image: "/path/to/typography-experiment.jpg",
      alt: "Experimento tipográfico con fuentes variables y animaciones",
      size: "medium"
    },
    {
      id: 9,
      image: "/path/to/ui-components.jpg",
      alt: "Librería de componentes UI con estados interactivos",
      size: "small"
    },
    {
      id: 10,
      image: "/path/to/data-visualization.jpg",
      alt: "Dashboard con visualización de datos y gráficos interactivos",
      size: "large"
    },
    {
      id: 11,
      image: "/path/to/motion-graphics.jpg",
      alt: "Elementos de motion graphics y microinteracciones",
      size: "medium"
    },
    {
      id: 12,
      image: "/path/to/experimental-layout.jpg",
      alt: "Layout experimental con grid asimétrico y tipografía espacial",
      size: "small"
    }
  ];

  const [visibleItems, setVisibleItems] = useState(6);
  const heroTextRef = useRef(null);
  const verticalTextRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
   
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      
      
      gsap.fromTo(heroTextRef.current, 
        { 
          scale: 0.8,
          opacity: 0,
          y: 100
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );

     
      gsap.fromTo(verticalTextRef.current, 
        { 
          x: 50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          onComplete: () => {
            //glitch
            gsap.to(verticalTextRef.current, {
              x: Math.random() * 4 - 2,
              y: Math.random() * 4 - 2,
              duration: 0.1,
              repeat: 5,
              yoyo: true,
              ease: "power2.inOut",
              delay: 2,
              onComplete: () => {
                // original
                gsap.to(verticalTextRef.current, {
                  x: 0,
                  y: 0,
                  duration: 0.2
                });
              }
            });
          }
        }
      );

      // Animacion titulo
      gsap.fromTo(titleRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out"
        }
      );

      
      gsap.fromTo(descriptionRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out"
        }
      );

      // Animación galery
      gsap.fromTo(galleryRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.7,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  // GSAP
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gsap) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  
  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, projects.length));
  };

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getHeightClasses = (size) => {
    switch(size) {
      case 'large':
        return 'h-96 md:h-[500px]';
      case 'medium':
        return 'h-64 md:h-80';
      case 'small':
        return 'h-48 md:h-64';
      default:
        return 'h-64';
    }
  };

  return (
    <section className="min-h-screen bg-[#ECECEC] py-12 px-4 md:px-6 relative overflow-hidden">
      
  
      <div 
        ref={heroTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="font-rubik80s text-[20vw] md:text-[15vw] lg:text-[12vw] text-blue-900 opacity-5 select-none leading-none">
          WORK
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        
        <div className="mb-12 text-center">
          <div className="relative">
            
            <h2 
              ref={titleRef}
              className="font-rubik80s text-4xl md:text-6xl lg:text-7xl  text-black mb-4 leading-tight"
            >
              LO QUE HACEMOS NO ES<br />
              DISEÑ*, ES LENGUAJE.
            </h2>
            
            <p 
              ref={descriptionRef}
              className="font-space text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed mb-0 mx-auto text-center"
            >
              Cada proyecto traduce una idea en su forma más viva. Codificamos 
              intención, emoción y función en experiencias digitales que se 
              sienten como si siempre hubieran existido ahí.
            </p>
          </div>
        </div>

       
        <div className="relative">
         
          <div 
            ref={verticalTextRef}
            className="absolute -top-4 right-0 md:right-10 z-20 pointer-events-none select-none"
          >
            <div 
              className="font-rubik80s text-6xl md:text-[24rem] text-blue-600 lg:translate-y-2 leading-[1] md:leading-normal"
            >
              <p>W<br />O<br />R<br />K</p>
            </div>
          </div>

         
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-min">
            {projects.slice(0, visibleItems).map((project, index) => (
              <div 
                key={project.id}
                className={`${getSizeClasses(project.size)} ${getHeightClasses(project.size)} group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-200 hover:scale-[1.02] transition-all duration-500 ease-out`}
              >
               
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="font-space text-xs md:text-sm mb-2 opacity-70">
                      {project.image}
                    </div>
                    <div className="font-space text-xs opacity-60 max-w-[200px] mx-auto leading-tight">
                      {project.alt}
                    </div>
                  </div>
                </div>
                
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-space text-white text-sm font-medium">
                      Proyecto {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

               
                {project.size === 'large' && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-80"></div>
                )}
              </div>
            ))}
          </div>
        </div>

       
        {visibleItems < projects.length && (
          <div className="text-center mt-8">
            <button 
              onClick={loadMore}
              className="group relative font-space text-white bg-black px-8 py-4 rounded-full hover:bg-blue-600 transition-all duration-500 transform hover:scale-105 font-medium"
            >
              <span className="relative z-10">
                MAS→
              </span>
              
           
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>
            
     
            <div className="mt-4 font-space text-sm text-gray-600">
              {visibleItems} de {projects.length} proyectos
            </div>
          </div>
        )}

     
        {visibleItems >= projects.length && (
          <div className="text-center mt-8">
            <div className="font-rubik80s text-2xl md:text-3xl text-black mb-2">
              ESO ES TODO
            </div>
            <div className="font-space text-gray-600">
              Has visto todos nuestros proyectos experimentales
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;