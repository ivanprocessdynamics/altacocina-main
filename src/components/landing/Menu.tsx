import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlippingMenuCard } from "./FlippingMenuCard";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

const menuData = {
  entrantes: [
    { name: "Carpaccio de Atún Rojo", description: "Láminas finas de atún con aceite de trufa, rúcula y parmesano.", image: "https://images.pexels.com/photos/20807274/pexels-photo-20807274.jpeg?auto=compress&cs=tinysrgb&w=800", price: "22€" },
    { name: "Ceviche de Langostinos", description: "Langostinos frescos marinados en cítricos con aguacate y cilantro.", image: "https://images.pexels.com/photos/31495672/pexels-photo-31495672.jpeg?auto=compress&cs=tinysrgb&w=800", price: "24€" },
    { name: "Foie Gras a la Plancha", description: "Escalope de foie con reducción de Pedro Ximénez y higos caramelizados.", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Foie_gras_dish.jpg", price: "28€" },
    { name: "Ensalada de Queso de Cabra Caramelizado", description: "Mix de lechugas con queso de cabra caliente, nueces y vinagreta de miel.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Salade_chevre_chaud.jpg", price: "18€" },
  ],
  principales: [
    { name: "Solomillo de Ternera al Vino", description: "Solomillo en salsa de vino tinto con puré de patata trufado.", image: "https://images.pexels.com/photos/32738701/pexels-photo-32738701.jpeg?auto=compress&cs=tinysrgb&w=800", price: "42€" },
    { name: "Cordero Glaseado con Miel", description: "Paletilla de cordero confitada con especias y miel, acompañada de verduras asadas.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Roast_lamb.jpg", price: "38€" },
    { name: "Risotto de Setas Trufado", description: "Arroz cremoso con setas de temporada y aceite de trufa negra.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mushroom_truffle_risotto.jpg", price: "32€" },
    { name: "Lubina al Horno", description: "Lubina entera al horno con hierbas mediterráneas y verduras.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Baked_sea_bass.jpg", price: "36€" },
  ],
  postres: [
    { name: "Coulant de Chocolate", description: "Bizcocho caliente con corazón de chocolate fundido y helado de vainilla.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Chocolate_fondant.jpg", price: "12€" },
    { name: "Tarta de Queso con Frutos Rojos", description: "Tarta de queso estilo Nueva York con coulis de frutos del bosque.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/New_York_cheesecake.jpg", price: "11€" },
    { name: "Crème Brûlée de Vainilla", description: "Crema de vainilla con azúcar caramelizada crujiente.", image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Creme_Brulee.jpg", price: "10€" },
  ],
  bebidas: [
    { name: "Vino Tinto (Reserva)", description: "Selección de grandes reservas españolas.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Glass_of_red_wine.jpg", price: "6€/copa" },
    { name: "Cava Espumoso", description: "Cava brut nature de Cataluña.", image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Champagne_in_glass.jpg", price: "7€/copa" },
    { name: "Cóctel de la Casa", description: "Cóctel especial creado por nuestro mixológo.", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Cocktail_glass.jpg", price: "12€" },
    { name: "Agua Mineral", description: "Agua mineral natural o con gas.", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Water_glass.jpg", price: "3€" },
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
        <Tabs defaultValue="entrantes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-3xl">
            <TabsTrigger value="entrantes">Entrantes</TabsTrigger>
            <TabsTrigger value="principales">Principales</TabsTrigger>
            <TabsTrigger value="postres">Postres</TabsTrigger>
            <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="entrantes" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.entrantes.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="principales" className="mt-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.principales.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="postres" className="mt-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.postres.map((item, index) => (
                <ScrollAnimation key={item.name} delay={index * 0.1}>
                  <FlippingMenuCard {...item} />
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bebidas" className="mt-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.bebidas.map((item, index) => (
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