import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop", alt: "Plato gourmet de carne", className: "aspect-square" },
    { src: "https://images.unsplash.com/photo-1504712967355-38a3c8ba0f53?q=80&w=1887&auto=format&fit=crop", alt: "Interior del restaurante", className: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop", alt: "Postre de alta cocina", className: "aspect-square" },
    { src: "https://images.unsplash.com/photo-1541086095046-54f33eb5c5d6?q=80&w=1887&auto=format&fit=crop", alt: "Detalle de la barra del bar", className: "aspect-[4/3]" },
  ];

  return (
    <section id="galeria" className="container py-16 md:py-32">
      <ScrollAnimation direction="fade">
        <h2 className="text-4xl font-serif text-center mb-12">La Experiencia en Imágenes</h2>
      </ScrollAnimation>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${image.className}`}
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};