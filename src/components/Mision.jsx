export default function Mision() {
  return (
    <section className="relative h-[80vh] w-full bg-[#ECECEC] flex items-start justify-start overflow-hidden mb-0">

    <h1 className="absolute text-nowrap top-20 md:!top-100 left-1/2 -translate-x-1/3 font-rubik80s text-[10vw] leading-none text-[#0A0F0D] opacity-90 z-0 text-center tracking-tight z-10">
  CÓDIG* REAL
</h1>

      
      <div className="relative flex flex-col md:!flex-row w-full gap-10 items-center">
        
       
        <div className="md:!w-1/2 h-[300px] md:!h-[500px] flex items-center justify-start md:!justify-start md:!pl-5">
          <img 
            src="img/FOTONOSOTROS.webp" 
            alt="Nosotros" 
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

       
        <div className="w-full md:!w-1/2 flex flex-col gap-6 px-4 md:!px-0 text-center md:!text-left pt-10 md:!pt-0">
          <p className="text-sm font-space text-[#0A0F0D]">
            Diseño + programación + SEO.
          </p>
          <h2 className="text-2xl md:!text-4xl font-space text-[#0A0F0D] leading-tight">
            ESCRIBIMOS{" "}
            <span className="font-bold">CÓDIG* QUE IMPULSA</span>{" "}
            NEGOCIOS ESCALABLES.
          </h2>
        </div>

      </div>
    </section>
  );
}