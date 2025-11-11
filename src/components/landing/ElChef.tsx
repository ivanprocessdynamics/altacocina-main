import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export const ElChef = () => {
  return (
    <section id="el-chef" className="bg-secondary py-16 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <ScrollAnimation direction="right">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">El Chef</h2>
            <h3 className="text-2xl font-semibold text-primary">Javier Armesto</h3>
            <p className="text-muted-foreground text-lg">
              Con una trayectoria forjada en las cocinas más prestigiosas de Europa, el Chef Javier Armesto trae a ARDE su visión de una gastronomía que respeta la pureza del ingrediente y la eleva a través de la técnica.
            </p>
            <p className="text-muted-foreground text-lg">
              Su filosofía se basa en la innovación constante, la búsqueda de la excelencia y la creación de platos que no solo alimentan el cuerpo, sino que también evocan emociones y cuentan una historia. Cada creación es un reflejo de su pasión por el arte culinario.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="left">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581299854259-21e3a24a1806?q=80&w=1887&auto=format&fit=crop" 
              alt="El Chef Javier Armesto" 
              className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]" 
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};