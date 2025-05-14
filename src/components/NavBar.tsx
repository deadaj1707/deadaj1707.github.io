
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  id: string;
  label: string;
}

const LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
];

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold text-portfolio-primary">
            Aditya Jha
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {LINKS.map(link => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "nav-link",
                  activeSection === link.id && "active"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/deadaj1707" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-jha-209745231/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:jhaaditya1707@gmail.com" 
              className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919477766255" 
              className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-portfolio-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-2">
              {LINKS.map(link => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "py-2 px-4 text-left",
                    activeSection === link.id ? "bg-portfolio-card text-portfolio-primary font-medium" : "text-portfolio-text"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex justify-center space-x-6 mt-4 pt-4 border-t">
                <a 
                  href="https://github.com/deadaj1707" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-jha-209745231/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:jhaaditya1707@gmail.com" 
                  className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+919477766255" 
                  className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
