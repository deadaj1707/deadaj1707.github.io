
import React from 'react';
import { Code } from 'lucide-react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "R", "Java", "SQL"]
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Django", "TensorFlow", "NLTK", "PyTorch", "Matplotlib", "Sklearn", "Flask", "ReactJs"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Postman", "AWS", "Jira", "Jenkins", "Grafana", "Docker", "CloudDefence"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-portfolio-card p-6 rounded-lg shadow-sm h-full">
                <h3 className="flex items-center text-xl font-semibold text-portfolio-primary mb-4">
                  <Code className="h-5 w-5 mr-2" />
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
