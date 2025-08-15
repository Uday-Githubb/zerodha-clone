import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Signup", href: "#", variant: "signup" as const },
    { name: "About", href: "#", variant: undefined },
    { name: "Products", href: "#", variant: undefined },
    { name: "Pricing", href: "#", variant: undefined },
    { name: "Support", href: "#", variant: undefined },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-zerodha-blue text-xl font-semibold">
              📘 ZERODHA
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.variant === "signup" ? (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white transition-all duration-300"
                  >
                    {item.name}
                  </Button>
                ) : (
                  <a
                    href={item.href}
                    className="text-text-secondary hover:text-zerodha-blue transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.variant === "signup" ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-zerodha-blue text-zerodha-blue hover:bg-zerodha-blue hover:text-white"
                    >
                      {item.name}
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-text-secondary hover:text-zerodha-blue transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};