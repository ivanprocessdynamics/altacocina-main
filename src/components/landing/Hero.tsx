import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen -mt-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <motion.div 
          className="bg-black/30 backdrop-blur-sm p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight drop-shadow-lg">
            Una Experiencia Culinaria Inolvidable
          </h1>
          <p className="text-lg md:text-2xl mt-6 max-w-3xl text-foreground/80 drop-shadow-md">
            Donde la tradición se encuentra con la innovación.
          </p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#menu">
              <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                Ver Menú
              </Button>
            </a>
            <a href="#reservas">
              <Button size="lg" className="w-full sm:w-auto">
                Reservar Mesa
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};