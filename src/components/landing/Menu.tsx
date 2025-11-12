import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlippingMenuCard } from "./FlippingMenuCard";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

const menuData = {
  entrantes: [
    { name: "Carpaccio de Atún Rojo", description: "Láminas finas de atún con aceite de trufa, rúcula y parmesano.", image: "https://images.pexels.com/photos/20807274/pexels-photo-20807274.jpeg?auto=compress&cs=tinysrgb&w=400", price: "22€" },
    { name: "Ceviche de Langostinos", description: "Langostinos frescos marinados en cítricos con aguacate y cilantro.", image: "https://images.pexels.com/photos/31495672/pexels-photo-31495672.jpeg?auto=compress&cs=tinysrgb&w=400", price: "24€" },
    { name: "Foie Gras a la Plancha", description: "Escalope de foie con reducción de Pedro Ximénez y higos caramelizados.", image: "https://gourmandiseassia.fr/wp-content/uploads/2023/10/iStock-619056550-1024x683.jpg", price: "28€" },
    { name: "Ensalada de Queso de Cabra Caramelizado", description: "Mix de lechugas con queso de cabra caliente, nueces y vinagreta de miel.", image: "https://www.demoslavueltaaldia.com/sites/default/files/ensalada-de-queso-de-cabra-y-frutos-secos.jpg", price: "18€" },
  ],
  principales: [
    { name: "Solomillo de Ternera al Vino", description: "Solomillo en salsa de vino tinto con puré de patata trufado.", image: "https://www.carniceriademadrid.es/wp-content/uploads/2024/11/beef-tenderloin-elegant-gourmet-dining-nominate-2023-11-27-05-03-44-utc-scaled.jpg", price: "42€" },
    { name: "Cordero Glaseado con Miel", description: "Paletilla de cordero confitada con especias y miel, acompañada de verduras asadas.", image: "https://chefeel.com/chefgeneralfiles/2023/08/kebab-costillas-cordero-servido-pure-papa-1-880x729.jpg", price: "38€" },
    { name: "Risotto de Setas Trufado", description: "Arroz cremoso con setas de temporada y aceite de trufa negra.", image: "https://fungo.es/wp-content/uploads/2017/09/1-1.jpg", price: "32€" },
    { name: "Lubina al Horno", description: "Lubina entera al horno con hierbas mediterráneas y verduras.", image: "https://lasmariacocinillas.com/wp-content/uploads/2015/02/lubinaalhorno1-1.jpg", price: "36€" },
  ],
  postres: [
    { name: "Coulant de Chocolate", description: "Bizcocho caliente con corazón de chocolate fundido y helado de vainilla.", image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/f058cc67b3df69d9d639230500fb261e/Derivates/9cf0db7a63048d16087e4a1cb760752d4947bd3c.jpg", price: "12€" },
    { name: "Tarta de Queso con Frutos Rojos", description: "Tarta de queso estilo Nueva York con coulis de frutos del bosque.", image: "https://gastrolibreta.com/wp-content/uploads/2020/11/dscf5741-2.jpg", price: "11€" },
    { name: "Crème Brûlée de Vainilla", description: "Crema de vainilla con azúcar caramelizada crujiente.", image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/55f8199f-f3cf-4bf7-ac92-8cbdf77567ed/Derivates/3f03f121-2f48-48d7-9d50-e46ccb3aa018.jpg", price: "10€" },
  ],
  bebidas: [
    { name: "Vino Tinto (Reserva)", description: "Selección de grandes reservas españolas.", image: "https://media.istockphoto.com/id/615269202/es/foto/verter-vino-en-copa.jpg?b=1&s=612x612&w=0&k=20&c=RnTakwYnFTxnxpZhgCJKxr1sXIvWEzVZJwrZtGZA8P0=", price: "6€/copa" },
    { name: "Cava Espumoso", description: "Cava brut nature de Cataluña.", image: "https://images.pexels.com/photos/29463857/pexels-photo-29463857.jpeg", price: "7€/copa" },
    { name: "Cóctel de la Casa", description: "Cóctel especial creado por nuestro mixólogo.", image: "https://coycoacademia.com/wp-content/uploads/2024/04/mojito.png", price: "12€" },
    { name: "Agua Mineral", description: "Agua mineral natural o con gas.", image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/01/water-bottle-splash-1296x728-header-1024x575.jpg", price: "3€" },
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