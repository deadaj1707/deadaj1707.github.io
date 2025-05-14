
import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-white to-portfolio-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-portfolio-card px-4 py-1 rounded-full mb-2">
              <p className="text-portfolio-primary font-medium text-sm">Mathematics & Computing @ IIT Kharagpur</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-portfolio-primary mb-4 leading-tight">
              Hi, I'm <span className="text-portfolio-accent">Aditya Jha</span>
            </h1>
            <p className="text-lg text-portfolio-text/80 mb-8 max-w-2xl">
              A Mathematics and Computing student with experience in backend development, 
              quantitative research, and AI applications. Currently working as an Agentic Intern at Nethermind 
              and a Quantitative Research Consultant at WorldQuant LLC.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleScrollToExperience}
                className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
              >
                View Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a href="https://github.com/deadaj1707" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 border-portfolio-muted shadow-sm hover:shadow-md transition-all">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
              
              <a href="https://www.linkedin.com/in/aditya-jha-209745231/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 border-portfolio-muted shadow-sm hover:shadow-md transition-all">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-portfolio-accent/20 rounded-full blur-xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                <img 
                  src="/lovable-uploads/4c70875d-ebc6-44fe-bb7b-7393af02a57d.png" 
                  alt="Aditya Jha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
