
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-portfolio-text leading-relaxed text-lg">
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

            <div className="flex items-center gap-2">
              <span className="inline-block px-4 py-1 bg-portfolio-card/70 text-portfolio-primary rounded-full text-sm font-medium">Mathematics</span>
              <span className="inline-block px-4 py-1 bg-portfolio-card/70 text-portfolio-secondary rounded-full text-sm font-medium">Computing</span>
              <span className="inline-block px-4 py-1 bg-portfolio-card/70 text-portfolio-accent rounded-full text-sm font-medium">AI</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md border border-portfolio-card/50 h-full">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-6 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-portfolio-accent" />
                Education Highlights
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-accent pl-4 py-1">
                  <h4 className="font-medium text-lg">Indian Institute of Technology Kharagpur</h4>
                  <p className="text-sm text-portfolio-muted mb-1">2021 - 2025</p>
                  <p>B.S. in Mathematics and Computing</p>
                  <p className="text-sm font-medium bg-portfolio-accent/10 inline-block px-2 py-0.5 rounded-md text-portfolio-accent mt-1">CGPA: 8.39/10</p>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center">
                    <Award className="h-4 w-4 mr-1 text-portfolio-secondary" />
                    Key Achievements
                  </h4>
                  <ul className="list-none space-y-2 mt-2">
                    {[
                      "All India Rank of 1252 in JEE Advanced 2021",
                      "99.7 percentile in JEE Mains 2021",
                      "INSPIRE Scholarship 2021, Department of Science and Technology (DST), MoST, India"
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <BadgeCheck className="h-4 w-4 mr-2 text-portfolio-secondary flex-shrink-0 mt-1" />
                        <span className="text-sm text-portfolio-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium flex items-center">
                    <BadgeCheck className="h-4 w-4 mr-1 text-portfolio-teal" />
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Probability & Statistics", 
                      "Combinatorics", 
                      "Graph Theory",
                      "Stochastic Processes", 
                      "Linear Algebra", 
                      "Computer Architecture",
                      "Algorithms", 
                      "Data Structures", 
                      "AI & ML",
                      "DBMS"
                    ].map((course, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-portfolio-card/70 rounded-md text-portfolio-text"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
