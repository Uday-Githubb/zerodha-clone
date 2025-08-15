import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import landingImage from "@/assets/landing.png";

export const Hero = () => {
  return (
    <section className="bg-gradient-hero min-h-[600px] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
            >
              Invest in everything
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-zerodha-blue hover:bg-zerodha-blue-hover text-white font-semibold px-8 py-4 text-lg rounded-md hover-lift transition-all duration-300"
              >
                Sign up for free
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={landingImage}
                alt="Zerodha trading platform interface"
                className="w-full h-auto object-contain max-w-lg mx-auto lg:max-w-none"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-zerodha-blue-light rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent rounded-full opacity-10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};