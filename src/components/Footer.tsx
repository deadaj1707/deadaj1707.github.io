
import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-2 flex items-center">
              Aditya Jha
              <span className="ml-2 text-pink-400 animate-pulse">
                <Heart className="h-4 w-4" />
              </span>
            </h3>
            <p className="text-white/80">Mathematics and Computing</p>
            <p className="text-white/80">Indian Institute of Technology Kharagpur</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-4">
              <a 
                href="https://github.com/deadaj1707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-jha-209745231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:jhaaditya1707@gmail.com" 
                className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919477766255" 
                className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
            
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Aditya Jha. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
