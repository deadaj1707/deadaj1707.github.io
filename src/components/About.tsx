
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-up">
            <p className="text-portfolio-text leading-relaxed">
              I'm a B.S. student in Mathematics and Computing at the Indian Institute of Technology Kharagpur, 
              with a strong academic foundation in probability, statistics, algorithms, and computer science fundamentals.
            </p>
            
            <p className="text-portfolio-text leading-relaxed">
              My professional experience spans backend development, AI research, and quantitative finance. 
              I've worked with companies like Piramal Capital, Nethermind, and WorldQuant, where I've 
              applied my technical skills to solve real-world problems in finance, blockchain, and AI systems.
            </p>
            
            <p className="text-portfolio-text leading-relaxed">
              I'm particularly interested in the intersection of mathematics, computer science, and finance, 
              with a focus on building scalable systems and applying machine learning to complex problems.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-portfolio-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Education Highlights</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Indian Institute of Technology Kharagpur</h4>
                  <p className="text-sm text-portfolio-muted">2021 - 2025</p>
                  <p>B.S. in Mathematics and Computing</p>
                  <p className="text-sm font-medium">CGPA: 8.39/10</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Key Achievements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-portfolio-text">
                    <li>All India Rank of 1252 in JEE Advanced 2021</li>
                    <li>99.7 percentile in JEE Mains 2021</li>
                    <li>INSPIRE Scholarship 2021, Department of Science and Technology (DST), MoST, India</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium">Key Coursework</h4>
                  <p className="text-sm text-portfolio-text">
                    Probability and Statistics, Combinatorics and Graph Theory, Stochastic Processes, 
                    Linear Algebra, Computer Architecture, Design & Analysis of Algorithms, 
                    Programming & Data Structures, Statistics for AI & ML, and DBMS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
