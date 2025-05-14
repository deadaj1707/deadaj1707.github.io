import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h2 className="text-lg text-portfolio-secondary font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-portfolio-primary mb-4">
              Aditya Jha
            </h1>
            <p className="text-xl md:text-2xl font-display text-portfolio-secondary mb-6">
              Mathematics and Computing
            </p>
            <p className="text-lg text-portfolio-text/80 mb-8 max-w-2xl">
              A Mathematics and Computing student at IIT Kharagpur with experience in backend development, 
              quantitative research, and AI applications. Currently working as an Agentic Intern at Nethermind 
              and a Quantitative Research Consultant at WorldQuant LLC.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleScrollToExperience}
                className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white rounded-full px-6"
              >
                View Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a href="https://github.com/deadaj1707" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 border-portfolio-muted">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
              
              <a href="https://www.linkedin.com/in/aditya-jha-209745231/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 border-portfolio-muted">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/4c70875d-ebc6-44fe-bb7b-7393af02a57d.png" 
                alt="Aditya Jha" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
