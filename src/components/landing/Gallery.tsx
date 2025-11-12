import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export const Gallery = () => {
  const images = [
    { src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Interior elegante con mesas finamente decoradas y luz de velas", className: "aspect-square" },
    { src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Camarero sirviendo un entrante gourmet en la mesa", className: "aspect-[3/4]" },
    { src: "https://images.pexels.com/photos/2825225/pexels-photo-2825225.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Plato gourmet de pescado con presentación sofisticada", className: "aspect-square" },
    { src: "https://images.pexels.com/photos/4457115/pexels-photo-4457115.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Comensales degustando un plato gourmet", className: "aspect-[4/3]" },
    { src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Chef emplatando un plato gourmet con detalle artístico", className: "aspect-square" },
    { src: "https://images.pexels.com/photos/2878742/pexels-photo-2878742.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Plato gourmet servido junto a una copa de vino tinto", className: "aspect-[3/4]" },
  ];

  return (
    <section id="galeria" className="container py-16 md:py-32">
      <ScrollAnimation direction="fade">
        <h2 className="text-4xl font-serif text-center mb-12">La Experiencia en Imágenes</h2>
      </ScrollAnimation>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${image.className}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};