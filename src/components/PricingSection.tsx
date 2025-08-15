import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import pricingEqSvg from "@/assets/pricing-eq.svg";
import otherTradesSvg from "@/assets/other-trades.svg";

export const PricingSection = () => {
  const pricingFeatures = [
    {
      icon: pricingEqSvg,
      title: "Free account",
      subtitle: "opening",
      description: "Get started with zero account opening charges"
    },
    {
      icon: pricingEqSvg,
      title: "Free equity delivery",
      subtitle: "and direct mutual funds",
      description: "No charges for delivery trades and direct mutual fund investments"
    },
    {
      icon: otherTradesSvg,
      title: "Intraday and",
      subtitle: "F&O",
      description: "Flat ₹20 per trade for intraday and F&O transactions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Unbeatable pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-24 h-24 flex items-center justify-center bg-zerodha-blue-light rounded-full group-hover:bg-zerodha-blue-light transition-colors duration-300"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12"
                  />
                </motion.div>
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {feature.title}
              </h3>
              <p className="text-lg font-semibold text-text-primary mb-3">
                {feature.subtitle}
              </p>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white transition-all duration-300 hover-lift"
          >
            See pricing
          </Button>
        </motion.div>
      </div>
    </section>
  );
};