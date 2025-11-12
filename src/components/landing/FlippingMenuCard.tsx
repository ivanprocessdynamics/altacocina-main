"use client"

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FlippingMenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export const FlippingMenuCard = ({ image, name, description, price }: FlippingMenuCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>("https://placehold.co/800x600?text=Imagen");

  const optimizeImageSrc = (url: string) => {
    try {
      const u = new URL(url);
      const heavyHosts = [
        "commememucho.com",
        "www.demoslavueltaaldia.com",
        "chefeel.com",
        "fungo.es",
        "lasmariacocinillas.com",
        "assets.tmecosys.com",
        "gastrolibreta.com",
        "vinosylicores.com",
        "exquisitoo.com",
        "coycoacademia.com",
        "images.pexels.com",
        "images.unsplash.com",
      ];
      if (heavyHosts.includes(u.hostname)) {
        const hostPath = `${u.hostname}${u.pathname}${u.search}`;
        return `https://wsrv.nl/?url=${hostPath}&w=800&h=600&fit=cover&output=webp`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const src = optimizeImageSrc(image);

  useEffect(() => {
    let cancelled = false;
    const pre = new Image();
    pre.referrerPolicy = "no-referrer";
    pre.onload = () => { if (!cancelled) setCurrentSrc(src); };
    pre.onerror = () => { if (!cancelled) setCurrentSrc("https://placehold.co/800x600?text=Imagen"); };
    pre.src = src;
    return () => { cancelled = true; };
  }, [src]);

  return (
    <div 
      className="w-full aspect-[4/3] [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Card className="w-full h-full border-0 overflow-hidden">
            <CardContent className="p-0 relative h-full flex flex-col justify-end items-center text-center">
              <img 
                src={currentSrc} 
                alt={name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative p-6">
                <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{name}</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="w-full h-full bg-secondary flex flex-col justify-center items-center">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-3">{name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{description}</p>
              <p className="text-lg font-bold">{price}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};