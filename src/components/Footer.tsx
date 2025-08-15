import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Products", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Referral programme", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Zerodha.tech", href: "#" },
        { name: "Press & media", href: "#" },
        { name: "Zerodha Cares (CSR)", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact us", href: "#" },
        { name: "Support portal", href: "#" },
        { name: "Z-Connect blog", href: "#" },
        { name: "List of charges", href: "#" },
        { name: "Downloads & resources", href: "#" },
        { name: "Videos", href: "#" },
        { name: "Market overview", href: "#" },
        { name: "How to file a complaint?", href: "#" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Open an account", href: "#" },
        { name: "Fund transfer", href: "#" },
        { name: "60 day challenge", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="text-zerodha-blue text-xl font-semibold mb-6">
              📘 ZERODHA
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              © 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-text-muted hover:text-zerodha-blue transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="col-span-1"
            >
              <h3 className="font-semibold text-text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-text-secondary hover:text-zerodha-blue transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-text-muted leading-relaxed">
            <div>
              <p className="mb-4">
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 
                CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: 
                IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – 
                SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 
                4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, 
                Karnataka, India. For any complaints pertaining to securities broking please write to 
                complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully 
                read the Risk Disclosure Document as prescribed by SEBI | ICF
              </p>
            </div>
            <div>
              <p className="mb-4">
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details 
                for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: 
                Effective Communication, Speedy redressal of the grievances
              </p>
              <p>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};