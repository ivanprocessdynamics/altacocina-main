import { Clock, MapPin, Phone } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export const Contact = () => {
  return (
    <section id="contacto" className="container py-16 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollAnimation direction="right">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Contacto y Ubicación</h2>
            <p className="text-muted-foreground text-lg">
              Le esperamos para ofrecerle una experiencia gastronómica memorable. No dude en contactarnos para cualquier consulta.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Dirección</h3>
                  <p className="text-muted-foreground">Calle de la Alta Cocina, 12, 28001 Madrid</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Teléfono</h3>
                  <p className="text-muted-foreground">+34 910 000 111</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">Horario</h3>
                  <p className="text-muted-foreground">Martes a Sábado: 19:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="left">
          <div className="rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.640029089983!2d-3.709328323343915!3d40.41536275561088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287a367e293b%3A0x5034381e65525133!2sPlaza%20Mayor!5e0!3m2!1sen!2ses!4v1718886058155!5m2!1sen!2ses" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'invert(90%) grayscale(80%)'}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};