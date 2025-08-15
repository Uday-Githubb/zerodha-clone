import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-20 bg-zerodha-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Open a Zerodha account
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-white text-zerodha-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-md hover-lift transition-all duration-300"
            >
              Sign up for free
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};