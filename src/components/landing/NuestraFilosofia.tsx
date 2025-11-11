import { Leaf, Sparkles, GlassWater } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

const filosofia = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Ingrediente de Proximidad",
    description: "Nuestra cocina es un homenaje al producto local y de temporada. Seleccionamos solo los ingredientes más frescos y puros de productores artesanos.",
    direction: "right",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Creatividad y Técnica",
    description: "Cada plato es una obra de arte, donde la técnica de vanguardia se pone al servicio de la creatividad para ofrecer sabores y texturas inesperados.",
    direction: "up",
  },
  {
    icon: <GlassWater className="h-10 w-10 text-primary" />,
    title: "Maridaje Excepcional",
    description: "Nuestra bodega, curada por expertos sumilleres, ofrece una selección de vinos únicos para armonizar y elevar cada paso de su experiencia.",
    direction: "left",
  },
];

export const NuestraFilosofia = () => {
  return (
    <section id="concepto" className="bg-secondary py-16 md:py-32">
      <div className="container">
        <ScrollAnimation direction="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">Nuestra Filosofía</h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">Tres pilares definen la esencia de nuestra propuesta gastronómica.</p>
          </div>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-12">
          {filosofia.map((item, index) => (
            <ScrollAnimation key={item.title} direction={item.direction as any} delay={index * 0.1}>
              <div className="text-center flex flex-col items-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};