import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle } from "lucide-react";
import educationSvg from "@/assets/index-education.svg";

export const EducationSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <img
              src={educationSvg}
              alt="Free market education illustration"
              className="max-w-full h-auto mx-auto lg:mx-0 hover-lift"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
              Free and open market education
            </h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-zerodha-blue-light">
                    <BookOpen className="w-6 h-6 text-zerodha-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary">Varsity</strong>, the largest online stock market 
                    education book in the world covering everything from the basics to advanced trading.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white transition-all duration-300"
                  >
                    Varsity
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-zerodha-blue-light">
                    <MessageCircle className="w-6 h-6 text-zerodha-blue" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary">TradingQ&A</strong>, the most active trading and 
                    investment community in India for all your market related queries.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white transition-all duration-300"
                  >
                    TradingQ&A
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};