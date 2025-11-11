import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export const Reconocimientos = () => {
  return (
    <section className="container py-16 md:py-32">
      <ScrollAnimation direction="fade">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif">Críticas y Reconocimientos</h2>
        </div>
      </ScrollAnimation>
      <ScrollAnimation direction="fade" delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary border-0">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl italic leading-relaxed">
                  "ARDE no es solo un restaurante, es un escenario donde el producto, la técnica y la emoción danzan en perfecta armonía. Una experiencia culinaria que redefine el lujo y la vanguardia en Madrid."
                </p>
                <footer className="mt-6 text-lg font-semibold text-primary">
                  — Guía Gastronómica 'El Paladar Fino'
                </footer>
              </blockquote>
              <div className="flex justify-center items-center space-x-8 mt-10 text-muted-foreground">
                <span className="font-bold">GUÍA MICHELIN '24</span>
                <span className="font-bold">SOL REPSOL '24</span>
                <span className="font-bold">TOP 10 GASTRO AD</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </section>
  );
};