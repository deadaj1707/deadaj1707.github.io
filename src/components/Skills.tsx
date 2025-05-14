
import React from 'react';
import { Code, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "R", "Java", "SQL"],
    icon: <Code className="h-5 w-5 text-portfolio-accent" />
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Django", "TensorFlow", "NLTK", "PyTorch", "Matplotlib", "Sklearn", "Flask", "ReactJs"],
    icon: <CheckCircle className="h-5 w-5 text-portfolio-teal" />
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Postman", "AWS", "Jira", "Jenkins", "Grafana", "Docker", "CloudDefence"],
    icon: <Code className="h-5 w-5 text-portfolio-secondary" />
  }
];

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-portfolio-card/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full border border-portfolio-card">
                <div className="flex items-center mb-4">
                  <div className="bg-portfolio-card/50 p-2 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-primary">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-full text-sm bg-portfolio-card border border-portfolio-muted text-portfolio-text inline-block m-1 hover:bg-portfolio-muted/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
