import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { useEffect, useState } from "react";

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
              <GalleryImage src={image.src} alt={image.alt} className={image.className} />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

const optimizeImageSrc = (url: string) => {
  try {
    const u = new URL(url);
    const heavyHosts = ["images.pexels.com", "images.unsplash.com", "assets.tmecosys.com", "gastrolibreta.com", "vinosylicores.com", "exquisitoo.com", "coycoacademia.com"];
    if (heavyHosts.includes(u.hostname)) {
      const hostPath = `${u.hostname}${u.pathname}${u.search}`;
      return `https://wsrv.nl/?url=${hostPath}&w=800&h=800&fit=cover&output=webp`;
    }
    return url;
  } catch {
    return url;
  }
};

const FALLBACK_IMG = "https://placehold.co/800x800?text=Imagen";

const GalleryImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [currentSrc, setCurrentSrc] = useState<string>(FALLBACK_IMG);
  const optimized = optimizeImageSrc(src);
  useEffect(() => {
    let cancelled = false;
    const pre = new Image();
    pre.referrerPolicy = "no-referrer";
    pre.onload = () => { if (!cancelled) setCurrentSrc(optimized); };
    pre.onerror = () => { if (!cancelled) setCurrentSrc(FALLBACK_IMG); };
    pre.src = optimized;
    return () => { cancelled = true; };
  }, [optimized]);
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
};