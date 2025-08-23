export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full bg-[#ECECEC] flex items-start justify-start overflow-hidden mb-0">

      {/* Texto gigante en el fondo */}
      <h1 className="absolute text-nowrap top-100 left-1/2 -translate-x-1/3 font-rubik80s text-[10vw] leading-none text-[#0A0F0D] opacity-90 z-0 text-center tracking-tight z-10 ">
        CÓDIG* REAL
      </h1>
      {/* Contenido principal */}
      
      <div className="relative flex flex-row w-[%] w-full gap-10 items-center">
        
        {/* Imagen */}
        <div className="md:w-1/2 h-[500px] md:h-[500px] flex items-center justify-start pl-5">
          <img 
            src="img/FOTONOSOTROS.png" 
            alt="Nosotros" 
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className=" w-1/2 flex flex-col gap-6">
          <p className="text-sm font-space text-[#0A0F0D]">
            Diseño + programación + SEO.
          </p>
          <h2 className="text-2xl md:text-4xl font-space text-[#0A0F0D] leading-tight">
            ESCRIBIMOS{" "}
            <span className="font-bold">CÓDIG* QUE IMPULSA</span>{" "}
            NEGOCIOS ESCALABLES.
          </h2>
        </div>
      </div>

    
    </section>
  );
}