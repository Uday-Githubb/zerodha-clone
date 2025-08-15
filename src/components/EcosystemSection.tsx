import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ecosystemImage from "@/assets/ecosystem.png";
import pressLogos from "@/assets/press-logos.png";

export const EcosystemSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <img
              src={ecosystemImage}
              alt="The Zerodha Universe - Ecosystem of fintech products"
              className="max-w-full h-auto mx-auto hover-lift"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline"
                size="lg"
                className="border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white transition-all duration-300 hover-lift"
              >
                Explore our products
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="text-zerodha-blue hover:bg-zerodha-blue-light transition-all duration-300"
              >
                Try Kite demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Press Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <img
            src={pressLogos}
            alt="Press coverage logos"
            className="max-w-full h-auto mx-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};