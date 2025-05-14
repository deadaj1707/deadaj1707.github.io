
import React from 'react';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Publications />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
