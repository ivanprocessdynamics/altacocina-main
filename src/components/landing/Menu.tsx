import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlippingMenuCard } from "./FlippingMenuCard";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

const menuData = {
  degustacion: [
    { name: "Viaje por la Tierra", description: "Un recorrido en siete pasos por los sabores de nuestra tierra, desde las raíces del bosque hasta las cumbres de la montaña.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop", price: "120€" },
    { name: "Sinfonía del Mar", description: "Una oda a la frescura del océano, con las capturas más selectas del día transformadas en delicadas creaciones.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop", price: "145€" },
    { name: "Esencia de Temporada", description: "Menú que evoluciona con las estaciones, capturando los mejores productos del momento en seis pases creativos.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1887&auto=format&fit=crop", price: "135€" },
  ],
  carta: [
    { name: "Solomillo de Bellota", description: "Cocción a baja temperatura, emulsión de hierbas silvestres y tierra de setas.", image: "https://images.unsplash.com/photo-1598515214211-89d3c7373058?q=80&w=1887&auto=format&fit=crop", price: "45€" },
    { name: "Lubina Salvaje", description: "Lomo curado en cítricos, sobre un lecho de algas yodadas y aire de mar.", image: "https://images.unsplash.com/photo-1622239899136-36d6a05320d9?q=80&w=1887&auto=format&fit=crop", price: "42€" },
    { name: "Ravioli de Centollo", description: "Pasta fresca artesanal rellena de centollo del Cantábrico, con su propio coral y azafrán.", image: "https://images.unsplash.com/photo-1621996346565-e326e22e3924?q=80&w=1780&auto=format&fit=crop", price: "38€" },
    { name: "Pichón de Bresse", description: "Asado en dos cocciones, con puré de castañas y jugo de sus carcasas al Oporto.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop", price: "55€" },
    { name: "Bogavante Azul", description: "Asado suavemente, con emulsión de coral, hinojo marino y caviar oscietra.", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1887&auto=format&fit=crop", price: "68€" },
    { name: "Foie Gras Mi-Cuit", description: "Escalope de foie con reducción de Pedro Ximénez, higos caramelizados y brioche tostado.", image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=1887&auto=format&fit=crop", price: "48€" },
  ],
  postres: [
    { name: "Deconstructi de Limón", description: "Esfera de limón, merengue crujiente, sorbete de albahaca y aire de jengibre.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop", price: "14€" },
    { name: "Chocolate y Texturas", description: "Cinco formas de disfrutar el mejor cacao, desde el crujiente hasta el sedoso.", image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?q=80&w=1887&auto=format&fit=crop", price: "16€" },
    { name: "Tarta Tatin de Manzana", description: "Versión contemporánea con helado de vainilla bourbon y caramelo salado.", image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?q=80&w=1887&auto=format&fit=crop", price: "13€" },
    { name: "Soufflé de Grand Marnier", description: "El clásico francés, preparado al momento con salsa de naranja.", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1887&auto=format&fit=crop", price: "15€" },
  ],
  vinos: [
    { name: "Armonía de Vinos", description: "Una selección de 5 copas de vino elegidas por nuestro sommelier para acompañar el menú degustación.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1887&auto=format&fit=crop", price: "75€" },
    { name: "Grandes Reservas", description: "Explore nuestra selección de vinos icónicos de las mejores bodegas nacionales e internacionales.", image: "https://images.unsplash.com/photo-1529686342540-1b43706f0740?q=80&w=1887&auto=format&fit=crop", price: "Consultar" },
    { name: "Champagne Premium", description: "Selección de champagnes vintage y grandes cuvees de las mejores maisons.", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1887&auto=format&fit=crop", price: "Desde 25€" },
    { name: "Blancos de Autor", description: "Vinos blancos excepcionales de pequeños productores europeos.", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=1887&auto=format&fit=crop", price: "Desde 12€" },
  ],
};

export const Menu = () => {
  return (
    <section id="menu" className="container py-16 md:py-32">
      <ScrollAnimation direction="fade">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif">Nuestra Propuesta Gastronómica</h2>
          <p className="text-muted-foreground mt-4 text-lg">Un viaje para los sentidos.</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <Tabs defaultValue="degustacion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-3xl">
            <TabsTrigger value="degustacion">Menú Degustación</TabsTrigger>
            <TabsTrigger value="carta">Carta</TabsTrigger>
            <TabsTrigger value="postres">Postres</TabsTrigger>
            <TabsTrigger value="vinos">Vinos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="degustacion" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {menuData.degustacion.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="carta" className="mt-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.carta.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="postres" className="mt-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.postres.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vinos" className="mt-8">
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {menuData.vinos.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollAnimation>
    </section>
  );
};