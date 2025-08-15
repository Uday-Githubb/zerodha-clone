import { motion } from "framer-motion";
import { Shield, Users, TrendingUp, CheckCircle } from "lucide-react";

export const TrustSection = () => {
  const features = [
    {
      icon: Users,
      title: "Customer-first always",
      description: "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India."
    },
    {
      icon: Shield,
      title: "No spam or gimmicks",
      description: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace, the way you like."
    },
    {
      icon: TrendingUp,
      title: "The Zerodha universe",
      description: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
    },
    {
      icon: CheckCircle,
      title: "Do better with money",
      description: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

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
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Trust with confidence
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-6">
                <div className="p-3 rounded-full bg-zerodha-blue-light">
                  <feature.icon className="w-8 h-8 text-zerodha-blue" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
              
              {index === 1 && (
                <motion.a
                  href="#"
                  className="inline-block mt-4 text-zerodha-blue hover:text-zerodha-blue-hover font-medium transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  Our philosophies →
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};