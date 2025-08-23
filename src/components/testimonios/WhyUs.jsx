import React from "react";

export default function WhyUs() {
  return (
    <section className="relative bg-[#ECECEC] min-h-screen overflow-hidden px-5">
      {/* Right side vertical elements - all in one container, perfectly aligned */}
      <div className="absolute right-4 top-0 bottom-0 w-4 flex flex-col justify-between py-20">
        {/* s-tier-studio */}
        <div 
          className="text-gray-500 text-xs tracking-wider whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          s-tier-studio
        </div>
        
        {/* Japanese text */}
        <div 
          className="text-gray-600 text-xs tracking-wider whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          形を与える / 2024年以降
        </div>
        
        {/* Bottom text */}
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

      {/* code&co. - positioned separately with separation from s-tier-studio */}
      <div 
        className="absolute text-gray-600 font-rubik80s text-xl tracking-wide"
        style={{
          top: 'calc(20% + 20px)',
          right: '80px'
        }}
      >
        code&co.
      </div>

      {/* Main header with creative positioning */}
      <div className="pt-32 px-8 md:px-16 relative">
        <div className="relative">
          {/* First line: We are */}
          <div className="flex items-baseline gap-4 mb-2">
            <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight">We</h1>
            <h1 className="text-5xl md:text-7xl font-space font-light tracking-tight">are</h1>
          </div>
          
          {/* Second line: a with form-giving offset to the right */}
          <div className="flex items-baseline relative">
            <h1 className="text-7xl md:text-9xl font-bold font-space tracking-tight">a</h1>
            {/* form-giving positioned to create > shape */}
            <h1 className="text-9xl md:text-9xl ml-12 font-rubik80s md:ml-15 lg:ml-15 italic transform translate-y-2">
              form-giving
            </h1>
          </div>
          
          {/* Third line: agency */}
          <div className="mt-2">
            <h1 className="text-7xl md:text-9xl font-space font-bold tracking-tight">agency</h1>
          </div>
        </div>
      </div>

      {/* Bottom text - right side lower, rotated 90 degrees, aligned to right edge */}
      <div 
        className="absolute bottom-1/4 transform translate-y-1/2 rotate-90 text-gray-700 text-10xl tracking-wider"
        style={{ 
          transformOrigin: 'left center',
          right: '8px'
        }}
      >
       *
      </div>

      {/* Large asterisk background - z-index at back */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <div className="text-gray-200 text-[1000px] md:text-[1000px] lg:text-[800px] leading-none opacity-20">
          *
        </div>
      </div>

      {/* Bottom section with flex row */}
      <div className="absolute bottom-20 left-8 md:left-16 right-8 md:right-16 flex flex-row gap-50 md:gap-50 px-5">
        {/* Left column */}
        <div className="w-1/2 space-y-4 text-gray-800 font-space text-base md:text-lg leading-relaxed whitespace-normal">
          <p>Cada proyecto nace del diálogo. Lo llevamos de la idea a la forma: diseño claro, navegación intuitiva, estructura funcional. Nuestro proceso es modular, flexible y siempre con propósito.</p>
        </div>

        {/* Right column */}
        <div className="w-1/2 text-gray-900">
          <h2 className="text-xl md:text-2xl font-bold font-space tracking-wide mb-4">
            TU VISIÓN → SU FORMA MÁS CLARA.
          </h2>
          <p className="text-base md:text-lg  font-space leading-relaxed">
            Pensamos en sistemas, diseñamos con intención.
          </p>
        </div>
      </div>

      {/* Large asterisk - bottom right corner */}
      <div className="absolute bottom-0 right-0 text-gray-300 text-[150px] md:text-[250px] lg:text-[350px] leading-none select-none pointer-events-none opacity-60">
        *
      </div>
    </section>
  );
}