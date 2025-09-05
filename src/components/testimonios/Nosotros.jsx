import React from "react";

export default function Nosotros() {
  return (
    <section className="relative bg-[#ECECEC] min-h-screen overflow-hidden px-5">
      
      <div className="absolute right-4 top-0 bottom-0 w-4 flex flex-col justify-between py-20">
        
        <div 
          className="text-gray-500 text-xs tracking-wider whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          s-tier-studio
        </div>
        
        
        <div 
          className="text-gray-600 text-xs tracking-wider whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          形を与える / 2024年以降
        </div>
        
       
        <div 
          className="text-gray-700 text-xs tracking-wider whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          we build, we create, we code.
        </div>
      </div>

     
      <div 
        className="absolute text-gray-600 font-rubik80s text-xl tracking-wide"
        style={{
          top: 'calc(20% + 20px)',
          right: '80px'
        }}
      >
        code&co.
      </div>

     
<div className="pt-0 ms:pb-0 md:pt-32 px-8 md:px-16 relative">
  <div className="relative pb-0">
    {/* First line: We are */}
    <div className="flex items-baseline gap-4 mb-0 md:mb-2">
      <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight">We</h1>
      <h1 className="text-5xl md:text-7xl font-space font-light tracking-tight">are</h1>
    </div>
    
  
    <div className="flex items-baseline relative">
      <h1 className="text-7xl md:text-9xl font-bold font-space tracking-tight">a</h1>
      
      <h1 className="text-9xl md:text-9xl ml-4 md:ml-15 lg:ml-15 font-rubik80s italic transform translate-y-2">
        form-giving
      </h1>
    </div>
    

    <div className="mt-0 md:mt-2">
      <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight ">agency</h1>
    </div>
  </div>
</div>

      
      <div 
        className="absolute bottom-1/4 transform translate-y-1/2 rotate-90 text-gray-700 text-10xl tracking-wider"
        style={{ 
          transformOrigin: 'left center',
          right: '8px'
        }}
      >
       *
      </div>

     
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <div className="text-gray-200 text-[1000px] md:text-[1000px] lg:text-[800px] leading-none opacity-20">
          *
        </div>
      </div>

  
      <div className="absolute bottom-20 left-8 md:left-16 right-8 md:right-16 flex flex-row gap-50 md:gap-50 pt-20 px-5">
        {/* Left column */}
        <div className="w-1/2 space-y-4 text-gray-800 font-space text-base md:text-lg leading-relaxed whitespace-normal">
          <p>Cada proyecto nace del diálogo. Lo llevamos de la idea a la forma: diseño claro, navegación intuitiva, estructura funcional. Nuestro proceso es modular, flexible y siempre con propósito.</p>
        </div>

      
        <div className="w-1/2 text-gray-900">
          <h2 className="text-xl md:text-2xl font-bold font-space tracking-wide mb-4">
            TU VISIÓN → SU FORMA MÁS CLARA.
          </h2>
          <p className="text-base md:text-lg font-space leading-relaxed">
            Pensamos en sistemas, diseñamos con intención.
          </p>
        </div>
      </div>

      
      <div className="absolute bottom-0 right-0 text-gray-300 text-[150px] md:text-[250px] lg:text-[350px] leading-none select-none pointer-events-none opacity-60">
        *
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          /* Reduced padding top for header container */
          .pt-0 {
            padding-top: 2rem !important;
          }
          
          /* Title sizes for mobile */
          .text-7xl {
            font-size: 3rem !important;
            line-height: 0.9 !important;
            margin-bottom: 0.25rem !important;
          }
          
          .text-5xl {
            font-size: 2.25rem !important;
            line-height: 0.9 !important;
          }
          
          .text-9xl {
            font-size: 3.5rem !important;
            line-height: 0.9 !important;
          }
          
          /* Reduced gaps between title lines */
          .flex.items-baseline {
            margin-bottom: 0.25rem !important;
          }
          
          .relative .mt-0 {
            margin-top: 0.25rem !important;
          }
          
          /* form-giving spacing adjustment */
          .ml-4 {
            margin-left: 1rem !important;
          }
          
          /* code&co positioning for mobile */
          div[style*="right: 80px"] {
            right: 60px !important;
            font-size: 1rem !important;
          }
          
          /* Background asterisk size for mobile */
          .text-\\[1000px\\] {
            font-size: 400px !important;
          }
          
          /* Bottom right asterisk for mobile */
          .text-\\[150px\\] {
            font-size: 80px !important;
          }
          
          /* Rotated asterisk positioning */
          div[style*="rotate-90"] {
            display: none !important;
          }
          
          /* Bottom section mobile adjustments - closer to titles */
          .absolute.bottom-20 {
            flex-direction: column !important;
            gap: 1.5rem !important;
            bottom: 1rem !important;
            top: auto !important;
            position: static !important;
            margin-top: 1rem !important;
          }
          
          .absolute.bottom-20 > div {
            width: 100% !important;
          }
          
          .absolute.bottom-20 > div:first-child {
            font-size: 0.875rem !important;
            margin-bottom: 0 !important;
          }
          
          .absolute.bottom-20 > div:last-child h2 {
            font-size: 1.125rem !important;
          }
          
          .absolute.bottom-20 > div:last-child p {
            font-size: 0.875rem !important;
          }
        }
        
        @media (min-width: 768px) {
          /* Desktop mantiene todo original */
        }
      `}</style>
    </section>
  );
}