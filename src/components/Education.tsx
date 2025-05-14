
import React from 'react';
import { Book, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 animate-slide-up">
            <div className="bg-portfolio-card rounded-lg p-6 shadow-sm h-full">
              <div className="flex items-start mb-4">
                <GraduationCap className="h-12 w-12 text-portfolio-primary shrink-0 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-primary">
                    Indian Institute of Technology Kharagpur
                  </h3>
                  <p className="text-portfolio-secondary">
                    B.S. in Mathematics and Computing
                  </p>
                  <p className="text-sm text-portfolio-muted mt-1">
                    2021 - 2025
                  </p>
                  <p className="mt-2 font-medium">
                    CGPA: 8.39/10
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-portfolio-card rounded-lg p-6 shadow-sm h-full">
              <h3 className="flex items-center text-xl font-semibold text-portfolio-primary mb-4">
                <Book className="h-5 w-5 mr-2" />
                Key Coursework
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-portfolio-secondary">Mathematics</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Probability and Statistics
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Combinatorics and Graph Theory
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Stochastic Processes
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Linear Algebra
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-portfolio-secondary">Computer Science</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Computer Architecture
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Design & Analysis of Algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Programming & Data Structures
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Statistics for AI & ML
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Database Management Systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Awards and Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-portfolio-card p-5 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-portfolio-primary mb-2">1252</div>
              <p>All India Rank in JEE Advanced 2021</p>
            </div>
            
            <div className="bg-portfolio-card p-5 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-portfolio-primary mb-2">99.7%</div>
              <p>Percentile in JEE Mains 2021</p>
            </div>
            
            <div className="bg-portfolio-card p-5 rounded-lg shadow-sm">
              <div className="text-xl font-bold text-portfolio-primary mb-2">INSPIRE Scholar</div>
              <p>Department of Science and Technology (DST), MoST, India, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
