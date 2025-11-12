import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { useEffect, useState } from "react";

export const ElChef = () => {
  const RAW_IMG = "https://media.istockphoto.com/id/1419075831/es/foto/enfocado-en-hacer-deliciosa-ensalada-el-chef-est%C3%A1-en-la-cocina-preparando-comida.jpg?b=1&s=612x612&w=0&k=20&c=x_wuOWT6FGUBo9gcetuwVxbIK2nib6i8dc63PmUYw24=";
  const FALLBACK_IMG = "https://placehold.co/800x1000?text=Chef";

  const optimizeImageSrc = (url: string) => {
    try {
      const u = new URL(url);
      const heavyHosts = ["media.istockphoto.com"];
      if (heavyHosts.includes(u.hostname)) {
        const encoded = encodeURIComponent(url);
        return `https://wsrv.nl/?url=${encoded}&w=1200&h=1500&fit=cover&output=webp`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const [currentSrc, setCurrentSrc] = useState<string>(FALLBACK_IMG);
  const optimized = optimizeImageSrc(RAW_IMG);

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
              src={currentSrc}
              alt="El Chef Javier Armesto"
              className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};